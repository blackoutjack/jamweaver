function v12() {
  document.forms[0].elements[0].value = " ";
  return
}
function v11() {
  try {
    windowExtract(document)
  }catch(e$$7) {
    alert("The following error was encountered: " + e$$7)
  }
  return
}
function v10() {
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
  var v19 = i$$1 < arrayOfTitles.length;
  for(;v19;) {
    introspect(JAM.policy.p5) {
      var v925 = arrayOfTitles[i$$1]
    }
    var v449 = v925.search(/\S/) == -1;
    if(!v449) {
      introspect(JAM.policy.p5) {
        var v1040 = arrayOfSequences[i$$1]
      }
      var v767 = v1040.search(/\S/) == -1;
      if(!v767) {
        introspect(JAM.policy.p5) {
          var v1041 = arrayOfSequences[i$$1]
        }
        v767 = v1041.length != lengthOfAlign
      }
      v449 = v767
    }
    if(v449) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v19 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v451 = codonTable.search(/AmAcid/) == -1;
  if(!v451) {
    var v770 = codonTable.search(/Codon/) == -1;
    if(!v770) {
      var v930 = codonTable.search(/Number/) == -1;
      if(!v930) {
        var v1043 = codonTable.search(/\/1000/) == -1;
        if(!v1043) {
          v1043 = codonTable.search(/Fraction\s*\.\./) == -1
        }
        v930 = v1043
      }
      v770 = v930
    }
    v451 = v770
  }
  if(v451) {
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
  var v24 = z$$2 < arrayOfPatterns.length;
  for(;v24;) {
    introspect(JAM.policy.p5) {
      var v773 = arrayOfPatterns[z$$2]
    }
    if(v773.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v774 = arrayOfPatterns[z$$2]
    }
    if(moreExpressionCheck(v774) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    v24 = z$$2 < arrayOfPatterns.length
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v33 = j < arrayOfPatterns.length;
  for(;v33;) {
    var v27 = geneticCodeMatchExp;
    var v28 = j;
    introspect(JAM.policy.p5) {
      var v932 = arrayOfPatterns[j]
    }
    var v458 = v932.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1279 = eval("introspect(JAM.policy.pFull) { " + v458 + " }")
    }else {
      var v1279 = JAM.call(eval, null, [v458])
    }
    v27[v28] = v1279;
    var v29 = geneticCodeMatchResult;
    var v30 = j;
    introspect(JAM.policy.p5) {
      var v776 = arrayOfPatterns[j]
    }
    var v1280 = v776.match(/=[a-zA-Z\*]/).toString();
    v29[v30] = v1280;
    var v31 = geneticCodeMatchResult;
    var v32 = j;
    introspect(JAM.policy.p5) {
      var v460 = geneticCodeMatchResult[j]
    }
    var v1281 = v460.replace(/=/g, "");
    v31[v32] = v1281;
    j = j + 1;
    v33 = j < arrayOfPatterns.length
  }
  var i$$2 = 0;
  var v40 = i$$2 <= testSequence.length - 3;
  for(;v40;) {
    codon = testSequence.substring(i$$2, i$$2 + 3);
    j = 0;
    var v38 = j < geneticCodeMatchExp.length;
    for(;v38;) {
      introspect(JAM.policy.p5) {
        var v778 = geneticCodeMatchExp[j]
      }
      if(codon.search(v778) != -1) {
        if(oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      v38 = j < geneticCodeMatchExp.length
    }
    if(oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v40 = i$$2 <= testSequence.length - 3
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v42 = z$$3 < arrayOfPatterns$$1.length;
  for(;v42;) {
    introspect(JAM.policy.p5) {
      var v780 = arrayOfPatterns$$1[z$$3]
    }
    if(v780.search(/[^acdefghiklmnpqrstvwyz]/i) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    v42 = z$$3 < arrayOfPatterns$$1.length
  }
  var i$$3 = 0;
  var v46 = i$$3 < arrayOfPatterns$$1.length;
  for(;v46;) {
    introspect(JAM.policy.p5) {
      var v781 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v781 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v45 = j$$1 < arrayOfPatterns$$1.length;
    for(;v45;) {
      introspect(JAM.policy.p5) {
        var v782 = arrayOfPatterns$$1[j$$1]
      }
      if(v782.search(re) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      v45 = j$$1 < arrayOfPatterns$$1.length
    }
    i$$3 = i$$3 + 1;
    v46 = i$$3 < arrayOfPatterns$$1.length
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v49 = z$$4 < arrayOfPatterns$$2.length;
  for(;v49;) {
    introspect(JAM.policy.p5) {
      var v783 = arrayOfPatterns$$2[z$$4]
    }
    if(v783.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v784 = arrayOfPatterns$$2[z$$4]
    }
    if(moreExpressionCheck(v784) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    v49 = z$$4 < arrayOfPatterns$$2.length
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
  var v54 = outputWindow.document;
  JAM.call(v54.write, v54, ["</form>"]);
  return true
}
function closePre() {
  var v55 = outputWindow.document;
  JAM.call(v55.write, v55, ["</div>"]);
  var v56 = outputWindow.document;
  JAM.call(v56.write, v56, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v57 = outputWindow.document;
  JAM.call(v57.write, v57, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v58 = outputWindow.document;
  JAM.call(v58.write, v58, ["</body>\n</html>\n"]);
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
  var v62 = i$$4 < alignArray.length;
  for(;v62;) {
    introspect(JAM.policy.p5) {
      var v786 = alignArray[i$$4]
    }
    if(v786.search(/[^\s]+\s/) == -1) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    v62 = i$$4 < alignArray.length
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
    var v64 = matchArray = re$$1.exec(sequenceData);
    for(;v64;) {
      arrayOfFasta.push(matchArray[0]);
      v64 = matchArray = re$$1.exec(sequenceData)
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
  var v82 = j$$2 < arrayOfPatterns$$3.length;
  for(;v82;) {
    var v80 = geneticCodeMatchExp$$1;
    var v81 = j$$2;
    introspect(JAM.policy.p5) {
      var v934 = arrayOfPatterns$$3[j$$2]
    }
    var v507 = v934.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1282 = eval("introspect(JAM.policy.pFull) { " + v507 + " }")
    }else {
      var v1282 = JAM.call(eval, null, [v507])
    }
    v80[v81] = v1282;
    j$$2 = j$$2 + 1;
    v82 = j$$2 < arrayOfPatterns$$3.length
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v88 = j$$3 < arrayOfPatterns$$4.length;
  for(;v88;) {
    var v84 = geneticCodeMatchResult$$1;
    var v85 = j$$3;
    introspect(JAM.policy.p5) {
      var v788 = arrayOfPatterns$$4[j$$3]
    }
    var v1283 = v788.match(/=[a-zA-Z\*]/).toString();
    v84[v85] = v1283;
    var v86 = geneticCodeMatchResult$$1;
    var v87 = j$$3;
    introspect(JAM.policy.p5) {
      var v511 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1284 = v511.replace(/=/g, "");
    v86[v87] = v1284;
    j$$3 = j$$3 + 1;
    v88 = j$$3 < arrayOfPatterns$$4.length
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
  var v109 = j$$4 < lengthOut;
  for(;v109;) {
    tempNum = Math.floor(Math.random() * components.length);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v109 = j$$4 < lengthOut
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
  var v539 = expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1;
  if(!v539) {
    var v791 = expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1;
    if(!v791) {
      var v936 = expressionToCheck.search(/\[\]/) != -1;
      if(!v936) {
        var v1046 = expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1;
        if(!v1046) {
          var v1118 = expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1;
          if(!v1118) {
            var v1168 = expressionToCheck.search(/\|\|/) != -1;
            if(!v1168) {
              var v1201 = expressionToCheck.search(/\/\|/) != -1;
              if(!v1201) {
                var v1218 = expressionToCheck.search(/\|\//) != -1;
                if(!v1218) {
                  var v1233 = expressionToCheck.search(/\[.\]/) != -1;
                  if(!v1233) {
                    var v1245 = expressionToCheck.search(/\</) != -1;
                    if(!v1245) {
                      v1245 = expressionToCheck.search(/\>/) != -1
                    }
                    v1233 = v1245
                  }
                  v1218 = v1233
                }
                v1201 = v1218
              }
              v1168 = v1201
            }
            v1118 = v1168
          }
          v1046 = v1118
        }
        v936 = v1046
      }
      v791 = v936
    }
    v539 = v791
  }
  if(v539) {
    return false
  }
  return true
}
function openForm() {
  var v114 = outputWindow.document;
  JAM.call(v114.write, v114, ['<form action="">\n']);
  return true
}
function openPre() {
  var v115 = outputWindow.document;
  JAM.call(v115.write, v115, ["<pre>"]);
  var v116 = outputWindow.document;
  JAM.call(v116.write, v116, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v117 = outputWindow.document;
  JAM.call(v117.write, v117, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.p1), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  JAM.call(v118.write, v118, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isColor) {
    var v120 = outputWindow.document;
    JAM.call(v120.write, v120, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"])
  }else {
    var v122 = outputWindow.document;
    JAM.call(v122.write, v122, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v124 = outputWindow.document;
  JAM.call(v124.write, v124, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.p1), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
  outputWindow.focus();
  var v126 = outputWindow.document;
  JAM.call(v126.write, v126, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isBackground) {
    var v128 = outputWindow.document;
    JAM.call(v128.write, v128, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"])
  }else {
    var v130 = outputWindow.document;
    JAM.call(v130.write, v130, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v132 = outputWindow.document;
  JAM.call(v132.write, v132, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"]);
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
  var v135 = j$$5 < lengthOfColumn;
  for(;v135;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v135 = j$$5 < lengthOfColumn
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
  var v554 = emblFile.search(/ID/) == -1;
  if(!v554) {
    var v802 = emblFile.search(/AC/) == -1;
    if(!v802) {
      var v947 = emblFile.search(/DE/) == -1;
      if(!v947) {
        v947 = emblFile.search(/SQ/) == -1
      }
      v802 = v947
    }
    v554 = v802
  }
  if(v554) {
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
  var v559 = genBankFile.search(/LOCUS/) == -1;
  if(!v559) {
    var v805 = genBankFile.search(/DEFINITION/) == -1;
    if(!v805) {
      var v950 = genBankFile.search(/ACCESSION/) == -1;
      if(!v950) {
        v950 = genBankFile.search(/ORIGIN/) == -1
      }
      v805 = v950
    }
    v559 = v805
  }
  if(v559) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v560 = genBankFile$$1.search(/LOCUS/) == -1;
  if(!v560) {
    var v808 = genBankFile$$1.search(/DEFINITION/) == -1;
    if(!v808) {
      var v953 = genBankFile$$1.search(/ACCESSION/) == -1;
      if(!v953) {
        v953 = genBankFile$$1.search(/ORIGIN/) == -1
      }
      v808 = v953
    }
    v560 = v808
  }
  if(v560) {
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
  var v562 = emblFile$$1.search(/ID/) == -1;
  if(!v562) {
    var v811 = emblFile$$1.search(/AC/) == -1;
    if(!v811) {
      var v956 = emblFile$$1.search(/DE/) == -1;
      if(!v956) {
        v956 = emblFile$$1.search(/SQ/) == -1
      }
      v811 = v956
    }
    v562 = v811
  }
  if(v562) {
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
  var v163 = i$$5 < stopBase;
  for(;v163;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v160 = j$$6 <= basePerLine / groupSize;
    for(;v160;) {
      var v159 = k < groupSize;
      for(;v159;) {
        lineOfText = lineOfText + text$$10.charAt(k + i$$5);
        k = k + 1;
        v159 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v160 = j$$6 <= basePerLine / groupSize
    }
    var v161 = outputWindow.document;
    JAM.call(v161.write, v161, [lineOfText + "\n"]);
    lineOfText = "";
    v163 = i$$5 < stopBase
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
    var v567 = adjustment < 0;
    if(v567) {
      v567 = adjusted >= 0
    }
    if(v567) {
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
  var v197 = i$$6 < stopBase$$2;
  for(;v197;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v173 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for(;v173;) {
      var v168 = k$$1 < groupSize$$2;
      for(;v168;) {
        if(i$$6 + k$$1 >= stopBase$$2) {
          break
        }
        lineOfText$$1 = lineOfText$$1 + text$$12.charAt(k$$1 + i$$6);
        k$$1 = k$$1 + 1;
        v168 = k$$1 < groupSize$$2
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
      v173 = j$$7 <= basePerLine$$2 / groupSize$$2
    }
    if(numberPosition$$1 == "left") {
      var v174 = outputWindow.document;
      JAM.call(v174.write, v174, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"]);
      if(strands$$1 == "two") {
        var v176 = outputWindow.document;
        JAM.call(v176.write, v176, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"]);
        var v178 = outputWindow.document;
        JAM.call(v178.write, v178, ["\n"])
      }
    }else {
      if(numberPosition$$1 == "right") {
        var v180 = outputWindow.document;
        JAM.call(v180.write, v180, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
        if(strands$$1 == "two") {
          var v182 = outputWindow.document;
          JAM.call(v182.write, v182, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
          var v184 = outputWindow.document;
          JAM.call(v184.write, v184, ["\n"])
        }
      }else {
        if(numberPosition$$1 == "above") {
          var v186 = outputWindow.document;
          JAM.call(v186.write, v186, [aboveNum + "\n"]);
          var v188 = outputWindow.document;
          JAM.call(v188.write, v188, [lineOfText$$1 + "\n"]);
          if(strands$$1 == "two") {
            var v190 = outputWindow.document;
            JAM.call(v190.write, v190, [complement(lineOfText$$1) + "\n"]);
            var v192 = outputWindow.document;
            JAM.call(v192.write, v192, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v197 = i$$6 < stopBase$$2
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
  var v218 = i$$7 < stopBase$$3;
  for(;v218;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v206 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for(;v206;) {
      var v201 = k$$2 < groupSize$$3;
      for(;v201;) {
        if(i$$7 + k$$2 >= stopBase$$3) {
          break
        }
        lineOfText$$2 = lineOfText$$2 + text$$13.charAt(k$$2 + i$$7);
        k$$2 = k$$2 + 1;
        v201 = k$$2 < groupSize$$3
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
      v206 = j$$8 <= basePerLine$$3 / groupSize$$3
    }
    if(numberPosition$$2 == "left") {
      var v207 = outputWindow.document;
      JAM.call(v207.write, v207, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"])
    }else {
      if(numberPosition$$2 == "right") {
        var v209 = outputWindow.document;
        JAM.call(v209.write, v209, [lineOfText$$2 + i$$7 + "\n"])
      }else {
        if(numberPosition$$2 == "above") {
          var v211 = outputWindow.document;
          JAM.call(v211.write, v211, [aboveNum$$1 + "\n"]);
          var v213 = outputWindow.document;
          JAM.call(v213.write, v213, [lineOfText$$2 + "\n"])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v218 = i$$7 < stopBase$$3
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
  var v584 = sequence$$13.length <= firstIndexToMutate;
  if(!v584) {
    var v822 = lastIndexToMutate < 0;
    if(!v822) {
      v822 = lastIndexToMutate <= firstIndexToMutate
    }
    v584 = v822
  }
  if(v584) {
    numMut = 0
  }
  var i$$8 = 0;
  var v227 = i$$8 < numMut;
  for(;v227;) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    var v586 = randNum < firstIndexToMutate;
    if(!v586) {
      v586 = randNum > lastIndexToMutate
    }
    if(v586) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v227 = i$$8 < numMut;
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
        var v590 = components$$1[componentsIndex]
      }
      if(v590 != currentChar) {
        needNewChar = false
      }
    }
    var v591 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.p5) {
      var v592 = components$$1[componentsIndex]
    }
    sequence$$13 = v591 + v592 + sequence$$13.substring(randNum + 1, sequence$$13.length);
    i$$8 = i$$8 + 1;
    v227 = i$$8 < numMut
  }
  var v228 = outputWindow.document;
  JAM.call(v228.write, v228, [addReturns(sequence$$13)]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v234 = j$$9 < lengthOut$$1;
  for(;v234;) {
    tempNum$$1 = Math.floor(Math.random() * components$$2.length);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if(sequence$$14.length == 60) {
      var v231 = outputWindow.document;
      JAM.call(v231.write, v231, [sequence$$14 + "\n"]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v234 = j$$9 < lengthOut$$1
  }
  var v235 = outputWindow.document;
  JAM.call(v235.write, v235, [sequence$$14 + "\n"]);
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
  var v241 = outputWindow.document;
  JAM.call(v241.write, v241, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"]);
  var i$$9 = 0;
  var v259 = i$$9 < arrayOfItems.length;
  for(;v259;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p5) {
      var v601 = arrayOfItems[i$$9]
    }
    matchExp = v601.match(/\/.+\//) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.p5) {
      var v963 = arrayOfItems[i$$9]
    }
    cutDistance = parseFloat(v963.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    var v251 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v251;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v603 = matchPosition >= lowerLimit;
      if(v603) {
        v603 = matchPosition < upperLimit
      }
      if(v603) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v251 = matchArray$$1 = matchExp.exec(sequence$$15)
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
    var v257 = outputWindow.document;
    var v1174 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p5) {
      var v1239 = arrayOfItems[i$$9]
    }
    JAM.call(v257.write, v257, [v1174 + v1239.match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v259 = i$$9 < arrayOfItems.length
  }
  var v260 = outputWindow.document;
  JAM.call(v260.write, v260, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v261 = outputWindow.document;
  JAM.call(v261.write, v261, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v262 = outputWindow.document;
  JAM.call(v262.write, v262, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"]);
  var i$$10 = 0;
  var v272 = i$$10 < arrayOfItems$$1.length;
  for(;v272;) {
    var tempNumber = 0;
    introspect(JAM.policy.p5) {
      var v612 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = v612.match(/\/[^\/]+\//) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(sequence$$16.search(matchExp$$1) != -1) {
      tempNumber = sequence$$16.match(matchExp$$1).length
    }
    var percentage = 0;
    var v832 = originalLength + 1;
    introspect(JAM.policy.p5) {
      var v1066 = arrayOfItems$$1[i$$10]
    }
    if(v832 - parseFloat(v1066.match(/\d+/)) > 0) {
      var v267 = 100 * tempNumber;
      var v615 = originalLength + 1;
      introspect(JAM.policy.p5) {
        var v967 = arrayOfItems$$1[i$$10]
      }
      percentage = v267 / (v615 - parseFloat(v967.match(/\d+/)))
    }
    var v270 = outputWindow.document;
    introspect(JAM.policy.p5) {
      var v1240 = arrayOfItems$$1[i$$10]
    }
    JAM.call(v270.write, v270, ["<tr><td>" + v1240.match(/\([^\(]+\)\b/).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n"]);
    i$$10 = i$$10 + 1;
    v272 = i$$10 < arrayOfItems$$1.length
  }
  var v273 = outputWindow.document;
  JAM.call(v273.write, v273, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v280 = sequence$$17.length > 0;
  for(;v280;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = Math.floor(Math.random() * maxNum$$1);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    tempString2 = sequence$$17.substring(randNum$$1 + 1, sequence$$17.length);
    sequence$$17 = tempString1 + tempString2;
    if(tempSeq.length == 60) {
      var v277 = outputWindow.document;
      JAM.call(v277.write, v277, [tempSeq + "\n"]);
      tempSeq = ""
    }
    v280 = sequence$$17.length > 0
  }
  var v281 = outputWindow.document;
  JAM.call(v281.write, v281, [tempSeq + "\n"]);
  return true
}
function windowExtract(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  if(testScript() == false) {
    return false
  }
  var v624 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v624) {
    var v838 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
    if(!v838) {
      var v971 = checkFormElement(theDocument.forms[0].elements[1]) == false;
      if(!v971) {
        var v1071 = checkFormElement(theDocument.forms[0].elements[3]) == false;
        if(!v1071) {
          var v1131 = verifyMaxDigits(theDocument.forms[0].elements[1].value.replace(/[^\d]/g, ""), maxInput$$3) == false;
          if(!v1131) {
            v1131 = verifyMaxDigits(theDocument.forms[0].elements[3].value.replace(/[^\d]/g, ""), maxInput$$3) == false
          }
          v1071 = v1131
        }
        v971 = v1071
      }
      v838 = v971
    }
    v624 = v838
  }
  if(v624) {
    return false
  }
  var windowSize = parseInt(theDocument.forms[0].elements[1].value.replace(/[^\d]/g, ""));
  var position = parseInt(theDocument.forms[0].elements[3].value.replace(/[^\d]/g, ""));
  var orientation = theDocument.forms[0].elements[2].value;
  var start$$4;
  var end$$1;
  if(orientation == "ending") {
    end$$1 = position;
    start$$4 = end$$1 - windowSize + 1
  }else {
    if(orientation == "starting") {
      start$$4 = position;
      end$$1 = start$$4 + windowSize - 1
    }else {
      if(orientation == "centered") {
        start$$4 = position - Math.round(windowSize / 2) + 1;
        end$$1 = start$$4 + windowSize - 1
      }
    }
  }
  ranges.push(new Range(start$$4, end$$1));
  openWindow("Window Extractor DNA");
  openPre();
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var i$$11 = 0;
  var v303 = i$$11 < arrayOfFasta$$1.length;
  for(;v303;) {
    introspect(JAM.policy.p5) {
      var v297 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v297);
    introspect(JAM.policy.p5) {
      var v298 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v298);
    verifyDna(newDna);
    newDna = removeNonDna(newDna);
    var v299 = outputWindow.document;
    JAM.call(v299.write, v299, [getFastaTitleFromTitleAndSequence(title, newDna)]);
    var v845 = theDocument.forms[0].elements[7].options;
    var v846 = theDocument.forms[0].elements[7].selectedIndex;
    introspect(JAM.policy.p5) {
      var v632 = v845[v846]
    }
    var v301 = v632.value;
    var v847 = theDocument.forms[0].elements[8].options;
    var v848 = theDocument.forms[0].elements[8].selectedIndex;
    introspect(JAM.policy.p5) {
      var v633 = v847[v848]
    }
    writeSequenceRanges(newDna, ranges, v301, v633.value);
    i$$11 = i$$11 + 1;
    v303 = i$$11 < arrayOfFasta$$1.length
  }
  closePre();
  closeWindow();
  return true
}
function rangeExtract(theDocument$$1) {
  var newDna$$1 = "";
  var maxInput$$4 = 5E5;
  var matchFound$$1 = false;
  var ranges$$1 = new Array;
  if(testScript() == false) {
    return false
  }
  var v636 = checkFormElement(theDocument$$1.forms[0].elements[0]) == false;
  if(!v636) {
    var v850 = checkSequenceLength(theDocument$$1.forms[0].elements[0].value, maxInput$$4) == false;
    if(!v850) {
      v850 = checkFormElement(theDocument$$1.forms[0].elements[1]) == false
    }
    v636 = v850
  }
  if(v636) {
    return false
  }
  var arrayOfRanges = theDocument$$1.forms[0].elements[1].value.split(/,/);
  var arrayOfStartAndEnd;
  var i$$12 = 0;
  var v313 = i$$12 < arrayOfRanges.length;
  for(;v313;) {
    introspect(JAM.policy.p5) {
      var v307 = arrayOfRanges[i$$12]
    }
    arrayOfStartAndEnd = v307.split(/\.\./);
    if(arrayOfStartAndEnd.length == 1) {
      matchFound$$1 = true;
      ranges$$1.push(new Range(arrayOfStartAndEnd[0], arrayOfStartAndEnd[0]))
    }else {
      if(arrayOfStartAndEnd.length == 2) {
        matchFound$$1 = true;
        ranges$$1.push(new Range(arrayOfStartAndEnd[0], arrayOfStartAndEnd[1]))
      }else {
        introspect(JAM.policy.p5) {
          var v645 = arrayOfRanges[i$$12]
        }
        alert("The following range entry was ignored: " + v645)
      }
    }
    i$$12 = i$$12 + 1;
    v313 = i$$12 < arrayOfRanges.length
  }
  if(matchFound$$1 == false) {
    alert("No ranges were entered.");
    return false
  }
  openWindow("Range Extractor DNA");
  openPre();
  var arrayOfFasta$$2 = getArrayOfFasta(theDocument$$1.forms[0].elements[0].value);
  i$$12 = 0;
  var v322 = i$$12 < arrayOfFasta$$2.length;
  for(;v322;) {
    introspect(JAM.policy.p5) {
      var v316 = arrayOfFasta$$2[i$$12]
    }
    newDna$$1 = getSequenceFromFasta(v316);
    introspect(JAM.policy.p5) {
      var v317 = arrayOfFasta$$2[i$$12]
    }
    title = getTitleFromFasta(v317);
    verifyDna(newDna$$1);
    newDna$$1 = removeNonDna(newDna$$1);
    var v318 = outputWindow.document;
    JAM.call(v318.write, v318, [getFastaTitleFromTitleAndSequence(title, newDna$$1)]);
    var v854 = theDocument$$1.forms[0].elements[5].options;
    var v855 = theDocument$$1.forms[0].elements[5].selectedIndex;
    introspect(JAM.policy.p5) {
      var v649 = v854[v855]
    }
    var v320 = v649.value;
    var v856 = theDocument$$1.forms[0].elements[6].options;
    var v857 = theDocument$$1.forms[0].elements[6].selectedIndex;
    introspect(JAM.policy.p5) {
      var v650 = v856[v857]
    }
    writeSequenceRanges(newDna$$1, ranges$$1, v320, v650.value);
    i$$12 = i$$12 + 1;
    v322 = i$$12 < arrayOfFasta$$2.length
  }
  closePre();
  closeWindow();
  return true
}
function writeSequenceRanges(sequence$$18, ranges$$2, strand, segmentType) {
  var rangeGroup = new RangeGroup(strand, segmentType);
  var center_base = Math.round(sequence$$18.length / 2);
  var i$$13 = 0;
  var v337 = i$$13 < ranges$$2.length;
  for(;v337;) {
    introspect(JAM.policy.p5) {
      var v324 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v991 = ranges$$2[i$$13]
    }
    var v1285 = v991.start.toString().replace(/start|begin/gi, 1);
    v324.start = v1285;
    introspect(JAM.policy.p5) {
      var v325 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v992 = ranges$$2[i$$13]
    }
    var v1286 = v992.start.toString().replace(/stop|end/gi, sequence$$18.length);
    v325.start = v1286;
    introspect(JAM.policy.p5) {
      var v326 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v993 = ranges$$2[i$$13]
    }
    var v1287 = v993.start.toString().replace(/length/gi, sequence$$18.length);
    v326.start = v1287;
    introspect(JAM.policy.p5) {
      var v327 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v994 = ranges$$2[i$$13]
    }
    var v1288 = v994.start.toString().replace(/middle|center|centre/gi, center_base);
    v327.start = v1288;
    introspect(JAM.policy.p5) {
      var v328 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v995 = ranges$$2[i$$13]
    }
    var v1289 = v995.stop.toString().replace(/start|begin/gi, 1);
    v328.stop = v1289;
    introspect(JAM.policy.p5) {
      var v329 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v996 = ranges$$2[i$$13]
    }
    var v1290 = v996.stop.toString().replace(/stop|end/gi, sequence$$18.length);
    v329.stop = v1290;
    introspect(JAM.policy.p5) {
      var v330 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v997 = ranges$$2[i$$13]
    }
    var v1291 = v997.stop.toString().replace(/length/gi, sequence$$18.length);
    v330.stop = v1291;
    introspect(JAM.policy.p5) {
      var v331 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v998 = ranges$$2[i$$13]
    }
    var v1292 = v998.stop.toString().replace(/middle|center|centre/gi, center_base);
    v331.stop = v1292;
    try {
      introspect(JAM.policy.p5) {
        var v332 = ranges$$2[i$$13]
      }
      introspect(JAM.policy.p5) {
        var v1089 = ranges$$2[i$$13]
      }
      var v866 = v1089.start.toString();
      if(JAM.isEval(eval)) {
        var v666 = eval("introspect(JAM.policy.pFull) { " + v866 + " }")
      }else {
        var v666 = JAM.call(eval, null, [v866])
      }
      var v1293 = parseInt(v666);
      v332.start = v1293
    }catch(e$$5) {
      introspect(JAM.policy.p5) {
        var v867 = ranges$$2[i$$13]
      }
      alert("Could not evaluate the following expression: " + v867.start);
      return false
    }
    try {
      introspect(JAM.policy.p5) {
        var v334 = ranges$$2[i$$13]
      }
      introspect(JAM.policy.p5) {
        var v1090 = ranges$$2[i$$13]
      }
      var v868 = v1090.stop.toString();
      if(JAM.isEval(eval)) {
        var v668 = eval("introspect(JAM.policy.pFull) { " + v868 + " }")
      }else {
        var v668 = JAM.call(eval, null, [v868])
      }
      var v1294 = parseInt(v668);
      v334.stop = v1294
    }catch(e$$6) {
      introspect(JAM.policy.p5) {
        var v869 = ranges$$2[i$$13]
      }
      alert("Could not evaluate the following expression: " + v869.stop);
      return false
    }
    introspect(JAM.policy.p5) {
      var v336 = ranges$$2[i$$13]
    }
    JAM.call(rangeGroup.addRange, rangeGroup, [v336]);
    i$$13 = i$$13 + 1;
    v337 = i$$13 < ranges$$2.length
  }
  JAM.call(rangeGroup.writeRanges, rangeGroup, [sequence$$18]);
  return
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  if(this.start == this.stop) {
    if(this.start < 1) {
      problem = true;
      warnings.push("position value of " + this.start + " is less than 1")
    }
    if(this.start > sequence$$19.length) {
      problem = true;
      warnings.push("position value of " + this.start + " is greater than the sequence length")
    }
  }else {
    if(this.start < 1) {
      problem = true;
      warnings.push("position value of " + this.start + " is less than 1")
    }
    if(this.stop < 1) {
      problem = true;
      warnings.push("position value of " + this.stop + " is less than 1")
    }
    if(this.start > sequence$$19.length) {
      problem = true;
      warnings.push("position value of " + this.start + " is greater than the sequence length")
    }
    if(this.stop > sequence$$19.length) {
      problem = true;
      warnings.push("position value of " + this.stop + " is greater than the sequence length")
    }
    if(this.start > this.stop) {
      problem = true;
      warnings.push("stop position is less than start position in range " + this.start + " to " + this.stop)
    }
  }
  if(problem) {
    alert("An entry was skipped because of the following:\n" + warnings.join(",\n"));
    return false
  }else {
    if(this.start == this.stop) {
      return sequence$$19.charAt(this.start - 1)
    }else {
      return sequence$$19.substring(this.start - 1, this.stop)
    }
  }
  return
}
function getTitle() {
  if(this.start == this.stop) {
    return"&gt;base " + this.start
  }else {
    return"&gt;base " + this.start + " to " + this.stop
  }
  return
}
function Range(start$$5, stop) {
  this.start = start$$5;
  this.stop = stop;
  return
}
function addRange(range$$5) {
  this.ranges.push(range$$5);
  return
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$21, s$$11) {
    return sequence$$20.substring(offset$$21, offset$$21 + p1$$9.length)
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$20, s$$10) {
    return p1$$8 + sequence$$20.substring(p1$$8.length, p1$$8.length + p2$$3.length)
  }
  function v7(str$$13, p1$$7, offset$$19, s$$9) {
    return getRandomSequence(["g", "a", "c", "t"], p1$$7.length)
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$18, s$$8) {
    return p1$$6 + getRandomSequence(["g", "a", "c", "t"], p2$$2.length)
  }
  function v5(str$$11, p1$$5, offset$$17, s$$7) {
    return p1$$5.toLowerCase()
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$16, s$$6) {
    return p1$$4 + p2$$1.toLowerCase()
  }
  function v3(str$$9, p1$$3, offset$$15, s$$5) {
    return p1$$3.toUpperCase()
  }
  function v2(str$$8, p1$$2, p2, offset$$14, s$$4) {
    return p1$$2 + p2.toUpperCase()
  }
  var sequenceArray$$1 = new Array;
  if(this.type == "new_sequence") {
    var i$$14 = 0;
    var v376 = i$$14 < this.ranges.length;
    for(;v376;) {
      var v1002 = this.ranges;
      introspect(JAM.policy.p5) {
        var v881 = v1002[i$$14]
      }
      if(JAM.call(v881.getSequence, v881, [sequence$$20]) != "") {
        var v882 = this.ranges;
        introspect(JAM.policy.p5) {
          var v708 = v882[i$$14]
        }
        sequenceArray$$1.push(JAM.call(v708.getSequence, v708, [sequence$$20]))
      }
      i$$14 = i$$14 + 1;
      v376 = i$$14 < this.ranges.length
    }
    if(this.strand == "reverse") {
      var v377 = outputWindow.document;
      JAM.call(v377.write, v377, [addReturns(reverse(complement(sequenceArray$$1.join("")))) + "\n\n"])
    }else {
      var v379 = outputWindow.document;
      JAM.call(v379.write, v379, [addReturns(sequenceArray$$1.join("")) + "\n\n"])
    }
    return true
  }
  if(this.type == "separate") {
    i$$14 = 0;
    var v391 = i$$14 < this.ranges.length;
    for(;v391;) {
      var v1004 = this.ranges;
      introspect(JAM.policy.p5) {
        var v887 = v1004[i$$14]
      }
      if(JAM.call(v887.getSequence, v887, [sequence$$20]) != "") {
        var v383 = outputWindow.document;
        var v1005 = this.ranges;
        introspect(JAM.policy.p5) {
          var v888 = v1005[i$$14]
        }
        JAM.call(v383.write, v383, [v888.getTitle() + "\n"]);
        if(this.strand == "reverse") {
          var v385 = outputWindow.document;
          var v1195 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1146 = v1195[i$$14]
          }
          JAM.call(v385.write, v385, [reverse(complement(addReturns(JAM.call(v1146.getSequence, v1146, [sequence$$20])))) + "\n\n"])
        }else {
          var v387 = outputWindow.document;
          var v1093 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1007 = v1093[i$$14]
          }
          JAM.call(v387.write, v387, [addReturns(JAM.call(v1007.getSequence, v1007, [sequence$$20])) + "\n\n"])
        }
      }
      i$$14 = i$$14 + 1;
      v391 = i$$14 < this.ranges.length
    }
    return true
  }
  if(this.type == "uppercased") {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$14 = 0;
    var v397 = i$$14 < this.ranges.length;
    for(;v397;) {
      var v1008 = this.ranges;
      introspect(JAM.policy.p5) {
        var v893 = v1008[i$$14]
      }
      if(JAM.call(v893.getSequence, v893, [sequence$$20]) != "") {
        var v1009 = this.ranges;
        introspect(JAM.policy.p5) {
          var v894 = v1009[i$$14]
        }
        if(v894.start > 1) {
          var v1196 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1147 = v1196[i$$14]
          }
          var v725 = "(.{" + (v1147.start - 1) + "})\\B(.{";
          var v1148 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1095 = v1148[i$$14]
          }
          var v1011 = v1095.stop;
          var v1149 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1096 = v1149[i$$14]
          }
          re$$3 = v725 + (v1011 - v1096.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v2)
        }else {
          var v1150 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1097 = v1150[i$$14]
          }
          var v1013 = v1097.stop;
          var v1151 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1098 = v1151[i$$14]
          }
          re$$3 = "(.{" + (v1013 - v1098.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v3)
        }
      }
      i$$14 = i$$14 + 1;
      v397 = i$$14 < this.ranges.length
    }
    if(this.strand == "reverse") {
      var v398 = outputWindow.document;
      JAM.call(v398.write, v398, [reverse(complement(addReturns(sequence$$20))) + "\n\n"])
    }else {
      var v400 = outputWindow.document;
      JAM.call(v400.write, v400, [addReturns(sequence$$20) + "\n\n"])
    }
    return true
  }
  if(this.type == "lowercased") {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$14 = 0;
    var v408 = i$$14 < this.ranges.length;
    for(;v408;) {
      var v1016 = this.ranges;
      introspect(JAM.policy.p5) {
        var v901 = v1016[i$$14]
      }
      if(JAM.call(v901.getSequence, v901, [sequence$$20]) != "") {
        var v1017 = this.ranges;
        introspect(JAM.policy.p5) {
          var v902 = v1017[i$$14]
        }
        if(v902.start > 1) {
          var v1197 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1152 = v1197[i$$14]
          }
          var v736 = "(.{" + (v1152.start - 1) + "})\\B(.{";
          var v1153 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1100 = v1153[i$$14]
          }
          var v1019 = v1100.stop;
          var v1154 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1101 = v1154[i$$14]
          }
          re$$3 = v736 + (v1019 - v1101.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v4)
        }else {
          var v1155 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1102 = v1155[i$$14]
          }
          var v1021 = v1102.stop;
          var v1156 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1103 = v1156[i$$14]
          }
          re$$3 = "(.{" + (v1021 - v1103.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v5)
        }
      }
      i$$14 = i$$14 + 1;
      v408 = i$$14 < this.ranges.length
    }
    if(this.strand == "reverse") {
      var v409 = outputWindow.document;
      JAM.call(v409.write, v409, [reverse(complement(addReturns(sequence$$20))) + "\n\n"])
    }else {
      var v411 = outputWindow.document;
      JAM.call(v411.write, v411, [addReturns(sequence$$20) + "\n\n"])
    }
    return true
  }
  if(this.type == "randomized") {
    i$$14 = 0;
    var v419 = i$$14 < this.ranges.length;
    for(;v419;) {
      var v1024 = this.ranges;
      introspect(JAM.policy.p5) {
        var v909 = v1024[i$$14]
      }
      if(JAM.call(v909.getSequence, v909, [sequence$$20]) != "") {
        var v1025 = this.ranges;
        introspect(JAM.policy.p5) {
          var v910 = v1025[i$$14]
        }
        if(v910.start > 1) {
          var v1198 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1157 = v1198[i$$14]
          }
          var v747 = "(.{" + (v1157.start - 1) + "})\\B(.{";
          var v1158 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1105 = v1158[i$$14]
          }
          var v1027 = v1105.stop;
          var v1159 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1106 = v1159[i$$14]
          }
          re$$3 = v747 + (v1027 - v1106.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v6)
        }else {
          var v1160 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1107 = v1160[i$$14]
          }
          var v1029 = v1107.stop;
          var v1161 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1108 = v1161[i$$14]
          }
          re$$3 = "(.{" + (v1029 - v1108.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v7)
        }
      }
      i$$14 = i$$14 + 1;
      v419 = i$$14 < this.ranges.length
    }
    if(this.strand == "reverse") {
      var v420 = outputWindow.document;
      JAM.call(v420.write, v420, [reverse(complement(addReturns(sequence$$20))) + "\n\n"])
    }else {
      var v422 = outputWindow.document;
      JAM.call(v422.write, v422, [addReturns(sequence$$20) + "\n\n"])
    }
    return true
  }
  if(this.type == "preserved") {
    var randomSequence = getRandomSequence(["g", "a", "c", "t"], sequence$$20.length);
    i$$14 = 0;
    var v432 = i$$14 < this.ranges.length;
    for(;v432;) {
      var v1032 = this.ranges;
      introspect(JAM.policy.p5) {
        var v917 = v1032[i$$14]
      }
      if(JAM.call(v917.getSequence, v917, [sequence$$20]) != "") {
        var v1033 = this.ranges;
        introspect(JAM.policy.p5) {
          var v918 = v1033[i$$14]
        }
        if(v918.start > 1) {
          var v1199 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1162 = v1199[i$$14]
          }
          var v758 = "(.{" + (v1162.start - 1) + "})\\B(.{";
          var v1163 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1110 = v1163[i$$14]
          }
          var v1035 = v1110.stop;
          var v1164 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1111 = v1164[i$$14]
          }
          re$$3 = v758 + (v1035 - v1111.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v8)
        }else {
          var v1165 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1112 = v1165[i$$14]
          }
          var v1037 = v1112.stop;
          var v1166 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1113 = v1166[i$$14]
          }
          re$$3 = "(.{" + (v1037 - v1113.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v9)
        }
      }
      i$$14 = i$$14 + 1;
      v432 = i$$14 < this.ranges.length
    }
    if(this.strand == "reverse") {
      var v433 = outputWindow.document;
      JAM.call(v433.write, v433, [reverse(complement(addReturns(randomSequence))) + "\n\n"])
    }else {
      var v435 = outputWindow.document;
      JAM.call(v435.write, v435, [addReturns(randomSequence) + "\n\n"])
    }
    return true
  }
  return
}
function RangeGroup(strand$$1, type$$25) {
  this.strand = strand$$1;
  this.type = type$$25;
  var v1295 = new Array;
  this.ranges = v1295;
  return
}
new Range(0, 0);
Range.prototype.getSequence = getSequence;
Range.prototype.getTitle = getTitle;
new RangeGroup("", "");
RangeGroup.prototype.addRange = addRange;
RangeGroup.prototype.writeRanges = writeRanges;
JAM.set(document, "onload", v10);
JAM.set(document.getElementById("submitbtn"), "onclick", v11);
JAM.set(document.getElementById("clearbtn"), "onclick", v12);

