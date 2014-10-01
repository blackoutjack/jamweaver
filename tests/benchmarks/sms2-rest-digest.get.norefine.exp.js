// sms2-rest-digest.js
function v4() {
  document.forms[0].elements[0].value = " ";
  return
}
function v3() {
  try {
    restDigest(document)
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
  var v11 = i$$1 < arrayOfTitles.length;
  for(;v11;) {
    introspect(JAM.policy.p5) {
      var v743 = arrayOfTitles[i$$1]
    }
    var v365 = v743.search(/\S/) == -1;
    if(!v365) {
      introspect(JAM.policy.p5) {
        var v814 = arrayOfSequences[i$$1]
      }
      var v619 = v814.search(/\S/) == -1;
      if(!v619) {
        introspect(JAM.policy.p5) {
          var v815 = arrayOfSequences[i$$1]
        }
        v619 = v815.length != lengthOfAlign
      }
      v365 = v619
    }
    if(v365) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v11 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v367 = codonTable.search(/AmAcid/) == -1;
  if(!v367) {
    var v622 = codonTable.search(/Codon/) == -1;
    if(!v622) {
      var v748 = codonTable.search(/Number/) == -1;
      if(!v748) {
        var v817 = codonTable.search(/\/1000/) == -1;
        if(!v817) {
          v817 = codonTable.search(/Fraction\s*\.\./) == -1
        }
        v748 = v817
      }
      v622 = v748
    }
    v367 = v622
  }
  if(v367) {
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
  var v16 = z$$2 < arrayOfPatterns.length;
  for(;v16;) {
    introspect(JAM.policy.p5) {
      var v625 = arrayOfPatterns[z$$2]
    }
    if(v625.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v626 = arrayOfPatterns[z$$2]
    }
    if(moreExpressionCheck(v626) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    v16 = z$$2 < arrayOfPatterns.length
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v25 = j < arrayOfPatterns.length;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAM.policy.p5) {
      var v750 = arrayOfPatterns[j]
    }
    var v374 = v750.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v992 = eval("introspect(JAM.policy.pFull) { " + v374 + " }")
    }else {
      var v992 = JAM.call(eval, null, [v374])
    }
    v19[v20] = v992;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAM.policy.p5) {
      var v628 = arrayOfPatterns[j]
    }
    var v993 = v628.match(/=[a-zA-Z\*]/).toString();
    v21[v22] = v993;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.p5) {
      var v376 = geneticCodeMatchResult[j]
    }
    var v994 = v376.replace(/=/g, "");
    v23[v24] = v994;
    j = j + 1;
    v25 = j < arrayOfPatterns.length
  }
  var i$$2 = 0;
  var v32 = i$$2 <= testSequence.length - 3;
  for(;v32;) {
    codon = testSequence.substring(i$$2, i$$2 + 3);
    j = 0;
    var v30 = j < geneticCodeMatchExp.length;
    for(;v30;) {
      introspect(JAM.policy.p5) {
        var v630 = geneticCodeMatchExp[j]
      }
      if(codon.search(v630) != -1) {
        if(oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      v30 = j < geneticCodeMatchExp.length
    }
    if(oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v32 = i$$2 <= testSequence.length - 3
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v34 = z$$3 < arrayOfPatterns$$1.length;
  for(;v34;) {
    introspect(JAM.policy.p5) {
      var v632 = arrayOfPatterns$$1[z$$3]
    }
    if(v632.search(/[^acdefghiklmnpqrstvwyz]/i) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    v34 = z$$3 < arrayOfPatterns$$1.length
  }
  var i$$3 = 0;
  var v38 = i$$3 < arrayOfPatterns$$1.length;
  for(;v38;) {
    introspect(JAM.policy.p5) {
      var v633 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v633 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v37 = j$$1 < arrayOfPatterns$$1.length;
    for(;v37;) {
      introspect(JAM.policy.p5) {
        var v634 = arrayOfPatterns$$1[j$$1]
      }
      if(v634.search(re) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      v37 = j$$1 < arrayOfPatterns$$1.length
    }
    i$$3 = i$$3 + 1;
    v38 = i$$3 < arrayOfPatterns$$1.length
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v41 = z$$4 < arrayOfPatterns$$2.length;
  for(;v41;) {
    introspect(JAM.policy.p5) {
      var v635 = arrayOfPatterns$$2[z$$4]
    }
    if(v635.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v636 = arrayOfPatterns$$2[z$$4]
    }
    if(moreExpressionCheck(v636) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    v41 = z$$4 < arrayOfPatterns$$2.length
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
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</form>"]);
  return true
}
function closePre() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</div>"]);
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</body>\n</html>\n"]);
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
  var v54 = i$$4 < alignArray.length;
  for(;v54;) {
    introspect(JAM.policy.p5) {
      var v638 = alignArray[i$$4]
    }
    if(v638.search(/[^\s]+\s/) == -1) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    v54 = i$$4 < alignArray.length
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
    var v56 = matchArray = re$$1.exec(sequenceData);
    for(;v56;) {
      arrayOfFasta.push(matchArray[0]);
      v56 = matchArray = re$$1.exec(sequenceData)
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
  var v74 = j$$2 < arrayOfPatterns$$3.length;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAM.policy.p5) {
      var v752 = arrayOfPatterns$$3[j$$2]
    }
    var v423 = v752.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v995 = eval("introspect(JAM.policy.pFull) { " + v423 + " }")
    }else {
      var v995 = JAM.call(eval, null, [v423])
    }
    v72[v73] = v995;
    j$$2 = j$$2 + 1;
    v74 = j$$2 < arrayOfPatterns$$3.length
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v80 = j$$3 < arrayOfPatterns$$4.length;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAM.policy.p5) {
      var v640 = arrayOfPatterns$$4[j$$3]
    }
    var v996 = v640.match(/=[a-zA-Z\*]/).toString();
    v76[v77] = v996;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.p5) {
      var v427 = geneticCodeMatchResult$$1[j$$3]
    }
    var v997 = v427.replace(/=/g, "");
    v78[v79] = v997;
    j$$3 = j$$3 + 1;
    v80 = j$$3 < arrayOfPatterns$$4.length
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
  var v101 = j$$4 < lengthOut;
  for(;v101;) {
    tempNum = Math.floor(Math.random() * components.length);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
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
  var v455 = expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1;
  if(!v455) {
    var v643 = expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1;
    if(!v643) {
      var v754 = expressionToCheck.search(/\[\]/) != -1;
      if(!v754) {
        var v820 = expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1;
        if(!v820) {
          var v871 = expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1;
          if(!v871) {
            var v898 = expressionToCheck.search(/\|\|/) != -1;
            if(!v898) {
              var v923 = expressionToCheck.search(/\/\|/) != -1;
              if(!v923) {
                var v936 = expressionToCheck.search(/\|\//) != -1;
                if(!v936) {
                  var v947 = expressionToCheck.search(/\[.\]/) != -1;
                  if(!v947) {
                    var v957 = expressionToCheck.search(/\</) != -1;
                    if(!v957) {
                      v957 = expressionToCheck.search(/\>/) != -1
                    }
                    v947 = v957
                  }
                  v936 = v947
                }
                v923 = v936
              }
              v898 = v923
            }
            v871 = v898
          }
          v820 = v871
        }
        v754 = v820
      }
      v643 = v754
    }
    v455 = v643
  }
  if(v455) {
    return false
  }
  return true
}
function openForm() {
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<form action="">\n']);
  return true
}
function openPre() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ["<pre>"]);
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.p1), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isColor) {
    var v112 = outputWindow.document;
    JAM.call(v112.write, v112, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"])
  }else {
    var v114 = outputWindow.document;
    JAM.call(v114.write, v114, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v116 = outputWindow.document;
  JAM.call(v116.write, v116, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"]);
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
  var v118 = outputWindow.document;
  JAM.call(v118.write, v118, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isBackground) {
    var v120 = outputWindow.document;
    JAM.call(v120.write, v120, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"])
  }else {
    var v122 = outputWindow.document;
    JAM.call(v122.write, v122, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v124 = outputWindow.document;
  JAM.call(v124.write, v124, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"]);
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
  var v127 = j$$5 < lengthOfColumn;
  for(;v127;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v127 = j$$5 < lengthOfColumn
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
  var v470 = emblFile.search(/ID/) == -1;
  if(!v470) {
    var v654 = emblFile.search(/AC/) == -1;
    if(!v654) {
      var v765 = emblFile.search(/DE/) == -1;
      if(!v765) {
        v765 = emblFile.search(/SQ/) == -1
      }
      v654 = v765
    }
    v470 = v654
  }
  if(v470) {
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
  var v475 = genBankFile.search(/LOCUS/) == -1;
  if(!v475) {
    var v657 = genBankFile.search(/DEFINITION/) == -1;
    if(!v657) {
      var v768 = genBankFile.search(/ACCESSION/) == -1;
      if(!v768) {
        v768 = genBankFile.search(/ORIGIN/) == -1
      }
      v657 = v768
    }
    v475 = v657
  }
  if(v475) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v476 = genBankFile$$1.search(/LOCUS/) == -1;
  if(!v476) {
    var v660 = genBankFile$$1.search(/DEFINITION/) == -1;
    if(!v660) {
      var v771 = genBankFile$$1.search(/ACCESSION/) == -1;
      if(!v771) {
        v771 = genBankFile$$1.search(/ORIGIN/) == -1
      }
      v660 = v771
    }
    v476 = v660
  }
  if(v476) {
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
  var v478 = emblFile$$1.search(/ID/) == -1;
  if(!v478) {
    var v663 = emblFile$$1.search(/AC/) == -1;
    if(!v663) {
      var v774 = emblFile$$1.search(/DE/) == -1;
      if(!v774) {
        v774 = emblFile$$1.search(/SQ/) == -1
      }
      v663 = v774
    }
    v478 = v663
  }
  if(v478) {
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
  var v155 = i$$5 < stopBase;
  for(;v155;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v152 = j$$6 <= basePerLine / groupSize;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        lineOfText = lineOfText + text$$10.charAt(k + i$$5);
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v152 = j$$6 <= basePerLine / groupSize
    }
    var v153 = outputWindow.document;
    JAM.call(v153.write, v153, [lineOfText + "\n"]);
    lineOfText = "";
    v155 = i$$5 < stopBase
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
    var v483 = adjustment < 0;
    if(v483) {
      v483 = adjusted >= 0
    }
    if(v483) {
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
  var v189 = i$$6 < stopBase$$2;
  for(;v189;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v165 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        if(i$$6 + k$$1 >= stopBase$$2) {
          break
        }
        lineOfText$$1 = lineOfText$$1 + text$$12.charAt(k$$1 + i$$6);
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
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
      v165 = j$$7 <= basePerLine$$2 / groupSize$$2
    }
    if(numberPosition$$1 == "left") {
      var v166 = outputWindow.document;
      JAM.call(v166.write, v166, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"]);
      if(strands$$1 == "two") {
        var v168 = outputWindow.document;
        JAM.call(v168.write, v168, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"]);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"])
      }
    }else {
      if(numberPosition$$1 == "right") {
        var v172 = outputWindow.document;
        JAM.call(v172.write, v172, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
        if(strands$$1 == "two") {
          var v174 = outputWindow.document;
          JAM.call(v174.write, v174, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
          var v176 = outputWindow.document;
          JAM.call(v176.write, v176, ["\n"])
        }
      }else {
        if(numberPosition$$1 == "above") {
          var v178 = outputWindow.document;
          JAM.call(v178.write, v178, [aboveNum + "\n"]);
          var v180 = outputWindow.document;
          JAM.call(v180.write, v180, [lineOfText$$1 + "\n"]);
          if(strands$$1 == "two") {
            var v182 = outputWindow.document;
            JAM.call(v182.write, v182, [complement(lineOfText$$1) + "\n"]);
            var v184 = outputWindow.document;
            JAM.call(v184.write, v184, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v189 = i$$6 < stopBase$$2
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
  var v210 = i$$7 < stopBase$$3;
  for(;v210;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v198 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        if(i$$7 + k$$2 >= stopBase$$3) {
          break
        }
        lineOfText$$2 = lineOfText$$2 + text$$13.charAt(k$$2 + i$$7);
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3
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
      v198 = j$$8 <= basePerLine$$3 / groupSize$$3
    }
    if(numberPosition$$2 == "left") {
      var v199 = outputWindow.document;
      JAM.call(v199.write, v199, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"])
    }else {
      if(numberPosition$$2 == "right") {
        var v201 = outputWindow.document;
        JAM.call(v201.write, v201, [lineOfText$$2 + i$$7 + "\n"])
      }else {
        if(numberPosition$$2 == "above") {
          var v203 = outputWindow.document;
          JAM.call(v203.write, v203, [aboveNum$$1 + "\n"]);
          var v205 = outputWindow.document;
          JAM.call(v205.write, v205, [lineOfText$$2 + "\n"])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v210 = i$$7 < stopBase$$3
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
  var v500 = sequence$$13.length <= firstIndexToMutate;
  if(!v500) {
    var v674 = lastIndexToMutate < 0;
    if(!v674) {
      v674 = lastIndexToMutate <= firstIndexToMutate
    }
    v500 = v674
  }
  if(v500) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    var v502 = randNum < firstIndexToMutate;
    if(!v502) {
      v502 = randNum > lastIndexToMutate
    }
    if(v502) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
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
        var v506 = components$$1[componentsIndex]
      }
      if(v506 != currentChar) {
        needNewChar = false
      }
    }
    var v507 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.p5) {
      var v508 = components$$1[componentsIndex]
    }
    sequence$$13 = v507 + v508 + sequence$$13.substring(randNum + 1, sequence$$13.length);
    i$$8 = i$$8 + 1;
    v219 = i$$8 < numMut
  }
  var v220 = outputWindow.document;
  JAM.call(v220.write, v220, [addReturns(sequence$$13)]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v226 = j$$9 < lengthOut$$1;
  for(;v226;) {
    tempNum$$1 = Math.floor(Math.random() * components$$2.length);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if(sequence$$14.length == 60) {
      var v223 = outputWindow.document;
      JAM.call(v223.write, v223, [sequence$$14 + "\n"]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v226 = j$$9 < lengthOut$$1
  }
  var v227 = outputWindow.document;
  JAM.call(v227.write, v227, [sequence$$14 + "\n"]);
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
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v234 = outputWindow.document;
  JAM.call(v234.write, v234, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"]);
  var i$$9 = 0;
  var v251 = i$$9 < arrayOfItems.length;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p5) {
      var v517 = arrayOfItems[i$$9]
    }
    matchExp = v517.match(/\/.+\//) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.p5) {
      var v781 = arrayOfItems[i$$9]
    }
    cutDistance = parseFloat(v781.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    var v243 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v243;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v519 = matchPosition >= lowerLimit;
      if(v519) {
        v519 = matchPosition < upperLimit
      }
      if(v519) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v243 = matchArray$$1 = matchExp.exec(sequence$$15)
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
    var v249 = outputWindow.document;
    var v904 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p5) {
      var v953 = arrayOfItems[i$$9]
    }
    JAM.call(v249.write, v249, [v904 + v953.match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v251 = i$$9 < arrayOfItems.length
  }
  var v252 = outputWindow.document;
  JAM.call(v252.write, v252, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"]);
  var i$$10 = 0;
  var v264 = i$$10 < arrayOfItems$$1.length;
  for(;v264;) {
    var tempNumber = 0;
    introspect(JAM.policy.p5) {
      var v528 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = v528.match(/\/[^\/]+\//) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(sequence$$16.search(matchExp$$1) != -1) {
      tempNumber = sequence$$16.match(matchExp$$1).length
    }
    var percentage = 0;
    var v684 = originalLength + 1;
    introspect(JAM.policy.p5) {
      var v840 = arrayOfItems$$1[i$$10]
    }
    if(v684 - parseFloat(v840.match(/\d+/)) > 0) {
      var v259 = 100 * tempNumber;
      var v531 = originalLength + 1;
      introspect(JAM.policy.p5) {
        var v785 = arrayOfItems$$1[i$$10]
      }
      percentage = v259 / (v531 - parseFloat(v785.match(/\d+/)))
    }
    var v262 = outputWindow.document;
    introspect(JAM.policy.p5) {
      var v954 = arrayOfItems$$1[i$$10]
    }
    JAM.call(v262.write, v262, ["<tr><td>" + v954.match(/\([^\(]+\)\b/).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n"]);
    i$$10 = i$$10 + 1;
    v264 = i$$10 < arrayOfItems$$1.length
  }
  var v265 = outputWindow.document;
  JAM.call(v265.write, v265, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v272 = sequence$$17.length > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = Math.floor(Math.random() * maxNum$$1);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    tempString2 = sequence$$17.substring(randNum$$1 + 1, sequence$$17.length);
    sequence$$17 = tempString1 + tempString2;
    if(tempSeq.length == 60) {
      var v269 = outputWindow.document;
      JAM.call(v269.write, v269, [tempSeq + "\n"]);
      tempSeq = ""
    }
    v272 = sequence$$17.length > 0
  }
  var v273 = outputWindow.document;
  JAM.call(v273.write, v273, [tempSeq + "\n"]);
  return true
}
function restDigest(theDocument) {
  var newDna = "";
  var maxInput$$3 = 1E5;
  if(testScript() == false) {
    return false
  }
  var restrictionFragments = new Array;
  var restrictionFragment;
  var v540 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v540) {
    v540 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false
  }
  if(v540) {
    return false
  }
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var i$$11 = 0;
  var v283 = i$$11 < arrayOfFasta$$1.length;
  for(;v283;) {
    introspect(JAM.policy.p5) {
      var v278 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v278);
    introspect(JAM.policy.p5) {
      var v279 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v279);
    newDna = removeNonDna(newDna);
    var v693 = theDocument.forms[0].elements[4].options;
    var v694 = theDocument.forms[0].elements[4].selectedIndex;
    introspect(JAM.policy.p5) {
      var v543 = v693[v694]
    }
    restrictionFragment = new RestrictionFragment(v543.value, title, newDna, 1, newDna.length, "sequence start", "sequence end", newDna.length);
    restrictionFragments.push(restrictionFragment);
    i$$11 = i$$11 + 1;
    v283 = i$$11 < arrayOfFasta$$1.length
  }
  var v695 = theDocument.forms[0].elements[5].options;
  var v696 = theDocument.forms[0].elements[5].selectedIndex;
  introspect(JAM.policy.p5) {
    var v545 = v695[v696]
  }
  restrictionFragments = digest(restrictionFragments, v545.value);
  var v697 = theDocument.forms[0].elements[6].options;
  var v698 = theDocument.forms[0].elements[6].selectedIndex;
  introspect(JAM.policy.p5) {
    var v546 = v697[v698]
  }
  restrictionFragments = digest(restrictionFragments, v546.value);
  var v699 = theDocument.forms[0].elements[7].options;
  var v700 = theDocument.forms[0].elements[7].selectedIndex;
  introspect(JAM.policy.p5) {
    var v547 = v699[v700]
  }
  restrictionFragments = digest(restrictionFragments, v547.value);
  restrictionFragments.sort(restrictionFragmentSorter);
  openWindow("Restriction Digest");
  openPre();
  i$$11 = 0;
  var v290 = i$$11 < restrictionFragments.length;
  for(;v290;) {
    introspect(JAM.policy.p5) {
      var v287 = restrictionFragments[i$$11]
    }
    v287.correctPositions();
    introspect(JAM.policy.p5) {
      var v288 = restrictionFragments[i$$11]
    }
    var v701 = theDocument.forms[0].elements[4].options;
    var v702 = theDocument.forms[0].elements[4].selectedIndex;
    introspect(JAM.policy.p5) {
      var v549 = v701[v702]
    }
    JAM.call(v288.writeFragment, v288, [v549.value]);
    i$$11 = i$$11 + 1;
    v290 = i$$11 < restrictionFragments.length
  }
  closePre();
  closeWindow();
  return true
}
function digest(arrayOfRestrictionFragments, enzyme) {
  if(enzyme == "") {
    return arrayOfRestrictionFragments
  }
  var newFragments = new Array;
  var positions = new Array;
  var matchPosition$$1 = 0;
  var matchExp$$2 = enzyme.match(/\/.+\//).toString();
  matchExp$$2 = matchExp$$2.replace(/\//g, "");
  matchExp$$2 = new RegExp(matchExp$$2, "gi");
  var cutDistance$$1 = parseInt(enzyme.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
  var enzymeName = enzyme.match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "");
  var matchArray$$2;
  var wasCut = false;
  var restrictionFragmentOne;
  var restrictionFragmentTwo;
  var previousCutPosition;
  var previousEnzyme;
  var previousStartPosition;
  var startRestrictionFragment;
  var lookAhead$$1 = 50;
  var lowerLimit$$1;
  var upperLimit$$1;
  var shiftValue$$1;
  var i$$12 = 0;
  var v337 = i$$12 < arrayOfRestrictionFragments.length;
  for(;v337;) {
    introspect(JAM.policy.p5) {
      var v704 = arrayOfRestrictionFragments[i$$12]
    }
    if(v704.topology == "circular") {
      introspect(JAM.policy.p5) {
        var v705 = arrayOfRestrictionFragments[i$$12]
      }
      shiftValue$$1 = v705.sequence.substring(0, lookAhead$$1).length;
      introspect(JAM.policy.p5) {
        var v800 = arrayOfRestrictionFragments[i$$12]
      }
      var v706 = v800.sequence;
      introspect(JAM.policy.p5) {
        var v892 = arrayOfRestrictionFragments[i$$12]
      }
      var v707 = v892.sequence.length - lookAhead$$1;
      introspect(JAM.policy.p5) {
        var v856 = arrayOfRestrictionFragments[i$$12]
      }
      var v556 = v706.substring(v707, v856.sequence.length);
      introspect(JAM.policy.p5) {
        var v709 = arrayOfRestrictionFragments[i$$12]
      }
      var v296 = v556 + v709.sequence;
      introspect(JAM.policy.p5) {
        var v710 = arrayOfRestrictionFragments[i$$12]
      }
      var extendedSequence = v296 + v710.sequence.substring(0, lookAhead$$1);
      lowerLimit$$1 = 0 + shiftValue$$1;
      introspect(JAM.policy.p5) {
        var v711 = arrayOfRestrictionFragments[i$$12]
      }
      upperLimit$$1 = v711.sequence.length + shiftValue$$1;
      var v302 = matchArray$$2 = matchExp$$2.exec(extendedSequence);
      for(;v302;) {
        matchPosition$$1 = matchExp$$2.lastIndex;
        matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
        var v560 = matchPosition$$1 >= lowerLimit$$1;
        if(v560) {
          v560 = matchPosition$$1 < upperLimit$$1
        }
        if(v560) {
          positions.push(matchPosition$$1 - shiftValue$$1);
          wasCut = true
        }
        matchExp$$2.lastIndex = matchExp$$2.lastIndex - RegExp.lastMatch.length + 1;
        v302 = matchArray$$2 = matchExp$$2.exec(extendedSequence)
      }
    }else {
      introspect(JAM.policy.p5) {
        var v713 = arrayOfRestrictionFragments[i$$12]
      }
      var v304 = matchArray$$2 = matchExp$$2.exec(v713.sequence);
      for(;v304;) {
        matchPosition$$1 = matchExp$$2.lastIndex;
        matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
        positions.push(matchPosition$$1);
        wasCut = true;
        matchExp$$2.lastIndex = matchExp$$2.lastIndex - RegExp.lastMatch.length + 1;
        introspect(JAM.policy.p5) {
          var v715 = arrayOfRestrictionFragments[i$$12]
        }
        v304 = matchArray$$2 = matchExp$$2.exec(v715.sequence)
      }
    }
    if(!wasCut) {
      introspect(JAM.policy.p5) {
        var v306 = arrayOfRestrictionFragments[i$$12]
      }
      newFragments.push(v306)
    }else {
      wasCut = false;
      previousCutPosition = 0;
      introspect(JAM.policy.p5) {
        var v307 = arrayOfRestrictionFragments[i$$12]
      }
      previousEnzyme = v307.startEnzyme;
      introspect(JAM.policy.p5) {
        var v308 = arrayOfRestrictionFragments[i$$12]
      }
      previousStartPosition = v308.start;
      var j$$10 = 0;
      var v335 = j$$10 < positions.length;
      for(;v335;) {
        introspect(JAM.policy.p5) {
          var v716 = arrayOfRestrictionFragments[i$$12]
        }
        if(v716.topology == "circular") {
          introspect(JAM.policy.p5) {
            var v309 = arrayOfRestrictionFragments[i$$12]
          }
          v309.topology = "linear";
          introspect(JAM.policy.p5) {
            var v569 = arrayOfRestrictionFragments[i$$12]
          }
          var v310 = v569.sourceName;
          introspect(JAM.policy.p5) {
            var v717 = arrayOfRestrictionFragments[i$$12]
          }
          var v570 = v717.sequence;
          introspect(JAM.policy.p5) {
            var v571 = positions[j$$10]
          }
          var v311 = v570.substring(previousCutPosition, v571);
          var v718 = previousStartPosition;
          introspect(JAM.policy.p5) {
            var v893 = arrayOfRestrictionFragments[i$$12]
          }
          var v857 = v893.sequence;
          introspect(JAM.policy.p5) {
            var v858 = positions[j$$10]
          }
          var v312 = v718 + v857.substring(previousCutPosition, v858).length - 1;
          introspect(JAM.policy.p5) {
            var v573 = arrayOfRestrictionFragments[i$$12]
          }
          startRestrictionFragment = new RestrictionFragment("linear", v310, v311, previousStartPosition, v312, previousEnzyme, enzymeName, v573.originalLength)
        }else {
          introspect(JAM.policy.p5) {
            var v574 = arrayOfRestrictionFragments[i$$12]
          }
          var v314 = v574.sourceName;
          introspect(JAM.policy.p5) {
            var v720 = arrayOfRestrictionFragments[i$$12]
          }
          var v575 = v720.sequence;
          introspect(JAM.policy.p5) {
            var v576 = positions[j$$10]
          }
          var v315 = v575.substring(previousCutPosition, v576);
          var v721 = previousStartPosition;
          introspect(JAM.policy.p5) {
            var v894 = arrayOfRestrictionFragments[i$$12]
          }
          var v859 = v894.sequence;
          introspect(JAM.policy.p5) {
            var v860 = positions[j$$10]
          }
          var v316 = v721 + v859.substring(previousCutPosition, v860).length - 1;
          introspect(JAM.policy.p5) {
            var v578 = arrayOfRestrictionFragments[i$$12]
          }
          restrictionFragmentOne = new RestrictionFragment("linear", v314, v315, previousStartPosition, v316, previousEnzyme, enzymeName, v578.originalLength);
          newFragments.push(restrictionFragmentOne)
        }
        if(j$$10 == positions.length - 1) {
          if(startRestrictionFragment == null) {
            introspect(JAM.policy.p5) {
              var v580 = arrayOfRestrictionFragments[i$$12]
            }
            var v319 = v580.sourceName;
            introspect(JAM.policy.p5) {
              var v724 = arrayOfRestrictionFragments[i$$12]
            }
            var v581 = v724.sequence;
            introspect(JAM.policy.p5) {
              var v582 = positions[j$$10]
            }
            introspect(JAM.policy.p5) {
              var v805 = arrayOfRestrictionFragments[i$$12]
            }
            var v320 = v581.substring(v582, v805.sequence.length);
            var v584 = previousStartPosition;
            introspect(JAM.policy.p5) {
              var v861 = arrayOfRestrictionFragments[i$$12]
            }
            var v806 = v861.sequence;
            introspect(JAM.policy.p5) {
              var v807 = positions[j$$10]
            }
            var v321 = v584 + v806.substring(previousCutPosition, v807).length;
            introspect(JAM.policy.p5) {
              var v586 = arrayOfRestrictionFragments[i$$12]
            }
            var v322 = v586.stop;
            introspect(JAM.policy.p5) {
              var v587 = arrayOfRestrictionFragments[i$$12]
            }
            var v323 = v587.stopEnzyme;
            introspect(JAM.policy.p5) {
              var v588 = arrayOfRestrictionFragments[i$$12]
            }
            restrictionFragmentTwo = new RestrictionFragment("linear", v319, v320, v321, v322, enzymeName, v323, v588.originalLength);
            newFragments.push(restrictionFragmentTwo)
          }else {
            introspect(JAM.policy.p5) {
              var v589 = arrayOfRestrictionFragments[i$$12]
            }
            var v325 = v589.sourceName;
            introspect(JAM.policy.p5) {
              var v808 = arrayOfRestrictionFragments[i$$12]
            }
            var v727 = v808.sequence;
            introspect(JAM.policy.p5) {
              var v728 = positions[j$$10]
            }
            introspect(JAM.policy.p5) {
              var v862 = arrayOfRestrictionFragments[i$$12]
            }
            var v326 = v727.substring(v728, v862.sequence.length) + startRestrictionFragment.sequence;
            var v592 = previousStartPosition;
            introspect(JAM.policy.p5) {
              var v863 = arrayOfRestrictionFragments[i$$12]
            }
            var v810 = v863.sequence;
            introspect(JAM.policy.p5) {
              var v811 = positions[j$$10]
            }
            var v327 = v592 + v810.substring(previousCutPosition, v811).length;
            var v328 = startRestrictionFragment.stop;
            var v329 = startRestrictionFragment.stopEnzyme;
            introspect(JAM.policy.p5) {
              var v594 = arrayOfRestrictionFragments[i$$12]
            }
            restrictionFragmentTwo = new RestrictionFragment("linear", v325, v326, v327, v328, enzymeName, v329, v594.originalLength);
            newFragments.push(restrictionFragmentTwo)
          }
        }
        previousCutPosition = positions[j$$10];
        previousEnzyme = enzymeName;
        introspect(JAM.policy.p5) {
          var v595 = arrayOfRestrictionFragments[i$$12]
        }
        var v333 = v595.start;
        introspect(JAM.policy.p5) {
          var v334 = positions[j$$10]
        }
        previousStartPosition = v333 + v334;
        j$$10 = j$$10 + 1;
        v335 = j$$10 < positions.length
      }
    }
    positions = new Array;
    startRestrictionFragment = null;
    i$$12 = i$$12 + 1;
    v337 = i$$12 < arrayOfRestrictionFragments.length
  }
  return newFragments
}
function restrictionFragmentSorter(a, b) {
  if(a.sequence.length < b.sequence.length) {
    return 1
  }
  if(a.sequence.length > b.sequence.length) {
    return-1
  }
  if(a.sequence.length == b.sequence.length) {
    if(a.start < b.start) {
      return-1
    }
    if(a.start > b.start) {
      return 1
    }else {
      return 0
    }
  }
  return
}
function writeFragment(topology$$1) {
  if(this.topology == "linear") {
    var v343 = outputWindow.document;
    JAM.call(v343.write, v343, ["&gt;" + this.sequence.length + " bp linear fragment from " + topology$$1 + " parent " + this.sourceName + ", base " + this.start + " to base " + this.stop + " (" + this.startEnzyme + " - " + this.stopEnzyme + ").\n"])
  }else {
    var v345 = outputWindow.document;
    JAM.call(v345.write, v345, ["&gt;" + this.sequence.length + " bp circular molecule from " + topology$$1 + " parent " + this.sourceName + ".\n"])
  }
  var v348 = outputWindow.document;
  JAM.call(v348.write, v348, [addReturns(this.sequence) + "\n\n"]);
  return
}
function correctPositions() {
  if(this.start > this.originalLength) {
    this.start = this.start - this.originalLength
  }
  if(this.stop > this.originalLength) {
    this.stop = this.stop - this.originalLength
  }
  if(this.stop == 0) {
    this.stop = this.originalLength
  }
  return
}
function RestrictionFragment(topology$$2, sourceName, sequence$$18, start$$4, stop, startEnzyme, stopEnzyme, originalLength$$1) {
  this.topology = topology$$2;
  this.sourceName = sourceName;
  this.sequence = sequence$$18;
  this.start = start$$4;
  this.stop = stop;
  this.startEnzyme = startEnzyme;
  this.stopEnzyme = stopEnzyme;
  this.originalLength = originalLength$$1;
  return
}
new RestrictionFragment("", "", "", 0, 0, "", "", 0);
RestrictionFragment.prototype.writeFragment = writeFragment;
RestrictionFragment.prototype.correctPositions = correctPositions;
JAM.set(document, "onload", v2);
JAM.set(document.getElementById("submitbtn"), "onclick", v3);
JAM.set(document.getElementById("clearbtn"), "onclick", v4)
