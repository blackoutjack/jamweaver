// sms2-codon-plot.js
function v5() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return
}
function v4() {
  try {
    codonPlot(document)
  }catch(e$$7) {
    alert("The following error was encountered: " + e$$7)
  }
  return
}
function v3() {
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
  var v13 = i$$1 < arrayOfTitles.length;
  for(;v13;) {
    introspect(JAM.policy.p5) {
      var v614 = arrayOfTitles[i$$1]
    }
    var v316 = v614.search(/\S/) == -1;
    if(!v316) {
      introspect(JAM.policy.p5) {
        var v669 = arrayOfSequences[i$$1]
      }
      var v524 = v669.search(/\S/) == -1;
      if(!v524) {
        introspect(JAM.policy.p5) {
          var v670 = arrayOfSequences[i$$1]
        }
        v524 = v670.length != lengthOfAlign
      }
      v316 = v524
    }
    if(v316) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v13 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v318 = codonTable.search(/AmAcid/) == -1;
  if(!v318) {
    var v527 = codonTable.search(/Codon/) == -1;
    if(!v527) {
      var v619 = codonTable.search(/Number/) == -1;
      if(!v619) {
        var v672 = codonTable.search(/\/1000/) == -1;
        if(!v672) {
          v672 = codonTable.search(/Fraction\s*\.\./) == -1
        }
        v619 = v672
      }
      v527 = v619
    }
    v318 = v527
  }
  if(v318) {
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
  var v18 = z$$2 < arrayOfPatterns.length;
  for(;v18;) {
    introspect(JAM.policy.p5) {
      var v530 = arrayOfPatterns[z$$2]
    }
    if(v530.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v531 = arrayOfPatterns[z$$2]
    }
    if(moreExpressionCheck(v531) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    v18 = z$$2 < arrayOfPatterns.length
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v27 = j < arrayOfPatterns.length;
  for(;v27;) {
    var v21 = geneticCodeMatchExp;
    var v22 = j;
    introspect(JAM.policy.p5) {
      var v621 = arrayOfPatterns[j]
    }
    var v325 = v621.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v815 = eval("introspect(JAM.policy.pFull) { " + v325 + " }")
    }else {
      var v815 = JAM.call(eval, null, [v325])
    }
    v21[v22] = v815;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.p5) {
      var v533 = arrayOfPatterns[j]
    }
    var v816 = v533.match(/=[a-zA-Z\*]/).toString();
    v23[v24] = v816;
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    introspect(JAM.policy.p5) {
      var v327 = geneticCodeMatchResult[j]
    }
    var v817 = v327.replace(/=/g, "");
    v25[v26] = v817;
    j = j + 1;
    v27 = j < arrayOfPatterns.length
  }
  var i$$2 = 0;
  var v34 = i$$2 <= testSequence.length - 3;
  for(;v34;) {
    codon = testSequence.substring(i$$2, i$$2 + 3);
    j = 0;
    var v32 = j < geneticCodeMatchExp.length;
    for(;v32;) {
      introspect(JAM.policy.p5) {
        var v535 = geneticCodeMatchExp[j]
      }
      if(codon.search(v535) != -1) {
        if(oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      v32 = j < geneticCodeMatchExp.length
    }
    if(oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v34 = i$$2 <= testSequence.length - 3
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v36 = z$$3 < arrayOfPatterns$$1.length;
  for(;v36;) {
    introspect(JAM.policy.p5) {
      var v537 = arrayOfPatterns$$1[z$$3]
    }
    if(v537.search(/[^acdefghiklmnpqrstvwyz]/i) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    v36 = z$$3 < arrayOfPatterns$$1.length
  }
  var i$$3 = 0;
  var v40 = i$$3 < arrayOfPatterns$$1.length;
  for(;v40;) {
    introspect(JAM.policy.p5) {
      var v538 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v538 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v39 = j$$1 < arrayOfPatterns$$1.length;
    for(;v39;) {
      introspect(JAM.policy.p5) {
        var v539 = arrayOfPatterns$$1[j$$1]
      }
      if(v539.search(re) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      v39 = j$$1 < arrayOfPatterns$$1.length
    }
    i$$3 = i$$3 + 1;
    v40 = i$$3 < arrayOfPatterns$$1.length
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v43 = z$$4 < arrayOfPatterns$$2.length;
  for(;v43;) {
    introspect(JAM.policy.p5) {
      var v540 = arrayOfPatterns$$2[z$$4]
    }
    if(v540.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v541 = arrayOfPatterns$$2[z$$4]
    }
    if(moreExpressionCheck(v541) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    v43 = z$$4 < arrayOfPatterns$$2.length
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
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</form>"]);
  return true
}
function closePre() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</div>"]);
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v52 = outputWindow.document;
  JAM.call(v52.write, v52, ["</body>\n</html>\n"]);
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
  var v56 = i$$4 < alignArray.length;
  for(;v56;) {
    introspect(JAM.policy.p5) {
      var v543 = alignArray[i$$4]
    }
    if(v543.search(/[^\s]+\s/) == -1) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    v56 = i$$4 < alignArray.length
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
    var v58 = matchArray = re$$1.exec(sequenceData);
    for(;v58;) {
      arrayOfFasta.push(matchArray[0]);
      v58 = matchArray = re$$1.exec(sequenceData)
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
  var v76 = j$$2 < arrayOfPatterns$$3.length;
  for(;v76;) {
    var v74 = geneticCodeMatchExp$$1;
    var v75 = j$$2;
    introspect(JAM.policy.p5) {
      var v623 = arrayOfPatterns$$3[j$$2]
    }
    var v374 = v623.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v818 = eval("introspect(JAM.policy.pFull) { " + v374 + " }")
    }else {
      var v818 = JAM.call(eval, null, [v374])
    }
    v74[v75] = v818;
    j$$2 = j$$2 + 1;
    v76 = j$$2 < arrayOfPatterns$$3.length
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v82 = j$$3 < arrayOfPatterns$$4.length;
  for(;v82;) {
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.p5) {
      var v545 = arrayOfPatterns$$4[j$$3]
    }
    var v819 = v545.match(/=[a-zA-Z\*]/).toString();
    v78[v79] = v819;
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    introspect(JAM.policy.p5) {
      var v378 = geneticCodeMatchResult$$1[j$$3]
    }
    var v820 = v378.replace(/=/g, "");
    v80[v81] = v820;
    j$$3 = j$$3 + 1;
    v82 = j$$3 < arrayOfPatterns$$4.length
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
  var v103 = j$$4 < lengthOut;
  for(;v103;) {
    tempNum = Math.floor(Math.random() * components.length);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v103 = j$$4 < lengthOut
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
  var v406 = expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1;
  if(!v406) {
    var v548 = expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1;
    if(!v548) {
      var v625 = expressionToCheck.search(/\[\]/) != -1;
      if(!v625) {
        var v675 = expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1;
        if(!v675) {
          var v710 = expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1;
          if(!v710) {
            var v727 = expressionToCheck.search(/\|\|/) != -1;
            if(!v727) {
              var v743 = expressionToCheck.search(/\/\|/) != -1;
              if(!v743) {
                var v759 = expressionToCheck.search(/\|\//) != -1;
                if(!v759) {
                  var v772 = expressionToCheck.search(/\[.\]/) != -1;
                  if(!v772) {
                    var v784 = expressionToCheck.search(/\</) != -1;
                    if(!v784) {
                      v784 = expressionToCheck.search(/\>/) != -1
                    }
                    v772 = v784
                  }
                  v759 = v772
                }
                v743 = v759
              }
              v727 = v743
            }
            v710 = v727
          }
          v675 = v710
        }
        v625 = v675
      }
      v548 = v625
    }
    v406 = v548
  }
  if(v406) {
    return false
  }
  return true
}
function openForm() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<form action="">\n']);
  return true
}
function openPre() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ["<pre>"]);
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.p1), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
  outputWindow.focus();
  var v112 = outputWindow.document;
  JAM.call(v112.write, v112, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isColor) {
    var v114 = outputWindow.document;
    JAM.call(v114.write, v114, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"])
  }else {
    var v116 = outputWindow.document;
    JAM.call(v116.write, v116, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v118 = outputWindow.document;
  JAM.call(v118.write, v118, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"]);
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
  var v120 = outputWindow.document;
  JAM.call(v120.write, v120, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isBackground) {
    var v122 = outputWindow.document;
    JAM.call(v122.write, v122, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"])
  }else {
    var v124 = outputWindow.document;
    JAM.call(v124.write, v124, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v126 = outputWindow.document;
  JAM.call(v126.write, v126, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"]);
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
  var v129 = j$$5 < lengthOfColumn;
  for(;v129;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v129 = j$$5 < lengthOfColumn
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
  var v421 = emblFile.search(/ID/) == -1;
  if(!v421) {
    var v559 = emblFile.search(/AC/) == -1;
    if(!v559) {
      var v636 = emblFile.search(/DE/) == -1;
      if(!v636) {
        v636 = emblFile.search(/SQ/) == -1
      }
      v559 = v636
    }
    v421 = v559
  }
  if(v421) {
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
  var v426 = genBankFile.search(/LOCUS/) == -1;
  if(!v426) {
    var v562 = genBankFile.search(/DEFINITION/) == -1;
    if(!v562) {
      var v639 = genBankFile.search(/ACCESSION/) == -1;
      if(!v639) {
        v639 = genBankFile.search(/ORIGIN/) == -1
      }
      v562 = v639
    }
    v426 = v562
  }
  if(v426) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v427 = genBankFile$$1.search(/LOCUS/) == -1;
  if(!v427) {
    var v565 = genBankFile$$1.search(/DEFINITION/) == -1;
    if(!v565) {
      var v642 = genBankFile$$1.search(/ACCESSION/) == -1;
      if(!v642) {
        v642 = genBankFile$$1.search(/ORIGIN/) == -1
      }
      v565 = v642
    }
    v427 = v565
  }
  if(v427) {
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
  var v429 = emblFile$$1.search(/ID/) == -1;
  if(!v429) {
    var v568 = emblFile$$1.search(/AC/) == -1;
    if(!v568) {
      var v645 = emblFile$$1.search(/DE/) == -1;
      if(!v645) {
        v645 = emblFile$$1.search(/SQ/) == -1
      }
      v568 = v645
    }
    v429 = v568
  }
  if(v429) {
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
  var v157 = i$$5 < stopBase;
  for(;v157;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v154 = j$$6 <= basePerLine / groupSize;
    for(;v154;) {
      var v153 = k < groupSize;
      for(;v153;) {
        lineOfText = lineOfText + text$$10.charAt(k + i$$5);
        k = k + 1;
        v153 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v154 = j$$6 <= basePerLine / groupSize
    }
    var v155 = outputWindow.document;
    JAM.call(v155.write, v155, [lineOfText + "\n"]);
    lineOfText = "";
    v157 = i$$5 < stopBase
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
    var v434 = adjustment < 0;
    if(v434) {
      v434 = adjusted >= 0
    }
    if(v434) {
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
  var v191 = i$$6 < stopBase$$2;
  for(;v191;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v167 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for(;v167;) {
      var v162 = k$$1 < groupSize$$2;
      for(;v162;) {
        if(i$$6 + k$$1 >= stopBase$$2) {
          break
        }
        lineOfText$$1 = lineOfText$$1 + text$$12.charAt(k$$1 + i$$6);
        k$$1 = k$$1 + 1;
        v162 = k$$1 < groupSize$$2
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
      v167 = j$$7 <= basePerLine$$2 / groupSize$$2
    }
    if(numberPosition$$1 == "left") {
      var v168 = outputWindow.document;
      JAM.call(v168.write, v168, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"]);
      if(strands$$1 == "two") {
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"]);
        var v172 = outputWindow.document;
        JAM.call(v172.write, v172, ["\n"])
      }
    }else {
      if(numberPosition$$1 == "right") {
        var v174 = outputWindow.document;
        JAM.call(v174.write, v174, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
        if(strands$$1 == "two") {
          var v176 = outputWindow.document;
          JAM.call(v176.write, v176, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
          var v178 = outputWindow.document;
          JAM.call(v178.write, v178, ["\n"])
        }
      }else {
        if(numberPosition$$1 == "above") {
          var v180 = outputWindow.document;
          JAM.call(v180.write, v180, [aboveNum + "\n"]);
          var v182 = outputWindow.document;
          JAM.call(v182.write, v182, [lineOfText$$1 + "\n"]);
          if(strands$$1 == "two") {
            var v184 = outputWindow.document;
            JAM.call(v184.write, v184, [complement(lineOfText$$1) + "\n"]);
            var v186 = outputWindow.document;
            JAM.call(v186.write, v186, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v191 = i$$6 < stopBase$$2
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
  var v212 = i$$7 < stopBase$$3;
  for(;v212;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v200 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for(;v200;) {
      var v195 = k$$2 < groupSize$$3;
      for(;v195;) {
        if(i$$7 + k$$2 >= stopBase$$3) {
          break
        }
        lineOfText$$2 = lineOfText$$2 + text$$13.charAt(k$$2 + i$$7);
        k$$2 = k$$2 + 1;
        v195 = k$$2 < groupSize$$3
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
      v200 = j$$8 <= basePerLine$$3 / groupSize$$3
    }
    if(numberPosition$$2 == "left") {
      var v201 = outputWindow.document;
      JAM.call(v201.write, v201, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"])
    }else {
      if(numberPosition$$2 == "right") {
        var v203 = outputWindow.document;
        JAM.call(v203.write, v203, [lineOfText$$2 + i$$7 + "\n"])
      }else {
        if(numberPosition$$2 == "above") {
          var v205 = outputWindow.document;
          JAM.call(v205.write, v205, [aboveNum$$1 + "\n"]);
          var v207 = outputWindow.document;
          JAM.call(v207.write, v207, [lineOfText$$2 + "\n"])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v212 = i$$7 < stopBase$$3
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
  var v451 = sequence$$13.length <= firstIndexToMutate;
  if(!v451) {
    var v579 = lastIndexToMutate < 0;
    if(!v579) {
      v579 = lastIndexToMutate <= firstIndexToMutate
    }
    v451 = v579
  }
  if(v451) {
    numMut = 0
  }
  var i$$8 = 0;
  var v221 = i$$8 < numMut;
  for(;v221;) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    var v453 = randNum < firstIndexToMutate;
    if(!v453) {
      v453 = randNum > lastIndexToMutate
    }
    if(v453) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v221 = i$$8 < numMut;
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
        var v457 = components$$1[componentsIndex]
      }
      if(v457 != currentChar) {
        needNewChar = false
      }
    }
    var v458 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.p5) {
      var v459 = components$$1[componentsIndex]
    }
    sequence$$13 = v458 + v459 + sequence$$13.substring(randNum + 1, sequence$$13.length);
    i$$8 = i$$8 + 1;
    v221 = i$$8 < numMut
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, [addReturns(sequence$$13)]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v228 = j$$9 < lengthOut$$1;
  for(;v228;) {
    tempNum$$1 = Math.floor(Math.random() * components$$2.length);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if(sequence$$14.length == 60) {
      var v225 = outputWindow.document;
      JAM.call(v225.write, v225, [sequence$$14 + "\n"]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v228 = j$$9 < lengthOut$$1
  }
  var v229 = outputWindow.document;
  JAM.call(v229.write, v229, [sequence$$14 + "\n"]);
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
  var v235 = outputWindow.document;
  JAM.call(v235.write, v235, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v236 = outputWindow.document;
  JAM.call(v236.write, v236, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"]);
  var i$$9 = 0;
  var v253 = i$$9 < arrayOfItems.length;
  for(;v253;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p5) {
      var v468 = arrayOfItems[i$$9]
    }
    matchExp = v468.match(/\/.+\//) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.p5) {
      var v652 = arrayOfItems[i$$9]
    }
    cutDistance = parseFloat(v652.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    var v245 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v245;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v470 = matchPosition >= lowerLimit;
      if(v470) {
        v470 = matchPosition < upperLimit
      }
      if(v470) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v245 = matchArray$$1 = matchExp.exec(sequence$$15)
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
    var v251 = outputWindow.document;
    var v733 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p5) {
      var v778 = arrayOfItems[i$$9]
    }
    JAM.call(v251.write, v251, [v733 + v778.match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v253 = i$$9 < arrayOfItems.length
  }
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v256 = outputWindow.document;
  JAM.call(v256.write, v256, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"]);
  var i$$10 = 0;
  var v266 = i$$10 < arrayOfItems$$1.length;
  for(;v266;) {
    var tempNumber = 0;
    introspect(JAM.policy.p5) {
      var v479 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = v479.match(/\/[^\/]+\//) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(sequence$$16.search(matchExp$$1) != -1) {
      tempNumber = sequence$$16.match(matchExp$$1).length
    }
    var percentage = 0;
    var v589 = originalLength + 1;
    introspect(JAM.policy.p5) {
      var v695 = arrayOfItems$$1[i$$10]
    }
    if(v589 - parseFloat(v695.match(/\d+/)) > 0) {
      var v261 = 100 * tempNumber;
      var v482 = originalLength + 1;
      introspect(JAM.policy.p5) {
        var v656 = arrayOfItems$$1[i$$10]
      }
      percentage = v261 / (v482 - parseFloat(v656.match(/\d+/)))
    }
    var v264 = outputWindow.document;
    introspect(JAM.policy.p5) {
      var v779 = arrayOfItems$$1[i$$10]
    }
    JAM.call(v264.write, v264, ["<tr><td>" + v779.match(/\([^\(]+\)\b/).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n"]);
    i$$10 = i$$10 + 1;
    v266 = i$$10 < arrayOfItems$$1.length
  }
  var v267 = outputWindow.document;
  JAM.call(v267.write, v267, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v274 = sequence$$17.length > 0;
  for(;v274;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = Math.floor(Math.random() * maxNum$$1);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    tempString2 = sequence$$17.substring(randNum$$1 + 1, sequence$$17.length);
    sequence$$17 = tempString1 + tempString2;
    if(tempSeq.length == 60) {
      var v271 = outputWindow.document;
      JAM.call(v271.write, v271, [tempSeq + "\n"]);
      tempSeq = ""
    }
    v274 = sequence$$17.length > 0
  }
  var v275 = outputWindow.document;
  JAM.call(v275.write, v275, [tempSeq + "\n"]);
  return true
}
function fillCodon(aminoAcid, number, perThou, fraction) {
  this.aminoAcid = aminoAcid;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return
}
function Codon() {
  return
}
function codonPlot(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E4;
  var codonTable$$1;
  var title$$9;
  if(testScript() == false) {
    return false
  }
  var v491 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v491) {
    var v595 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
    if(!v595) {
      v595 = checkCodonTable(theDocument.forms[0].elements[4].value) == false
    }
    v491 = v595
  }
  if(v491) {
    return false
  }
  codonTable$$1 = makeCodonTable(theDocument.forms[0].elements[4].value);
  if(codonTable$$1 == false) {
    return false
  }
  newDna = getSequenceFromFasta(theDocument.forms[0].elements[0].value);
  title$$9 = getTitleFromFasta(theDocument.forms[0].elements[0].value);
  verifyDna(newDna);
  newDna = removeNonDna(newDna);
  openWindow("Codon Plot");
  var v283 = outputWindow.document;
  JAM.call(v283.write, v283, [getInfoFromTitleAndSequence(title$$9, newDna)]);
  openPre();
  writeCodonPlot(codonTable$$1, newDna);
  closePre();
  closeWindow();
  return true
}
function writeCodonPlot(codonTable$$2, sequence$$18) {
  function v2(str$$8, p1$$2, offset$$14, s$$4) {
    try {
      var v495 = codonTable$$2;
      var v496 = p1$$2.toString().toLowerCase();
      introspect(JAM.policy.p5) {
        var v285 = v495[v496]
      }
      aminoAcid$$1 = v285.aminoAcid;
      var v497 = codonTable$$2;
      var v498 = p1$$2.toString().toLowerCase();
      introspect(JAM.policy.p5) {
        var v286 = v497[v498]
      }
      yValue = v286.fraction
    }catch(e$$5) {
      aminoAcid$$1 = "???";
      yValue = 0
    }
    return"<b>" + p1$$2.toString().toLowerCase() + ", " + (offset$$14 + 1) + " to " + (offset$$14 + 3) + " (" + aminoAcid$$1 + ")</b>\n" + markString.substring(0, Math.round(yValue * markString.length)) + " " + yValue.toFixed(2) + "\n\n"
  }
  var markString = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  var codon$$1;
  var perThou$$1;
  var fraction$$1;
  var yValue;
  var aminoAcid$$1;
  sequence$$18 = sequence$$18.replace(/u/gi, "t");
  sequence$$18 = sequence$$18.replace(/(...)/g, v2);
  var v288 = outputWindow.document;
  JAM.call(v288.write, v288, [sequence$$18 + "\n"]);
  return true
}
function makeCodonTable(gcgTable) {
  gcgTable = gcgTable.replace(/[^\.]*\.\./, "");
  var tableArray = gcgTable.split(/[\f\n\r]/);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$3 = new CodonTable;
  var i$$11 = 0;
  var v299 = i$$11 < tableArray.length;
  for(;v299;) {
    introspect(JAM.policy.p5) {
      var v502 = tableArray[i$$11]
    }
    var v298 = matchArray$$2 = re$$3.exec(v502);
    for(;v298;) {
      try {
        var v503 = codonTable$$3;
        var v504 = matchArray$$2[2].toLowerCase();
        introspect(JAM.policy.p5) {
          var v290 = v503[v504]
        }
        JAM.call(v290.fillCodon, v290, [matchArray$$2[1], parseFloat(matchArray$$2[3]), parseFloat(matchArray$$2[4]), parseFloat(matchArray$$2[5])]);
        codonTable$$3.codons.push(matchArray$$2[2].toLowerCase())
      }catch(e$$6) {
        alert("There is a problem with a line of the codon table: " + matchArray$$2[1] + " " + matchArray$$2[2] + " " + matchArray$$2[3] + " " + matchArray$$2[4] + " " + matchArray$$2[5]);
        return false
      }
      introspect(JAM.policy.p5) {
        var v511 = tableArray[i$$11]
      }
      v298 = matchArray$$2 = re$$3.exec(v511)
    }
    i$$11 = i$$11 + 1;
    v299 = i$$11 < tableArray.length
  }
  codonTable$$3.fixFraction();
  return codonTable$$3
}
function CodonTable() {
  var v821 = new Array;
  this.codons = v821;
  var v822 = new Codon;
  this.ggg = v822;
  var v823 = new Codon;
  this.gga = v823;
  var v824 = new Codon;
  this.ggt = v824;
  var v825 = new Codon;
  this.ggc = v825;
  var v826 = new Codon;
  this.gag = v826;
  var v827 = new Codon;
  this.gaa = v827;
  var v828 = new Codon;
  this.gat = v828;
  var v829 = new Codon;
  this.gac = v829;
  var v830 = new Codon;
  this.gtg = v830;
  var v831 = new Codon;
  this.gta = v831;
  var v832 = new Codon;
  this.gtt = v832;
  var v833 = new Codon;
  this.gtc = v833;
  var v834 = new Codon;
  this.gcg = v834;
  var v835 = new Codon;
  this.gca = v835;
  var v836 = new Codon;
  this.gct = v836;
  var v837 = new Codon;
  this.gcc = v837;
  var v838 = new Codon;
  this.agg = v838;
  var v839 = new Codon;
  this.aga = v839;
  var v840 = new Codon;
  this.agt = v840;
  var v841 = new Codon;
  this.agc = v841;
  var v842 = new Codon;
  this.aag = v842;
  var v843 = new Codon;
  this.aaa = v843;
  var v844 = new Codon;
  this.aat = v844;
  var v845 = new Codon;
  this.aac = v845;
  var v846 = new Codon;
  this.atg = v846;
  var v847 = new Codon;
  this.ata = v847;
  var v848 = new Codon;
  this.att = v848;
  var v849 = new Codon;
  this.atc = v849;
  var v850 = new Codon;
  this.acg = v850;
  var v851 = new Codon;
  this.aca = v851;
  var v852 = new Codon;
  this.act = v852;
  var v853 = new Codon;
  this.acc = v853;
  var v854 = new Codon;
  this.tgg = v854;
  var v855 = new Codon;
  this.tga = v855;
  var v856 = new Codon;
  this.tgt = v856;
  var v857 = new Codon;
  this.tgc = v857;
  var v858 = new Codon;
  this.tag = v858;
  var v859 = new Codon;
  this.taa = v859;
  var v860 = new Codon;
  this.tat = v860;
  var v861 = new Codon;
  this.tac = v861;
  var v862 = new Codon;
  this.ttg = v862;
  var v863 = new Codon;
  this.tta = v863;
  var v864 = new Codon;
  this.ttt = v864;
  var v865 = new Codon;
  this.ttc = v865;
  var v866 = new Codon;
  this.tcg = v866;
  var v867 = new Codon;
  this.tca = v867;
  var v868 = new Codon;
  this.tct = v868;
  var v869 = new Codon;
  this.tcc = v869;
  var v870 = new Codon;
  this.cgg = v870;
  var v871 = new Codon;
  this.cga = v871;
  var v872 = new Codon;
  this.cgt = v872;
  var v873 = new Codon;
  this.cgc = v873;
  var v874 = new Codon;
  this.cag = v874;
  var v875 = new Codon;
  this.caa = v875;
  var v876 = new Codon;
  this.cat = v876;
  var v877 = new Codon;
  this.cac = v877;
  var v878 = new Codon;
  this.ctg = v878;
  var v879 = new Codon;
  this.cta = v879;
  var v880 = new Codon;
  this.ctt = v880;
  var v881 = new Codon;
  this.ctc = v881;
  var v882 = new Codon;
  this.ccg = v882;
  var v883 = new Codon;
  this.cca = v883;
  var v884 = new Codon;
  this.cct = v884;
  var v885 = new Codon;
  this.ccc = v885;
  return
}
function fixFraction() {
  var i$$12 = 0;
  var v306 = i$$12 < this.codons.length;
  for(;v306;) {
    var v300 = this.codons;
    introspect(JAM.policy.p5) {
      var outerCodon = v300[i$$12]
    }
    var perThouTotal = 0;
    var j$$10 = 0;
    var v304 = j$$10 < this.codons.length;
    for(;v304;) {
      var v301 = this.codons;
      introspect(JAM.policy.p5) {
        var innerCodon = v301[j$$10]
      }
      introspect(JAM.policy.p5) {
        var v607 = this[outerCodon]
      }
      var v515 = v607.aminoAcid;
      introspect(JAM.policy.p5) {
        var v608 = this[innerCodon]
      }
      if(v515 == v608.aminoAcid) {
        introspect(JAM.policy.p5) {
          var v517 = this[innerCodon]
        }
        perThouTotal = perThouTotal + v517.perThou
      }
      j$$10 = j$$10 + 1;
      v304 = j$$10 < this.codons.length
    }
    introspect(JAM.policy.p5) {
      var v305 = this[outerCodon]
    }
    introspect(JAM.policy.p5) {
      var v610 = this[outerCodon]
    }
    v305.fraction = v610.perThou / perThouTotal;
    i$$12 = i$$12 + 1;
    v306 = i$$12 < this.codons.length
  }
  return true
}
new CodonTable;
CodonTable.prototype.fixFraction = fixFraction;
new Codon;
Codon.prototype.fillCodon = fillCodon;
JAM.set(document, "onload", v3);
JAM.set(document.getElementById("submitbtn"), "onclick", v4);
JAM.set(document.getElementById("clearbtn"), "onclick", v5)
