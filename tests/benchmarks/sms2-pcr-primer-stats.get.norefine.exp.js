function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return
}
function v3() {
  try {
    pcrPrimerStats(document)
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
      var v1296 = arrayOfTitles[i$$1]
    }
    var v616 = v1296.search(/\S/) == -1;
    if(!v616) {
      introspect(JAM.policy.p5) {
        var v1406 = arrayOfSequences[i$$1]
      }
      var v1038 = v1406.search(/\S/) == -1;
      if(!v1038) {
        introspect(JAM.policy.p5) {
          var v1407 = arrayOfSequences[i$$1]
        }
        v1038 = v1407.length != lengthOfAlign
      }
      v616 = v1038
    }
    if(v616) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v618 = codonTable.search(/AmAcid/) == -1;
  if(!v618) {
    var v1041 = codonTable.search(/Codon/) == -1;
    if(!v1041) {
      var v1301 = codonTable.search(/Number/) == -1;
      if(!v1301) {
        var v1409 = codonTable.search(/\/1000/) == -1;
        if(!v1409) {
          v1409 = codonTable.search(/Fraction\s*\.\./) == -1
        }
        v1301 = v1409
      }
      v1041 = v1301
    }
    v618 = v1041
  }
  if(v618) {
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
    introspect(JAM.policy.p5) {
      var v1044 = arrayOfPatterns[z$$2]
    }
    if(v1044.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v1045 = arrayOfPatterns[z$$2]
    }
    if(moreExpressionCheck(v1045) == false) {
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
      var v1303 = arrayOfPatterns[j]
    }
    var v625 = JAM.call(v1303.match, v1303, [/\/.+\//]) + "gi";
    if(JAM.isEval(eval)) {
      var v1551 = eval("introspect(JAM.policy.pFull) { " + v625 + " }")
    }else {
      var v1551 = JAM.call(eval, null, [v625])
    }
    v20[v21] = v1551;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAM.policy.p5) {
      var v1047 = arrayOfPatterns[j]
    }
    var v1552 = JAM.call(v1047.match, v1047, [/=[a-zA-Z\*]/]).toString();
    v22[v23] = v1552;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAM.policy.p5) {
      var v627 = geneticCodeMatchResult[j]
    }
    var v1553 = v627.replace(/=/g, "");
    v24[v25] = v1553;
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
        var v1049 = geneticCodeMatchExp[j]
      }
      if(codon.search(v1049) != -1) {
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
      var v1051 = arrayOfPatterns$$1[z$$3]
    }
    if(v1051.search(/[^acdefghiklmnpqrstvwyz]/i) != -1) {
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
      var v1052 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v1052 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v38 = j$$1 < arrayOfPatterns$$1.length;
    for(;v38;) {
      introspect(JAM.policy.p5) {
        var v1053 = arrayOfPatterns$$1[j$$1]
      }
      if(v1053.search(re) != -1) {
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
      var v1054 = arrayOfPatterns$$2[z$$4]
    }
    if(v1054.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v1055 = arrayOfPatterns$$2[z$$4]
    }
    if(moreExpressionCheck(v1055) == false) {
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
      var v1057 = alignArray[i$$4]
    }
    if(v1057.search(/[^\s]+\s/) == -1) {
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
    introspect(JAM.policy.p5) {
      var v1305 = arrayOfPatterns$$3[j$$2]
    }
    var v674 = JAM.call(v1305.match, v1305, [/\/.+\//]) + "gi";
    if(JAM.isEval(eval)) {
      var v1554 = eval("introspect(JAM.policy.pFull) { " + v674 + " }")
    }else {
      var v1554 = JAM.call(eval, null, [v674])
    }
    v73[v74] = v1554;
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
      var v1059 = arrayOfPatterns$$4[j$$3]
    }
    var v1555 = JAM.call(v1059.match, v1059, [/=[a-zA-Z\*]/]).toString();
    v77[v78] = v1555;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAM.policy.p5) {
      var v678 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1556 = v678.replace(/=/g, "");
    v79[v80] = v1556;
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
  var v706 = expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1;
  if(!v706) {
    var v1062 = expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1;
    if(!v1062) {
      var v1307 = expressionToCheck.search(/\[\]/) != -1;
      if(!v1307) {
        var v1412 = expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1;
        if(!v1412) {
          var v1461 = expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1;
          if(!v1461) {
            var v1477 = expressionToCheck.search(/\|\|/) != -1;
            if(!v1477) {
              var v1491 = expressionToCheck.search(/\/\|/) != -1;
              if(!v1491) {
                var v1504 = expressionToCheck.search(/\|\//) != -1;
                if(!v1504) {
                  var v1514 = expressionToCheck.search(/\[.\]/) != -1;
                  if(!v1514) {
                    var v1523 = expressionToCheck.search(/\</) != -1;
                    if(!v1523) {
                      v1523 = expressionToCheck.search(/\>/) != -1
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
  if(v706) {
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
  var v721 = emblFile.search(/ID/) == -1;
  if(!v721) {
    var v1073 = emblFile.search(/AC/) == -1;
    if(!v1073) {
      var v1318 = emblFile.search(/DE/) == -1;
      if(!v1318) {
        v1318 = emblFile.search(/SQ/) == -1
      }
      v1073 = v1318
    }
    v721 = v1073
  }
  if(v721) {
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
  var v726 = genBankFile.search(/LOCUS/) == -1;
  if(!v726) {
    var v1076 = genBankFile.search(/DEFINITION/) == -1;
    if(!v1076) {
      var v1321 = genBankFile.search(/ACCESSION/) == -1;
      if(!v1321) {
        v1321 = genBankFile.search(/ORIGIN/) == -1
      }
      v1076 = v1321
    }
    v726 = v1076
  }
  if(v726) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v727 = genBankFile$$1.search(/LOCUS/) == -1;
  if(!v727) {
    var v1079 = genBankFile$$1.search(/DEFINITION/) == -1;
    if(!v1079) {
      var v1324 = genBankFile$$1.search(/ACCESSION/) == -1;
      if(!v1324) {
        v1324 = genBankFile$$1.search(/ORIGIN/) == -1
      }
      v1079 = v1324
    }
    v727 = v1079
  }
  if(v727) {
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
  var v729 = emblFile$$1.search(/ID/) == -1;
  if(!v729) {
    var v1082 = emblFile$$1.search(/AC/) == -1;
    if(!v1082) {
      var v1327 = emblFile$$1.search(/DE/) == -1;
      if(!v1327) {
        v1327 = emblFile$$1.search(/SQ/) == -1
      }
      v1082 = v1327
    }
    v729 = v1082
  }
  if(v729) {
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
    var v734 = adjustment < 0;
    if(v734) {
      v734 = adjusted >= 0
    }
    if(v734) {
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
  var v751 = sequence$$13.length <= firstIndexToMutate;
  if(!v751) {
    var v1093 = lastIndexToMutate < 0;
    if(!v1093) {
      v1093 = lastIndexToMutate <= firstIndexToMutate
    }
    v751 = v1093
  }
  if(v751) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    var v753 = randNum < firstIndexToMutate;
    if(!v753) {
      v753 = randNum > lastIndexToMutate
    }
    if(v753) {
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
        var v757 = components$$1[componentsIndex]
      }
      if(v757 != currentChar) {
        needNewChar = false
      }
    }
    var v758 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.p5) {
      var v759 = components$$1[componentsIndex]
    }
    sequence$$13 = v758 + v759 + sequence$$13.substring(randNum + 1, sequence$$13.length);
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
      var v768 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v768.match, v768, [/\/.+\//]) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.p5) {
      var v1334 = arrayOfItems[i$$9]
    }
    cutDistance = parseFloat(JAM.call(v1334.match, v1334, [/\)\D*\d+/]).toString().replace(/\)\D*/, ""));
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v770 = matchPosition >= lowerLimit;
      if(v770) {
        v770 = matchPosition < upperLimit
      }
      if(v770) {
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
    var v1483 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p5) {
      var v1520 = arrayOfItems[i$$9]
    }
    JAM.call(v250.write, v250, [v1483 + JAM.call(v1520.match, v1520, [/\([^\(]+\)/]).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"]);
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
      var v779 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v779.match, v779, [/\/[^\/]+\//]) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(sequence$$16.search(matchExp$$1) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1]).length
    }
    var percentage = 0;
    var v1103 = originalLength + 1;
    introspect(JAM.policy.p5) {
      var v1432 = arrayOfItems$$1[i$$10]
    }
    if(v1103 - parseFloat(JAM.call(v1432.match, v1432, [/\d+/])) > 0) {
      var v260 = 100 * tempNumber;
      var v782 = originalLength + 1;
      introspect(JAM.policy.p5) {
        var v1338 = arrayOfItems$$1[i$$10]
      }
      percentage = v260 / (v782 - parseFloat(JAM.call(v1338.match, v1338, [/\d+/])))
    }
    var v263 = outputWindow.document;
    introspect(JAM.policy.p5) {
      var v1521 = arrayOfItems$$1[i$$10]
    }
    JAM.call(v263.write, v263, ["<tr><td>" + JAM.call(v1521.match, v1521, [/\([^\(]+\)\b/]).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n"]);
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
function pcrPrimerStats(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E3;
  var maxPrimerLength = 50;
  var milliMolarSalt = 50;
  var milliMolarMagnesium = 1.5;
  var nanoMolarPrimerTotal = 200;
  var isPhosphorylated = false;
  if(testScript() == false) {
    return false
  }
  var v791 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v791) {
    v791 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false
  }
  if(v791) {
    return false
  }
  molarSalt = milliMolarSalt / 1E3;
  molarMagnesium = milliMolarMagnesium / 1E3;
  molarPrimerTotal = nanoMolarPrimerTotal / 1E9;
  isPhosphorylated = false;
  openWindow("PCR Primer Stats");
  openPre();
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var v279 = outputWindow.document;
  JAM.call(v279.write, v279, ["Global settings:\n"]);
  if(isPhosphorylated) {
    var v280 = outputWindow.document;
    JAM.call(v280.write, v280, ["-The primers have a 5'-phosphate group.\n"])
  }else {
    var v281 = outputWindow.document;
    JAM.call(v281.write, v281, ["-The primers do not have a 5'-phosphate group.\n"])
  }
  var v282 = outputWindow.document;
  JAM.call(v282.write, v282, ["-Combined concentration of K+ and Na+ in the reaction = " + milliMolarSalt + " millimolar.\n"]);
  var v284 = outputWindow.document;
  JAM.call(v284.write, v284, ["-Mg+2 concentration in the reaction = " + milliMolarMagnesium + " millimolar.\n"]);
  var v286 = outputWindow.document;
  JAM.call(v286.write, v286, ["-Primer concentration in the reaction = " + nanoMolarPrimerTotal + " nanomolar.\n"]);
  var v288 = outputWindow.document;
  JAM.call(v288.write, v288, ["\n"]);
  var v289 = outputWindow.document;
  JAM.call(v289.write, v289, ["------------------------------------------------------------\n"]);
  var i$$11 = 0;
  var v354 = i$$11 < arrayOfFasta$$1.length;
  for(;v354;) {
    introspect(JAM.policy.p5) {
      var v290 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v290);
    introspect(JAM.policy.p5) {
      var v291 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v291);
    newDna = _removeNonPrimer(newDna);
    if(newDna.length == 0) {
      i$$11 = i$$11 + 1;
      v354 = i$$11 < arrayOfFasta$$1.length;
      continue
    }
    if(newDna.length > maxPrimerLength) {
      i$$11 = i$$11 + 1;
      v354 = i$$11 < arrayOfFasta$$1.length;
      continue
    }
    var percentGC = _percentGC(newDna);
    var nearestNeighborTm = _nearestNeighborTm(newDna, molarSalt, molarPrimerTotal, molarMagnesium);
    var selfCompHash = _getSelfComplementarityReport(newDna, 3, 50);
    var hairpinHash = _getHairpinReport(newDna, 3, 50);
    var v294 = outputWindow.document;
    JAM.call(v294.write, v294, ["------------------------------------------------------------\n"]);
    var v295 = outputWindow.document;
    JAM.call(v295.write, v295, ["General properties:\n"]);
    var v296 = outputWindow.document;
    JAM.call(v296.write, v296, ["-------------------\n"]);
    var v297 = outputWindow.document;
    JAM.call(v297.write, v297, [rightNum("Primer name:", "", 32, "") + title$$9 + "\n"]);
    var v299 = outputWindow.document;
    JAM.call(v299.write, v299, [rightNum("Primer sequence:", "", 32, "") + newDna + "\n"]);
    var v301 = outputWindow.document;
    JAM.call(v301.write, v301, [rightNum("Sequence length:", "", 32, "") + newDna.length + "\n"]);
    var v303 = outputWindow.document;
    JAM.call(v303.write, v303, [rightNum("Base counts:", "", 32, "") + _baseCounts(newDna) + "\n"]);
    var v305 = outputWindow.document;
    JAM.call(v305.write, v305, [rightNum("GC content (%):", "", 32, "") + percentGC + "\n"]);
    var v307 = outputWindow.document;
    JAM.call(v307.write, v307, [rightNum("Molecular weight (Daltons):", "", 32, "") + _molecularWeight(newDna, isPhosphorylated) + "\n"]);
    var v309 = outputWindow.document;
    JAM.call(v309.write, v309, [rightNum("nmol/A260:", "", 32, "") + _nmolPerA260(newDna) + "\n"]);
    var v311 = outputWindow.document;
    JAM.call(v311.write, v311, [rightNum("micrograms/A260:", "", 32, "") + _microgramsPerA260(newDna, isPhosphorylated) + "\n"]);
    var v313 = outputWindow.document;
    JAM.call(v313.write, v313, [rightNum("Basic Tm (degrees C):", "", 32, "") + _basicTm(newDna) + "\n"]);
    var v315 = outputWindow.document;
    JAM.call(v315.write, v315, [rightNum("Salt adjusted Tm (degrees C):", "", 32, "") + _molarSaltAdjustedTm(newDna, molarSalt) + "\n"]);
    var v317 = outputWindow.document;
    JAM.call(v317.write, v317, [rightNum("Nearest neighbor Tm (degrees C):", "", 32, "") + nearestNeighborTm + "\n"]);
    var v319 = outputWindow.document;
    JAM.call(v319.write, v319, ["\n"]);
    var v320 = outputWindow.document;
    JAM.call(v320.write, v320, ["PCR suitability tests (Pass / Warning):\n"]);
    var v321 = outputWindow.document;
    JAM.call(v321.write, v321, ["------------------------------------\n"]);
    var v322 = outputWindow.document;
    JAM.call(v322.write, v322, [rightNum("Single base runs:", "", 32, "") + _getBaseRunsReport(newDna, 5) + "\n"]);
    var v324 = outputWindow.document;
    JAM.call(v324.write, v324, [rightNum("Dinucleotide base runs:", "", 32, "") + _getDiNucleotideRunsReport(newDna, 5) + "\n"]);
    var v326 = outputWindow.document;
    JAM.call(v326.write, v326, [rightNum("Length:", "", 32, "") + _getSuitableLengthReport(newDna, 14, 30) + "\n"]);
    var v328 = outputWindow.document;
    JAM.call(v328.write, v328, [rightNum("Percent GC:", "", 32, "") + _getSuitableGCReport(newDna, percentGC, 40, 60) + "\n"]);
    var v330 = outputWindow.document;
    JAM.call(v330.write, v330, [rightNum("Tm (Nearest neighbor):", "", 32, "") + _getSuitableTmReport(newDna, nearestNeighborTm, 50, 58) + "\n"]);
    var v332 = outputWindow.document;
    JAM.call(v332.write, v332, [rightNum("GC clamp:", "", 32, "") + _getSuitableThreePrimeGC(newDna, 1, 3) + "\n"]);
    var v334 = outputWindow.document;
    JAM.call(v334.write, v334, [rightNum("Self-annealing:", "", 32, "") + selfCompHash["report"] + "\n"]);
    if(selfCompHash["report"] != "Pass") {
      var v336 = outputWindow.document;
      JAM.call(v336.write, v336, [rightNum(":", "", 32, "") + selfCompHash["upper"] + "\n"]);
      var v338 = outputWindow.document;
      JAM.call(v338.write, v338, [rightNum(":", "", 32, "") + selfCompHash["divider"] + "\n"]);
      var v340 = outputWindow.document;
      JAM.call(v340.write, v340, [rightNum(":", "", 32, "") + selfCompHash["lower"] + "\n"])
    }
    var v343 = outputWindow.document;
    JAM.call(v343.write, v343, [rightNum("Hairpin formation:", "", 32, "") + hairpinHash["report"] + "\n"]);
    if(hairpinHash["report"] != "Pass") {
      var v345 = outputWindow.document;
      JAM.call(v345.write, v345, [rightNum(":", "", 32, "") + hairpinHash["upper"] + "\n"]);
      var v347 = outputWindow.document;
      JAM.call(v347.write, v347, [rightNum(":", "", 32, "") + hairpinHash["divider"] + "\n"]);
      var v349 = outputWindow.document;
      JAM.call(v349.write, v349, [rightNum(":", "", 32, "") + hairpinHash["lower"] + "\n"])
    }
    var v352 = outputWindow.document;
    JAM.call(v352.write, v352, ["------------------------------------------------------------\n"]);
    var v353 = outputWindow.document;
    JAM.call(v353.write, v353, ["\n"]);
    i$$11 = i$$11 + 1;
    v354 = i$$11 < arrayOfFasta$$1.length
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
  if(sequence$$19.search(/[^gatc]/i) == -1) {
    return true
  }
  return false
}
function _baseCounts(sequence$$20) {
  var numG = _getBaseCount(sequence$$20, "g");
  var numA = _getBaseCount(sequence$$20, "a");
  var numT = _getBaseCount(sequence$$20, "t");
  var numC = _getBaseCount(sequence$$20, "c");
  var numOther = sequence$$20.length - (numG + numA + numT + numC);
  return"G=" + numG + "; A=" + numA + "; T=" + numT + "; C=" + numC + "; Other=" + numOther + ";"
}
function _microgramsPerA260(sequence$$21, isPhosphorylated$$1) {
  if(_containsOnlyNonDegenerates(sequence$$21)) {
    return _microgramsPerA260NonDegen(sequence$$21, isPhosphorylated$$1)
  }else {
    return _microgramsPerA260Degen(sequence$$21, isPhosphorylated$$1)
  }
  return
}
function _microgramsPerA260NonDegen(sequence$$22, isPhosphorylated$$2) {
  var mw = _mw(sequence$$22, isPhosphorylated$$2);
  var result = mw / _getExtinctionCoefficient(sequence$$22);
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
  return _microgramsPerA260NonDegen(upperBoundsSequence, isPhosphorylated$$3) + " to " + _microgramsPerA260NonDegen(lowerBoundsSequence, isPhosphorylated$$3)
}
function _nmolPerA260(sequence$$24) {
  if(_containsOnlyNonDegenerates(sequence$$24)) {
    return _nmolPerA260NonDegen(sequence$$24)
  }else {
    return _nmolPerA260Degen(sequence$$24)
  }
  return
}
function _nmolPerA260NonDegen(sequence$$25) {
  var result$$1 = _getExtinctionCoefficient(sequence$$25);
  result$$1 = 1 / result$$1 * 1E3;
  return result$$1.toFixed(2)
}
function _getExtinctionCoefficient(sequence$$26) {
  var dimerValues = _getDimerExtinctionCoefficients();
  var singleValues = _getSingleExtinctionCoefficients();
  var dimerSum = 0;
  var singleSum = 0;
  sequence$$26 = sequence$$26.toLowerCase();
  var i$$12 = 0;
  var v368 = i$$12 < sequence$$26.length - 1;
  for(;v368;) {
    var v366 = dimerSum;
    var v834 = dimerValues;
    var v835 = sequence$$26.charAt(i$$12) + sequence$$26.charAt(i$$12 + 1);
    introspect(JAM.policy.p5) {
      var v367 = v834[v835]
    }
    dimerSum = v366 + v367;
    i$$12 = i$$12 + 1;
    v368 = i$$12 < sequence$$26.length - 1
  }
  i$$12 = 1;
  var v371 = i$$12 < sequence$$26.length - 1;
  for(;v371;) {
    var v369 = singleSum;
    var v838 = singleValues;
    var v839 = sequence$$26.charAt(i$$12);
    introspect(JAM.policy.p5) {
      var v370 = v838[v839]
    }
    singleSum = v369 + v370;
    i$$12 = i$$12 + 1;
    v371 = i$$12 < sequence$$26.length - 1
  }
  return 2 * dimerSum - singleSum
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
  return _nmolPerA260NonDegen(upperBoundsSequence$$1) + " to " + _nmolPerA260NonDegen(lowerBoundsSequence$$1)
}
function _percentGC(sequence$$28) {
  if(_containsOnlyNonDegenerates(sequence$$28)) {
    return _percentGCNonDegen(sequence$$28)
  }else {
    return _percentGCDegen(sequence$$28)
  }
  return
}
function _percentGCNonDegen(sequence$$29) {
  var numHits = _getBaseCount(sequence$$29, "g") + _getBaseCount(sequence$$29, "c");
  return(numHits / sequence$$29.length * 100).toFixed(2)
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
  return _percentGCNonDegen(lowerBoundsSequence$$2) + " to " + _percentGCNonDegen(upperBoundsSequence$$2)
}
function _molecularWeight(sequence$$31, isPhosphorylated$$4) {
  if(_containsOnlyNonDegenerates(sequence$$31)) {
    return _molecularWeightNonDegen(sequence$$31, isPhosphorylated$$4)
  }else {
    return _molecularWeightDegen(sequence$$31, isPhosphorylated$$4)
  }
  return
}
function _molecularWeightNonDegen(sequence$$32, isPhosphorylated$$5) {
  return _mw(sequence$$32, isPhosphorylated$$5).toFixed(2)
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
  return g * 329.21 + a * 313.21 + t * 304.2 + c * 289.18 - 61.96 + phosAdjust
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
  return _molecularWeightNonDegen(lowerBoundsSequence$$3, isPhosphorylated$$7) + " to " + _molecularWeightNonDegen(upperBoundsSequence$$3, isPhosphorylated$$7)
}
function _basicTm(sequence$$35) {
  if(_containsOnlyNonDegenerates(sequence$$35)) {
    return _basicTmNonDegen(sequence$$35)
  }else {
    return _basicTmDegen(sequence$$35)
  }
  return
}
function _basicTmNonDegen(sequence$$36) {
  if(sequence$$36.length < 14) {
    var numG$$1 = _getBaseCount(sequence$$36, "g");
    var numC$$1 = _getBaseCount(sequence$$36, "c");
    var numA$$1 = _getBaseCount(sequence$$36, "a");
    var numT$$1 = _getBaseCount(sequence$$36, "t");
    return(4 * (numG$$1 + numC$$1) + 2 * (numA$$1 + numT$$1)).toFixed(0)
  }else {
    numG$$1 = _getBaseCount(sequence$$36, "g");
    numC$$1 = _getBaseCount(sequence$$36, "c");
    return(64.9 + 41 * (numG$$1 + numC$$1 - 16.4) / sequence$$36.length).toFixed(0)
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
  return _basicTmNonDegen(lowerBoundsSequence$$4) + " to " + _basicTmNonDegen(upperBoundsSequence$$4)
}
function _molarSaltAdjustedTm(sequence$$38, molarSalt$$1) {
  if(_containsOnlyNonDegenerates(sequence$$38)) {
    return _molarSaltAdjustedTmNonDegen(sequence$$38, molarSalt$$1)
  }else {
    return _molarSaltAdjustedTmDegen(sequence$$38, molarSalt$$1)
  }
  return
}
function _molarSaltAdjustedTmNonDegen(sequence$$39, molarSalt$$2) {
  var gcHits = _getBaseCount(sequence$$39, "g") + _getBaseCount(sequence$$39, "c");
  var pGC = gcHits / sequence$$39.length * 100;
  return(81.5 + 7.21 * Math.log(molarSalt$$2) + 0.41 * pGC - 675 / sequence$$39.length).toFixed(0)
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
  return _molarSaltAdjustedTmNonDegen(lowerBoundsSequence$$5, molarSalt$$3) + " to " + _molarSaltAdjustedTmNonDegen(upperBoundsSequence$$5, molarSalt$$3)
}
function _nearestNeighborTm(sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1) {
  if(_containsOnlyNonDegenerates(sequence$$41)) {
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
  var correctedSalt = molarSalt$$5 + molarMagnesium$$2 * 140;
  ds = ds + 0.368 * (sequence$$42.length - 1) * Math.log(correctedSalt);
  var termDsCorr = _getTerminalCorrectionsDsHash();
  var v403 = ds;
  var v857 = termDsCorr;
  var v858 = sequence$$42.charAt(0);
  introspect(JAM.policy.p5) {
    var v404 = v857[v858]
  }
  ds = v403 + v404;
  var v405 = ds;
  var v859 = termDsCorr;
  var v860 = sequence$$42.charAt(sequence$$42.length - 1);
  introspect(JAM.policy.p5) {
    var v406 = v859[v860]
  }
  ds = v405 + v406;
  var termDhCorr = _getTerminalCorrectionsDhHash();
  var v407 = dh;
  var v861 = termDhCorr;
  var v862 = sequence$$42.charAt(0);
  introspect(JAM.policy.p5) {
    var v408 = v861[v862]
  }
  dh = v407 + v408;
  var v409 = dh;
  var v863 = termDhCorr;
  var v864 = sequence$$42.charAt(sequence$$42.length - 1);
  introspect(JAM.policy.p5) {
    var v410 = v863[v864]
  }
  dh = v409 + v410;
  var dsValues = _getDsHash();
  var dhValues = _getDhHash();
  var i$$13 = 0;
  var v415 = i$$13 < sequence$$42.length - 1;
  for(;v415;) {
    var v411 = ds;
    var v866 = dsValues;
    var v867 = sequence$$42.charAt(i$$13) + sequence$$42.charAt(i$$13 + 1);
    introspect(JAM.policy.p5) {
      var v412 = v866[v867]
    }
    ds = v411 + v412;
    var v413 = dh;
    var v868 = dhValues;
    var v869 = sequence$$42.charAt(i$$13) + sequence$$42.charAt(i$$13 + 1);
    introspect(JAM.policy.p5) {
      var v414 = v868[v869]
    }
    dh = v413 + v414;
    i$$13 = i$$13 + 1;
    v415 = i$$13 < sequence$$42.length - 1
  }
  return(1E3 * dh / (ds + R * Math.log(molarPrimerTotal$$2 / 2)) - 273.15).toFixed(2)
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
  return _nearestNeighborTmNonDegen(lowerBoundsSequence$$6, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3) + " to " + _nearestNeighborTmNonDegen(upperBoundsSequence$$6, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3)
}
function _getBaseCount(sequence$$44, base$$1) {
  var basePattern = new RegExp(base$$1, "gi");
  if(sequence$$44.search(basePattern) != -1) {
    return JAM.call(sequence$$44.match, sequence$$44, [basePattern]).length
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
  var v423 = i$$14 < nucleotides.length;
  for(;v423;) {
    introspect(JAM.policy.p5) {
      var v875 = nucleotides[i$$14]
    }
    if(_hasRunOfBases(sequence$$45, v875, minRunLength)) {
      hasRun = true;
      var v876 = report + "Contains run of ";
      introspect(JAM.policy.p5) {
        var v877 = nucleotides[i$$14]
      }
      report = v876 + v877 + "'s; "
    }
    i$$14 = i$$14 + 1;
    v423 = i$$14 < nucleotides.length
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
  var v426 = i$$15 < diNucleotides.length;
  for(;v426;) {
    introspect(JAM.policy.p5) {
      var v880 = diNucleotides[i$$15]
    }
    if(_hasRunOfBases(sequence$$46, v880, minRunLength$$1)) {
      hasRun$$1 = true;
      var v881 = report$$1 + "Contains run of ";
      introspect(JAM.policy.p5) {
        var v882 = diNucleotides[i$$15]
      }
      report$$1 = v881 + v882 + "'s; "
    }
    i$$15 = i$$15 + 1;
    v426 = i$$15 < diNucleotides.length
  }
  if(hasRun$$1) {
    return"Warning: " + report$$1
  }else {
    return"Pass"
  }
  return
}
function _hasRunOfBases(sequence$$47, base$$2, minRunLength$$2) {
  var basePattern$$1 = new RegExp("(?:" + base$$2 + "){" + minRunLength$$2 + ",}", "gi");
  if(sequence$$47.search(basePattern$$1) != -1) {
    return JAM.call(sequence$$47.match, sequence$$47, [basePattern$$1]).length
  }else {
    return 0
  }
  return
}
function _getSuitableLengthReport(sequence$$48, minSuitableLength, maxSuitableLength) {
  var report$$2 = "";
  var hasProblem = false;
  if(sequence$$48.length < minSuitableLength) {
    hasProblem = true;
    report$$2 = report$$2 + "Contains fewer than " + minSuitableLength + " bases; "
  }
  if(sequence$$48.length > maxSuitableLength) {
    hasProblem = true;
    report$$2 = report$$2 + "Contains more than " + maxSuitableLength + " bases; "
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
  if(percentGCRange.search(rangePattern) != -1) {
    lowerCalculated = parseFloat($1);
    upperCalculated = parseFloat($2)
  }else {
    lowerCalculated = parseFloat(percentGCRange);
    upperCalculated = parseFloat(percentGCRange)
  }
  if(lowerCalculated < minSuitableGC) {
    hasProblem$$1 = true;
    report$$3 = report$$3 + "%GC is less than " + minSuitableGC + "; "
  }
  if(upperCalculated > maxSuitableGC) {
    hasProblem$$1 = true;
    report$$3 = report$$3 + "%GC is greater than " + maxSuitableGC + "; "
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
  if(sequence$$50.length < minSuitableLength$$1) {
    hasProblem$$2 = true;
    report$$4 = report$$4 + "Contains fewer than " + minSuitableLength$$1 + " bases; "
  }
  if(sequence$$50.length > maxSuitableLength$$1) {
    hasProblem$$2 = true;
    report$$4 = report$$4 + "Contains more than " + maxSuitableLength$$1 + " bases; "
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
  if(range$$5.search(rangePattern$$1) != -1) {
    lowerCalculated$$1 = parseFloat($1);
    upperCalculated$$1 = parseFloat($2)
  }else {
    lowerCalculated$$1 = parseFloat(range$$5);
    upperCalculated$$1 = parseFloat(range$$5)
  }
  if(lowerCalculated$$1 < minSuitable) {
    hasProblem$$3 = true;
    report$$5 = report$$5 + "Tm is less than " + minSuitable + "; "
  }
  if(upperCalculated$$1 > maxSuitable) {
    hasProblem$$3 = true;
    report$$5 = report$$5 + "Tm is greater than " + maxSuitable + "; "
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
  if(sequence$$52.length >= desiredThreePrimeEndSize) {
    threePrimeEnd = sequence$$52.substr(sequence$$52.length - desiredThreePrimeEndSize, 5)
  }else {
    threePrimeEnd = sequence$$52
  }
  gcCounts = _getBaseCount(threePrimeEnd, "g") + _getBaseCount(threePrimeEnd, "c");
  if(gcCounts < minSuitable$$1) {
    hasProblem$$4 = true;
    report$$6 = report$$6 + "There are less than " + minSuitable$$1 + " G's or C's in the last " + threePrimeEnd.length + " bases; "
  }
  if(gcCounts > maxSuitable$$1) {
    hasProblem$$4 = true;
    report$$6 = report$$6 + "There are more than " + maxSuitable$$1 + " G's or C's in the last " + threePrimeEnd.length + " bases; "
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
  JAM.call(matrix.setMatch, matrix, [matchScore]);
  JAM.call(matrix.setMismatch, matrix, [mismatchScore]);
  var scoreSet = new ScoreSet;
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [matrix, gapPenalty, beginGapPenalty, endGapPenalty]);
  var rev = reverse(sequence$$53);
  sequence$$53 = JAM.call(sequence$$53.match, sequence$$53, [/./g]);
  rev = JAM.call(rev.match, rev, [/./g]);
  alignment = new AlignPairQuad;
  JAM.call(alignment.initializeMatrix, alignment, [sequence$$53, rev, scoreSet]);
  alignment.fillMatrix();
  alignment.align();
  var seqAligned = alignment.getAlignedM().replace(/\-/g, " ");
  var revAligned = alignment.getAlignedN().replace(/\-/g, " ");
  var score = alignment.score;
  var divider = new Array;
  var maxContiguous = 0;
  var totalMatches = 0;
  var contiguous = 0;
  var i$$16 = 0;
  var v460 = i$$16 < seqAligned.length;
  for(;v460;) {
    if(JAM.call(scoreSet.getScore, scoreSet, [seqAligned.charAt(i$$16), revAligned.charAt(i$$16)]) == matchScore) {
      divider.push("|");
      contiguous = contiguous + 1;
      totalMatches = totalMatches + 1
    }else {
      divider.push(" ");
      contiguous = 0
    }
    if(contiguous > maxContiguous) {
      maxContiguous = contiguous
    }
    i$$16 = i$$16 + 1;
    v460 = i$$16 < seqAligned.length
  }
  if(maxContiguous > maxContig) {
    hasProblem$$5 = true;
    report$$7 = report$$7 + "There are more than " + maxContig + " self-annealing bases in a row; "
  }
  if(totalMatches / sequenceLength * 100 > maxPercentIdent) {
    hasProblem$$5 = true;
    report$$7 = report$$7 + "More than " + maxPercentIdent + " percent of the bases are self-annealing; "
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
  upper = JAM.call(upper.match, upper, [/./g]);
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
  JAM.call(matrix$$1.setMatch, matrix$$1, [matchScore$$1]);
  JAM.call(matrix$$1.setMismatch, matrix$$1, [mismatchScore$$1]);
  var scoreSet$$1 = new ScoreSet;
  JAM.call(scoreSet$$1.setScoreSetParam, scoreSet$$1, [matrix$$1, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1]);
  var v473 = upper.length > 0;
  for(;v473;) {
    score$$1 = 0;
    if(loop == "") {
      loop = upper.pop()
    }else {
      lower.push(loop);
      loop = ""
    }
    u = upper.length - 1;
    l = lower.length - 1;
    var v913 = u >= 0;
    if(v913) {
      v913 = l >= 0
    }
    var v471 = v913;
    for(;v471;) {
      var v469 = score$$1;
      introspect(JAM.policy.p5) {
        var v914 = upper[u]
      }
      introspect(JAM.policy.p5) {
        var v915 = lower[l]
      }
      score$$1 = v469 + JAM.call(scoreSet$$1.getScore, scoreSet$$1, [v914, v915]);
      u = u - 1;
      l = l - 1;
      var v916 = u >= 0;
      if(v916) {
        v916 = l >= 0
      }
      v471 = v916
    }
    if(score$$1 > topScore) {
      topScore = score$$1;
      topScoreUpper = upper.join("");
      topScoreLower = lower.join("");
      topScoreLoop = loop
    }
    v473 = upper.length > 0
  }
  var upperLowerDiff = topScoreUpper.length - topScoreLower.length;
  if(upperLowerDiff > 0) {
    var i$$17 = 0;
    var v476 = i$$17 < upperLowerDiff;
    for(;v476;) {
      topScoreLower = " " + topScoreLower;
      i$$17 = i$$17 + 1;
      v476 = i$$17 < upperLowerDiff
    }
  }else {
    if(upperLowerDiff < 0) {
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
  var v482 = i$$17 < topScoreUpper.length;
  for(;v482;) {
    if(JAM.call(scoreSet$$1.getScore, scoreSet$$1, [topScoreUpper.charAt(i$$17), topScoreLower.charAt(i$$17)]) == matchScore$$1) {
      divider$$1.push("|");
      contiguous$$1 = contiguous$$1 + 1;
      totalMatches$$1 = totalMatches$$1 + 1
    }else {
      divider$$1.push(" ");
      contiguous$$1 = 0
    }
    if(contiguous$$1 > maxContiguous$$1) {
      maxContiguous$$1 = contiguous$$1
    }
    i$$17 = i$$17 + 1;
    v482 = i$$17 < topScoreUpper.length
  }
  if(maxContiguous$$1 > maxContig$$1) {
    hasProblem$$6 = true;
    report$$8 = report$$8 + "There are more than " + maxContig$$1 + " hairpin bases in a row; "
  }
  if(totalMatches$$1 / sequenceLength$$1 * 100 > maxPercentIdent$$1) {
    hasProblem$$6 = true;
    report$$8 = report$$8 + "More than " + maxPercentIdent$$1 + " percent of the bases are in a hairpin; "
  }
  if(hasProblem$$6) {
    report$$8 = "Warning: " + report$$8
  }else {
    report$$8 = "Pass"
  }
  if(topScoreLoop == "") {
    topScoreLoop = ")"
  }
  returnHash$$1["report"] = report$$8;
  returnHash$$1["upper"] = topScoreUpper;
  returnHash$$1["divider"] = divider$$1.join("") + topScoreLoop;
  returnHash$$1["lower"] = topScoreLower;
  return returnHash$$1
}
function getScore(r1$$1, r2) {
  var v489 = this.scoringMatrix;
  return JAM.call(v489.scoringMatrix_getScore, v489, [r1$$1, r2])
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
  if(!v925) {
    var v1197 = r2$$1 == "g";
    if(v1197) {
      v1197 = r1$$2 == "c"
    }
    v925 = v1197
  }
  if(v925) {
    return this.match
  }else {
    var v1199 = r1$$2 == "a";
    if(v1199) {
      v1199 = r2$$1 == "t"
    }
    var v926 = v1199;
    if(!v926) {
      var v1200 = r2$$1 == "a";
      if(v1200) {
        v1200 = r1$$2 == "t"
      }
      v926 = v1200
    }
    if(v926) {
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
  var v1558 = new Array(this.M.length + 1);
  this.nodes = v1558;
  var i$$18 = 0;
  var v498 = i$$18 < this.nodes.length;
  for(;v498;) {
    var v493 = this.nodes;
    var v494 = i$$18;
    var v1559 = new Array(this.N.length + 1);
    v493[v494] = v1559;
    var j$$10 = 0;
    var v1360 = this.nodes;
    introspect(JAM.policy.p5) {
      var v1205 = v1360[i$$18]
    }
    var v497 = j$$10 < v1205.length;
    for(;v497;) {
      var v931 = this.nodes;
      introspect(JAM.policy.p5) {
        var v495 = v931[i$$18]
      }
      var v496 = j$$10;
      var v1560 = new Node;
      v495[v496] = v1560;
      j$$10 = j$$10 + 1;
      var v1361 = this.nodes;
      introspect(JAM.policy.p5) {
        var v1206 = v1361[i$$18]
      }
      v497 = j$$10 < v1206.length
    }
    i$$18 = i$$18 + 1;
    v498 = i$$18 < this.nodes.length
  }
  this.nodes[0][0].value = 0;
  i$$18 = 1;
  var v505 = i$$18 < this.nodes.length;
  for(;v505;) {
    if(this.scoreSet.useBeginGapLeft) {
      var v1210 = this.nodes;
      introspect(JAM.policy.p5) {
        var v937 = v1210[i$$18]
      }
      var v500 = v937[0];
      var v1444 = this.nodes;
      var v1445 = i$$18 - 1;
      introspect(JAM.policy.p5) {
        var v1362 = v1444[v1445]
      }
      v500.value = v1362[0].value - this.scoreSet.beginGap
    }else {
      var v1213 = this.nodes;
      introspect(JAM.policy.p5) {
        var v940 = v1213[i$$18]
      }
      var v501 = v940[0];
      var v1446 = this.nodes;
      var v1447 = i$$18 - 1;
      introspect(JAM.policy.p5) {
        var v1363 = v1446[v1447]
      }
      v501.value = v1363[0].value - this.scoreSet.gap
    }
    var v1216 = this.nodes;
    introspect(JAM.policy.p5) {
      var v943 = v1216[i$$18]
    }
    v943[0].tracebackI = i$$18 - 1;
    var v1217 = this.nodes;
    introspect(JAM.policy.p5) {
      var v944 = v1217[i$$18]
    }
    v944[0].tracebackJ = 0;
    i$$18 = i$$18 + 1;
    v505 = i$$18 < this.nodes.length
  }
  j$$10 = 1;
  var v511 = j$$10 < this.nodes[0].length;
  for(;v511;) {
    if(this.scoreSet.useBeginGapTop) {
      var v948 = this.nodes[0];
      introspect(JAM.policy.p5) {
        var v506 = v948[j$$10]
      }
      var v1365 = this.nodes[0];
      var v1366 = j$$10 - 1;
      introspect(JAM.policy.p5) {
        var v1221 = v1365[v1366]
      }
      v506.value = v1221.value - this.scoreSet.beginGap
    }else {
      var v951 = this.nodes[0];
      introspect(JAM.policy.p5) {
        var v507 = v951[j$$10]
      }
      var v1367 = this.nodes[0];
      var v1368 = j$$10 - 1;
      introspect(JAM.policy.p5) {
        var v1224 = v1367[v1368]
      }
      v507.value = v1224.value - this.scoreSet.gap
    }
    var v954 = this.nodes[0];
    introspect(JAM.policy.p5) {
      var v509 = v954[j$$10]
    }
    v509.tracebackI = 0;
    var v955 = this.nodes[0];
    introspect(JAM.policy.p5) {
      var v510 = v955[j$$10]
    }
    v510.tracebackJ = j$$10 - 1;
    j$$10 = j$$10 + 1;
    v511 = j$$10 < this.nodes[0].length
  }
  return
}
function dumpMatrix() {
  var v512 = outputWindow.document;
  JAM.call(v512.write, v512, ["Dynamic programming matrix i=" + this.nodes.length + " and j=" + this.nodes[0].length]);
  var v514 = outputWindow.document;
  JAM.call(v514.write, v514, ["\n"]);
  var i$$19 = 0;
  var v525 = i$$19 < this.nodes.length;
  for(;v525;) {
    var j$$11 = 0;
    var v1372 = this.nodes;
    introspect(JAM.policy.p5) {
      var v1232 = v1372[i$$19]
    }
    var v523 = j$$11 < v1232.length;
    for(;v523;) {
      var v1233 = this.nodes;
      introspect(JAM.policy.p5) {
        var v961 = v1233[i$$19]
      }
      introspect(JAM.policy.p5) {
        var v515 = v961[j$$11]
      }
      var traceI = v515.tracebackI;
      var v1234 = this.nodes;
      introspect(JAM.policy.p5) {
        var v962 = v1234[i$$19]
      }
      introspect(JAM.policy.p5) {
        var v516 = v962[j$$11]
      }
      var traceJ = v516.tracebackJ;
      if(traceI == undefined) {
        traceI = "u"
      }
      if(traceJ == undefined) {
        traceJ = "u"
      }
      var v519 = "(" + i$$19 + "," + j$$11 + ")[" + traceI + "," + traceJ + "]=";
      var v1374 = this.nodes;
      introspect(JAM.policy.p5) {
        var v1236 = v1374[i$$19]
      }
      introspect(JAM.policy.p5) {
        var v964 = v1236[j$$11]
      }
      var output = v519 + v964.value;
      var v521 = outputWindow.document;
      JAM.call(v521.write, v521, [rightNum(output, "", 20, " ")]);
      j$$11 = j$$11 + 1;
      var v1375 = this.nodes;
      introspect(JAM.policy.p5) {
        var v1237 = v1375[i$$19]
      }
      v523 = j$$11 < v1237.length
    }
    var v524 = outputWindow.document;
    JAM.call(v524.write, v524, ["\n"]);
    i$$19 = i$$19 + 1;
    v525 = i$$19 < this.nodes.length
  }
  var v526 = outputWindow.document;
  JAM.call(v526.write, v526, ["\n"]);
  return
}
function fillMatrix() {
  var i$$20 = 1;
  var v572 = i$$20 < this.nodes.length;
  for(;v572;) {
    var j$$12 = 1;
    var v571 = j$$12 < this.nodes[0].length;
    for(;v571;) {
      var a$$1;
      var b;
      var c$$1;
      var v969 = i$$20 == this.nodes.length - 1;
      if(v969) {
        v969 = j$$12 == this.nodes[0].length - 1
      }
      if(v969) {
        if(this.scoreSet.useEndGapRight) {
          var v1379 = this.nodes;
          var v1380 = i$$20 - 1;
          introspect(JAM.policy.p5) {
            var v1243 = v1379[v1380]
          }
          introspect(JAM.policy.p5) {
            var v971 = v1243[j$$12]
          }
          a$$1 = v971.value - this.scoreSet.endGap
        }else {
          var v1381 = this.nodes;
          var v1382 = i$$20 - 1;
          introspect(JAM.policy.p5) {
            var v1244 = v1381[v1382]
          }
          introspect(JAM.policy.p5) {
            var v973 = v1244[j$$12]
          }
          a$$1 = v973.value - this.scoreSet.gap
        }
        if(this.scoreSet.useEndGapBottom) {
          var v1383 = this.nodes;
          introspect(JAM.policy.p5) {
            var v1245 = v1383[i$$20]
          }
          var v1246 = j$$12 - 1;
          introspect(JAM.policy.p5) {
            var v976 = v1245[v1246]
          }
          b = v976.value - this.scoreSet.endGap
        }else {
          var v1384 = this.nodes;
          introspect(JAM.policy.p5) {
            var v1247 = v1384[i$$20]
          }
          var v1248 = j$$12 - 1;
          introspect(JAM.policy.p5) {
            var v978 = v1247[v1248]
          }
          b = v978.value - this.scoreSet.gap
        }
      }else {
        if(i$$20 == this.nodes.length - 1) {
          var v1386 = this.nodes;
          var v1387 = i$$20 - 1;
          introspect(JAM.policy.p5) {
            var v1250 = v1386[v1387]
          }
          introspect(JAM.policy.p5) {
            var v981 = v1250[j$$12]
          }
          a$$1 = v981.value - this.scoreSet.gap;
          if(this.scoreSet.useEndGapBottom) {
            var v1388 = this.nodes;
            introspect(JAM.policy.p5) {
              var v1251 = v1388[i$$20]
            }
            var v1252 = j$$12 - 1;
            introspect(JAM.policy.p5) {
              var v984 = v1251[v1252]
            }
            b = v984.value - this.scoreSet.endGap
          }else {
            var v1389 = this.nodes;
            introspect(JAM.policy.p5) {
              var v1253 = v1389[i$$20]
            }
            var v1254 = j$$12 - 1;
            introspect(JAM.policy.p5) {
              var v986 = v1253[v1254]
            }
            b = v986.value - this.scoreSet.gap
          }
        }else {
          if(j$$12 == this.nodes[0].length - 1) {
            if(this.scoreSet.useEndGapRight) {
              var v1391 = this.nodes;
              var v1392 = i$$20 - 1;
              introspect(JAM.policy.p5) {
                var v1256 = v1391[v1392]
              }
              introspect(JAM.policy.p5) {
                var v990 = v1256[j$$12]
              }
              a$$1 = v990.value - this.scoreSet.endGap
            }else {
              var v1393 = this.nodes;
              var v1394 = i$$20 - 1;
              introspect(JAM.policy.p5) {
                var v1257 = v1393[v1394]
              }
              introspect(JAM.policy.p5) {
                var v992 = v1257[j$$12]
              }
              a$$1 = v992.value - this.scoreSet.gap
            }
            var v1395 = this.nodes;
            introspect(JAM.policy.p5) {
              var v1258 = v1395[i$$20]
            }
            var v1259 = j$$12 - 1;
            introspect(JAM.policy.p5) {
              var v994 = v1258[v1259]
            }
            b = v994.value - this.scoreSet.gap
          }else {
            var v1396 = this.nodes;
            var v1397 = i$$20 - 1;
            introspect(JAM.policy.p5) {
              var v1260 = v1396[v1397]
            }
            introspect(JAM.policy.p5) {
              var v996 = v1260[j$$12]
            }
            a$$1 = v996.value - this.scoreSet.gap;
            var v1398 = this.nodes;
            introspect(JAM.policy.p5) {
              var v1261 = v1398[i$$20]
            }
            var v1262 = j$$12 - 1;
            introspect(JAM.policy.p5) {
              var v998 = v1261[v1262]
            }
            b = v998.value - this.scoreSet.gap
          }
        }
      }
      var v1399 = this.nodes;
      var v1400 = i$$20 - 1;
      introspect(JAM.policy.p5) {
        var v1263 = v1399[v1400]
      }
      var v1264 = j$$12 - 1;
      introspect(JAM.policy.p5) {
        var v1000 = v1263[v1264]
      }
      var v558 = v1000.value;
      var v1001 = this.scoreSet;
      var v1265 = this.M;
      var v1266 = i$$20 - 1;
      introspect(JAM.policy.p5) {
        var v1002 = v1265[v1266]
      }
      var v1267 = this.N;
      var v1268 = j$$12 - 1;
      introspect(JAM.policy.p5) {
        var v1003 = v1267[v1268]
      }
      c$$1 = v558 + JAM.call(v1001.getScore, v1001, [v1002, v1003]);
      var v1004 = a$$1 >= b;
      if(v1004) {
        v1004 = a$$1 >= c$$1
      }
      if(v1004) {
        var v1269 = this.nodes;
        introspect(JAM.policy.p5) {
          var v1005 = v1269[i$$20]
        }
        introspect(JAM.policy.p5) {
          var v560 = v1005[j$$12]
        }
        v560.value = a$$1;
        var v1270 = this.nodes;
        introspect(JAM.policy.p5) {
          var v1006 = v1270[i$$20]
        }
        introspect(JAM.policy.p5) {
          var v561 = v1006[j$$12]
        }
        v561.tracebackI = i$$20 - 1;
        var v1271 = this.nodes;
        introspect(JAM.policy.p5) {
          var v1007 = v1271[i$$20]
        }
        introspect(JAM.policy.p5) {
          var v562 = v1007[j$$12]
        }
        v562.tracebackJ = j$$12
      }else {
        var v1008 = b >= c$$1;
        if(v1008) {
          v1008 = b >= a$$1
        }
        if(v1008) {
          var v1272 = this.nodes;
          introspect(JAM.policy.p5) {
            var v1009 = v1272[i$$20]
          }
          introspect(JAM.policy.p5) {
            var v563 = v1009[j$$12]
          }
          v563.value = b;
          var v1273 = this.nodes;
          introspect(JAM.policy.p5) {
            var v1010 = v1273[i$$20]
          }
          introspect(JAM.policy.p5) {
            var v564 = v1010[j$$12]
          }
          v564.tracebackI = i$$20;
          var v1274 = this.nodes;
          introspect(JAM.policy.p5) {
            var v1011 = v1274[i$$20]
          }
          introspect(JAM.policy.p5) {
            var v565 = v1011[j$$12]
          }
          v565.tracebackJ = j$$12 - 1
        }else {
          var v1275 = this.nodes;
          introspect(JAM.policy.p5) {
            var v1012 = v1275[i$$20]
          }
          introspect(JAM.policy.p5) {
            var v566 = v1012[j$$12]
          }
          v566.value = c$$1;
          var v1276 = this.nodes;
          introspect(JAM.policy.p5) {
            var v1013 = v1276[i$$20]
          }
          introspect(JAM.policy.p5) {
            var v567 = v1013[j$$12]
          }
          v567.tracebackI = i$$20 - 1;
          var v1277 = this.nodes;
          introspect(JAM.policy.p5) {
            var v1014 = v1277[i$$20]
          }
          introspect(JAM.policy.p5) {
            var v568 = v1014[j$$12]
          }
          v568.tracebackJ = j$$12 - 1
        }
      }
      j$$12 = j$$12 + 1;
      v571 = j$$12 < this.nodes[0].length
    }
    i$$20 = i$$20 + 1;
    v572 = i$$20 < this.nodes.length
  }
  var v1280 = this.nodes;
  var v1281 = this.nodes.length - 1;
  introspect(JAM.policy.p5) {
    var v1017 = v1280[v1281]
  }
  var v1018 = this.nodes[0].length - 1;
  introspect(JAM.policy.p5) {
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
  var currentI = this.nodes.length - 1;
  var currentJ = this.nodes[0].length - 1;
  var v1021 = this.nodes;
  var v1022 = this.nodes.length - 1;
  introspect(JAM.policy.p5) {
    var v576 = v1021[v1022]
  }
  var v577 = this.nodes[0].length - 1;
  introspect(JAM.policy.p5) {
    var currentNode = v576[v577]
  }
  var v1024 = currentNode.tracebackI != undefined;
  if(v1024) {
    v1024 = currentNode.tracebackJ != undefined
  }
  var v592 = v1024;
  for(;v592;) {
    var v1025 = currentNode.tracebackI == currentI - 1;
    if(v1025) {
      v1025 = currentNode.tracebackJ == currentJ - 1
    }
    if(v1025) {
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
    var v1032 = this.nodes;
    var v1033 = currentNode.tracebackI;
    introspect(JAM.policy.p5) {
      var v590 = v1032[v1033]
    }
    var v591 = currentNode.tracebackJ;
    introspect(JAM.policy.p5) {
      currentNode = v590[v591]
    }
    var v1034 = currentNode.tracebackI != undefined;
    if(v1034) {
      v1034 = currentNode.tracebackJ != undefined
    }
    v592 = v1034
  }
  var v1563 = this.alignedM.reverse();
  this.alignedM = v1563;
  var v1564 = this.alignedN.reverse();
  this.alignedN = v1564;
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
var v600 = Complementarity;
var v1565 = new ScoringMatrix;
v600.prototype = v1565;
Complementarity.prototype.setMismatch = setMismatch;
Complementarity.prototype.setMatch = setMatch;
new AlignPairQuad;
AlignPairQuad.prototype.initializeMatrix = initializeMatrix;
AlignPairQuad.prototype.fillMatrix = fillMatrix;
AlignPairQuad.prototype.align = alignQuad;
AlignPairQuad.prototype.getAlignedM = getAlignedM;
AlignPairQuad.prototype.getAlignedN = getAlignedN;
AlignPairQuad.prototype.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
JAM.set(document.getElementById("submitbtn"), "onclick", v3);
JAM.set(document.getElementById("clearbtn"), "onclick", v4)
