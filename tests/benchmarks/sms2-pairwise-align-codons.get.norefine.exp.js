// sms2-pairwise-align-codons.js
function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return
}
function v3() {
  try {
    pairwiseAlignCodons(document)
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
      var v1253 = arrayOfTitles[i$$1]
    }
    var v574 = v1253.search(/\S/) == -1;
    if(!v574) {
      introspect(JAM.policy.p11) {
        var v1399 = arrayOfSequences[i$$1]
      }
      var v991 = v1399.search(/\S/) == -1;
      if(!v991) {
        introspect(JAM.policy.p11) {
          var v1400 = arrayOfSequences[i$$1]
        }
        v991 = v1400.length != lengthOfAlign
      }
      v574 = v991
    }
    if(v574) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v576 = codonTable.search(/AmAcid/) == -1;
  if(!v576) {
    var v994 = codonTable.search(/Codon/) == -1;
    if(!v994) {
      var v1258 = codonTable.search(/Number/) == -1;
      if(!v1258) {
        var v1402 = codonTable.search(/\/1000/) == -1;
        if(!v1402) {
          v1402 = codonTable.search(/Fraction\s*\.\./) == -1
        }
        v1258 = v1402
      }
      v994 = v1258
    }
    v576 = v994
  }
  if(v576) {
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
    introspect(JAM.policy.p11) {
      var v997 = arrayOfPatterns[z$$2]
    }
    if(v997.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p11) {
      var v998 = arrayOfPatterns[z$$2]
    }
    if(moreExpressionCheck(v998) == false) {
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
      var v1260 = arrayOfPatterns[j]
    }
    var v583 = v1260.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1606 = eval("introspect(JAM.policy.pFull) { " + v583 + " }")
    }else {
      var v1606 = JAM.call(eval, null, [v583])
    }
    v20[v21] = v1606;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAM.policy.p11) {
      var v1000 = arrayOfPatterns[j]
    }
    var v1607 = v1000.match(/=[a-zA-Z\*]/).toString();
    v22[v23] = v1607;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAM.policy.p11) {
      var v585 = geneticCodeMatchResult[j]
    }
    var v1608 = v585.replace(/=/g, "");
    v24[v25] = v1608;
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
        var v1002 = geneticCodeMatchExp[j]
      }
      if(codon.search(v1002) != -1) {
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
      var v1004 = arrayOfPatterns$$1[z$$3]
    }
    if(v1004.search(/[^acdefghiklmnpqrstvwyz]/i) != -1) {
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
      var v1005 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v1005 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v38 = j$$1 < arrayOfPatterns$$1.length;
    for(;v38;) {
      introspect(JAM.policy.p11) {
        var v1006 = arrayOfPatterns$$1[j$$1]
      }
      if(v1006.search(re) != -1) {
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
      var v1007 = arrayOfPatterns$$2[z$$4]
    }
    if(v1007.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p11) {
      var v1008 = arrayOfPatterns$$2[z$$4]
    }
    if(moreExpressionCheck(v1008) == false) {
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
      var v1010 = alignArray[i$$4]
    }
    if(v1010.search(/[^\s]+\s/) == -1) {
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
    introspect(JAM.policy.p11) {
      var v1262 = arrayOfPatterns$$3[j$$2]
    }
    var v632 = v1262.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1609 = eval("introspect(JAM.policy.pFull) { " + v632 + " }")
    }else {
      var v1609 = JAM.call(eval, null, [v632])
    }
    v73[v74] = v1609;
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
      var v1012 = arrayOfPatterns$$4[j$$3]
    }
    var v1610 = v1012.match(/=[a-zA-Z\*]/).toString();
    v77[v78] = v1610;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAM.policy.p11) {
      var v636 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1611 = v636.replace(/=/g, "");
    v79[v80] = v1611;
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
    fastaTitle = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "").toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v664 = expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1;
  if(!v664) {
    var v1015 = expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1;
    if(!v1015) {
      var v1264 = expressionToCheck.search(/\[\]/) != -1;
      if(!v1264) {
        var v1405 = expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1;
        if(!v1405) {
          var v1491 = expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1;
          if(!v1491) {
            var v1521 = expressionToCheck.search(/\|\|/) != -1;
            if(!v1521) {
              var v1542 = expressionToCheck.search(/\/\|/) != -1;
              if(!v1542) {
                var v1556 = expressionToCheck.search(/\|\//) != -1;
                if(!v1556) {
                  var v1568 = expressionToCheck.search(/\[.\]/) != -1;
                  if(!v1568) {
                    var v1578 = expressionToCheck.search(/\</) != -1;
                    if(!v1578) {
                      v1578 = expressionToCheck.search(/\>/) != -1
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
  if(v664) {
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
  var v679 = emblFile.search(/ID/) == -1;
  if(!v679) {
    var v1026 = emblFile.search(/AC/) == -1;
    if(!v1026) {
      var v1275 = emblFile.search(/DE/) == -1;
      if(!v1275) {
        v1275 = emblFile.search(/SQ/) == -1
      }
      v1026 = v1275
    }
    v679 = v1026
  }
  if(v679) {
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
  var v684 = genBankFile.search(/LOCUS/) == -1;
  if(!v684) {
    var v1029 = genBankFile.search(/DEFINITION/) == -1;
    if(!v1029) {
      var v1278 = genBankFile.search(/ACCESSION/) == -1;
      if(!v1278) {
        v1278 = genBankFile.search(/ORIGIN/) == -1
      }
      v1029 = v1278
    }
    v684 = v1029
  }
  if(v684) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v685 = genBankFile$$1.search(/LOCUS/) == -1;
  if(!v685) {
    var v1032 = genBankFile$$1.search(/DEFINITION/) == -1;
    if(!v1032) {
      var v1281 = genBankFile$$1.search(/ACCESSION/) == -1;
      if(!v1281) {
        v1281 = genBankFile$$1.search(/ORIGIN/) == -1
      }
      v1032 = v1281
    }
    v685 = v1032
  }
  if(v685) {
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
  var v687 = emblFile$$1.search(/ID/) == -1;
  if(!v687) {
    var v1035 = emblFile$$1.search(/AC/) == -1;
    if(!v1035) {
      var v1284 = emblFile$$1.search(/DE/) == -1;
      if(!v1284) {
        v1284 = emblFile$$1.search(/SQ/) == -1
      }
      v1035 = v1284
    }
    v687 = v1035
  }
  if(v687) {
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
    var v692 = adjustment < 0;
    if(v692) {
      v692 = adjusted >= 0
    }
    if(v692) {
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
  var v709 = sequence$$13.length <= firstIndexToMutate;
  if(!v709) {
    var v1046 = lastIndexToMutate < 0;
    if(!v1046) {
      v1046 = lastIndexToMutate <= firstIndexToMutate
    }
    v709 = v1046
  }
  if(v709) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    var v711 = randNum < firstIndexToMutate;
    if(!v711) {
      v711 = randNum > lastIndexToMutate
    }
    if(v711) {
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
        var v715 = components$$1[componentsIndex]
      }
      if(v715 != currentChar) {
        needNewChar = false
      }
    }
    var v716 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.p11) {
      var v717 = components$$1[componentsIndex]
    }
    sequence$$13 = v716 + v717 + sequence$$13.substring(randNum + 1, sequence$$13.length);
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
      var v726 = arrayOfItems[i$$9]
    }
    matchExp = v726.match(/\/.+\//) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.p11) {
      var v1291 = arrayOfItems[i$$9]
    }
    cutDistance = parseFloat(v1291.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v728 = matchPosition >= lowerLimit;
      if(v728) {
        v728 = matchPosition < upperLimit
      }
      if(v728) {
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
    var v1527 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p11) {
      var v1574 = arrayOfItems[i$$9]
    }
    JAM.call(v250.write, v250, [v1527 + v1574.match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"]);
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
      var v737 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = v737.match(/\/[^\/]+\//) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(sequence$$16.search(matchExp$$1) != -1) {
      tempNumber = sequence$$16.match(matchExp$$1).length
    }
    var percentage = 0;
    var v1056 = originalLength + 1;
    introspect(JAM.policy.p11) {
      var v1425 = arrayOfItems$$1[i$$10]
    }
    if(v1056 - parseFloat(v1425.match(/\d+/)) > 0) {
      var v260 = 100 * tempNumber;
      var v740 = originalLength + 1;
      introspect(JAM.policy.p11) {
        var v1295 = arrayOfItems$$1[i$$10]
      }
      percentage = v260 / (v740 - parseFloat(v1295.match(/\d+/)))
    }
    var v263 = outputWindow.document;
    introspect(JAM.policy.p11) {
      var v1575 = arrayOfItems$$1[i$$10]
    }
    JAM.call(v263.write, v263, ["<tr><td>" + v1575.match(/\([^\(]+\)\b/).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n"]);
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
function pairwiseAlignCodons(theDocument) {
  var newCodonsOne = "";
  var titleOne = "";
  var newCodonsTwo = "";
  var titleTwo = "";
  var maxInput$$3 = 6E3;
  if(testScript() == false) {
    return false
  }
  var v749 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v749) {
    var v1062 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
    if(!v1062) {
      var v1299 = checkFormElement(theDocument.forms[0].elements[1]) == false;
      if(!v1299) {
        v1299 = checkSequenceLength(theDocument.forms[0].elements[1].value, maxInput$$3) == false
      }
      v1062 = v1299
    }
    v749 = v1062
  }
  if(v749) {
    return false
  }
  var MATRIX = "codon";
  var v1064 = theDocument.forms[0].elements[5].options;
  var v1065 = theDocument.forms[0].elements[5].selectedIndex;
  introspect(JAM.policy.p11) {
    var v750 = v1064[v1065]
  }
  var BEGIN_GAP_PENALTY = parseInt(v750.value);
  var v1066 = theDocument.forms[0].elements[6].options;
  var v1067 = theDocument.forms[0].elements[6].selectedIndex;
  introspect(JAM.policy.p11) {
    var v751 = v1066[v1067]
  }
  var GAP_PENALTY = parseInt(v751.value);
  var v1068 = theDocument.forms[0].elements[7].options;
  var v1069 = theDocument.forms[0].elements[7].selectedIndex;
  introspect(JAM.policy.p11) {
    var v752 = v1068[v1069]
  }
  var END_GAP_PENALTY = parseInt(v752.value);
  newCodonsOne = getSequenceFromFasta(theDocument.forms[0].elements[0].value);
  newCodonsOne = removeNonDna(newCodonsOne);
  newCodonsOne = newCodonsOne.replace(/u/g, "t");
  newCodonsOne = newCodonsOne.replace(/U/g, "T");
  newCodonsTwo = removeNonDnaStrict(newCodonsOne);
  titleOne = getTitleFromFasta(theDocument.forms[0].elements[0].value);
  newCodonsTwo = getSequenceFromFasta(theDocument.forms[0].elements[1].value);
  newCodonsTwo = removeNonDna(newCodonsTwo);
  newCodonsTwo = newCodonsTwo.replace(/u/gi, "t");
  newCodonsTwo = newCodonsTwo.replace(/U/gi, "T");
  newCodonsTwo = removeNonDnaStrict(newCodonsTwo);
  titleTwo = getTitleFromFasta(theDocument.forms[0].elements[1].value);
  var v757 = newCodonsOne.length % 3 != 0;
  if(!v757) {
    v757 = newCodonsTwo.length % 3 != 0
  }
  if(v757) {
    alert(newCodonsOne.length);
    alert(newCodonsTwo);
    alert("The sequences must be evenly divisible by 3. ");
    return false
  }
  openWindow("Pairwise Align Codons");
  openPre();
  var v287 = outputWindow.document;
  JAM.call(v287.write, v287, [getPairwiseAlignTitle(titleOne, newCodonsOne, titleTwo, newCodonsTwo)]);
  if(newCodonsOne.search(/.../) != -1) {
    newCodonsOne = newCodonsOne.match(/.../g)
  }
  if(newCodonsTwo.search(/.../) != -1) {
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
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [scoringMatrix, gapPenalty, beginGapPenalty, endGapPenalty]);
  var alignment;
  if(useLinearSpace) {
    alignment = new AlignPairLinear;
    JAM.call(alignment.setAlignParam, alignment, [newCodonsOne$$1, newCodonsTwo$$1, scoreSet]);
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
    JAM.call(alignment.initializeMatrix, alignment, [newCodonsOne$$1, newCodonsTwo$$1, scoreSet]);
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
  introspect(JAM.policy.p11) {
    var v770 = v1079[v1080]
  }
  if(v770 == null) {
    throw"Unrecognized residue pair: " + r1$$2 + ", " + r2$$1 + ".";
  }else {
    var v319 = this.scoreHash;
    var v320 = r1$$2 + r2$$1;
    introspect(JAM.policy.p11) {
      return v319[v320]
    }
  }
  return
}
function scoringMatrix_fillHash(matrix$$1) {
  var cols = matrix$$1[0].split(/\s+/);
  var cells;
  var i$$11 = 1;
  var v327 = i$$11 < matrix$$1.length;
  for(;v327;) {
    introspect(JAM.policy.p11) {
      var v323 = matrix$$1[i$$11]
    }
    cells = v323.split(/\s+/);
    var j$$10 = 1;
    var v326 = j$$10 < cols.length + 1;
    for(;v326;) {
      var v324 = this.scoreHash;
      var v774 = cells[0].toLowerCase();
      var v1313 = j$$10 - 1;
      introspect(JAM.policy.p11) {
        var v1084 = cols[v1313]
      }
      var v325 = v774 + v1084.toLowerCase();
      introspect(JAM.policy.p11) {
        var v776 = cells[j$$10]
      }
      var v1612 = parseInt(v776);
      JAM.set(v324, v325, v1612, JAM.policy.p6);
      j$$10 = j$$10 + 1;
      v326 = j$$10 < cols.length + 1
    }
    i$$11 = i$$11 + 1;
    v327 = i$$11 < matrix$$1.length
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
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$2]);
  return
}
function align() {
  if(this.M.length == 0) {
    var j$$11 = 1;
    var v333 = j$$11 <= this.N.length;
    for(;v333;) {
      this.alignedM.push(".--");
      var v329 = this.alignedN;
      var v781 = this.N;
      var v782 = j$$11 - 1;
      introspect(JAM.policy.p11) {
        var v330 = v781[v782]
      }
      v329.push(v330);
      this.score = this.score + this.scoreSet.gap;
      j$$11 = j$$11 + 1;
      v333 = j$$11 <= this.N.length
    }
  }else {
    if(this.N.length == 0) {
      j$$11 = 1;
      var v339 = j$$11 <= this.M.length;
      for(;v339;) {
        this.alignedN.push(".--");
        var v335 = this.alignedM;
        var v787 = this.M;
        var v788 = j$$11 - 1;
        introspect(JAM.policy.p11) {
          var v336 = v787[v788]
        }
        v335.push(v336);
        this.score = this.score + this.scoreSet.gap;
        j$$11 = j$$11 + 1;
        v339 = j$$11 <= this.M.length
      }
    }else {
      var v791 = this.M.length == 0;
      if(v791) {
        v791 = this.N.length == 0
      }
      if(v791) {
      }else {
        JAM.call(this.path, this, [0, 0, this.M.length, this.N.length])
      }
    }
  }
  return
}
function path(i1, j1, i2, j2) {
  var v794 = i1 + 1 == i2;
  if(!v794) {
    v794 = j1 == j2
  }
  if(v794) {
    var subM = new Array;
    var subN = new Array;
    var i$$12 = i1 + 1;
    var v346 = i$$12 <= i2;
    for(;v346;) {
      var v795 = this.M;
      var v796 = i$$12 - 1;
      introspect(JAM.policy.p11) {
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
      introspect(JAM.policy.p11) {
        var v347 = v797[v798]
      }
      subN.push(v347);
      j$$12 = j$$12 + 1;
      v348 = j$$12 <= j2
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
    JAM.set(this.Sn, j1, 0, JAM.policy.p6);
    if(i1 == 0) {
      j$$12 = j1 + 1;
      var v381 = j$$12 <= j2;
      for(;v381;) {
        var v380 = this.Sn;
        var v1099 = this.Sn;
        var v1100 = j$$12 - 1;
        introspect(JAM.policy.p11) {
          var v819 = v1099[v1100]
        }
        JAM.set(v380, j$$12, v819 - this.scoreSet.beginGap, JAM.policy.p6);
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
        introspect(JAM.policy.p11) {
          var v821 = v1102[v1103]
        }
        JAM.set(v382, j$$12, v821 - this.scoreSet.gap, JAM.policy.p6);
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
      introspect(JAM.policy.p11) {
        diag = v385[j1]
      }
      if(j1 == 0) {
        var v823 = this.Sn;
        introspect(JAM.policy.p11) {
          var v386 = v823[j1]
        }
        left$$2 = v386 - this.scoreSet.beginGap
      }else {
        var v825 = this.Sn;
        introspect(JAM.policy.p11) {
          var v388 = v825[j1]
        }
        left$$2 = v388 - this.scoreSet.gap
      }
      JAM.set(this.Sn, j1, left$$2, JAM.policy.p6);
      j$$12 = j1 + 1;
      var v405 = j$$12 <= j2;
      for(;v405;) {
        var v827 = j$$12 == this.N.length;
        if(v827) {
          v827 = i$$12 == this.M.length
        }
        if(v827) {
          var v1107 = this.Sn;
          introspect(JAM.policy.p11) {
            var v828 = v1107[j$$12]
          }
          var v392 = v828 - this.scoreSet.endGap;
          var v830 = left$$2 - this.scoreSet.endGap;
          var v1110 = diag;
          var v1319 = this.scoreSet;
          var v1442 = this.M;
          var v1443 = i$$12 - 1;
          introspect(JAM.policy.p11) {
            var v1320 = v1442[v1443]
          }
          var v1444 = this.N;
          var v1445 = j$$12 - 1;
          introspect(JAM.policy.p11) {
            var v1321 = v1444[v1445]
          }
          left$$2 = Math.max(v392, Math.max(v830, v1110 + JAM.call(v1319.getScore, v1319, [v1320, v1321])))
        }else {
          if(i$$12 == this.M.length) {
            var v1113 = this.Sn;
            introspect(JAM.policy.p11) {
              var v833 = v1113[j$$12]
            }
            var v394 = v833 - this.scoreSet.gap;
            var v835 = left$$2 - this.scoreSet.endGap;
            var v1116 = diag;
            var v1323 = this.scoreSet;
            var v1446 = this.M;
            var v1447 = i$$12 - 1;
            introspect(JAM.policy.p11) {
              var v1324 = v1446[v1447]
            }
            var v1448 = this.N;
            var v1449 = j$$12 - 1;
            introspect(JAM.policy.p11) {
              var v1325 = v1448[v1449]
            }
            left$$2 = Math.max(v394, Math.max(v835, v1116 + JAM.call(v1323.getScore, v1323, [v1324, v1325])))
          }else {
            if(j$$12 == this.N.length) {
              var v1119 = this.Sn;
              introspect(JAM.policy.p11) {
                var v838 = v1119[j$$12]
              }
              var v396 = v838 - this.scoreSet.endGap;
              var v840 = left$$2 - this.scoreSet.gap;
              var v1122 = diag;
              var v1327 = this.scoreSet;
              var v1450 = this.M;
              var v1451 = i$$12 - 1;
              introspect(JAM.policy.p11) {
                var v1328 = v1450[v1451]
              }
              var v1452 = this.N;
              var v1453 = j$$12 - 1;
              introspect(JAM.policy.p11) {
                var v1329 = v1452[v1453]
              }
              left$$2 = Math.max(v396, Math.max(v840, v1122 + JAM.call(v1327.getScore, v1327, [v1328, v1329])))
            }else {
              var v1124 = this.Sn;
              introspect(JAM.policy.p11) {
                var v842 = v1124[j$$12]
              }
              var v398 = v842 - this.scoreSet.gap;
              var v844 = left$$2 - this.scoreSet.gap;
              var v1127 = diag;
              var v1331 = this.scoreSet;
              var v1454 = this.M;
              var v1455 = i$$12 - 1;
              introspect(JAM.policy.p11) {
                var v1332 = v1454[v1455]
              }
              var v1456 = this.N;
              var v1457 = j$$12 - 1;
              introspect(JAM.policy.p11) {
                var v1333 = v1456[v1457]
              }
              left$$2 = Math.max(v398, Math.max(v844, v1127 + JAM.call(v1331.getScore, v1331, [v1332, v1333])))
            }
          }
        }
        var v403 = this.Sn;
        introspect(JAM.policy.p11) {
          diag = v403[j$$12]
        }
        JAM.set(this.Sn, j$$12, left$$2, JAM.policy.p6);
        j$$12 = j$$12 + 1;
        v405 = j$$12 <= j2
      }
      i$$12 = i$$12 + 1;
      v406 = i$$12 <= middle
    }
    JAM.set(this.Sp, j2, 0, JAM.policy.p6);
    if(i2 == this.M.length) {
      j$$12 = j2 - 1;
      var v409 = j$$12 >= j1;
      for(;v409;) {
        var v408 = this.Sp;
        var v1130 = this.Sp;
        var v1131 = j$$12 + 1;
        introspect(JAM.policy.p11) {
          var v847 = v1130[v1131]
        }
        JAM.set(v408, j$$12, v847 - this.scoreSet.endGap, JAM.policy.p6);
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
        introspect(JAM.policy.p11) {
          var v849 = v1133[v1134]
        }
        JAM.set(v410, j$$12, v849 - this.scoreSet.gap, JAM.policy.p6);
        j$$12 = j$$12 - 1;
        v411 = j$$12 >= j1
      }
    }
    var right$$2;
    i$$12 = i2 - 1;
    var v434 = i$$12 >= middle;
    for(;v434;) {
      var v413 = this.Sp;
      introspect(JAM.policy.p11) {
        diag = v413[j2]
      }
      if(j2 == this.N.length) {
        var v852 = this.Sp;
        introspect(JAM.policy.p11) {
          var v414 = v852[j2]
        }
        right$$2 = v414 - this.scoreSet.endGap
      }else {
        var v854 = this.Sp;
        introspect(JAM.policy.p11) {
          var v416 = v854[j2]
        }
        right$$2 = v416 - this.scoreSet.gap
      }
      JAM.set(this.Sp, j2, right$$2, JAM.policy.p6);
      j$$12 = j2 - 1;
      var v433 = j$$12 >= j1;
      for(;v433;) {
        var v856 = j$$12 == 0;
        if(v856) {
          v856 = i$$12 == 0
        }
        if(v856) {
          var v1137 = this.Sp;
          introspect(JAM.policy.p11) {
            var v857 = v1137[j$$12]
          }
          var v420 = v857 - this.scoreSet.beginGap;
          var v859 = right$$2 - this.scoreSet.beginGap;
          var v1140 = diag;
          var v1335 = this.scoreSet;
          var v1458 = this.M;
          var v1459 = i$$12 + 1 - 1;
          introspect(JAM.policy.p11) {
            var v1336 = v1458[v1459]
          }
          var v1460 = this.N;
          var v1461 = j$$12 + 1 - 1;
          introspect(JAM.policy.p11) {
            var v1337 = v1460[v1461]
          }
          right$$2 = Math.max(v420, Math.max(v859, v1140 + JAM.call(v1335.getScore, v1335, [v1336, v1337])))
        }else {
          if(j$$12 == 0) {
            var v1142 = this.Sp;
            introspect(JAM.policy.p11) {
              var v861 = v1142[j$$12]
            }
            var v422 = v861 - this.scoreSet.beginGap;
            var v863 = right$$2 - this.scoreSet.gap;
            var v1145 = diag;
            var v1339 = this.scoreSet;
            var v1462 = this.M;
            var v1463 = i$$12 + 1 - 1;
            introspect(JAM.policy.p11) {
              var v1340 = v1462[v1463]
            }
            var v1464 = this.N;
            var v1465 = j$$12 + 1 - 1;
            introspect(JAM.policy.p11) {
              var v1341 = v1464[v1465]
            }
            right$$2 = Math.max(v422, Math.max(v863, v1145 + JAM.call(v1339.getScore, v1339, [v1340, v1341])))
          }else {
            if(i$$12 == 0) {
              var v1147 = this.Sp;
              introspect(JAM.policy.p11) {
                var v865 = v1147[j$$12]
              }
              var v424 = v865 - this.scoreSet.gap;
              var v867 = right$$2 - this.scoreSet.beginGap;
              var v1150 = diag;
              var v1343 = this.scoreSet;
              var v1466 = this.M;
              var v1467 = i$$12 + 1 - 1;
              introspect(JAM.policy.p11) {
                var v1344 = v1466[v1467]
              }
              var v1468 = this.N;
              var v1469 = j$$12 + 1 - 1;
              introspect(JAM.policy.p11) {
                var v1345 = v1468[v1469]
              }
              right$$2 = Math.max(v424, Math.max(v867, v1150 + JAM.call(v1343.getScore, v1343, [v1344, v1345])))
            }else {
              var v1152 = this.Sp;
              introspect(JAM.policy.p11) {
                var v869 = v1152[j$$12]
              }
              var v426 = v869 - this.scoreSet.gap;
              var v871 = right$$2 - this.scoreSet.gap;
              var v1155 = diag;
              var v1347 = this.scoreSet;
              var v1470 = this.M;
              var v1471 = i$$12 + 1 - 1;
              introspect(JAM.policy.p11) {
                var v1348 = v1470[v1471]
              }
              var v1472 = this.N;
              var v1473 = j$$12 + 1 - 1;
              introspect(JAM.policy.p11) {
                var v1349 = v1472[v1473]
              }
              right$$2 = Math.max(v426, Math.max(v871, v1155 + JAM.call(v1347.getScore, v1347, [v1348, v1349])))
            }
          }
        }
        var v431 = this.Sp;
        introspect(JAM.policy.p11) {
          diag = v431[j$$12]
        }
        JAM.set(this.Sp, j$$12, right$$2, JAM.policy.p6);
        j$$12 = j$$12 - 1;
        v433 = j$$12 >= j1
      }
      i$$12 = i$$12 - 1;
      v434 = i$$12 >= middle
    }
    var v873 = this.Sn;
    introspect(JAM.policy.p11) {
      var v435 = v873[j1]
    }
    var v874 = this.Sp;
    introspect(JAM.policy.p11) {
      var v436 = v874[j1]
    }
    var maxValue = v435 + v436;
    var maxJ = j1;
    j$$12 = j1 + 1;
    var v440 = j$$12 <= j2;
    for(;v440;) {
      var v1350 = this.Sn;
      introspect(JAM.policy.p11) {
        var v1157 = v1350[j$$12]
      }
      var v1351 = this.Sp;
      introspect(JAM.policy.p11) {
        var v1158 = v1351[j$$12]
      }
      if(v1157 + v1158 >= maxValue) {
        var v876 = this.Sn;
        introspect(JAM.policy.p11) {
          var v437 = v876[j$$12]
        }
        var v877 = this.Sp;
        introspect(JAM.policy.p11) {
          var v438 = v877[j$$12]
        }
        maxValue = v437 + v438;
        maxJ = j$$12
      }
      j$$12 = j$$12 + 1;
      v440 = j$$12 <= j2
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
  var v1613 = new Array;
  this.alignedM = v1613;
  var v1614 = new Array;
  this.alignedN = v1614;
  this.scoreSet = scoreSet$$1;
  var v1615 = new Array(this.N.length);
  this.Sn = v1615;
  var v1616 = new Array(this.N.length);
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
  var v1617 = new Array(this.M.length + 1);
  this.nodes = v1617;
  var i$$13 = 0;
  var v452 = i$$13 < this.nodes.length;
  for(;v452;) {
    var v447 = this.nodes;
    var v448 = i$$13;
    var v1618 = new Array(this.N.length + 1);
    v447[v448] = v1618;
    var j$$13 = 0;
    var v1353 = this.nodes;
    introspect(JAM.policy.p11) {
      var v1162 = v1353[i$$13]
    }
    var v451 = j$$13 < v1162.length;
    for(;v451;) {
      var v884 = this.nodes;
      introspect(JAM.policy.p11) {
        var v449 = v884[i$$13]
      }
      var v450 = j$$13;
      var v1619 = new Node;
      v449[v450] = v1619;
      j$$13 = j$$13 + 1;
      var v1354 = this.nodes;
      introspect(JAM.policy.p11) {
        var v1163 = v1354[i$$13]
      }
      v451 = j$$13 < v1163.length
    }
    i$$13 = i$$13 + 1;
    v452 = i$$13 < this.nodes.length
  }
  this.nodes[0][0].value = 0;
  i$$13 = 1;
  var v459 = i$$13 < this.nodes.length;
  for(;v459;) {
    if(this.scoreSet.useBeginGapLeft) {
      var v1167 = this.nodes;
      introspect(JAM.policy.p11) {
        var v890 = v1167[i$$13]
      }
      var v454 = v890[0];
      var v1474 = this.nodes;
      var v1475 = i$$13 - 1;
      introspect(JAM.policy.p11) {
        var v1355 = v1474[v1475]
      }
      v454.value = v1355[0].value - this.scoreSet.beginGap
    }else {
      var v1170 = this.nodes;
      introspect(JAM.policy.p11) {
        var v893 = v1170[i$$13]
      }
      var v455 = v893[0];
      var v1476 = this.nodes;
      var v1477 = i$$13 - 1;
      introspect(JAM.policy.p11) {
        var v1356 = v1476[v1477]
      }
      v455.value = v1356[0].value - this.scoreSet.gap
    }
    var v1173 = this.nodes;
    introspect(JAM.policy.p11) {
      var v896 = v1173[i$$13]
    }
    v896[0].tracebackI = i$$13 - 1;
    var v1174 = this.nodes;
    introspect(JAM.policy.p11) {
      var v897 = v1174[i$$13]
    }
    v897[0].tracebackJ = 0;
    i$$13 = i$$13 + 1;
    v459 = i$$13 < this.nodes.length
  }
  j$$13 = 1;
  var v465 = j$$13 < this.nodes[0].length;
  for(;v465;) {
    if(this.scoreSet.useBeginGapTop) {
      var v901 = this.nodes[0];
      introspect(JAM.policy.p11) {
        var v460 = v901[j$$13]
      }
      var v1358 = this.nodes[0];
      var v1359 = j$$13 - 1;
      introspect(JAM.policy.p11) {
        var v1178 = v1358[v1359]
      }
      v460.value = v1178.value - this.scoreSet.beginGap
    }else {
      var v904 = this.nodes[0];
      introspect(JAM.policy.p11) {
        var v461 = v904[j$$13]
      }
      var v1360 = this.nodes[0];
      var v1361 = j$$13 - 1;
      introspect(JAM.policy.p11) {
        var v1181 = v1360[v1361]
      }
      v461.value = v1181.value - this.scoreSet.gap
    }
    var v907 = this.nodes[0];
    introspect(JAM.policy.p11) {
      var v463 = v907[j$$13]
    }
    v463.tracebackI = 0;
    var v908 = this.nodes[0];
    introspect(JAM.policy.p11) {
      var v464 = v908[j$$13]
    }
    v464.tracebackJ = j$$13 - 1;
    j$$13 = j$$13 + 1;
    v465 = j$$13 < this.nodes[0].length
  }
  return
}
function dumpMatrix() {
  var v466 = outputWindow.document;
  JAM.call(v466.write, v466, ["Dynamic programming matrix i=" + this.nodes.length + " and j=" + this.nodes[0].length]);
  var v468 = outputWindow.document;
  JAM.call(v468.write, v468, ["\n"]);
  var i$$14 = 0;
  var v479 = i$$14 < this.nodes.length;
  for(;v479;) {
    var j$$14 = 0;
    var v1365 = this.nodes;
    introspect(JAM.policy.p11) {
      var v1189 = v1365[i$$14]
    }
    var v477 = j$$14 < v1189.length;
    for(;v477;) {
      var v1190 = this.nodes;
      introspect(JAM.policy.p11) {
        var v914 = v1190[i$$14]
      }
      introspect(JAM.policy.p11) {
        var v469 = v914[j$$14]
      }
      var traceI = v469.tracebackI;
      var v1191 = this.nodes;
      introspect(JAM.policy.p11) {
        var v915 = v1191[i$$14]
      }
      introspect(JAM.policy.p11) {
        var v470 = v915[j$$14]
      }
      var traceJ = v470.tracebackJ;
      if(traceI == undefined) {
        traceI = "u"
      }
      if(traceJ == undefined) {
        traceJ = "u"
      }
      var v473 = "(" + i$$14 + "," + j$$14 + ")[" + traceI + "," + traceJ + "]=";
      var v1367 = this.nodes;
      introspect(JAM.policy.p11) {
        var v1193 = v1367[i$$14]
      }
      introspect(JAM.policy.p11) {
        var v917 = v1193[j$$14]
      }
      var output = v473 + v917.value;
      var v475 = outputWindow.document;
      JAM.call(v475.write, v475, [rightNum(output, "", 20, " ")]);
      j$$14 = j$$14 + 1;
      var v1368 = this.nodes;
      introspect(JAM.policy.p11) {
        var v1194 = v1368[i$$14]
      }
      v477 = j$$14 < v1194.length
    }
    var v478 = outputWindow.document;
    JAM.call(v478.write, v478, ["\n"]);
    i$$14 = i$$14 + 1;
    v479 = i$$14 < this.nodes.length
  }
  var v480 = outputWindow.document;
  JAM.call(v480.write, v480, ["\n"]);
  return
}
function fillMatrix() {
  var i$$15 = 1;
  var v526 = i$$15 < this.nodes.length;
  for(;v526;) {
    var j$$15 = 1;
    var v525 = j$$15 < this.nodes[0].length;
    for(;v525;) {
      var a;
      var b;
      var c;
      var v922 = i$$15 == this.nodes.length - 1;
      if(v922) {
        v922 = j$$15 == this.nodes[0].length - 1
      }
      if(v922) {
        if(this.scoreSet.useEndGapRight) {
          var v1372 = this.nodes;
          var v1373 = i$$15 - 1;
          introspect(JAM.policy.p11) {
            var v1200 = v1372[v1373]
          }
          introspect(JAM.policy.p11) {
            var v924 = v1200[j$$15]
          }
          a = v924.value - this.scoreSet.endGap
        }else {
          var v1374 = this.nodes;
          var v1375 = i$$15 - 1;
          introspect(JAM.policy.p11) {
            var v1201 = v1374[v1375]
          }
          introspect(JAM.policy.p11) {
            var v926 = v1201[j$$15]
          }
          a = v926.value - this.scoreSet.gap
        }
        if(this.scoreSet.useEndGapBottom) {
          var v1376 = this.nodes;
          introspect(JAM.policy.p11) {
            var v1202 = v1376[i$$15]
          }
          var v1203 = j$$15 - 1;
          introspect(JAM.policy.p11) {
            var v929 = v1202[v1203]
          }
          b = v929.value - this.scoreSet.endGap
        }else {
          var v1377 = this.nodes;
          introspect(JAM.policy.p11) {
            var v1204 = v1377[i$$15]
          }
          var v1205 = j$$15 - 1;
          introspect(JAM.policy.p11) {
            var v931 = v1204[v1205]
          }
          b = v931.value - this.scoreSet.gap
        }
      }else {
        if(i$$15 == this.nodes.length - 1) {
          var v1379 = this.nodes;
          var v1380 = i$$15 - 1;
          introspect(JAM.policy.p11) {
            var v1207 = v1379[v1380]
          }
          introspect(JAM.policy.p11) {
            var v934 = v1207[j$$15]
          }
          a = v934.value - this.scoreSet.gap;
          if(this.scoreSet.useEndGapBottom) {
            var v1381 = this.nodes;
            introspect(JAM.policy.p11) {
              var v1208 = v1381[i$$15]
            }
            var v1209 = j$$15 - 1;
            introspect(JAM.policy.p11) {
              var v937 = v1208[v1209]
            }
            b = v937.value - this.scoreSet.endGap
          }else {
            var v1382 = this.nodes;
            introspect(JAM.policy.p11) {
              var v1210 = v1382[i$$15]
            }
            var v1211 = j$$15 - 1;
            introspect(JAM.policy.p11) {
              var v939 = v1210[v1211]
            }
            b = v939.value - this.scoreSet.gap
          }
        }else {
          if(j$$15 == this.nodes[0].length - 1) {
            if(this.scoreSet.useEndGapRight) {
              var v1384 = this.nodes;
              var v1385 = i$$15 - 1;
              introspect(JAM.policy.p11) {
                var v1213 = v1384[v1385]
              }
              introspect(JAM.policy.p11) {
                var v943 = v1213[j$$15]
              }
              a = v943.value - this.scoreSet.endGap
            }else {
              var v1386 = this.nodes;
              var v1387 = i$$15 - 1;
              introspect(JAM.policy.p11) {
                var v1214 = v1386[v1387]
              }
              introspect(JAM.policy.p11) {
                var v945 = v1214[j$$15]
              }
              a = v945.value - this.scoreSet.gap
            }
            var v1388 = this.nodes;
            introspect(JAM.policy.p11) {
              var v1215 = v1388[i$$15]
            }
            var v1216 = j$$15 - 1;
            introspect(JAM.policy.p11) {
              var v947 = v1215[v1216]
            }
            b = v947.value - this.scoreSet.gap
          }else {
            var v1389 = this.nodes;
            var v1390 = i$$15 - 1;
            introspect(JAM.policy.p11) {
              var v1217 = v1389[v1390]
            }
            introspect(JAM.policy.p11) {
              var v949 = v1217[j$$15]
            }
            a = v949.value - this.scoreSet.gap;
            var v1391 = this.nodes;
            introspect(JAM.policy.p11) {
              var v1218 = v1391[i$$15]
            }
            var v1219 = j$$15 - 1;
            introspect(JAM.policy.p11) {
              var v951 = v1218[v1219]
            }
            b = v951.value - this.scoreSet.gap
          }
        }
      }
      var v1392 = this.nodes;
      var v1393 = i$$15 - 1;
      introspect(JAM.policy.p11) {
        var v1220 = v1392[v1393]
      }
      var v1221 = j$$15 - 1;
      introspect(JAM.policy.p11) {
        var v953 = v1220[v1221]
      }
      var v512 = v953.value;
      var v954 = this.scoreSet;
      var v1222 = this.M;
      var v1223 = i$$15 - 1;
      introspect(JAM.policy.p11) {
        var v955 = v1222[v1223]
      }
      var v1224 = this.N;
      var v1225 = j$$15 - 1;
      introspect(JAM.policy.p11) {
        var v956 = v1224[v1225]
      }
      c = v512 + JAM.call(v954.getScore, v954, [v955, v956]);
      var v957 = a >= b;
      if(v957) {
        v957 = a >= c
      }
      if(v957) {
        var v1226 = this.nodes;
        introspect(JAM.policy.p11) {
          var v958 = v1226[i$$15]
        }
        introspect(JAM.policy.p11) {
          var v514 = v958[j$$15]
        }
        v514.value = a;
        var v1227 = this.nodes;
        introspect(JAM.policy.p11) {
          var v959 = v1227[i$$15]
        }
        introspect(JAM.policy.p11) {
          var v515 = v959[j$$15]
        }
        v515.tracebackI = i$$15 - 1;
        var v1228 = this.nodes;
        introspect(JAM.policy.p11) {
          var v960 = v1228[i$$15]
        }
        introspect(JAM.policy.p11) {
          var v516 = v960[j$$15]
        }
        v516.tracebackJ = j$$15
      }else {
        var v961 = b >= c;
        if(v961) {
          v961 = b >= a
        }
        if(v961) {
          var v1229 = this.nodes;
          introspect(JAM.policy.p11) {
            var v962 = v1229[i$$15]
          }
          introspect(JAM.policy.p11) {
            var v517 = v962[j$$15]
          }
          v517.value = b;
          var v1230 = this.nodes;
          introspect(JAM.policy.p11) {
            var v963 = v1230[i$$15]
          }
          introspect(JAM.policy.p11) {
            var v518 = v963[j$$15]
          }
          v518.tracebackI = i$$15;
          var v1231 = this.nodes;
          introspect(JAM.policy.p11) {
            var v964 = v1231[i$$15]
          }
          introspect(JAM.policy.p11) {
            var v519 = v964[j$$15]
          }
          v519.tracebackJ = j$$15 - 1
        }else {
          var v1232 = this.nodes;
          introspect(JAM.policy.p11) {
            var v965 = v1232[i$$15]
          }
          introspect(JAM.policy.p11) {
            var v520 = v965[j$$15]
          }
          v520.value = c;
          var v1233 = this.nodes;
          introspect(JAM.policy.p11) {
            var v966 = v1233[i$$15]
          }
          introspect(JAM.policy.p11) {
            var v521 = v966[j$$15]
          }
          v521.tracebackI = i$$15 - 1;
          var v1234 = this.nodes;
          introspect(JAM.policy.p11) {
            var v967 = v1234[i$$15]
          }
          introspect(JAM.policy.p11) {
            var v522 = v967[j$$15]
          }
          v522.tracebackJ = j$$15 - 1
        }
      }
      j$$15 = j$$15 + 1;
      v525 = j$$15 < this.nodes[0].length
    }
    i$$15 = i$$15 + 1;
    v526 = i$$15 < this.nodes.length
  }
  var v1237 = this.nodes;
  var v1238 = this.nodes.length - 1;
  introspect(JAM.policy.p11) {
    var v970 = v1237[v1238]
  }
  var v971 = this.nodes[0].length - 1;
  introspect(JAM.policy.p11) {
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
  var currentI = this.nodes.length - 1;
  var currentJ = this.nodes[0].length - 1;
  var v974 = this.nodes;
  var v975 = this.nodes.length - 1;
  introspect(JAM.policy.p11) {
    var v530 = v974[v975]
  }
  var v531 = this.nodes[0].length - 1;
  introspect(JAM.policy.p11) {
    var currentNode = v530[v531]
  }
  var v977 = currentNode.tracebackI != undefined;
  if(v977) {
    v977 = currentNode.tracebackJ != undefined
  }
  var v546 = v977;
  for(;v546;) {
    var v978 = currentNode.tracebackI == currentI - 1;
    if(v978) {
      v978 = currentNode.tracebackJ == currentJ - 1
    }
    if(v978) {
      this.alignedM.push(this.M.pop());
      this.alignedN.push(this.N.pop())
    }else {
      if(currentNode.tracebackJ == currentJ - 1) {
        this.alignedM.push(".--");
        this.alignedN.push(this.N.pop())
      }else {
        this.alignedM.push(this.M.pop());
        this.alignedN.push(".--")
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    var v985 = this.nodes;
    var v986 = currentNode.tracebackI;
    introspect(JAM.policy.p11) {
      var v544 = v985[v986]
    }
    var v545 = currentNode.tracebackJ;
    introspect(JAM.policy.p11) {
      currentNode = v544[v545]
    }
    var v987 = currentNode.tracebackI != undefined;
    if(v987) {
      v987 = currentNode.tracebackJ != undefined
    }
    v546 = v987
  }
  var v1622 = this.alignedM.reverse();
  this.alignedM = v1622;
  var v1623 = this.alignedN.reverse();
  this.alignedN = v1623;
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
ScoringMatrix.prototype.scoringMatrix_fillHash = scoringMatrix_fillHash;
var v555 = Codon;
var v1624 = new ScoringMatrix;
v555.prototype = v1624;
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
JAM.set(document.getElementById("clearbtn"), "onclick", v4)
