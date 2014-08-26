function v7() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return
}
function v6() {
  try {
    revTrans(document)
  }catch(e$$6) {
    alert("The following error was encountered: " + e$$6)
  }
  return
}
function v5() {
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
  var v15 = i$$1 < arrayOfTitles.length;
  for(;v15;) {
    introspect(JAM.policy.p5) {
      var v863 = arrayOfTitles[i$$1]
    }
    var v437 = v863.search(/\S/) == -1;
    if(!v437) {
      introspect(JAM.policy.p5) {
        var v956 = arrayOfSequences[i$$1]
      }
      var v712 = v956.search(/\S/) == -1;
      if(!v712) {
        introspect(JAM.policy.p5) {
          var v957 = arrayOfSequences[i$$1]
        }
        v712 = v957.length != lengthOfAlign
      }
      v437 = v712
    }
    if(v437) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v15 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v439 = codonTable.search(/AmAcid/) == -1;
  if(!v439) {
    var v715 = codonTable.search(/Codon/) == -1;
    if(!v715) {
      var v868 = codonTable.search(/Number/) == -1;
      if(!v868) {
        var v959 = codonTable.search(/\/1000/) == -1;
        if(!v959) {
          v959 = codonTable.search(/Fraction\s*\.\./) == -1
        }
        v868 = v959
      }
      v715 = v868
    }
    v439 = v715
  }
  if(v439) {
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
  var v20 = z$$2 < arrayOfPatterns.length;
  for(;v20;) {
    introspect(JAM.policy.p5) {
      var v718 = arrayOfPatterns[z$$2]
    }
    if(v718.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v719 = arrayOfPatterns[z$$2]
    }
    if(moreExpressionCheck(v719) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    v20 = z$$2 < arrayOfPatterns.length
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v29 = j < arrayOfPatterns.length;
  for(;v29;) {
    var v23 = geneticCodeMatchExp;
    var v24 = j;
    introspect(JAM.policy.p5) {
      var v870 = arrayOfPatterns[j]
    }
    var v446 = v870.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1130 = eval("introspect(JAM.policy.pFull) { " + v446 + " }")
    }else {
      var v1130 = JAM.call(eval, null, [v446])
    }
    v23[v24] = v1130;
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    introspect(JAM.policy.p5) {
      var v721 = arrayOfPatterns[j]
    }
    var v1131 = v721.match(/=[a-zA-Z\*]/).toString();
    v25[v26] = v1131;
    var v27 = geneticCodeMatchResult;
    var v28 = j;
    introspect(JAM.policy.p5) {
      var v448 = geneticCodeMatchResult[j]
    }
    var v1132 = v448.replace(/=/g, "");
    v27[v28] = v1132;
    j = j + 1;
    v29 = j < arrayOfPatterns.length
  }
  var i$$2 = 0;
  var v36 = i$$2 <= testSequence.length - 3;
  for(;v36;) {
    codon = testSequence.substring(i$$2, i$$2 + 3);
    j = 0;
    var v34 = j < geneticCodeMatchExp.length;
    for(;v34;) {
      introspect(JAM.policy.p5) {
        var v723 = geneticCodeMatchExp[j]
      }
      if(codon.search(v723) != -1) {
        if(oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      v34 = j < geneticCodeMatchExp.length
    }
    if(oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v36 = i$$2 <= testSequence.length - 3
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v38 = z$$3 < arrayOfPatterns$$1.length;
  for(;v38;) {
    introspect(JAM.policy.p5) {
      var v725 = arrayOfPatterns$$1[z$$3]
    }
    if(v725.search(/[^acdefghiklmnpqrstvwyz]/i) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    v38 = z$$3 < arrayOfPatterns$$1.length
  }
  var i$$3 = 0;
  var v42 = i$$3 < arrayOfPatterns$$1.length;
  for(;v42;) {
    introspect(JAM.policy.p5) {
      var v726 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v726 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v41 = j$$1 < arrayOfPatterns$$1.length;
    for(;v41;) {
      introspect(JAM.policy.p5) {
        var v727 = arrayOfPatterns$$1[j$$1]
      }
      if(v727.search(re) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      v41 = j$$1 < arrayOfPatterns$$1.length
    }
    i$$3 = i$$3 + 1;
    v42 = i$$3 < arrayOfPatterns$$1.length
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v45 = z$$4 < arrayOfPatterns$$2.length;
  for(;v45;) {
    introspect(JAM.policy.p5) {
      var v728 = arrayOfPatterns$$2[z$$4]
    }
    if(v728.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v729 = arrayOfPatterns$$2[z$$4]
    }
    if(moreExpressionCheck(v729) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    v45 = z$$4 < arrayOfPatterns$$2.length
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
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</form>"]);
  return true
}
function closePre() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</div>"]);
  var v52 = outputWindow.document;
  JAM.call(v52.write, v52, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v53 = outputWindow.document;
  JAM.call(v53.write, v53, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v54 = outputWindow.document;
  JAM.call(v54.write, v54, ["</body>\n</html>\n"]);
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
  var v58 = i$$4 < alignArray.length;
  for(;v58;) {
    introspect(JAM.policy.p5) {
      var v731 = alignArray[i$$4]
    }
    if(v731.search(/[^\s]+\s/) == -1) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    v58 = i$$4 < alignArray.length
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
    var v60 = matchArray = re$$1.exec(sequenceData);
    for(;v60;) {
      arrayOfFasta.push(matchArray[0]);
      v60 = matchArray = re$$1.exec(sequenceData)
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
  var v78 = j$$2 < arrayOfPatterns$$3.length;
  for(;v78;) {
    var v76 = geneticCodeMatchExp$$1;
    var v77 = j$$2;
    introspect(JAM.policy.p5) {
      var v872 = arrayOfPatterns$$3[j$$2]
    }
    var v495 = v872.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1133 = eval("introspect(JAM.policy.pFull) { " + v495 + " }")
    }else {
      var v1133 = JAM.call(eval, null, [v495])
    }
    v76[v77] = v1133;
    j$$2 = j$$2 + 1;
    v78 = j$$2 < arrayOfPatterns$$3.length
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v84 = j$$3 < arrayOfPatterns$$4.length;
  for(;v84;) {
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    introspect(JAM.policy.p5) {
      var v733 = arrayOfPatterns$$4[j$$3]
    }
    var v1134 = v733.match(/=[a-zA-Z\*]/).toString();
    v80[v81] = v1134;
    var v82 = geneticCodeMatchResult$$1;
    var v83 = j$$3;
    introspect(JAM.policy.p5) {
      var v499 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1135 = v499.replace(/=/g, "");
    v82[v83] = v1135;
    j$$3 = j$$3 + 1;
    v84 = j$$3 < arrayOfPatterns$$4.length
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
  var v105 = j$$4 < lengthOut;
  for(;v105;) {
    tempNum = Math.floor(Math.random() * components.length);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v105 = j$$4 < lengthOut
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
  var v527 = expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1;
  if(!v527) {
    var v736 = expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1;
    if(!v736) {
      var v874 = expressionToCheck.search(/\[\]/) != -1;
      if(!v874) {
        var v962 = expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1;
        if(!v962) {
          var v1016 = expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1;
          if(!v1016) {
            var v1033 = expressionToCheck.search(/\|\|/) != -1;
            if(!v1033) {
              var v1049 = expressionToCheck.search(/\/\|/) != -1;
              if(!v1049) {
                var v1064 = expressionToCheck.search(/\|\//) != -1;
                if(!v1064) {
                  var v1078 = expressionToCheck.search(/\[.\]/) != -1;
                  if(!v1078) {
                    var v1089 = expressionToCheck.search(/\</) != -1;
                    if(!v1089) {
                      v1089 = expressionToCheck.search(/\>/) != -1
                    }
                    v1078 = v1089
                  }
                  v1064 = v1078
                }
                v1049 = v1064
              }
              v1033 = v1049
            }
            v1016 = v1033
          }
          v962 = v1016
        }
        v874 = v962
      }
      v736 = v874
    }
    v527 = v736
  }
  if(v527) {
    return false
  }
  return true
}
function openForm() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<form action="">\n']);
  return true
}
function openPre() {
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ["<pre>"]);
  var v112 = outputWindow.document;
  JAM.call(v112.write, v112, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v113 = outputWindow.document;
  JAM.call(v113.write, v113, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.p1), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
  outputWindow.focus();
  var v114 = outputWindow.document;
  JAM.call(v114.write, v114, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isColor) {
    var v116 = outputWindow.document;
    JAM.call(v116.write, v116, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"])
  }else {
    var v118 = outputWindow.document;
    JAM.call(v118.write, v118, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v120 = outputWindow.document;
  JAM.call(v120.write, v120, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"]);
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
  var v122 = outputWindow.document;
  JAM.call(v122.write, v122, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isBackground) {
    var v124 = outputWindow.document;
    JAM.call(v124.write, v124, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"])
  }else {
    var v126 = outputWindow.document;
    JAM.call(v126.write, v126, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v128 = outputWindow.document;
  JAM.call(v128.write, v128, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"]);
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
  var v131 = j$$5 < lengthOfColumn;
  for(;v131;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v131 = j$$5 < lengthOfColumn
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
  var v542 = emblFile.search(/ID/) == -1;
  if(!v542) {
    var v747 = emblFile.search(/AC/) == -1;
    if(!v747) {
      var v885 = emblFile.search(/DE/) == -1;
      if(!v885) {
        v885 = emblFile.search(/SQ/) == -1
      }
      v747 = v885
    }
    v542 = v747
  }
  if(v542) {
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
  var v547 = genBankFile.search(/LOCUS/) == -1;
  if(!v547) {
    var v750 = genBankFile.search(/DEFINITION/) == -1;
    if(!v750) {
      var v888 = genBankFile.search(/ACCESSION/) == -1;
      if(!v888) {
        v888 = genBankFile.search(/ORIGIN/) == -1
      }
      v750 = v888
    }
    v547 = v750
  }
  if(v547) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v548 = genBankFile$$1.search(/LOCUS/) == -1;
  if(!v548) {
    var v753 = genBankFile$$1.search(/DEFINITION/) == -1;
    if(!v753) {
      var v891 = genBankFile$$1.search(/ACCESSION/) == -1;
      if(!v891) {
        v891 = genBankFile$$1.search(/ORIGIN/) == -1
      }
      v753 = v891
    }
    v548 = v753
  }
  if(v548) {
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
  var v550 = emblFile$$1.search(/ID/) == -1;
  if(!v550) {
    var v756 = emblFile$$1.search(/AC/) == -1;
    if(!v756) {
      var v894 = emblFile$$1.search(/DE/) == -1;
      if(!v894) {
        v894 = emblFile$$1.search(/SQ/) == -1
      }
      v756 = v894
    }
    v550 = v756
  }
  if(v550) {
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
  var v159 = i$$5 < stopBase;
  for(;v159;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v156 = j$$6 <= basePerLine / groupSize;
    for(;v156;) {
      var v155 = k < groupSize;
      for(;v155;) {
        lineOfText = lineOfText + text$$10.charAt(k + i$$5);
        k = k + 1;
        v155 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v156 = j$$6 <= basePerLine / groupSize
    }
    var v157 = outputWindow.document;
    JAM.call(v157.write, v157, [lineOfText + "\n"]);
    lineOfText = "";
    v159 = i$$5 < stopBase
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
    var v555 = adjustment < 0;
    if(v555) {
      v555 = adjusted >= 0
    }
    if(v555) {
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
  var v193 = i$$6 < stopBase$$2;
  for(;v193;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v169 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for(;v169;) {
      var v164 = k$$1 < groupSize$$2;
      for(;v164;) {
        if(i$$6 + k$$1 >= stopBase$$2) {
          break
        }
        lineOfText$$1 = lineOfText$$1 + text$$12.charAt(k$$1 + i$$6);
        k$$1 = k$$1 + 1;
        v164 = k$$1 < groupSize$$2
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
      v169 = j$$7 <= basePerLine$$2 / groupSize$$2
    }
    if(numberPosition$$1 == "left") {
      var v170 = outputWindow.document;
      JAM.call(v170.write, v170, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"]);
      if(strands$$1 == "two") {
        var v172 = outputWindow.document;
        JAM.call(v172.write, v172, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"]);
        var v174 = outputWindow.document;
        JAM.call(v174.write, v174, ["\n"])
      }
    }else {
      if(numberPosition$$1 == "right") {
        var v176 = outputWindow.document;
        JAM.call(v176.write, v176, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
        if(strands$$1 == "two") {
          var v178 = outputWindow.document;
          JAM.call(v178.write, v178, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
          var v180 = outputWindow.document;
          JAM.call(v180.write, v180, ["\n"])
        }
      }else {
        if(numberPosition$$1 == "above") {
          var v182 = outputWindow.document;
          JAM.call(v182.write, v182, [aboveNum + "\n"]);
          var v184 = outputWindow.document;
          JAM.call(v184.write, v184, [lineOfText$$1 + "\n"]);
          if(strands$$1 == "two") {
            var v186 = outputWindow.document;
            JAM.call(v186.write, v186, [complement(lineOfText$$1) + "\n"]);
            var v188 = outputWindow.document;
            JAM.call(v188.write, v188, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v193 = i$$6 < stopBase$$2
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
  var v214 = i$$7 < stopBase$$3;
  for(;v214;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v202 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for(;v202;) {
      var v197 = k$$2 < groupSize$$3;
      for(;v197;) {
        if(i$$7 + k$$2 >= stopBase$$3) {
          break
        }
        lineOfText$$2 = lineOfText$$2 + text$$13.charAt(k$$2 + i$$7);
        k$$2 = k$$2 + 1;
        v197 = k$$2 < groupSize$$3
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
      v202 = j$$8 <= basePerLine$$3 / groupSize$$3
    }
    if(numberPosition$$2 == "left") {
      var v203 = outputWindow.document;
      JAM.call(v203.write, v203, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"])
    }else {
      if(numberPosition$$2 == "right") {
        var v205 = outputWindow.document;
        JAM.call(v205.write, v205, [lineOfText$$2 + i$$7 + "\n"])
      }else {
        if(numberPosition$$2 == "above") {
          var v207 = outputWindow.document;
          JAM.call(v207.write, v207, [aboveNum$$1 + "\n"]);
          var v209 = outputWindow.document;
          JAM.call(v209.write, v209, [lineOfText$$2 + "\n"])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v214 = i$$7 < stopBase$$3
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
  var v572 = sequence$$13.length <= firstIndexToMutate;
  if(!v572) {
    var v767 = lastIndexToMutate < 0;
    if(!v767) {
      v767 = lastIndexToMutate <= firstIndexToMutate
    }
    v572 = v767
  }
  if(v572) {
    numMut = 0
  }
  var i$$8 = 0;
  var v223 = i$$8 < numMut;
  for(;v223;) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    var v574 = randNum < firstIndexToMutate;
    if(!v574) {
      v574 = randNum > lastIndexToMutate
    }
    if(v574) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v223 = i$$8 < numMut;
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
        var v578 = components$$1[componentsIndex]
      }
      if(v578 != currentChar) {
        needNewChar = false
      }
    }
    var v579 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.p5) {
      var v580 = components$$1[componentsIndex]
    }
    sequence$$13 = v579 + v580 + sequence$$13.substring(randNum + 1, sequence$$13.length);
    i$$8 = i$$8 + 1;
    v223 = i$$8 < numMut
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, [addReturns(sequence$$13)]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v230 = j$$9 < lengthOut$$1;
  for(;v230;) {
    tempNum$$1 = Math.floor(Math.random() * components$$2.length);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if(sequence$$14.length == 60) {
      var v227 = outputWindow.document;
      JAM.call(v227.write, v227, [sequence$$14 + "\n"]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v230 = j$$9 < lengthOut$$1
  }
  var v231 = outputWindow.document;
  JAM.call(v231.write, v231, [sequence$$14 + "\n"]);
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
  var v237 = outputWindow.document;
  JAM.call(v237.write, v237, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v238 = outputWindow.document;
  JAM.call(v238.write, v238, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"]);
  var i$$9 = 0;
  var v255 = i$$9 < arrayOfItems.length;
  for(;v255;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p5) {
      var v589 = arrayOfItems[i$$9]
    }
    matchExp = v589.match(/\/.+\//) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.p5) {
      var v901 = arrayOfItems[i$$9]
    }
    cutDistance = parseFloat(v901.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    var v247 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v247;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v591 = matchPosition >= lowerLimit;
      if(v591) {
        v591 = matchPosition < upperLimit
      }
      if(v591) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v247 = matchArray$$1 = matchExp.exec(sequence$$15)
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
    var v253 = outputWindow.document;
    var v1039 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p5) {
      var v1084 = arrayOfItems[i$$9]
    }
    JAM.call(v253.write, v253, [v1039 + v1084.match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v255 = i$$9 < arrayOfItems.length
  }
  var v256 = outputWindow.document;
  JAM.call(v256.write, v256, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v257 = outputWindow.document;
  JAM.call(v257.write, v257, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v258 = outputWindow.document;
  JAM.call(v258.write, v258, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"]);
  var i$$10 = 0;
  var v268 = i$$10 < arrayOfItems$$1.length;
  for(;v268;) {
    var tempNumber = 0;
    introspect(JAM.policy.p5) {
      var v600 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = v600.match(/\/[^\/]+\//) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(sequence$$16.search(matchExp$$1) != -1) {
      tempNumber = sequence$$16.match(matchExp$$1).length
    }
    var percentage = 0;
    var v777 = originalLength + 1;
    introspect(JAM.policy.p5) {
      var v982 = arrayOfItems$$1[i$$10]
    }
    if(v777 - parseFloat(v982.match(/\d+/)) > 0) {
      var v263 = 100 * tempNumber;
      var v603 = originalLength + 1;
      introspect(JAM.policy.p5) {
        var v905 = arrayOfItems$$1[i$$10]
      }
      percentage = v263 / (v603 - parseFloat(v905.match(/\d+/)))
    }
    var v266 = outputWindow.document;
    introspect(JAM.policy.p5) {
      var v1085 = arrayOfItems$$1[i$$10]
    }
    JAM.call(v266.write, v266, ["<tr><td>" + v1085.match(/\([^\(]+\)\b/).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n"]);
    i$$10 = i$$10 + 1;
    v268 = i$$10 < arrayOfItems$$1.length
  }
  var v269 = outputWindow.document;
  JAM.call(v269.write, v269, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v276 = sequence$$17.length > 0;
  for(;v276;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = Math.floor(Math.random() * maxNum$$1);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    tempString2 = sequence$$17.substring(randNum$$1 + 1, sequence$$17.length);
    sequence$$17 = tempString1 + tempString2;
    if(tempSeq.length == 60) {
      var v273 = outputWindow.document;
      JAM.call(v273.write, v273, [tempSeq + "\n"]);
      tempSeq = ""
    }
    v276 = sequence$$17.length > 0
  }
  var v277 = outputWindow.document;
  JAM.call(v277.write, v277, [tempSeq + "\n"]);
  return true
}
function revTrans(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 2E4;
  if(testScript() == false) {
    return false
  }
  var codonTable$$1;
  var v612 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v612) {
    var v783 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
    if(!v783) {
      v783 = checkCodonTable(theDocument.forms[0].elements[4].value) == false
    }
    v612 = v783
  }
  if(v612) {
    return false
  }
  codonTable$$1 = makeCodonTable(theDocument.forms[0].elements[4].value);
  if(codonTable$$1 == false) {
    return false
  }
  openWindow("Reverse Translate");
  openPre();
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var i$$11 = 0;
  var v292 = i$$11 < arrayOfFasta$$1.length;
  for(;v292;) {
    introspect(JAM.policy.p5) {
      var v284 = arrayOfFasta$$1[i$$11]
    }
    newProtein = getSequenceFromFasta(v284);
    introspect(JAM.policy.p5) {
      var v285 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v285);
    newProtein = removeNonProteinAllowX(newProtein);
    var v286 = outputWindow.document;
    JAM.call(v286.write, v286, [getInfoFromTitleAndSequence(title, newProtein)]);
    writeRevTransSeqNoDegen(newProtein, title, codonTable$$1);
    var v288 = outputWindow.document;
    JAM.call(v288.write, v288, ["\n"]);
    writeRevTransSeqDegen(newProtein, title, codonTable$$1);
    var v289 = outputWindow.document;
    JAM.call(v289.write, v289, ["\n"]);
    var v290 = outputWindow.document;
    JAM.call(v290.write, v290, ["Graph of base probabilities:\n"]);
    writeRevTransGraph(newProtein, codonTable$$1);
    var v291 = outputWindow.document;
    JAM.call(v291.write, v291, ["\n\n"]);
    i$$11 = i$$11 + 1;
    v292 = i$$11 < arrayOfFasta$$1.length
  }
  closePre();
  closeWindow();
  return true
}
function writeRevTransSeqNoDegen(protein, title$$10, codonTable$$2) {
  function v2(str$$8, p1$$2, offset$$14, s$$4) {
    var v293 = codonTable$$2;
    var v294 = p1$$2.toString().toLowerCase();
    introspect(JAM.policy.p5) {
      aminoAcid = v293[v294]
    }
    return aminoAcid.mostCommonCodon
  }
  var aminoAcid;
  protein = protein.replace(/\*/g, "z");
  protein = protein.replace(/(.)/g, v2);
  var v295 = outputWindow.document;
  JAM.call(v295.write, v295, ["&gt;" + "reverse translation of " + title$$10 + " to a " + protein.length + " base sequence of most likely codons.\n"]);
  var v297 = outputWindow.document;
  JAM.call(v297.write, v297, [addReturns(protein)]);
  var v299 = outputWindow.document;
  JAM.call(v299.write, v299, ["\n"]);
  return true
}
function writeRevTransSeqDegen(protein$$1, title$$11, codonTable$$3) {
  function v3(str$$9, p1$$3, offset$$15, s$$5) {
    var v300 = codonTable$$3;
    var v301 = p1$$3.toString().toLowerCase();
    introspect(JAM.policy.p5) {
      aminoAcid$$1 = v300[v301]
    }
    return aminoAcid$$1.degenCodon
  }
  var aminoAcid$$1;
  protein$$1 = protein$$1.replace(/\*/g, "z");
  protein$$1 = protein$$1.replace(/(.)/g, v3);
  var v302 = outputWindow.document;
  JAM.call(v302.write, v302, ["&gt;" + "reverse translation of " + title$$11 + " to a " + protein$$1.length + " base sequence of consensus codons.\n"]);
  var v304 = outputWindow.document;
  JAM.call(v304.write, v304, [addReturns(protein$$1)]);
  var v306 = outputWindow.document;
  JAM.call(v306.write, v306, ["\n"]);
  return true
}
function writeRevTransGraph(protein$$2, codonTable$$4) {
  function v4(str$$10, p1$$4, offset$$16, s$$6) {
    var v307 = codonTable$$4;
    var v308 = p1$$4.toString().toLowerCase();
    introspect(JAM.policy.p5) {
      aminoAcid$$2 = v307[v308]
    }
    return"<b>" + (offset$$16 + 1) + "_" + str$$10 + "_" + "first</b>\n" + aminoAcid$$2.rulerPosOne + "<b>" + (offset$$16 + 1) + "_" + str$$10 + "_" + "second</b>\n" + aminoAcid$$2.rulerPosTwo + "<b>" + (offset$$16 + 1) + "_" + str$$10 + "_" + "third</b>\n" + aminoAcid$$2.rulerPosThree + "\n"
  }
  var aminoAcid$$2;
  protein$$2 = protein$$2.replace(/\*/g, "z");
  protein$$2 = protein$$2.replace(/(.)/g, v4);
  var v310 = outputWindow.document;
  JAM.call(v310.write, v310, [protein$$2]);
  return true
}
function makeCodonTable(gcgTable) {
  gcgTable = gcgTable.replace(/[^\.]*\.\./, "");
  var tableArray = gcgTable.split(/[\f\n\r]/);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$5 = new CodonTable;
  var i$$12 = 0;
  var v315 = i$$12 < tableArray.length;
  for(;v315;) {
    introspect(JAM.policy.p5) {
      var v625 = tableArray[i$$12]
    }
    var v314 = matchArray$$2 = re$$3.exec(v625);
    for(;v314;) {
      try {
        var v626 = codonTable$$5;
        var v627 = matchArray$$2[1].toLowerCase();
        introspect(JAM.policy.p5) {
          var v311 = v626[v627]
        }
        JAM.call(v311.addCodon, v311, [new Codon(matchArray$$2[2], parseFloat(matchArray$$2[3]), parseFloat(matchArray$$2[4]), parseFloat(matchArray$$2[5]))])
      }catch(e$$5) {
        alert("There is a problem with a line of the codon table: " + matchArray$$2[1] + " " + matchArray$$2[2] + " " + matchArray$$2[3] + " " + matchArray$$2[4] + " " + matchArray$$2[4]);
        return false
      }
      introspect(JAM.policy.p5) {
        var v634 = tableArray[i$$12]
      }
      v314 = matchArray$$2 = re$$3.exec(v634)
    }
    i$$12 = i$$12 + 1;
    v315 = i$$12 < tableArray.length
  }
  codonTable$$5.a.determineBaseFreq();
  codonTable$$5.c.determineBaseFreq();
  codonTable$$5.d.determineBaseFreq();
  codonTable$$5.e.determineBaseFreq();
  codonTable$$5.f.determineBaseFreq();
  codonTable$$5.g.determineBaseFreq();
  codonTable$$5.h.determineBaseFreq();
  codonTable$$5.i.determineBaseFreq();
  codonTable$$5.k.determineBaseFreq();
  codonTable$$5.l.determineBaseFreq();
  codonTable$$5.m.determineBaseFreq();
  codonTable$$5.n.determineBaseFreq();
  codonTable$$5.p.determineBaseFreq();
  codonTable$$5.q.determineBaseFreq();
  codonTable$$5.r.determineBaseFreq();
  codonTable$$5.s.determineBaseFreq();
  codonTable$$5.t.determineBaseFreq();
  codonTable$$5.v.determineBaseFreq();
  codonTable$$5.w.determineBaseFreq();
  codonTable$$5.y.determineBaseFreq();
  codonTable$$5.z.determineBaseFreq();
  codonTable$$5.x.determineBaseFreq();
  var v338 = codonTable$$5.x;
  var v1136 = new Array(0.25, 0.25, 0.25, 0.25);
  v338.baseFreqPosOne = v1136;
  var v339 = codonTable$$5.x;
  var v1137 = new Array(0.25, 0.25, 0.25, 0.25);
  v339.baseFreqPosTwo = v1137;
  var v340 = codonTable$$5.x;
  var v1138 = new Array(0.25, 0.25, 0.25, 0.25);
  v340.baseFreqPosThree = v1138;
  codonTable$$5.a.fillRuler();
  codonTable$$5.c.fillRuler();
  codonTable$$5.d.fillRuler();
  codonTable$$5.e.fillRuler();
  codonTable$$5.f.fillRuler();
  codonTable$$5.g.fillRuler();
  codonTable$$5.h.fillRuler();
  codonTable$$5.i.fillRuler();
  codonTable$$5.k.fillRuler();
  codonTable$$5.l.fillRuler();
  codonTable$$5.m.fillRuler();
  codonTable$$5.n.fillRuler();
  codonTable$$5.p.fillRuler();
  codonTable$$5.q.fillRuler();
  codonTable$$5.r.fillRuler();
  codonTable$$5.s.fillRuler();
  codonTable$$5.t.fillRuler();
  codonTable$$5.v.fillRuler();
  codonTable$$5.w.fillRuler();
  codonTable$$5.y.fillRuler();
  codonTable$$5.z.fillRuler();
  codonTable$$5.x.fillRuler();
  return codonTable$$5
}
function CodonTable() {
  var v1139 = new AminoAcid;
  this.a = v1139;
  var v1140 = new AminoAcid;
  this.c = v1140;
  var v1141 = new AminoAcid;
  this.d = v1141;
  var v1142 = new AminoAcid;
  this.e = v1142;
  var v1143 = new AminoAcid;
  this.f = v1143;
  var v1144 = new AminoAcid;
  this.g = v1144;
  var v1145 = new AminoAcid;
  this.h = v1145;
  var v1146 = new AminoAcid;
  this.i = v1146;
  var v1147 = new AminoAcid;
  this.k = v1147;
  var v1148 = new AminoAcid;
  this.l = v1148;
  var v1149 = new AminoAcid;
  this.m = v1149;
  var v1150 = new AminoAcid;
  this.n = v1150;
  var v1151 = new AminoAcid;
  this.p = v1151;
  var v1152 = new AminoAcid;
  this.q = v1152;
  var v1153 = new AminoAcid;
  this.r = v1153;
  var v1154 = new AminoAcid;
  this.s = v1154;
  var v1155 = new AminoAcid;
  this.t = v1155;
  var v1156 = new AminoAcid;
  this.v = v1156;
  var v1157 = new AminoAcid;
  this.w = v1157;
  var v1158 = new AminoAcid;
  this.y = v1158;
  var v1159 = new AminoAcid;
  this.z = v1159;
  var v1160 = new AminoAcid;
  this.x = v1160;
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
  this.xaa = this.x;
  return
}
function fillRuler() {
  var markG = "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
  var markA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  var markT = "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT";
  var markC = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
  var markLength = markG.length;
  this.rulerPosOne = JAM.call(this.getRuler, this, [this.baseFreqPosOne[0], markG]) + JAM.call(this.getRuler, this, [this.baseFreqPosOne[1], markA]) + JAM.call(this.getRuler, this, [this.baseFreqPosOne[2], markT]) + JAM.call(this.getRuler, this, [this.baseFreqPosOne[3], markC]);
  this.rulerPosTwo = JAM.call(this.getRuler, this, [this.baseFreqPosTwo[0], markG]) + JAM.call(this.getRuler, this, [this.baseFreqPosTwo[1], markA]) + JAM.call(this.getRuler, this, [this.baseFreqPosTwo[2], markT]) + JAM.call(this.getRuler, this, [this.baseFreqPosTwo[3], markC]);
  this.rulerPosThree = JAM.call(this.getRuler, this, [this.baseFreqPosThree[0], markG]) + JAM.call(this.getRuler, this, [this.baseFreqPosThree[1], markA]) + JAM.call(this.getRuler, this, [this.baseFreqPosThree[2], markT]) + JAM.call(this.getRuler, this, [this.baseFreqPosThree[3], markC]);
  this.setMostCommonCodon();
  this.setDegenCodon();
  return
}
function getRuler(freq, mark) {
  return mark.substring(0, 1) + mark.substring(0, freq * mark.length) + " " + freq.toFixed(2) + "\n"
}
function addCodon(codon$$1) {
  this.codons.push(codon$$1);
  return
}
function determineBaseFreq() {
  this.fixFraction();
  var i$$13 = 0;
  var v395 = i$$13 < this.codons.length;
  for(;v395;) {
    var v1000 = this.codons;
    introspect(JAM.policy.p5) {
      var v929 = v1000[i$$13]
    }
    if(v929.sequence.charAt(0) == "g") {
      var v371 = this.baseFreqPosOne;
      var v649 = this.baseFreqPosOne[0];
      var v930 = this.codons;
      introspect(JAM.policy.p5) {
        var v813 = v930[i$$13]
      }
      v371[0] = v649 + v813.fraction
    }else {
      var v1001 = this.codons;
      introspect(JAM.policy.p5) {
        var v931 = v1001[i$$13]
      }
      if(v931.sequence.charAt(0) == "a") {
        var v372 = this.baseFreqPosOne;
        var v652 = this.baseFreqPosOne[1];
        var v932 = this.codons;
        introspect(JAM.policy.p5) {
          var v816 = v932[i$$13]
        }
        v372[1] = v652 + v816.fraction
      }else {
        var v1002 = this.codons;
        introspect(JAM.policy.p5) {
          var v933 = v1002[i$$13]
        }
        if(v933.sequence.charAt(0) == "t") {
          var v373 = this.baseFreqPosOne;
          var v655 = this.baseFreqPosOne[2];
          var v934 = this.codons;
          introspect(JAM.policy.p5) {
            var v819 = v934[i$$13]
          }
          v373[2] = v655 + v819.fraction
        }else {
          var v1003 = this.codons;
          introspect(JAM.policy.p5) {
            var v935 = v1003[i$$13]
          }
          if(v935.sequence.charAt(0) == "c") {
            var v374 = this.baseFreqPosOne;
            var v658 = this.baseFreqPosOne[3];
            var v936 = this.codons;
            introspect(JAM.policy.p5) {
              var v822 = v936[i$$13]
            }
            v374[3] = v658 + v822.fraction
          }
        }
      }
    }
    var v1004 = this.codons;
    introspect(JAM.policy.p5) {
      var v937 = v1004[i$$13]
    }
    if(v937.sequence.charAt(1) == "g") {
      var v379 = this.baseFreqPosTwo;
      var v661 = this.baseFreqPosTwo[0];
      var v938 = this.codons;
      introspect(JAM.policy.p5) {
        var v825 = v938[i$$13]
      }
      v379[0] = v661 + v825.fraction
    }else {
      var v1005 = this.codons;
      introspect(JAM.policy.p5) {
        var v939 = v1005[i$$13]
      }
      if(v939.sequence.charAt(1) == "a") {
        var v380 = this.baseFreqPosTwo;
        var v664 = this.baseFreqPosTwo[1];
        var v940 = this.codons;
        introspect(JAM.policy.p5) {
          var v828 = v940[i$$13]
        }
        v380[1] = v664 + v828.fraction
      }else {
        var v1006 = this.codons;
        introspect(JAM.policy.p5) {
          var v941 = v1006[i$$13]
        }
        if(v941.sequence.charAt(1) == "t") {
          var v381 = this.baseFreqPosTwo;
          var v667 = this.baseFreqPosTwo[2];
          var v942 = this.codons;
          introspect(JAM.policy.p5) {
            var v831 = v942[i$$13]
          }
          v381[2] = v667 + v831.fraction
        }else {
          var v1007 = this.codons;
          introspect(JAM.policy.p5) {
            var v943 = v1007[i$$13]
          }
          if(v943.sequence.charAt(1) == "c") {
            var v382 = this.baseFreqPosTwo;
            var v670 = this.baseFreqPosTwo[3];
            var v944 = this.codons;
            introspect(JAM.policy.p5) {
              var v834 = v944[i$$13]
            }
            v382[3] = v670 + v834.fraction
          }
        }
      }
    }
    var v1008 = this.codons;
    introspect(JAM.policy.p5) {
      var v945 = v1008[i$$13]
    }
    if(v945.sequence.charAt(2) == "g") {
      var v387 = this.baseFreqPosThree;
      var v673 = this.baseFreqPosThree[0];
      var v946 = this.codons;
      introspect(JAM.policy.p5) {
        var v837 = v946[i$$13]
      }
      v387[0] = v673 + v837.fraction
    }else {
      var v1009 = this.codons;
      introspect(JAM.policy.p5) {
        var v947 = v1009[i$$13]
      }
      if(v947.sequence.charAt(2) == "a") {
        var v388 = this.baseFreqPosThree;
        var v676 = this.baseFreqPosThree[1];
        var v948 = this.codons;
        introspect(JAM.policy.p5) {
          var v840 = v948[i$$13]
        }
        v388[1] = v676 + v840.fraction
      }else {
        var v1010 = this.codons;
        introspect(JAM.policy.p5) {
          var v949 = v1010[i$$13]
        }
        if(v949.sequence.charAt(2) == "t") {
          var v389 = this.baseFreqPosThree;
          var v679 = this.baseFreqPosThree[2];
          var v950 = this.codons;
          introspect(JAM.policy.p5) {
            var v843 = v950[i$$13]
          }
          v389[2] = v679 + v843.fraction
        }else {
          var v1011 = this.codons;
          introspect(JAM.policy.p5) {
            var v951 = v1011[i$$13]
          }
          if(v951.sequence.charAt(2) == "c") {
            var v390 = this.baseFreqPosThree;
            var v682 = this.baseFreqPosThree[3];
            var v952 = this.codons;
            introspect(JAM.policy.p5) {
              var v846 = v952[i$$13]
            }
            v390[3] = v682 + v846.fraction
          }
        }
      }
    }
    i$$13 = i$$13 + 1;
    v395 = i$$13 < this.codons.length
  }
  return true
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$14 = 0;
  var v397 = i$$14 < this.codons.length;
  for(;v397;) {
    var v849 = this.codons;
    introspect(JAM.policy.p5) {
      var v686 = v849[i$$14]
    }
    perThouTotal = perThouTotal + v686.perThou;
    i$$14 = i$$14 + 1;
    v397 = i$$14 < this.codons.length
  }
  if(perThouTotal == 0) {
    return false
  }
  i$$14 = 0;
  var v400 = i$$14 < this.codons.length;
  for(;v400;) {
    var v689 = this.codons;
    introspect(JAM.policy.p5) {
      var v399 = v689[i$$14]
    }
    var v953 = this.codons;
    introspect(JAM.policy.p5) {
      var v852 = v953[i$$14]
    }
    v399.fraction = v852.perThou / perThouTotal;
    i$$14 = i$$14 + 1;
    v400 = i$$14 < this.codons.length
  }
  return true
}
function setMostCommonCodon() {
  var highestFraction = 0;
  var highestCodon = "nnn";
  var i$$15 = 0;
  var v404 = i$$15 < this.codons.length;
  for(;v404;) {
    var v954 = this.codons;
    introspect(JAM.policy.p5) {
      var v855 = v954[i$$15]
    }
    if(v855.fraction > highestFraction) {
      var v694 = this.codons;
      introspect(JAM.policy.p5) {
        var v401 = v694[i$$15]
      }
      highestFraction = v401.fraction;
      var v695 = this.codons;
      introspect(JAM.policy.p5) {
        var v402 = v695[i$$15]
      }
      highestCodon = v402.sequence
    }
    i$$15 = i$$15 + 1;
    v404 = i$$15 < this.codons.length
  }
  this.mostCommonCodon = highestCodon;
  return
}
function setDegenCodon() {
  this.degenCodon = getConsensusBase(this.baseFreqPosOne) + getConsensusBase(this.baseFreqPosTwo) + getConsensusBase(this.baseFreqPosThree);
  return
}
function getConsensusBase(baseFreq) {
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
  var v704 = !g;
  if(v704) {
    var v859 = !a;
    if(v859) {
      var v955 = !c;
      if(v955) {
        v955 = !t
      }
      v859 = v955
    }
    v704 = v859
  }
  if(v704) {
    return"n"
  }
  var v705 = g;
  if(v705) {
    var v860 = a;
    if(v860) {
      v860 = c && t
    }
    v705 = v860
  }
  if(v705) {
    return"n"
  }else {
    var v706 = a;
    if(v706) {
      v706 = c && t
    }
    if(v706) {
      return"h"
    }else {
      var v707 = a;
      if(v707) {
        v707 = g && t
      }
      if(v707) {
        return"d"
      }else {
        var v708 = c;
        if(v708) {
          v708 = g && t
        }
        if(v708) {
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
  return true
}
function AminoAcid() {
  var v1161 = new Array;
  this.codons = v1161;
  var v1162 = new Array(0, 0, 0, 0);
  this.baseFreqPosOne = v1162;
  var v1163 = new Array(0, 0, 0, 0);
  this.baseFreqPosTwo = v1163;
  var v1164 = new Array(0, 0, 0, 0);
  this.baseFreqPosThree = v1164;
  return
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1165 = sequence$$18.toLowerCase();
  this.sequence = v1165;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return
}
new AminoAcid;
AminoAcid.prototype.fillRuler = fillRuler;
AminoAcid.prototype.getRuler = getRuler;
AminoAcid.prototype.addCodon = addCodon;
AminoAcid.prototype.determineBaseFreq = determineBaseFreq;
AminoAcid.prototype.fixFraction = fixFraction;
AminoAcid.prototype.setMostCommonCodon = setMostCommonCodon;
AminoAcid.prototype.setDegenCodon = setDegenCodon;
AminoAcid.prototype.getConsensusBase = getConsensusBase;
JAM.set(document, "onload", v5);
JAM.set(document.getElementById("submitbtn"), "onclick", v6);
JAM.set(document.getElementById("clearbtn"), "onclick", v7);

