function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return
}
function v3() {
  try {
    fuzzySearchProtein(document)
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
    introspect(JAM.policy.p11) {
      var v967 = arrayOfTitles[i$$1]
    }
    var v436 = JAM.call(v967.search, v967, [/\S/]) == -1;
    if(!v436) {
      introspect(JAM.policy.p11) {
        var v1071 = arrayOfSequences[i$$1]
      }
      var v759 = JAM.call(v1071.search, v1071, [/\S/]) == -1;
      if(!v759) {
        introspect(JAM.policy.p11) {
          var v1072 = arrayOfSequences[i$$1]
        }
        v759 = v1072.length != lengthOfAlign
      }
      v436 = v759
    }
    if(v436) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v438 = JAM.call(codonTable.search, codonTable, [/AmAcid/]) == -1;
  if(!v438) {
    var v762 = JAM.call(codonTable.search, codonTable, [/Codon/]) == -1;
    if(!v762) {
      var v972 = JAM.call(codonTable.search, codonTable, [/Number/]) == -1;
      if(!v972) {
        var v1074 = JAM.call(codonTable.search, codonTable, [/\/1000/]) == -1;
        if(!v1074) {
          v1074 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./]) == -1
        }
        v972 = v1074
      }
      v762 = v972
    }
    v438 = v762
  }
  if(v438) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v764 = formElement.value;
  if(JAM.call(v764.search, v764, [/\S/]) == -1) {
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
    introspect(JAM.policy.p11) {
      var v765 = arrayOfPatterns[z$$2]
    }
    if(JAM.call(v765.search, v765, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/]) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p11) {
      var v766 = arrayOfPatterns[z$$2]
    }
    if(moreExpressionCheck(v766) == false) {
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
    introspect(JAM.policy.p11) {
      var v974 = arrayOfPatterns[j]
    }
    var v445 = v974.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1239 = eval("introspect(JAM.policy.pFull) { " + v445 + " }")
    }else {
      var v1239 = JAM.call(eval, null, [v445])
    }
    v20[v21] = v1239;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAM.policy.p11) {
      var v768 = arrayOfPatterns[j]
    }
    var v1240 = v768.match(/=[a-zA-Z\*]/).toString();
    v22[v23] = v1240;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAM.policy.p11) {
      var v447 = geneticCodeMatchResult[j]
    }
    var v1241 = v447.replace(/=/g, "");
    v24[v25] = v1241;
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
      introspect(JAM.policy.p11) {
        var v770 = geneticCodeMatchExp[j]
      }
      if(JAM.call(codon.search, codon, [v770]) != -1) {
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
    introspect(JAM.policy.p11) {
      var v772 = arrayOfPatterns$$1[z$$3]
    }
    if(JAM.call(v772.search, v772, [/[^acdefghiklmnpqrstvwyz]/i]) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    v35 = z$$3 < arrayOfPatterns$$1.length
  }
  var i$$3 = 0;
  var v39 = i$$3 < arrayOfPatterns$$1.length;
  for(;v39;) {
    introspect(JAM.policy.p11) {
      var v773 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v773 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v38 = j$$1 < arrayOfPatterns$$1.length;
    for(;v38;) {
      introspect(JAM.policy.p11) {
        var v774 = arrayOfPatterns$$1[j$$1]
      }
      if(JAM.call(v774.search, v774, [re]) != -1) {
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
    introspect(JAM.policy.p11) {
      var v775 = arrayOfPatterns$$2[z$$4]
    }
    if(JAM.call(v775.search, v775, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i]) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p11) {
      var v776 = arrayOfPatterns$$2[z$$4]
    }
    if(moreExpressionCheck(v776) == false) {
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
    introspect(JAM.policy.p11) {
      var v778 = alignArray[i$$4]
    }
    if(JAM.call(v778.search, v778, [/[^\s]+\s/]) == -1) {
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
    introspect(JAM.policy.p11) {
      var v976 = arrayOfPatterns$$3[j$$2]
    }
    var v494 = v976.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1242 = eval("introspect(JAM.policy.pFull) { " + v494 + " }")
    }else {
      var v1242 = JAM.call(eval, null, [v494])
    }
    v73[v74] = v1242;
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
    introspect(JAM.policy.p11) {
      var v780 = arrayOfPatterns$$4[j$$3]
    }
    var v1243 = v780.match(/=[a-zA-Z\*]/).toString();
    v77[v78] = v1243;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAM.policy.p11) {
      var v498 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1244 = v498.replace(/=/g, "");
    v79[v80] = v1244;
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
    fastaTitle = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "").toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v526 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/]) != -1;
  if(!v526) {
    var v783 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/]) != -1;
    if(!v783) {
      var v978 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/]) != -1;
      if(!v978) {
        var v1077 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/]) != -1;
        if(!v1077) {
          var v1130 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//]) != -1;
          if(!v1130) {
            var v1156 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/]) != -1;
            if(!v1156) {
              var v1175 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/]) != -1;
              if(!v1175) {
                var v1189 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//]) != -1;
                if(!v1189) {
                  var v1201 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/]) != -1;
                  if(!v1201) {
                    var v1211 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</]) != -1;
                    if(!v1211) {
                      v1211 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/]) != -1
                    }
                    v1201 = v1211
                  }
                  v1189 = v1201
                }
                v1175 = v1189
              }
              v1156 = v1175
            }
            v1130 = v1156
          }
          v1077 = v1130
        }
        v978 = v1077
      }
      v783 = v978
    }
    v526 = v783
  }
  if(v526) {
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
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.p7), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
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
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.p7), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
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
  var v541 = JAM.call(emblFile.search, emblFile, [/ID/]) == -1;
  if(!v541) {
    var v794 = JAM.call(emblFile.search, emblFile, [/AC/]) == -1;
    if(!v794) {
      var v989 = JAM.call(emblFile.search, emblFile, [/DE/]) == -1;
      if(!v989) {
        v989 = JAM.call(emblFile.search, emblFile, [/SQ/]) == -1
      }
      v794 = v989
    }
    v541 = v794
  }
  if(v541) {
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
  var v546 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/]) == -1;
  if(!v546) {
    var v797 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/]) == -1;
    if(!v797) {
      var v992 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/]) == -1;
      if(!v992) {
        v992 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/]) == -1
      }
      v797 = v992
    }
    v546 = v797
  }
  if(v546) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v547 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/]) == -1;
  if(!v547) {
    var v800 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/]) == -1;
    if(!v800) {
      var v995 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/]) == -1;
      if(!v995) {
        v995 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/]) == -1
      }
      v800 = v995
    }
    v547 = v800
  }
  if(v547) {
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
  var v549 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/]) == -1;
  if(!v549) {
    var v803 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/]) == -1;
    if(!v803) {
      var v998 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/]) == -1;
      if(!v998) {
        v998 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/]) == -1
      }
      v803 = v998
    }
    v549 = v803
  }
  if(v549) {
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
    var v554 = adjustment < 0;
    if(v554) {
      v554 = adjusted >= 0
    }
    if(v554) {
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
  var v571 = sequence$$13.length <= firstIndexToMutate;
  if(!v571) {
    var v814 = lastIndexToMutate < 0;
    if(!v814) {
      v814 = lastIndexToMutate <= firstIndexToMutate
    }
    v571 = v814
  }
  if(v571) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    var v573 = randNum < firstIndexToMutate;
    if(!v573) {
      v573 = randNum > lastIndexToMutate
    }
    if(v573) {
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
      introspect(JAM.policy.p11) {
        var v577 = components$$1[componentsIndex]
      }
      if(v577 != currentChar) {
        needNewChar = false
      }
    }
    var v578 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.p11) {
      var v579 = components$$1[componentsIndex]
    }
    sequence$$13 = v578 + v579 + sequence$$13.substring(randNum + 1, sequence$$13.length);
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
    introspect(JAM.policy.p11) {
      var v588 = arrayOfItems[i$$9]
    }
    matchExp = v588.match(/\/.+\//) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.p11) {
      var v1005 = arrayOfItems[i$$9]
    }
    cutDistance = parseFloat(v1005.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v590 = matchPosition >= lowerLimit;
      if(v590) {
        v590 = matchPosition < upperLimit
      }
      if(v590) {
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
    var v1162 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p11) {
      var v1207 = arrayOfItems[i$$9]
    }
    JAM.call(v250.write, v250, [v1162 + v1207.match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"]);
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
    introspect(JAM.policy.p11) {
      var v599 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = v599.match(/\/[^\/]+\//) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1]) != -1) {
      tempNumber = sequence$$16.match(matchExp$$1).length
    }
    var percentage = 0;
    var v824 = originalLength + 1;
    introspect(JAM.policy.p11) {
      var v1097 = arrayOfItems$$1[i$$10]
    }
    if(v824 - parseFloat(v1097.match(/\d+/)) > 0) {
      var v260 = 100 * tempNumber;
      var v602 = originalLength + 1;
      introspect(JAM.policy.p11) {
        var v1009 = arrayOfItems$$1[i$$10]
      }
      percentage = v260 / (v602 - parseFloat(v1009.match(/\d+/)))
    }
    var v263 = outputWindow.document;
    introspect(JAM.policy.p11) {
      var v1208 = arrayOfItems$$1[i$$10]
    }
    JAM.call(v263.write, v263, ["<tr><td>" + v1208.match(/\([^\(]+\)\b/).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n"]);
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
function fuzzySearchProtein(theDocument) {
  var targetSequence = "";
  var targetTitle = "";
  var querySequence = "";
  var queryTitle = "";
  var maxTarget = 2E3;
  var maxQuery = 30;
  if(testScript() == false) {
    return false
  }
  var v611 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v611) {
    var v830 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxTarget) == false;
    if(!v830) {
      var v1013 = checkFormElement(theDocument.forms[0].elements[1]) == false;
      if(!v1013) {
        v1013 = checkSequenceLength(theDocument.forms[0].elements[1].value, maxQuery) == false
      }
      v830 = v1013
    }
    v611 = v830
  }
  if(v611) {
    return false
  }
  var v612 = theDocument.forms[0].elements[5].options;
  var v613 = theDocument.forms[0].elements[5].selectedIndex;
  introspect(JAM.policy.p11) {
    var v278 = v612[v613]
  }
  var MATRIX = v278.value;
  var v834 = theDocument.forms[0].elements[6].options;
  var v835 = theDocument.forms[0].elements[6].selectedIndex;
  introspect(JAM.policy.p11) {
    var v614 = v834[v835]
  }
  var GAP_PENALTY = parseInt(v614.value);
  var v836 = theDocument.forms[0].elements[7].options;
  var v837 = theDocument.forms[0].elements[7].selectedIndex;
  introspect(JAM.policy.p11) {
    var v615 = v836[v837]
  }
  var HITS = parseInt(v615.value);
  openWindow("Fuzzy Protein DNA");
  openPre();
  targetSequence = getSequenceFromFasta(theDocument.forms[0].elements[0].value);
  targetSequence = removeNonProtein(targetSequence);
  targetTitle = getTitleFromFasta(theDocument.forms[0].elements[0].value);
  querySequence = getSequenceFromFasta(theDocument.forms[0].elements[1].value);
  querySequence = removeNonProtein(querySequence);
  queryTitle = "query";
  var v284 = outputWindow.document;
  JAM.call(v284.write, v284, [getFuzzySearchTitle(targetTitle, targetSequence, queryTitle, querySequence)]);
  if(JAM.call(targetSequence.search, targetSequence, [/./]) != -1) {
    targetSequence = targetSequence.match(/./g)
  }
  if(JAM.call(querySequence.search, querySequence, [/./]) != -1) {
    querySequence = querySequence.match(/./g)
  }
  if(targetSequence.length == 0) {
    alert("The sequence contains no protein residues.");
    return false
  }
  if(querySequence.length == 0) {
    alert("The query sequence contains no protein residues.");
    return false
  }
  _fuzzySearchProtein(queryTitle, querySequence, targetTitle, targetSequence, MATRIX, GAP_PENALTY, HITS);
  closePre();
  closeWindow();
  return true
}
function _fuzzySearchProtein(queryTitle$$1, querySequence$$1, targetTitle$$1, targetSequence$$1, matrix, gapPenalty, hits) {
  var scoringMatrix;
  if(matrix == "pam30") {
    scoringMatrix = new Pam30
  }else {
    if(matrix == "pam70") {
      scoringMatrix = new Pam70
    }else {
      if(matrix == "blosum80") {
        scoringMatrix = new Blosum80
      }else {
        if(matrix == "blosum62") {
          scoringMatrix = new Blosum62
        }else {
          if(matrix == "blosum45") {
            scoringMatrix = new Blosum45
          }
        }
      }
    }
  }
  var scoreSet = new ScoreSet;
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [scoringMatrix, gapPenalty, hits]);
  var fuzzySearch = new FuzzySearch;
  JAM.call(fuzzySearch.initializeMatrix, fuzzySearch, [querySequence$$1, targetSequence$$1, scoreSet]);
  fuzzySearch.search();
  hits = fuzzySearch.getHits();
  if(hits.length > 0) {
    var i$$11 = 0;
    var v305 = i$$11 < hits.length;
    for(;v305;) {
      var v295 = outputWindow.document;
      var v1113 = ">" + queryTitle$$1 + " from ";
      introspect(JAM.policy.p11) {
        var v1150 = hits[i$$11]
      }
      var v841 = v1113 + v1150.startM + " to ";
      introspect(JAM.policy.p11) {
        var v1025 = hits[i$$11]
      }
      JAM.call(v295.write, v295, [v841 + v1025.endM + "\n"]);
      var v297 = outputWindow.document;
      introspect(JAM.policy.p11) {
        var v843 = hits[i$$11]
      }
      JAM.call(v297.write, v297, [v843.sequenceM + "\n"]);
      var v299 = outputWindow.document;
      var v1115 = ">" + targetTitle$$1 + " from ";
      introspect(JAM.policy.p11) {
        var v1152 = hits[i$$11]
      }
      var v844 = v1115 + v1152.startN + " to ";
      introspect(JAM.policy.p11) {
        var v1027 = hits[i$$11]
      }
      JAM.call(v299.write, v299, [v844 + v1027.endN + "\n"]);
      var v301 = outputWindow.document;
      introspect(JAM.policy.p11) {
        var v846 = hits[i$$11]
      }
      JAM.call(v301.write, v301, [v846.sequenceN + "\n"]);
      var v303 = outputWindow.document;
      introspect(JAM.policy.p11) {
        var v1028 = hits[i$$11]
      }
      JAM.call(v303.write, v303, ["Score: " + v1028.score + "\n\n"]);
      i$$11 = i$$11 + 1;
      v305 = i$$11 < hits.length
    }
  }else {
    var v306 = outputWindow.document;
    JAM.call(v306.write, v306, ["No hits were obtained.\n\n"])
  }
  return
}
function getScore(r1$$1, r2) {
  var v308 = this.scoringMatrix;
  return JAM.call(v308.scoringMatrix_getScore, v308, [r1$$1, r2])
}
function setScoreSetParam(scoringMatrix$$1, gapPenalty$$1, hits$$1) {
  this.scoringMatrix = scoringMatrix$$1;
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
  var v848 = this.scoreHash;
  var v849 = r1$$2 + r2$$1;
  introspect(JAM.policy.p11) {
    var v631 = v848[v849]
  }
  if(v631 == null) {
    throw"Unrecognized residue pair: " + r1$$2 + ", " + r2$$1 + ".";
  }else {
    var v310 = this.scoreHash;
    var v311 = r1$$2 + r2$$1;
    introspect(JAM.policy.p11) {
      return v310[v311]
    }
  }
  return
}
function scoringMatrix_fillHash(matrix$$1) {
  var cols = matrix$$1[0].split(/\s+/);
  var cells;
  var i$$12 = 1;
  var v318 = i$$12 < matrix$$1.length;
  for(;v318;) {
    introspect(JAM.policy.p11) {
      var v314 = matrix$$1[i$$12]
    }
    cells = v314.split(/\s+/);
    var j$$10 = 1;
    var v317 = j$$10 < cols.length + 1;
    for(;v317;) {
      var v315 = this.scoreHash;
      var v635 = cells[0].toLowerCase();
      var v1029 = j$$10 - 1;
      introspect(JAM.policy.p11) {
        var v853 = cols[v1029]
      }
      var v316 = v635 + v853.toLowerCase();
      introspect(JAM.policy.p11) {
        var v637 = cells[j$$10]
      }
      var v1245 = parseInt(v637);
      JAM.set(v315, v316, v1245, JAM.policy.p6);
      j$$10 = j$$10 + 1;
      v317 = j$$10 < cols.length + 1
    }
    i$$12 = i$$12 + 1;
    v318 = i$$12 < matrix$$1.length
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
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$2]);
  return
}
function Blosum45() {
  var matrix$$3 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -1 -2 -1 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -2 -2  0", "R -2  7  0 -1 -3  1  0 -2  0 -3 -2  3 -1 -2 -2 -1 -1 -2 -1 -2", "N -1  0  6  2 -2  0  0  0  1 -2 -3  0 -2 -2 -2  1  0 -4 -2 -3", "D -2 -1  2  7 -3  0  2 -1  0 -4 -3  0 -3 -4 -1  0 -1 -4 -2 -3", "C -1 -3 -2 -3 12 -3 -3 -3 -3 -3 -2 -3 -2 -2 -4 -1 -1 -5 -3 -1", "Q -1  1  0  0 -3  6  2 -2  1 -2 -2  1  0 -4 -1  0 -1 -2 -1 -3", "E -1  0  0  2 -3  2  6 -2  0 -3 -2  1 -2 -3  0  0 -1 -3 -2 -3", 
  "G  0 -2  0 -1 -3 -2 -2  7 -2 -4 -3 -2 -2 -3 -2  0 -2 -2 -3 -3", "H -2  0  1  0 -3  1  0 -2 10 -3 -2 -1  0 -2 -2 -1 -2 -3  2 -3", "I -1 -3 -2 -4 -3 -2 -3 -4 -3  5  2 -3  2  0 -2 -2 -1 -2  0  3", "L -1 -2 -3 -3 -2 -2 -2 -3 -2  2  5 -3  2  1 -3 -3 -1 -2  0  1", "K -1  3  0  0 -3  1  1 -2 -1 -3 -3  5 -1 -3 -1 -1 -1 -2 -1 -2", "M -1 -1 -2 -3 -2  0 -2 -2  0  2  2 -1  6  0 -2 -2 -1 -2  0  1", "F -2 -2 -2 -4 -2 -4 -3 -3 -2  0  1 -3  0  8 -3 -2 -1  1  3  0", "P -1 -2 -2 -1 -4 -1  0 -2 -2 -2 -3 -1 -2 -3  9 -1 -1 -3 -3 -3", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -3 -1 -2 -2 -1  4  2 -4 -2 -1", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -1 -1  2  5 -3 -1  0", "W -2 -2 -4 -4 -5 -2 -3 -2 -3 -2 -2 -2 -2  1 -3 -4 -3 15  3 -3", "Y -2 -1 -2 -2 -3 -1 -2 -3  2  0  0 -1  0  3 -3 -2 -1  3  8 -1", "V  0 -2 -3 -3 -1 -3 -3 -3 -3  3  1 -2  1  0 -3 -1  0 -3 -1  5");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$3]);
  return
}
function Blosum80() {
  var matrix$$4 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -2 -2 -1 -1 -1  0 -2 -2 -2 -1 -1 -3 -1  1  0 -3 -2  0", "R -2  6 -1 -2 -4  1 -1 -3  0 -3 -3  2 -2 -4 -2 -1 -1 -4 -3 -3", "N -2 -1  6  1 -3  0 -1 -1  0 -4 -4  0 -3 -4 -3  0  0 -4 -3 -4", "D -2 -2  1  6 -4 -1  1 -2 -2 -4 -5 -1 -4 -4 -2 -1 -1 -6 -4 -4", "C -1 -4 -3 -4  9 -4 -5 -4 -4 -2 -2 -4 -2 -3 -4 -2 -1 -3 -3 -1", "Q -1  1  0 -1 -4  6  2 -2  1 -3 -3  1  0 -4 -2  0 -1 -3 -2 -3", "E -1 -1 -1  1 -5  2  6 -3  0 -4 -4  1 -2 -4 -2  0 -1 -4 -3 -3", 
  "G  0 -3 -1 -2 -4 -2 -3  6 -3 -5 -4 -2 -4 -4 -3 -1 -2 -4 -4 -4", "H -2  0  0 -2 -4  1  0 -3  8 -4 -3 -1 -2 -2 -3 -1 -2 -3  2 -4", "I -2 -3 -4 -4 -2 -3 -4 -5 -4  5  1 -3  1 -1 -4 -3 -1 -3 -2  3", "L -2 -3 -4 -5 -2 -3 -4 -4 -3  1  4 -3  2  0 -3 -3 -2 -2 -2  1", "K -1  2  0 -1 -4  1  1 -2 -1 -3 -3  5 -2 -4 -1 -1 -1 -4 -3 -3", "M -1 -2 -3 -4 -2  0 -2 -4 -2  1  2 -2  6  0 -3 -2 -1 -2 -2  1", "F -3 -4 -4 -4 -3 -4 -4 -4 -2 -1  0 -4  0  6 -4 -3 -2  0  3 -1", "P -1 -2 -3 -2 -4 -2 -2 -3 -3 -4 -3 -1 -3 -4  8 -1 -2 -5 -4 -3", 
  "S  1 -1  0 -1 -2  0  0 -1 -1 -3 -3 -1 -2 -3 -1  5  1 -4 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -2 -1 -1 -2 -2  1  5 -4 -2  0", "W -3 -4 -4 -6 -3 -3 -4 -4 -3 -3 -2 -4 -2  0 -5 -4 -4 11  2 -3", "Y -2 -3 -3 -4 -3 -2 -3 -4  2 -2 -2 -3 -2  3 -4 -2 -2  2  7 -2", "V  0 -3 -4 -4 -1 -3 -3 -4 -4  3  1 -3  1 -1 -3 -2  0 -3 -2  4");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$4]);
  return
}
function Pam70() {
  var matrix$$5 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   5  -4  -2  -1  -4  -2  -1   0  -4  -2  -4  -4  -3  -6   0   1   1  -9  -5  -1", "R  -4   8  -3  -6  -5   0  -5  -6   0  -3  -6   2  -2  -7  -2  -1  -4   0  -7  -5", "N  -2  -3   6   3  -7  -1   0  -1   1  -3  -5   0  -5  -6  -3   1   0  -6  -3  -5", "D  -1  -6   3   6  -9   0   3  -1  -1  -5  -8  -2  -7 -10  -4  -1  -2 -10  -7  -5", "C  -4  -5  -7  -9   9  -9  -9  -6  -5  -4 -10  -9  -9  -8  -5  -1  -5 -11  -2  -4", 
  "Q  -2   0  -1   0  -9   7   2  -4   2  -5  -3  -1  -2  -9  -1  -3  -3  -8  -8  -4", "E  -1  -5   0   3  -9   2   6  -2  -2  -4  -6  -2  -4  -9  -3  -2  -3 -11  -6  -4", "G   0  -6  -1  -1  -6  -4  -2   6  -6  -6  -7  -5  -6  -7  -3   0  -3 -10  -9  -3", "H  -4   0   1  -1  -5   2  -2  -6   8  -6  -4  -3  -6  -4  -2  -3  -4  -5  -1  -4", "I  -2  -3  -3  -5  -4  -5  -4  -6  -6   7   1  -4   1   0  -5  -4  -1  -9  -4   3", "L  -4  -6  -5  -8 -10  -3  -6  -7  -4   1   6  -5   2  -1  -5  -6  -4  -4  -4   0", 
  "K  -4   2   0  -2  -9  -1  -2  -5  -3  -4  -5   6   0  -9  -4  -2  -1  -7  -7  -6", "M  -3  -2  -5  -7  -9  -2  -4  -6  -6   1   2   0  10  -2  -5  -3  -2  -8  -7   0", "F  -6  -7  -6 -10  -8  -9  -9  -7  -4   0  -1  -9  -2   8  -7  -4  -6  -2   4  -5", "P   0  -2  -3  -4  -5  -1  -3  -3  -2  -5  -5  -4  -5  -7   7   0  -2  -9  -9  -3", "S   1  -1   1  -1  -1  -3  -2   0  -3  -4  -6  -2  -3  -4   0   5   2  -3  -5  -3", "T   1  -4   0  -2  -5  -3  -3  -3  -4  -1  -4  -1  -2  -6  -2   2   6  -8  -4  -1", 
  "W  -9   0  -6 -10 -11  -8 -11 -10  -5  -9  -4  -7  -8  -2  -9  -3  -8  13  -3 -10", "Y  -5  -7  -3  -7  -2  -8  -6  -9  -1  -4  -4  -7  -7   4  -9  -5  -4  -3   9  -5", "V  -1  -5  -5  -5  -4  -4  -4  -3  -4   3   0  -6   0  -5  -3  -3  -1 -10  -5   6");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$5]);
  return
}
function Pam30() {
  var matrix$$6 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   6  -7  -4  -3  -6  -4  -2  -2  -7  -5  -6  -7  -5  -8  -2   0  -1 -13  -8  -2", "R  -7   8  -6 -10  -8  -2  -9  -9  -2  -5  -8   0  -4  -9  -4  -3  -6  -2 -10  -8", "N  -4  -6   8   2 -11  -3  -2  -3   0  -5  -7  -1  -9  -9  -6   0  -2  -8  -4  -8", "D  -3 -10   2   8 -14  -2   2  -3  -4  -7 -12  -4 -11 -15  -8  -4  -5 -15 -11  -8", "C  -6  -8 -11 -14  10 -14 -14  -9  -7  -6 -15 -14 -13 -13  -8  -3  -8 -15  -4  -6", 
  "Q  -4  -2  -3  -2 -14   8   1  -7   1  -8  -5  -3  -4 -13  -3  -5  -5 -13 -12  -7", "E  -2  -9  -2   2 -14   1   8  -4  -5  -5  -9  -4  -7 -14  -5  -4  -6 -17  -8  -6", "G  -2  -9  -3  -3  -9  -7  -4   6  -9 -11 -10  -7  -8  -9  -6  -2  -6 -15 -14  -5", "H  -7  -2   0  -4  -7   1  -5  -9   9  -9  -6  -6 -10  -6  -4  -6  -7  -7  -3  -6", "I  -5  -5  -5  -7  -6  -8  -5 -11  -9   8  -1  -6  -1  -2  -8  -7  -2 -14  -6   2", "L  -6  -8  -7 -12 -15  -5  -9 -10  -6  -1   7  -8   1  -3  -7  -8  -7  -6  -7  -2", 
  "K  -7   0  -1  -4 -14  -3  -4  -7  -6  -6  -8   7  -2 -14  -6  -4  -3 -12  -9  -9", "M  -5  -4  -9 -11 -13  -4  -7  -8 -10  -1   1  -2  11  -4  -8  -5  -4 -13 -11  -1", "F  -8  -9  -9 -15 -13 -13 -14  -9  -6  -2  -3 -14  -4   9 -10  -6  -9  -4   2  -8", "P  -2  -4  -6  -8  -8  -3  -5  -6  -4  -8  -7  -6  -8 -10   8  -2  -4 -14 -13  -6", "S   0  -3   0  -4  -3  -5  -4  -2  -6  -7  -8  -4  -5  -6  -2   6   0  -5  -7  -6", "T  -1  -6  -2  -5  -8  -5  -6  -6  -7  -2  -7  -3  -4  -9  -4   0   7 -13  -6  -3", 
  "W -13  -2  -8 -15 -15 -13 -17 -15  -7 -14  -6 -12 -13  -4 -14  -5 -13  13  -5 -15", "Y  -8 -10  -4 -11  -4 -12  -8 -14  -3  -6  -7  -9 -11   2 -13  -7  -6  -5  10  -7", "V  -2  -8  -8  -8  -6  -7  -6  -5  -6   2  -2  -9  -1  -8  -6  -6  -3 -15  -7   7");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$6]);
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
  var v1246 = new Array(this.M.length + 1);
  this.nodes = v1246;
  var i$$13 = 0;
  var v325 = i$$13 < this.nodes.length;
  for(;v325;) {
    var v320 = this.nodes;
    var v321 = i$$13;
    var v1247 = new Array(this.N.length + 1);
    v320[v321] = v1247;
    var j$$11 = 0;
    var v1031 = this.nodes;
    introspect(JAM.policy.p11) {
      var v858 = v1031[i$$13]
    }
    var v324 = j$$11 < v858.length;
    for(;v324;) {
      var v644 = this.nodes;
      introspect(JAM.policy.p11) {
        var v322 = v644[i$$13]
      }
      var v323 = j$$11;
      var v1248 = new Node;
      v322[v323] = v1248;
      j$$11 = j$$11 + 1;
      var v1032 = this.nodes;
      introspect(JAM.policy.p11) {
        var v859 = v1032[i$$13]
      }
      v324 = j$$11 < v859.length
    }
    i$$13 = i$$13 + 1;
    v325 = i$$13 < this.nodes.length
  }
  this.nodes[0][0].value = 0;
  i$$13 = 1;
  var v330 = i$$13 < this.nodes.length;
  for(;v330;) {
    var v863 = this.nodes;
    introspect(JAM.policy.p11) {
      var v649 = v863[i$$13]
    }
    var v327 = v649[0];
    var v1033 = this.nodes;
    var v1034 = i$$13 - 1;
    introspect(JAM.policy.p11) {
      var v864 = v1033[v1034]
    }
    v327.value = v864[0].value;
    var v865 = this.nodes;
    introspect(JAM.policy.p11) {
      var v651 = v865[i$$13]
    }
    v651[0].tracebackI = i$$13 - 1;
    var v866 = this.nodes;
    introspect(JAM.policy.p11) {
      var v652 = v866[i$$13]
    }
    v652[0].tracebackJ = 0;
    i$$13 = i$$13 + 1;
    v330 = i$$13 < this.nodes.length
  }
  j$$11 = 1;
  var v334 = j$$11 < this.nodes[0].length;
  for(;v334;) {
    var v655 = this.nodes[0];
    introspect(JAM.policy.p11) {
      var v331 = v655[j$$11]
    }
    var v870 = this.nodes[0];
    var v871 = j$$11 - 1;
    introspect(JAM.policy.p11) {
      var v656 = v870[v871]
    }
    v331.value = v656.value;
    var v657 = this.nodes[0];
    introspect(JAM.policy.p11) {
      var v332 = v657[j$$11]
    }
    v332.tracebackI = 0;
    var v658 = this.nodes[0];
    introspect(JAM.policy.p11) {
      var v333 = v658[j$$11]
    }
    v333.tracebackJ = j$$11 - 1;
    j$$11 = j$$11 + 1;
    v334 = j$$11 < this.nodes[0].length
  }
  return
}
function dumpMatrix() {
  var v335 = outputWindow.document;
  JAM.call(v335.write, v335, ["Dynamic programming matrix i=" + this.nodes.length + " and j=" + this.nodes[0].length]);
  var v337 = outputWindow.document;
  JAM.call(v337.write, v337, ["\n"]);
  var i$$14 = 0;
  var v348 = i$$14 < this.nodes.length;
  for(;v348;) {
    var j$$12 = 0;
    var v1040 = this.nodes;
    introspect(JAM.policy.p11) {
      var v878 = v1040[i$$14]
    }
    var v346 = j$$12 < v878.length;
    for(;v346;) {
      var v879 = this.nodes;
      introspect(JAM.policy.p11) {
        var v664 = v879[i$$14]
      }
      introspect(JAM.policy.p11) {
        var v338 = v664[j$$12]
      }
      var traceI = v338.tracebackI;
      var v880 = this.nodes;
      introspect(JAM.policy.p11) {
        var v665 = v880[i$$14]
      }
      introspect(JAM.policy.p11) {
        var v339 = v665[j$$12]
      }
      var traceJ = v339.tracebackJ;
      if(traceI == undefined) {
        traceI = "u"
      }
      if(traceJ == undefined) {
        traceJ = "u"
      }
      var v342 = "(" + i$$14 + "," + j$$12 + ")[" + traceI + "," + traceJ + "]=";
      var v1042 = this.nodes;
      introspect(JAM.policy.p11) {
        var v882 = v1042[i$$14]
      }
      introspect(JAM.policy.p11) {
        var v667 = v882[j$$12]
      }
      var output = v342 + v667.value;
      var v344 = outputWindow.document;
      JAM.call(v344.write, v344, [rightNum(output, "", 20, " ")]);
      j$$12 = j$$12 + 1;
      var v1043 = this.nodes;
      introspect(JAM.policy.p11) {
        var v883 = v1043[i$$14]
      }
      v346 = j$$12 < v883.length
    }
    var v347 = outputWindow.document;
    JAM.call(v347.write, v347, ["\n"]);
    i$$14 = i$$14 + 1;
    v348 = i$$14 < this.nodes.length
  }
  var v349 = outputWindow.document;
  JAM.call(v349.write, v349, ["\n"]);
  return
}
function updateMatrix() {
  var i$$15 = 1;
  var v390 = i$$15 < this.nodes.length;
  for(;v390;) {
    var j$$13 = 1;
    var v389 = j$$13 < this.nodes[0].length;
    for(;v389;) {
      var a;
      var b;
      var c;
      var v1045 = this.nodes;
      introspect(JAM.policy.p11) {
        var v887 = v1045[i$$15]
      }
      introspect(JAM.policy.p11) {
        var v672 = v887[j$$13]
      }
      if(v672.alreadyMatched) {
        a = 0;
        b = 0;
        c = 0
      }else {
        var v673 = i$$15 == this.nodes.length - 1;
        if(v673) {
          v673 = j$$13 == this.nodes[0].length - 1
        }
        if(v673) {
          var v890 = this.nodes;
          var v891 = i$$15 - 1;
          introspect(JAM.policy.p11) {
            var v674 = v890[v891]
          }
          introspect(JAM.policy.p11) {
            var v350 = v674[j$$13]
          }
          a = v350.value;
          var v892 = this.nodes;
          introspect(JAM.policy.p11) {
            var v675 = v892[i$$15]
          }
          var v676 = j$$13 - 1;
          introspect(JAM.policy.p11) {
            var v351 = v675[v676]
          }
          b = v351.value;
          var v1048 = this.nodes;
          var v1049 = i$$15 - 1;
          introspect(JAM.policy.p11) {
            var v893 = v1048[v1049]
          }
          var v894 = j$$13 - 1;
          introspect(JAM.policy.p11) {
            var v677 = v893[v894]
          }
          var v352 = v677.value;
          var v678 = this.scoreSet;
          var v895 = this.M;
          var v896 = i$$15 - 1;
          introspect(JAM.policy.p11) {
            var v679 = v895[v896]
          }
          var v897 = this.N;
          var v898 = j$$13 - 1;
          introspect(JAM.policy.p11) {
            var v680 = v897[v898]
          }
          c = v352 + JAM.call(v678.getScore, v678, [v679, v680])
        }else {
          if(i$$15 == this.nodes.length - 1) {
            var v1051 = this.nodes;
            var v1052 = i$$15 - 1;
            introspect(JAM.policy.p11) {
              var v900 = v1051[v1052]
            }
            introspect(JAM.policy.p11) {
              var v682 = v900[j$$13]
            }
            a = v682.value - this.scoreSet.gap;
            var v901 = this.nodes;
            introspect(JAM.policy.p11) {
              var v684 = v901[i$$15]
            }
            var v685 = j$$13 - 1;
            introspect(JAM.policy.p11) {
              var v356 = v684[v685]
            }
            b = v356.value;
            var v1053 = this.nodes;
            var v1054 = i$$15 - 1;
            introspect(JAM.policy.p11) {
              var v902 = v1053[v1054]
            }
            var v903 = j$$13 - 1;
            introspect(JAM.policy.p11) {
              var v686 = v902[v903]
            }
            var v357 = v686.value;
            var v687 = this.scoreSet;
            var v904 = this.M;
            var v905 = i$$15 - 1;
            introspect(JAM.policy.p11) {
              var v688 = v904[v905]
            }
            var v906 = this.N;
            var v907 = j$$13 - 1;
            introspect(JAM.policy.p11) {
              var v689 = v906[v907]
            }
            c = v357 + JAM.call(v687.getScore, v687, [v688, v689])
          }else {
            if(j$$13 == this.nodes[0].length - 1) {
              var v909 = this.nodes;
              var v910 = i$$15 - 1;
              introspect(JAM.policy.p11) {
                var v691 = v909[v910]
              }
              introspect(JAM.policy.p11) {
                var v359 = v691[j$$13]
              }
              a = v359.value;
              var v1056 = this.nodes;
              introspect(JAM.policy.p11) {
                var v911 = v1056[i$$15]
              }
              var v912 = j$$13 - 1;
              introspect(JAM.policy.p11) {
                var v692 = v911[v912]
              }
              b = v692.value - this.scoreSet.gap;
              var v1057 = this.nodes;
              var v1058 = i$$15 - 1;
              introspect(JAM.policy.p11) {
                var v913 = v1057[v1058]
              }
              var v914 = j$$13 - 1;
              introspect(JAM.policy.p11) {
                var v694 = v913[v914]
              }
              var v362 = v694.value;
              var v695 = this.scoreSet;
              var v915 = this.M;
              var v916 = i$$15 - 1;
              introspect(JAM.policy.p11) {
                var v696 = v915[v916]
              }
              var v917 = this.N;
              var v918 = j$$13 - 1;
              introspect(JAM.policy.p11) {
                var v697 = v917[v918]
              }
              c = v362 + JAM.call(v695.getScore, v695, [v696, v697])
            }else {
              var v1059 = this.nodes;
              var v1060 = i$$15 - 1;
              introspect(JAM.policy.p11) {
                var v919 = v1059[v1060]
              }
              introspect(JAM.policy.p11) {
                var v698 = v919[j$$13]
              }
              a = v698.value - this.scoreSet.gap;
              var v1061 = this.nodes;
              introspect(JAM.policy.p11) {
                var v920 = v1061[i$$15]
              }
              var v921 = j$$13 - 1;
              introspect(JAM.policy.p11) {
                var v700 = v920[v921]
              }
              b = v700.value - this.scoreSet.gap;
              var v1062 = this.nodes;
              var v1063 = i$$15 - 1;
              introspect(JAM.policy.p11) {
                var v922 = v1062[v1063]
              }
              var v923 = j$$13 - 1;
              introspect(JAM.policy.p11) {
                var v702 = v922[v923]
              }
              var v368 = v702.value;
              var v703 = this.scoreSet;
              var v924 = this.M;
              var v925 = i$$15 - 1;
              introspect(JAM.policy.p11) {
                var v704 = v924[v925]
              }
              var v926 = this.N;
              var v927 = j$$13 - 1;
              introspect(JAM.policy.p11) {
                var v705 = v926[v927]
              }
              c = v368 + JAM.call(v703.getScore, v703, [v704, v705])
            }
          }
        }
      }
      var v706 = a > b;
      if(v706) {
        v706 = a > c
      }
      if(v706) {
        var v928 = this.nodes;
        introspect(JAM.policy.p11) {
          var v707 = v928[i$$15]
        }
        introspect(JAM.policy.p11) {
          var v374 = v707[j$$13]
        }
        v374.value = a;
        var v929 = this.nodes;
        introspect(JAM.policy.p11) {
          var v708 = v929[i$$15]
        }
        introspect(JAM.policy.p11) {
          var v375 = v708[j$$13]
        }
        v375.tracebackI = i$$15 - 1;
        var v930 = this.nodes;
        introspect(JAM.policy.p11) {
          var v709 = v930[i$$15]
        }
        introspect(JAM.policy.p11) {
          var v376 = v709[j$$13]
        }
        v376.tracebackJ = j$$13
      }else {
        var v710 = b > c;
        if(v710) {
          v710 = b > a
        }
        if(v710) {
          var v931 = this.nodes;
          introspect(JAM.policy.p11) {
            var v711 = v931[i$$15]
          }
          introspect(JAM.policy.p11) {
            var v377 = v711[j$$13]
          }
          v377.value = b;
          var v932 = this.nodes;
          introspect(JAM.policy.p11) {
            var v712 = v932[i$$15]
          }
          introspect(JAM.policy.p11) {
            var v378 = v712[j$$13]
          }
          v378.tracebackI = i$$15;
          var v933 = this.nodes;
          introspect(JAM.policy.p11) {
            var v713 = v933[i$$15]
          }
          introspect(JAM.policy.p11) {
            var v379 = v713[j$$13]
          }
          v379.tracebackJ = j$$13 - 1
        }else {
          var v934 = this.nodes;
          introspect(JAM.policy.p11) {
            var v714 = v934[i$$15]
          }
          introspect(JAM.policy.p11) {
            var v380 = v714[j$$13]
          }
          v380.value = c;
          var v935 = this.nodes;
          introspect(JAM.policy.p11) {
            var v715 = v935[i$$15]
          }
          introspect(JAM.policy.p11) {
            var v381 = v715[j$$13]
          }
          v381.tracebackI = i$$15 - 1;
          var v936 = this.nodes;
          introspect(JAM.policy.p11) {
            var v716 = v936[i$$15]
          }
          introspect(JAM.policy.p11) {
            var v382 = v716[j$$13]
          }
          v382.tracebackJ = j$$13 - 1
        }
      }
      var v1122 = this.nodes;
      introspect(JAM.policy.p11) {
        var v1064 = v1122[i$$15]
      }
      introspect(JAM.policy.p11) {
        var v937 = v1064[j$$13]
      }
      if(v937.value < 0) {
        var v938 = this.nodes;
        introspect(JAM.policy.p11) {
          var v718 = v938[i$$15]
        }
        introspect(JAM.policy.p11) {
          var v385 = v718[j$$13]
        }
        v385.value = 0;
        var v939 = this.nodes;
        introspect(JAM.policy.p11) {
          var v719 = v939[i$$15]
        }
        introspect(JAM.policy.p11) {
          var v386 = v719[j$$13]
        }
        v386.tracebackI = undefined;
        var v940 = this.nodes;
        introspect(JAM.policy.p11) {
          var v720 = v940[i$$15]
        }
        introspect(JAM.policy.p11) {
          var v387 = v720[j$$13]
        }
        v387.tracebackJ = undefined
      }
      j$$13 = j$$13 + 1;
      v389 = j$$13 < this.nodes[0].length
    }
    i$$15 = i$$15 + 1;
    v390 = i$$15 < this.nodes.length
  }
  var v943 = this.nodes;
  var v944 = this.nodes.length - 1;
  introspect(JAM.policy.p11) {
    var v723 = v943[v944]
  }
  var v724 = this.nodes[0].length - 1;
  introspect(JAM.policy.p11) {
    var v391 = v723[v724]
  }
  this.score = v391.value;
  return
}
function search() {
  var v1249 = new Array;
  this.hits = v1249;
  var hitCount = 0;
  var v415 = hitCount < this.scoreSet.hits;
  for(;v415;) {
    this.updateMatrix();
    var maxNodeValue = 0;
    var maxNodeI = undefined;
    var maxNodeJ = undefined;
    var i$$16 = 1;
    var v395 = i$$16 < this.nodes.length;
    for(;v395;) {
      var j$$14 = 1;
      var v394 = j$$14 < this.nodes[0].length;
      for(;v394;) {
        var v1125 = this.nodes;
        introspect(JAM.policy.p11) {
          var v1069 = v1125[i$$16]
        }
        introspect(JAM.policy.p11) {
          var v949 = v1069[j$$14]
        }
        if(v949.value > maxNodeValue) {
          var v950 = this.nodes;
          introspect(JAM.policy.p11) {
            var v729 = v950[i$$16]
          }
          introspect(JAM.policy.p11) {
            var v392 = v729[j$$14]
          }
          maxNodeValue = v392.value;
          maxNodeI = i$$16;
          maxNodeJ = j$$14
        }
        j$$14 = j$$14 + 1;
        v394 = j$$14 < this.nodes[0].length
      }
      i$$16 = i$$16 + 1;
      v395 = i$$16 < this.nodes.length
    }
    if(maxNodeValue == 0) {
      break
    }
    var currentI = maxNodeI;
    var currentJ = maxNodeJ;
    var v732 = this.nodes;
    introspect(JAM.policy.p11) {
      var v397 = v732[maxNodeI]
    }
    introspect(JAM.policy.p11) {
      var currentNode = v397[maxNodeJ]
    }
    var alignedM = new Array;
    var alignedN = new Array;
    var score = currentNode.value;
    var endM = undefined;
    var endN = undefined;
    var v733 = currentNode.tracebackI != undefined;
    if(v733) {
      v733 = currentNode.tracebackJ != undefined
    }
    var v412 = v733;
    for(;v412;) {
      var v734 = currentI == 0;
      if(!v734) {
        v734 = currentJ == 0
      }
      if(v734) {
        break
      }
      var v735 = currentNode.tracebackI == currentI - 1;
      if(v735) {
        v735 = currentNode.tracebackJ == currentJ - 1
      }
      if(v735) {
        if(endM == undefined) {
          endM = currentI;
          endN = currentJ
        }
        var v736 = this.M;
        var v737 = currentI - 1;
        introspect(JAM.policy.p11) {
          var v400 = v736[v737]
        }
        alignedM.push(v400);
        var v738 = this.N;
        var v739 = currentJ - 1;
        introspect(JAM.policy.p11) {
          var v401 = v738[v739]
        }
        alignedN.push(v401)
      }else {
        if(currentNode.tracebackJ == currentJ - 1) {
          if(endM != undefined) {
            alignedM.push("-");
            var v742 = this.N;
            var v743 = currentJ - 1;
            introspect(JAM.policy.p11) {
              var v402 = v742[v743]
            }
            alignedN.push(v402)
          }
        }else {
          if(endM != undefined) {
            var v744 = this.M;
            var v745 = currentI - 1;
            introspect(JAM.policy.p11) {
              var v404 = v744[v745]
            }
            alignedM.push(v404);
            alignedN.push("-")
          }
        }
      }
      var v960 = this.nodes;
      introspect(JAM.policy.p11) {
        var v746 = v960[currentI]
      }
      introspect(JAM.policy.p11) {
        var v408 = v746[currentJ]
      }
      v408.value = 0;
      var v961 = this.nodes;
      introspect(JAM.policy.p11) {
        var v747 = v961[currentI]
      }
      introspect(JAM.policy.p11) {
        var v409 = v747[currentJ]
      }
      v409.alreadyMatched = true;
      currentI = currentNode.tracebackI;
      currentJ = currentNode.tracebackJ;
      var v748 = this.nodes;
      var v749 = currentNode.tracebackI;
      introspect(JAM.policy.p11) {
        var v410 = v748[v749]
      }
      var v411 = currentNode.tracebackJ;
      introspect(JAM.policy.p11) {
        currentNode = v410[v411]
      }
      var v750 = currentNode.tracebackI != undefined;
      if(v750) {
        v750 = currentNode.tracebackJ != undefined
      }
      v412 = v750
    }
    alignedM = alignedM.reverse();
    alignedN = alignedN.reverse();
    this.hits.push(new Hit(alignedM.join(""), alignedN.join(""), score, currentI + 1, endM, currentJ + 1, endN));
    hitCount = hitCount + 1;
    v415 = hitCount < this.scoreSet.hits
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
ScoringMatrix.prototype.scoringMatrix_fillHash = scoringMatrix_fillHash;
var v420 = Blosum62;
var v1250 = new ScoringMatrix;
v420.prototype = v1250;
var v421 = Blosum45;
var v1251 = new ScoringMatrix;
v421.prototype = v1251;
var v422 = Blosum80;
var v1252 = new ScoringMatrix;
v422.prototype = v1252;
var v423 = Pam30;
var v1253 = new ScoringMatrix;
v423.prototype = v1253;
new FuzzySearch;
FuzzySearch.prototype.initializeMatrix = initializeMatrix;
FuzzySearch.prototype.updateMatrix = updateMatrix;
FuzzySearch.prototype.search = search;
FuzzySearch.prototype.getHits = getHits;
FuzzySearch.prototype.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
JAM.set(document.getElementById("submitbtn"), "onclick", v3);
JAM.set(document.getElementById("clearbtn"), "onclick", v4)
