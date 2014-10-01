// sms2-window-extract-protein.js
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
      var v879 = arrayOfTitles[i$$1]
    }
    var v428 = v879.search(/\S/) == -1;
    if(!v428) {
      introspect(JAM.policy.p5) {
        var v984 = arrayOfSequences[i$$1]
      }
      var v731 = v984.search(/\S/) == -1;
      if(!v731) {
        introspect(JAM.policy.p5) {
          var v985 = arrayOfSequences[i$$1]
        }
        v731 = v985.length != lengthOfAlign
      }
      v428 = v731
    }
    if(v428) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v19 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v430 = codonTable.search(/AmAcid/) == -1;
  if(!v430) {
    var v734 = codonTable.search(/Codon/) == -1;
    if(!v734) {
      var v884 = codonTable.search(/Number/) == -1;
      if(!v884) {
        var v987 = codonTable.search(/\/1000/) == -1;
        if(!v987) {
          v987 = codonTable.search(/Fraction\s*\.\./) == -1
        }
        v884 = v987
      }
      v734 = v884
    }
    v430 = v734
  }
  if(v430) {
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
      var v737 = arrayOfPatterns[z$$2]
    }
    if(v737.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v738 = arrayOfPatterns[z$$2]
    }
    if(moreExpressionCheck(v738) == false) {
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
      var v886 = arrayOfPatterns[j]
    }
    var v437 = v886.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1207 = eval("introspect(JAM.policy.pFull) { " + v437 + " }")
    }else {
      var v1207 = JAM.call(eval, null, [v437])
    }
    v27[v28] = v1207;
    var v29 = geneticCodeMatchResult;
    var v30 = j;
    introspect(JAM.policy.p5) {
      var v740 = arrayOfPatterns[j]
    }
    var v1208 = v740.match(/=[a-zA-Z\*]/).toString();
    v29[v30] = v1208;
    var v31 = geneticCodeMatchResult;
    var v32 = j;
    introspect(JAM.policy.p5) {
      var v439 = geneticCodeMatchResult[j]
    }
    var v1209 = v439.replace(/=/g, "");
    v31[v32] = v1209;
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
        var v742 = geneticCodeMatchExp[j]
      }
      if(codon.search(v742) != -1) {
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
      var v744 = arrayOfPatterns$$1[z$$3]
    }
    if(v744.search(/[^acdefghiklmnpqrstvwyz]/i) != -1) {
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
      var v745 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v745 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v45 = j$$1 < arrayOfPatterns$$1.length;
    for(;v45;) {
      introspect(JAM.policy.p5) {
        var v746 = arrayOfPatterns$$1[j$$1]
      }
      if(v746.search(re) != -1) {
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
      var v747 = arrayOfPatterns$$2[z$$4]
    }
    if(v747.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v748 = arrayOfPatterns$$2[z$$4]
    }
    if(moreExpressionCheck(v748) == false) {
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
      var v750 = alignArray[i$$4]
    }
    if(v750.search(/[^\s]+\s/) == -1) {
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
      var v888 = arrayOfPatterns$$3[j$$2]
    }
    var v486 = v888.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1210 = eval("introspect(JAM.policy.pFull) { " + v486 + " }")
    }else {
      var v1210 = JAM.call(eval, null, [v486])
    }
    v80[v81] = v1210;
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
      var v752 = arrayOfPatterns$$4[j$$3]
    }
    var v1211 = v752.match(/=[a-zA-Z\*]/).toString();
    v84[v85] = v1211;
    var v86 = geneticCodeMatchResult$$1;
    var v87 = j$$3;
    introspect(JAM.policy.p5) {
      var v490 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1212 = v490.replace(/=/g, "");
    v86[v87] = v1212;
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
  var v518 = expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1;
  if(!v518) {
    var v755 = expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1;
    if(!v755) {
      var v890 = expressionToCheck.search(/\[\]/) != -1;
      if(!v890) {
        var v990 = expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1;
        if(!v990) {
          var v1056 = expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1;
          if(!v1056) {
            var v1101 = expressionToCheck.search(/\|\|/) != -1;
            if(!v1101) {
              var v1129 = expressionToCheck.search(/\/\|/) != -1;
              if(!v1129) {
                var v1146 = expressionToCheck.search(/\|\//) != -1;
                if(!v1146) {
                  var v1161 = expressionToCheck.search(/\[.\]/) != -1;
                  if(!v1161) {
                    var v1173 = expressionToCheck.search(/\</) != -1;
                    if(!v1173) {
                      v1173 = expressionToCheck.search(/\>/) != -1
                    }
                    v1161 = v1173
                  }
                  v1146 = v1161
                }
                v1129 = v1146
              }
              v1101 = v1129
            }
            v1056 = v1101
          }
          v990 = v1056
        }
        v890 = v990
      }
      v755 = v890
    }
    v518 = v755
  }
  if(v518) {
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
  var v533 = emblFile.search(/ID/) == -1;
  if(!v533) {
    var v766 = emblFile.search(/AC/) == -1;
    if(!v766) {
      var v901 = emblFile.search(/DE/) == -1;
      if(!v901) {
        v901 = emblFile.search(/SQ/) == -1
      }
      v766 = v901
    }
    v533 = v766
  }
  if(v533) {
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
  var v538 = genBankFile.search(/LOCUS/) == -1;
  if(!v538) {
    var v769 = genBankFile.search(/DEFINITION/) == -1;
    if(!v769) {
      var v904 = genBankFile.search(/ACCESSION/) == -1;
      if(!v904) {
        v904 = genBankFile.search(/ORIGIN/) == -1
      }
      v769 = v904
    }
    v538 = v769
  }
  if(v538) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v539 = genBankFile$$1.search(/LOCUS/) == -1;
  if(!v539) {
    var v772 = genBankFile$$1.search(/DEFINITION/) == -1;
    if(!v772) {
      var v907 = genBankFile$$1.search(/ACCESSION/) == -1;
      if(!v907) {
        v907 = genBankFile$$1.search(/ORIGIN/) == -1
      }
      v772 = v907
    }
    v539 = v772
  }
  if(v539) {
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
  var v541 = emblFile$$1.search(/ID/) == -1;
  if(!v541) {
    var v775 = emblFile$$1.search(/AC/) == -1;
    if(!v775) {
      var v910 = emblFile$$1.search(/DE/) == -1;
      if(!v910) {
        v910 = emblFile$$1.search(/SQ/) == -1
      }
      v775 = v910
    }
    v541 = v775
  }
  if(v541) {
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
    var v546 = adjustment < 0;
    if(v546) {
      v546 = adjusted >= 0
    }
    if(v546) {
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
  var v563 = sequence$$13.length <= firstIndexToMutate;
  if(!v563) {
    var v786 = lastIndexToMutate < 0;
    if(!v786) {
      v786 = lastIndexToMutate <= firstIndexToMutate
    }
    v563 = v786
  }
  if(v563) {
    numMut = 0
  }
  var i$$8 = 0;
  var v227 = i$$8 < numMut;
  for(;v227;) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    var v565 = randNum < firstIndexToMutate;
    if(!v565) {
      v565 = randNum > lastIndexToMutate
    }
    if(v565) {
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
        var v569 = components$$1[componentsIndex]
      }
      if(v569 != currentChar) {
        needNewChar = false
      }
    }
    var v570 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.p5) {
      var v571 = components$$1[componentsIndex]
    }
    sequence$$13 = v570 + v571 + sequence$$13.substring(randNum + 1, sequence$$13.length);
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
      var v580 = arrayOfItems[i$$9]
    }
    matchExp = v580.match(/\/.+\//) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.p5) {
      var v917 = arrayOfItems[i$$9]
    }
    cutDistance = parseFloat(v917.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    var v251 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v251;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v582 = matchPosition >= lowerLimit;
      if(v582) {
        v582 = matchPosition < upperLimit
      }
      if(v582) {
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
    var v1107 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p5) {
      var v1167 = arrayOfItems[i$$9]
    }
    JAM.call(v257.write, v257, [v1107 + v1167.match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"]);
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
      var v591 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = v591.match(/\/[^\/]+\//) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(sequence$$16.search(matchExp$$1) != -1) {
      tempNumber = sequence$$16.match(matchExp$$1).length
    }
    var percentage = 0;
    var v796 = originalLength + 1;
    introspect(JAM.policy.p5) {
      var v1010 = arrayOfItems$$1[i$$10]
    }
    if(v796 - parseFloat(v1010.match(/\d+/)) > 0) {
      var v267 = 100 * tempNumber;
      var v594 = originalLength + 1;
      introspect(JAM.policy.p5) {
        var v921 = arrayOfItems$$1[i$$10]
      }
      percentage = v267 / (v594 - parseFloat(v921.match(/\d+/)))
    }
    var v270 = outputWindow.document;
    introspect(JAM.policy.p5) {
      var v1168 = arrayOfItems$$1[i$$10]
    }
    JAM.call(v270.write, v270, ["<tr><td>" + v1168.match(/\([^\(]+\)\b/).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n"]);
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
  var v603 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v603) {
    var v802 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
    if(!v802) {
      var v925 = checkFormElement(theDocument.forms[0].elements[1]) == false;
      if(!v925) {
        var v1015 = checkFormElement(theDocument.forms[0].elements[3]) == false;
        if(!v1015) {
          var v1069 = verifyMaxDigits(theDocument.forms[0].elements[1].value.replace(/[^\d]/g, ""), maxInput$$3) == false;
          if(!v1069) {
            v1069 = verifyMaxDigits(theDocument.forms[0].elements[3].value.replace(/[^\d]/g, ""), maxInput$$3) == false
          }
          v1015 = v1069
        }
        v925 = v1015
      }
      v802 = v925
    }
    v603 = v802
  }
  if(v603) {
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
  openWindow("Window Extractor Protein");
  openPre();
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var i$$11 = 0;
  var v302 = i$$11 < arrayOfFasta$$1.length;
  for(;v302;) {
    introspect(JAM.policy.p5) {
      var v297 = arrayOfFasta$$1[i$$11]
    }
    newProtein = getSequenceFromFasta(v297);
    introspect(JAM.policy.p5) {
      var v298 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v298);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v299 = outputWindow.document;
    JAM.call(v299.write, v299, [getFastaTitleFromTitleAndSequence(title, newProtein)]);
    var v809 = theDocument.forms[0].elements[7].options;
    var v810 = theDocument.forms[0].elements[7].selectedIndex;
    introspect(JAM.policy.p5) {
      var v611 = v809[v810]
    }
    writeSequenceRanges(newProtein, ranges, v611.value);
    i$$11 = i$$11 + 1;
    v302 = i$$11 < arrayOfFasta$$1.length
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
  var v614 = checkFormElement(theDocument$$1.forms[0].elements[0]) == false;
  if(!v614) {
    var v812 = checkSequenceLength(theDocument$$1.forms[0].elements[0].value, maxInput$$4) == false;
    if(!v812) {
      v812 = checkFormElement(theDocument$$1.forms[0].elements[1]) == false
    }
    v614 = v812
  }
  if(v614) {
    return false
  }
  var arrayOfRanges = theDocument$$1.forms[0].elements[1].value.split(/,/);
  var arrayOfStartAndEnd;
  var i$$12 = 0;
  var v311 = i$$12 < arrayOfRanges.length;
  for(;v311;) {
    introspect(JAM.policy.p5) {
      var v306 = arrayOfRanges[i$$12]
    }
    arrayOfStartAndEnd = v306.split(/\.\./);
    if(arrayOfStartAndEnd.length == 1) {
      matchFound$$1 = true;
      ranges$$1.push(new Range(arrayOfStartAndEnd[0], arrayOfStartAndEnd[0]))
    }else {
      if(arrayOfStartAndEnd.length == 2) {
        matchFound$$1 = true;
        ranges$$1.push(new Range(arrayOfStartAndEnd[0], arrayOfStartAndEnd[1]))
      }
    }
    i$$12 = i$$12 + 1;
    v311 = i$$12 < arrayOfRanges.length
  }
  if(matchFound$$1 == false) {
    alert("No ranges were entered.");
    return false
  }
  openWindow("Range Extractor Protein");
  openPre();
  var arrayOfFasta$$2 = getArrayOfFasta(theDocument$$1.forms[0].elements[0].value);
  i$$12 = 0;
  var v319 = i$$12 < arrayOfFasta$$2.length;
  for(;v319;) {
    introspect(JAM.policy.p5) {
      var v314 = arrayOfFasta$$2[i$$12]
    }
    newProtein = getSequenceFromFasta(v314);
    introspect(JAM.policy.p5) {
      var v315 = arrayOfFasta$$2[i$$12]
    }
    title = getTitleFromFasta(v315);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v316 = outputWindow.document;
    JAM.call(v316.write, v316, [getFastaTitleFromTitleAndSequence(title, newProtein)]);
    var v816 = theDocument$$1.forms[0].elements[5].options;
    var v817 = theDocument$$1.forms[0].elements[5].selectedIndex;
    introspect(JAM.policy.p5) {
      var v626 = v816[v817]
    }
    writeSequenceRanges(newProtein, ranges$$1, v626.value);
    i$$12 = i$$12 + 1;
    v319 = i$$12 < arrayOfFasta$$2.length
  }
  closePre();
  closeWindow();
  return true
}
function writeSequenceRanges(sequence$$18, ranges$$2, segmentType) {
  var rangeGroup = new RangeGroup(segmentType);
  var center_base = Math.round(sequence$$18.length / 2);
  var i$$13 = 0;
  var v334 = i$$13 < ranges$$2.length;
  for(;v334;) {
    introspect(JAM.policy.p5) {
      var v321 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v941 = ranges$$2[i$$13]
    }
    var v1213 = v941.start.toString().replace(/start|begin/gi, 1);
    v321.start = v1213;
    introspect(JAM.policy.p5) {
      var v322 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v942 = ranges$$2[i$$13]
    }
    var v1214 = v942.start.toString().replace(/stop|end/gi, sequence$$18.length);
    v322.start = v1214;
    introspect(JAM.policy.p5) {
      var v323 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v943 = ranges$$2[i$$13]
    }
    var v1215 = v943.start.toString().replace(/length/gi, sequence$$18.length);
    v323.start = v1215;
    introspect(JAM.policy.p5) {
      var v324 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v944 = ranges$$2[i$$13]
    }
    var v1216 = v944.start.toString().replace(/middle|center|centre/gi, center_base);
    v324.start = v1216;
    introspect(JAM.policy.p5) {
      var v325 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v945 = ranges$$2[i$$13]
    }
    var v1217 = v945.stop.toString().replace(/start|begin/gi, 1);
    v325.stop = v1217;
    introspect(JAM.policy.p5) {
      var v326 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v946 = ranges$$2[i$$13]
    }
    var v1218 = v946.stop.toString().replace(/stop|end/gi, sequence$$18.length);
    v326.stop = v1218;
    introspect(JAM.policy.p5) {
      var v327 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v947 = ranges$$2[i$$13]
    }
    var v1219 = v947.stop.toString().replace(/length/gi, sequence$$18.length);
    v327.stop = v1219;
    introspect(JAM.policy.p5) {
      var v328 = ranges$$2[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v948 = ranges$$2[i$$13]
    }
    var v1220 = v948.stop.toString().replace(/middle|center|centre/gi, center_base);
    v328.stop = v1220;
    try {
      introspect(JAM.policy.p5) {
        var v329 = ranges$$2[i$$13]
      }
      introspect(JAM.policy.p5) {
        var v1029 = ranges$$2[i$$13]
      }
      var v826 = v1029.start.toString();
      if(JAM.isEval(eval)) {
        var v642 = eval("introspect(JAM.policy.pFull) { " + v826 + " }")
      }else {
        var v642 = JAM.call(eval, null, [v826])
      }
      var v1221 = parseInt(v642);
      v329.start = v1221
    }catch(e$$5) {
      introspect(JAM.policy.p5) {
        var v827 = ranges$$2[i$$13]
      }
      alert("Could not evaluate the following expression: " + v827.start);
      return false
    }
    try {
      introspect(JAM.policy.p5) {
        var v331 = ranges$$2[i$$13]
      }
      introspect(JAM.policy.p5) {
        var v1030 = ranges$$2[i$$13]
      }
      var v828 = v1030.stop.toString();
      if(JAM.isEval(eval)) {
        var v644 = eval("introspect(JAM.policy.pFull) { " + v828 + " }")
      }else {
        var v644 = JAM.call(eval, null, [v828])
      }
      var v1222 = parseInt(v644);
      v331.stop = v1222
    }catch(e$$6) {
      introspect(JAM.policy.p5) {
        var v829 = ranges$$2[i$$13]
      }
      alert("Could not evaluate the following expression: " + v829.stop);
      return false
    }
    introspect(JAM.policy.p5) {
      var v333 = ranges$$2[i$$13]
    }
    JAM.call(rangeGroup.addRange, rangeGroup, [v333]);
    i$$13 = i$$13 + 1;
    v334 = i$$13 < ranges$$2.length
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
    var i$$14 = 0;
    var v373 = i$$14 < this.ranges.length;
    for(;v373;) {
      var v952 = this.ranges;
      introspect(JAM.policy.p5) {
        var v841 = v952[i$$14]
      }
      if(JAM.call(v841.getSequence, v841, [sequence$$20]) != "") {
        var v842 = this.ranges;
        introspect(JAM.policy.p5) {
          var v684 = v842[i$$14]
        }
        sequenceArray$$1.push(JAM.call(v684.getSequence, v684, [sequence$$20]))
      }
      i$$14 = i$$14 + 1;
      v373 = i$$14 < this.ranges.length
    }
    var v374 = outputWindow.document;
    JAM.call(v374.write, v374, [addReturns(sequenceArray$$1.join("")) + "\n\n"]);
    return true
  }
  if(this.type == "separate") {
    i$$14 = 0;
    var v382 = i$$14 < this.ranges.length;
    for(;v382;) {
      var v953 = this.ranges;
      introspect(JAM.policy.p5) {
        var v846 = v953[i$$14]
      }
      if(JAM.call(v846.getSequence, v846, [sequence$$20]) != "") {
        var v377 = outputWindow.document;
        var v954 = this.ranges;
        introspect(JAM.policy.p5) {
          var v847 = v954[i$$14]
        }
        JAM.call(v377.write, v377, [v847.getTitle() + "\n"]);
        var v379 = outputWindow.document;
        var v1031 = this.ranges;
        introspect(JAM.policy.p5) {
          var v955 = v1031[i$$14]
        }
        JAM.call(v379.write, v379, [addReturns(JAM.call(v955.getSequence, v955, [sequence$$20])) + "\n\n"])
      }
      i$$14 = i$$14 + 1;
      v382 = i$$14 < this.ranges.length
    }
    return true
  }
  if(this.type == "uppercased") {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$14 = 0;
    var v388 = i$$14 < this.ranges.length;
    for(;v388;) {
      var v956 = this.ranges;
      introspect(JAM.policy.p5) {
        var v851 = v956[i$$14]
      }
      if(JAM.call(v851.getSequence, v851, [sequence$$20]) != "") {
        var v957 = this.ranges;
        introspect(JAM.policy.p5) {
          var v852 = v957[i$$14]
        }
        if(v852.start > 1) {
          var v1124 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1080 = v1124[i$$14]
          }
          var v697 = "(.{" + (v1080.start - 1) + "})\\B(.{";
          var v1081 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1033 = v1081[i$$14]
          }
          var v959 = v1033.stop;
          var v1082 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1034 = v1082[i$$14]
          }
          re$$3 = v697 + (v959 - v1034.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v2)
        }else {
          var v1083 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1035 = v1083[i$$14]
          }
          var v961 = v1035.stop;
          var v1084 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1036 = v1084[i$$14]
          }
          re$$3 = "(.{" + (v961 - v1036.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v3)
        }
      }
      i$$14 = i$$14 + 1;
      v388 = i$$14 < this.ranges.length
    }
    var v389 = outputWindow.document;
    JAM.call(v389.write, v389, [addReturns(sequence$$20) + "\n\n"]);
    return true
  }
  if(this.type == "lowercased") {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$14 = 0;
    var v396 = i$$14 < this.ranges.length;
    for(;v396;) {
      var v963 = this.ranges;
      introspect(JAM.policy.p5) {
        var v858 = v963[i$$14]
      }
      if(JAM.call(v858.getSequence, v858, [sequence$$20]) != "") {
        var v964 = this.ranges;
        introspect(JAM.policy.p5) {
          var v859 = v964[i$$14]
        }
        if(v859.start > 1) {
          var v1125 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1085 = v1125[i$$14]
          }
          var v706 = "(.{" + (v1085.start - 1) + "})\\B(.{";
          var v1086 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1038 = v1086[i$$14]
          }
          var v966 = v1038.stop;
          var v1087 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1039 = v1087[i$$14]
          }
          re$$3 = v706 + (v966 - v1039.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v4)
        }else {
          var v1088 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1040 = v1088[i$$14]
          }
          var v968 = v1040.stop;
          var v1089 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1041 = v1089[i$$14]
          }
          re$$3 = "(.{" + (v968 - v1041.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v5)
        }
      }
      i$$14 = i$$14 + 1;
      v396 = i$$14 < this.ranges.length
    }
    var v397 = outputWindow.document;
    JAM.call(v397.write, v397, [addReturns(sequence$$20) + "\n\n"]);
    return true
  }
  if(this.type == "randomized") {
    i$$14 = 0;
    var v404 = i$$14 < this.ranges.length;
    for(;v404;) {
      var v970 = this.ranges;
      introspect(JAM.policy.p5) {
        var v865 = v970[i$$14]
      }
      if(JAM.call(v865.getSequence, v865, [sequence$$20]) != "") {
        var v971 = this.ranges;
        introspect(JAM.policy.p5) {
          var v866 = v971[i$$14]
        }
        if(v866.start > 1) {
          var v1126 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1090 = v1126[i$$14]
          }
          var v715 = "(.{" + (v1090.start - 1) + "})\\B(.{";
          var v1091 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1043 = v1091[i$$14]
          }
          var v973 = v1043.stop;
          var v1092 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1044 = v1092[i$$14]
          }
          re$$3 = v715 + (v973 - v1044.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v6)
        }else {
          var v1093 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1045 = v1093[i$$14]
          }
          var v975 = v1045.stop;
          var v1094 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1046 = v1094[i$$14]
          }
          re$$3 = "(.{" + (v975 - v1046.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v7)
        }
      }
      i$$14 = i$$14 + 1;
      v404 = i$$14 < this.ranges.length
    }
    var v405 = outputWindow.document;
    JAM.call(v405.write, v405, [addReturns(sequence$$20) + "\n\n"]);
    return true
  }
  if(this.type == "preserved") {
    var randomSequence = getRandomSequence(["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"], sequence$$20.length);
    i$$14 = 0;
    var v414 = i$$14 < this.ranges.length;
    for(;v414;) {
      var v977 = this.ranges;
      introspect(JAM.policy.p5) {
        var v872 = v977[i$$14]
      }
      if(JAM.call(v872.getSequence, v872, [sequence$$20]) != "") {
        var v978 = this.ranges;
        introspect(JAM.policy.p5) {
          var v873 = v978[i$$14]
        }
        if(v873.start > 1) {
          var v1127 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1095 = v1127[i$$14]
          }
          var v724 = "(.{" + (v1095.start - 1) + "})\\B(.{";
          var v1096 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1048 = v1096[i$$14]
          }
          var v980 = v1048.stop;
          var v1097 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1049 = v1097[i$$14]
          }
          re$$3 = v724 + (v980 - v1049.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v8)
        }else {
          var v1098 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1050 = v1098[i$$14]
          }
          var v982 = v1050.stop;
          var v1099 = this.ranges;
          introspect(JAM.policy.p5) {
            var v1051 = v1099[i$$14]
          }
          re$$3 = "(.{" + (v982 - v1051.start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v9)
        }
      }
      i$$14 = i$$14 + 1;
      v414 = i$$14 < this.ranges.length
    }
    var v415 = outputWindow.document;
    JAM.call(v415.write, v415, [addReturns(randomSequence) + "\n\n"]);
    return true
  }
  return
}
function RangeGroup(type$$25) {
  this.type = type$$25;
  var v1223 = new Array;
  this.ranges = v1223;
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
