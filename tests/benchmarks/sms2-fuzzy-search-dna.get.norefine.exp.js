// sms2-fuzzy-search-dna.js
function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return
}
function v3() {
  try {
    fuzzySearchDna(document)
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
    introspect(JAM.policy.p5) {
      var v938 = arrayOfTitles[i$$1]
    }
    var v421 = JAM.call(v938.search, v938, [/\S/]) == -1;
    if(!v421) {
      introspect(JAM.policy.p5) {
        var v1043 = arrayOfSequences[i$$1]
      }
      var v735 = JAM.call(v1043.search, v1043, [/\S/]) == -1;
      if(!v735) {
        introspect(JAM.policy.p5) {
          var v1044 = arrayOfSequences[i$$1]
        }
        v735 = v1044.length != lengthOfAlign
      }
      v421 = v735
    }
    if(v421) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v423 = JAM.call(codonTable.search, codonTable, [/AmAcid/]) == -1;
  if(!v423) {
    var v738 = JAM.call(codonTable.search, codonTable, [/Codon/]) == -1;
    if(!v738) {
      var v943 = JAM.call(codonTable.search, codonTable, [/Number/]) == -1;
      if(!v943) {
        var v1046 = JAM.call(codonTable.search, codonTable, [/\/1000/]) == -1;
        if(!v1046) {
          v1046 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./]) == -1
        }
        v943 = v1046
      }
      v738 = v943
    }
    v423 = v738
  }
  if(v423) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v740 = formElement.value;
  if(JAM.call(v740.search, v740, [/\S/]) == -1) {
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
    introspect(JAM.policy.p5) {
      var v741 = arrayOfPatterns[z$$2]
    }
    if(JAM.call(v741.search, v741, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/]) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v742 = arrayOfPatterns[z$$2]
    }
    if(moreExpressionCheck(v742) == false) {
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
    introspect(JAM.policy.p5) {
      var v945 = arrayOfPatterns[j]
    }
    var v430 = JAM.call(v945.match, v945, [/\/.+\//]) + "gi";
    if(JAM.isEval(eval)) {
      var v1219 = eval("introspect(JAM.policy.pFull) { " + v430 + " }")
    }else {
      var v1219 = JAM.call(eval, null, [v430])
    }
    v20[v21] = v1219;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAM.policy.p5) {
      var v744 = arrayOfPatterns[j]
    }
    var v1220 = JAM.call(v744.match, v744, [/=[a-zA-Z\*]/]).toString();
    v22[v23] = v1220;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAM.policy.p5) {
      var v432 = geneticCodeMatchResult[j]
    }
    var v1221 = v432.replace(/=/g, "");
    v24[v25] = v1221;
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
      introspect(JAM.policy.p5) {
        var v746 = geneticCodeMatchExp[j]
      }
      if(JAM.call(codon.search, codon, [v746]) != -1) {
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
    introspect(JAM.policy.p5) {
      var v748 = arrayOfPatterns$$1[z$$3]
    }
    if(JAM.call(v748.search, v748, [/[^acdefghiklmnpqrstvwyz]/i]) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    v35 = z$$3 < arrayOfPatterns$$1.length
  }
  var i$$3 = 0;
  var v39 = i$$3 < arrayOfPatterns$$1.length;
  for(;v39;) {
    introspect(JAM.policy.p5) {
      var v749 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v749 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v38 = j$$1 < arrayOfPatterns$$1.length;
    for(;v38;) {
      introspect(JAM.policy.p5) {
        var v750 = arrayOfPatterns$$1[j$$1]
      }
      if(JAM.call(v750.search, v750, [re]) != -1) {
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
    introspect(JAM.policy.p5) {
      var v751 = arrayOfPatterns$$2[z$$4]
    }
    if(JAM.call(v751.search, v751, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i]) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v752 = arrayOfPatterns$$2[z$$4]
    }
    if(moreExpressionCheck(v752) == false) {
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
    introspect(JAM.policy.p5) {
      var v754 = alignArray[i$$4]
    }
    if(JAM.call(v754.search, v754, [/[^\s]+\s/]) == -1) {
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
  if(JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/]) != -1) {
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
  if(JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/]) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"'
  }
  stringToReturn = stringToReturn + ' starting "' + sequence$$2.substring(0, 10) + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/]) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"'
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + sequenceOne.substring(0, 10) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/]) != -1) {
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
    introspect(JAM.policy.p5) {
      var v947 = arrayOfPatterns$$3[j$$2]
    }
    var v479 = JAM.call(v947.match, v947, [/\/.+\//]) + "gi";
    if(JAM.isEval(eval)) {
      var v1222 = eval("introspect(JAM.policy.pFull) { " + v479 + " }")
    }else {
      var v1222 = JAM.call(eval, null, [v479])
    }
    v73[v74] = v1222;
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
    introspect(JAM.policy.p5) {
      var v756 = arrayOfPatterns$$4[j$$3]
    }
    var v1223 = JAM.call(v756.match, v756, [/=[a-zA-Z\*]/]).toString();
    v77[v78] = v1223;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAM.policy.p5) {
      var v483 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1224 = v483.replace(/=/g, "");
    v79[v80] = v1224;
    j$$3 = j$$3 + 1;
    v81 = j$$3 < arrayOfPatterns$$4.length
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/]) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"'
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + sequence$$3.substring(0, 10) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/]) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"'
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + sequence$$4.substring(0, 10) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/]) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"'
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + sequenceOne$$1.substring(0, 10) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/]) != -1) {
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
  if(JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/]) != -1) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if(JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/]) != -1) {
    fastaTitle = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""]).toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v511 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/]) != -1;
  if(!v511) {
    var v759 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/]) != -1;
    if(!v759) {
      var v949 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/]) != -1;
      if(!v949) {
        var v1049 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/]) != -1;
        if(!v1049) {
          var v1104 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//]) != -1;
          if(!v1104) {
            var v1132 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/]) != -1;
            if(!v1132) {
              var v1155 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/]) != -1;
              if(!v1155) {
                var v1169 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//]) != -1;
                if(!v1169) {
                  var v1181 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/]) != -1;
                  if(!v1181) {
                    var v1191 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</]) != -1;
                    if(!v1191) {
                      v1191 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/]) != -1
                    }
                    v1181 = v1191
                  }
                  v1169 = v1181
                }
                v1155 = v1169
              }
              v1132 = v1155
            }
            v1104 = v1132
          }
          v1049 = v1104
        }
        v949 = v1049
      }
      v759 = v949
    }
    v511 = v759
  }
  if(v511) {
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
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.p1), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
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
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.p1), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
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
  if(JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./]) != -1) {
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
  if(JAM.call(testString.search, testString, [re$$2]) == -1) {
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
  if(JAM.call(theNumber$$1.search, theNumber$$1, [/\d/]) == -1) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v526 = JAM.call(emblFile.search, emblFile, [/ID/]) == -1;
  if(!v526) {
    var v770 = JAM.call(emblFile.search, emblFile, [/AC/]) == -1;
    if(!v770) {
      var v960 = JAM.call(emblFile.search, emblFile, [/DE/]) == -1;
      if(!v960) {
        v960 = JAM.call(emblFile.search, emblFile, [/SQ/]) == -1
      }
      v770 = v960
    }
    v526 = v770
  }
  if(v526) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if(JAM.call(theNumber$$2.search, theNumber$$2, [/\d/]) == -1) {
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
  if(JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i]) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  if(JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i]) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v531 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/]) == -1;
  if(!v531) {
    var v773 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/]) == -1;
    if(!v773) {
      var v963 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/]) == -1;
      if(!v963) {
        v963 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/]) == -1
      }
      v773 = v963
    }
    v531 = v773
  }
  if(v531) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v532 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/]) == -1;
  if(!v532) {
    var v776 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/]) == -1;
    if(!v776) {
      var v966 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/]) == -1;
      if(!v966) {
        v966 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/]) == -1
      }
      v776 = v966
    }
    v532 = v776
  }
  if(v532) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  if(JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/]) == -1) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v534 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/]) == -1;
  if(!v534) {
    var v779 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/]) == -1;
    if(!v779) {
      var v969 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/]) == -1;
      if(!v969) {
        v969 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/]) == -1
      }
      v779 = v969
    }
    v534 = v779
  }
  if(v534) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  if(JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m]) == -1) {
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
    var v539 = adjustment < 0;
    if(v539) {
      v539 = adjusted >= 0
    }
    if(v539) {
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
  var v556 = sequence$$13.length <= firstIndexToMutate;
  if(!v556) {
    var v790 = lastIndexToMutate < 0;
    if(!v790) {
      v790 = lastIndexToMutate <= firstIndexToMutate
    }
    v556 = v790
  }
  if(v556) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    var v558 = randNum < firstIndexToMutate;
    if(!v558) {
      v558 = randNum > lastIndexToMutate
    }
    if(v558) {
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
      introspect(JAM.policy.p5) {
        var v562 = components$$1[componentsIndex]
      }
      if(v562 != currentChar) {
        needNewChar = false
      }
    }
    var v563 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.p5) {
      var v564 = components$$1[componentsIndex]
    }
    sequence$$13 = v563 + v564 + sequence$$13.substring(randNum + 1, sequence$$13.length);
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
    introspect(JAM.policy.p5) {
      var v573 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v573.match, v573, [/\/.+\//]) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.p5) {
      var v976 = arrayOfItems[i$$9]
    }
    cutDistance = parseFloat(JAM.call(v976.match, v976, [/\)\D*\d+/]).toString().replace(/\)\D*/, ""));
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v575 = matchPosition >= lowerLimit;
      if(v575) {
        v575 = matchPosition < upperLimit
      }
      if(v575) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v244 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    if(JAM.call(tempString$$1.search, tempString$$1, [/\d/]) != -1) {
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
    var v1138 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p5) {
      var v1187 = arrayOfItems[i$$9]
    }
    JAM.call(v250.write, v250, [v1138 + JAM.call(v1187.match, v1187, [/\([^\(]+\)/]).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"]);
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
    introspect(JAM.policy.p5) {
      var v584 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v584.match, v584, [/\/[^\/]+\//]) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1]) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1]).length
    }
    var percentage = 0;
    var v800 = originalLength + 1;
    introspect(JAM.policy.p5) {
      var v1069 = arrayOfItems$$1[i$$10]
    }
    if(v800 - parseFloat(JAM.call(v1069.match, v1069, [/\d+/])) > 0) {
      var v260 = 100 * tempNumber;
      var v587 = originalLength + 1;
      introspect(JAM.policy.p5) {
        var v980 = arrayOfItems$$1[i$$10]
      }
      percentage = v260 / (v587 - parseFloat(JAM.call(v980.match, v980, [/\d+/])))
    }
    var v263 = outputWindow.document;
    introspect(JAM.policy.p5) {
      var v1188 = arrayOfItems$$1[i$$10]
    }
    JAM.call(v263.write, v263, ["<tr><td>" + JAM.call(v1188.match, v1188, [/\([^\(]+\)\b/]).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n"]);
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
function fuzzySearchDna(theDocument) {
  var targetSequence = "";
  var targetTitle = "";
  var querySequence = "";
  var queryTitle = "";
  var maxTarget = 2E3;
  var maxQuery = 30;
  if(testScript() == false) {
    return false
  }
  var v596 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v596) {
    var v806 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxTarget) == false;
    if(!v806) {
      var v984 = checkFormElement(theDocument.forms[0].elements[1]) == false;
      if(!v984) {
        v984 = checkSequenceLength(theDocument.forms[0].elements[1].value, maxQuery) == false
      }
      v806 = v984
    }
    v596 = v806
  }
  if(v596) {
    return false
  }
  var v808 = theDocument.forms[0].elements[5].options;
  var v809 = theDocument.forms[0].elements[5].selectedIndex;
  introspect(JAM.policy.p5) {
    var v597 = v808[v809]
  }
  var MATCH_SCORE = parseInt(v597.value);
  var v810 = theDocument.forms[0].elements[6].options;
  var v811 = theDocument.forms[0].elements[6].selectedIndex;
  introspect(JAM.policy.p5) {
    var v598 = v810[v811]
  }
  var MISMATCH_SCORE = parseInt(v598.value);
  var v812 = theDocument.forms[0].elements[7].options;
  var v813 = theDocument.forms[0].elements[7].selectedIndex;
  introspect(JAM.policy.p5) {
    var v599 = v812[v813]
  }
  var GAP_PENALTY = parseInt(v599.value);
  var v814 = theDocument.forms[0].elements[8].options;
  var v815 = theDocument.forms[0].elements[8].selectedIndex;
  introspect(JAM.policy.p5) {
    var v600 = v814[v815]
  }
  var HITS = parseInt(v600.value);
  openWindow("Fuzzy Search DNA");
  openPre();
  targetSequence = getSequenceFromFasta(theDocument.forms[0].elements[0].value);
  targetSequence = removeNonDna(targetSequence);
  targetTitle = getTitleFromFasta(theDocument.forms[0].elements[0].value);
  querySequence = getSequenceFromFasta(theDocument.forms[0].elements[1].value);
  querySequence = removeNonDna(querySequence);
  queryTitle = "query";
  var v285 = outputWindow.document;
  JAM.call(v285.write, v285, [getFuzzySearchTitle(targetTitle, targetSequence, queryTitle, querySequence)]);
  if(JAM.call(targetSequence.search, targetSequence, [/./]) != -1) {
    targetSequence = JAM.call(targetSequence.match, targetSequence, [/./g])
  }
  if(JAM.call(querySequence.search, querySequence, [/./]) != -1) {
    querySequence = JAM.call(querySequence.match, querySequence, [/./g])
  }
  if(targetSequence.length == 0) {
    alert("The sequence contains no DNA bases.");
    return false
  }
  if(querySequence.length == 0) {
    alert("The query sequence contains no DNA bases.");
    return false
  }
  _fuzzySearchDna(queryTitle, querySequence, targetTitle, targetSequence, MATCH_SCORE, MISMATCH_SCORE, GAP_PENALTY, HITS);
  closePre();
  closeWindow();
  return true
}
function _fuzzySearchDna(queryTitle$$1, querySequence$$1, targetTitle$$1, targetSequence$$1, matchScore, mismatchScore, gapPenalty, hits) {
  var matrix = new Identity;
  JAM.call(matrix.setMatch, matrix, [matchScore]);
  JAM.call(matrix.setMismatch, matrix, [mismatchScore]);
  var scoreSet = new ScoreSet;
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [matrix, gapPenalty, hits]);
  var fuzzySearch = new FuzzySearch;
  JAM.call(fuzzySearch.initializeMatrix, fuzzySearch, [querySequence$$1, targetSequence$$1, scoreSet]);
  fuzzySearch.search();
  hits = fuzzySearch.getHits();
  if(hits.length > 0) {
    var i$$11 = 0;
    var v301 = i$$11 < hits.length;
    for(;v301;) {
      var v291 = outputWindow.document;
      var v1087 = ">" + queryTitle$$1 + " from ";
      introspect(JAM.policy.p5) {
        var v1126 = hits[i$$11]
      }
      var v819 = v1087 + v1126.startM + " to ";
      introspect(JAM.policy.p5) {
        var v998 = hits[i$$11]
      }
      JAM.call(v291.write, v291, [v819 + v998.endM + "\n"]);
      var v293 = outputWindow.document;
      introspect(JAM.policy.p5) {
        var v821 = hits[i$$11]
      }
      JAM.call(v293.write, v293, [v821.sequenceM + "\n"]);
      var v295 = outputWindow.document;
      var v1089 = ">" + targetTitle$$1 + " from ";
      introspect(JAM.policy.p5) {
        var v1128 = hits[i$$11]
      }
      var v822 = v1089 + v1128.startN + " to ";
      introspect(JAM.policy.p5) {
        var v1000 = hits[i$$11]
      }
      JAM.call(v295.write, v295, [v822 + v1000.endN + "\n"]);
      var v297 = outputWindow.document;
      introspect(JAM.policy.p5) {
        var v824 = hits[i$$11]
      }
      JAM.call(v297.write, v297, [v824.sequenceN + "\n"]);
      var v299 = outputWindow.document;
      introspect(JAM.policy.p5) {
        var v1001 = hits[i$$11]
      }
      JAM.call(v299.write, v299, ["Score: " + v1001.score + "\n\n"]);
      i$$11 = i$$11 + 1;
      v301 = i$$11 < hits.length
    }
  }else {
    var v302 = outputWindow.document;
    JAM.call(v302.write, v302, ["No hits were obtained.\n\n"])
  }
  return
}
function getScore(r1$$1, r2) {
  var v304 = this.scoringMatrix;
  return JAM.call(v304.scoringMatrix_getScore, v304, [r1$$1, r2])
}
function setScoreSetParam(scoringMatrix, gapPenalty$$1, hits$$1) {
  this.scoringMatrix = scoringMatrix;
  this.gap = gapPenalty$$1;
  this.hits = hits$$1;
  return
}
function ScoreSet() {
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
function Node() {
  this.alreadyMatched = false;
  return
}
function initializeMatrix(sequenceOne$$2, sequenceTwo$$2, scoreSet$$1) {
  this.scoreSet = scoreSet$$1;
  this.M = sequenceOne$$2;
  this.N = sequenceTwo$$2;
  this.score = 0;
  var v1225 = new Array(this.M.length + 1);
  this.nodes = v1225;
  var i$$12 = 0;
  var v312 = i$$12 < this.nodes.length;
  for(;v312;) {
    var v307 = this.nodes;
    var v308 = i$$12;
    var v1226 = new Array(this.N.length + 1);
    v307[v308] = v1226;
    var j$$10 = 0;
    var v1003 = this.nodes;
    introspect(JAM.policy.p5) {
      var v829 = v1003[i$$12]
    }
    var v311 = j$$10 < v829.length;
    for(;v311;) {
      var v620 = this.nodes;
      introspect(JAM.policy.p5) {
        var v309 = v620[i$$12]
      }
      var v310 = j$$10;
      var v1227 = new Node;
      v309[v310] = v1227;
      j$$10 = j$$10 + 1;
      var v1004 = this.nodes;
      introspect(JAM.policy.p5) {
        var v830 = v1004[i$$12]
      }
      v311 = j$$10 < v830.length
    }
    i$$12 = i$$12 + 1;
    v312 = i$$12 < this.nodes.length
  }
  this.nodes[0][0].value = 0;
  i$$12 = 1;
  var v317 = i$$12 < this.nodes.length;
  for(;v317;) {
    var v834 = this.nodes;
    introspect(JAM.policy.p5) {
      var v625 = v834[i$$12]
    }
    var v314 = v625[0];
    var v1005 = this.nodes;
    var v1006 = i$$12 - 1;
    introspect(JAM.policy.p5) {
      var v835 = v1005[v1006]
    }
    v314.value = v835[0].value;
    var v836 = this.nodes;
    introspect(JAM.policy.p5) {
      var v627 = v836[i$$12]
    }
    v627[0].tracebackI = i$$12 - 1;
    var v837 = this.nodes;
    introspect(JAM.policy.p5) {
      var v628 = v837[i$$12]
    }
    v628[0].tracebackJ = 0;
    i$$12 = i$$12 + 1;
    v317 = i$$12 < this.nodes.length
  }
  j$$10 = 1;
  var v321 = j$$10 < this.nodes[0].length;
  for(;v321;) {
    var v631 = this.nodes[0];
    introspect(JAM.policy.p5) {
      var v318 = v631[j$$10]
    }
    var v841 = this.nodes[0];
    var v842 = j$$10 - 1;
    introspect(JAM.policy.p5) {
      var v632 = v841[v842]
    }
    v318.value = v632.value;
    var v633 = this.nodes[0];
    introspect(JAM.policy.p5) {
      var v319 = v633[j$$10]
    }
    v319.tracebackI = 0;
    var v634 = this.nodes[0];
    introspect(JAM.policy.p5) {
      var v320 = v634[j$$10]
    }
    v320.tracebackJ = j$$10 - 1;
    j$$10 = j$$10 + 1;
    v321 = j$$10 < this.nodes[0].length
  }
  return
}
function dumpMatrix() {
  var v322 = outputWindow.document;
  JAM.call(v322.write, v322, ["Dynamic programming matrix i=" + this.nodes.length + " and j=" + this.nodes[0].length]);
  var v324 = outputWindow.document;
  JAM.call(v324.write, v324, ["\n"]);
  var i$$13 = 0;
  var v335 = i$$13 < this.nodes.length;
  for(;v335;) {
    var j$$11 = 0;
    var v1012 = this.nodes;
    introspect(JAM.policy.p5) {
      var v849 = v1012[i$$13]
    }
    var v333 = j$$11 < v849.length;
    for(;v333;) {
      var v850 = this.nodes;
      introspect(JAM.policy.p5) {
        var v640 = v850[i$$13]
      }
      introspect(JAM.policy.p5) {
        var v325 = v640[j$$11]
      }
      var traceI = v325.tracebackI;
      var v851 = this.nodes;
      introspect(JAM.policy.p5) {
        var v641 = v851[i$$13]
      }
      introspect(JAM.policy.p5) {
        var v326 = v641[j$$11]
      }
      var traceJ = v326.tracebackJ;
      if(traceI == undefined) {
        traceI = "u"
      }
      if(traceJ == undefined) {
        traceJ = "u"
      }
      var v329 = "(" + i$$13 + "," + j$$11 + ")[" + traceI + "," + traceJ + "]=";
      var v1014 = this.nodes;
      introspect(JAM.policy.p5) {
        var v853 = v1014[i$$13]
      }
      introspect(JAM.policy.p5) {
        var v643 = v853[j$$11]
      }
      var output = v329 + v643.value;
      var v331 = outputWindow.document;
      JAM.call(v331.write, v331, [rightNum(output, "", 20, " ")]);
      j$$11 = j$$11 + 1;
      var v1015 = this.nodes;
      introspect(JAM.policy.p5) {
        var v854 = v1015[i$$13]
      }
      v333 = j$$11 < v854.length
    }
    var v334 = outputWindow.document;
    JAM.call(v334.write, v334, ["\n"]);
    i$$13 = i$$13 + 1;
    v335 = i$$13 < this.nodes.length
  }
  var v336 = outputWindow.document;
  JAM.call(v336.write, v336, ["\n"]);
  return
}
function updateMatrix() {
  var i$$14 = 1;
  var v377 = i$$14 < this.nodes.length;
  for(;v377;) {
    var j$$12 = 1;
    var v376 = j$$12 < this.nodes[0].length;
    for(;v376;) {
      var a;
      var b;
      var c;
      var v1017 = this.nodes;
      introspect(JAM.policy.p5) {
        var v858 = v1017[i$$14]
      }
      introspect(JAM.policy.p5) {
        var v648 = v858[j$$12]
      }
      if(v648.alreadyMatched) {
        a = 0;
        b = 0;
        c = 0
      }else {
        var v649 = i$$14 == this.nodes.length - 1;
        if(v649) {
          v649 = j$$12 == this.nodes[0].length - 1
        }
        if(v649) {
          var v861 = this.nodes;
          var v862 = i$$14 - 1;
          introspect(JAM.policy.p5) {
            var v650 = v861[v862]
          }
          introspect(JAM.policy.p5) {
            var v337 = v650[j$$12]
          }
          a = v337.value;
          var v863 = this.nodes;
          introspect(JAM.policy.p5) {
            var v651 = v863[i$$14]
          }
          var v652 = j$$12 - 1;
          introspect(JAM.policy.p5) {
            var v338 = v651[v652]
          }
          b = v338.value;
          var v1020 = this.nodes;
          var v1021 = i$$14 - 1;
          introspect(JAM.policy.p5) {
            var v864 = v1020[v1021]
          }
          var v865 = j$$12 - 1;
          introspect(JAM.policy.p5) {
            var v653 = v864[v865]
          }
          var v339 = v653.value;
          var v654 = this.scoreSet;
          var v866 = this.M;
          var v867 = i$$14 - 1;
          introspect(JAM.policy.p5) {
            var v655 = v866[v867]
          }
          var v868 = this.N;
          var v869 = j$$12 - 1;
          introspect(JAM.policy.p5) {
            var v656 = v868[v869]
          }
          c = v339 + JAM.call(v654.getScore, v654, [v655, v656])
        }else {
          if(i$$14 == this.nodes.length - 1) {
            var v1023 = this.nodes;
            var v1024 = i$$14 - 1;
            introspect(JAM.policy.p5) {
              var v871 = v1023[v1024]
            }
            introspect(JAM.policy.p5) {
              var v658 = v871[j$$12]
            }
            a = v658.value - this.scoreSet.gap;
            var v872 = this.nodes;
            introspect(JAM.policy.p5) {
              var v660 = v872[i$$14]
            }
            var v661 = j$$12 - 1;
            introspect(JAM.policy.p5) {
              var v343 = v660[v661]
            }
            b = v343.value;
            var v1025 = this.nodes;
            var v1026 = i$$14 - 1;
            introspect(JAM.policy.p5) {
              var v873 = v1025[v1026]
            }
            var v874 = j$$12 - 1;
            introspect(JAM.policy.p5) {
              var v662 = v873[v874]
            }
            var v344 = v662.value;
            var v663 = this.scoreSet;
            var v875 = this.M;
            var v876 = i$$14 - 1;
            introspect(JAM.policy.p5) {
              var v664 = v875[v876]
            }
            var v877 = this.N;
            var v878 = j$$12 - 1;
            introspect(JAM.policy.p5) {
              var v665 = v877[v878]
            }
            c = v344 + JAM.call(v663.getScore, v663, [v664, v665])
          }else {
            if(j$$12 == this.nodes[0].length - 1) {
              var v880 = this.nodes;
              var v881 = i$$14 - 1;
              introspect(JAM.policy.p5) {
                var v667 = v880[v881]
              }
              introspect(JAM.policy.p5) {
                var v346 = v667[j$$12]
              }
              a = v346.value;
              var v1028 = this.nodes;
              introspect(JAM.policy.p5) {
                var v882 = v1028[i$$14]
              }
              var v883 = j$$12 - 1;
              introspect(JAM.policy.p5) {
                var v668 = v882[v883]
              }
              b = v668.value - this.scoreSet.gap;
              var v1029 = this.nodes;
              var v1030 = i$$14 - 1;
              introspect(JAM.policy.p5) {
                var v884 = v1029[v1030]
              }
              var v885 = j$$12 - 1;
              introspect(JAM.policy.p5) {
                var v670 = v884[v885]
              }
              var v349 = v670.value;
              var v671 = this.scoreSet;
              var v886 = this.M;
              var v887 = i$$14 - 1;
              introspect(JAM.policy.p5) {
                var v672 = v886[v887]
              }
              var v888 = this.N;
              var v889 = j$$12 - 1;
              introspect(JAM.policy.p5) {
                var v673 = v888[v889]
              }
              c = v349 + JAM.call(v671.getScore, v671, [v672, v673])
            }else {
              var v1031 = this.nodes;
              var v1032 = i$$14 - 1;
              introspect(JAM.policy.p5) {
                var v890 = v1031[v1032]
              }
              introspect(JAM.policy.p5) {
                var v674 = v890[j$$12]
              }
              a = v674.value - this.scoreSet.gap;
              var v1033 = this.nodes;
              introspect(JAM.policy.p5) {
                var v891 = v1033[i$$14]
              }
              var v892 = j$$12 - 1;
              introspect(JAM.policy.p5) {
                var v676 = v891[v892]
              }
              b = v676.value - this.scoreSet.gap;
              var v1034 = this.nodes;
              var v1035 = i$$14 - 1;
              introspect(JAM.policy.p5) {
                var v893 = v1034[v1035]
              }
              var v894 = j$$12 - 1;
              introspect(JAM.policy.p5) {
                var v678 = v893[v894]
              }
              var v355 = v678.value;
              var v679 = this.scoreSet;
              var v895 = this.M;
              var v896 = i$$14 - 1;
              introspect(JAM.policy.p5) {
                var v680 = v895[v896]
              }
              var v897 = this.N;
              var v898 = j$$12 - 1;
              introspect(JAM.policy.p5) {
                var v681 = v897[v898]
              }
              c = v355 + JAM.call(v679.getScore, v679, [v680, v681])
            }
          }
        }
      }
      var v682 = a > b;
      if(v682) {
        v682 = a > c
      }
      if(v682) {
        var v899 = this.nodes;
        introspect(JAM.policy.p5) {
          var v683 = v899[i$$14]
        }
        introspect(JAM.policy.p5) {
          var v361 = v683[j$$12]
        }
        v361.value = a;
        var v900 = this.nodes;
        introspect(JAM.policy.p5) {
          var v684 = v900[i$$14]
        }
        introspect(JAM.policy.p5) {
          var v362 = v684[j$$12]
        }
        v362.tracebackI = i$$14 - 1;
        var v901 = this.nodes;
        introspect(JAM.policy.p5) {
          var v685 = v901[i$$14]
        }
        introspect(JAM.policy.p5) {
          var v363 = v685[j$$12]
        }
        v363.tracebackJ = j$$12
      }else {
        var v686 = b > c;
        if(v686) {
          v686 = b > a
        }
        if(v686) {
          var v902 = this.nodes;
          introspect(JAM.policy.p5) {
            var v687 = v902[i$$14]
          }
          introspect(JAM.policy.p5) {
            var v364 = v687[j$$12]
          }
          v364.value = b;
          var v903 = this.nodes;
          introspect(JAM.policy.p5) {
            var v688 = v903[i$$14]
          }
          introspect(JAM.policy.p5) {
            var v365 = v688[j$$12]
          }
          v365.tracebackI = i$$14;
          var v904 = this.nodes;
          introspect(JAM.policy.p5) {
            var v689 = v904[i$$14]
          }
          introspect(JAM.policy.p5) {
            var v366 = v689[j$$12]
          }
          v366.tracebackJ = j$$12 - 1
        }else {
          var v905 = this.nodes;
          introspect(JAM.policy.p5) {
            var v690 = v905[i$$14]
          }
          introspect(JAM.policy.p5) {
            var v367 = v690[j$$12]
          }
          v367.value = c;
          var v906 = this.nodes;
          introspect(JAM.policy.p5) {
            var v691 = v906[i$$14]
          }
          introspect(JAM.policy.p5) {
            var v368 = v691[j$$12]
          }
          v368.tracebackI = i$$14 - 1;
          var v907 = this.nodes;
          introspect(JAM.policy.p5) {
            var v692 = v907[i$$14]
          }
          introspect(JAM.policy.p5) {
            var v369 = v692[j$$12]
          }
          v369.tracebackJ = j$$12 - 1
        }
      }
      var v1096 = this.nodes;
      introspect(JAM.policy.p5) {
        var v1036 = v1096[i$$14]
      }
      introspect(JAM.policy.p5) {
        var v908 = v1036[j$$12]
      }
      if(v908.value < 0) {
        var v909 = this.nodes;
        introspect(JAM.policy.p5) {
          var v694 = v909[i$$14]
        }
        introspect(JAM.policy.p5) {
          var v372 = v694[j$$12]
        }
        v372.value = 0;
        var v910 = this.nodes;
        introspect(JAM.policy.p5) {
          var v695 = v910[i$$14]
        }
        introspect(JAM.policy.p5) {
          var v373 = v695[j$$12]
        }
        v373.tracebackI = undefined;
        var v911 = this.nodes;
        introspect(JAM.policy.p5) {
          var v696 = v911[i$$14]
        }
        introspect(JAM.policy.p5) {
          var v374 = v696[j$$12]
        }
        v374.tracebackJ = undefined
      }
      j$$12 = j$$12 + 1;
      v376 = j$$12 < this.nodes[0].length
    }
    i$$14 = i$$14 + 1;
    v377 = i$$14 < this.nodes.length
  }
  var v914 = this.nodes;
  var v915 = this.nodes.length - 1;
  introspect(JAM.policy.p5) {
    var v699 = v914[v915]
  }
  var v700 = this.nodes[0].length - 1;
  introspect(JAM.policy.p5) {
    var v378 = v699[v700]
  }
  this.score = v378.value;
  return
}
function search() {
  var v1228 = new Array;
  this.hits = v1228;
  var hitCount = 0;
  var v402 = hitCount < this.scoreSet.hits;
  for(;v402;) {
    this.updateMatrix();
    var maxNodeValue = 0;
    var maxNodeI = undefined;
    var maxNodeJ = undefined;
    var i$$15 = 1;
    var v382 = i$$15 < this.nodes.length;
    for(;v382;) {
      var j$$13 = 1;
      var v381 = j$$13 < this.nodes[0].length;
      for(;v381;) {
        var v1099 = this.nodes;
        introspect(JAM.policy.p5) {
          var v1041 = v1099[i$$15]
        }
        introspect(JAM.policy.p5) {
          var v920 = v1041[j$$13]
        }
        if(v920.value > maxNodeValue) {
          var v921 = this.nodes;
          introspect(JAM.policy.p5) {
            var v705 = v921[i$$15]
          }
          introspect(JAM.policy.p5) {
            var v379 = v705[j$$13]
          }
          maxNodeValue = v379.value;
          maxNodeI = i$$15;
          maxNodeJ = j$$13
        }
        j$$13 = j$$13 + 1;
        v381 = j$$13 < this.nodes[0].length
      }
      i$$15 = i$$15 + 1;
      v382 = i$$15 < this.nodes.length
    }
    if(maxNodeValue == 0) {
      break
    }
    var currentI = maxNodeI;
    var currentJ = maxNodeJ;
    var v708 = this.nodes;
    introspect(JAM.policy.p5) {
      var v384 = v708[maxNodeI]
    }
    introspect(JAM.policy.p5) {
      var currentNode = v384[maxNodeJ]
    }
    var alignedM = new Array;
    var alignedN = new Array;
    var score = currentNode.value;
    var endM = undefined;
    var endN = undefined;
    var v709 = currentNode.tracebackI != undefined;
    if(v709) {
      v709 = currentNode.tracebackJ != undefined
    }
    var v399 = v709;
    for(;v399;) {
      var v710 = currentI == 0;
      if(!v710) {
        v710 = currentJ == 0
      }
      if(v710) {
        break
      }
      var v711 = currentNode.tracebackI == currentI - 1;
      if(v711) {
        v711 = currentNode.tracebackJ == currentJ - 1
      }
      if(v711) {
        if(endM == undefined) {
          endM = currentI;
          endN = currentJ
        }
        var v712 = this.M;
        var v713 = currentI - 1;
        introspect(JAM.policy.p5) {
          var v387 = v712[v713]
        }
        alignedM.push(v387);
        var v714 = this.N;
        var v715 = currentJ - 1;
        introspect(JAM.policy.p5) {
          var v388 = v714[v715]
        }
        alignedN.push(v388)
      }else {
        if(currentNode.tracebackJ == currentJ - 1) {
          if(endM != undefined) {
            alignedM.push("-");
            var v718 = this.N;
            var v719 = currentJ - 1;
            introspect(JAM.policy.p5) {
              var v389 = v718[v719]
            }
            alignedN.push(v389)
          }
        }else {
          if(endM != undefined) {
            var v720 = this.M;
            var v721 = currentI - 1;
            introspect(JAM.policy.p5) {
              var v391 = v720[v721]
            }
            alignedM.push(v391);
            alignedN.push("-")
          }
        }
      }
      var v931 = this.nodes;
      introspect(JAM.policy.p5) {
        var v722 = v931[currentI]
      }
      introspect(JAM.policy.p5) {
        var v395 = v722[currentJ]
      }
      v395.value = 0;
      var v932 = this.nodes;
      introspect(JAM.policy.p5) {
        var v723 = v932[currentI]
      }
      introspect(JAM.policy.p5) {
        var v396 = v723[currentJ]
      }
      v396.alreadyMatched = true;
      currentI = currentNode.tracebackI;
      currentJ = currentNode.tracebackJ;
      var v724 = this.nodes;
      var v725 = currentNode.tracebackI;
      introspect(JAM.policy.p5) {
        var v397 = v724[v725]
      }
      var v398 = currentNode.tracebackJ;
      introspect(JAM.policy.p5) {
        currentNode = v397[v398]
      }
      var v726 = currentNode.tracebackI != undefined;
      if(v726) {
        v726 = currentNode.tracebackJ != undefined
      }
      v399 = v726
    }
    alignedM = alignedM.reverse();
    alignedN = alignedN.reverse();
    this.hits.push(new Hit(alignedM.join(""), alignedN.join(""), score, currentI + 1, endM, currentJ + 1, endN));
    hitCount = hitCount + 1;
    v402 = hitCount < this.scoreSet.hits
  }
  return
}
function getHits() {
  return this.hits
}
function FuzzySearch() {
  return
}
function Hit(sequenceM, sequenceN, score$$1, startM, endM$$1, startN, endN$$1) {
  this.sequenceM = sequenceM;
  this.sequenceN = sequenceN;
  this.score = score$$1;
  this.startM = startM;
  this.endM = endM$$1;
  this.startN = startN;
  this.endN = endN$$1;
  return
}
new ScoreSet;
ScoreSet.prototype.getScore = getScore;
ScoreSet.prototype.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;
var v406 = Identity;
var v1229 = new ScoringMatrix;
v406.prototype = v1229;
Identity.prototype.setMismatch = setMismatch;
Identity.prototype.setMatch = setMatch;
new FuzzySearch;
FuzzySearch.prototype.initializeMatrix = initializeMatrix;
FuzzySearch.prototype.updateMatrix = updateMatrix;
FuzzySearch.prototype.search = search;
FuzzySearch.prototype.getHits = getHits;
FuzzySearch.prototype.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
JAM.set(document.getElementById("submitbtn"), "onclick", v3);
JAM.set(document.getElementById("clearbtn"), "onclick", v4)
