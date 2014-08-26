function v9() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return
}
function v8() {
  try {
    mutateForDigest(document)
  }catch(e$$5) {
    alert("The following error was encountered: " + e$$5)
  }
  return
}
function v7() {
  document.main_form.main_submit.focus();
  return
}
function v6(start$$9, stop$$5) {
  var v14 = outputWindow.document;
  JAM.call(v14.write, v14, [rightNum(this.positionLabel, "", 8, "")]);
  var v16 = outputWindow.document;
  JAM.call(v16.write, v16, [this.spanStart]);
  var v18 = outputWindow.document;
  JAM.call(v18.write, v18, [this.characters.slice(start$$9, stop$$5).join("")]);
  var v20 = outputWindow.document;
  JAM.call(v20.write, v20, [this.spanEnd + "\n"]);
  this.positionLabel = this.positionLabel + (stop$$5 - start$$9);
  return
}
function v5(start$$8, stop$$4) {
  var textToWrite = this.characters.slice(start$$8, stop$$4).join("");
  if(textToWrite.search(/\w/) != -1) {
    var v25 = outputWindow.document;
    JAM.call(v25.write, v25, [rightNum(this.positionLabel, "", 8, "")]);
    var v27 = outputWindow.document;
    JAM.call(v27.write, v27, [this.spanStart]);
    this.positionLabel = this.positionLabel + textToWrite.match(/[A-Z]/g).length;
    var v31 = outputWindow.document;
    JAM.call(v31.write, v31, [textToWrite]);
    var v32 = outputWindow.document;
    JAM.call(v32.write, v32, [this.spanEnd + "\n"])
  }
  return
}
function v4(start$$7, stop$$3) {
  var v35 = outputWindow.document;
  JAM.call(v35.write, v35, [rightNum(this.positionLabel, "", 8, "")]);
  var v37 = outputWindow.document;
  JAM.call(v37.write, v37, [this.spanStart]);
  var v39 = outputWindow.document;
  JAM.call(v39.write, v39, [this.characters.slice(start$$7, stop$$3).join("")]);
  var v41 = outputWindow.document;
  JAM.call(v41.write, v41, [this.spanEnd + "\n"]);
  this.positionLabel = this.positionLabel + (stop$$3 - start$$7) / 3;
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
  var v48 = i$$1 < arrayOfTitles.length;
  for(;v48;) {
    introspect(JAM.policy.p5) {
      var v1014 = arrayOfTitles[i$$1]
    }
    var v518 = v1014.search(/\S/) == -1;
    if(!v518) {
      introspect(JAM.policy.p5) {
        var v1108 = arrayOfSequences[i$$1]
      }
      var v856 = v1108.search(/\S/) == -1;
      if(!v856) {
        introspect(JAM.policy.p5) {
          var v1109 = arrayOfSequences[i$$1]
        }
        v856 = v1109.length != lengthOfAlign
      }
      v518 = v856
    }
    if(v518) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v48 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v520 = codonTable.search(/AmAcid/) == -1;
  if(!v520) {
    var v859 = codonTable.search(/Codon/) == -1;
    if(!v859) {
      var v1019 = codonTable.search(/Number/) == -1;
      if(!v1019) {
        var v1111 = codonTable.search(/\/1000/) == -1;
        if(!v1111) {
          v1111 = codonTable.search(/Fraction\s*\.\./) == -1
        }
        v1019 = v1111
      }
      v859 = v1019
    }
    v520 = v859
  }
  if(v520) {
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
  var v53 = z$$2 < arrayOfPatterns.length;
  for(;v53;) {
    introspect(JAM.policy.p5) {
      var v862 = arrayOfPatterns[z$$2]
    }
    if(v862.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v863 = arrayOfPatterns[z$$2]
    }
    if(moreExpressionCheck(v863) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    v53 = z$$2 < arrayOfPatterns.length
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v62 = j < arrayOfPatterns.length;
  for(;v62;) {
    var v56 = geneticCodeMatchExp;
    var v57 = j;
    introspect(JAM.policy.p5) {
      var v1021 = arrayOfPatterns[j]
    }
    var v527 = v1021.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1517 = eval("introspect(JAM.policy.pFull) { " + v527 + " }")
    }else {
      var v1517 = JAM.call(eval, null, [v527])
    }
    v56[v57] = v1517;
    var v58 = geneticCodeMatchResult;
    var v59 = j;
    introspect(JAM.policy.p5) {
      var v865 = arrayOfPatterns[j]
    }
    var v1518 = v865.match(/=[a-zA-Z\*]/).toString();
    v58[v59] = v1518;
    var v60 = geneticCodeMatchResult;
    var v61 = j;
    introspect(JAM.policy.p5) {
      var v529 = geneticCodeMatchResult[j]
    }
    var v1519 = v529.replace(/=/g, "");
    v60[v61] = v1519;
    j = j + 1;
    v62 = j < arrayOfPatterns.length
  }
  var i$$2 = 0;
  var v69 = i$$2 <= testSequence.length - 3;
  for(;v69;) {
    codon = testSequence.substring(i$$2, i$$2 + 3);
    j = 0;
    var v67 = j < geneticCodeMatchExp.length;
    for(;v67;) {
      introspect(JAM.policy.p5) {
        var v867 = geneticCodeMatchExp[j]
      }
      if(codon.search(v867) != -1) {
        if(oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      v67 = j < geneticCodeMatchExp.length
    }
    if(oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v69 = i$$2 <= testSequence.length - 3
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v71 = z$$3 < arrayOfPatterns$$1.length;
  for(;v71;) {
    introspect(JAM.policy.p5) {
      var v869 = arrayOfPatterns$$1[z$$3]
    }
    if(v869.search(/[^acdefghiklmnpqrstvwyz]/i) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    v71 = z$$3 < arrayOfPatterns$$1.length
  }
  var i$$3 = 0;
  var v75 = i$$3 < arrayOfPatterns$$1.length;
  for(;v75;) {
    introspect(JAM.policy.p5) {
      var v870 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v870 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v74 = j$$1 < arrayOfPatterns$$1.length;
    for(;v74;) {
      introspect(JAM.policy.p5) {
        var v871 = arrayOfPatterns$$1[j$$1]
      }
      if(v871.search(re) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      v74 = j$$1 < arrayOfPatterns$$1.length
    }
    i$$3 = i$$3 + 1;
    v75 = i$$3 < arrayOfPatterns$$1.length
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v78 = z$$4 < arrayOfPatterns$$2.length;
  for(;v78;) {
    introspect(JAM.policy.p5) {
      var v872 = arrayOfPatterns$$2[z$$4]
    }
    if(v872.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.p5) {
      var v873 = arrayOfPatterns$$2[z$$4]
    }
    if(moreExpressionCheck(v873) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    v78 = z$$4 < arrayOfPatterns$$2.length
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
  var v83 = outputWindow.document;
  JAM.call(v83.write, v83, ["</form>"]);
  return true
}
function closePre() {
  var v84 = outputWindow.document;
  JAM.call(v84.write, v84, ["</div>"]);
  var v85 = outputWindow.document;
  JAM.call(v85.write, v85, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v86 = outputWindow.document;
  JAM.call(v86.write, v86, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v87 = outputWindow.document;
  JAM.call(v87.write, v87, ["</body>\n</html>\n"]);
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
  var v91 = i$$4 < alignArray.length;
  for(;v91;) {
    introspect(JAM.policy.p5) {
      var v875 = alignArray[i$$4]
    }
    if(v875.search(/[^\s]+\s/) == -1) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    v91 = i$$4 < alignArray.length
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
    var v93 = matchArray = re$$1.exec(sequenceData);
    for(;v93;) {
      arrayOfFasta.push(matchArray[0]);
      v93 = matchArray = re$$1.exec(sequenceData)
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
  var v111 = j$$2 < arrayOfPatterns$$3.length;
  for(;v111;) {
    var v109 = geneticCodeMatchExp$$1;
    var v110 = j$$2;
    introspect(JAM.policy.p5) {
      var v1023 = arrayOfPatterns$$3[j$$2]
    }
    var v576 = v1023.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1520 = eval("introspect(JAM.policy.pFull) { " + v576 + " }")
    }else {
      var v1520 = JAM.call(eval, null, [v576])
    }
    v109[v110] = v1520;
    j$$2 = j$$2 + 1;
    v111 = j$$2 < arrayOfPatterns$$3.length
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v117 = j$$3 < arrayOfPatterns$$4.length;
  for(;v117;) {
    var v113 = geneticCodeMatchResult$$1;
    var v114 = j$$3;
    introspect(JAM.policy.p5) {
      var v877 = arrayOfPatterns$$4[j$$3]
    }
    var v1521 = v877.match(/=[a-zA-Z\*]/).toString();
    v113[v114] = v1521;
    var v115 = geneticCodeMatchResult$$1;
    var v116 = j$$3;
    introspect(JAM.policy.p5) {
      var v580 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1522 = v580.replace(/=/g, "");
    v115[v116] = v1522;
    j$$3 = j$$3 + 1;
    v117 = j$$3 < arrayOfPatterns$$4.length
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
  var v138 = j$$4 < lengthOut;
  for(;v138;) {
    tempNum = Math.floor(Math.random() * components.length);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v138 = j$$4 < lengthOut
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
  var v608 = expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1;
  if(!v608) {
    var v880 = expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1;
    if(!v880) {
      var v1025 = expressionToCheck.search(/\[\]/) != -1;
      if(!v1025) {
        var v1114 = expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1;
        if(!v1114) {
          var v1175 = expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1;
          if(!v1175) {
            var v1217 = expressionToCheck.search(/\|\|/) != -1;
            if(!v1217) {
              var v1254 = expressionToCheck.search(/\/\|/) != -1;
              if(!v1254) {
                var v1284 = expressionToCheck.search(/\|\//) != -1;
                if(!v1284) {
                  var v1310 = expressionToCheck.search(/\[.\]/) != -1;
                  if(!v1310) {
                    var v1336 = expressionToCheck.search(/\</) != -1;
                    if(!v1336) {
                      v1336 = expressionToCheck.search(/\>/) != -1
                    }
                    v1310 = v1336
                  }
                  v1284 = v1310
                }
                v1254 = v1284
              }
              v1217 = v1254
            }
            v1175 = v1217
          }
          v1114 = v1175
        }
        v1025 = v1114
      }
      v880 = v1025
    }
    v608 = v880
  }
  if(v608) {
    return false
  }
  return true
}
function openForm() {
  var v143 = outputWindow.document;
  JAM.call(v143.write, v143, ['<form action="">\n']);
  return true
}
function openPre() {
  var v144 = outputWindow.document;
  JAM.call(v144.write, v144, ["<pre>"]);
  var v145 = outputWindow.document;
  JAM.call(v145.write, v145, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v146 = outputWindow.document;
  JAM.call(v146.write, v146, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.p1), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
  outputWindow.focus();
  var v147 = outputWindow.document;
  JAM.call(v147.write, v147, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isColor) {
    var v149 = outputWindow.document;
    JAM.call(v149.write, v149, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"])
  }else {
    var v151 = outputWindow.document;
    JAM.call(v151.write, v151, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v153 = outputWindow.document;
  JAM.call(v153.write, v153, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"]);
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
  var v155 = outputWindow.document;
  JAM.call(v155.write, v155, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isBackground) {
    var v157 = outputWindow.document;
    JAM.call(v157.write, v157, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"])
  }else {
    var v159 = outputWindow.document;
    JAM.call(v159.write, v159, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v161 = outputWindow.document;
  JAM.call(v161.write, v161, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"]);
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
  var v164 = j$$5 < lengthOfColumn;
  for(;v164;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v164 = j$$5 < lengthOfColumn
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
  var v623 = emblFile.search(/ID/) == -1;
  if(!v623) {
    var v891 = emblFile.search(/AC/) == -1;
    if(!v891) {
      var v1036 = emblFile.search(/DE/) == -1;
      if(!v1036) {
        v1036 = emblFile.search(/SQ/) == -1
      }
      v891 = v1036
    }
    v623 = v891
  }
  if(v623) {
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
  var v628 = genBankFile.search(/LOCUS/) == -1;
  if(!v628) {
    var v894 = genBankFile.search(/DEFINITION/) == -1;
    if(!v894) {
      var v1039 = genBankFile.search(/ACCESSION/) == -1;
      if(!v1039) {
        v1039 = genBankFile.search(/ORIGIN/) == -1
      }
      v894 = v1039
    }
    v628 = v894
  }
  if(v628) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v629 = genBankFile$$1.search(/LOCUS/) == -1;
  if(!v629) {
    var v897 = genBankFile$$1.search(/DEFINITION/) == -1;
    if(!v897) {
      var v1042 = genBankFile$$1.search(/ACCESSION/) == -1;
      if(!v1042) {
        v1042 = genBankFile$$1.search(/ORIGIN/) == -1
      }
      v897 = v1042
    }
    v629 = v897
  }
  if(v629) {
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
  var v631 = emblFile$$1.search(/ID/) == -1;
  if(!v631) {
    var v900 = emblFile$$1.search(/AC/) == -1;
    if(!v900) {
      var v1045 = emblFile$$1.search(/DE/) == -1;
      if(!v1045) {
        v1045 = emblFile$$1.search(/SQ/) == -1
      }
      v900 = v1045
    }
    v631 = v900
  }
  if(v631) {
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
  var v192 = i$$5 < stopBase;
  for(;v192;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v189 = j$$6 <= basePerLine / groupSize;
    for(;v189;) {
      var v188 = k < groupSize;
      for(;v188;) {
        lineOfText = lineOfText + text$$10.charAt(k + i$$5);
        k = k + 1;
        v188 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v189 = j$$6 <= basePerLine / groupSize
    }
    var v190 = outputWindow.document;
    JAM.call(v190.write, v190, [lineOfText + "\n"]);
    lineOfText = "";
    v192 = i$$5 < stopBase
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
    var v636 = adjustment < 0;
    if(v636) {
      v636 = adjusted >= 0
    }
    if(v636) {
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
  var v226 = i$$6 < stopBase$$2;
  for(;v226;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v202 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for(;v202;) {
      var v197 = k$$1 < groupSize$$2;
      for(;v197;) {
        if(i$$6 + k$$1 >= stopBase$$2) {
          break
        }
        lineOfText$$1 = lineOfText$$1 + text$$12.charAt(k$$1 + i$$6);
        k$$1 = k$$1 + 1;
        v197 = k$$1 < groupSize$$2
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
      v202 = j$$7 <= basePerLine$$2 / groupSize$$2
    }
    if(numberPosition$$1 == "left") {
      var v203 = outputWindow.document;
      JAM.call(v203.write, v203, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"]);
      if(strands$$1 == "two") {
        var v205 = outputWindow.document;
        JAM.call(v205.write, v205, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"]);
        var v207 = outputWindow.document;
        JAM.call(v207.write, v207, ["\n"])
      }
    }else {
      if(numberPosition$$1 == "right") {
        var v209 = outputWindow.document;
        JAM.call(v209.write, v209, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
        if(strands$$1 == "two") {
          var v211 = outputWindow.document;
          JAM.call(v211.write, v211, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
          var v213 = outputWindow.document;
          JAM.call(v213.write, v213, ["\n"])
        }
      }else {
        if(numberPosition$$1 == "above") {
          var v215 = outputWindow.document;
          JAM.call(v215.write, v215, [aboveNum + "\n"]);
          var v217 = outputWindow.document;
          JAM.call(v217.write, v217, [lineOfText$$1 + "\n"]);
          if(strands$$1 == "two") {
            var v219 = outputWindow.document;
            JAM.call(v219.write, v219, [complement(lineOfText$$1) + "\n"]);
            var v221 = outputWindow.document;
            JAM.call(v221.write, v221, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v226 = i$$6 < stopBase$$2
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
  var v247 = i$$7 < stopBase$$3;
  for(;v247;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v235 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for(;v235;) {
      var v230 = k$$2 < groupSize$$3;
      for(;v230;) {
        if(i$$7 + k$$2 >= stopBase$$3) {
          break
        }
        lineOfText$$2 = lineOfText$$2 + text$$13.charAt(k$$2 + i$$7);
        k$$2 = k$$2 + 1;
        v230 = k$$2 < groupSize$$3
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
      v235 = j$$8 <= basePerLine$$3 / groupSize$$3
    }
    if(numberPosition$$2 == "left") {
      var v236 = outputWindow.document;
      JAM.call(v236.write, v236, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"])
    }else {
      if(numberPosition$$2 == "right") {
        var v238 = outputWindow.document;
        JAM.call(v238.write, v238, [lineOfText$$2 + i$$7 + "\n"])
      }else {
        if(numberPosition$$2 == "above") {
          var v240 = outputWindow.document;
          JAM.call(v240.write, v240, [aboveNum$$1 + "\n"]);
          var v242 = outputWindow.document;
          JAM.call(v242.write, v242, [lineOfText$$2 + "\n"])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v247 = i$$7 < stopBase$$3
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
  var v653 = sequence$$13.length <= firstIndexToMutate;
  if(!v653) {
    var v911 = lastIndexToMutate < 0;
    if(!v911) {
      v911 = lastIndexToMutate <= firstIndexToMutate
    }
    v653 = v911
  }
  if(v653) {
    numMut = 0
  }
  var i$$8 = 0;
  var v256 = i$$8 < numMut;
  for(;v256;) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    var v655 = randNum < firstIndexToMutate;
    if(!v655) {
      v655 = randNum > lastIndexToMutate
    }
    if(v655) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v256 = i$$8 < numMut;
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
        var v659 = components$$1[componentsIndex]
      }
      if(v659 != currentChar) {
        needNewChar = false
      }
    }
    var v660 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.p5) {
      var v661 = components$$1[componentsIndex]
    }
    sequence$$13 = v660 + v661 + sequence$$13.substring(randNum + 1, sequence$$13.length);
    i$$8 = i$$8 + 1;
    v256 = i$$8 < numMut
  }
  var v257 = outputWindow.document;
  JAM.call(v257.write, v257, [addReturns(sequence$$13)]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v263 = j$$9 < lengthOut$$1;
  for(;v263;) {
    tempNum$$1 = Math.floor(Math.random() * components$$2.length);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if(sequence$$14.length == 60) {
      var v260 = outputWindow.document;
      JAM.call(v260.write, v260, [sequence$$14 + "\n"]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v263 = j$$9 < lengthOut$$1
  }
  var v264 = outputWindow.document;
  JAM.call(v264.write, v264, [sequence$$14 + "\n"]);
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
  var v270 = outputWindow.document;
  JAM.call(v270.write, v270, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v271 = outputWindow.document;
  JAM.call(v271.write, v271, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"]);
  var i$$9 = 0;
  var v288 = i$$9 < arrayOfItems.length;
  for(;v288;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p5) {
      var v670 = arrayOfItems[i$$9]
    }
    matchExp = v670.match(/\/.+\//) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.p5) {
      var v1052 = arrayOfItems[i$$9]
    }
    cutDistance = parseFloat(v1052.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    var v280 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v280;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v672 = matchPosition >= lowerLimit;
      if(v672) {
        v672 = matchPosition < upperLimit
      }
      if(v672) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v280 = matchArray$$1 = matchExp.exec(sequence$$15)
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
    var v286 = outputWindow.document;
    var v1223 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p5) {
      var v1316 = arrayOfItems[i$$9]
    }
    JAM.call(v286.write, v286, [v1223 + v1316.match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v288 = i$$9 < arrayOfItems.length
  }
  var v289 = outputWindow.document;
  JAM.call(v289.write, v289, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v290 = outputWindow.document;
  JAM.call(v290.write, v290, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v291 = outputWindow.document;
  JAM.call(v291.write, v291, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"]);
  var i$$10 = 0;
  var v301 = i$$10 < arrayOfItems$$1.length;
  for(;v301;) {
    var tempNumber = 0;
    introspect(JAM.policy.p5) {
      var v681 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = v681.match(/\/[^\/]+\//) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(sequence$$16.search(matchExp$$1) != -1) {
      tempNumber = sequence$$16.match(matchExp$$1).length
    }
    var percentage = 0;
    var v921 = originalLength + 1;
    introspect(JAM.policy.p5) {
      var v1134 = arrayOfItems$$1[i$$10]
    }
    if(v921 - parseFloat(v1134.match(/\d+/)) > 0) {
      var v296 = 100 * tempNumber;
      var v684 = originalLength + 1;
      introspect(JAM.policy.p5) {
        var v1056 = arrayOfItems$$1[i$$10]
      }
      percentage = v296 / (v684 - parseFloat(v1056.match(/\d+/)))
    }
    var v299 = outputWindow.document;
    introspect(JAM.policy.p5) {
      var v1317 = arrayOfItems$$1[i$$10]
    }
    JAM.call(v299.write, v299, ["<tr><td>" + v1317.match(/\([^\(]+\)\b/).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n"]);
    i$$10 = i$$10 + 1;
    v301 = i$$10 < arrayOfItems$$1.length
  }
  var v302 = outputWindow.document;
  JAM.call(v302.write, v302, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v309 = sequence$$17.length > 0;
  for(;v309;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = Math.floor(Math.random() * maxNum$$1);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    tempString2 = sequence$$17.substring(randNum$$1 + 1, sequence$$17.length);
    sequence$$17 = tempString1 + tempString2;
    if(tempSeq.length == 60) {
      var v306 = outputWindow.document;
      JAM.call(v306.write, v306, [tempSeq + "\n"]);
      tempSeq = ""
    }
    v309 = sequence$$17.length > 0
  }
  var v310 = outputWindow.document;
  JAM.call(v310.write, v310, [tempSeq + "\n"]);
  return true
}
function getGeneticCodeString(type$$25) {
  var v692 = type$$25.toLowerCase() == "standard";
  if(!v692) {
    v692 = type$$25.toLowerCase() == "transl_table=1"
  }
  if(v692) {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=2") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]g[agr]/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|ag[agr]/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=3") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/[tu][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]g[agr]/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=4") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=5") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=6") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]ga/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=9") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=10") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=11") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=12") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=13") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=14") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[atcuwmhy]/=Y," + "/[tu]ag/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=15") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]|[tu]ag|[tcuy]ag/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agr]a/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=16") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agr]a/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=21") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=22") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[cgtyskb]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agcrsmv]a/=*"
  }
  if(type$$25.toLowerCase() == "transl_table=23") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]gg/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function mutateForDigest(theDocument) {
  var newDna = "";
  var mutatedDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E4;
  var TOPOLOGY = "linear";
  if(testScript() == false) {
    return false
  }
  var restrictionSiteCollection;
  var mutatedRestrictionSitesCollection;
  var v946 = theDocument.forms[0].elements[7].options;
  var v947 = theDocument.forms[0].elements[7].selectedIndex;
  introspect(JAM.policy.p5) {
    var v727 = v946[v947]
  }
  var geneticCode = getGeneticCodeString(v727.value);
  var v728 = theDocument.forms[0].elements[4].options;
  var v729 = theDocument.forms[0].elements[4].selectedIndex;
  introspect(JAM.policy.p5) {
    var v348 = v728[v729]
  }
  var restrictionSites = v348.value;
  var v730 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v730) {
    v730 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false
  }
  if(v730) {
    return false
  }
  geneticCode = geneticCode.split(/,/);
  if(checkGeneticCode(geneticCode) == false) {
    return false
  }
  restrictionSites = restrictionSites.split(/,/);
  if(checkRestPatterns(restrictionSites) == false) {
    return false
  }
  var mutatedRestrictionSites = buildMutatedRestrictionSites(restrictionSites);
  openWindow("Mutate for Digest");
  openPre();
  var v352 = outputWindow.document;
  JAM.call(v352.write, v352, ['<span class="mutated_sequence">' + "sequence and translations for mutated version" + "</span>\n"]);
  var v354 = outputWindow.document;
  JAM.call(v354.write, v354, ['<span class="current_sequence">' + "sequence and translations for non-mutated version" + "</span>\n"]);
  var v356 = outputWindow.document;
  JAM.call(v356.write, v356, ["\n"]);
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var i$$11 = 0;
  var v365 = i$$11 < arrayOfFasta$$1.length;
  for(;v365;) {
    introspect(JAM.policy.p5) {
      var v358 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v358);
    introspect(JAM.policy.p5) {
      var v359 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v359);
    newDna = removeNonDna(newDna);
    var v360 = outputWindow.document;
    JAM.call(v360.write, v360, [getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, TOPOLOGY)]);
    restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, TOPOLOGY);
    restrictionSiteCollection.sortRestrictionSites();
    mutatedRestrictionSiteCollection = findRestrictionSites(newDna, mutatedRestrictionSites, TOPOLOGY);
    mutatedRestrictionSiteCollection = removeNormalMatchesFromMutantSites(mutatedRestrictionSiteCollection, restrictionSiteCollection);
    mutatedRestrictionSiteCollection = removeOverlappingMatchesFromMutantSites(mutatedRestrictionSiteCollection);
    mutatedDna = buildMutatedDna(newDna, mutatedRestrictionSiteCollection);
    var v954 = theDocument.forms[0].elements[5].options;
    var v955 = theDocument.forms[0].elements[5].selectedIndex;
    introspect(JAM.policy.p5) {
      var v737 = v954[v955]
    }
    var v362 = v737.value;
    var v956 = theDocument.forms[0].elements[6].options;
    var v957 = theDocument.forms[0].elements[6].selectedIndex;
    introspect(JAM.policy.p5) {
      var v738 = v956[v957]
    }
    layoutRestTrans(newDna, mutatedDna, geneticCode, restrictionSiteCollection, mutatedRestrictionSiteCollection, v362, v738.value);
    var v364 = outputWindow.document;
    JAM.call(v364.write, v364, ["\n\n"]);
    i$$11 = i$$11 + 1;
    v365 = i$$11 < arrayOfFasta$$1.length
  }
  closePre();
  closeWindow();
  return true
}
function layoutRestTrans(dnaSequence$$3, mutatedDnaSequence, geneticCode$$1, restrictionSiteCollection$$1, mutatedRestrictionSiteCollection$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v740 = readingFrame == "3";
  if(!v740) {
    v740 = readingFrame == "all_three"
  }
  if(v740) {
    var translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    JAM.call(translationMut.setCharacters, translationMut, ["  " + translate(mutatedDnaSequence.substring(2, dnaSequence$$3.length), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)]);
    JAM.call(textLayout.addComponent, textLayout, [translationMut]);
    var translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    JAM.call(translation.setCharacters, translation, ["  " + translate(dnaSequence$$3.substring(2, dnaSequence$$3.length), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)]);
    JAM.call(textLayout.addComponent, textLayout, [translation])
  }
  var v743 = readingFrame == "2";
  if(!v743) {
    v743 = readingFrame == "all_three"
  }
  if(v743) {
    translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    JAM.call(translationMut.setCharacters, translationMut, [" " + translate(mutatedDnaSequence.substring(1, dnaSequence$$3.length), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)]);
    JAM.call(textLayout.addComponent, textLayout, [translationMut]);
    translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    JAM.call(translation.setCharacters, translation, [" " + translate(dnaSequence$$3.substring(1, dnaSequence$$3.length), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)]);
    JAM.call(textLayout.addComponent, textLayout, [translation])
  }
  var v746 = readingFrame == "1";
  if(!v746) {
    v746 = readingFrame == "all_three"
  }
  if(v746) {
    translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    JAM.call(translationMut.setCharacters, translationMut, [translate(mutatedDnaSequence, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)]);
    JAM.call(textLayout.addComponent, textLayout, [translationMut]);
    translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    JAM.call(translation.setCharacters, translation, [translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)]);
    JAM.call(textLayout.addComponent, textLayout, [translation])
  }
  if(readingFrame == "uppercase") {
    translationMut = new UppercaseTranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    JAM.call(translationMut.setCharacters, translationMut, [uppercaseTranslate(mutatedDnaSequence, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)]);
    JAM.call(textLayout.addComponent, textLayout, [translationMut]);
    translation = new UppercaseTranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    JAM.call(translation.setCharacters, translation, [uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)]);
    JAM.call(textLayout.addComponent, textLayout, [translation])
  }
  var dnaMut = new DnaComponent;
  dnaMut.spanStart = '<span class="mutated_sequence">';
  dnaMut.spanEnd = "</span>";
  JAM.call(dnaMut.setCharacters, dnaMut, [mutatedDnaSequence]);
  JAM.call(textLayout.addComponent, textLayout, [dnaMut]);
  var dna = new DnaComponent;
  dna.spanStart = '<span class="current_sequence">';
  dna.spanEnd = "</span>";
  JAM.call(dna.setCharacters, dna, [dnaSequence$$3]);
  JAM.call(textLayout.addComponent, textLayout, [dna]);
  var sitesInRange = new Array;
  var sitesInRangeMut = new Array;
  var i$$12 = 0;
  var v387 = i$$12 < dnaSequence$$3.length;
  for(;v387;) {
    sitesInRange = JAM.call(restrictionSiteCollection$$1.getSitesInRange, restrictionSiteCollection$$1, [i$$12, i$$12 + basesPerLine]);
    sitesInRangeMut = JAM.call(mutatedRestrictionSiteCollection$$1.getSitesInRange, mutatedRestrictionSiteCollection$$1, [i$$12, i$$12 + basesPerLine]);
    sitesInRange.reverse();
    sitesInRangeMut.reverse();
    var j$$10 = 0;
    var v382 = j$$10 < sitesInRangeMut.length;
    for(;v382;) {
      var v380 = outputWindow.document;
      introspect(JAM.policy.p5) {
        var v1281 = sitesInRangeMut[j$$10]
      }
      var v965 = spaceString.substring(0, v1281.position - i$$12 + 9) + '<span class="mutated_sequence">';
      introspect(JAM.policy.p5) {
        var v1091 = sitesInRangeMut[j$$10]
      }
      JAM.call(v380.write, v380, [v965 + v1091.label + "</span>\n"]);
      j$$10 = j$$10 + 1;
      v382 = j$$10 < sitesInRangeMut.length
    }
    j$$10 = 0;
    var v385 = j$$10 < sitesInRange.length;
    for(;v385;) {
      var v383 = outputWindow.document;
      introspect(JAM.policy.p5) {
        var v1282 = sitesInRange[j$$10]
      }
      var v967 = spaceString.substring(0, v1282.position - i$$12 + 9) + '<span class="current_sequence">';
      introspect(JAM.policy.p5) {
        var v1093 = sitesInRange[j$$10]
      }
      JAM.call(v383.write, v383, [v967 + v1093.label + "</span>\n"]);
      j$$10 = j$$10 + 1;
      v385 = j$$10 < sitesInRange.length
    }
    JAM.call(textLayout.writeLayout, textLayout, [i$$12, i$$12 + basesPerLine]);
    i$$12 = i$$12 + basesPerLine;
    v387 = i$$12 < dnaSequence$$3.length
  }
  return true
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$14, s$$4) {
    return" " + p1$$2 + " "
  }
  if(dnaSequence$$4.replace(/[^A-Za-z]/g, "").length < 3) {
    return""
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/(...)/g, v2);
  var i$$13 = 0;
  var v392 = i$$13 < geneticCodeMatchExp$$3.length;
  for(;v392;) {
    introspect(JAM.policy.p5) {
      var v390 = geneticCodeMatchExp$$3[i$$13]
    }
    introspect(JAM.policy.p5) {
      var v391 = geneticCodeMatchResult$$3[i$$13]
    }
    dnaSequence$$4 = dnaSequence$$4.replace(v390, v391);
    i$$13 = i$$13 + 1;
    v392 = i$$13 < geneticCodeMatchExp$$3.length
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/\S{3}/g, "X");
  dnaSequence$$4 = dnaSequence$$4.replace(/\s\S{1,2}$/, "");
  dnaSequence$$4 = dnaSequence$$4.replace(/^\s/, "");
  return dnaSequence$$4
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$15, s$$5) {
    return" " + p1$$3 + p3 + p5 + " " + p2 + p4 + p6
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/[a-z]/g, " ");
  if(dnaSequence$$5.replace(/[^A-Za-z]/g, "").length < 3) {
    return""
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3);
  dnaSequence$$5 = dnaSequence$$5.replace(/\s\S{1,2}\s/g, "");
  var i$$14 = 0;
  var v397 = i$$14 < geneticCodeMatchExp$$4.length;
  for(;v397;) {
    introspect(JAM.policy.p5) {
      var v395 = geneticCodeMatchExp$$4[i$$14]
    }
    introspect(JAM.policy.p5) {
      var v396 = geneticCodeMatchResult$$4[i$$14]
    }
    dnaSequence$$5 = dnaSequence$$5.replace(v395, v396);
    i$$14 = i$$14 + 1;
    v397 = i$$14 < geneticCodeMatchExp$$4.length
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/\S{3}/g, "X");
  dnaSequence$$5 = dnaSequence$$5.replace(/^\s/, "");
  return dnaSequence$$5
}
function buildMutatedRestrictionSites(restrictionSites$$1) {
  var mutatedRestrictionSites$$1 = new Array;
  var i$$15 = 0;
  var v419 = i$$15 < restrictionSites$$1.length;
  for(;v419;) {
    introspect(JAM.policy.p5) {
      var v1095 = restrictionSites$$1[i$$15]
    }
    var site = v1095.match(/\/.+\//).toString().replace(/[\/\\]/g, "").toLowerCase();
    introspect(JAM.policy.p5) {
      var v764 = restrictionSites$$1[i$$15]
    }
    var label$$2 = v764.match(/\([^\(]+\)/).toString();
    introspect(JAM.policy.p5) {
      var v1096 = restrictionSites$$1[i$$15]
    }
    var cutDistance$$1 = parseFloat(v1096.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    var singleDegenSites = new Array;
    var doubleDegenSites = new Array;
    var j$$11 = 0;
    var v405 = j$$11 < site.length;
    for(;v405;) {
      var v767 = site.charAt(j$$11) != "n";
      if(v767) {
        v767 = site.charAt(j$$11) != "N"
      }
      if(v767) {
        var pre = site.substring(0, j$$11);
        var post = site.substring(j$$11 + 1, site.length);
        var newSite = pre + "N" + post;
        singleDegenSites.push(newSite)
      }
      j$$11 = j$$11 + 1;
      v405 = j$$11 < site.length
    }
    if(site.length > 6) {
      j$$11 = 0;
      var v413 = j$$11 < singleDegenSites.length;
      for(;v413;) {
        var k$$3 = 0;
        introspect(JAM.policy.p5) {
          var v976 = singleDegenSites[j$$11]
        }
        var v412 = k$$3 < v976.length;
        for(;v412;) {
          introspect(JAM.policy.p5) {
            var v1097 = singleDegenSites[j$$11]
          }
          var v772 = v1097.charAt(k$$3) != "n";
          if(v772) {
            introspect(JAM.policy.p5) {
              var v1098 = singleDegenSites[j$$11]
            }
            v772 = v1098.charAt(k$$3) != "N"
          }
          if(v772) {
            introspect(JAM.policy.p5) {
              var v406 = singleDegenSites[j$$11]
            }
            pre = v406.substring(0, k$$3);
            introspect(JAM.policy.p5) {
              var v407 = singleDegenSites[j$$11]
            }
            var v408 = k$$3 + 1;
            introspect(JAM.policy.p5) {
              var v773 = singleDegenSites[j$$11]
            }
            post = v407.substring(v408, v773.length);
            newSite = pre + "N" + post;
            doubleDegenSites.push(newSite)
          }
          k$$3 = k$$3 + 1;
          introspect(JAM.policy.p5) {
            var v979 = singleDegenSites[j$$11]
          }
          v412 = k$$3 < v979.length
        }
        j$$11 = j$$11 + 1;
        v413 = j$$11 < singleDegenSites.length
      }
    }
    j$$11 = 0;
    var v416 = j$$11 < singleDegenSites.length;
    for(;v416;) {
      introspect(JAM.policy.p5) {
        var v1214 = singleDegenSites[j$$11]
      }
      mutatedRestrictionSites$$1.push("/" + v1214 + "/" + " " + label$$2 + cutDistance$$1);
      j$$11 = j$$11 + 1;
      v416 = j$$11 < singleDegenSites.length
    }
    j$$11 = 0;
    var v418 = j$$11 < doubleDegenSites.length;
    for(;v418;) {
      introspect(JAM.policy.p5) {
        var v1215 = doubleDegenSites[j$$11]
      }
      mutatedRestrictionSites$$1.push("/" + v1215 + "/" + " " + label$$2 + cutDistance$$1);
      j$$11 = j$$11 + 1;
      v418 = j$$11 < doubleDegenSites.length
    }
    i$$15 = i$$15 + 1;
    v419 = i$$15 < restrictionSites$$1.length
  }
  return mutatedRestrictionSites$$1
}
function removeNormalMatchesFromMutantSites(mutatedRestrictionSiteCollection$$2, restrictionSiteCollection$$2) {
  var originalMutatedRestrictionSites = new Array;
  var i$$16 = 0;
  var v424 = i$$16 < mutatedRestrictionSiteCollection$$2.restrictionSites.length;
  for(;v424;) {
    var v420 = mutatedRestrictionSiteCollection$$2.restrictionSites;
    introspect(JAM.policy.p5) {
      var mutatedSite = v420[i$$16]
    }
    var isOriginal = true;
    var j$$12 = 0;
    var v423 = j$$12 < restrictionSiteCollection$$2.restrictionSites.length;
    for(;v423;) {
      var v421 = restrictionSiteCollection$$2.restrictionSites;
      introspect(JAM.policy.p5) {
        var normalSite = v421[j$$12]
      }
      if(normalSite.position == mutatedSite.position) {
        isOriginal = false;
        break
      }
      j$$12 = j$$12 + 1;
      v423 = j$$12 < restrictionSiteCollection$$2.restrictionSites.length
    }
    if(isOriginal) {
      originalMutatedRestrictionSites.push(mutatedSite)
    }
    i$$16 = i$$16 + 1;
    v424 = i$$16 < mutatedRestrictionSiteCollection$$2.restrictionSites.length
  }
  mutatedRestrictionSiteCollection$$2.restrictionSites = originalMutatedRestrictionSites;
  return mutatedRestrictionSiteCollection$$2
}
function removeOverlappingMatchesFromMutantSites(mutatedRestrictionSiteCollection$$3) {
  var originalMutatedRestrictionSites$$1 = new Array;
  var i$$17 = 0;
  var v436 = i$$17 < mutatedRestrictionSiteCollection$$3.restrictionSites.length;
  for(;v436;) {
    var v425 = mutatedRestrictionSiteCollection$$3.restrictionSites;
    introspect(JAM.policy.p5) {
      var mutatedSite$$1 = v425[i$$17]
    }
    var isOriginal$$1 = true;
    var j$$13 = 0;
    var v435 = j$$13 < originalMutatedRestrictionSites$$1.length;
    for(;v435;) {
      introspect(JAM.policy.p5) {
        var mutatedSiteJ = originalMutatedRestrictionSites$$1[j$$13]
      }
      var startRangeJ = mutatedSiteJ.position + mutatedSiteJ.cutDistance - mutatedSiteJ.iupacPattern.length - 2;
      var endRangeJ = mutatedSiteJ.position + mutatedSiteJ.cutDistance - 1 + 2;
      var startRange = mutatedSite$$1.position + mutatedSite$$1.cutDistance - mutatedSite$$1.iupacPattern.length;
      var endRange = mutatedSite$$1.position + mutatedSite$$1.cutDistance - 1;
      var v799 = startRange <= startRangeJ;
      if(v799) {
        v799 = endRange >= startRangeJ
      }
      if(v799) {
        isOriginal$$1 = false;
        break
      }
      var v800 = startRange <= endRangeJ;
      if(v800) {
        v800 = endRange >= endRangeJ
      }
      if(v800) {
        isOriginal$$1 = false;
        break
      }
      var v801 = startRange <= startRangeJ;
      if(v801) {
        v801 = endRange >= endRangeJ
      }
      if(v801) {
        isOriginal$$1 = false;
        break
      }
      var v802 = startRange >= startRangeJ;
      if(v802) {
        v802 = endRange <= endRangeJ
      }
      if(v802) {
        isOriginal$$1 = false;
        break
      }
      j$$13 = j$$13 + 1;
      v435 = j$$13 < originalMutatedRestrictionSites$$1.length
    }
    if(isOriginal$$1) {
      originalMutatedRestrictionSites$$1.push(mutatedSite$$1)
    }
    i$$17 = i$$17 + 1;
    v436 = i$$17 < mutatedRestrictionSiteCollection$$3.restrictionSites.length
  }
  mutatedRestrictionSiteCollection$$3.restrictionSites = originalMutatedRestrictionSites$$1;
  return mutatedRestrictionSiteCollection$$3
}
function buildMutatedDna(originalDna, mutatedRestrictionSiteCollection$$4) {
  var mutatedDna$$1 = originalDna;
  var mutatedDnaArray = new Array;
  mutatedRestrictionSiteCollection$$4.sortRestrictionSites();
  mutatedRestrictionSiteCollection$$4.restrictionSites.reverse();
  var i$$18 = 0;
  var v444 = i$$18 < mutatedRestrictionSiteCollection$$4.restrictionSites.length;
  for(;v444;) {
    var v438 = mutatedRestrictionSiteCollection$$4.restrictionSites;
    introspect(JAM.policy.p5) {
      var mutatedSite$$2 = v438[i$$18]
    }
    var siteStart = mutatedSite$$2.position + mutatedSite$$2.cutDistance - mutatedSite$$2.iupacPattern.length;
    var siteEnd = mutatedSite$$2.position + mutatedSite$$2.cutDistance - 1;
    var siteLength = siteEnd - siteStart;
    mutatedDnaArray.push(mutatedDna$$1.substring(0, siteStart) + replaceMutatedDnaSegment(mutatedDna$$1.substring(siteStart, siteEnd + 1), mutatedSite$$2.iupacPattern, mutatedSite$$2.label));
    mutatedDnaArray.push(mutatedDna$$1.substring(siteEnd + 1, mutatedDna$$1.length));
    mutatedDna$$1 = mutatedDnaArray.join("");
    mutatedDnaArray = new Array;
    i$$18 = i$$18 + 1;
    v444 = i$$18 < mutatedRestrictionSiteCollection$$4.restrictionSites.length
  }
  mutatedRestrictionSiteCollection$$4.restrictionSites.reverse();
  return mutatedDna$$1
}
function replaceMutatedDnaSegment(originalSegment, iupacPattern, label$$3) {
  var newSegment = "";
  var genericSite;
  genericSite = label$$3.match(/[a-z\|]+\s\d+/).toString().replace(/\||\s\d+/g, "");
  var isUpperCase;
  var charToAdd;
  var i$$19 = 0;
  var v454 = i$$19 < originalSegment.length;
  for(;v454;) {
    if(originalSegment.charAt(i$$19).toString().search(/[A-Z]/) == -1) {
      isUpperCase = false
    }else {
      isUpperCase = true
    }
    if(originalSegment.charAt(i$$19) == genericSite.charAt(i$$19)) {
      charToAdd = originalSegment.charAt(i$$19)
    }else {
      if(iupacPattern.charAt(i$$19) == "N") {
        charToAdd = genericSite.charAt(i$$19)
      }else {
        charToAdd = originalSegment.charAt(i$$19)
      }
    }
    if(isUpperCase) {
      newSegment = newSegment + charToAdd.toString().toUpperCase()
    }else {
      newSegment = newSegment + charToAdd.toString().toLowerCase()
    }
    i$$19 = i$$19 + 1;
    v454 = i$$19 < originalSegment.length
  }
  return newSegment
}
function findRestrictionSites(sequence$$18, arrayOfItems$$2, dnaConformation$$1) {
  var lookAhead$$1 = 50;
  var lowerLimit$$1 = 0;
  var upperLimit$$1 = sequence$$18.length;
  var shiftValue$$1 = 0;
  var cutDistance$$2;
  var matchExp$$2;
  var matchPosition$$1;
  var matchArray$$2;
  var label$$4;
  var timesFound$$1 = 0;
  var tempArray = new Array;
  var restrictionSiteCollection$$3 = new RestrictionSiteCollection;
  if(dnaConformation$$1 == "circular") {
    shiftValue$$1 = sequence$$18.substring(0, lookAhead$$1).length;
    sequence$$18 = sequence$$18.substring(sequence$$18.length - lookAhead$$1, sequence$$18.length) + sequence$$18 + sequence$$18.substring(0, lookAhead$$1);
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1
  }
  var i$$20 = 0;
  var v470 = i$$20 < arrayOfItems$$2.length;
  for(;v470;) {
    introspect(JAM.policy.p5) {
      var v1001 = arrayOfItems$$2[i$$20]
    }
    var iupacPattern$$1 = v1001.match(/\/.+\//).toString().replace(/[\/\\]/g, "");
    matchExp$$2 = "/" + convertDegenerates(iupacPattern$$1) + "/" + "gi";
    matchPosition$$1 = 0;
    if(JAM.isEval(eval)) {
      matchExp$$2 = eval("introspect(JAM.policy.pFull) { " + matchExp$$2 + " }")
    }else {
      matchExp$$2 = JAM.call(eval, null, [matchExp$$2])
    }
    introspect(JAM.policy.p5) {
      var v1104 = arrayOfItems$$2[i$$20]
    }
    cutDistance$$2 = parseFloat(v1104.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    introspect(JAM.policy.p5) {
      var v1004 = arrayOfItems$$2[i$$20]
    }
    label$$4 = v1004.match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "");
    var v466 = matchArray$$2 = matchExp$$2.exec(sequence$$18);
    for(;v466;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$2;
      var v831 = matchPosition$$1 >= lowerLimit$$1;
      if(v831) {
        v831 = matchPosition$$1 < upperLimit$$1
      }
      if(v831) {
        timesFound$$1 = timesFound$$1 + 1;
        tempArray.push(new RestrictionSite(label$$4 + " " + (matchPosition$$1 - shiftValue$$1 + 1), matchPosition$$1 - shiftValue$$1, cutDistance$$2, iupacPattern$$1))
      }
      matchExp$$2.lastIndex = matchExp$$2.lastIndex - RegExp.lastMatch.length + 1;
      v466 = matchArray$$2 = matchExp$$2.exec(sequence$$18)
    }
    var j$$14 = 0;
    var v469 = j$$14 < tempArray.length;
    for(;v469;) {
      introspect(JAM.policy.p5) {
        var v467 = tempArray[j$$14]
      }
      v467.numberOfCuts = timesFound$$1;
      introspect(JAM.policy.p5) {
        var v468 = tempArray[j$$14]
      }
      JAM.call(restrictionSiteCollection$$3.addRestrictionSite, restrictionSiteCollection$$3, [v468]);
      j$$14 = j$$14 + 1;
      v469 = j$$14 < tempArray.length
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$20 = i$$20 + 1;
    v470 = i$$20 < arrayOfItems$$2.length
  }
  return restrictionSiteCollection$$3
}
function writeLayout(start$$4, stop) {
  var i$$21 = 0;
  var v472 = i$$21 < this.components.length;
  for(;v472;) {
    var v840 = this.components;
    introspect(JAM.policy.p5) {
      var v471 = v840[i$$21]
    }
    JAM.call(v471.writeLayoutComponent, v471, [start$$4, stop]);
    i$$21 = i$$21 + 1;
    v472 = i$$21 < this.components.length
  }
  return
}
function addComponent(component) {
  this.components.push(component);
  return
}
function TextLayout() {
  var v1523 = new Array;
  this.components = v1523;
  return
}
function writeLayoutComponent(start$$5, stop$$1) {
  return
}
function setCharacters(text$$14) {
  if(text$$14.search(/./) != -1) {
    var v1524 = text$$14.match(/./g);
    this.characters = v1524
  }
  return
}
function isRoom(start$$6, stop$$2) {
  var rangeToCheck = this.characters.slice(start$$6, stop$$2);
  rangeToCheck = rangeToCheck.join("");
  if(rangeToCheck.search(/\w/) == -1) {
    return true
  }else {
    return false
  }
  return
}
function LayoutComponent() {
  var v1525 = new Array;
  this.characters = v1525;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return
}
function TranslationComponent() {
  var v1526 = new Array;
  this.characters = v1526;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return
}
function UppercaseTranslationComponent() {
  var v1527 = new Array;
  this.characters = v1527;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return
}
function DnaComponent() {
  var v1528 = new Array;
  this.characters = v1528;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return
}
function RestrictionSite(label$$5, position, cutDistance$$3, iupacPattern$$2) {
  this.label = label$$5;
  this.position = position;
  this.cutDistance = cutDistance$$3;
  this.iupacPattern = iupacPattern$$2;
  return
}
function addRestrictionSite(restrictionSite) {
  this.restrictionSites.push(restrictionSite);
  return
}
function sortRestrictionSites() {
  this.restrictionSites.sort(restrictionSiteSorter);
  return
}
function getSitesInRange(start$$10, stop$$6) {
  var arrayToReturn = new Array;
  var i$$22 = this.restrictionSites.length - 1;
  var v482 = i$$22 >= 0;
  for(;v482;) {
    var v1169 = this.restrictionSites;
    introspect(JAM.policy.p5) {
      var v1106 = v1169[i$$22]
    }
    var v845 = v1106.position >= start$$10;
    if(v845) {
      var v1170 = this.restrictionSites;
      introspect(JAM.policy.p5) {
        var v1107 = v1170[i$$22]
      }
      v845 = v1107.position < stop$$6
    }
    if(v845) {
      arrayToReturn.push(this.restrictionSites.pop())
    }else {
      break
    }
    i$$22 = i$$22 - 1;
    v482 = i$$22 >= 0
  }
  return arrayToReturn
}
function RestrictionSiteCollection() {
  var v1529 = new Array;
  this.restrictionSites = v1529;
  return
}
function restrictionSiteSorter(a, b) {
  if(a.position < b.position) {
    return 1
  }
  if(a.position > b.position) {
    return-1
  }else {
    return 0
  }
  return
}
new TextLayout;
TextLayout.prototype.writeLayout = writeLayout;
TextLayout.prototype.addComponent = addComponent;
new LayoutComponent;
LayoutComponent.prototype.writeLayoutComponent = writeLayoutComponent;
LayoutComponent.prototype.setCharacters = setCharacters;
LayoutComponent.prototype.isRoom = isRoom;
var v490 = TranslationComponent;
var v1530 = new LayoutComponent;
v490.prototype = v1530;
TranslationComponent.prototype.writeLayoutComponent = v4;
var v492 = UppercaseTranslationComponent;
var v1531 = new LayoutComponent;
v492.prototype = v1531;
UppercaseTranslationComponent.prototype.writeLayoutComponent = v5;
var v494 = DnaComponent;
var v1532 = new LayoutComponent;
v494.prototype = v1532;
DnaComponent.prototype.writeLayoutComponent = v6;
new RestrictionSiteCollection;
RestrictionSiteCollection.prototype.addRestrictionSite = addRestrictionSite;
RestrictionSiteCollection.prototype.sortRestrictionSites = sortRestrictionSites;
RestrictionSiteCollection.prototype.getSitesInRange = getSitesInRange;
JAM.set(document, "onload", v7);
JAM.set(document.getElementById("submitbtn"), "onclick", v8);
JAM.set(document.getElementById("clearbtn"), "onclick", v9);

