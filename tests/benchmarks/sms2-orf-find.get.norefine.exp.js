function v5() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return
}
function v4() {
  try {
    orfFind(document)
  }catch(e$$5) {
    alert("The following error was encountered: " + e$$5)
  }
  return
}
function v3() {
  document.main_form.main_submit.focus();
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
  var lengthOfAlign = arrayOfSequences[0].length;
  if(arrayOfSequences.length < 2) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v13 = i$$1 < arrayOfTitles.length;
  for(;v13;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v740 = arrayOfTitles[i$$1]
    }
    var v364 = v740.search(/\S/) == -1;
    if(!v364) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v834 = arrayOfSequences[i$$1]
      }
      var v610 = v834.search(/\S/) == -1;
      if(!v610) {
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v835 = arrayOfSequences[i$$1]
        }
        v610 = v835.length != lengthOfAlign
      }
      v364 = v610
    }
    if(v364) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v13 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v366 = codonTable.search(/AmAcid/) == -1;
  if(!v366) {
    var v613 = codonTable.search(/Codon/) == -1;
    if(!v613) {
      var v745 = codonTable.search(/Number/) == -1;
      if(!v745) {
        var v837 = codonTable.search(/\/1000/) == -1;
        if(!v837) {
          v837 = codonTable.search(/Fraction\s*\.\./) == -1
        }
        v745 = v837
      }
      v613 = v745
    }
    v366 = v613
  }
  if(v366) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  if(formElement.value.search(/\S/) == -1) {
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
  var v18 = z$$2 < arrayOfPatterns.length;
  for(;v18;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v616 = arrayOfPatterns[z$$2]
    }
    if(v616.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v617 = arrayOfPatterns[z$$2]
    }
    if(moreExpressionCheck(v617) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    v18 = z$$2 < arrayOfPatterns.length
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v27 = j < arrayOfPatterns.length;
  for(;v27;) {
    var v21 = geneticCodeMatchExp;
    var v22 = j;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v747 = arrayOfPatterns[j]
    }
    var v373 = v747.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1295 = eval("introspect(JAM.policy.pFull) { " + v373 + " }")
    }else {
      var v1295 = JAM.call(eval, null, [v373])
    }
    v21[v22] = v1295;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v619 = arrayOfPatterns[j]
    }
    var v1296 = v619.match(/=[a-zA-Z\*]/).toString();
    v23[v24] = v1296;
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v375 = geneticCodeMatchResult[j]
    }
    var v1297 = v375.replace(/=/g, "");
    v25[v26] = v1297;
    j = j + 1;
    v27 = j < arrayOfPatterns.length
  }
  var i$$2 = 0;
  var v34 = i$$2 <= testSequence.length - 3;
  for(;v34;) {
    codon = testSequence.substring(i$$2, i$$2 + 3);
    j = 0;
    var v32 = j < geneticCodeMatchExp.length;
    for(;v32;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v621 = geneticCodeMatchExp[j]
      }
      if(codon.search(v621) != -1) {
        if(oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      v32 = j < geneticCodeMatchExp.length
    }
    if(oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v34 = i$$2 <= testSequence.length - 3
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v36 = z$$3 < arrayOfPatterns$$1.length;
  for(;v36;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v623 = arrayOfPatterns$$1[z$$3]
    }
    if(v623.search(/[^acdefghiklmnpqrstvwyz]/i) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    v36 = z$$3 < arrayOfPatterns$$1.length
  }
  var i$$3 = 0;
  var v40 = i$$3 < arrayOfPatterns$$1.length;
  for(;v40;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v624 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v624 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v39 = j$$1 < arrayOfPatterns$$1.length;
    for(;v39;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v625 = arrayOfPatterns$$1[j$$1]
      }
      if(v625.search(re) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      v39 = j$$1 < arrayOfPatterns$$1.length
    }
    i$$3 = i$$3 + 1;
    v40 = i$$3 < arrayOfPatterns$$1.length
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v43 = z$$4 < arrayOfPatterns$$2.length;
  for(;v43;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v626 = arrayOfPatterns$$2[z$$4]
    }
    if(v626.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v627 = arrayOfPatterns$$2[z$$4]
    }
    if(moreExpressionCheck(v627) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    v43 = z$$4 < arrayOfPatterns$$2.length
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  if(getSequenceFromFasta(text$$7).replace(/[^A-Za-z]/g, "").length > maxInput) {
    alert("Please enter a sequence consisting of less than or equal to " + maxInput + " characters.");
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  if(text$$8.length > maxInput$$1) {
    alert("Please enter text consisting of less than or equal to " + maxInput$$1 + " characters.");
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
  JAM.call(v48.write, v48, ["</form>"]);
  return true
}
function closePre() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</div>"]);
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v52 = outputWindow.document;
  JAM.call(v52.write, v52, ["</body>\n</html>\n"]);
  outputWindow.status = "Done.";
  outputWindow.document.close();
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
  if(alignArray.length < 3) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v56 = i$$4 < alignArray.length;
  for(;v56;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v629 = alignArray[i$$4]
    }
    if(v629.search(/[^\s]+\s/) == -1) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    v56 = i$$4 < alignArray.length
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
  if(sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/) != -1) {
    var v58 = matchArray = re$$1.exec(sequenceData);
    for(;v58;) {
      arrayOfFasta.push(matchArray[0]);
      v58 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if(fastaSequenceTitle.search(/[^\s]/) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"'
  }
  stringToReturn = stringToReturn + ' starting "' + sequence$$2.substring(0, 10) + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if(fastaSequenceTitleOne.search(/[^\s]/) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"'
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + sequenceOne.substring(0, 10) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if(fastaSequenceTitleTwo.search(/[^\s]/) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"'
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + sequenceTwo.substring(0, 10) + '"';
  return'<div class="info">' + stringToReturn$$1 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v76 = j$$2 < arrayOfPatterns$$3.length;
  for(;v76;) {
    var v74 = geneticCodeMatchExp$$1;
    var v75 = j$$2;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v749 = arrayOfPatterns$$3[j$$2]
    }
    var v422 = v749.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1298 = eval("introspect(JAM.policy.pFull) { " + v422 + " }")
    }else {
      var v1298 = JAM.call(eval, null, [v422])
    }
    v74[v75] = v1298;
    j$$2 = j$$2 + 1;
    v76 = j$$2 < arrayOfPatterns$$3.length
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v82 = j$$3 < arrayOfPatterns$$4.length;
  for(;v82;) {
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v631 = arrayOfPatterns$$4[j$$3]
    }
    var v1299 = v631.match(/=[a-zA-Z\*]/).toString();
    v78[v79] = v1299;
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v426 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1300 = v426.replace(/=/g, "");
    v80[v81] = v1300;
    j$$3 = j$$3 + 1;
    v82 = j$$3 < arrayOfPatterns$$4.length
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if(fastaSequenceTitle$$1.search(/[^\s]/) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"'
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + sequence$$3.substring(0, 10) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if(fastaSequenceTitle$$2.search(/[^\s]/) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"'
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + sequence$$4.substring(0, 10) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if(fastaSequenceTitleOne$$1.search(/[^\s]/) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"'
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + sequenceOne$$1.substring(0, 10) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if(fastaSequenceTitleTwo$$1.search(/[^\s]/) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"'
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + sequenceTwo$$1.substring(0, 10) + '"';
  return'<div class="info">' + stringToReturn$$4 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v103 = j$$4 < lengthOut;
  for(;v103;) {
    tempNum = Math.floor(Math.random() * components.length);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v103 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  if(sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/) != -1) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if(sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/) != -1) {
    fastaTitle = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "").toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v454 = expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1;
  if(!v454) {
    var v634 = expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1;
    if(!v634) {
      var v751 = expressionToCheck.search(/\[\]/) != -1;
      if(!v751) {
        var v840 = expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1;
        if(!v840) {
          var v917 = expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1;
          if(!v917) {
            var v971 = expressionToCheck.search(/\|\|/) != -1;
            if(!v971) {
              var v1025 = expressionToCheck.search(/\/\|/) != -1;
              if(!v1025) {
                var v1057 = expressionToCheck.search(/\|\//) != -1;
                if(!v1057) {
                  var v1085 = expressionToCheck.search(/\[.\]/) != -1;
                  if(!v1085) {
                    var v1113 = expressionToCheck.search(/\</) != -1;
                    if(!v1113) {
                      v1113 = expressionToCheck.search(/\>/) != -1
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
  if(v454) {
    return false
  }
  return true
}
function openForm() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<form action="">\n']);
  return true
}
function openPre() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ["<pre>"]);
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
  outputWindow.focus();
  var v112 = outputWindow.document;
  JAM.call(v112.write, v112, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isColor) {
    var v114 = outputWindow.document;
    JAM.call(v114.write, v114, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"])
  }else {
    var v116 = outputWindow.document;
    JAM.call(v116.write, v116, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v118 = outputWindow.document;
  JAM.call(v118.write, v118, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
  outputWindow.focus();
  var v120 = outputWindow.document;
  JAM.call(v120.write, v120, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isBackground) {
    var v122 = outputWindow.document;
    JAM.call(v122.write, v122, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"])
  }else {
    var v124 = outputWindow.document;
    JAM.call(v124.write, v124, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v126 = outputWindow.document;
  JAM.call(v126.write, v126, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"]);
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
  if(dnaSequence$$1.search(/./) != -1) {
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
  theNumber = tempString + theNumber + " ";
  sequenceToAppend = sequenceToAppend + theNumber + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  if(testArray[0] != testString) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if(testString.search(re$$2) == -1) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    if(JAM.isEval(eval)) {
      re$$2 = eval("introspect(JAM.policy.pFull) { " + "Exception handling not supported. Check browser compatibility page." + " }")
    }else {
      re$$2 = JAM.call(eval, null, ["Exception handling not supported. Check browser compatibility page."])
    }
  }catch(e$$4) {
    caughtException = true
  }
  if(!caughtException) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  if(testString != "1X2X3X") {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  if(testNum.toFixed(3) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  if(testNum.toPrecision(5) != 2489.8) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  if(theNumber$$1.search(/\d/) == -1) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v469 = emblFile.search(/ID/) == -1;
  if(!v469) {
    var v645 = emblFile.search(/AC/) == -1;
    if(!v645) {
      var v762 = emblFile.search(/DE/) == -1;
      if(!v762) {
        v762 = emblFile.search(/SQ/) == -1
      }
      v645 = v762
    }
    v469 = v645
  }
  if(v469) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if(theNumber$$2.search(/\d/) == -1) {
    alert("Please enter a number.");
    return false
  }
  if(theNumber$$2 > maxInput$$2) {
    alert("Please enter a number less than or equal to " + maxInput$$2 + ".");
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  if(dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  if(proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v474 = genBankFile.search(/LOCUS/) == -1;
  if(!v474) {
    var v648 = genBankFile.search(/DEFINITION/) == -1;
    if(!v648) {
      var v765 = genBankFile.search(/ACCESSION/) == -1;
      if(!v765) {
        v765 = genBankFile.search(/ORIGIN/) == -1
      }
      v648 = v765
    }
    v474 = v648
  }
  if(v474) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v475 = genBankFile$$1.search(/LOCUS/) == -1;
  if(!v475) {
    var v651 = genBankFile$$1.search(/DEFINITION/) == -1;
    if(!v651) {
      var v768 = genBankFile$$1.search(/ACCESSION/) == -1;
      if(!v768) {
        v768 = genBankFile$$1.search(/ORIGIN/) == -1
      }
      v651 = v768
    }
    v475 = v651
  }
  if(v475) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  if(genBankFile$$1.search(/FEATURES {13}/) == -1) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v477 = emblFile$$1.search(/ID/) == -1;
  if(!v477) {
    var v654 = emblFile$$1.search(/AC/) == -1;
    if(!v654) {
      var v771 = emblFile$$1.search(/DE/) == -1;
      if(!v771) {
        v771 = emblFile$$1.search(/SQ/) == -1
      }
      v654 = v771
    }
    v477 = v654
  }
  if(v477) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  if(emblFile$$1.search(/^FT/m) == -1) {
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
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v154 = j$$6 <= basePerLine / groupSize;
    for(;v154;) {
      var v153 = k < groupSize;
      for(;v153;) {
        lineOfText = lineOfText + text$$10.charAt(k + i$$5);
        k = k + 1;
        v153 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v154 = j$$6 <= basePerLine / groupSize
    }
    var v155 = outputWindow.document;
    JAM.call(v155.write, v155, [lineOfText + "\n"]);
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
    if(v482) {
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
    var v167 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for(;v167;) {
      var v162 = k$$1 < groupSize$$2;
      for(;v162;) {
        if(i$$6 + k$$1 >= stopBase$$2) {
          break
        }
        lineOfText$$1 = lineOfText$$1 + text$$12.charAt(k$$1 + i$$6);
        k$$1 = k$$1 + 1;
        v162 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      if(numberPosition$$1 == "above") {
        aboveNum = aboveNum + rightNum(adjustNumbering(i$$6, numberingAdjustment), "", groupSize$$2, tabIn$$3)
      }
      if(i$$6 >= stopBase$$2) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      v167 = j$$7 <= basePerLine$$2 / groupSize$$2
    }
    if(numberPosition$$1 == "left") {
      var v168 = outputWindow.document;
      JAM.call(v168.write, v168, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"]);
      if(strands$$1 == "two") {
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"]);
        var v172 = outputWindow.document;
        JAM.call(v172.write, v172, ["\n"])
      }
    }else {
      if(numberPosition$$1 == "right") {
        var v174 = outputWindow.document;
        JAM.call(v174.write, v174, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
        if(strands$$1 == "two") {
          var v176 = outputWindow.document;
          JAM.call(v176.write, v176, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
          var v178 = outputWindow.document;
          JAM.call(v178.write, v178, ["\n"])
        }
      }else {
        if(numberPosition$$1 == "above") {
          var v180 = outputWindow.document;
          JAM.call(v180.write, v180, [aboveNum + "\n"]);
          var v182 = outputWindow.document;
          JAM.call(v182.write, v182, [lineOfText$$1 + "\n"]);
          if(strands$$1 == "two") {
            var v184 = outputWindow.document;
            JAM.call(v184.write, v184, [complement(lineOfText$$1) + "\n"]);
            var v186 = outputWindow.document;
            JAM.call(v186.write, v186, ["\n"])
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
    var v200 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for(;v200;) {
      var v195 = k$$2 < groupSize$$3;
      for(;v195;) {
        if(i$$7 + k$$2 >= stopBase$$3) {
          break
        }
        lineOfText$$2 = lineOfText$$2 + text$$13.charAt(k$$2 + i$$7);
        k$$2 = k$$2 + 1;
        v195 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      if(numberPosition$$2 == "above") {
        aboveNum$$1 = aboveNum$$1 + rightNum(i$$7, "", groupSize$$3, tabIn$$4)
      }
      if(i$$7 >= stopBase$$3) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      v200 = j$$8 <= basePerLine$$3 / groupSize$$3
    }
    if(numberPosition$$2 == "left") {
      var v201 = outputWindow.document;
      JAM.call(v201.write, v201, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"])
    }else {
      if(numberPosition$$2 == "right") {
        var v203 = outputWindow.document;
        JAM.call(v203.write, v203, [lineOfText$$2 + i$$7 + "\n"])
      }else {
        if(numberPosition$$2 == "above") {
          var v205 = outputWindow.document;
          JAM.call(v205.write, v205, [aboveNum$$1 + "\n"]);
          var v207 = outputWindow.document;
          JAM.call(v207.write, v207, [lineOfText$$2 + "\n"])
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
  var v499 = sequence$$13.length <= firstIndexToMutate;
  if(!v499) {
    var v665 = lastIndexToMutate < 0;
    if(!v665) {
      v665 = lastIndexToMutate <= firstIndexToMutate
    }
    v499 = v665
  }
  if(v499) {
    numMut = 0
  }
  var i$$8 = 0;
  var v221 = i$$8 < numMut;
  for(;v221;) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    var v501 = randNum < firstIndexToMutate;
    if(!v501) {
      v501 = randNum > lastIndexToMutate
    }
    if(v501) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v221 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      componentsIndex = Math.round(Math.random() * components$$1.length);
      if(componentsIndex == components$$1.length) {
        componentsIndex = 0
      }
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v505 = components$$1[componentsIndex]
      }
      if(v505 != currentChar) {
        needNewChar = false
      }
    }
    var v506 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v507 = components$$1[componentsIndex]
    }
    sequence$$13 = v506 + v507 + sequence$$13.substring(randNum + 1, sequence$$13.length);
    i$$8 = i$$8 + 1;
    v221 = i$$8 < numMut
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, [addReturns(sequence$$13)]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v228 = j$$9 < lengthOut$$1;
  for(;v228;) {
    tempNum$$1 = Math.floor(Math.random() * components$$2.length);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if(sequence$$14.length == 60) {
      var v225 = outputWindow.document;
      JAM.call(v225.write, v225, [sequence$$14 + "\n"]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v228 = j$$9 < lengthOut$$1
  }
  var v229 = outputWindow.document;
  JAM.call(v229.write, v229, [sequence$$14 + "\n"]);
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
  if(dnaConformation == "circular") {
    shiftValue = sequence$$15.substring(0, lookAhead).length;
    sequence$$15 = sequence$$15.substring(sequence$$15.length - lookAhead, sequence$$15.length) + sequence$$15 + sequence$$15.substring(0, lookAhead);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v235 = outputWindow.document;
  JAM.call(v235.write, v235, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v236 = outputWindow.document;
  JAM.call(v236.write, v236, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"]);
  var i$$9 = 0;
  var v253 = i$$9 < arrayOfItems.length;
  for(;v253;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v516 = arrayOfItems[i$$9]
    }
    matchExp = v516.match(/\/.+\//) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v778 = arrayOfItems[i$$9]
    }
    cutDistance = parseFloat(v778.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    var v245 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v245;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v518 = matchPosition >= lowerLimit;
      if(v518) {
        v518 = matchPosition < upperLimit
      }
      if(v518) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v245 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    if(tempString$$1.search(/\d/) != -1) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    if(timesFound == 0) {
      backGroundClass = "none"
    }else {
      if(timesFound == 1) {
        backGroundClass = "one"
      }else {
        if(timesFound == 2) {
          backGroundClass = "two"
        }else {
          if(timesFound == 3) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v251 = outputWindow.document;
    var v977 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1091 = arrayOfItems[i$$9]
    }
    JAM.call(v251.write, v251, [v977 + v1091.match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v253 = i$$9 < arrayOfItems.length
  }
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v256 = outputWindow.document;
  JAM.call(v256.write, v256, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"]);
  var i$$10 = 0;
  var v266 = i$$10 < arrayOfItems$$1.length;
  for(;v266;) {
    var tempNumber = 0;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v527 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = v527.match(/\/[^\/]+\//) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(sequence$$16.search(matchExp$$1) != -1) {
      tempNumber = sequence$$16.match(matchExp$$1).length
    }
    var percentage = 0;
    var v675 = originalLength + 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v860 = arrayOfItems$$1[i$$10]
    }
    if(v675 - parseFloat(v860.match(/\d+/)) > 0) {
      var v261 = 100 * tempNumber;
      var v530 = originalLength + 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v782 = arrayOfItems$$1[i$$10]
      }
      percentage = v261 / (v530 - parseFloat(v782.match(/\d+/)))
    }
    var v264 = outputWindow.document;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1092 = arrayOfItems$$1[i$$10]
    }
    JAM.call(v264.write, v264, ["<tr><td>" + v1092.match(/\([^\(]+\)\b/).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n"]);
    i$$10 = i$$10 + 1;
    v266 = i$$10 < arrayOfItems$$1.length
  }
  var v267 = outputWindow.document;
  JAM.call(v267.write, v267, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v274 = sequence$$17.length > 0;
  for(;v274;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = Math.floor(Math.random() * maxNum$$1);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    tempString2 = sequence$$17.substring(randNum$$1 + 1, sequence$$17.length);
    sequence$$17 = tempString1 + tempString2;
    if(tempSeq.length == 60) {
      var v271 = outputWindow.document;
      JAM.call(v271.write, v271, [tempSeq + "\n"]);
      tempSeq = ""
    }
    v274 = sequence$$17.length > 0
  }
  var v275 = outputWindow.document;
  JAM.call(v275.write, v275, [tempSeq + "\n"]);
  return true
}
function getGeneticCodeString(type$$25) {
  var v538 = type$$25.toLowerCase() == "standard";
  if(!v538) {
    v538 = type$$25.toLowerCase() == "transl_table=1"
  }
  if(v538) {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=2") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]g[agr]/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|ag[agr]/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=3") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/[tu][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]g[agr]/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=4") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=5") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=6") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]ga/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=9") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=10") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=11") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=12") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=13") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=14") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[atcuwmhy]/=Y," + "/[tu]ag/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=15") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]|[tu]ag|[tcuy]ag/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agr]a/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=16") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agr]a/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=21") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=22") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[cgtyskb]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agcrsmv]a/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=23") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]gg/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function orfFind(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  if(testScript() == false) {
    return false
  }
  var v700 = theDocument.forms[0].elements[8].options;
  var v701 = theDocument.forms[0].elements[8].selectedIndex;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v573 = v700[v701]
  }
  var geneticCode = getGeneticCodeString(v573.value);
  geneticCode = geneticCode.split(/,/);
  var enteredNumber = theDocument.forms[0].elements[7].value.replace(/[^\d]/g, "");
  var v575 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v575) {
    var v704 = checkFormElement(theDocument.forms[0].elements[7]) == false;
    if(!v704) {
      var v806 = verifyDigits(enteredNumber) == false;
      if(!v806) {
        v806 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false
      }
      v704 = v806
    }
    v575 = v704
  }
  if(v575) {
    return false
  }
  if(checkGeneticCode(geneticCode) == false) {
    return false
  }
  newDna = getSequenceFromFasta(theDocument.forms[0].elements[0].value);
  title$$9 = getTitleFromFasta(theDocument.forms[0].elements[0].value);
  verifyDna(newDna);
  newDna = removeNonDna(newDna);
  openWindow("ORF Finder");
  var v318 = outputWindow.document;
  JAM.call(v318.write, v318, [getInfoFromTitleAndSequence(title$$9, newDna)]);
  openPre();
  var v810 = theDocument.forms[0].elements[5].options;
  var v811 = theDocument.forms[0].elements[5].selectedIndex;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v708 = v810[v811]
  }
  if(v708.value == "all") {
    var v709 = theDocument.forms[0].elements[4].options;
    var v710 = theDocument.forms[0].elements[4].selectedIndex;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v580 = v709[v710]
    }
    var v320 = v580.value;
    var v711 = theDocument.forms[0].elements[6].options;
    var v712 = theDocument.forms[0].elements[6].selectedIndex;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v581 = v711[v712]
    }
    writeOrfs(newDna, geneticCode, v320, 0, v581.value, enteredNumber);
    var v713 = theDocument.forms[0].elements[4].options;
    var v714 = theDocument.forms[0].elements[4].selectedIndex;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v582 = v713[v714]
    }
    var v322 = v582.value;
    var v715 = theDocument.forms[0].elements[6].options;
    var v716 = theDocument.forms[0].elements[6].selectedIndex;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v583 = v715[v716]
    }
    writeOrfs(newDna, geneticCode, v322, 1, v583.value, enteredNumber);
    var v717 = theDocument.forms[0].elements[4].options;
    var v718 = theDocument.forms[0].elements[4].selectedIndex;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v584 = v717[v718]
    }
    var v324 = v584.value;
    var v719 = theDocument.forms[0].elements[6].options;
    var v720 = theDocument.forms[0].elements[6].selectedIndex;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v585 = v719[v720]
    }
    writeOrfs(newDna, geneticCode, v324, 2, v585.value, enteredNumber)
  }else {
    var v721 = theDocument.forms[0].elements[4].options;
    var v722 = theDocument.forms[0].elements[4].selectedIndex;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v586 = v721[v722]
    }
    var v326 = v586.value;
    var v723 = theDocument.forms[0].elements[5].options;
    var v724 = theDocument.forms[0].elements[5].selectedIndex;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v587 = v723[v724]
    }
    var v327 = v587.value;
    var v725 = theDocument.forms[0].elements[6].options;
    var v726 = theDocument.forms[0].elements[6].selectedIndex;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v588 = v725[v726]
    }
    writeOrfs(newDna, geneticCode, v326, v327, v588.value, enteredNumber)
  }
  closePre();
  closeWindow();
  return true
}
function writeOrfs(dnaSequence$$3, geneticCode$$1, startCodons, startPos, strand, theLength) {
  function v2(str$$8, p1$$2, offset$$14, s$$4) {
    return" " + p1$$2 + " "
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
  var v332 = j$$10 < geneticCodeMatchExp$$2.length;
  for(;v332;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v590 = geneticCodeMatchResult$$2[j$$10]
    }
    if(v590 == "*") {
      geneticCodeMatchExpStop = geneticCodeMatchExp$$2[j$$10];
      break
    }
    j$$10 = j$$10 + 1;
    v332 = j$$10 < geneticCodeMatchExp$$2.length
  }
  var startRe = new RegExp(startCodons, "i");
  var sequenceToTranslate;
  startPos = parseInt(startPos);
  var rf = startPos + 1;
  theLength = parseInt(theLength);
  if(strand == "reverse") {
    dnaSequence$$3 = reverse(complement(dnaSequence$$3))
  }
  var v353 = i$$11 <= dnaSequence$$3.length - 3;
  for(;v353;) {
    i$$11 = startPos;
    var v352 = i$$11 <= dnaSequence$$3.length - 3;
    for(;v352;) {
      codon$$1 = dnaSequence$$3.substring(i$$11, i$$11 + 3);
      var v594 = startCodons != "any";
      if(v594) {
        var v729 = foundStart == false;
        if(v729) {
          v729 = codon$$1.search(startRe) == -1
        }
        v594 = v729
      }
      if(v594) {
        break
      }
      foundStart = true;
      if(codon$$1.search(geneticCodeMatchExpStop) != -1) {
        foundStop = true
      }
      proteinLength = proteinLength + 1;
      var v596 = foundStop;
      if(v596) {
        v596 = proteinLength < theLength
      }
      if(v596) {
        break
      }
      var v730 = foundStop;
      if(v730) {
        v730 = proteinLength >= theLength
      }
      var v597 = v730;
      if(!v597) {
        var v731 = i$$11 >= dnaSequence$$3.length - 5;
        if(v731) {
          v731 = proteinLength >= theLength
        }
        v597 = v731
      }
      if(v597) {
        sequenceToTranslate = dnaSequence$$3.substring(startPos, i$$11 + 3);
        var v340 = outputWindow.document;
        JAM.call(v340.write, v340, ["&gt;ORF number " + (k$$3 + 1) + " in reading frame " + rf + " on the " + strand + " strand extends from base " + (startPos + 1) + " to base " + (i$$11 + 3) + ".\n"]);
        var v342 = outputWindow.document;
        JAM.call(v342.write, v342, [addReturns(sequenceToTranslate) + "\n\n"]);
        var v344 = outputWindow.document;
        JAM.call(v344.write, v344, ["&gt;Translation of ORF number " + (k$$3 + 1) + " in reading frame " + rf + " on the " + strand + " strand.\n"]);
        sequenceToTranslate = sequenceToTranslate.replace(/(...)/g, v2);
        var m = 0;
        var v348 = m < geneticCodeMatchExp$$2.length;
        for(;v348;) {
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v346 = geneticCodeMatchExp$$2[m]
          }
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v347 = geneticCodeMatchResult$$2[m]
          }
          sequenceToTranslate = sequenceToTranslate.replace(v346, v347);
          m = m + 1;
          v348 = m < geneticCodeMatchExp$$2.length
        }
        sequenceToTranslate = sequenceToTranslate.replace(/\S{3}/g, "X");
        sequenceToTranslate = sequenceToTranslate.replace(/\s/g, "");
        sequenceToTranslate = sequenceToTranslate.replace(/[a-z]/g, "");
        var v349 = outputWindow.document;
        JAM.call(v349.write, v349, [addReturns(sequenceToTranslate) + "\n\n"]);
        k$$3 = k$$3 + 1;
        break
      }
      i$$11 = i$$11 + 3;
      v352 = i$$11 <= dnaSequence$$3.length - 3
    }
    startPos = i$$11 + 3;
    i$$11 = startPos;
    foundStart = false;
    foundStop = false;
    proteinLength = 0;
    v353 = i$$11 <= dnaSequence$$3.length - 3
  }
  if(k$$3 == 0) {
    var v354 = outputWindow.document;
    JAM.call(v354.write, v354, ["No ORFs were found in reading frame " + rf + ".\n\n"])
  }
  return true
}
JAM.set(document, "onload", v3);
JAM.set(document.getElementById("submitbtn"), "onclick", v4);
JAM.set(document.getElementById("clearbtn"), "onclick", v5);

