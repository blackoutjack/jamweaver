// sms2-pcr-products.js
function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[1].value = " ";
  document.forms[0].elements[2].value = " ";
  document.forms[0].elements[3].value = " ";
  document.forms[0].elements[4].value = " ";
  return
}
function v3() {
  try {
    pcrProducts(document)
  }catch(e$$7) {
    alert("The following error was encountered: " + e$$7)
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
  var v15 = i$$1 < arrayOfTitles.length;
  for(;v15;) {
    introspect(JAM.policy.p5) {
      var v718 = arrayOfTitles[i$$1]
    }
    var v342 = v718.search(/\S/) == -1;
    if(!v342) {
      introspect(JAM.policy.p5) {
        var v808 = arrayOfSequences[i$$1]
      }
      var v586 = v808.search(/\S/) == -1;
      if(!v586) {
        introspect(JAM.policy.p5) {
          var v809 = arrayOfSequences[i$$1]
        }
        v586 = v809.length != lengthOfAlign
      }
      v342 = v586
    }
    if(v342) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v15 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v344 = codonTable.search(/AmAcid/) == -1;
  if(!v344) {
    var v589 = codonTable.search(/Codon/) == -1;
    if(!v589) {
      var v723 = codonTable.search(/Number/) == -1;
      if(!v723) {
        var v811 = codonTable.search(/\/1000/) == -1;
        if(!v811) {
          v811 = codonTable.search(/Fraction\s*\.\./) == -1
        }
        v723 = v811
      }
      v589 = v723
    }
    v344 = v589
  }
  if(v344) {
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
      var v592 = arrayOfPatterns[z$$2]
    }
    if(v592.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v593 = arrayOfPatterns[z$$2]
    }
    if(moreExpressionCheck(v593) == false) {
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
      var v725 = arrayOfPatterns[j]
    }
    var v351 = v725.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1047 = eval("introspect(JAM.policy.pFull) { " + v351 + " }")
    }else {
      var v1047 = JAM.call(eval, null, [v351])
    }
    v23[v24] = v1047;
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    introspect(JAM.policy.p5) {
      var v595 = arrayOfPatterns[j]
    }
    var v1048 = v595.match(/=[a-zA-Z\*]/).toString();
    v25[v26] = v1048;
    var v27 = geneticCodeMatchResult;
    var v28 = j;
    introspect(JAM.policy.p5) {
      var v353 = geneticCodeMatchResult[j]
    }
    var v1049 = v353.replace(/=/g, "");
    v27[v28] = v1049;
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
        var v597 = geneticCodeMatchExp[j]
      }
      if(codon.search(v597) != -1) {
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
      var v599 = arrayOfPatterns$$1[z$$3]
    }
    if(v599.search(/[^acdefghiklmnpqrstvwyz]/i) != -1) {
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
      var v600 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v600 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v41 = j$$1 < arrayOfPatterns$$1.length;
    for(;v41;) {
      introspect(JAM.policy.p5) {
        var v601 = arrayOfPatterns$$1[j$$1]
      }
      if(v601.search(re) != -1) {
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
      var v602 = arrayOfPatterns$$2[z$$4]
    }
    if(v602.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v603 = arrayOfPatterns$$2[z$$4]
    }
    if(moreExpressionCheck(v603) == false) {
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
      var v605 = alignArray[i$$4]
    }
    if(v605.search(/[^\s]+\s/) == -1) {
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
      var v727 = arrayOfPatterns$$3[j$$2]
    }
    var v400 = v727.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1050 = eval("introspect(JAM.policy.pFull) { " + v400 + " }")
    }else {
      var v1050 = JAM.call(eval, null, [v400])
    }
    v76[v77] = v1050;
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
      var v607 = arrayOfPatterns$$4[j$$3]
    }
    var v1051 = v607.match(/=[a-zA-Z\*]/).toString();
    v80[v81] = v1051;
    var v82 = geneticCodeMatchResult$$1;
    var v83 = j$$3;
    introspect(JAM.policy.p5) {
      var v404 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1052 = v404.replace(/=/g, "");
    v82[v83] = v1052;
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
  var v432 = expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1;
  if(!v432) {
    var v610 = expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1;
    if(!v610) {
      var v729 = expressionToCheck.search(/\[\]/) != -1;
      if(!v729) {
        var v814 = expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1;
        if(!v814) {
          var v884 = expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1;
          if(!v884) {
            var v929 = expressionToCheck.search(/\|\|/) != -1;
            if(!v929) {
              var v963 = expressionToCheck.search(/\/\|/) != -1;
              if(!v963) {
                var v981 = expressionToCheck.search(/\|\//) != -1;
                if(!v981) {
                  var v997 = expressionToCheck.search(/\[.\]/) != -1;
                  if(!v997) {
                    var v1010 = expressionToCheck.search(/\</) != -1;
                    if(!v1010) {
                      v1010 = expressionToCheck.search(/\>/) != -1
                    }
                    v997 = v1010
                  }
                  v981 = v997
                }
                v963 = v981
              }
              v929 = v963
            }
            v884 = v929
          }
          v814 = v884
        }
        v729 = v814
      }
      v610 = v729
    }
    v432 = v610
  }
  if(v432) {
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
  var v447 = emblFile.search(/ID/) == -1;
  if(!v447) {
    var v621 = emblFile.search(/AC/) == -1;
    if(!v621) {
      var v740 = emblFile.search(/DE/) == -1;
      if(!v740) {
        v740 = emblFile.search(/SQ/) == -1
      }
      v621 = v740
    }
    v447 = v621
  }
  if(v447) {
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
  var v452 = genBankFile.search(/LOCUS/) == -1;
  if(!v452) {
    var v624 = genBankFile.search(/DEFINITION/) == -1;
    if(!v624) {
      var v743 = genBankFile.search(/ACCESSION/) == -1;
      if(!v743) {
        v743 = genBankFile.search(/ORIGIN/) == -1
      }
      v624 = v743
    }
    v452 = v624
  }
  if(v452) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v453 = genBankFile$$1.search(/LOCUS/) == -1;
  if(!v453) {
    var v627 = genBankFile$$1.search(/DEFINITION/) == -1;
    if(!v627) {
      var v746 = genBankFile$$1.search(/ACCESSION/) == -1;
      if(!v746) {
        v746 = genBankFile$$1.search(/ORIGIN/) == -1
      }
      v627 = v746
    }
    v453 = v627
  }
  if(v453) {
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
  var v455 = emblFile$$1.search(/ID/) == -1;
  if(!v455) {
    var v630 = emblFile$$1.search(/AC/) == -1;
    if(!v630) {
      var v749 = emblFile$$1.search(/DE/) == -1;
      if(!v749) {
        v749 = emblFile$$1.search(/SQ/) == -1
      }
      v630 = v749
    }
    v455 = v630
  }
  if(v455) {
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
    var v460 = adjustment < 0;
    if(v460) {
      v460 = adjusted >= 0
    }
    if(v460) {
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
  var v477 = sequence$$13.length <= firstIndexToMutate;
  if(!v477) {
    var v641 = lastIndexToMutate < 0;
    if(!v641) {
      v641 = lastIndexToMutate <= firstIndexToMutate
    }
    v477 = v641
  }
  if(v477) {
    numMut = 0
  }
  var i$$8 = 0;
  var v223 = i$$8 < numMut;
  for(;v223;) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    var v479 = randNum < firstIndexToMutate;
    if(!v479) {
      v479 = randNum > lastIndexToMutate
    }
    if(v479) {
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
        var v483 = components$$1[componentsIndex]
      }
      if(v483 != currentChar) {
        needNewChar = false
      }
    }
    var v484 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.p5) {
      var v485 = components$$1[componentsIndex]
    }
    sequence$$13 = v484 + v485 + sequence$$13.substring(randNum + 1, sequence$$13.length);
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
      var v494 = arrayOfItems[i$$9]
    }
    matchExp = v494.match(/\/.+\//) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.p5) {
      var v756 = arrayOfItems[i$$9]
    }
    cutDistance = parseFloat(v756.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    var v247 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v247;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v496 = matchPosition >= lowerLimit;
      if(v496) {
        v496 = matchPosition < upperLimit
      }
      if(v496) {
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
    var v935 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p5) {
      var v1003 = arrayOfItems[i$$9]
    }
    JAM.call(v253.write, v253, [v935 + v1003.match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"]);
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
      var v505 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = v505.match(/\/[^\/]+\//) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(sequence$$16.search(matchExp$$1) != -1) {
      tempNumber = sequence$$16.match(matchExp$$1).length
    }
    var percentage = 0;
    var v651 = originalLength + 1;
    introspect(JAM.policy.p5) {
      var v834 = arrayOfItems$$1[i$$10]
    }
    if(v651 - parseFloat(v834.match(/\d+/)) > 0) {
      var v263 = 100 * tempNumber;
      var v508 = originalLength + 1;
      introspect(JAM.policy.p5) {
        var v760 = arrayOfItems$$1[i$$10]
      }
      percentage = v263 / (v508 - parseFloat(v760.match(/\d+/)))
    }
    var v266 = outputWindow.document;
    introspect(JAM.policy.p5) {
      var v1004 = arrayOfItems$$1[i$$10]
    }
    JAM.call(v266.write, v266, ["<tr><td>" + v1004.match(/\([^\(]+\)\b/).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n"]);
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
function pcrProducts(theDocument) {
  var newDna = "";
  var maxInput$$3 = 2E5;
  if(testScript() == false) {
    return false
  }
  var re$$3;
  var primers = new Array;
  var forwardMatches = new Array;
  var reverseMatches = new Array;
  var pcrProducts$$1 = new Array;
  var v517 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v517) {
    var v657 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
    if(!v657) {
      var v764 = checkFormElement(theDocument.forms[0].elements[1]) == false;
      if(!v764) {
        var v839 = checkFormElement(theDocument.forms[0].elements[2]) == false;
        if(!v839) {
          var v897 = checkFormElement(theDocument.forms[0].elements[3]) == false;
          if(!v897) {
            v897 = checkFormElement(theDocument.forms[0].elements[4]) == false
          }
          v839 = v897
        }
        v764 = v839
      }
      v657 = v764
    }
    v517 = v657
  }
  if(v517) {
    return false
  }
  if(theDocument.forms[0].elements[2].value.replace(/[^A-Za-z]/g, "").length < 10) {
    alert("Please enter primer sequences that are at least 10 bases long.");
    return false
  }
  if(theDocument.forms[0].elements[4].value.replace(/[^A-Za-z]/g, "").length < 10) {
    alert("Please enter primer sequences that are at least 10 bases long.");
    return false
  }
  var primerOne = convertDegenerates(theDocument.forms[0].elements[2].value.replace(/[^A-Za-z]/g, ""));
  var primerTwo = convertDegenerates(theDocument.forms[0].elements[4].value.replace(/[^A-Za-z]/g, ""));
  try {
    var v285 = "/" + primerOne + "/gi";
    if(JAM.isEval(eval)) {
      re$$3 = eval("introspect(JAM.policy.pFull) { " + v285 + " }")
    }else {
      re$$3 = JAM.call(eval, null, [v285])
    }
    var testString$$1 = "teststring";
    testString$$1 = testString$$1.replace(re$$3, "")
  }catch(e$$5) {
    alert("The first primer sequence is not formatted correctly.");
    return false
  }
  try {
    var v286 = "/" + primerTwo + "/gi";
    if(JAM.isEval(eval)) {
      re$$3 = eval("introspect(JAM.policy.pFull) { " + v286 + " }")
    }else {
      re$$3 = JAM.call(eval, null, [v286])
    }
    testString$$1 = "teststring";
    testString$$1 = testString$$1.replace(re$$3, "")
  }catch(e$$6) {
    alert("The second primer sequence is not formatted correctly.");
    return false
  }
  var v663 = "/" + primerOne + "/gi";
  if(JAM.isEval(eval)) {
    var v524 = eval("introspect(JAM.policy.pFull) { " + v663 + " }")
  }else {
    var v524 = JAM.call(eval, null, [v663])
  }
  primers.push(new Primer(v524, theDocument.forms[0].elements[1].value));
  var v665 = "/" + primerTwo + "/gi";
  if(JAM.isEval(eval)) {
    var v526 = eval("introspect(JAM.policy.pFull) { " + v665 + " }")
  }else {
    var v526 = JAM.call(eval, null, [v665])
  }
  primers.push(new Primer(v526, theDocument.forms[0].elements[3].value));
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var i$$11 = 0;
  var v296 = i$$11 < arrayOfFasta$$1.length;
  for(;v296;) {
    introspect(JAM.policy.p5) {
      var v290 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v290);
    introspect(JAM.policy.p5) {
      var v291 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v291);
    newDna = removeNonDna(newDna);
    var v668 = theDocument.forms[0].elements[8].options;
    var v669 = theDocument.forms[0].elements[8].selectedIndex;
    introspect(JAM.policy.p5) {
      var v530 = v668[v669]
    }
    forwardMatches = findMatches(primers, newDna, v530.value);
    var v293 = reverse(complement(newDna));
    var v670 = theDocument.forms[0].elements[8].options;
    var v671 = theDocument.forms[0].elements[8].selectedIndex;
    introspect(JAM.policy.p5) {
      var v532 = v670[v671]
    }
    reverseMatches = findMatches(primers, v293, v532.value);
    var v672 = theDocument.forms[0].elements[8].options;
    var v673 = theDocument.forms[0].elements[8].selectedIndex;
    introspect(JAM.policy.p5) {
      var v533 = v672[v673]
    }
    makePcrProducts(newDna, title, forwardMatches, reverseMatches, v533.value, pcrProducts$$1);
    i$$11 = i$$11 + 1;
    v296 = i$$11 < arrayOfFasta$$1.length
  }
  pcrProducts$$1.sort(pcrProductSorter);
  openWindow("PCR Products");
  openPre();
  i$$11 = 0;
  var v299 = i$$11 < pcrProducts$$1.length;
  for(;v299;) {
    introspect(JAM.policy.p5) {
      var v297 = pcrProducts$$1[i$$11]
    }
    var v674 = theDocument.forms[0].elements[8].options;
    var v675 = theDocument.forms[0].elements[8].selectedIndex;
    introspect(JAM.policy.p5) {
      var v536 = v674[v675]
    }
    JAM.call(v297.writeProduct, v297, [v536.value]);
    i$$11 = i$$11 + 1;
    v299 = i$$11 < pcrProducts$$1.length
  }
  if(pcrProducts$$1.length == 0) {
    var v300 = outputWindow.document;
    JAM.call(v300.write, v300, ["No PCR products were obtained.\n\n"])
  }
  closePre();
  closeWindow();
  return true
}
function findMatches(primers$$1, sequence$$18, topology$$1) {
  var matchArray$$2;
  var matchPosition$$1;
  var arrayOfMatches = new Array;
  var re$$4;
  var originalLength$$1 = sequence$$18.length;
  if(topology$$1 == "circular") {
    var lookAhead$$1 = 50;
    var shiftValue$$1 = sequence$$18.substring(0, lookAhead$$1).length;
    var upperLimit$$1 = sequence$$18.length + shiftValue$$1;
    sequence$$18 = sequence$$18.substring(sequence$$18.length - lookAhead$$1, sequence$$18.length) + sequence$$18 + sequence$$18.substring(0, lookAhead$$1);
    var lowerLimit$$1 = 0 + shiftValue$$1;
    var i$$12 = 0;
    var v312 = i$$12 < primers$$1.length;
    for(;v312;) {
      introspect(JAM.policy.p5) {
        var v306 = primers$$1[i$$12]
      }
      re$$4 = v306.re;
      var v311 = matchArray$$2 = re$$4.exec(sequence$$18);
      for(;v311;) {
        matchPosition$$1 = re$$4.lastIndex;
        var v541 = matchPosition$$1 >= lowerLimit$$1;
        if(v541) {
          v541 = matchPosition$$1 < upperLimit$$1
        }
        if(v541) {
          matchPosition$$1 = matchPosition$$1 - shiftValue$$1;
          if(matchPosition$$1 == 0) {
            matchPosition$$1 = originalLength$$1
          }
          introspect(JAM.policy.p5) {
            var v678 = primers$$1[i$$12]
          }
          arrayOfMatches.push(new Match(v678.name, matchArray$$2[0], matchPosition$$1))
        }
        re$$4.lastIndex = re$$4.lastIndex - RegExp.lastMatch.length + 1;
        v311 = matchArray$$2 = re$$4.exec(sequence$$18)
      }
      i$$12 = i$$12 + 1;
      v312 = i$$12 < primers$$1.length
    }
  }else {
    i$$12 = 0;
    var v317 = i$$12 < primers$$1.length;
    for(;v317;) {
      introspect(JAM.policy.p5) {
        var v313 = primers$$1[i$$12]
      }
      re$$4 = v313.re;
      var v316 = matchArray$$2 = re$$4.exec(sequence$$18);
      for(;v316;) {
        matchPosition$$1 = re$$4.lastIndex;
        introspect(JAM.policy.p5) {
          var v680 = primers$$1[i$$12]
        }
        arrayOfMatches.push(new Match(v680.name, matchArray$$2[0], matchPosition$$1));
        re$$4.lastIndex = re$$4.lastIndex - RegExp.lastMatch.length + 1;
        v316 = matchArray$$2 = re$$4.exec(sequence$$18)
      }
      i$$12 = i$$12 + 1;
      v317 = i$$12 < primers$$1.length
    }
  }
  return arrayOfMatches
}
function makePcrProducts(newDna$$1, title$$10, forwardMatches$$1, reverseMatches$$1, topology$$2, pcrProducts$$2) {
  var i$$13 = 0;
  var v324 = i$$13 < forwardMatches$$1.length;
  for(;v324;) {
    var j$$10 = 0;
    var v323 = j$$10 < reverseMatches$$1.length;
    for(;v323;) {
      introspect(JAM.policy.p5) {
        var v784 = forwardMatches$$1[i$$13]
      }
      var v682 = v784.positionAfter;
      introspect(JAM.policy.p5) {
        var v856 = forwardMatches$$1[i$$13]
      }
      var v555 = v682 - v856.matchingText.length;
      var v684 = newDna$$1.length;
      introspect(JAM.policy.p5) {
        var v786 = reverseMatches$$1[j$$10]
      }
      if(v555 <= v684 - v786.positionAfter) {
        introspect(JAM.policy.p5) {
          var v857 = forwardMatches$$1[i$$13]
        }
        var v787 = v857.positionAfter;
        introspect(JAM.policy.p5) {
          var v913 = forwardMatches$$1[i$$13]
        }
        var v557 = v787 - v913.matchingText.length + 1;
        var v789 = newDna$$1.length;
        introspect(JAM.policy.p5) {
          var v859 = reverseMatches$$1[j$$10]
        }
        var v687 = v789 - v859.positionAfter;
        introspect(JAM.policy.p5) {
          var v860 = reverseMatches$$1[j$$10]
        }
        var v558 = v687 + v860.matchingText.length;
        introspect(JAM.policy.p5) {
          var v689 = forwardMatches$$1[i$$13]
        }
        var v559 = v689.primerName;
        introspect(JAM.policy.p5) {
          var v690 = reverseMatches$$1[j$$10]
        }
        var v560 = v690.primerName;
        introspect(JAM.policy.p5) {
          var v691 = forwardMatches$$1[i$$13]
        }
        var v561 = v691.name;
        introspect(JAM.policy.p5) {
          var v692 = reverseMatches$$1[j$$10]
        }
        var v562 = v692.name;
        introspect(JAM.policy.p5) {
          var v861 = forwardMatches$$1[i$$13]
        }
        var v792 = v861.positionAfter;
        introspect(JAM.policy.p5) {
          var v914 = forwardMatches$$1[i$$13]
        }
        var v693 = v792 - v914.matchingText.length;
        var v863 = newDna$$1.length;
        introspect(JAM.policy.p5) {
          var v915 = reverseMatches$$1[j$$10]
        }
        var v794 = v863 - v915.positionAfter;
        introspect(JAM.policy.p5) {
          var v916 = reverseMatches$$1[j$$10]
        }
        pcrProducts$$2.push(new PcrProduct(title$$10, v557, v558, v559, v560, v561, v562, newDna$$1.substring(v693, v794 + v916.matchingText.length)))
      }else {
        var v564 = topology$$2 == "circular";
        if(v564) {
          introspect(JAM.policy.p5) {
            var v866 = forwardMatches$$1[i$$13]
          }
          var v796 = v866.positionAfter;
          introspect(JAM.policy.p5) {
            var v917 = forwardMatches$$1[i$$13]
          }
          var v695 = v796 - v917.matchingText.length;
          var v918 = newDna$$1.length;
          introspect(JAM.policy.p5) {
            var v955 = reverseMatches$$1[j$$10]
          }
          var v868 = v918 - v955.positionAfter;
          introspect(JAM.policy.p5) {
            var v956 = reverseMatches$$1[j$$10]
          }
          v564 = v695 > v868 + v956.matchingText.length - 1
        }
        if(v564) {
          introspect(JAM.policy.p5) {
            var v870 = forwardMatches$$1[i$$13]
          }
          var v799 = v870.positionAfter;
          introspect(JAM.policy.p5) {
            var v921 = forwardMatches$$1[i$$13]
          }
          var v565 = v799 - v921.matchingText.length + 1;
          var v801 = newDna$$1.length;
          introspect(JAM.policy.p5) {
            var v872 = reverseMatches$$1[j$$10]
          }
          var v698 = v801 - v872.positionAfter;
          introspect(JAM.policy.p5) {
            var v873 = reverseMatches$$1[j$$10]
          }
          var v566 = v698 + v873.matchingText.length;
          introspect(JAM.policy.p5) {
            var v700 = forwardMatches$$1[i$$13]
          }
          var v567 = v700.primerName;
          introspect(JAM.policy.p5) {
            var v701 = reverseMatches$$1[j$$10]
          }
          var v568 = v701.primerName;
          introspect(JAM.policy.p5) {
            var v702 = forwardMatches$$1[i$$13]
          }
          var v569 = v702.name;
          introspect(JAM.policy.p5) {
            var v703 = reverseMatches$$1[j$$10]
          }
          var v570 = v703.name;
          introspect(JAM.policy.p5) {
            var v922 = forwardMatches$$1[i$$13]
          }
          var v874 = v922.positionAfter;
          introspect(JAM.policy.p5) {
            var v957 = forwardMatches$$1[i$$13]
          }
          var v704 = newDna$$1.substring(v874 - v957.matchingText.length, newDna$$1.length);
          var v924 = newDna$$1.length;
          introspect(JAM.policy.p5) {
            var v958 = reverseMatches$$1[j$$10]
          }
          var v876 = v924 - v958.positionAfter;
          introspect(JAM.policy.p5) {
            var v959 = reverseMatches$$1[j$$10]
          }
          pcrProducts$$2.push(new PcrProduct(title$$10, v565, v566, v567, v568, v569, v570, v704 + newDna$$1.substring(0, v876 + v959.matchingText.length)))
        }
      }
      j$$10 = j$$10 + 1;
      v323 = j$$10 < reverseMatches$$1.length
    }
    i$$13 = i$$13 + 1;
    v324 = i$$13 < forwardMatches$$1.length
  }
  return
}
function writeProduct(topology$$3) {
  var v325 = outputWindow.document;
  JAM.call(v325.write, v325, ["&gt;" + this.sequence.length + " bp product from " + topology$$3 + " template " + this.template + ", base " + this.start + " to base " + this.stop + " (" + this.forwardName + " - " + this.reverseName + ").\n"]);
  var v327 = outputWindow.document;
  JAM.call(v327.write, v327, [addReturns(this.sequence) + "\n\n"]);
  return
}
function PcrProduct(template, start$$4, stop, forwardName, reverseName, forwardPrimer, reversePrimer, sequence$$19) {
  this.template = template;
  this.start = start$$4;
  this.stop = stop;
  this.forwardName = forwardName;
  this.reverseName = reverseName;
  this.forwardPrimer = forwardPrimer;
  this.reversePrimer = reversePrimer;
  this.sequence = sequence$$19;
  return
}
function Match(primerName, matchingText, positionAfter) {
  this.primerName = primerName;
  this.matchingText = matchingText;
  this.positionAfter = positionAfter;
  return
}
function Primer(re$$5, name$$31) {
  this.re = re$$5;
  this.name = name$$31;
  return
}
function pcrProductSorter(a, b) {
  if(a.sequence.length < b.sequence.length) {
    return 1
  }
  if(a.sequence.length > b.sequence.length) {
    return-1
  }else {
    return 0
  }
  return
}
new PcrProduct("", 0, 0, "", "", "", "", "");
PcrProduct.prototype.writeProduct = writeProduct;
JAM.set(document, "onload", v2);
JAM.set(document.getElementById("submitbtn"), "onclick", v3);
JAM.set(document.getElementById("clearbtn"), "onclick", v4)
