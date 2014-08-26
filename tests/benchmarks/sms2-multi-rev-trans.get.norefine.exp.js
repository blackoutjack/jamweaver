function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return
}
function v3() {
  try {
    multiRevTrans(document)
  }catch(e$$8) {
    alert("The following error was encountered: " + e$$8)
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
      var v951 = arrayOfTitles[i$$1]
    }
    var v456 = v951.search(/\S/) == -1;
    if(!v456) {
      introspect(JAM.policy.p5) {
        var v1046 = arrayOfSequences[i$$1]
      }
      var v793 = v1046.search(/\S/) == -1;
      if(!v793) {
        introspect(JAM.policy.p5) {
          var v1047 = arrayOfSequences[i$$1]
        }
        v793 = v1047.length != lengthOfAlign
      }
      v456 = v793
    }
    if(v456) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v458 = codonTable.search(/AmAcid/) == -1;
  if(!v458) {
    var v796 = codonTable.search(/Codon/) == -1;
    if(!v796) {
      var v956 = codonTable.search(/Number/) == -1;
      if(!v956) {
        var v1049 = codonTable.search(/\/1000/) == -1;
        if(!v1049) {
          v1049 = codonTable.search(/Fraction\s*\.\./) == -1
        }
        v956 = v1049
      }
      v796 = v956
    }
    v458 = v796
  }
  if(v458) {
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
      var v799 = arrayOfPatterns[z$$2]
    }
    if(v799.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v800 = arrayOfPatterns[z$$2]
    }
    if(moreExpressionCheck(v800) == false) {
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
      var v958 = arrayOfPatterns[j]
    }
    var v465 = v958.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1271 = eval("introspect(JAM.policy.pFull) { " + v465 + " }")
    }else {
      var v1271 = JAM.call(eval, null, [v465])
    }
    v20[v21] = v1271;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAM.policy.p5) {
      var v802 = arrayOfPatterns[j]
    }
    var v1272 = v802.match(/=[a-zA-Z\*]/).toString();
    v22[v23] = v1272;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAM.policy.p5) {
      var v467 = geneticCodeMatchResult[j]
    }
    var v1273 = v467.replace(/=/g, "");
    v24[v25] = v1273;
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
        var v804 = geneticCodeMatchExp[j]
      }
      if(codon.search(v804) != -1) {
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
      var v806 = arrayOfPatterns$$1[z$$3]
    }
    if(v806.search(/[^acdefghiklmnpqrstvwyz]/i) != -1) {
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
      var v807 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v807 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v38 = j$$1 < arrayOfPatterns$$1.length;
    for(;v38;) {
      introspect(JAM.policy.p5) {
        var v808 = arrayOfPatterns$$1[j$$1]
      }
      if(v808.search(re) != -1) {
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
      var v809 = arrayOfPatterns$$2[z$$4]
    }
    if(v809.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v810 = arrayOfPatterns$$2[z$$4]
    }
    if(moreExpressionCheck(v810) == false) {
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
      var v812 = alignArray[i$$4]
    }
    if(v812.search(/[^\s]+\s/) == -1) {
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
      var v960 = arrayOfPatterns$$3[j$$2]
    }
    var v514 = v960.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1274 = eval("introspect(JAM.policy.pFull) { " + v514 + " }")
    }else {
      var v1274 = JAM.call(eval, null, [v514])
    }
    v73[v74] = v1274;
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
      var v814 = arrayOfPatterns$$4[j$$3]
    }
    var v1275 = v814.match(/=[a-zA-Z\*]/).toString();
    v77[v78] = v1275;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAM.policy.p5) {
      var v518 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1276 = v518.replace(/=/g, "");
    v79[v80] = v1276;
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
  var v546 = expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1;
  if(!v546) {
    var v817 = expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1;
    if(!v817) {
      var v962 = expressionToCheck.search(/\[\]/) != -1;
      if(!v962) {
        var v1052 = expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1;
        if(!v1052) {
          var v1106 = expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1;
          if(!v1106) {
            var v1127 = expressionToCheck.search(/\|\|/) != -1;
            if(!v1127) {
              var v1144 = expressionToCheck.search(/\/\|/) != -1;
              if(!v1144) {
                var v1164 = expressionToCheck.search(/\|\//) != -1;
                if(!v1164) {
                  var v1182 = expressionToCheck.search(/\[.\]/) != -1;
                  if(!v1182) {
                    var v1198 = expressionToCheck.search(/\</) != -1;
                    if(!v1198) {
                      v1198 = expressionToCheck.search(/\>/) != -1
                    }
                    v1182 = v1198
                  }
                  v1164 = v1182
                }
                v1144 = v1164
              }
              v1127 = v1144
            }
            v1106 = v1127
          }
          v1052 = v1106
        }
        v962 = v1052
      }
      v817 = v962
    }
    v546 = v817
  }
  if(v546) {
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
  var v561 = emblFile.search(/ID/) == -1;
  if(!v561) {
    var v828 = emblFile.search(/AC/) == -1;
    if(!v828) {
      var v973 = emblFile.search(/DE/) == -1;
      if(!v973) {
        v973 = emblFile.search(/SQ/) == -1
      }
      v828 = v973
    }
    v561 = v828
  }
  if(v561) {
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
  var v566 = genBankFile.search(/LOCUS/) == -1;
  if(!v566) {
    var v831 = genBankFile.search(/DEFINITION/) == -1;
    if(!v831) {
      var v976 = genBankFile.search(/ACCESSION/) == -1;
      if(!v976) {
        v976 = genBankFile.search(/ORIGIN/) == -1
      }
      v831 = v976
    }
    v566 = v831
  }
  if(v566) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v567 = genBankFile$$1.search(/LOCUS/) == -1;
  if(!v567) {
    var v834 = genBankFile$$1.search(/DEFINITION/) == -1;
    if(!v834) {
      var v979 = genBankFile$$1.search(/ACCESSION/) == -1;
      if(!v979) {
        v979 = genBankFile$$1.search(/ORIGIN/) == -1
      }
      v834 = v979
    }
    v567 = v834
  }
  if(v567) {
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
  var v569 = emblFile$$1.search(/ID/) == -1;
  if(!v569) {
    var v837 = emblFile$$1.search(/AC/) == -1;
    if(!v837) {
      var v982 = emblFile$$1.search(/DE/) == -1;
      if(!v982) {
        v982 = emblFile$$1.search(/SQ/) == -1
      }
      v837 = v982
    }
    v569 = v837
  }
  if(v569) {
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
    var v574 = adjustment < 0;
    if(v574) {
      v574 = adjusted >= 0
    }
    if(v574) {
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
  var v591 = sequence$$13.length <= firstIndexToMutate;
  if(!v591) {
    var v848 = lastIndexToMutate < 0;
    if(!v848) {
      v848 = lastIndexToMutate <= firstIndexToMutate
    }
    v591 = v848
  }
  if(v591) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    var v593 = randNum < firstIndexToMutate;
    if(!v593) {
      v593 = randNum > lastIndexToMutate
    }
    if(v593) {
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
        var v597 = components$$1[componentsIndex]
      }
      if(v597 != currentChar) {
        needNewChar = false
      }
    }
    var v598 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.p5) {
      var v599 = components$$1[componentsIndex]
    }
    sequence$$13 = v598 + v599 + sequence$$13.substring(randNum + 1, sequence$$13.length);
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
      var v608 = arrayOfItems[i$$9]
    }
    matchExp = v608.match(/\/.+\//) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.p5) {
      var v989 = arrayOfItems[i$$9]
    }
    cutDistance = parseFloat(v989.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v610 = matchPosition >= lowerLimit;
      if(v610) {
        v610 = matchPosition < upperLimit
      }
      if(v610) {
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
    var v1133 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p5) {
      var v1188 = arrayOfItems[i$$9]
    }
    JAM.call(v250.write, v250, [v1133 + v1188.match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"]);
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
      var v619 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = v619.match(/\/[^\/]+\//) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(sequence$$16.search(matchExp$$1) != -1) {
      tempNumber = sequence$$16.match(matchExp$$1).length
    }
    var percentage = 0;
    var v858 = originalLength + 1;
    introspect(JAM.policy.p5) {
      var v1072 = arrayOfItems$$1[i$$10]
    }
    if(v858 - parseFloat(v1072.match(/\d+/)) > 0) {
      var v260 = 100 * tempNumber;
      var v622 = originalLength + 1;
      introspect(JAM.policy.p5) {
        var v993 = arrayOfItems$$1[i$$10]
      }
      percentage = v260 / (v622 - parseFloat(v993.match(/\d+/)))
    }
    var v263 = outputWindow.document;
    introspect(JAM.policy.p5) {
      var v1189 = arrayOfItems$$1[i$$10]
    }
    JAM.call(v263.write, v263, ["<tr><td>" + v1189.match(/\([^\(]+\)\b/).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n"]);
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
function multiRevTrans(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 2E4;
  var codonTable$$1;
  var alignArray$$1 = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  if(testScript() == false) {
    return false
  }
  var v631 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v631) {
    var v864 = checkTextLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
    if(!v864) {
      v864 = checkCodonTable(theDocument.forms[0].elements[4].value) == false
    }
    v631 = v864
  }
  if(v631) {
    return false
  }
  theAlignment = "X" + theDocument.forms[0].elements[0].value;
  alignArray$$1 = theAlignment.split(/[>%#]/);
  if(earlyCheckAlign(alignArray$$1) == false) {
    return false
  }
  var i$$11 = 1;
  var v294 = i$$11 < alignArray$$1.length;
  for(;v294;) {
    var v280 = titleArray;
    var v281 = i$$11 - 1;
    introspect(JAM.policy.p5) {
      var v635 = alignArray$$1[i$$11]
    }
    var v1277 = v635.match(/[^\f\n\r]+[\f\n\r]/);
    v280[v281] = v1277;
    var v282 = titleArray;
    var v283 = i$$11 - 1;
    var v1078 = i$$11 - 1;
    introspect(JAM.policy.p5) {
      var v1000 = titleArray[v1078]
    }
    var v1278 = filterFastaTitle(v1000.toString()).replace(/[\f\n\r]/g, "");
    v282[v283] = v1278;
    var v284 = titleArray;
    var v285 = i$$11 - 1;
    var v868 = i$$11 - 1;
    introspect(JAM.policy.p5) {
      var v637 = titleArray[v868]
    }
    var v1279 = v637.substring(0, 20);
    v284[v285] = v1279;
    if(i$$11 == 1) {
      var v638 = i$$11 - 1;
      introspect(JAM.policy.p5) {
        var v286 = titleArray[v638]
      }
      longestTitle = v286.length
    }else {
      var v1001 = i$$11 - 1;
      introspect(JAM.policy.p5) {
        var v869 = titleArray[v1001]
      }
      if(v869.length > longestTitle) {
        var v640 = i$$11 - 1;
        introspect(JAM.policy.p5) {
          var v287 = titleArray[v640]
        }
        longestTitle = v287.length
      }
    }
    var v290 = sequenceArray$$1;
    var v291 = i$$11 - 1;
    introspect(JAM.policy.p5) {
      var v641 = alignArray$$1[i$$11]
    }
    var v1280 = v641.replace(/[^\f\n\r]+[\f\n\r]/, "");
    v290[v291] = v1280;
    var v292 = sequenceArray$$1;
    var v293 = i$$11 - 1;
    var v870 = i$$11 - 1;
    introspect(JAM.policy.p5) {
      var v642 = sequenceArray$$1[v870]
    }
    var v1281 = filterAlignSeq(v642);
    v292[v293] = v1281;
    i$$11 = i$$11 + 1;
    v294 = i$$11 < alignArray$$1.length
  }
  codonTable$$1 = makeCodonTable(theDocument.forms[0].elements[4].value);
  if(codonTable$$1 == false) {
    return false
  }
  openWindow("Multi Rev Trans");
  i$$11 = 0;
  var v301 = i$$11 < titleArray.length;
  for(;v301;) {
    var v297 = outputWindow.document;
    introspect(JAM.policy.p5) {
      var v646 = titleArray[i$$11]
    }
    introspect(JAM.policy.p5) {
      var v647 = sequenceArray$$1[i$$11]
    }
    JAM.call(v297.write, v297, [getInfoFromTitleAndSequence(v646, v647)]);
    if(i$$11 < titleArray.length - 1) {
      var v299 = outputWindow.document;
      JAM.call(v299.write, v299, ['<div class="info">Combined with:</div>\n'])
    }
    i$$11 = i$$11 + 1;
    v301 = i$$11 < titleArray.length
  }
  openPre();
  writeConsensusSeq(sequenceArray$$1, codonTable$$1);
  var v302 = outputWindow.document;
  JAM.call(v302.write, v302, ["\n"]);
  writeMultiRevTrans(sequenceArray$$1, codonTable$$1);
  closePre();
  closeWindow();
  return true
}
function writeConsensusSeq(sequenceArray$$2, codonTable$$2) {
  var consensusSeq = new Array;
  var aminoAcid;
  var firstG;
  var firstA;
  var firstT;
  var firstC;
  var secondG;
  var secondA;
  var secondT;
  var secondC;
  var thirdG;
  var thirdA;
  var thirdT;
  var thirdC;
  var i$$12 = 0;
  var v323 = i$$12 < sequenceArray$$2[0].length;
  for(;v323;) {
    firstG = 0;
    firstA = 0;
    firstT = 0;
    firstC = 0;
    secondG = 0;
    secondA = 0;
    secondT = 0;
    secondC = 0;
    thirdG = 0;
    thirdA = 0;
    thirdT = 0;
    thirdC = 0;
    var j$$10 = 0;
    var v319 = j$$10 < sequenceArray$$2.length;
    for(;v319;) {
      introspect(JAM.policy.p5) {
        var v1003 = sequenceArray$$2[j$$10]
      }
      var v652 = v1003.charAt(i$$12) == "-";
      if(!v652) {
        introspect(JAM.policy.p5) {
          var v1004 = sequenceArray$$2[j$$10]
        }
        v652 = v1004.charAt(i$$12) == "."
      }
      if(v652) {
        firstG = firstG + 0.25;
        firstA = firstA + 0.25;
        firstT = firstT + 0.25;
        firstC = firstC + 0.25;
        secondG = secondG + 0.25;
        secondA = secondA + 0.25;
        secondT = secondT + 0.25;
        secondC = secondC + 0.25;
        thirdG = thirdG + 0.25;
        thirdA = thirdA + 0.25;
        thirdT = thirdT + 0.25;
        thirdC = thirdC + 0.25
      }else {
        try {
          var v303 = codonTable$$2;
          introspect(JAM.policy.p5) {
            var v1005 = sequenceArray$$2[j$$10]
          }
          var v304 = v1005.charAt(i$$12).toString().toLowerCase();
          introspect(JAM.policy.p5) {
            aminoAcid = v303[v304]
          }
        }catch(e$$5) {
          introspect(JAM.policy.p5) {
            var v878 = sequenceArray$$2[j$$10]
          }
          alert("A codon table entry wasn't found for " + v878.charAt(i$$12));
          return false
        }
        firstG = firstG + aminoAcid.baseFreqPosOne[0];
        firstA = firstA + aminoAcid.baseFreqPosOne[1];
        firstT = firstT + aminoAcid.baseFreqPosOne[2];
        firstC = firstC + aminoAcid.baseFreqPosOne[3];
        secondG = secondG + aminoAcid.baseFreqPosTwo[0];
        secondA = secondA + aminoAcid.baseFreqPosTwo[1];
        secondT = secondT + aminoAcid.baseFreqPosTwo[2];
        secondC = secondC + aminoAcid.baseFreqPosTwo[3];
        thirdG = thirdG + aminoAcid.baseFreqPosThree[0];
        thirdA = thirdA + aminoAcid.baseFreqPosThree[1];
        thirdT = thirdT + aminoAcid.baseFreqPosThree[2];
        thirdC = thirdC + aminoAcid.baseFreqPosThree[3]
      }
      j$$10 = j$$10 + 1;
      v319 = j$$10 < sequenceArray$$2.length
    }
    consensusSeq.push(_getConsensusBase([firstG, firstA, firstT, firstC]));
    consensusSeq.push(_getConsensusBase([secondG, secondA, secondT, secondC]));
    consensusSeq.push(_getConsensusBase([thirdG, thirdA, thirdT, thirdC]));
    i$$12 = i$$12 + 1;
    v323 = i$$12 < sequenceArray$$2[0].length
  }
  var v324 = outputWindow.document;
  JAM.call(v324.write, v324, ["&gt;" + "reverse translation of alignment to a " + consensusSeq.length + " base sequence of consensus codons.\n"]);
  var v326 = outputWindow.document;
  JAM.call(v326.write, v326, [addReturns(consensusSeq.join(""))]);
  var v328 = outputWindow.document;
  JAM.call(v328.write, v328, ["\n"]);
  return true
}
function writeMultiRevTrans(sequenceArray$$3, codonTable$$3) {
  var markG = "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
  var markA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  var markT = "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT";
  var markC = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
  var markLength = markG.length;
  var aminoAcid$$1;
  var columnSeq;
  var firstG$$1;
  var firstA$$1;
  var firstT$$1;
  var firstC$$1;
  var secondG$$1;
  var secondA$$1;
  var secondT$$1;
  var secondC$$1;
  var thirdG$$1;
  var thirdA$$1;
  var thirdT$$1;
  var thirdC$$1;
  var i$$13 = 0;
  var v373 = i$$13 < sequenceArray$$3[0].length;
  for(;v373;) {
    columnSeq = "";
    firstG$$1 = 0;
    firstA$$1 = 0;
    firstT$$1 = 0;
    firstC$$1 = 0;
    secondG$$1 = 0;
    secondA$$1 = 0;
    secondT$$1 = 0;
    secondC$$1 = 0;
    thirdG$$1 = 0;
    thirdA$$1 = 0;
    thirdT$$1 = 0;
    thirdC$$1 = 0;
    var j$$11 = 0;
    var v347 = j$$11 < sequenceArray$$3.length;
    for(;v347;) {
      var v329 = columnSeq;
      introspect(JAM.policy.p5) {
        var v676 = sequenceArray$$3[j$$11]
      }
      columnSeq = v329 + v676.charAt(i$$13);
      introspect(JAM.policy.p5) {
        var v1006 = sequenceArray$$3[j$$11]
      }
      var v677 = v1006.charAt(i$$13) == "-";
      if(!v677) {
        introspect(JAM.policy.p5) {
          var v1007 = sequenceArray$$3[j$$11]
        }
        v677 = v1007.charAt(i$$13) == "."
      }
      if(v677) {
        firstG$$1 = firstG$$1 + 0.25;
        firstA$$1 = firstA$$1 + 0.25;
        firstT$$1 = firstT$$1 + 0.25;
        firstC$$1 = firstC$$1 + 0.25;
        secondG$$1 = secondG$$1 + 0.25;
        secondA$$1 = secondA$$1 + 0.25;
        secondT$$1 = secondT$$1 + 0.25;
        secondC$$1 = secondC$$1 + 0.25;
        thirdG$$1 = thirdG$$1 + 0.25;
        thirdA$$1 = thirdA$$1 + 0.25;
        thirdT$$1 = thirdT$$1 + 0.25;
        thirdC$$1 = thirdC$$1 + 0.25
      }else {
        try {
          var v331 = codonTable$$3;
          introspect(JAM.policy.p5) {
            var v1008 = sequenceArray$$3[j$$11]
          }
          var v332 = v1008.charAt(i$$13).toString().toLowerCase();
          introspect(JAM.policy.p5) {
            aminoAcid$$1 = v331[v332]
          }
        }catch(e$$6) {
          introspect(JAM.policy.p5) {
            var v887 = sequenceArray$$3[j$$11]
          }
          alert("A codon table entry wasn't found for " + v887.charAt(i$$13));
          return false
        }
        firstG$$1 = firstG$$1 + aminoAcid$$1.baseFreqPosOne[0];
        firstA$$1 = firstA$$1 + aminoAcid$$1.baseFreqPosOne[1];
        firstT$$1 = firstT$$1 + aminoAcid$$1.baseFreqPosOne[2];
        firstC$$1 = firstC$$1 + aminoAcid$$1.baseFreqPosOne[3];
        secondG$$1 = secondG$$1 + aminoAcid$$1.baseFreqPosTwo[0];
        secondA$$1 = secondA$$1 + aminoAcid$$1.baseFreqPosTwo[1];
        secondT$$1 = secondT$$1 + aminoAcid$$1.baseFreqPosTwo[2];
        secondC$$1 = secondC$$1 + aminoAcid$$1.baseFreqPosTwo[3];
        thirdG$$1 = thirdG$$1 + aminoAcid$$1.baseFreqPosThree[0];
        thirdA$$1 = thirdA$$1 + aminoAcid$$1.baseFreqPosThree[1];
        thirdT$$1 = thirdT$$1 + aminoAcid$$1.baseFreqPosThree[2];
        thirdC$$1 = thirdC$$1 + aminoAcid$$1.baseFreqPosThree[3]
      }
      j$$11 = j$$11 + 1;
      v347 = j$$11 < sequenceArray$$3.length
    }
    firstG$$1 = Math.round(markLength * firstG$$1 / sequenceArray$$3.length);
    firstA$$1 = Math.round(markLength * firstA$$1 / sequenceArray$$3.length);
    firstT$$1 = Math.round(markLength * firstT$$1 / sequenceArray$$3.length);
    firstC$$1 = Math.round(markLength * firstC$$1 / sequenceArray$$3.length);
    secondG$$1 = Math.round(markLength * secondG$$1 / sequenceArray$$3.length);
    secondA$$1 = Math.round(markLength * secondA$$1 / sequenceArray$$3.length);
    secondT$$1 = Math.round(markLength * secondT$$1 / sequenceArray$$3.length);
    secondC$$1 = Math.round(markLength * secondC$$1 / sequenceArray$$3.length);
    thirdG$$1 = Math.round(markLength * thirdG$$1 / sequenceArray$$3.length);
    thirdA$$1 = Math.round(markLength * thirdA$$1 / sequenceArray$$3.length);
    thirdT$$1 = Math.round(markLength * thirdT$$1 / sequenceArray$$3.length);
    thirdC$$1 = Math.round(markLength * thirdC$$1 / sequenceArray$$3.length);
    var v360 = outputWindow.document;
    JAM.call(v360.write, v360, ["<b>" + (i$$13 + 1) + "_" + columnSeq + "_" + "first</b>\n"]);
    var v362 = outputWindow.document;
    JAM.call(v362.write, v362, ["g" + markG.substring(0, firstG$$1) + " " + (firstG$$1 / markLength).toFixed(2) + "\n" + "a" + markA.substring(0, firstA$$1) + " " + (firstA$$1 / markLength).toFixed(2) + "\n" + "T" + markT.substring(0, firstT$$1) + " " + (firstT$$1 / markLength).toFixed(2) + "\n" + "C" + markC.substring(0, firstC$$1) + " " + (firstC$$1 / markLength).toFixed(2) + "\n"]);
    var v364 = outputWindow.document;
    JAM.call(v364.write, v364, ["<b>" + (i$$13 + 1) + "_" + columnSeq + "_" + "second</b>\n"]);
    var v366 = outputWindow.document;
    JAM.call(v366.write, v366, ["g" + markG.substring(0, secondG$$1) + " " + (secondG$$1 / markLength).toFixed(2) + "\n" + "a" + markA.substring(0, secondA$$1) + " " + (secondA$$1 / markLength).toFixed(2) + "\n" + "T" + markT.substring(0, secondT$$1) + " " + (secondT$$1 / markLength).toFixed(2) + "\n" + "C" + markC.substring(0, secondC$$1) + " " + (secondC$$1 / markLength).toFixed(2) + "\n"]);
    var v368 = outputWindow.document;
    JAM.call(v368.write, v368, ["<b>" + (i$$13 + 1) + "_" + columnSeq + "_" + "third</b>\n"]);
    var v370 = outputWindow.document;
    JAM.call(v370.write, v370, ["g" + markG.substring(0, thirdG$$1) + " " + (thirdG$$1 / markLength).toFixed(2) + "\n" + "a" + markA.substring(0, thirdA$$1) + " " + (thirdA$$1 / markLength).toFixed(2) + "\n" + "T" + markT.substring(0, thirdT$$1) + " " + (thirdT$$1 / markLength).toFixed(2) + "\n" + "C" + markC.substring(0, thirdC$$1) + " " + (thirdC$$1 / markLength).toFixed(2) + "\n"]);
    var v372 = outputWindow.document;
    JAM.call(v372.write, v372, ["\n"]);
    i$$13 = i$$13 + 1;
    v373 = i$$13 < sequenceArray$$3[0].length
  }
  return true
}
function makeCodonTable(gcgTable) {
  gcgTable = gcgTable.replace(/[^\.]*\.\./, "");
  var tableArray = gcgTable.split(/[\f\n\r]/);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$4 = new CodonTable;
  var i$$14 = 0;
  var v378 = i$$14 < tableArray.length;
  for(;v378;) {
    introspect(JAM.policy.p5) {
      var v725 = tableArray[i$$14]
    }
    var v377 = matchArray$$2 = re$$3.exec(v725);
    for(;v377;) {
      try {
        var v726 = codonTable$$4;
        var v727 = matchArray$$2[1].toLowerCase();
        introspect(JAM.policy.p5) {
          var v374 = v726[v727]
        }
        JAM.call(v374.addCodon, v374, [new Codon(matchArray$$2[2], parseFloat(matchArray$$2[3]), parseFloat(matchArray$$2[4]), parseFloat(matchArray$$2[5]))])
      }catch(e$$7) {
        alert("There is a problem with a line of the codon table: " + matchArray$$2[1] + " " + matchArray$$2[2] + " " + matchArray$$2[3] + " " + matchArray$$2[4] + " " + matchArray$$2[4]);
        return false
      }
      introspect(JAM.policy.p5) {
        var v734 = tableArray[i$$14]
      }
      v377 = matchArray$$2 = re$$3.exec(v734)
    }
    i$$14 = i$$14 + 1;
    v378 = i$$14 < tableArray.length
  }
  codonTable$$4.a.determineBaseFreq();
  codonTable$$4.c.determineBaseFreq();
  codonTable$$4.d.determineBaseFreq();
  codonTable$$4.e.determineBaseFreq();
  codonTable$$4.f.determineBaseFreq();
  codonTable$$4.g.determineBaseFreq();
  codonTable$$4.h.determineBaseFreq();
  codonTable$$4.i.determineBaseFreq();
  codonTable$$4.k.determineBaseFreq();
  codonTable$$4.l.determineBaseFreq();
  codonTable$$4.m.determineBaseFreq();
  codonTable$$4.n.determineBaseFreq();
  codonTable$$4.p.determineBaseFreq();
  codonTable$$4.q.determineBaseFreq();
  codonTable$$4.r.determineBaseFreq();
  codonTable$$4.s.determineBaseFreq();
  codonTable$$4.t.determineBaseFreq();
  codonTable$$4.v.determineBaseFreq();
  codonTable$$4.w.determineBaseFreq();
  codonTable$$4.y.determineBaseFreq();
  codonTable$$4.z.determineBaseFreq();
  return codonTable$$4
}
function CodonTable() {
  var v1282 = new AminoAcid;
  this.a = v1282;
  var v1283 = new AminoAcid;
  this.c = v1283;
  var v1284 = new AminoAcid;
  this.d = v1284;
  var v1285 = new AminoAcid;
  this.e = v1285;
  var v1286 = new AminoAcid;
  this.f = v1286;
  var v1287 = new AminoAcid;
  this.g = v1287;
  var v1288 = new AminoAcid;
  this.h = v1288;
  var v1289 = new AminoAcid;
  this.i = v1289;
  var v1290 = new AminoAcid;
  this.k = v1290;
  var v1291 = new AminoAcid;
  this.l = v1291;
  var v1292 = new AminoAcid;
  this.m = v1292;
  var v1293 = new AminoAcid;
  this.n = v1293;
  var v1294 = new AminoAcid;
  this.p = v1294;
  var v1295 = new AminoAcid;
  this.q = v1295;
  var v1296 = new AminoAcid;
  this.r = v1296;
  var v1297 = new AminoAcid;
  this.s = v1297;
  var v1298 = new AminoAcid;
  this.t = v1298;
  var v1299 = new AminoAcid;
  this.v = v1299;
  var v1300 = new AminoAcid;
  this.w = v1300;
  var v1301 = new AminoAcid;
  this.y = v1301;
  var v1302 = new AminoAcid;
  this.z = v1302;
  this.ala = this.a;
  this.cys = this.c;
  this.asp = this.d;
  this.glu = this.e;
  this.phe = this.f;
  this.gly = this.g;
  this.his = this.h;
  this.ile = this.i;
  this.lys = this.k;
  this.leu = this.l;
  this.met = this.m;
  this.asn = this.n;
  this.pro = this.p;
  this.gln = this.q;
  this.arg = this.r;
  this.ser = this.s;
  this.thr = this.t;
  this.val = this.v;
  this.trp = this.w;
  this.tyr = this.y;
  this.end = this.z;
  return
}
function addCodon(codon$$1) {
  this.codons.push(codon$$1);
  return
}
function determineBaseFreq() {
  this.fixFraction();
  var i$$15 = 0;
  var v425 = i$$15 < this.codons.length;
  for(;v425;) {
    var v1090 = this.codons;
    introspect(JAM.policy.p5) {
      var v1020 = v1090[i$$15]
    }
    if(v1020.sequence.charAt(0) == "g") {
      var v401 = this.baseFreqPosOne;
      var v738 = this.baseFreqPosOne[0];
      var v1021 = this.codons;
      introspect(JAM.policy.p5) {
        var v906 = v1021[i$$15]
      }
      v401[0] = v738 + v906.fraction
    }else {
      var v1091 = this.codons;
      introspect(JAM.policy.p5) {
        var v1022 = v1091[i$$15]
      }
      if(v1022.sequence.charAt(0) == "a") {
        var v402 = this.baseFreqPosOne;
        var v741 = this.baseFreqPosOne[1];
        var v1023 = this.codons;
        introspect(JAM.policy.p5) {
          var v909 = v1023[i$$15]
        }
        v402[1] = v741 + v909.fraction
      }else {
        var v1092 = this.codons;
        introspect(JAM.policy.p5) {
          var v1024 = v1092[i$$15]
        }
        if(v1024.sequence.charAt(0) == "t") {
          var v403 = this.baseFreqPosOne;
          var v744 = this.baseFreqPosOne[2];
          var v1025 = this.codons;
          introspect(JAM.policy.p5) {
            var v912 = v1025[i$$15]
          }
          v403[2] = v744 + v912.fraction
        }else {
          var v1093 = this.codons;
          introspect(JAM.policy.p5) {
            var v1026 = v1093[i$$15]
          }
          if(v1026.sequence.charAt(0) == "c") {
            var v404 = this.baseFreqPosOne;
            var v747 = this.baseFreqPosOne[3];
            var v1027 = this.codons;
            introspect(JAM.policy.p5) {
              var v915 = v1027[i$$15]
            }
            v404[3] = v747 + v915.fraction
          }
        }
      }
    }
    var v1094 = this.codons;
    introspect(JAM.policy.p5) {
      var v1028 = v1094[i$$15]
    }
    if(v1028.sequence.charAt(1) == "g") {
      var v409 = this.baseFreqPosTwo;
      var v750 = this.baseFreqPosTwo[0];
      var v1029 = this.codons;
      introspect(JAM.policy.p5) {
        var v918 = v1029[i$$15]
      }
      v409[0] = v750 + v918.fraction
    }else {
      var v1095 = this.codons;
      introspect(JAM.policy.p5) {
        var v1030 = v1095[i$$15]
      }
      if(v1030.sequence.charAt(1) == "a") {
        var v410 = this.baseFreqPosTwo;
        var v753 = this.baseFreqPosTwo[1];
        var v1031 = this.codons;
        introspect(JAM.policy.p5) {
          var v921 = v1031[i$$15]
        }
        v410[1] = v753 + v921.fraction
      }else {
        var v1096 = this.codons;
        introspect(JAM.policy.p5) {
          var v1032 = v1096[i$$15]
        }
        if(v1032.sequence.charAt(1) == "t") {
          var v411 = this.baseFreqPosTwo;
          var v756 = this.baseFreqPosTwo[2];
          var v1033 = this.codons;
          introspect(JAM.policy.p5) {
            var v924 = v1033[i$$15]
          }
          v411[2] = v756 + v924.fraction
        }else {
          var v1097 = this.codons;
          introspect(JAM.policy.p5) {
            var v1034 = v1097[i$$15]
          }
          if(v1034.sequence.charAt(1) == "c") {
            var v412 = this.baseFreqPosTwo;
            var v759 = this.baseFreqPosTwo[3];
            var v1035 = this.codons;
            introspect(JAM.policy.p5) {
              var v927 = v1035[i$$15]
            }
            v412[3] = v759 + v927.fraction
          }
        }
      }
    }
    var v1098 = this.codons;
    introspect(JAM.policy.p5) {
      var v1036 = v1098[i$$15]
    }
    if(v1036.sequence.charAt(2) == "g") {
      var v417 = this.baseFreqPosThree;
      var v762 = this.baseFreqPosThree[0];
      var v1037 = this.codons;
      introspect(JAM.policy.p5) {
        var v930 = v1037[i$$15]
      }
      v417[0] = v762 + v930.fraction
    }else {
      var v1099 = this.codons;
      introspect(JAM.policy.p5) {
        var v1038 = v1099[i$$15]
      }
      if(v1038.sequence.charAt(2) == "a") {
        var v418 = this.baseFreqPosThree;
        var v765 = this.baseFreqPosThree[1];
        var v1039 = this.codons;
        introspect(JAM.policy.p5) {
          var v933 = v1039[i$$15]
        }
        v418[1] = v765 + v933.fraction
      }else {
        var v1100 = this.codons;
        introspect(JAM.policy.p5) {
          var v1040 = v1100[i$$15]
        }
        if(v1040.sequence.charAt(2) == "t") {
          var v419 = this.baseFreqPosThree;
          var v768 = this.baseFreqPosThree[2];
          var v1041 = this.codons;
          introspect(JAM.policy.p5) {
            var v936 = v1041[i$$15]
          }
          v419[2] = v768 + v936.fraction
        }else {
          var v1101 = this.codons;
          introspect(JAM.policy.p5) {
            var v1042 = v1101[i$$15]
          }
          if(v1042.sequence.charAt(2) == "c") {
            var v420 = this.baseFreqPosThree;
            var v771 = this.baseFreqPosThree[3];
            var v1043 = this.codons;
            introspect(JAM.policy.p5) {
              var v939 = v1043[i$$15]
            }
            v420[3] = v771 + v939.fraction
          }
        }
      }
    }
    i$$15 = i$$15 + 1;
    v425 = i$$15 < this.codons.length
  }
  return true
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$16 = 0;
  var v427 = i$$16 < this.codons.length;
  for(;v427;) {
    var v942 = this.codons;
    introspect(JAM.policy.p5) {
      var v775 = v942[i$$16]
    }
    perThouTotal = perThouTotal + v775.perThou;
    i$$16 = i$$16 + 1;
    v427 = i$$16 < this.codons.length
  }
  if(perThouTotal == 0) {
    return false
  }
  i$$16 = 0;
  var v430 = i$$16 < this.codons.length;
  for(;v430;) {
    var v778 = this.codons;
    introspect(JAM.policy.p5) {
      var v429 = v778[i$$16]
    }
    var v1044 = this.codons;
    introspect(JAM.policy.p5) {
      var v945 = v1044[i$$16]
    }
    v429.fraction = v945.perThou / perThouTotal;
    i$$16 = i$$16 + 1;
    v430 = i$$16 < this.codons.length
  }
  return true
}
function AminoAcid() {
  var v1303 = new Array;
  this.codons = v1303;
  var v1304 = new Array(0, 0, 0, 0);
  this.baseFreqPosOne = v1304;
  var v1305 = new Array(0, 0, 0, 0);
  this.baseFreqPosTwo = v1305;
  var v1306 = new Array(0, 0, 0, 0);
  this.baseFreqPosThree = v1306;
  return
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1307 = sequence$$18.toLowerCase();
  this.sequence = v1307;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return
}
function _getConsensusBase(baseFreq) {
  var g;
  var a;
  var t;
  var c;
  if(baseFreq[0] > 0) {
    g = true
  }
  if(baseFreq[1] > 0) {
    a = true
  }
  if(baseFreq[2] > 0) {
    t = true
  }
  if(baseFreq[3] > 0) {
    c = true
  }
  var v785 = !g;
  if(v785) {
    var v947 = !a;
    if(v947) {
      var v1045 = !c;
      if(v1045) {
        v1045 = !t
      }
      v947 = v1045
    }
    v785 = v947
  }
  if(v785) {
    return"n"
  }
  var v786 = g;
  if(v786) {
    var v948 = a;
    if(v948) {
      v948 = c && t
    }
    v786 = v948
  }
  if(v786) {
    return"n"
  }else {
    var v787 = a;
    if(v787) {
      v787 = c && t
    }
    if(v787) {
      return"h"
    }else {
      var v788 = a;
      if(v788) {
        v788 = g && t
      }
      if(v788) {
        return"d"
      }else {
        var v789 = c;
        if(v789) {
          v789 = g && t
        }
        if(v789) {
          return"b"
        }else {
          if(a && c) {
            return"m"
          }else {
            if(g && t) {
              return"k"
            }else {
              if(a && t) {
                return"w"
              }else {
                if(g && c) {
                  return"s"
                }else {
                  if(c && t) {
                    return"y"
                  }else {
                    if(a && g) {
                      return"r"
                    }else {
                      if(t) {
                        return"t"
                      }else {
                        if(g) {
                          return"g"
                        }else {
                          if(c) {
                            return"c"
                          }else {
                            if(a) {
                              return"a"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return"?"
}
new AminoAcid;
AminoAcid.prototype.addCodon = addCodon;
AminoAcid.prototype.determineBaseFreq = determineBaseFreq;
AminoAcid.prototype.fixFraction = fixFraction;
JAM.set(document, "onload", v2);
JAM.set(document.getElementById("submitbtn"), "onclick", v3);
JAM.set(document.getElementById("clearbtn"), "onclick", v4);

