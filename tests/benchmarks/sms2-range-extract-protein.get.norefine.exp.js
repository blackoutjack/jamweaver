// sms2-range-extract-protein.js
function v12() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[1].value = " ";
  return
}
function v11() {
  try {
    rangeExtract(document)
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
  var v20 = i$$1 < arrayOfTitles.length;
  for(;v20;) {
    introspect(JAM.policy.p5) {
      var v842 = arrayOfTitles[i$$1]
    }
    var v410 = v842.search(/\S/) == -1;
    if(!v410) {
      introspect(JAM.policy.p5) {
        var v937 = arrayOfSequences[i$$1]
      }
      var v703 = v937.search(/\S/) == -1;
      if(!v703) {
        introspect(JAM.policy.p5) {
          var v938 = arrayOfSequences[i$$1]
        }
        v703 = v938.length != lengthOfAlign
      }
      v410 = v703
    }
    if(v410) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v20 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v412 = codonTable.search(/AmAcid/) == -1;
  if(!v412) {
    var v706 = codonTable.search(/Codon/) == -1;
    if(!v706) {
      var v847 = codonTable.search(/Number/) == -1;
      if(!v847) {
        var v940 = codonTable.search(/\/1000/) == -1;
        if(!v940) {
          v940 = codonTable.search(/Fraction\s*\.\./) == -1
        }
        v847 = v940
      }
      v706 = v847
    }
    v412 = v706
  }
  if(v412) {
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
  var v25 = z$$2 < arrayOfPatterns.length;
  for(;v25;) {
    introspect(JAM.policy.p5) {
      var v709 = arrayOfPatterns[z$$2]
    }
    if(v709.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v710 = arrayOfPatterns[z$$2]
    }
    if(moreExpressionCheck(v710) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    v25 = z$$2 < arrayOfPatterns.length
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v34 = j < arrayOfPatterns.length;
  for(;v34;) {
    var v28 = geneticCodeMatchExp;
    var v29 = j;
    introspect(JAM.policy.p5) {
      var v849 = arrayOfPatterns[j]
    }
    var v419 = v849.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1112 = eval("introspect(JAM.policy.pFull) { " + v419 + " }")
    }else {
      var v1112 = JAM.call(eval, null, [v419])
    }
    v28[v29] = v1112;
    var v30 = geneticCodeMatchResult;
    var v31 = j;
    introspect(JAM.policy.p5) {
      var v712 = arrayOfPatterns[j]
    }
    var v1113 = v712.match(/=[a-zA-Z\*]/).toString();
    v30[v31] = v1113;
    var v32 = geneticCodeMatchResult;
    var v33 = j;
    introspect(JAM.policy.p5) {
      var v421 = geneticCodeMatchResult[j]
    }
    var v1114 = v421.replace(/=/g, "");
    v32[v33] = v1114;
    j = j + 1;
    v34 = j < arrayOfPatterns.length
  }
  var i$$2 = 0;
  var v41 = i$$2 <= testSequence.length - 3;
  for(;v41;) {
    codon = testSequence.substring(i$$2, i$$2 + 3);
    j = 0;
    var v39 = j < geneticCodeMatchExp.length;
    for(;v39;) {
      introspect(JAM.policy.p5) {
        var v714 = geneticCodeMatchExp[j]
      }
      if(codon.search(v714) != -1) {
        if(oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      v39 = j < geneticCodeMatchExp.length
    }
    if(oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v41 = i$$2 <= testSequence.length - 3
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v43 = z$$3 < arrayOfPatterns$$1.length;
  for(;v43;) {
    introspect(JAM.policy.p5) {
      var v716 = arrayOfPatterns$$1[z$$3]
    }
    if(v716.search(/[^acdefghiklmnpqrstvwyz]/i) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    v43 = z$$3 < arrayOfPatterns$$1.length
  }
  var i$$3 = 0;
  var v47 = i$$3 < arrayOfPatterns$$1.length;
  for(;v47;) {
    introspect(JAM.policy.p5) {
      var v717 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v717 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v46 = j$$1 < arrayOfPatterns$$1.length;
    for(;v46;) {
      introspect(JAM.policy.p5) {
        var v718 = arrayOfPatterns$$1[j$$1]
      }
      if(v718.search(re) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      v46 = j$$1 < arrayOfPatterns$$1.length
    }
    i$$3 = i$$3 + 1;
    v47 = i$$3 < arrayOfPatterns$$1.length
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v50 = z$$4 < arrayOfPatterns$$2.length;
  for(;v50;) {
    introspect(JAM.policy.p5) {
      var v719 = arrayOfPatterns$$2[z$$4]
    }
    if(v719.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v720 = arrayOfPatterns$$2[z$$4]
    }
    if(moreExpressionCheck(v720) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    v50 = z$$4 < arrayOfPatterns$$2.length
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
  var v55 = outputWindow.document;
  JAM.call(v55.write, v55, ["</form>"]);
  return true
}
function closePre() {
  var v56 = outputWindow.document;
  JAM.call(v56.write, v56, ["</div>"]);
  var v57 = outputWindow.document;
  JAM.call(v57.write, v57, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v58 = outputWindow.document;
  JAM.call(v58.write, v58, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v59 = outputWindow.document;
  JAM.call(v59.write, v59, ["</body>\n</html>\n"]);
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
  var v63 = i$$4 < alignArray.length;
  for(;v63;) {
    introspect(JAM.policy.p5) {
      var v722 = alignArray[i$$4]
    }
    if(v722.search(/[^\s]+\s/) == -1) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    v63 = i$$4 < alignArray.length
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
    var v65 = matchArray = re$$1.exec(sequenceData);
    for(;v65;) {
      arrayOfFasta.push(matchArray[0]);
      v65 = matchArray = re$$1.exec(sequenceData)
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
  var v83 = j$$2 < arrayOfPatterns$$3.length;
  for(;v83;) {
    var v81 = geneticCodeMatchExp$$1;
    var v82 = j$$2;
    introspect(JAM.policy.p5) {
      var v851 = arrayOfPatterns$$3[j$$2]
    }
    var v468 = v851.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1115 = eval("introspect(JAM.policy.pFull) { " + v468 + " }")
    }else {
      var v1115 = JAM.call(eval, null, [v468])
    }
    v81[v82] = v1115;
    j$$2 = j$$2 + 1;
    v83 = j$$2 < arrayOfPatterns$$3.length
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v89 = j$$3 < arrayOfPatterns$$4.length;
  for(;v89;) {
    var v85 = geneticCodeMatchResult$$1;
    var v86 = j$$3;
    introspect(JAM.policy.p5) {
      var v724 = arrayOfPatterns$$4[j$$3]
    }
    var v1116 = v724.match(/=[a-zA-Z\*]/).toString();
    v85[v86] = v1116;
    var v87 = geneticCodeMatchResult$$1;
    var v88 = j$$3;
    introspect(JAM.policy.p5) {
      var v472 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1117 = v472.replace(/=/g, "");
    v87[v88] = v1117;
    j$$3 = j$$3 + 1;
    v89 = j$$3 < arrayOfPatterns$$4.length
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
  var v110 = j$$4 < lengthOut;
  for(;v110;) {
    tempNum = Math.floor(Math.random() * components.length);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v110 = j$$4 < lengthOut
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
  var v500 = expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1;
  if(!v500) {
    var v727 = expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1;
    if(!v727) {
      var v853 = expressionToCheck.search(/\[\]/) != -1;
      if(!v853) {
        var v943 = expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1;
        if(!v943) {
          var v999 = expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1;
          if(!v999) {
            var v1034 = expressionToCheck.search(/\|\|/) != -1;
            if(!v1034) {
              var v1053 = expressionToCheck.search(/\/\|/) != -1;
              if(!v1053) {
                var v1065 = expressionToCheck.search(/\|\//) != -1;
                if(!v1065) {
                  var v1075 = expressionToCheck.search(/\[.\]/) != -1;
                  if(!v1075) {
                    var v1084 = expressionToCheck.search(/\</) != -1;
                    if(!v1084) {
                      v1084 = expressionToCheck.search(/\>/) != -1
                    }
                    v1075 = v1084
                  }
                  v1065 = v1075
                }
                v1053 = v1065
              }
              v1034 = v1053
            }
            v999 = v1034
          }
          v943 = v999
        }
        v853 = v943
      }
      v727 = v853
    }
    v500 = v727
  }
  if(v500) {
    return false
  }
  return true
}
function openForm() {
  var v115 = outputWindow.document;
  JAM.call(v115.write, v115, ['<form action="">\n']);
  return true
}
function openPre() {
  var v116 = outputWindow.document;
  JAM.call(v116.write, v116, ["<pre>"]);
  var v117 = outputWindow.document;
  JAM.call(v117.write, v117, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v118 = outputWindow.document;
  JAM.call(v118.write, v118, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.p1), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isColor) {
    var v121 = outputWindow.document;
    JAM.call(v121.write, v121, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"])
  }else {
    var v123 = outputWindow.document;
    JAM.call(v123.write, v123, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v125 = outputWindow.document;
  JAM.call(v125.write, v125, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"]);
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
  var v127 = outputWindow.document;
  JAM.call(v127.write, v127, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isBackground) {
    var v129 = outputWindow.document;
    JAM.call(v129.write, v129, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"])
  }else {
    var v131 = outputWindow.document;
    JAM.call(v131.write, v131, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v133 = outputWindow.document;
  JAM.call(v133.write, v133, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"]);
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
  var v136 = j$$5 < lengthOfColumn;
  for(;v136;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v136 = j$$5 < lengthOfColumn
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
  var v515 = emblFile.search(/ID/) == -1;
  if(!v515) {
    var v738 = emblFile.search(/AC/) == -1;
    if(!v738) {
      var v864 = emblFile.search(/DE/) == -1;
      if(!v864) {
        v864 = emblFile.search(/SQ/) == -1
      }
      v738 = v864
    }
    v515 = v738
  }
  if(v515) {
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
  var v520 = genBankFile.search(/LOCUS/) == -1;
  if(!v520) {
    var v741 = genBankFile.search(/DEFINITION/) == -1;
    if(!v741) {
      var v867 = genBankFile.search(/ACCESSION/) == -1;
      if(!v867) {
        v867 = genBankFile.search(/ORIGIN/) == -1
      }
      v741 = v867
    }
    v520 = v741
  }
  if(v520) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v521 = genBankFile$$1.search(/LOCUS/) == -1;
  if(!v521) {
    var v744 = genBankFile$$1.search(/DEFINITION/) == -1;
    if(!v744) {
      var v870 = genBankFile$$1.search(/ACCESSION/) == -1;
      if(!v870) {
        v870 = genBankFile$$1.search(/ORIGIN/) == -1
      }
      v744 = v870
    }
    v521 = v744
  }
  if(v521) {
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
  var v523 = emblFile$$1.search(/ID/) == -1;
  if(!v523) {
    var v747 = emblFile$$1.search(/AC/) == -1;
    if(!v747) {
      var v873 = emblFile$$1.search(/DE/) == -1;
      if(!v873) {
        v873 = emblFile$$1.search(/SQ/) == -1
      }
      v747 = v873
    }
    v523 = v747
  }
  if(v523) {
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
  var v164 = i$$5 < stopBase;
  for(;v164;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v161 = j$$6 <= basePerLine / groupSize;
    for(;v161;) {
      var v160 = k < groupSize;
      for(;v160;) {
        lineOfText = lineOfText + text$$10.charAt(k + i$$5);
        k = k + 1;
        v160 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v161 = j$$6 <= basePerLine / groupSize
    }
    var v162 = outputWindow.document;
    JAM.call(v162.write, v162, [lineOfText + "\n"]);
    lineOfText = "";
    v164 = i$$5 < stopBase
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
    var v528 = adjustment < 0;
    if(v528) {
      v528 = adjusted >= 0
    }
    if(v528) {
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
  var v198 = i$$6 < stopBase$$2;
  for(;v198;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v174 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for(;v174;) {
      var v169 = k$$1 < groupSize$$2;
      for(;v169;) {
        if(i$$6 + k$$1 >= stopBase$$2) {
          break
        }
        lineOfText$$1 = lineOfText$$1 + text$$12.charAt(k$$1 + i$$6);
        k$$1 = k$$1 + 1;
        v169 = k$$1 < groupSize$$2
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
      v174 = j$$7 <= basePerLine$$2 / groupSize$$2
    }
    if(numberPosition$$1 == "left") {
      var v175 = outputWindow.document;
      JAM.call(v175.write, v175, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"]);
      if(strands$$1 == "two") {
        var v177 = outputWindow.document;
        JAM.call(v177.write, v177, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"]);
        var v179 = outputWindow.document;
        JAM.call(v179.write, v179, ["\n"])
      }
    }else {
      if(numberPosition$$1 == "right") {
        var v181 = outputWindow.document;
        JAM.call(v181.write, v181, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
        if(strands$$1 == "two") {
          var v183 = outputWindow.document;
          JAM.call(v183.write, v183, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
          var v185 = outputWindow.document;
          JAM.call(v185.write, v185, ["\n"])
        }
      }else {
        if(numberPosition$$1 == "above") {
          var v187 = outputWindow.document;
          JAM.call(v187.write, v187, [aboveNum + "\n"]);
          var v189 = outputWindow.document;
          JAM.call(v189.write, v189, [lineOfText$$1 + "\n"]);
          if(strands$$1 == "two") {
            var v191 = outputWindow.document;
            JAM.call(v191.write, v191, [complement(lineOfText$$1) + "\n"]);
            var v193 = outputWindow.document;
            JAM.call(v193.write, v193, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v198 = i$$6 < stopBase$$2
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
  var v219 = i$$7 < stopBase$$3;
  for(;v219;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v207 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for(;v207;) {
      var v202 = k$$2 < groupSize$$3;
      for(;v202;) {
        if(i$$7 + k$$2 >= stopBase$$3) {
          break
        }
        lineOfText$$2 = lineOfText$$2 + text$$13.charAt(k$$2 + i$$7);
        k$$2 = k$$2 + 1;
        v202 = k$$2 < groupSize$$3
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
      v207 = j$$8 <= basePerLine$$3 / groupSize$$3
    }
    if(numberPosition$$2 == "left") {
      var v208 = outputWindow.document;
      JAM.call(v208.write, v208, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"])
    }else {
      if(numberPosition$$2 == "right") {
        var v210 = outputWindow.document;
        JAM.call(v210.write, v210, [lineOfText$$2 + i$$7 + "\n"])
      }else {
        if(numberPosition$$2 == "above") {
          var v212 = outputWindow.document;
          JAM.call(v212.write, v212, [aboveNum$$1 + "\n"]);
          var v214 = outputWindow.document;
          JAM.call(v214.write, v214, [lineOfText$$2 + "\n"])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v219 = i$$7 < stopBase$$3
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
  var v545 = sequence$$13.length <= firstIndexToMutate;
  if(!v545) {
    var v758 = lastIndexToMutate < 0;
    if(!v758) {
      v758 = lastIndexToMutate <= firstIndexToMutate
    }
    v545 = v758
  }
  if(v545) {
    numMut = 0
  }
  var i$$8 = 0;
  var v228 = i$$8 < numMut;
  for(;v228;) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    var v547 = randNum < firstIndexToMutate;
    if(!v547) {
      v547 = randNum > lastIndexToMutate
    }
    if(v547) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v228 = i$$8 < numMut;
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
        var v551 = components$$1[componentsIndex]
      }
      if(v551 != currentChar) {
        needNewChar = false
      }
    }
    var v552 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.p5) {
      var v553 = components$$1[componentsIndex]
    }
    sequence$$13 = v552 + v553 + sequence$$13.substring(randNum + 1, sequence$$13.length);
    i$$8 = i$$8 + 1;
    v228 = i$$8 < numMut
  }
  var v229 = outputWindow.document;
  JAM.call(v229.write, v229, [addReturns(sequence$$13)]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v235 = j$$9 < lengthOut$$1;
  for(;v235;) {
    tempNum$$1 = Math.floor(Math.random() * components$$2.length);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if(sequence$$14.length == 60) {
      var v232 = outputWindow.document;
      JAM.call(v232.write, v232, [sequence$$14 + "\n"]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v235 = j$$9 < lengthOut$$1
  }
  var v236 = outputWindow.document;
  JAM.call(v236.write, v236, [sequence$$14 + "\n"]);
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
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"]);
  var i$$9 = 0;
  var v260 = i$$9 < arrayOfItems.length;
  for(;v260;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p5) {
      var v562 = arrayOfItems[i$$9]
    }
    matchExp = v562.match(/\/.+\//) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.p5) {
      var v880 = arrayOfItems[i$$9]
    }
    cutDistance = parseFloat(v880.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    var v252 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v252;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v564 = matchPosition >= lowerLimit;
      if(v564) {
        v564 = matchPosition < upperLimit
      }
      if(v564) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v252 = matchArray$$1 = matchExp.exec(sequence$$15)
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
    var v258 = outputWindow.document;
    var v1040 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p5) {
      var v1081 = arrayOfItems[i$$9]
    }
    JAM.call(v258.write, v258, [v1040 + v1081.match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v260 = i$$9 < arrayOfItems.length
  }
  var v261 = outputWindow.document;
  JAM.call(v261.write, v261, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v262 = outputWindow.document;
  JAM.call(v262.write, v262, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v263 = outputWindow.document;
  JAM.call(v263.write, v263, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"]);
  var i$$10 = 0;
  var v273 = i$$10 < arrayOfItems$$1.length;
  for(;v273;) {
    var tempNumber = 0;
    introspect(JAM.policy.p5) {
      var v573 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = v573.match(/\/[^\/]+\//) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(sequence$$16.search(matchExp$$1) != -1) {
      tempNumber = sequence$$16.match(matchExp$$1).length
    }
    var percentage = 0;
    var v768 = originalLength + 1;
    introspect(JAM.policy.p5) {
      var v963 = arrayOfItems$$1[i$$10]
    }
    if(v768 - parseFloat(v963.match(/\d+/)) > 0) {
      var v268 = 100 * tempNumber;
      var v576 = originalLength + 1;
      introspect(JAM.policy.p5) {
        var v884 = arrayOfItems$$1[i$$10]
      }
      percentage = v268 / (v576 - parseFloat(v884.match(/\d+/)))
    }
    var v271 = outputWindow.document;
    introspect(JAM.policy.p5) {
      var v1082 = arrayOfItems$$1[i$$10]
    }
    JAM.call(v271.write, v271, ["<tr><td>" + v1082.match(/\([^\(]+\)\b/).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n"]);
    i$$10 = i$$10 + 1;
    v273 = i$$10 < arrayOfItems$$1.length
  }
  var v274 = outputWindow.document;
  JAM.call(v274.write, v274, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v281 = sequence$$17.length > 0;
  for(;v281;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = Math.floor(Math.random() * maxNum$$1);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    tempString2 = sequence$$17.substring(randNum$$1 + 1, sequence$$17.length);
    sequence$$17 = tempString1 + tempString2;
    if(tempSeq.length == 60) {
      var v278 = outputWindow.document;
      JAM.call(v278.write, v278, [tempSeq + "\n"]);
      tempSeq = ""
    }
    v281 = sequence$$17.length > 0
  }
  var v282 = outputWindow.document;
  JAM.call(v282.write, v282, [tempSeq + "\n"]);
  return true
}
function rangeExtract(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  if(testScript() == false) {
    return false
  }
  var v585 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v585) {
    var v774 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
    if(!v774) {
      v774 = checkFormElement(theDocument.forms[0].elements[1]) == false
    }
    v585 = v774
  }
  if(v585) {
    return false
  }
  var arrayOfRanges = theDocument.forms[0].elements[1].value.split(/,/);
  var arrayOfStartAndEnd;
  var i$$11 = 0;
  var v292 = i$$11 < arrayOfRanges.length;
  for(;v292;) {
    introspect(JAM.policy.p5) {
      var v287 = arrayOfRanges[i$$11]
    }
    arrayOfStartAndEnd = v287.split(/\.\./);
    if(arrayOfStartAndEnd.length == 1) {
      matchFound = true;
      ranges.push(new Range(arrayOfStartAndEnd[0], arrayOfStartAndEnd[0]))
    }else {
      if(arrayOfStartAndEnd.length == 2) {
        matchFound = true;
        ranges.push(new Range(arrayOfStartAndEnd[0], arrayOfStartAndEnd[1]))
      }
    }
    i$$11 = i$$11 + 1;
    v292 = i$$11 < arrayOfRanges.length
  }
  if(matchFound == false) {
    alert("No ranges were entered.");
    return false
  }
  openWindow("Range Extractor Protein");
  openPre();
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  i$$11 = 0;
  var v300 = i$$11 < arrayOfFasta$$1.length;
  for(;v300;) {
    introspect(JAM.policy.p5) {
      var v295 = arrayOfFasta$$1[i$$11]
    }
    newProtein = getSequenceFromFasta(v295);
    introspect(JAM.policy.p5) {
      var v296 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v296);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v297 = outputWindow.document;
    JAM.call(v297.write, v297, [getFastaTitleFromTitleAndSequence(title, newProtein)]);
    var v778 = theDocument.forms[0].elements[5].options;
    var v779 = theDocument.forms[0].elements[5].selectedIndex;
    introspect(JAM.policy.p5) {
      var v597 = v778[v779]
    }
    writeSequenceRanges(newProtein, ranges, v597.value);
    i$$11 = i$$11 + 1;
    v300 = i$$11 < arrayOfFasta$$1.length
  }
  closePre();
  closeWindow();
  return true
}
function writeSequenceRanges(sequence$$18, ranges$$1, segmentType) {
  var rangeGroup = new RangeGroup(segmentType);
  var center_base = Math.round(sequence$$18.length / 2);
  var i$$12 = 0;
  var v315 = i$$12 < ranges$$1.length;
  for(;v315;) {
    introspect(JAM.policy.p5) {
      var v302 = ranges$$1[i$$12]
    }
    introspect(JAM.policy.p5) {
      var v894 = ranges$$1[i$$12]
    }
    var v1118 = v894.start.toString().replace(/start|begin/gi, 1);
    v302.start = v1118;
    introspect(JAM.policy.p5) {
      var v303 = ranges$$1[i$$12]
    }
    introspect(JAM.policy.p5) {
      var v895 = ranges$$1[i$$12]
    }
    var v1119 = v895.start.toString().replace(/stop|end/gi, sequence$$18.length);
    v303.start = v1119;
    introspect(JAM.policy.p5) {
      var v304 = ranges$$1[i$$12]
    }
    introspect(JAM.policy.p5) {
      var v896 = ranges$$1[i$$12]
    }
    var v1120 = v896.start.toString().replace(/length/gi, sequence$$18.length);
    v304.start = v1120;
    introspect(JAM.policy.p5) {
      var v305 = ranges$$1[i$$12]
    }
    introspect(JAM.policy.p5) {
      var v897 = ranges$$1[i$$12]
    }
    var v1121 = v897.start.toString().replace(/middle|center|centre/gi, center_base);
    v305.start = v1121;
    introspect(JAM.policy.p5) {
      var v306 = ranges$$1[i$$12]
    }
    introspect(JAM.policy.p5) {
      var v898 = ranges$$1[i$$12]
    }
    var v1122 = v898.stop.toString().replace(/start|begin/gi, 1);
    v306.stop = v1122;
    introspect(JAM.policy.p5) {
      var v307 = ranges$$1[i$$12]
    }
    introspect(JAM.policy.p5) {
      var v899 = ranges$$1[i$$12]
    }
    var v1123 = v899.stop.toString().replace(/stop|end/gi, sequence$$18.length);
    v307.stop = v1123;
    introspect(JAM.policy.p5) {
      var v308 = ranges$$1[i$$12]
    }
    introspect(JAM.policy.p5) {
      var v900 = ranges$$1[i$$12]
    }
    var v1124 = v900.stop.toString().replace(/length/gi, sequence$$18.length);
    v308.stop = v1124;
    introspect(JAM.policy.p5) {
      var v309 = ranges$$1[i$$12]
    }
    introspect(JAM.policy.p5) {
      var v901 = ranges$$1[i$$12]
    }
    var v1125 = v901.stop.toString().replace(/middle|center|centre/gi, center_base);
    v309.stop = v1125;
    try {
      introspect(JAM.policy.p5) {
        var v310 = ranges$$1[i$$12]
      }
      introspect(JAM.policy.p5) {
        var v972 = ranges$$1[i$$12]
      }
      var v788 = v972.start.toString();
      if(JAM.isEval(eval)) {
        var v613 = eval("introspect(JAM.policy.pFull) { " + v788 + " }")
      }else {
        var v613 = JAM.call(eval, null, [v788])
      }
      var v1126 = parseInt(v613);
      v310.start = v1126
    }catch(e$$5) {
      introspect(JAM.policy.p5) {
        var v789 = ranges$$1[i$$12]
      }
      alert("Could not evaluate the following expression: " + v789.start);
      return false
    }
    try {
      introspect(JAM.policy.p5) {
        var v312 = ranges$$1[i$$12]
      }
      introspect(JAM.policy.p5) {
        var v973 = ranges$$1[i$$12]
      }
      var v790 = v973.stop.toString();
      if(JAM.isEval(eval)) {
        var v615 = eval("introspect(JAM.policy.pFull) { " + v790 + " }")
      }else {
        var v615 = JAM.call(eval, null, [v790])
      }
      var v1127 = parseInt(v615);
      v312.stop = v1127
    }catch(e$$6) {
      introspect(JAM.policy.p5) {
        var v791 = ranges$$1[i$$12]
      }
      alert("Could not evaluate the following expression: " + v791.stop);
      return false
    }
    introspect(JAM.policy.p5) {
      var v314 = ranges$$1[i$$12]
    }
    JAM.call(rangeGroup.addRange, rangeGroup, [v314]);
    i$$12 = i$$12 + 1;
    v315 = i$$12 < ranges$$1.length
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
    return"&gt;residue " + this.start
  }else {
    return"&gt;residue " + this.start + " to " + this.stop
  }
  return
}
function Range(start$$4, stop) {
  this.start = start$$4;
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
    return getRandomSequence(["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"], p1$$7.length)
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$18, s$$8) {
    return p1$$6 + getRandomSequence(["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"], p2$$2.length)
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
    var i$$13 = 0;
    var v354 = i$$13 < this.ranges.length;
    for(;v354;) {
      var v905 = this.ranges;
      introspect(JAM.policy.p5) {
        var v803 = v905[i$$13]
      }
      if(JAM.call(v803.getSequence, v803, [sequence$$20]) != "") {
        var v804 = this.ranges;
        introspect(JAM.policy.p5) {
          var v655 = v804[i$$13]
        }
        sequenceArray$$1.push(JAM.call(v655.getSequence, v655, [sequence$$20]))
      }
      i$$13 = i$$13 + 1;
      v354 = i$$13 < this.ranges.length
    }
    var v355 = outputWindow.document;
    JAM.call(v355.write, v355, [addReturns(sequenceArray$$1.join("")) + "\n\n"]);
    return true
  }
  if(this.type == "separate") {
    i$$13 = 0;
    var v363 = i$$13 < this.ranges.length;
    for(;v363;) {
      var v906 = this.ranges;
      introspect(JAM.policy.p5) {
        var v808 = v906[i$$13]
      }
      if(JAM.call(v808.getSequence, v808, [sequence$$20]) != "") {
        var v358 = outputWindow.document;
        var v907 = this.ranges;
        introspect(JAM.policy.p5) {
          var v809 = v907[i$$13]
        }
        JAM.call(v358.write, v358, [v809.getTitle() + "\n"]);
        var v360 = outputWindow.document;
        var v974 = this.ranges;
        introspect(JAM.policy.p5) {
          var v908 = v974[i$$13]
        }
        JAM.call(v360.write, v360, [addReturns(JAM.call(v908.getSequence, v908, [sequence$$20])) + "\n\n"])
      }
      i$$13 = i$$13 + 1;
      v363 = i$$13 < this.ranges.length
    }
    return true
  }
  if(this.type == "uppercased") {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$13 = 0;
    var v369 = i$$13 < this.ranges.length;
    for(;v369;) {
      var v909 = this.ranges;
      introspect(JAM.policy.p5) {
        var v813 = v909[i$$13]
      }
      if(JAM.call(v813.getSequence, v813, [sequence$$20]) != "") {
        var v910 = this.ranges;
        introspect(JAM.policy.p5) {
          var v814 = v910[i$$13]
        }
        if(v814.start > 1) {
          var v1048 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1013 = v1048[i$$13]
          }
          var v668 = "(.{" + (v1013.start - 1) + "})\\B(.{";
          var v1014 = this.ranges;
          introspect(JAM.policy.p5) {
            var v976 = v1014[i$$13]
          }
          var v912 = v976.stop;
          var v1015 = this.ranges;
          introspect(JAM.policy.p5) {
            var v977 = v1015[i$$13]
          }
          re$$3 = v668 + (v912 - v977.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v2)
        }else {
          var v1016 = this.ranges;
          introspect(JAM.policy.p5) {
            var v978 = v1016[i$$13]
          }
          var v914 = v978.stop;
          var v1017 = this.ranges;
          introspect(JAM.policy.p5) {
            var v979 = v1017[i$$13]
          }
          re$$3 = "(.{" + (v914 - v979.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v3)
        }
      }
      i$$13 = i$$13 + 1;
      v369 = i$$13 < this.ranges.length
    }
    var v370 = outputWindow.document;
    JAM.call(v370.write, v370, [addReturns(sequence$$20) + "\n\n"]);
    return true
  }
  if(this.type == "lowercased") {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$13 = 0;
    var v377 = i$$13 < this.ranges.length;
    for(;v377;) {
      var v916 = this.ranges;
      introspect(JAM.policy.p5) {
        var v820 = v916[i$$13]
      }
      if(JAM.call(v820.getSequence, v820, [sequence$$20]) != "") {
        var v917 = this.ranges;
        introspect(JAM.policy.p5) {
          var v821 = v917[i$$13]
        }
        if(v821.start > 1) {
          var v1049 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1018 = v1049[i$$13]
          }
          var v677 = "(.{" + (v1018.start - 1) + "})\\B(.{";
          var v1019 = this.ranges;
          introspect(JAM.policy.p5) {
            var v981 = v1019[i$$13]
          }
          var v919 = v981.stop;
          var v1020 = this.ranges;
          introspect(JAM.policy.p5) {
            var v982 = v1020[i$$13]
          }
          re$$3 = v677 + (v919 - v982.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v4)
        }else {
          var v1021 = this.ranges;
          introspect(JAM.policy.p5) {
            var v983 = v1021[i$$13]
          }
          var v921 = v983.stop;
          var v1022 = this.ranges;
          introspect(JAM.policy.p5) {
            var v984 = v1022[i$$13]
          }
          re$$3 = "(.{" + (v921 - v984.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v5)
        }
      }
      i$$13 = i$$13 + 1;
      v377 = i$$13 < this.ranges.length
    }
    var v378 = outputWindow.document;
    JAM.call(v378.write, v378, [addReturns(sequence$$20) + "\n\n"]);
    return true
  }
  if(this.type == "randomized") {
    i$$13 = 0;
    var v385 = i$$13 < this.ranges.length;
    for(;v385;) {
      var v923 = this.ranges;
      introspect(JAM.policy.p5) {
        var v827 = v923[i$$13]
      }
      if(JAM.call(v827.getSequence, v827, [sequence$$20]) != "") {
        var v924 = this.ranges;
        introspect(JAM.policy.p5) {
          var v828 = v924[i$$13]
        }
        if(v828.start > 1) {
          var v1050 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1023 = v1050[i$$13]
          }
          var v686 = "(.{" + (v1023.start - 1) + "})\\B(.{";
          var v1024 = this.ranges;
          introspect(JAM.policy.p5) {
            var v986 = v1024[i$$13]
          }
          var v926 = v986.stop;
          var v1025 = this.ranges;
          introspect(JAM.policy.p5) {
            var v987 = v1025[i$$13]
          }
          re$$3 = v686 + (v926 - v987.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v6)
        }else {
          var v1026 = this.ranges;
          introspect(JAM.policy.p5) {
            var v988 = v1026[i$$13]
          }
          var v928 = v988.stop;
          var v1027 = this.ranges;
          introspect(JAM.policy.p5) {
            var v989 = v1027[i$$13]
          }
          re$$3 = "(.{" + (v928 - v989.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v7)
        }
      }
      i$$13 = i$$13 + 1;
      v385 = i$$13 < this.ranges.length
    }
    var v386 = outputWindow.document;
    JAM.call(v386.write, v386, [addReturns(sequence$$20) + "\n\n"]);
    return true
  }
  if(this.type == "preserved") {
    var randomSequence = getRandomSequence(["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"], sequence$$20.length);
    i$$13 = 0;
    var v395 = i$$13 < this.ranges.length;
    for(;v395;) {
      var v930 = this.ranges;
      introspect(JAM.policy.p5) {
        var v834 = v930[i$$13]
      }
      if(JAM.call(v834.getSequence, v834, [sequence$$20]) != "") {
        var v931 = this.ranges;
        introspect(JAM.policy.p5) {
          var v835 = v931[i$$13]
        }
        if(v835.start > 1) {
          var v1051 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1028 = v1051[i$$13]
          }
          var v695 = "(.{" + (v1028.start - 1) + "})\\B(.{";
          var v1029 = this.ranges;
          introspect(JAM.policy.p5) {
            var v991 = v1029[i$$13]
          }
          var v933 = v991.stop;
          var v1030 = this.ranges;
          introspect(JAM.policy.p5) {
            var v992 = v1030[i$$13]
          }
          re$$3 = v695 + (v933 - v992.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v8)
        }else {
          var v1031 = this.ranges;
          introspect(JAM.policy.p5) {
            var v993 = v1031[i$$13]
          }
          var v935 = v993.stop;
          var v1032 = this.ranges;
          introspect(JAM.policy.p5) {
            var v994 = v1032[i$$13]
          }
          re$$3 = "(.{" + (v935 - v994.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v9)
        }
      }
      i$$13 = i$$13 + 1;
      v395 = i$$13 < this.ranges.length
    }
    var v396 = outputWindow.document;
    JAM.call(v396.write, v396, [addReturns(randomSequence) + "\n\n"]);
    return true
  }
  return
}
function RangeGroup(type$$25) {
  this.type = type$$25;
  var v1128 = new Array;
  this.ranges = v1128;
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
JAM.set(document.getElementById("clearbtn"), "onclick", v12)
