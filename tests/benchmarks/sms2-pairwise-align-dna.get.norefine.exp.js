function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return
}
function v3() {
  try {
    pairwiseAlignDna(document)
  }catch(e$$5) {
    alert("The following error was encountered: " + e$$5)
  }
  return
}
function v2() {
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
  var v12 = i$$1 < arrayOfTitles.length;
  for(;v12;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1231 = arrayOfTitles[i$$1]
    }
    var v566 = v1231.search(/\S/) == -1;
    if(!v566) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1378 = arrayOfSequences[i$$1]
      }
      var v975 = v1378.search(/\S/) == -1;
      if(!v975) {
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1379 = arrayOfSequences[i$$1]
        }
        v975 = v1379.length != lengthOfAlign
      }
      v566 = v975
    }
    if(v566) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v568 = codonTable.search(/AmAcid/) == -1;
  if(!v568) {
    var v978 = codonTable.search(/Codon/) == -1;
    if(!v978) {
      var v1236 = codonTable.search(/Number/) == -1;
      if(!v1236) {
        var v1381 = codonTable.search(/\/1000/) == -1;
        if(!v1381) {
          v1381 = codonTable.search(/Fraction\s*\.\./) == -1
        }
        v1236 = v1381
      }
      v978 = v1236
    }
    v568 = v978
  }
  if(v568) {
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
  var v17 = z$$2 < arrayOfPatterns.length;
  for(;v17;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v981 = arrayOfPatterns[z$$2]
    }
    if(v981.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v982 = arrayOfPatterns[z$$2]
    }
    if(moreExpressionCheck(v982) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    v17 = z$$2 < arrayOfPatterns.length
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v26 = j < arrayOfPatterns.length;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1238 = arrayOfPatterns[j]
    }
    var v575 = JAM.call(v1238.match, v1238, [/\/.+\//]) + "gi";
    if(JAM.isEval(eval)) {
      var v1597 = eval("introspect(JAM.policy.pFull) { " + v575 + " }")
    }else {
      var v1597 = JAM.call(eval, null, [v575])
    }
    v20[v21] = v1597;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v984 = arrayOfPatterns[j]
    }
    var v1598 = JAM.call(v984.match, v984, [/=[a-zA-Z\*]/]).toString();
    v22[v23] = v1598;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v577 = geneticCodeMatchResult[j]
    }
    var v1599 = v577.replace(/=/g, "");
    v24[v25] = v1599;
    j = j + 1;
    v26 = j < arrayOfPatterns.length
  }
  var i$$2 = 0;
  var v33 = i$$2 <= testSequence.length - 3;
  for(;v33;) {
    codon = testSequence.substring(i$$2, i$$2 + 3);
    j = 0;
    var v31 = j < geneticCodeMatchExp.length;
    for(;v31;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v986 = geneticCodeMatchExp[j]
      }
      if(codon.search(v986) != -1) {
        if(oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      v31 = j < geneticCodeMatchExp.length
    }
    if(oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v33 = i$$2 <= testSequence.length - 3
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v35 = z$$3 < arrayOfPatterns$$1.length;
  for(;v35;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v988 = arrayOfPatterns$$1[z$$3]
    }
    if(v988.search(/[^acdefghiklmnpqrstvwyz]/i) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    v35 = z$$3 < arrayOfPatterns$$1.length
  }
  var i$$3 = 0;
  var v39 = i$$3 < arrayOfPatterns$$1.length;
  for(;v39;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v989 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v989 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v38 = j$$1 < arrayOfPatterns$$1.length;
    for(;v38;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v990 = arrayOfPatterns$$1[j$$1]
      }
      if(v990.search(re) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      v38 = j$$1 < arrayOfPatterns$$1.length
    }
    i$$3 = i$$3 + 1;
    v39 = i$$3 < arrayOfPatterns$$1.length
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v42 = z$$4 < arrayOfPatterns$$2.length;
  for(;v42;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v991 = arrayOfPatterns$$2[z$$4]
    }
    if(v991.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v992 = arrayOfPatterns$$2[z$$4]
    }
    if(moreExpressionCheck(v992) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    v42 = z$$4 < arrayOfPatterns$$2.length
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
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</form>"]);
  return true
}
function closePre() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</div>"]);
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</body>\n</html>\n"]);
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
  var v55 = i$$4 < alignArray.length;
  for(;v55;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v994 = alignArray[i$$4]
    }
    if(v994.search(/[^\s]+\s/) == -1) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    v55 = i$$4 < alignArray.length
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
    var v57 = matchArray = re$$1.exec(sequenceData);
    for(;v57;) {
      arrayOfFasta.push(matchArray[0]);
      v57 = matchArray = re$$1.exec(sequenceData)
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
  var v75 = j$$2 < arrayOfPatterns$$3.length;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1240 = arrayOfPatterns$$3[j$$2]
    }
    var v624 = JAM.call(v1240.match, v1240, [/\/.+\//]) + "gi";
    if(JAM.isEval(eval)) {
      var v1600 = eval("introspect(JAM.policy.pFull) { " + v624 + " }")
    }else {
      var v1600 = JAM.call(eval, null, [v624])
    }
    v73[v74] = v1600;
    j$$2 = j$$2 + 1;
    v75 = j$$2 < arrayOfPatterns$$3.length
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v81 = j$$3 < arrayOfPatterns$$4.length;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v996 = arrayOfPatterns$$4[j$$3]
    }
    var v1601 = JAM.call(v996.match, v996, [/=[a-zA-Z\*]/]).toString();
    v77[v78] = v1601;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v628 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1602 = v628.replace(/=/g, "");
    v79[v80] = v1602;
    j$$3 = j$$3 + 1;
    v81 = j$$3 < arrayOfPatterns$$4.length
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
  var v102 = j$$4 < lengthOut;
  for(;v102;) {
    tempNum = Math.floor(Math.random() * components.length);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
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
    fastaTitle = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""]).toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v656 = expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1;
  if(!v656) {
    var v999 = expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1;
    if(!v999) {
      var v1242 = expressionToCheck.search(/\[\]/) != -1;
      if(!v1242) {
        var v1384 = expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1;
        if(!v1384) {
          var v1474 = expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1;
          if(!v1474) {
            var v1508 = expressionToCheck.search(/\|\|/) != -1;
            if(!v1508) {
              var v1533 = expressionToCheck.search(/\/\|/) != -1;
              if(!v1533) {
                var v1547 = expressionToCheck.search(/\|\//) != -1;
                if(!v1547) {
                  var v1559 = expressionToCheck.search(/\[.\]/) != -1;
                  if(!v1559) {
                    var v1569 = expressionToCheck.search(/\</) != -1;
                    if(!v1569) {
                      v1569 = expressionToCheck.search(/\>/) != -1
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
  if(v656) {
    return false
  }
  return true
}
function openForm() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ['<form action="">\n']);
  return true
}
function openPre() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ["<pre>"]);
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isColor) {
    var v113 = outputWindow.document;
    JAM.call(v113.write, v113, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"])
  }else {
    var v115 = outputWindow.document;
    JAM.call(v115.write, v115, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v117 = outputWindow.document;
  JAM.call(v117.write, v117, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"]);
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
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isBackground) {
    var v121 = outputWindow.document;
    JAM.call(v121.write, v121, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"])
  }else {
    var v123 = outputWindow.document;
    JAM.call(v123.write, v123, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v125 = outputWindow.document;
  JAM.call(v125.write, v125, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"]);
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
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g]);
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
  var v671 = emblFile.search(/ID/) == -1;
  if(!v671) {
    var v1010 = emblFile.search(/AC/) == -1;
    if(!v1010) {
      var v1253 = emblFile.search(/DE/) == -1;
      if(!v1253) {
        v1253 = emblFile.search(/SQ/) == -1
      }
      v1010 = v1253
    }
    v671 = v1010
  }
  if(v671) {
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
  var v676 = genBankFile.search(/LOCUS/) == -1;
  if(!v676) {
    var v1013 = genBankFile.search(/DEFINITION/) == -1;
    if(!v1013) {
      var v1256 = genBankFile.search(/ACCESSION/) == -1;
      if(!v1256) {
        v1256 = genBankFile.search(/ORIGIN/) == -1
      }
      v1013 = v1256
    }
    v676 = v1013
  }
  if(v676) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v677 = genBankFile$$1.search(/LOCUS/) == -1;
  if(!v677) {
    var v1016 = genBankFile$$1.search(/DEFINITION/) == -1;
    if(!v1016) {
      var v1259 = genBankFile$$1.search(/ACCESSION/) == -1;
      if(!v1259) {
        v1259 = genBankFile$$1.search(/ORIGIN/) == -1
      }
      v1016 = v1259
    }
    v677 = v1016
  }
  if(v677) {
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
  var v679 = emblFile$$1.search(/ID/) == -1;
  if(!v679) {
    var v1019 = emblFile$$1.search(/AC/) == -1;
    if(!v1019) {
      var v1262 = emblFile$$1.search(/DE/) == -1;
      if(!v1262) {
        v1262 = emblFile$$1.search(/SQ/) == -1
      }
      v1019 = v1262
    }
    v679 = v1019
  }
  if(v679) {
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
  var v156 = i$$5 < stopBase;
  for(;v156;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v153 = j$$6 <= basePerLine / groupSize;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        lineOfText = lineOfText + text$$10.charAt(k + i$$5);
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v153 = j$$6 <= basePerLine / groupSize
    }
    var v154 = outputWindow.document;
    JAM.call(v154.write, v154, [lineOfText + "\n"]);
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
    if(v684) {
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
    var v166 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        if(i$$6 + k$$1 >= stopBase$$2) {
          break
        }
        lineOfText$$1 = lineOfText$$1 + text$$12.charAt(k$$1 + i$$6);
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
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
      v166 = j$$7 <= basePerLine$$2 / groupSize$$2
    }
    if(numberPosition$$1 == "left") {
      var v167 = outputWindow.document;
      JAM.call(v167.write, v167, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"]);
      if(strands$$1 == "two") {
        var v169 = outputWindow.document;
        JAM.call(v169.write, v169, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"]);
        var v171 = outputWindow.document;
        JAM.call(v171.write, v171, ["\n"])
      }
    }else {
      if(numberPosition$$1 == "right") {
        var v173 = outputWindow.document;
        JAM.call(v173.write, v173, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
        if(strands$$1 == "two") {
          var v175 = outputWindow.document;
          JAM.call(v175.write, v175, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
          var v177 = outputWindow.document;
          JAM.call(v177.write, v177, ["\n"])
        }
      }else {
        if(numberPosition$$1 == "above") {
          var v179 = outputWindow.document;
          JAM.call(v179.write, v179, [aboveNum + "\n"]);
          var v181 = outputWindow.document;
          JAM.call(v181.write, v181, [lineOfText$$1 + "\n"]);
          if(strands$$1 == "two") {
            var v183 = outputWindow.document;
            JAM.call(v183.write, v183, [complement(lineOfText$$1) + "\n"]);
            var v185 = outputWindow.document;
            JAM.call(v185.write, v185, ["\n"])
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
    var v199 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        if(i$$7 + k$$2 >= stopBase$$3) {
          break
        }
        lineOfText$$2 = lineOfText$$2 + text$$13.charAt(k$$2 + i$$7);
        k$$2 = k$$2 + 1;
        v194 = k$$2 < groupSize$$3
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
      v199 = j$$8 <= basePerLine$$3 / groupSize$$3
    }
    if(numberPosition$$2 == "left") {
      var v200 = outputWindow.document;
      JAM.call(v200.write, v200, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"])
    }else {
      if(numberPosition$$2 == "right") {
        var v202 = outputWindow.document;
        JAM.call(v202.write, v202, [lineOfText$$2 + i$$7 + "\n"])
      }else {
        if(numberPosition$$2 == "above") {
          var v204 = outputWindow.document;
          JAM.call(v204.write, v204, [aboveNum$$1 + "\n"]);
          var v206 = outputWindow.document;
          JAM.call(v206.write, v206, [lineOfText$$2 + "\n"])
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
  var v701 = sequence$$13.length <= firstIndexToMutate;
  if(!v701) {
    var v1030 = lastIndexToMutate < 0;
    if(!v1030) {
      v1030 = lastIndexToMutate <= firstIndexToMutate
    }
    v701 = v1030
  }
  if(v701) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    var v703 = randNum < firstIndexToMutate;
    if(!v703) {
      v703 = randNum > lastIndexToMutate
    }
    if(v703) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
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
        var v707 = components$$1[componentsIndex]
      }
      if(v707 != currentChar) {
        needNewChar = false
      }
    }
    var v708 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v709 = components$$1[componentsIndex]
    }
    sequence$$13 = v708 + v709 + sequence$$13.substring(randNum + 1, sequence$$13.length);
    i$$8 = i$$8 + 1;
    v220 = i$$8 < numMut
  }
  var v221 = outputWindow.document;
  JAM.call(v221.write, v221, [addReturns(sequence$$13)]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v227 = j$$9 < lengthOut$$1;
  for(;v227;) {
    tempNum$$1 = Math.floor(Math.random() * components$$2.length);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if(sequence$$14.length == 60) {
      var v224 = outputWindow.document;
      JAM.call(v224.write, v224, [sequence$$14 + "\n"]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v227 = j$$9 < lengthOut$$1
  }
  var v228 = outputWindow.document;
  JAM.call(v228.write, v228, [sequence$$14 + "\n"]);
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
  var v234 = outputWindow.document;
  JAM.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v235 = outputWindow.document;
  JAM.call(v235.write, v235, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"]);
  var i$$9 = 0;
  var v252 = i$$9 < arrayOfItems.length;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v718 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v718.match, v718, [/\/.+\//]) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1269 = arrayOfItems[i$$9]
    }
    cutDistance = parseFloat(JAM.call(v1269.match, v1269, [/\)\D*\d+/]).toString().replace(/\)\D*/, ""));
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v720 = matchPosition >= lowerLimit;
      if(v720) {
        v720 = matchPosition < upperLimit
      }
      if(v720) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v244 = matchArray$$1 = matchExp.exec(sequence$$15)
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
    var v250 = outputWindow.document;
    var v1514 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1565 = arrayOfItems[i$$9]
    }
    JAM.call(v250.write, v250, [v1514 + JAM.call(v1565.match, v1565, [/\([^\(]+\)/]).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v252 = i$$9 < arrayOfItems.length
  }
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"]);
  var i$$10 = 0;
  var v265 = i$$10 < arrayOfItems$$1.length;
  for(;v265;) {
    var tempNumber = 0;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v729 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v729.match, v729, [/\/[^\/]+\//]) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(sequence$$16.search(matchExp$$1) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1]).length
    }
    var percentage = 0;
    var v1040 = originalLength + 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1404 = arrayOfItems$$1[i$$10]
    }
    if(v1040 - parseFloat(JAM.call(v1404.match, v1404, [/\d+/])) > 0) {
      var v260 = 100 * tempNumber;
      var v732 = originalLength + 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1273 = arrayOfItems$$1[i$$10]
      }
      percentage = v260 / (v732 - parseFloat(JAM.call(v1273.match, v1273, [/\d+/])))
    }
    var v263 = outputWindow.document;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1566 = arrayOfItems$$1[i$$10]
    }
    JAM.call(v263.write, v263, ["<tr><td>" + JAM.call(v1566.match, v1566, [/\([^\(]+\)\b/]).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n"]);
    i$$10 = i$$10 + 1;
    v265 = i$$10 < arrayOfItems$$1.length
  }
  var v266 = outputWindow.document;
  JAM.call(v266.write, v266, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v273 = sequence$$17.length > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = Math.floor(Math.random() * maxNum$$1);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    tempString2 = sequence$$17.substring(randNum$$1 + 1, sequence$$17.length);
    sequence$$17 = tempString1 + tempString2;
    if(tempSeq.length == 60) {
      var v270 = outputWindow.document;
      JAM.call(v270.write, v270, [tempSeq + "\n"]);
      tempSeq = ""
    }
    v273 = sequence$$17.length > 0
  }
  var v274 = outputWindow.document;
  JAM.call(v274.write, v274, [tempSeq + "\n"]);
  return true
}
function pairwiseAlignDna(theDocument) {
  var newDnaOne = "";
  var titleOne = "";
  var newDnaTwo = "";
  var titleTwo = "";
  var maxInput$$3 = 2E3;
  if(testScript() == false) {
    return false
  }
  var v741 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v741) {
    var v1046 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
    if(!v1046) {
      var v1277 = checkFormElement(theDocument.forms[0].elements[1]) == false;
      if(!v1277) {
        v1277 = checkSequenceLength(theDocument.forms[0].elements[1].value, maxInput$$3) == false
      }
      v1046 = v1277
    }
    v741 = v1046
  }
  if(v741) {
    return false
  }
  var v1048 = theDocument.forms[0].elements[5].options;
  var v1049 = theDocument.forms[0].elements[5].selectedIndex;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v742 = v1048[v1049]
  }
  var MATCH_SCORE = parseInt(v742.value);
  var v1050 = theDocument.forms[0].elements[6].options;
  var v1051 = theDocument.forms[0].elements[6].selectedIndex;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v743 = v1050[v1051]
  }
  var MISMATCH_SCORE = parseInt(v743.value);
  var v1052 = theDocument.forms[0].elements[7].options;
  var v1053 = theDocument.forms[0].elements[7].selectedIndex;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v744 = v1052[v1053]
  }
  var BEGIN_GAP_PENALTY = parseInt(v744.value);
  var v1054 = theDocument.forms[0].elements[8].options;
  var v1055 = theDocument.forms[0].elements[8].selectedIndex;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v745 = v1054[v1055]
  }
  var GAP_PENALTY = parseInt(v745.value);
  var v1056 = theDocument.forms[0].elements[9].options;
  var v1057 = theDocument.forms[0].elements[9].selectedIndex;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v746 = v1056[v1057]
  }
  var END_GAP_PENALTY = parseInt(v746.value);
  openWindow("Pairwise Align DNA");
  openPre();
  newDnaOne = getSequenceFromFasta(theDocument.forms[0].elements[0].value);
  newDnaOne = removeNonDna(newDnaOne);
  titleOne = getTitleFromFasta(theDocument.forms[0].elements[0].value);
  newDnaTwo = getSequenceFromFasta(theDocument.forms[0].elements[1].value);
  newDnaTwo = removeNonDna(newDnaTwo);
  titleTwo = getTitleFromFasta(theDocument.forms[0].elements[1].value);
  var v287 = outputWindow.document;
  JAM.call(v287.write, v287, [getPairwiseAlignTitle(titleOne, newDnaOne, titleTwo, newDnaTwo)]);
  if(newDnaOne.search(/./) != -1) {
    newDnaOne = JAM.call(newDnaOne.match, newDnaOne, [/./g])
  }
  if(newDnaTwo.search(/./) != -1) {
    newDnaTwo = JAM.call(newDnaTwo.match, newDnaTwo, [/./g])
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
  JAM.call(matrix.setMatch, matrix, [matchScore]);
  JAM.call(matrix.setMismatch, matrix, [mismatchScore]);
  var scoreSet = new ScoreSet;
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [matrix, gapPenalty, beginGapPenalty, endGapPenalty]);
  var alignment;
  if(useLinearSpace) {
    alignment = new AlignPairLinear;
    JAM.call(alignment.setAlignParam, alignment, [newDnaOne$$1, newDnaTwo$$1, scoreSet]);
    alignment.align();
    var v291 = outputWindow.document;
    JAM.call(v291.write, v291, [">" + titleOne$$1 + "\n"]);
    var v293 = outputWindow.document;
    JAM.call(v293.write, v293, [addReturns(alignment.getAlignedM())]);
    var v295 = outputWindow.document;
    JAM.call(v295.write, v295, ["\n"]);
    var v296 = outputWindow.document;
    JAM.call(v296.write, v296, ["\n"]);
    var v297 = outputWindow.document;
    JAM.call(v297.write, v297, [">" + titleTwo$$1 + "\n"]);
    var v299 = outputWindow.document;
    JAM.call(v299.write, v299, [addReturns(alignment.getAlignedN())]);
    var v301 = outputWindow.document;
    JAM.call(v301.write, v301, ["\n\n"]);
    var v302 = outputWindow.document;
    JAM.call(v302.write, v302, ["Alignment score: " + alignment.score + "\n\n"])
  }
  if(useQuadraticSpace) {
    alignment = new AlignPairQuad;
    JAM.call(alignment.initializeMatrix, alignment, [newDnaOne$$1, newDnaTwo$$1, scoreSet]);
    alignment.fillMatrix();
    alignment.align();
    var v304 = outputWindow.document;
    JAM.call(v304.write, v304, [">" + titleOne$$1 + "\n"]);
    var v306 = outputWindow.document;
    JAM.call(v306.write, v306, [addReturns(alignment.getAlignedM())]);
    var v308 = outputWindow.document;
    JAM.call(v308.write, v308, ["\n"]);
    var v309 = outputWindow.document;
    JAM.call(v309.write, v309, ["\n"]);
    var v310 = outputWindow.document;
    JAM.call(v310.write, v310, [">" + titleTwo$$1 + "\n"]);
    var v312 = outputWindow.document;
    JAM.call(v312.write, v312, [addReturns(alignment.getAlignedN())]);
    var v314 = outputWindow.document;
    JAM.call(v314.write, v314, ["\n\n"]);
    var v315 = outputWindow.document;
    JAM.call(v315.write, v315, ["Alignment score: " + alignment.score + "\n\n"])
  }
  return
}
function getScore(r1$$1, r2) {
  var v317 = this.scoringMatrix;
  return JAM.call(v317.scoringMatrix_getScore, v317, [r1$$1, r2])
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
  if(r1$$2 == r2$$1) {
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
  if(this.M.length == 0) {
    var j$$10 = 1;
    var v324 = j$$10 <= this.N.length;
    for(;v324;) {
      this.alignedM.push("-");
      var v320 = this.alignedN;
      var v765 = this.N;
      var v766 = j$$10 - 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v321 = v765[v766]
      }
      v320.push(v321);
      this.score = this.score + this.scoreSet.gap;
      j$$10 = j$$10 + 1;
      v324 = j$$10 <= this.N.length
    }
  }else {
    if(this.N.length == 0) {
      j$$10 = 1;
      var v330 = j$$10 <= this.M.length;
      for(;v330;) {
        this.alignedN.push("-");
        var v326 = this.alignedM;
        var v771 = this.M;
        var v772 = j$$10 - 1;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v327 = v771[v772]
        }
        v326.push(v327);
        this.score = this.score + this.scoreSet.gap;
        j$$10 = j$$10 + 1;
        v330 = j$$10 <= this.M.length
      }
    }else {
      var v775 = this.M.length == 0;
      if(v775) {
        v775 = this.N.length == 0
      }
      if(v775) {
      }else {
        JAM.call(this.path, this, [0, 0, this.M.length, this.N.length])
      }
    }
  }
  return
}
function path(i1, j1, i2, j2) {
  var v778 = i1 + 1 == i2;
  if(!v778) {
    v778 = j1 == j2
  }
  if(v778) {
    var subM = new Array;
    var subN = new Array;
    var i$$11 = i1 + 1;
    var v337 = i$$11 <= i2;
    for(;v337;) {
      var v779 = this.M;
      var v780 = i$$11 - 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
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
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v338 = v781[v782]
      }
      subN.push(v338);
      j$$11 = j$$11 + 1;
      v339 = j$$11 <= j2
    }
    var alignment$$1 = new AlignPairQuad;
    subScoreSet = new ScoreSet;
    if(j1 == j2) {
      if(j1 == 0) {
        JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.beginGap, this.scoreSet.beginGap, this.scoreSet.beginGap])
      }else {
        if(j1 == this.N.length) {
          JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.endGap, this.scoreSet.endGap, this.scoreSet.endGap])
        }else {
          JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.gap, this.scoreSet.gap])
        }
      }
    }else {
      JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.beginGap, this.scoreSet.endGap]);
      subScoreSet.useBeginGapTop = false;
      subScoreSet.useBeginGapLeft = false;
      subScoreSet.useEndGapBottom = false;
      subScoreSet.useEndGapRight = false;
      if(i1 == 0) {
        subScoreSet.useBeginGapTop = true
      }
      if(j1 == 0) {
        subScoreSet.useBeginGapLeft = true
      }
      if(j2 == this.N.length) {
        subScoreSet.useEndGapRight = true
      }
      if(i2 == this.M.length) {
        subScoreSet.useEndGapBottom = true
      }
    }
    JAM.call(alignment$$1.initializeMatrix, alignment$$1, [subM, subN, subScoreSet]);
    alignment$$1.fillMatrix();
    alignment$$1.align();
    this.alignedM.push(alignment$$1.getAlignedM());
    this.alignedN.push(alignment$$1.getAlignedN());
    this.score = this.score + alignment$$1.score
  }else {
    var middle = Math.floor((i1 + i2) / 2);
    JAM.set(this.Sn, j1, 0, JAM.policy.p352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
    if(i1 == 0) {
      j$$11 = j1 + 1;
      var v372 = j$$11 <= j2;
      for(;v372;) {
        var v371 = this.Sn;
        var v1077 = this.Sn;
        var v1078 = j$$11 - 1;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v803 = v1077[v1078]
        }
        JAM.set(v371, j$$11, v803 - this.scoreSet.beginGap, JAM.policy.p352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
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
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v805 = v1080[v1081]
        }
        JAM.set(v373, j$$11, v805 - this.scoreSet.gap, JAM.policy.p352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
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
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        diag = v376[j1]
      }
      if(j1 == 0) {
        var v807 = this.Sn;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v377 = v807[j1]
        }
        left$$2 = v377 - this.scoreSet.beginGap
      }else {
        var v809 = this.Sn;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v379 = v809[j1]
        }
        left$$2 = v379 - this.scoreSet.gap
      }
      JAM.set(this.Sn, j1, left$$2, JAM.policy.p352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
      j$$11 = j1 + 1;
      var v396 = j$$11 <= j2;
      for(;v396;) {
        var v811 = j$$11 == this.N.length;
        if(v811) {
          v811 = i$$11 == this.M.length
        }
        if(v811) {
          var v1085 = this.Sn;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v812 = v1085[j$$11]
          }
          var v383 = v812 - this.scoreSet.endGap;
          var v814 = left$$2 - this.scoreSet.endGap;
          var v1088 = diag;
          var v1298 = this.scoreSet;
          var v1425 = this.M;
          var v1426 = i$$11 - 1;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1299 = v1425[v1426]
          }
          var v1427 = this.N;
          var v1428 = j$$11 - 1;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1300 = v1427[v1428]
          }
          left$$2 = Math.max(v383, Math.max(v814, v1088 + JAM.call(v1298.getScore, v1298, [v1299, v1300])))
        }else {
          if(i$$11 == this.M.length) {
            var v1091 = this.Sn;
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v817 = v1091[j$$11]
            }
            var v385 = v817 - this.scoreSet.gap;
            var v819 = left$$2 - this.scoreSet.endGap;
            var v1094 = diag;
            var v1302 = this.scoreSet;
            var v1429 = this.M;
            var v1430 = i$$11 - 1;
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1303 = v1429[v1430]
            }
            var v1431 = this.N;
            var v1432 = j$$11 - 1;
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1304 = v1431[v1432]
            }
            left$$2 = Math.max(v385, Math.max(v819, v1094 + JAM.call(v1302.getScore, v1302, [v1303, v1304])))
          }else {
            if(j$$11 == this.N.length) {
              var v1097 = this.Sn;
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v822 = v1097[j$$11]
              }
              var v387 = v822 - this.scoreSet.endGap;
              var v824 = left$$2 - this.scoreSet.gap;
              var v1100 = diag;
              var v1306 = this.scoreSet;
              var v1433 = this.M;
              var v1434 = i$$11 - 1;
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1307 = v1433[v1434]
              }
              var v1435 = this.N;
              var v1436 = j$$11 - 1;
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1308 = v1435[v1436]
              }
              left$$2 = Math.max(v387, Math.max(v824, v1100 + JAM.call(v1306.getScore, v1306, [v1307, v1308])))
            }else {
              var v1102 = this.Sn;
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v826 = v1102[j$$11]
              }
              var v389 = v826 - this.scoreSet.gap;
              var v828 = left$$2 - this.scoreSet.gap;
              var v1105 = diag;
              var v1310 = this.scoreSet;
              var v1437 = this.M;
              var v1438 = i$$11 - 1;
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1311 = v1437[v1438]
              }
              var v1439 = this.N;
              var v1440 = j$$11 - 1;
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1312 = v1439[v1440]
              }
              left$$2 = Math.max(v389, Math.max(v828, v1105 + JAM.call(v1310.getScore, v1310, [v1311, v1312])))
            }
          }
        }
        var v394 = this.Sn;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          diag = v394[j$$11]
        }
        JAM.set(this.Sn, j$$11, left$$2, JAM.policy.p352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$11 = j$$11 + 1;
        v396 = j$$11 <= j2
      }
      i$$11 = i$$11 + 1;
      v397 = i$$11 <= middle
    }
    JAM.set(this.Sp, j2, 0, JAM.policy.p352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
    if(i2 == this.M.length) {
      j$$11 = j2 - 1;
      var v400 = j$$11 >= j1;
      for(;v400;) {
        var v399 = this.Sp;
        var v1108 = this.Sp;
        var v1109 = j$$11 + 1;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v831 = v1108[v1109]
        }
        JAM.set(v399, j$$11, v831 - this.scoreSet.endGap, JAM.policy.p352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
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
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v833 = v1111[v1112]
        }
        JAM.set(v401, j$$11, v833 - this.scoreSet.gap, JAM.policy.p352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$11 = j$$11 - 1;
        v402 = j$$11 >= j1
      }
    }
    var right$$2;
    i$$11 = i2 - 1;
    var v425 = i$$11 >= middle;
    for(;v425;) {
      var v404 = this.Sp;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        diag = v404[j2]
      }
      if(j2 == this.N.length) {
        var v836 = this.Sp;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v405 = v836[j2]
        }
        right$$2 = v405 - this.scoreSet.endGap
      }else {
        var v838 = this.Sp;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v407 = v838[j2]
        }
        right$$2 = v407 - this.scoreSet.gap
      }
      JAM.set(this.Sp, j2, right$$2, JAM.policy.p352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
      j$$11 = j2 - 1;
      var v424 = j$$11 >= j1;
      for(;v424;) {
        var v840 = j$$11 == 0;
        if(v840) {
          v840 = i$$11 == 0
        }
        if(v840) {
          var v1115 = this.Sp;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v841 = v1115[j$$11]
          }
          var v411 = v841 - this.scoreSet.beginGap;
          var v843 = right$$2 - this.scoreSet.beginGap;
          var v1118 = diag;
          var v1314 = this.scoreSet;
          var v1441 = this.M;
          var v1442 = i$$11 + 1 - 1;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1315 = v1441[v1442]
          }
          var v1443 = this.N;
          var v1444 = j$$11 + 1 - 1;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1316 = v1443[v1444]
          }
          right$$2 = Math.max(v411, Math.max(v843, v1118 + JAM.call(v1314.getScore, v1314, [v1315, v1316])))
        }else {
          if(j$$11 == 0) {
            var v1120 = this.Sp;
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v845 = v1120[j$$11]
            }
            var v413 = v845 - this.scoreSet.beginGap;
            var v847 = right$$2 - this.scoreSet.gap;
            var v1123 = diag;
            var v1318 = this.scoreSet;
            var v1445 = this.M;
            var v1446 = i$$11 + 1 - 1;
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1319 = v1445[v1446]
            }
            var v1447 = this.N;
            var v1448 = j$$11 + 1 - 1;
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1320 = v1447[v1448]
            }
            right$$2 = Math.max(v413, Math.max(v847, v1123 + JAM.call(v1318.getScore, v1318, [v1319, v1320])))
          }else {
            if(i$$11 == 0) {
              var v1125 = this.Sp;
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v849 = v1125[j$$11]
              }
              var v415 = v849 - this.scoreSet.gap;
              var v851 = right$$2 - this.scoreSet.beginGap;
              var v1128 = diag;
              var v1322 = this.scoreSet;
              var v1449 = this.M;
              var v1450 = i$$11 + 1 - 1;
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1323 = v1449[v1450]
              }
              var v1451 = this.N;
              var v1452 = j$$11 + 1 - 1;
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1324 = v1451[v1452]
              }
              right$$2 = Math.max(v415, Math.max(v851, v1128 + JAM.call(v1322.getScore, v1322, [v1323, v1324])))
            }else {
              var v1130 = this.Sp;
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v853 = v1130[j$$11]
              }
              var v417 = v853 - this.scoreSet.gap;
              var v855 = right$$2 - this.scoreSet.gap;
              var v1133 = diag;
              var v1326 = this.scoreSet;
              var v1453 = this.M;
              var v1454 = i$$11 + 1 - 1;
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1327 = v1453[v1454]
              }
              var v1455 = this.N;
              var v1456 = j$$11 + 1 - 1;
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1328 = v1455[v1456]
              }
              right$$2 = Math.max(v417, Math.max(v855, v1133 + JAM.call(v1326.getScore, v1326, [v1327, v1328])))
            }
          }
        }
        var v422 = this.Sp;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          diag = v422[j$$11]
        }
        JAM.set(this.Sp, j$$11, right$$2, JAM.policy.p352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$11 = j$$11 - 1;
        v424 = j$$11 >= j1
      }
      i$$11 = i$$11 - 1;
      v425 = i$$11 >= middle
    }
    var v857 = this.Sn;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v426 = v857[j1]
    }
    var v858 = this.Sp;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v427 = v858[j1]
    }
    var maxValue = v426 + v427;
    var maxJ = j1;
    j$$11 = j1 + 1;
    var v431 = j$$11 <= j2;
    for(;v431;) {
      var v1329 = this.Sn;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1135 = v1329[j$$11]
      }
      var v1330 = this.Sp;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1136 = v1330[j$$11]
      }
      if(v1135 + v1136 >= maxValue) {
        var v860 = this.Sn;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v428 = v860[j$$11]
        }
        var v861 = this.Sp;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v429 = v861[j$$11]
        }
        maxValue = v428 + v429;
        maxJ = j$$11
      }
      j$$11 = j$$11 + 1;
      v431 = j$$11 <= j2
    }
    JAM.call(this.path, this, [i1, j1, middle, maxJ]);
    JAM.call(this.path, this, [middle, maxJ, i2, j2])
  }
  return
}
function getAlignedM() {
  return this.alignedM.join("")
}
function getAlignedN() {
  return this.alignedN.join("")
}
function setAlignParam(M, N, scoreSet$$1) {
  this.M = M;
  this.N = N;
  var v1603 = new Array;
  this.alignedM = v1603;
  var v1604 = new Array;
  this.alignedN = v1604;
  this.scoreSet = scoreSet$$1;
  var v1605 = new Array(this.N.length);
  this.Sn = v1605;
  var v1606 = new Array(this.N.length);
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
  var v1607 = new Array(this.M.length + 1);
  this.nodes = v1607;
  var i$$12 = 0;
  var v443 = i$$12 < this.nodes.length;
  for(;v443;) {
    var v438 = this.nodes;
    var v439 = i$$12;
    var v1608 = new Array(this.N.length + 1);
    v438[v439] = v1608;
    var j$$12 = 0;
    var v1332 = this.nodes;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1140 = v1332[i$$12]
    }
    var v442 = j$$12 < v1140.length;
    for(;v442;) {
      var v868 = this.nodes;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v440 = v868[i$$12]
      }
      var v441 = j$$12;
      var v1609 = new Node;
      v440[v441] = v1609;
      j$$12 = j$$12 + 1;
      var v1333 = this.nodes;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1141 = v1333[i$$12]
      }
      v442 = j$$12 < v1141.length
    }
    i$$12 = i$$12 + 1;
    v443 = i$$12 < this.nodes.length
  }
  this.nodes[0][0].value = 0;
  i$$12 = 1;
  var v450 = i$$12 < this.nodes.length;
  for(;v450;) {
    if(this.scoreSet.useBeginGapLeft) {
      var v1145 = this.nodes;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v874 = v1145[i$$12]
      }
      var v445 = v874[0];
      var v1457 = this.nodes;
      var v1458 = i$$12 - 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1334 = v1457[v1458]
      }
      v445.value = v1334[0].value - this.scoreSet.beginGap
    }else {
      var v1148 = this.nodes;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v877 = v1148[i$$12]
      }
      var v446 = v877[0];
      var v1459 = this.nodes;
      var v1460 = i$$12 - 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1335 = v1459[v1460]
      }
      v446.value = v1335[0].value - this.scoreSet.gap
    }
    var v1151 = this.nodes;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v880 = v1151[i$$12]
    }
    v880[0].tracebackI = i$$12 - 1;
    var v1152 = this.nodes;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v881 = v1152[i$$12]
    }
    v881[0].tracebackJ = 0;
    i$$12 = i$$12 + 1;
    v450 = i$$12 < this.nodes.length
  }
  j$$12 = 1;
  var v456 = j$$12 < this.nodes[0].length;
  for(;v456;) {
    if(this.scoreSet.useBeginGapTop) {
      var v885 = this.nodes[0];
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v451 = v885[j$$12]
      }
      var v1337 = this.nodes[0];
      var v1338 = j$$12 - 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1156 = v1337[v1338]
      }
      v451.value = v1156.value - this.scoreSet.beginGap
    }else {
      var v888 = this.nodes[0];
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v452 = v888[j$$12]
      }
      var v1339 = this.nodes[0];
      var v1340 = j$$12 - 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1159 = v1339[v1340]
      }
      v452.value = v1159.value - this.scoreSet.gap
    }
    var v891 = this.nodes[0];
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v454 = v891[j$$12]
    }
    v454.tracebackI = 0;
    var v892 = this.nodes[0];
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v455 = v892[j$$12]
    }
    v455.tracebackJ = j$$12 - 1;
    j$$12 = j$$12 + 1;
    v456 = j$$12 < this.nodes[0].length
  }
  return
}
function dumpMatrix() {
  var v457 = outputWindow.document;
  JAM.call(v457.write, v457, ["Dynamic programming matrix i=" + this.nodes.length + " and j=" + this.nodes[0].length]);
  var v459 = outputWindow.document;
  JAM.call(v459.write, v459, ["\n"]);
  var i$$13 = 0;
  var v470 = i$$13 < this.nodes.length;
  for(;v470;) {
    var j$$13 = 0;
    var v1344 = this.nodes;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1167 = v1344[i$$13]
    }
    var v468 = j$$13 < v1167.length;
    for(;v468;) {
      var v1168 = this.nodes;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v898 = v1168[i$$13]
      }
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v460 = v898[j$$13]
      }
      var traceI = v460.tracebackI;
      var v1169 = this.nodes;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v899 = v1169[i$$13]
      }
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v461 = v899[j$$13]
      }
      var traceJ = v461.tracebackJ;
      if(traceI == undefined) {
        traceI = "u"
      }
      if(traceJ == undefined) {
        traceJ = "u"
      }
      var v464 = "(" + i$$13 + "," + j$$13 + ")[" + traceI + "," + traceJ + "]=";
      var v1346 = this.nodes;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1171 = v1346[i$$13]
      }
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v901 = v1171[j$$13]
      }
      var output = v464 + v901.value;
      var v466 = outputWindow.document;
      JAM.call(v466.write, v466, [rightNum(output, "", 20, " ")]);
      j$$13 = j$$13 + 1;
      var v1347 = this.nodes;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1172 = v1347[i$$13]
      }
      v468 = j$$13 < v1172.length
    }
    var v469 = outputWindow.document;
    JAM.call(v469.write, v469, ["\n"]);
    i$$13 = i$$13 + 1;
    v470 = i$$13 < this.nodes.length
  }
  var v471 = outputWindow.document;
  JAM.call(v471.write, v471, ["\n"]);
  return
}
function fillMatrix() {
  var i$$14 = 1;
  var v517 = i$$14 < this.nodes.length;
  for(;v517;) {
    var j$$14 = 1;
    var v516 = j$$14 < this.nodes[0].length;
    for(;v516;) {
      var a;
      var b;
      var c;
      var v906 = i$$14 == this.nodes.length - 1;
      if(v906) {
        v906 = j$$14 == this.nodes[0].length - 1
      }
      if(v906) {
        if(this.scoreSet.useEndGapRight) {
          var v1351 = this.nodes;
          var v1352 = i$$14 - 1;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1178 = v1351[v1352]
          }
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v908 = v1178[j$$14]
          }
          a = v908.value - this.scoreSet.endGap
        }else {
          var v1353 = this.nodes;
          var v1354 = i$$14 - 1;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1179 = v1353[v1354]
          }
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v910 = v1179[j$$14]
          }
          a = v910.value - this.scoreSet.gap
        }
        if(this.scoreSet.useEndGapBottom) {
          var v1355 = this.nodes;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1180 = v1355[i$$14]
          }
          var v1181 = j$$14 - 1;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v913 = v1180[v1181]
          }
          b = v913.value - this.scoreSet.endGap
        }else {
          var v1356 = this.nodes;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1182 = v1356[i$$14]
          }
          var v1183 = j$$14 - 1;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v915 = v1182[v1183]
          }
          b = v915.value - this.scoreSet.gap
        }
      }else {
        if(i$$14 == this.nodes.length - 1) {
          var v1358 = this.nodes;
          var v1359 = i$$14 - 1;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1185 = v1358[v1359]
          }
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v918 = v1185[j$$14]
          }
          a = v918.value - this.scoreSet.gap;
          if(this.scoreSet.useEndGapBottom) {
            var v1360 = this.nodes;
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1186 = v1360[i$$14]
            }
            var v1187 = j$$14 - 1;
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v921 = v1186[v1187]
            }
            b = v921.value - this.scoreSet.endGap
          }else {
            var v1361 = this.nodes;
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1188 = v1361[i$$14]
            }
            var v1189 = j$$14 - 1;
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v923 = v1188[v1189]
            }
            b = v923.value - this.scoreSet.gap
          }
        }else {
          if(j$$14 == this.nodes[0].length - 1) {
            if(this.scoreSet.useEndGapRight) {
              var v1363 = this.nodes;
              var v1364 = i$$14 - 1;
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1191 = v1363[v1364]
              }
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v927 = v1191[j$$14]
              }
              a = v927.value - this.scoreSet.endGap
            }else {
              var v1365 = this.nodes;
              var v1366 = i$$14 - 1;
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1192 = v1365[v1366]
              }
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v929 = v1192[j$$14]
              }
              a = v929.value - this.scoreSet.gap
            }
            var v1367 = this.nodes;
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1193 = v1367[i$$14]
            }
            var v1194 = j$$14 - 1;
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v931 = v1193[v1194]
            }
            b = v931.value - this.scoreSet.gap
          }else {
            var v1368 = this.nodes;
            var v1369 = i$$14 - 1;
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1195 = v1368[v1369]
            }
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v933 = v1195[j$$14]
            }
            a = v933.value - this.scoreSet.gap;
            var v1370 = this.nodes;
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1196 = v1370[i$$14]
            }
            var v1197 = j$$14 - 1;
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v935 = v1196[v1197]
            }
            b = v935.value - this.scoreSet.gap
          }
        }
      }
      var v1371 = this.nodes;
      var v1372 = i$$14 - 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1198 = v1371[v1372]
      }
      var v1199 = j$$14 - 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v937 = v1198[v1199]
      }
      var v503 = v937.value;
      var v938 = this.scoreSet;
      var v1200 = this.M;
      var v1201 = i$$14 - 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v939 = v1200[v1201]
      }
      var v1202 = this.N;
      var v1203 = j$$14 - 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v940 = v1202[v1203]
      }
      c = v503 + JAM.call(v938.getScore, v938, [v939, v940]);
      var v941 = a >= b;
      if(v941) {
        v941 = a >= c
      }
      if(v941) {
        var v1204 = this.nodes;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v942 = v1204[i$$14]
        }
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v505 = v942[j$$14]
        }
        v505.value = a;
        var v1205 = this.nodes;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v943 = v1205[i$$14]
        }
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v506 = v943[j$$14]
        }
        v506.tracebackI = i$$14 - 1;
        var v1206 = this.nodes;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v944 = v1206[i$$14]
        }
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v507 = v944[j$$14]
        }
        v507.tracebackJ = j$$14
      }else {
        var v945 = b >= c;
        if(v945) {
          v945 = b >= a
        }
        if(v945) {
          var v1207 = this.nodes;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v946 = v1207[i$$14]
          }
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v508 = v946[j$$14]
          }
          v508.value = b;
          var v1208 = this.nodes;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v947 = v1208[i$$14]
          }
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v509 = v947[j$$14]
          }
          v509.tracebackI = i$$14;
          var v1209 = this.nodes;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v948 = v1209[i$$14]
          }
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v510 = v948[j$$14]
          }
          v510.tracebackJ = j$$14 - 1
        }else {
          var v1210 = this.nodes;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v949 = v1210[i$$14]
          }
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v511 = v949[j$$14]
          }
          v511.value = c;
          var v1211 = this.nodes;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v950 = v1211[i$$14]
          }
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v512 = v950[j$$14]
          }
          v512.tracebackI = i$$14 - 1;
          var v1212 = this.nodes;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v951 = v1212[i$$14]
          }
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v513 = v951[j$$14]
          }
          v513.tracebackJ = j$$14 - 1
        }
      }
      j$$14 = j$$14 + 1;
      v516 = j$$14 < this.nodes[0].length
    }
    i$$14 = i$$14 + 1;
    v517 = i$$14 < this.nodes.length
  }
  var v1215 = this.nodes;
  var v1216 = this.nodes.length - 1;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v954 = v1215[v1216]
  }
  var v955 = this.nodes[0].length - 1;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
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
  var currentI = this.nodes.length - 1;
  var currentJ = this.nodes[0].length - 1;
  var v958 = this.nodes;
  var v959 = this.nodes.length - 1;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v521 = v958[v959]
  }
  var v522 = this.nodes[0].length - 1;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var currentNode = v521[v522]
  }
  var v961 = currentNode.tracebackI != undefined;
  if(v961) {
    v961 = currentNode.tracebackJ != undefined
  }
  var v537 = v961;
  for(;v537;) {
    var v962 = currentNode.tracebackI == currentI - 1;
    if(v962) {
      v962 = currentNode.tracebackJ == currentJ - 1
    }
    if(v962) {
      this.alignedM.push(this.M.pop());
      this.alignedN.push(this.N.pop())
    }else {
      if(currentNode.tracebackJ == currentJ - 1) {
        this.alignedM.push("-");
        this.alignedN.push(this.N.pop())
      }else {
        this.alignedM.push(this.M.pop());
        this.alignedN.push("-")
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    var v969 = this.nodes;
    var v970 = currentNode.tracebackI;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v535 = v969[v970]
    }
    var v536 = currentNode.tracebackJ;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      currentNode = v535[v536]
    }
    var v971 = currentNode.tracebackI != undefined;
    if(v971) {
      v971 = currentNode.tracebackJ != undefined
    }
    v537 = v971
  }
  var v1612 = this.alignedM.reverse();
  this.alignedM = v1612;
  var v1613 = this.alignedN.reverse();
  this.alignedN = v1613;
  return
}
function getAlignedM() {
  return this.alignedM.join("")
}
function getAlignedN() {
  return this.alignedN.join("")
}
function AlignPairQuad() {
  return
}
new ScoreSet;
ScoreSet.prototype.getScore = getScore;
ScoreSet.prototype.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;
var v545 = Identity;
var v1614 = new ScoringMatrix;
v545.prototype = v1614;
Identity.prototype.setMismatch = setMismatch;
Identity.prototype.setMatch = setMatch;
new AlignPairLinear;
AlignPairLinear.prototype.align = align;
AlignPairLinear.prototype.path = path;
AlignPairLinear.prototype.setAlignParam = setAlignParam;
AlignPairLinear.prototype.getAlignedM = getAlignedM;
AlignPairLinear.prototype.getAlignedN = getAlignedN;
new AlignPairQuad;
AlignPairQuad.prototype.initializeMatrix = initializeMatrix;
AlignPairQuad.prototype.fillMatrix = fillMatrix;
AlignPairQuad.prototype.align = alignQuad;
AlignPairQuad.prototype.getAlignedM = getAlignedM;
AlignPairQuad.prototype.getAlignedN = getAlignedN;
AlignPairQuad.prototype.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
JAM.set(document.getElementById("submitbtn"), "onclick", v3);
JAM.set(document.getElementById("clearbtn"), "onclick", v4);

