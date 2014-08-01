function v13() {
  document.forms[0].elements[0].value = " ";
  document.forms[1].elements[0].value = " ";
  return
}
function v12() {
  try {
    primerMap(document)
  }catch(e$$5) {
    alert("The following error was encountered: " + e$$5)
  }
  return
}
function v11() {
  document.main_form.main_submit.focus();
  return
}
function v10(start$$10, stop$$6) {
  function v9(str$$11, p1$$5, offset$$17, s$$7) {
    return p1$$5.replace(/./g, " ")
  }
  function v8(str$$10, p1$$4, offset$$16, s$$6) {
    return p1$$4.replace(/./g, " ")
  }
  var v18 = outputWindow.document;
  JAM.call(v18.write, v18, [rightNum(this.positionLabel, "", 8, "")]);
  var text$$15 = this.characters.slice(start$$10, stop$$6).join("");
  text$$15 = text$$15.replace(/^(\d+)/g, v8);
  text$$15 = text$$15.replace(/(\d+)$/g, v9);
  var v21 = outputWindow.document;
  JAM.call(v21.write, v21, [text$$15 + "\n"]);
  this.positionLabel = this.positionLabel + (stop$$6 - start$$10);
  return
}
function v7(start$$9, stop$$5) {
  var v25 = outputWindow.document;
  JAM.call(v25.write, v25, [rightNum(this.positionLabel, "", 8, "")]);
  var v27 = outputWindow.document;
  JAM.call(v27.write, v27, [this.characters.slice(start$$9, stop$$5).join("") + "\n"]);
  this.positionLabel = this.positionLabel + (stop$$5 - start$$9);
  return
}
function v6(start$$8, stop$$4) {
  var textToWrite = this.characters.slice(start$$8, stop$$4).join("") + "\n";
  if(textToWrite.search(/\w/) != -1) {
    var v32 = outputWindow.document;
    JAM.call(v32.write, v32, [rightNum(this.positionLabel, "", 8, "")]);
    this.positionLabel = this.positionLabel + textToWrite.match(/[A-Z]/g).length;
    var v36 = outputWindow.document;
    JAM.call(v36.write, v36, [textToWrite])
  }
  return
}
function v5(start$$7, stop$$3) {
  var v38 = outputWindow.document;
  JAM.call(v38.write, v38, [rightNum(this.positionLabel, "", 8, "")]);
  var v40 = outputWindow.document;
  JAM.call(v40.write, v40, [this.characters.slice(start$$7, stop$$3).join("") + "\n"]);
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
  var v47 = i$$1 < arrayOfTitles.length;
  for(;v47;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1106 = arrayOfTitles[i$$1]
    }
    var v556 = v1106.search(/\S/) == -1;
    if(!v556) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1237 = arrayOfSequences[i$$1]
      }
      var v920 = v1237.search(/\S/) == -1;
      if(!v920) {
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1238 = arrayOfSequences[i$$1]
        }
        v920 = v1238.length != lengthOfAlign
      }
      v556 = v920
    }
    if(v556) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v47 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v558 = codonTable.search(/AmAcid/) == -1;
  if(!v558) {
    var v923 = codonTable.search(/Codon/) == -1;
    if(!v923) {
      var v1111 = codonTable.search(/Number/) == -1;
      if(!v1111) {
        var v1240 = codonTable.search(/\/1000/) == -1;
        if(!v1240) {
          v1240 = codonTable.search(/Fraction\s*\.\./) == -1
        }
        v1111 = v1240
      }
      v923 = v1111
    }
    v558 = v923
  }
  if(v558) {
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
  var v52 = z$$2 < arrayOfPatterns.length;
  for(;v52;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v926 = arrayOfPatterns[z$$2]
    }
    if(v926.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v927 = arrayOfPatterns[z$$2]
    }
    if(moreExpressionCheck(v927) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    v52 = z$$2 < arrayOfPatterns.length
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v61 = j < arrayOfPatterns.length;
  for(;v61;) {
    var v55 = geneticCodeMatchExp;
    var v56 = j;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1113 = arrayOfPatterns[j]
    }
    var v565 = v1113.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1861 = eval("introspect(JAM.policy.pFull) { " + v565 + " }")
    }else {
      var v1861 = JAM.call(eval, null, [v565])
    }
    v55[v56] = v1861;
    var v57 = geneticCodeMatchResult;
    var v58 = j;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v929 = arrayOfPatterns[j]
    }
    var v1862 = v929.match(/=[a-zA-Z\*]/).toString();
    v57[v58] = v1862;
    var v59 = geneticCodeMatchResult;
    var v60 = j;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v567 = geneticCodeMatchResult[j]
    }
    var v1863 = v567.replace(/=/g, "");
    v59[v60] = v1863;
    j = j + 1;
    v61 = j < arrayOfPatterns.length
  }
  var i$$2 = 0;
  var v68 = i$$2 <= testSequence.length - 3;
  for(;v68;) {
    codon = testSequence.substring(i$$2, i$$2 + 3);
    j = 0;
    var v66 = j < geneticCodeMatchExp.length;
    for(;v66;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v931 = geneticCodeMatchExp[j]
      }
      if(codon.search(v931) != -1) {
        if(oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      v66 = j < geneticCodeMatchExp.length
    }
    if(oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v68 = i$$2 <= testSequence.length - 3
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v70 = z$$3 < arrayOfPatterns$$1.length;
  for(;v70;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v933 = arrayOfPatterns$$1[z$$3]
    }
    if(v933.search(/[^acdefghiklmnpqrstvwyz]/i) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    v70 = z$$3 < arrayOfPatterns$$1.length
  }
  var i$$3 = 0;
  var v74 = i$$3 < arrayOfPatterns$$1.length;
  for(;v74;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v934 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v934 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v73 = j$$1 < arrayOfPatterns$$1.length;
    for(;v73;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v935 = arrayOfPatterns$$1[j$$1]
      }
      if(v935.search(re) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      v73 = j$$1 < arrayOfPatterns$$1.length
    }
    i$$3 = i$$3 + 1;
    v74 = i$$3 < arrayOfPatterns$$1.length
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v77 = z$$4 < arrayOfPatterns$$2.length;
  for(;v77;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v936 = arrayOfPatterns$$2[z$$4]
    }
    if(v936.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v937 = arrayOfPatterns$$2[z$$4]
    }
    if(moreExpressionCheck(v937) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    v77 = z$$4 < arrayOfPatterns$$2.length
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
  var v82 = outputWindow.document;
  JAM.call(v82.write, v82, ["</form>"]);
  return true
}
function closePre() {
  var v83 = outputWindow.document;
  JAM.call(v83.write, v83, ["</div>"]);
  var v84 = outputWindow.document;
  JAM.call(v84.write, v84, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v85 = outputWindow.document;
  JAM.call(v85.write, v85, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v86 = outputWindow.document;
  JAM.call(v86.write, v86, ["</body>\n</html>\n"]);
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
  var v90 = i$$4 < alignArray.length;
  for(;v90;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v939 = alignArray[i$$4]
    }
    if(v939.search(/[^\s]+\s/) == -1) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    v90 = i$$4 < alignArray.length
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
    var v92 = matchArray = re$$1.exec(sequenceData);
    for(;v92;) {
      arrayOfFasta.push(matchArray[0]);
      v92 = matchArray = re$$1.exec(sequenceData)
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
  var v110 = j$$2 < arrayOfPatterns$$3.length;
  for(;v110;) {
    var v108 = geneticCodeMatchExp$$1;
    var v109 = j$$2;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1115 = arrayOfPatterns$$3[j$$2]
    }
    var v614 = v1115.match(/\/.+\//) + "gi";
    if(JAM.isEval(eval)) {
      var v1864 = eval("introspect(JAM.policy.pFull) { " + v614 + " }")
    }else {
      var v1864 = JAM.call(eval, null, [v614])
    }
    v108[v109] = v1864;
    j$$2 = j$$2 + 1;
    v110 = j$$2 < arrayOfPatterns$$3.length
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v116 = j$$3 < arrayOfPatterns$$4.length;
  for(;v116;) {
    var v112 = geneticCodeMatchResult$$1;
    var v113 = j$$3;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v941 = arrayOfPatterns$$4[j$$3]
    }
    var v1865 = v941.match(/=[a-zA-Z\*]/).toString();
    v112[v113] = v1865;
    var v114 = geneticCodeMatchResult$$1;
    var v115 = j$$3;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v618 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1866 = v618.replace(/=/g, "");
    v114[v115] = v1866;
    j$$3 = j$$3 + 1;
    v116 = j$$3 < arrayOfPatterns$$4.length
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
  var v137 = j$$4 < lengthOut;
  for(;v137;) {
    tempNum = Math.floor(Math.random() * components.length);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v137 = j$$4 < lengthOut
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
  var v646 = expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1;
  if(!v646) {
    var v944 = expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1;
    if(!v944) {
      var v1117 = expressionToCheck.search(/\[\]/) != -1;
      if(!v1117) {
        var v1243 = expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1;
        if(!v1243) {
          var v1333 = expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1;
          if(!v1333) {
            var v1397 = expressionToCheck.search(/\|\|/) != -1;
            if(!v1397) {
              var v1460 = expressionToCheck.search(/\/\|/) != -1;
              if(!v1460) {
                var v1507 = expressionToCheck.search(/\|\//) != -1;
                if(!v1507) {
                  var v1540 = expressionToCheck.search(/\[.\]/) != -1;
                  if(!v1540) {
                    var v1571 = expressionToCheck.search(/\</) != -1;
                    if(!v1571) {
                      v1571 = expressionToCheck.search(/\>/) != -1
                    }
                    v1540 = v1571
                  }
                  v1507 = v1540
                }
                v1460 = v1507
              }
              v1397 = v1460
            }
            v1333 = v1397
          }
          v1243 = v1333
        }
        v1117 = v1243
      }
      v944 = v1117
    }
    v646 = v944
  }
  if(v646) {
    return false
  }
  return true
}
function openForm() {
  var v142 = outputWindow.document;
  JAM.call(v142.write, v142, ['<form action="">\n']);
  return true
}
function openPre() {
  var v143 = outputWindow.document;
  JAM.call(v143.write, v143, ["<pre>"]);
  var v144 = outputWindow.document;
  JAM.call(v144.write, v144, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v145 = outputWindow.document;
  JAM.call(v145.write, v145, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
  outputWindow.focus();
  var v146 = outputWindow.document;
  JAM.call(v146.write, v146, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isColor) {
    var v148 = outputWindow.document;
    JAM.call(v148.write, v148, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"])
  }else {
    var v150 = outputWindow.document;
    JAM.call(v150.write, v150, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v152 = outputWindow.document;
  JAM.call(v152.write, v152, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(JAM.get(window, "open", JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074), window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"]);
  outputWindow.focus();
  var v154 = outputWindow.document;
  JAM.call(v154.write, v154, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n']);
  if(isBackground) {
    var v156 = outputWindow.document;
    JAM.call(v156.write, v156, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"])
  }else {
    var v158 = outputWindow.document;
    JAM.call(v158.write, v158, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"])
  }
  var v160 = outputWindow.document;
  JAM.call(v160.write, v160, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"]);
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
  var v163 = j$$5 < lengthOfColumn;
  for(;v163;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v163 = j$$5 < lengthOfColumn
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
  var v661 = emblFile.search(/ID/) == -1;
  if(!v661) {
    var v955 = emblFile.search(/AC/) == -1;
    if(!v955) {
      var v1128 = emblFile.search(/DE/) == -1;
      if(!v1128) {
        v1128 = emblFile.search(/SQ/) == -1
      }
      v955 = v1128
    }
    v661 = v955
  }
  if(v661) {
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
  var v666 = genBankFile.search(/LOCUS/) == -1;
  if(!v666) {
    var v958 = genBankFile.search(/DEFINITION/) == -1;
    if(!v958) {
      var v1131 = genBankFile.search(/ACCESSION/) == -1;
      if(!v1131) {
        v1131 = genBankFile.search(/ORIGIN/) == -1
      }
      v958 = v1131
    }
    v666 = v958
  }
  if(v666) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v667 = genBankFile$$1.search(/LOCUS/) == -1;
  if(!v667) {
    var v961 = genBankFile$$1.search(/DEFINITION/) == -1;
    if(!v961) {
      var v1134 = genBankFile$$1.search(/ACCESSION/) == -1;
      if(!v1134) {
        v1134 = genBankFile$$1.search(/ORIGIN/) == -1
      }
      v961 = v1134
    }
    v667 = v961
  }
  if(v667) {
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
  var v669 = emblFile$$1.search(/ID/) == -1;
  if(!v669) {
    var v964 = emblFile$$1.search(/AC/) == -1;
    if(!v964) {
      var v1137 = emblFile$$1.search(/DE/) == -1;
      if(!v1137) {
        v1137 = emblFile$$1.search(/SQ/) == -1
      }
      v964 = v1137
    }
    v669 = v964
  }
  if(v669) {
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
  var v191 = i$$5 < stopBase;
  for(;v191;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v188 = j$$6 <= basePerLine / groupSize;
    for(;v188;) {
      var v187 = k < groupSize;
      for(;v187;) {
        lineOfText = lineOfText + text$$10.charAt(k + i$$5);
        k = k + 1;
        v187 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v188 = j$$6 <= basePerLine / groupSize
    }
    var v189 = outputWindow.document;
    JAM.call(v189.write, v189, [lineOfText + "\n"]);
    lineOfText = "";
    v191 = i$$5 < stopBase
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
    var v674 = adjustment < 0;
    if(v674) {
      v674 = adjusted >= 0
    }
    if(v674) {
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
  var v225 = i$$6 < stopBase$$2;
  for(;v225;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v201 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for(;v201;) {
      var v196 = k$$1 < groupSize$$2;
      for(;v196;) {
        if(i$$6 + k$$1 >= stopBase$$2) {
          break
        }
        lineOfText$$1 = lineOfText$$1 + text$$12.charAt(k$$1 + i$$6);
        k$$1 = k$$1 + 1;
        v196 = k$$1 < groupSize$$2
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
      v201 = j$$7 <= basePerLine$$2 / groupSize$$2
    }
    if(numberPosition$$1 == "left") {
      var v202 = outputWindow.document;
      JAM.call(v202.write, v202, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"]);
      if(strands$$1 == "two") {
        var v204 = outputWindow.document;
        JAM.call(v204.write, v204, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"]);
        var v206 = outputWindow.document;
        JAM.call(v206.write, v206, ["\n"])
      }
    }else {
      if(numberPosition$$1 == "right") {
        var v208 = outputWindow.document;
        JAM.call(v208.write, v208, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
        if(strands$$1 == "two") {
          var v210 = outputWindow.document;
          JAM.call(v210.write, v210, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"]);
          var v212 = outputWindow.document;
          JAM.call(v212.write, v212, ["\n"])
        }
      }else {
        if(numberPosition$$1 == "above") {
          var v214 = outputWindow.document;
          JAM.call(v214.write, v214, [aboveNum + "\n"]);
          var v216 = outputWindow.document;
          JAM.call(v216.write, v216, [lineOfText$$1 + "\n"]);
          if(strands$$1 == "two") {
            var v218 = outputWindow.document;
            JAM.call(v218.write, v218, [complement(lineOfText$$1) + "\n"]);
            var v220 = outputWindow.document;
            JAM.call(v220.write, v220, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v225 = i$$6 < stopBase$$2
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
  var v246 = i$$7 < stopBase$$3;
  for(;v246;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v234 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for(;v234;) {
      var v229 = k$$2 < groupSize$$3;
      for(;v229;) {
        if(i$$7 + k$$2 >= stopBase$$3) {
          break
        }
        lineOfText$$2 = lineOfText$$2 + text$$13.charAt(k$$2 + i$$7);
        k$$2 = k$$2 + 1;
        v229 = k$$2 < groupSize$$3
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
      v234 = j$$8 <= basePerLine$$3 / groupSize$$3
    }
    if(numberPosition$$2 == "left") {
      var v235 = outputWindow.document;
      JAM.call(v235.write, v235, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"])
    }else {
      if(numberPosition$$2 == "right") {
        var v237 = outputWindow.document;
        JAM.call(v237.write, v237, [lineOfText$$2 + i$$7 + "\n"])
      }else {
        if(numberPosition$$2 == "above") {
          var v239 = outputWindow.document;
          JAM.call(v239.write, v239, [aboveNum$$1 + "\n"]);
          var v241 = outputWindow.document;
          JAM.call(v241.write, v241, [lineOfText$$2 + "\n"])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v246 = i$$7 < stopBase$$3
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
  var v691 = sequence$$13.length <= firstIndexToMutate;
  if(!v691) {
    var v975 = lastIndexToMutate < 0;
    if(!v975) {
      v975 = lastIndexToMutate <= firstIndexToMutate
    }
    v691 = v975
  }
  if(v691) {
    numMut = 0
  }
  var i$$8 = 0;
  var v255 = i$$8 < numMut;
  for(;v255;) {
    maxNum = sequence$$13.length;
    randNum = Math.floor(Math.random() * maxNum);
    var v693 = randNum < firstIndexToMutate;
    if(!v693) {
      v693 = randNum > lastIndexToMutate
    }
    if(v693) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v255 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      componentsIndex = Math.round(Math.random() * components$$1.length);
      if(componentsIndex == components$$1.length) {
        componentsIndex = 0
      }
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v697 = components$$1[componentsIndex]
      }
      if(v697 != currentChar) {
        needNewChar = false
      }
    }
    var v698 = sequence$$13.substring(0, randNum);
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v699 = components$$1[componentsIndex]
    }
    sequence$$13 = v698 + v699 + sequence$$13.substring(randNum + 1, sequence$$13.length);
    i$$8 = i$$8 + 1;
    v255 = i$$8 < numMut
  }
  var v256 = outputWindow.document;
  JAM.call(v256.write, v256, [addReturns(sequence$$13)]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v262 = j$$9 < lengthOut$$1;
  for(;v262;) {
    tempNum$$1 = Math.floor(Math.random() * components$$2.length);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if(sequence$$14.length == 60) {
      var v259 = outputWindow.document;
      JAM.call(v259.write, v259, [sequence$$14 + "\n"]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v262 = j$$9 < lengthOut$$1
  }
  var v263 = outputWindow.document;
  JAM.call(v263.write, v263, [sequence$$14 + "\n"]);
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
  var v269 = outputWindow.document;
  JAM.call(v269.write, v269, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v270 = outputWindow.document;
  JAM.call(v270.write, v270, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"]);
  var i$$9 = 0;
  var v287 = i$$9 < arrayOfItems.length;
  for(;v287;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v708 = arrayOfItems[i$$9]
    }
    matchExp = v708.match(/\/.+\//) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1144 = arrayOfItems[i$$9]
    }
    cutDistance = parseFloat(v1144.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    var v279 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v279;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v710 = matchPosition >= lowerLimit;
      if(v710) {
        v710 = matchPosition < upperLimit
      }
      if(v710) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v279 = matchArray$$1 = matchExp.exec(sequence$$15)
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
    var v285 = outputWindow.document;
    var v1403 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1546 = arrayOfItems[i$$9]
    }
    JAM.call(v285.write, v285, [v1403 + v1546.match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "") + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v287 = i$$9 < arrayOfItems.length
  }
  var v288 = outputWindow.document;
  JAM.call(v288.write, v288, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v289 = outputWindow.document;
  JAM.call(v289.write, v289, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v290 = outputWindow.document;
  JAM.call(v290.write, v290, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"]);
  var i$$10 = 0;
  var v300 = i$$10 < arrayOfItems$$1.length;
  for(;v300;) {
    var tempNumber = 0;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v719 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = v719.match(/\/[^\/]+\//) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(sequence$$16.search(matchExp$$1) != -1) {
      tempNumber = sequence$$16.match(matchExp$$1).length
    }
    var percentage = 0;
    var v985 = originalLength + 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1263 = arrayOfItems$$1[i$$10]
    }
    if(v985 - parseFloat(v1263.match(/\d+/)) > 0) {
      var v295 = 100 * tempNumber;
      var v722 = originalLength + 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1148 = arrayOfItems$$1[i$$10]
      }
      percentage = v295 / (v722 - parseFloat(v1148.match(/\d+/)))
    }
    var v298 = outputWindow.document;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1547 = arrayOfItems$$1[i$$10]
    }
    JAM.call(v298.write, v298, ["<tr><td>" + v1547.match(/\([^\(]+\)\b/).toString().replace(/\(|\)/g, "") + "</td><td>" + tempNumber + "</td><td>" + percentage.toFixed(2) + "</td></tr>\n"]);
    i$$10 = i$$10 + 1;
    v300 = i$$10 < arrayOfItems$$1.length
  }
  var v301 = outputWindow.document;
  JAM.call(v301.write, v301, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v308 = sequence$$17.length > 0;
  for(;v308;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = Math.floor(Math.random() * maxNum$$1);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    tempString2 = sequence$$17.substring(randNum$$1 + 1, sequence$$17.length);
    sequence$$17 = tempString1 + tempString2;
    if(tempSeq.length == 60) {
      var v305 = outputWindow.document;
      JAM.call(v305.write, v305, [tempSeq + "\n"]);
      tempSeq = ""
    }
    v308 = sequence$$17.length > 0
  }
  var v309 = outputWindow.document;
  JAM.call(v309.write, v309, [tempSeq + "\n"]);
  return true
}
function getRestrictionSiteString(type$$25) {
  if(type$$25.toLowerCase() == "standard") {
    return"/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1," + "/tgcgca/ (Acc16I tgc|gca)3," + "/cgcg/ (AccII cg|cg)2," + "/tccgga/ (AccIII t|ccgga)5," + "/aacgtt/ (AclI aa|cgtt)4," + "/cacgtg/ (AcvI cac|gtg)3," + "/gtac/ (AfaI gt|ac)2," + "/agcgct/ (AfeI agc|gct)3," + "/cttaag/ (AflII c|ttaag)5," + "/accggt/ (AgeI a|ccggt)5," + "/actagt/ (AhlI a|ctagt)5," + "/gtgcac/ (Alw441 g|tgcac)5," + "/agct/ (AluI ag|ct)2," + "/agcgct/ (Aor51HI agc|gct)3," + "/gggccc/ (ApaI gggcc|c)1," + "/gtgcac/ (ApaLI g|tgcac)5," + 
    "/ggcgcgcc/ (AscI gg|cgcgcc)6," + "/attaat/ (AseI at|taat)4," + "/ggtacc/ (Asp718I g|gtacc)5," + "/ttcgaa/ (AsuII tt|cgaa)4," + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5," + "/tgcgca/ (AviII tgc|gca)3," + "/cctagg/ (AvrII c|ctagg)5," + "/tggcca/ (BalI tgg|cca)3," + "/ggatcc/ (BamHI g|gatcc)5," + "/atcgat/ (BanIII at|cgat)4," + "/ggcgcc/ (BbeI ggcgc|c)1," + "/cacgtg/ (BbrPI cac|gtg)3," + "/gcatgc/ (BbuI gcatg|c)1," + "/actagt/ (BcuI a|ctagt)5," + "/tgatca/ (BclI t|gatca)5," + "/ctag/ (BfaI c|tag)3," + 
    "/cttaag/ (BfrI c|ttaag)5," + "/atgcat/ (BfrBI atg|cat)3," + "/agatct/ (BglII a|gatct)5," + "/cctagg/ (BlnI c|ctagg)5," + "/atcgat/ (BseCI at|cgat)4," + "/gcgcgc/ (BsePI g|cgcgc)5," + "/cggccg/ (BseX3I c|ggccg)5," + "/accggt/ (BshTI a|ccggt)5," + "/tgtaca/ (Bsp1407I t|gtaca)5," + "/ccatgg/ (Bsp19I c|catgg)5," + "/atcgat/ (BspDI at|cgat)4," + "/tccgga/ (BspEI t|ccgga)5," + "/tgtaca/ (BsrGI t|gtaca)5," + "/gcgcgc/ (BssHII g|cgcgc)5," + "/cgcg/ (BstUI cg|cg)2," + "/atcgat/ (ClaI at|cgat)4," + "/gatc/ (DpnII |gatc)4," + 
    "/tttaaa/ (DraI ttt|aaa)3," + "/cggccg/ (EagI c|ggccg)5," + "/gaattc/ (EcoRI g|aattc)5," + "/gatatc/ (EcoRV gat|atc)3," + "/ggcgcc/ (EgeI ggc|gcc)3," + "/ggccggcc/ (FseI ggccgg|cc)2," + "/tgcgca/ (FspI tgc|gca)3," + "/ggcc/ (HaeIII gg|cc)2," + "/gt[cty][agr]ac/ (HincII gty|rac)3," + "/aagctt/ (HindIII a|agctt)5," + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4," + "/gttaac/ (HpaI gtt|aac)3," + "/ccgg/ (HpaII c|cgg)3," + "/ggcgcc/ (KasI g|gcgcc)5," + "/ggtacc/ (KpnI ggtac|c)1," + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5," + 
    "/caattg/ (MfeI c|aattg)5," + "/acgcgt/ (MluI a|cgcgt)5," + "/tggcca/ (MscI tgg|cca)3," + "/ttaa/ (MseI t|taa)3," + "/ccgg/ (MspI c|cgg)3," + "/gccggc/ (NaeI gcc|ggc)3," + "/ggcgcc/ (NarI gg|cgcc)4," + "/ccatgg/ (NcoI c|catgg)5," + "/catatg/ (NdeI ca|tatg)4," + "/gatc/ (NdeII |gatc)4," + "/gccggc/ (NgoMIV g|ccggc)5," + "/gctagc/ (NheI g|ctagc)5," + "/catg/ (NlaIII catg|)0," + "/gcggccgc/ (NotI gc|ggccgc)6," + "/tcgcga/ (NruI tcg|cga)3," + "/atgcat/ (NsiI atgca|t)1," + "/ttaattaa/ (PacI ttaat|taa)3," + 
    "/acatgt/ (PciI a|catgt)5," + "/ggcc/ (PhoI gg|cc)2," + "/gtttaaac/ (PmeI gttt|aaac)4," + "/cacgtg/ (PmlI cac|gtg)3," + "/ttataa/ (PsiI tta|taa)3," + "/ctgcag/ (PstI ctgca|g)1," + "/cgatcg/ (PvuI cgat|cg)2," + "/cagctg/ (PvuII cag|ctg)3," + "/gtac/ (RsaI gt|ac)2," + "/gagctc/ (SacI gagct|c)1," + "/ccgcgg/ (SacII ccgc|gg)2," + "/gtcgac/ (SalI g|tcgac)5," + "/cctgcagg/ (SbfI cctgca|gg)2," + "/agtact/ (ScaI agt|act)3," + "/ggcgcc/ (SfoI ggc|gcc)3," + "/cccggg/ (SmaI ccc|ggg)3," + "/tacgta/ (SnaBI tac|gta)3," + 
    "/actagt/ (SpeI a|ctagt)5," + "/gcatgc/ (SphI gcatg|c)1," + "/aatatt/ (SspI aat|att)3," + "/gagctc/ (SstI gagct|c)1," + "/ccgcgg/ (SstII ccgc|gg)2," + "/aggcct/ (StuI agg|cct)3," + "/atttaaat/ (SwaI attt|aaat)4," + "/tcga/ (TaqI t|cga)3," + "/ctcgag/ (TliI c|tcgag)5," + "/attaat/ (VspI at|taat)4," + "/tctaga/ (XbaI t|ctaga)5," + "/ctcgag/ (XhoI c|tcgag)5," + "/cccggg/ (XmaI c|ccggg)5"
  }
  return true
}
function getGeneticCodeString(type$$26) {
  var v732 = type$$26.toLowerCase() == "standard";
  if(!v732) {
    v732 = type$$26.toLowerCase() == "transl_table=1"
  }
  if(v732) {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  if(type$$26.toLowerCase() == "transl_table=2") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]g[agr]/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|ag[agr]/=*"
  }
  if(type$$26.toLowerCase() == "transl_table=3") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/[tu][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]g[agr]/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$26.toLowerCase() == "transl_table=4") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$26.toLowerCase() == "transl_table=5") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$26.toLowerCase() == "transl_table=6") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]ga/=*"
  }
  if(type$$26.toLowerCase() == "transl_table=9") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$26.toLowerCase() == "transl_table=10") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$26.toLowerCase() == "transl_table=11") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  if(type$$26.toLowerCase() == "transl_table=12") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  if(type$$26.toLowerCase() == "transl_table=13") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$26.toLowerCase() == "transl_table=14") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[atcuwmhy]/=Y," + "/[tu]ag/=*"
  }
  if(type$$26.toLowerCase() == "transl_table=15") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]|[tu]ag|[tcuy]ag/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agr]a/=*"
  }
  if(type$$26.toLowerCase() == "transl_table=16") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agr]a/=*"
  }
  if(type$$26.toLowerCase() == "transl_table=21") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*"
  }
  if(type$$26.toLowerCase() == "transl_table=22") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[cgtyskb]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agcrsmv]a/=*"
  }
  if(type$$26.toLowerCase() == "transl_table=23") {
    return"/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]gg/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function primerMap(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 2E5;
  if(testScript() == false) {
    return false
  }
  var restrictionSiteCollection;
  var forwardMatches;
  var reverseMatches;
  var v1011 = theDocument.forms[0].elements[7].options;
  var v1012 = theDocument.forms[0].elements[7].selectedIndex;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v767 = v1011[v1012]
  }
  var geneticCode = getGeneticCodeString(v767.value);
  var restrictionSites = getRestrictionSiteString("standard");
  var v768 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v768) {
    v768 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false
  }
  if(v768) {
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
  var isColor$$1;
  var v1172 = theDocument.forms[0].elements[10].options;
  var v1173 = theDocument.forms[0].elements[10].selectedIndex;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v1016 = v1172[v1173]
  }
  if(v1016.value == "color") {
    isColor$$1 = true
  }else {
    isColor$$1 = false
  }
  var primers = theDocument.forms[0].elements[1].value.split(/,/);
  var newPrimers = new Array;
  var primerSeq;
  var primerRe;
  var primerName;
  var matchArray$$2;
  var re$$3 = /\(([^\(]+)\)\s*([A-Za-z]+)/;
  var i$$11 = 0;
  var v358 = i$$11 < primers.length;
  for(;v358;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v774 = primers[i$$11]
    }
    if(matchArray$$2 = re$$3.exec(v774)) {
      primerName = matchArray$$2[1];
      if(matchArray$$2[2].length < 10) {
        alert("Please enter primer sequences that are at least 10 bases long.");
        return false
      }
      primerSeq = matchArray$$2[2];
      var v355 = "/" + convertDegenerates(primerSeq) + "/gi";
      if(JAM.isEval(eval)) {
        primerRe = eval("introspect(JAM.policy.pFull) { " + v355 + " }")
      }else {
        primerRe = JAM.call(eval, null, [v355])
      }
      newPrimers.push(new Primer(primerSeq, primerRe, primerName))
    }
    i$$11 = i$$11 + 1;
    v358 = i$$11 < primers.length
  }
  _openWindow("Primer Map", isColor$$1);
  var v1175 = theDocument.forms[0].elements[8].options;
  var v1176 = theDocument.forms[0].elements[8].selectedIndex;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v1020 = v1175[v1176]
  }
  if(v1020.value == "shown") {
    var v359 = outputWindow.document;
    JAM.call(v359.write, v359, ['<span class="one">' + "cuts once" + "</span><br />\n"]);
    var v361 = outputWindow.document;
    JAM.call(v361.write, v361, ['<span class="two">' + "cuts twice" + "</span><br />\n"]);
    var v363 = outputWindow.document;
    JAM.call(v363.write, v363, ["\n"]);
    var v364 = outputWindow.document;
    JAM.call(v364.write, v364, ['<span class="forward_primer">' + "&gt;&gt;&gt;forward primer" + "</span><br />\n"]);
    var v366 = outputWindow.document;
    JAM.call(v366.write, v366, ['<span class="reverse_primer">' + "&lt;&lt;&lt;reverse primer" + "</span><br />\n"]);
    var v368 = outputWindow.document;
    JAM.call(v368.write, v368, ["\n"])
  }
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  i$$11 = 0;
  var v404 = i$$11 < arrayOfFasta$$1.length;
  for(;v404;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v371 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v371);
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v372 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v372);
    newDna = removeNonDna(newDna);
    openPre();
    var v373 = outputWindow.document;
    var v1178 = theDocument.forms[0].elements[9].options;
    var v1179 = theDocument.forms[0].elements[9].selectedIndex;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1022 = v1178[v1179]
    }
    JAM.call(v373.write, v373, [getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, v1022.value)]);
    var v1180 = theDocument.forms[0].elements[8].options;
    var v1181 = theDocument.forms[0].elements[8].selectedIndex;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1023 = v1180[v1181]
    }
    if(v1023.value == "shown") {
      var v1024 = theDocument.forms[0].elements[9].options;
      var v1025 = theDocument.forms[0].elements[9].selectedIndex;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v787 = v1024[v1025]
      }
      restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, v787.value);
      restrictionSiteCollection.sortRestrictionSites()
    }
    var v1026 = theDocument.forms[0].elements[9].options;
    var v1027 = theDocument.forms[0].elements[9].selectedIndex;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v788 = v1026[v1027]
    }
    forwardMatches = findMatches(newPrimers, newDna, v788.value, false);
    var v378 = reverse(complement(newDna));
    var v1028 = theDocument.forms[0].elements[9].options;
    var v1029 = theDocument.forms[0].elements[9].selectedIndex;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v790 = v1028[v1029]
    }
    reverseMatches = findMatches(newPrimers, v378, v790.value, true);
    var j$$10 = 0;
    var v386 = j$$10 < forwardMatches.matches.length;
    for(;v386;) {
      var v792 = forwardMatches.matches;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v380 = v792[j$$10]
      }
      var v1188 = forwardMatches.matches;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1031 = v1188[j$$10]
      }
      var v793 = v1031.position;
      var v1303 = forwardMatches.matches;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1189 = v1303[j$$10]
      }
      v380.position = v793 - v1189.matchingText.length;
      var v795 = forwardMatches.matches;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v381 = v795[j$$10]
      }
      var v1190 = forwardMatches.matches;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1033 = v1190[j$$10]
      }
      var v796 = v1033.position;
      var v1304 = forwardMatches.matches;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1191 = v1304[j$$10]
      }
      v381.end = v796 + v1191.matchingText.length;
      var v1192 = forwardMatches.matches;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1035 = v1192[j$$10]
      }
      if(v1035.position < 0) {
        var v799 = forwardMatches.matches;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v382 = v799[j$$10]
        }
        var v1193 = forwardMatches.matches;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1036 = v1193[j$$10]
        }
        v382.position = v1036.position + newDna.length
      }
      var v1194 = forwardMatches.matches;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1037 = v1194[j$$10]
      }
      if(v1037.end > newDna.length) {
        var v804 = forwardMatches.matches;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v384 = v804[j$$10]
        }
        var v1195 = forwardMatches.matches;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1038 = v1195[j$$10]
        }
        v384.end = v1038.end - newDna.length
      }
      j$$10 = j$$10 + 1;
      v386 = j$$10 < forwardMatches.matches.length
    }
    j$$10 = 0;
    var v393 = j$$10 < reverseMatches.matches.length;
    for(;v393;) {
      var v809 = reverseMatches.matches;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v387 = v809[j$$10]
      }
      var v810 = newDna.length;
      var v1196 = reverseMatches.matches;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1041 = v1196[j$$10]
      }
      v387.position = v810 - v1041.position;
      var v812 = reverseMatches.matches;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v388 = v812[j$$10]
      }
      var v1197 = reverseMatches.matches;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1042 = v1197[j$$10]
      }
      var v813 = v1042.position;
      var v1305 = reverseMatches.matches;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1198 = v1305[j$$10]
      }
      v388.end = v813 + v1198.matchingText.length;
      var v1199 = reverseMatches.matches;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1044 = v1199[j$$10]
      }
      if(v1044.position < 0) {
        var v816 = reverseMatches.matches;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v389 = v816[j$$10]
        }
        var v1200 = reverseMatches.matches;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1045 = v1200[j$$10]
        }
        v389.position = v1045.position + newDna.length
      }
      var v1201 = reverseMatches.matches;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1046 = v1201[j$$10]
      }
      if(v1046.end > newDna.length) {
        var v821 = reverseMatches.matches;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v391 = v821[j$$10]
        }
        var v1202 = reverseMatches.matches;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1047 = v1202[j$$10]
        }
        v391.end = v1047.end - newDna.length
      }
      j$$10 = j$$10 + 1;
      v393 = j$$10 < reverseMatches.matches.length
    }
    forwardMatches.sortMatches();
    reverseMatches.sortMatches();
    var v1049 = theDocument.forms[0].elements[5].options;
    var v1050 = theDocument.forms[0].elements[5].selectedIndex;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v825 = v1049[v1050]
    }
    var v394 = v825.value;
    var v1051 = theDocument.forms[0].elements[6].options;
    var v1052 = theDocument.forms[0].elements[6].selectedIndex;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v826 = v1051[v1052]
    }
    layoutPrimerMap(newDna, geneticCode, restrictionSiteCollection, forwardMatches, reverseMatches, v394, v826.value);
    var v396 = outputWindow.document;
    JAM.call(v396.write, v396, ["\n"]);
    closePre();
    var v1207 = theDocument.forms[0].elements[8].options;
    var v1208 = theDocument.forms[0].elements[8].selectedIndex;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1053 = v1207[v1208]
    }
    if(v1053.value == "shown") {
      var v1054 = theDocument.forms[0].elements[9].options;
      var v1055 = theDocument.forms[0].elements[9].selectedIndex;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v828 = v1054[v1055]
      }
      writeRestrictionSites(newDna, restrictionSites, v828.value);
      var v398 = outputWindow.document;
      JAM.call(v398.write, v398, ["<br />\n"])
    }
    writePrimerSites(newPrimers);
    var v400 = outputWindow.document;
    JAM.call(v400.write, v400, ["<br />\n<br />\n"]);
    j$$10 = 0;
    var v403 = j$$10 < newPrimers.length;
    for(;v403;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v401 = newPrimers[j$$10]
      }
      v401.hasForwardMatch = false;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v402 = newPrimers[j$$10]
      }
      v402.hasReverseMatch = false;
      j$$10 = j$$10 + 1;
      v403 = j$$10 < newPrimers.length
    }
    i$$11 = i$$11 + 1;
    v404 = i$$11 < arrayOfFasta$$1.length
  }
  closeWindow();
  return true
}
function writePrimerSites(primers$$1) {
  var backGroundClass$$1;
  var v405 = outputWindow.document;
  JAM.call(v405.write, v405, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v406 = outputWindow.document;
  JAM.call(v406.write, v406, ['<tr><td class="title" width="200px">' + "Primer:" + '</td><td class="title">' + "Sequence:" + "</td></tr>\n"]);
  var i$$12 = 0;
  var v413 = i$$12 < primers$$1.length;
  for(;v413;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1057 = primers$$1[i$$12]
    }
    var v834 = v1057.hasForwardMatch;
    if(v834) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1058 = primers$$1[i$$12]
      }
      v834 = v1058.hasReverseMatch
    }
    if(v834) {
      backGroundClass$$1 = "many"
    }else {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v835 = primers$$1[i$$12]
      }
      if(v835.hasForwardMatch) {
        backGroundClass$$1 = "forward_primer"
      }else {
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v836 = primers$$1[i$$12]
        }
        if(v836.hasReverseMatch) {
          backGroundClass$$1 = "reverse_primer"
        }else {
          backGroundClass$$1 = "none"
        }
      }
    }
    var v411 = outputWindow.document;
    var v1533 = '<tr><td class="' + backGroundClass$$1 + '">';
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1567 = primers$$1[i$$12]
    }
    var v1212 = v1533 + v1567.name + '</td><td class="' + backGroundClass$$1 + '">' + "5'-";
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1315 = primers$$1[i$$12]
    }
    JAM.call(v411.write, v411, [v1212 + v1315.sequence + "-3'" + "</td></tr>\n"]);
    i$$12 = i$$12 + 1;
    v413 = i$$12 < primers$$1.length
  }
  var v414 = outputWindow.document;
  JAM.call(v414.write, v414, ["</tbody></table>\n"]);
  return true
}
function layoutPrimerMap(dnaSequence$$3, geneticCode$$1, restrictionSiteCollection$$1, forwardMatches$$1, reverseMatches$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v839 = readingFrame == "3";
  if(!v839) {
    v839 = readingFrame == "all_three"
  }
  if(v839) {
    var translation = new TranslationComponent;
    JAM.call(translation.setCharacters, translation, ["  " + translate(dnaSequence$$3.substring(2, dnaSequence$$3.length), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)]);
    JAM.call(textLayout.addComponent, textLayout, [translation])
  }
  var v841 = readingFrame == "2";
  if(!v841) {
    v841 = readingFrame == "all_three"
  }
  if(v841) {
    translation = new TranslationComponent;
    JAM.call(translation.setCharacters, translation, [" " + translate(dnaSequence$$3.substring(1, dnaSequence$$3.length), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)]);
    JAM.call(textLayout.addComponent, textLayout, [translation])
  }
  var v843 = readingFrame == "1";
  if(!v843) {
    v843 = readingFrame == "all_three"
  }
  if(v843) {
    translation = new TranslationComponent;
    JAM.call(translation.setCharacters, translation, [translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)]);
    JAM.call(textLayout.addComponent, textLayout, [translation])
  }
  if(readingFrame == "uppercase") {
    translation = new UppercaseTranslationComponent;
    JAM.call(translation.setCharacters, translation, [uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)]);
    JAM.call(textLayout.addComponent, textLayout, [translation])
  }
  var dna = new DnaComponent;
  JAM.call(dna.setCharacters, dna, [dnaSequence$$3]);
  JAM.call(textLayout.addComponent, textLayout, [dna]);
  var ruler = new RulerComponent;
  JAM.call(ruler.setCharacters, ruler, [dnaSequence$$3]);
  ruler.buildRuler();
  JAM.call(textLayout.addComponent, textLayout, [ruler]);
  dna = new DnaComponent;
  JAM.call(dna.setCharacters, dna, [complement(dnaSequence$$3)]);
  JAM.call(textLayout.addComponent, textLayout, [dna]);
  var sitesInRange = new Array;
  var i$$13 = 0;
  var v447 = i$$13 < dnaSequence$$3.length;
  for(;v447;) {
    if(restrictionSiteCollection$$1 != null) {
      sitesInRange = JAM.call(restrictionSiteCollection$$1.getSitesInRange, restrictionSiteCollection$$1, [i$$13, i$$13 + basesPerLine]);
      sitesInRange.reverse();
      var j$$11 = 0;
      var v436 = j$$11 < sitesInRange.length;
      for(;v436;) {
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1065 = sitesInRange[j$$11]
        }
        if(v1065.numberOfCuts == 1) {
          var v425 = outputWindow.document;
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1499 = sitesInRange[j$$11]
          }
          var v1066 = spaceString.substring(0, v1499.position - i$$13 + 9) + '<span class="one">';
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1217 = sitesInRange[j$$11]
          }
          JAM.call(v425.write, v425, [v1066 + v1217.label + "</span>\n"])
        }else {
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1068 = sitesInRange[j$$11]
          }
          if(v1068.numberOfCuts == 2) {
            var v427 = outputWindow.document;
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1500 = sitesInRange[j$$11]
            }
            var v1069 = spaceString.substring(0, v1500.position - i$$13 + 9) + '<span class="two">';
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1219 = sitesInRange[j$$11]
            }
            JAM.call(v427.write, v427, [v1069 + v1219.label + "</span>\n"])
          }else {
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1071 = sitesInRange[j$$11]
            }
            if(v1071.numberOfCuts == 3) {
              var v429 = outputWindow.document;
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1501 = sitesInRange[j$$11]
              }
              var v1072 = spaceString.substring(0, v1501.position - i$$13 + 9) + '<span class="three">';
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1221 = sitesInRange[j$$11]
              }
              JAM.call(v429.write, v429, [v1072 + v1221.label + "</span>\n"])
            }else {
              var v431 = outputWindow.document;
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1454 = sitesInRange[j$$11]
              }
              var v1074 = spaceString.substring(0, v1454.position - i$$13 + 9);
              introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1223 = sitesInRange[j$$11]
              }
              JAM.call(v431.write, v431, [v1074 + v1223.label + "\n"])
            }
          }
        }
        j$$11 = j$$11 + 1;
        v436 = j$$11 < sitesInRange.length
      }
    }
    sitesInRange = JAM.call(forwardMatches$$1.getMatchesInRange, forwardMatches$$1, [i$$13, i$$13 + basesPerLine]);
    sitesInRange.reverse();
    j$$11 = 0;
    var v441 = j$$11 < sitesInRange.length;
    for(;v441;) {
      var v439 = outputWindow.document;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1670 = sitesInRange[j$$11]
      }
      var v1502 = spaceString.substring(0, v1670.position - i$$13 + 9) + '<span class="forward_primer">' + "&gt;&gt;&gt;";
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1536 = sitesInRange[j$$11]
      }
      var v1320 = v1502 + v1536.primerName + "&gt;&gt;&gt;" + " ";
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1456 = sitesInRange[j$$11]
      }
      var v1076 = v1320 + (v1456.position + 1) + " to ";
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1225 = sitesInRange[j$$11]
      }
      JAM.call(v439.write, v439, [v1076 + v1225.end + "</span>\n"]);
      j$$11 = j$$11 + 1;
      v441 = j$$11 < sitesInRange.length
    }
    sitesInRange = JAM.call(reverseMatches$$1.getMatchesInRange, reverseMatches$$1, [i$$13, i$$13 + basesPerLine]);
    sitesInRange.reverse();
    j$$11 = 0;
    var v445 = j$$11 < sitesInRange.length;
    for(;v445;) {
      var v443 = outputWindow.document;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1671 = sitesInRange[j$$11]
      }
      var v1504 = spaceString.substring(0, v1671.position - i$$13 + 9) + '<span class="reverse_primer">' + "&lt;&lt;&lt;";
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1538 = sitesInRange[j$$11]
      }
      var v1322 = v1504 + v1538.primerName + "&lt;&lt;&lt;" + " ";
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1458 = sitesInRange[j$$11]
      }
      var v1078 = v1322 + (v1458.position + 1) + " to ";
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1227 = sitesInRange[j$$11]
      }
      JAM.call(v443.write, v443, [v1078 + v1227.end + "</span>\n"]);
      j$$11 = j$$11 + 1;
      v445 = j$$11 < sitesInRange.length
    }
    JAM.call(textLayout.writeLayout, textLayout, [i$$13, i$$13 + basesPerLine]);
    i$$13 = i$$13 + basesPerLine;
    v447 = i$$13 < dnaSequence$$3.length
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
  var i$$14 = 0;
  var v452 = i$$14 < geneticCodeMatchExp$$3.length;
  for(;v452;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v450 = geneticCodeMatchExp$$3[i$$14]
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v451 = geneticCodeMatchResult$$3[i$$14]
    }
    dnaSequence$$4 = dnaSequence$$4.replace(v450, v451);
    i$$14 = i$$14 + 1;
    v452 = i$$14 < geneticCodeMatchExp$$3.length
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
  var i$$15 = 0;
  var v457 = i$$15 < geneticCodeMatchExp$$4.length;
  for(;v457;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v455 = geneticCodeMatchExp$$4[i$$15]
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v456 = geneticCodeMatchResult$$4[i$$15]
    }
    dnaSequence$$5 = dnaSequence$$5.replace(v455, v456);
    i$$15 = i$$15 + 1;
    v457 = i$$15 < geneticCodeMatchExp$$4.length
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/\S{3}/g, "X");
  dnaSequence$$5 = dnaSequence$$5.replace(/^\s/, "");
  return dnaSequence$$5
}
function findRestrictionSites(sequence$$18, arrayOfItems$$2, dnaConformation$$1) {
  var lookAhead$$1 = 50;
  var lowerLimit$$1 = 0;
  var upperLimit$$1 = sequence$$18.length;
  var shiftValue$$1 = 0;
  var cutDistance$$1;
  var matchExp$$2;
  var matchPosition$$1;
  var matchArray$$3;
  var label$$2;
  var timesFound$$1 = 0;
  var tempArray = new Array;
  var restrictionSiteCollection$$2 = new RestrictionSiteCollection;
  if(dnaConformation$$1 == "circular") {
    shiftValue$$1 = sequence$$18.substring(0, lookAhead$$1).length;
    sequence$$18 = sequence$$18.substring(sequence$$18.length - lookAhead$$1, sequence$$18.length) + sequence$$18 + sequence$$18.substring(0, lookAhead$$1);
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1
  }
  var i$$16 = 0;
  var v472 = i$$16 < arrayOfItems$$2.length;
  for(;v472;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v870 = arrayOfItems$$2[i$$16]
    }
    matchExp$$2 = v870.match(/\/.+\//) + "gi";
    matchPosition$$1 = 0;
    if(JAM.isEval(eval)) {
      matchExp$$2 = eval("introspect(JAM.policy.pFull) { " + matchExp$$2 + " }")
    }else {
      matchExp$$2 = JAM.call(eval, null, [matchExp$$2])
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1230 = arrayOfItems$$2[i$$16]
    }
    cutDistance$$1 = parseFloat(v1230.match(/\)\D*\d+/).toString().replace(/\)\D*/, ""));
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1086 = arrayOfItems$$2[i$$16]
    }
    label$$2 = v1086.match(/\([^\(]+\)/).toString().replace(/\(|\)/g, "");
    var v468 = matchArray$$3 = matchExp$$2.exec(sequence$$18);
    for(;v468;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
      var v873 = matchPosition$$1 >= lowerLimit$$1;
      if(v873) {
        v873 = matchPosition$$1 < upperLimit$$1
      }
      if(v873) {
        timesFound$$1 = timesFound$$1 + 1;
        tempArray.push(new RestrictionSite(label$$2 + " " + (matchPosition$$1 - shiftValue$$1 + 1), matchPosition$$1 - shiftValue$$1))
      }
      matchExp$$2.lastIndex = matchExp$$2.lastIndex - RegExp.lastMatch.length + 1;
      v468 = matchArray$$3 = matchExp$$2.exec(sequence$$18)
    }
    var j$$12 = 0;
    var v471 = j$$12 < tempArray.length;
    for(;v471;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v469 = tempArray[j$$12]
      }
      v469.numberOfCuts = timesFound$$1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v470 = tempArray[j$$12]
      }
      JAM.call(restrictionSiteCollection$$2.addRestrictionSite, restrictionSiteCollection$$2, [v470]);
      j$$12 = j$$12 + 1;
      v471 = j$$12 < tempArray.length
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$16 = i$$16 + 1;
    v472 = i$$16 < arrayOfItems$$2.length
  }
  return restrictionSiteCollection$$2
}
function findMatches(primers$$2, sequence$$19, topology$$1, isReverseStrand) {
  var matchArray$$4;
  var matchPosition$$2;
  var matchCollection = new MatchCollection;
  var re$$4;
  var originalLength$$1 = sequence$$19.length;
  if(topology$$1 == "circular") {
    var lookAhead$$2 = 50;
    var shiftValue$$2 = sequence$$19.substring(0, lookAhead$$2).length;
    var upperLimit$$2 = sequence$$19.length + shiftValue$$2;
    sequence$$19 = sequence$$19.substring(sequence$$19.length - lookAhead$$2, sequence$$19.length) + sequence$$19 + sequence$$19.substring(0, lookAhead$$2);
    var lowerLimit$$2 = 0 + shiftValue$$2;
    var i$$17 = 0;
    var v485 = i$$17 < primers$$2.length;
    for(;v485;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v477 = primers$$2[i$$17]
      }
      re$$4 = v477.re;
      var v484 = matchArray$$4 = re$$4.exec(sequence$$19);
      for(;v484;) {
        matchPosition$$2 = re$$4.lastIndex;
        var v883 = matchPosition$$2 >= lowerLimit$$2;
        if(v883) {
          v883 = matchPosition$$2 < upperLimit$$2
        }
        if(v883) {
          matchPosition$$2 = matchPosition$$2 - shiftValue$$2;
          if(matchPosition$$2 == 0) {
            matchPosition$$2 = originalLength$$1
          }
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1092 = primers$$2[i$$17]
          }
          JAM.call(matchCollection.addMatch, matchCollection, [new Match(v1092.name, matchArray$$4[0], matchPosition$$2)]);
          if(isReverseStrand) {
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v480 = primers$$2[i$$17]
            }
            v480.hasReverseMatch = true
          }else {
            introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v481 = primers$$2[i$$17]
            }
            v481.hasForwardMatch = true
          }
        }
        re$$4.lastIndex = re$$4.lastIndex - RegExp.lastMatch.length + 1;
        v484 = matchArray$$4 = re$$4.exec(sequence$$19)
      }
      i$$17 = i$$17 + 1;
      v485 = i$$17 < primers$$2.length
    }
  }else {
    i$$17 = 0;
    var v492 = i$$17 < primers$$2.length;
    for(;v492;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v486 = primers$$2[i$$17]
      }
      re$$4 = v486.re;
      var v491 = matchArray$$4 = re$$4.exec(sequence$$19);
      for(;v491;) {
        matchPosition$$2 = re$$4.lastIndex;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1094 = primers$$2[i$$17]
        }
        JAM.call(matchCollection.addMatch, matchCollection, [new Match(v1094.name, matchArray$$4[0], matchPosition$$2)]);
        if(isReverseStrand) {
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v488 = primers$$2[i$$17]
          }
          v488.hasReverseMatch = true
        }else {
          introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v489 = primers$$2[i$$17]
          }
          v489.hasForwardMatch = true
        }
        re$$4.lastIndex = re$$4.lastIndex - RegExp.lastMatch.length + 1;
        v491 = matchArray$$4 = re$$4.exec(sequence$$19)
      }
      i$$17 = i$$17 + 1;
      v492 = i$$17 < primers$$2.length
    }
  }
  return matchCollection
}
function writeLayout(start$$4, stop) {
  var i$$18 = 0;
  var v495 = i$$18 < this.components.length;
  for(;v495;) {
    var v896 = this.components;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v494 = v896[i$$18]
    }
    JAM.call(v494.writeLayoutComponent, v494, [start$$4, stop]);
    i$$18 = i$$18 + 1;
    v495 = i$$18 < this.components.length
  }
  return
}
function addComponent(component) {
  this.components.push(component);
  return
}
function TextLayout() {
  var v1867 = new Array;
  this.components = v1867;
  return
}
function writeLayoutComponent(start$$5, stop$$1) {
  return
}
function setCharacters(text$$14) {
  if(text$$14.search(/./) != -1) {
    var v1868 = text$$14.match(/./g);
    this.characters = v1868
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
  var v1869 = new Array;
  this.characters = v1869;
  this.positionLabel = 1;
  return
}
function TranslationComponent() {
  var v1870 = new Array;
  this.characters = v1870;
  this.positionLabel = 1;
  return
}
function UppercaseTranslationComponent() {
  var v1871 = new Array;
  this.characters = v1871;
  this.positionLabel = 1;
  return
}
function DnaComponent() {
  var v1872 = new Array;
  this.characters = v1872;
  this.positionLabel = 1;
  return
}
function RulerComponent() {
  var v1873 = new Array;
  this.characters = v1873;
  this.positionLabel = 1;
  return
}
function buildRuler() {
  function v4(str$$12, p1$$6, offset$$18, s$$8) {
    var ruler$$1 = count$$6 + spacing;
    if(count$$6 == 0) {
      ruler$$1 = spacing
    }
    count$$6 = count$$6 + 10;
    return ruler$$1.substring(0, 10)
  }
  var sequence$$20 = this.characters.join("");
  var count$$6 = 0;
  var spacing = "         ";
  sequence$$20 = sequence$$20.replace(/(.{1,10})/g, v4);
  var v1874 = sequence$$20.match(/./g);
  this.characters = v1874;
  return
}
function RestrictionSite(label$$3, position) {
  this.label = label$$3;
  this.position = position;
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
function getSitesInRange(start$$11, stop$$7) {
  var arrayToReturn = new Array;
  var i$$19 = this.restrictionSites.length - 1;
  var v507 = i$$19 >= 0;
  for(;v507;) {
    var v1325 = this.restrictionSites;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1233 = v1325[i$$19]
    }
    var v901 = v1233.position >= start$$11;
    if(v901) {
      var v1326 = this.restrictionSites;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1234 = v1326[i$$19]
      }
      v901 = v1234.position < stop$$7
    }
    if(v901) {
      arrayToReturn.push(this.restrictionSites.pop())
    }else {
      break
    }
    i$$19 = i$$19 - 1;
    v507 = i$$19 >= 0
  }
  return arrayToReturn
}
function RestrictionSiteCollection() {
  var v1875 = new Array;
  this.restrictionSites = v1875;
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
function Primer(sequence$$21, re$$5, name$$31) {
  this.sequence = sequence$$21;
  this.re = re$$5;
  this.name = name$$31;
  this.hasForwardMatch = false;
  this.hasReverseMatch = false;
  return
}
function Match(primerName$$1, matchingText, position$$1) {
  this.primerName = primerName$$1;
  this.matchingText = matchingText;
  this.position = position$$1;
  return
}
function addMatch(match) {
  this.matches.push(match);
  return
}
function sortMatches() {
  this.matches.sort(matchSorter);
  return
}
function getMatchesInRange(start$$12, stop$$8) {
  var arrayToReturn$$1 = new Array;
  var i$$20 = this.matches.length - 1;
  var v515 = i$$20 >= 0;
  for(;v515;) {
    var v1327 = this.matches;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1235 = v1327[i$$20]
    }
    var v908 = v1235.position >= start$$12;
    if(v908) {
      var v1328 = this.matches;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1236 = v1328[i$$20]
      }
      v908 = v1236.position < stop$$8
    }
    if(v908) {
      arrayToReturn$$1.push(this.matches.pop())
    }else {
      break
    }
    i$$20 = i$$20 - 1;
    v515 = i$$20 >= 0
  }
  return arrayToReturn$$1
}
function MatchCollection() {
  var v1876 = new Array;
  this.matches = v1876;
  return
}
function matchSorter(a$$1, b$$1) {
  if(a$$1.position < b$$1.position) {
    return 1
  }
  if(a$$1.position > b$$1.position) {
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
var v523 = TranslationComponent;
var v1877 = new LayoutComponent;
v523.prototype = v1877;
TranslationComponent.prototype.writeLayoutComponent = v5;
var v525 = UppercaseTranslationComponent;
var v1878 = new LayoutComponent;
v525.prototype = v1878;
UppercaseTranslationComponent.prototype.writeLayoutComponent = v6;
var v527 = DnaComponent;
var v1879 = new LayoutComponent;
v527.prototype = v1879;
DnaComponent.prototype.writeLayoutComponent = v7;
var v529 = RulerComponent;
var v1880 = new LayoutComponent;
v529.prototype = v1880;
RulerComponent.prototype.writeLayoutComponent = v10;
new RulerComponent;
RulerComponent.prototype.buildRuler = buildRuler;
new RestrictionSiteCollection;
RestrictionSiteCollection.prototype.addRestrictionSite = addRestrictionSite;
RestrictionSiteCollection.prototype.sortRestrictionSites = sortRestrictionSites;
RestrictionSiteCollection.prototype.getSitesInRange = getSitesInRange;
new MatchCollection;
MatchCollection.prototype.addMatch = addMatch;
MatchCollection.prototype.sortMatches = sortMatches;
MatchCollection.prototype.getMatchesInRange = getMatchesInRange;
JAM.set(document, "onload", v11);
JAM.set(document.getElementById("submitbtn"), "onclick", v12);
JAM.set(document.getElementById("clearbtn"), "onclick", v13);

