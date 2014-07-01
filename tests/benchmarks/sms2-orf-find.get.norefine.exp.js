function v5() {
  var v732 = document.forms;
  var v601 = v732[0];
  var v354 = v601.elements;
  var v6 = v354[0];
  v6.value = " ";
  var v733 = document.forms;
  var v602 = v733[0];
  var v355 = v602.elements;
  var v7 = v355[4];
  v7.value = " ";
  return
}
function v4() {
  try {
    orfFind(document)
  }catch(e$$5) {
    var v8 = "The following error was encountered: " + e$$5;
    alert(v8)
  }
  return
}
function v3() {
  var v356 = document.main_form;
  var v9 = v356.main_submit;
  v9.focus();
  return
}
function addReturns(sequence) {
  function v0(str$$7, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  sequence = sequence.replace(/(.{60})/g, v0);
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v10 = arrayOfSequences[0];
  var lengthOfAlign = v10.length;
  var v357 = arrayOfSequences.length;
  var v11 = v357 < 2;
  if(v11) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v358 = arrayOfTitles.length;
  var v13 = i$$1 < v358;
  for(;v13;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v734 = arrayOfTitles[i$$1]
    }
    var v603 = v734.search(/\S/);
    var v359 = v603 == -1;
    var v605 = !v359;
    if(v605) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v829 = arrayOfSequences[i$$1]
      }
      var v735 = v829.search(/\S/);
      var v604 = v735 == -1;
      var v737 = !v604;
      if(v737) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v830 = arrayOfSequences[i$$1]
        }
        var v736 = v830.length;
        v604 = v736 != lengthOfAlign
      }
      v359 = v604
    }
    var v12 = v359;
    if(v12) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v360 = arrayOfTitles.length;
    v13 = i$$1 < v360
  }
  return true
}
function checkCodonTable(codonTable) {
  var v606 = codonTable.search(/AmAcid/);
  var v361 = v606 == -1;
  var v608 = !v361;
  if(v608) {
    var v738 = codonTable.search(/Codon/);
    var v607 = v738 == -1;
    var v740 = !v607;
    if(v740) {
      var v831 = codonTable.search(/Number/);
      var v739 = v831 == -1;
      var v833 = !v739;
      if(v833) {
        var v908 = codonTable.search(/\/1000/);
        var v832 = v908 == -1;
        var v910 = !v832;
        if(v910) {
          var v909 = codonTable.search(/Fraction\s*\.\./);
          v832 = v909 == -1
        }
        v739 = v832
      }
      v607 = v739
    }
    v361 = v607
  }
  var v14 = v361;
  if(v14) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v609 = formElement.value;
  var v362 = v609.search(/\S/);
  var v15 = v362 == -1;
  if(v15) {
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
  var v363 = arrayOfPatterns.length;
  var v18 = z$$2 < v363;
  for(;v18;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v610 = arrayOfPatterns[z$$2]
    }
    var v364 = v610.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v16 = v364 == -1;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v611 = arrayOfPatterns[z$$2]
    }
    var v365 = moreExpressionCheck(v611);
    var v17 = v365 == false;
    if(v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v366 = arrayOfPatterns.length;
    v18 = z$$2 < v366
  }
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v19);
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v20);
  var j = 0;
  var v367 = arrayOfPatterns.length;
  var v27 = j < v367;
  for(;v27;) {
    var v21 = geneticCodeMatchExp;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v741 = arrayOfPatterns[j]
    }
    var v612 = v741.match(/\/.+\//);
    var v368 = v612 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1290 = eval("introspect(JAMScript.introspectors.processAll) { " + v368 + " }")
    }else {
      var v1290 = JAMScript.call(eval, null, [v368])
    }
    v21[v22] = v1290;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v613 = arrayOfPatterns[j]
    }
    var v369 = v613.match(/=[a-zA-Z\*]/);
    var v1291 = v369.toString();
    v23[v24] = v1291;
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v370 = geneticCodeMatchResult[j]
    }
    var v1292 = v370.replace(/=/g, "");
    v25[v26] = v1292;
    j = j + 1;
    var v371 = arrayOfPatterns.length;
    v27 = j < v371
  }
  var i$$2 = 0;
  var v614 = testSequence.length;
  var v372 = v614 - 3;
  var v34 = i$$2 <= v372;
  for(;v34;) {
    var v28 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v28);
    j = 0;
    var v373 = geneticCodeMatchExp.length;
    var v32 = j < v373;
    for(;v32;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v615 = geneticCodeMatchExp[j]
      }
      var v374 = codon.search(v615);
      var v31 = v374 != -1;
      if(v31) {
        var v30 = oneMatch == true;
        if(v30) {
          var v375 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v29 = v375 + ".";
          alert(v29);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v376 = geneticCodeMatchExp.length;
      v32 = j < v376
    }
    var v33 = oneMatch == false;
    if(v33) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v616 = testSequence.length;
    var v377 = v616 - 3;
    v34 = i$$2 <= v377
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v378 = arrayOfPatterns$$1.length;
  var v36 = z$$3 < v378;
  for(;v36;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v617 = arrayOfPatterns$$1[z$$3]
    }
    var v379 = v617.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v35 = v379 != -1;
    if(v35) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v380 = arrayOfPatterns$$1.length;
    v36 = z$$3 < v380
  }
  var i$$3 = 0;
  var v381 = arrayOfPatterns$$1.length;
  var v40 = i$$3 < v381;
  for(;v40;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v618 = arrayOfPatterns$$1[i$$3]
    }
    var v382 = "[" + v618;
    var v37 = v382 + "]";
    var re = new RegExp(v37, "gi");
    var j$$1 = i$$3 + 1;
    var v383 = arrayOfPatterns$$1.length;
    var v39 = j$$1 < v383;
    for(;v39;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v619 = arrayOfPatterns$$1[j$$1]
      }
      var v384 = v619.search(re);
      var v38 = v384 != -1;
      if(v38) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v385 = arrayOfPatterns$$1.length;
      v39 = j$$1 < v385
    }
    i$$3 = i$$3 + 1;
    var v386 = arrayOfPatterns$$1.length;
    v40 = i$$3 < v386
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v387 = arrayOfPatterns$$2.length;
  var v43 = z$$4 < v387;
  for(;v43;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v620 = arrayOfPatterns$$2[z$$4]
    }
    var v388 = v620.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v41 = v388 == -1;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v621 = arrayOfPatterns$$2[z$$4]
    }
    var v389 = moreExpressionCheck(v621);
    var v42 = v389 == false;
    if(v42) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v390 = arrayOfPatterns$$2.length;
    v43 = z$$4 < v390
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v742 = getSequenceFromFasta(text$$7);
  var v622 = v742.replace(/[^A-Za-z]/g, "");
  var v391 = v622.length;
  var v45 = v391 > maxInput;
  if(v45) {
    var v392 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v44 = v392 + " characters.";
    alert(v44);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v393 = text$$8.length;
  var v47 = v393 > maxInput$$1;
  if(v47) {
    var v394 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v46 = v394 + " characters.";
    alert(v46);
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
  JAMScript.call(v48.write, v48, ["</form>"]);
  return true
}
function closePre() {
  var v49 = outputWindow.document;
  JAMScript.call(v49.write, v49, ["</div>"]);
  var v50 = outputWindow.document;
  JAMScript.call(v50.write, v50, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v51 = outputWindow.document;
  JAMScript.call(v51.write, v51, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v52 = outputWindow.document;
  JAMScript.call(v52.write, v52, ["</body>\n</html>\n"]);
  outputWindow.status = "Done.";
  var v53 = outputWindow.document;
  v53.close();
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
  var v395 = alignArray.length;
  var v54 = v395 < 3;
  if(v54) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v396 = alignArray.length;
  var v56 = i$$4 < v396;
  for(;v56;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v623 = alignArray[i$$4]
    }
    var v397 = v623.search(/[^\s]+\s/);
    var v55 = v397 == -1;
    if(v55) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v398 = alignArray.length;
    v56 = i$$4 < v398
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
  var v399 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v59 = v399 != -1;
  if(v59) {
    var v58 = matchArray = re$$1.exec(sequenceData);
    for(;v58;) {
      var v57 = matchArray[0];
      arrayOfFasta.push(v57);
      v58 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v400 = sequence$$2.length;
  var v60 = "&gt;results for " + v400;
  var stringToReturn = v60 + " residue sequence ";
  var v401 = fastaSequenceTitle.search(/[^\s]/);
  var v62 = v401 != -1;
  if(v62) {
    var v402 = stringToReturn + '"';
    var v61 = v402 + fastaSequenceTitle;
    stringToReturn = v61 + '"'
  }
  var v403 = stringToReturn + ' starting "';
  var v404 = sequence$$2.substring(0, 10);
  var v63 = v403 + v404;
  stringToReturn = v63 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v405 = sequenceOne.length;
  var v64 = "Search results for " + v405;
  var stringToReturn$$1 = v64 + " residue sequence ";
  var v406 = fastaSequenceTitleOne.search(/[^\s]/);
  var v66 = v406 != -1;
  if(v66) {
    var v407 = stringToReturn$$1 + '"';
    var v65 = v407 + fastaSequenceTitleOne;
    stringToReturn$$1 = v65 + '"'
  }
  var v408 = stringToReturn$$1 + ' starting "';
  var v409 = sequenceOne.substring(0, 10);
  var v67 = v408 + v409;
  stringToReturn$$1 = v67 + '"\n';
  var v410 = stringToReturn$$1 + "and ";
  var v411 = sequenceTwo.length;
  var v68 = v410 + v411;
  stringToReturn$$1 = v68 + " residue sequence ";
  var v412 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v70 = v412 != -1;
  if(v70) {
    var v413 = stringToReturn$$1 + '"';
    var v69 = v413 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v69 + '"'
  }
  var v414 = stringToReturn$$1 + ' starting "';
  var v415 = sequenceTwo.substring(0, 10);
  var v71 = v414 + v415;
  stringToReturn$$1 = v71 + '"';
  var v72 = '<div class="info">' + stringToReturn$$1;
  return v72 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v73 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v73);
  var j$$2 = 0;
  var v416 = arrayOfPatterns$$3.length;
  var v76 = j$$2 < v416;
  for(;v76;) {
    var v74 = geneticCodeMatchExp$$1;
    var v75 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v743 = arrayOfPatterns$$3[j$$2]
    }
    var v624 = v743.match(/\/.+\//);
    var v417 = v624 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1293 = eval("introspect(JAMScript.introspectors.processAll) { " + v417 + " }")
    }else {
      var v1293 = JAMScript.call(eval, null, [v417])
    }
    v74[v75] = v1293;
    j$$2 = j$$2 + 1;
    var v418 = arrayOfPatterns$$3.length;
    v76 = j$$2 < v418
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v77 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v77);
  var j$$3 = 0;
  var v419 = arrayOfPatterns$$4.length;
  var v82 = j$$3 < v419;
  for(;v82;) {
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v625 = arrayOfPatterns$$4[j$$3]
    }
    var v420 = v625.match(/=[a-zA-Z\*]/);
    var v1294 = v420.toString();
    v78[v79] = v1294;
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v421 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1295 = v421.replace(/=/g, "");
    v80[v81] = v1295;
    j$$3 = j$$3 + 1;
    var v422 = arrayOfPatterns$$4.length;
    v82 = j$$3 < v422
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v423 = sequence$$3.length;
  var v83 = "Results for " + v423;
  var stringToReturn$$2 = v83 + " residue sequence ";
  var v424 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v85 = v424 != -1;
  if(v85) {
    var v425 = stringToReturn$$2 + '"';
    var v84 = v425 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v84 + '"'
  }
  var v426 = stringToReturn$$2 + ' starting "';
  var v427 = sequence$$3.substring(0, 10);
  var v86 = v426 + v427;
  stringToReturn$$2 = v86 + '"';
  var v87 = '<div class="info">' + stringToReturn$$2;
  return v87 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v626 = "Results for " + topology;
  var v428 = v626 + " ";
  var v429 = sequence$$4.length;
  var v88 = v428 + v429;
  var stringToReturn$$3 = v88 + " residue sequence ";
  var v430 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v90 = v430 != -1;
  if(v90) {
    var v431 = stringToReturn$$3 + '"';
    var v89 = v431 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v89 + '"'
  }
  var v432 = stringToReturn$$3 + ' starting "';
  var v433 = sequence$$4.substring(0, 10);
  var v91 = v432 + v433;
  stringToReturn$$3 = v91 + '"';
  var v92 = '<div class="info">' + stringToReturn$$3;
  return v92 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v434 = sequenceOne$$1.length;
  var v93 = "Alignment results for " + v434;
  var stringToReturn$$4 = v93 + " residue sequence ";
  var v435 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v95 = v435 != -1;
  if(v95) {
    var v436 = stringToReturn$$4 + '"';
    var v94 = v436 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v94 + '"'
  }
  var v437 = stringToReturn$$4 + ' starting "';
  var v438 = sequenceOne$$1.substring(0, 10);
  var v96 = v437 + v438;
  stringToReturn$$4 = v96 + '"\n';
  var v439 = stringToReturn$$4 + "and ";
  var v440 = sequenceTwo$$1.length;
  var v97 = v439 + v440;
  stringToReturn$$4 = v97 + " residue sequence ";
  var v441 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v99 = v441 != -1;
  if(v99) {
    var v442 = stringToReturn$$4 + '"';
    var v98 = v442 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v98 + '"'
  }
  var v443 = stringToReturn$$4 + ' starting "';
  var v444 = sequenceTwo$$1.substring(0, 10);
  var v100 = v443 + v444;
  stringToReturn$$4 = v100 + '"';
  var v101 = '<div class="info">' + stringToReturn$$4;
  return v101 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v103 = j$$4 < lengthOut;
  for(;v103;) {
    var v445 = Math.random();
    var v446 = components.length;
    var v102 = v445 * v446;
    tempNum = Math.floor(v102);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v103 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v447 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v447 != -1;
  if(v104) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v448 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v106 = v448 != -1;
  if(v106) {
    var v105 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v105.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v627 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v449 = v627 != -1;
  var v629 = !v449;
  if(v629) {
    var v744 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v628 = v744 != -1;
    var v746 = !v628;
    if(v746) {
      var v834 = expressionToCheck.search(/\[\]/);
      var v745 = v834 != -1;
      var v836 = !v745;
      if(v836) {
        var v911 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v835 = v911 != -1;
        var v913 = !v835;
        if(v913) {
          var v965 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v912 = v965 != -1;
          var v967 = !v912;
          if(v967) {
            var v1019 = expressionToCheck.search(/\|\|/);
            var v966 = v1019 != -1;
            var v1021 = !v966;
            if(v1021) {
              var v1051 = expressionToCheck.search(/\/\|/);
              var v1020 = v1051 != -1;
              var v1053 = !v1020;
              if(v1053) {
                var v1079 = expressionToCheck.search(/\|\//);
                var v1052 = v1079 != -1;
                var v1081 = !v1052;
                if(v1081) {
                  var v1107 = expressionToCheck.search(/\[.\]/);
                  var v1080 = v1107 != -1;
                  var v1109 = !v1080;
                  if(v1109) {
                    var v1132 = expressionToCheck.search(/\</);
                    var v1108 = v1132 != -1;
                    var v1134 = !v1108;
                    if(v1134) {
                      var v1133 = expressionToCheck.search(/\>/);
                      v1108 = v1133 != -1
                    }
                    v1080 = v1108
                  }
                  v1052 = v1080
                }
                v1020 = v1052
              }
              v966 = v1020
            }
            v912 = v966
          }
          v835 = v912
        }
        v745 = v835
      }
      v628 = v745
    }
    v449 = v628
  }
  var v107 = v449;
  if(v107) {
    return false
  }
  return true
}
function openForm() {
  var v108 = outputWindow.document;
  JAMScript.call(v108.write, v108, ['<form action="">\n']);
  return true
}
function openPre() {
  var v109 = outputWindow.document;
  JAMScript.call(v109.write, v109, ["<pre>"]);
  var v110 = outputWindow.document;
  JAMScript.call(v110.write, v110, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v111 = outputWindow.document;
  JAMScript.call(v111.write, v111, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1296 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1296[2], v1296[1], v1296[0]);
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v747 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v630 = v747 + "<head>\n";
  var v450 = v630 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v450 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v112.write, v112, [v113]);
  if(isColor) {
    var v114 = outputWindow.document;
    var v1198 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1177 = v1198 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1156 = v1177 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1135 = v1156 + "div.info {font-weight: bold}\n";
    var v1110 = v1135 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1082 = v1110 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1054 = v1082 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1022 = v1054 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v968 = v1022 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v914 = v968 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v837 = v914 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v748 = v837 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v631 = v748 + "td.many {color: #000000}\n";
    var v451 = v631 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v115 = v451 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }else {
    var v116 = outputWindow.document;
    var v1219 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1199 = v1219 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1178 = v1199 + "div.title {display: none}\n";
    var v1157 = v1178 + "div.info {font-weight: bold}\n";
    var v1136 = v1157 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1111 = v1136 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1083 = v1111 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1055 = v1083 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1023 = v1055 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v969 = v1023 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v915 = v969 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v838 = v915 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v749 = v838 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v632 = v749 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v452 = v632 + "img {display: none}\n";
    var v117 = v452 + "</style>\n";
    JAMScript.call(v116.write, v116, [v117])
  }
  var v118 = outputWindow.document;
  var v750 = "</head>\n" + '<body class="main">\n';
  var v633 = v750 + '<div class="title">';
  var v453 = v633 + title$$6;
  var v119 = v453 + " results</div>\n";
  JAMScript.call(v118.write, v118, [v119]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1297 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1297[2], v1297[1], v1297[0]);
  outputWindow.focus();
  var v120 = outputWindow.document;
  var v751 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v634 = v751 + "<head>\n";
  var v454 = v634 + "<title>Sequence Manipulation Suite</title>\n";
  var v121 = v454 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v120.write, v120, [v121]);
  if(isBackground) {
    var v122 = outputWindow.document;
    var v1200 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1179 = v1200 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1158 = v1179 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1137 = v1158 + "div.info {font-weight: bold}\n";
    var v1112 = v1137 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1084 = v1112 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1056 = v1084 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1024 = v1056 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v970 = v1024 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v916 = v970 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v839 = v916 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v752 = v839 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v635 = v752 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v455 = v635 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v123 = v455 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }else {
    var v124 = outputWindow.document;
    var v1238 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1220 = v1238 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1201 = v1220 + "div.title {display: none}\n";
    var v1180 = v1201 + "div.info {font-weight: bold}\n";
    var v1159 = v1180 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1138 = v1159 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1113 = v1138 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1085 = v1113 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1057 = v1085 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1025 = v1057 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v971 = v1025 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v917 = v971 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v840 = v917 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v753 = v840 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v636 = v753 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v456 = v636 + "img {display: none}\n";
    var v125 = v456 + "</style>\n";
    JAMScript.call(v124.write, v124, [v125])
  }
  var v126 = outputWindow.document;
  var v754 = "</head>\n" + '<body class="main">\n';
  var v637 = v754 + '<div class="title">';
  var v457 = v637 + title$$8;
  var v127 = v457 + " results</div>\n";
  JAMScript.call(v126.write, v126, [v127]);
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
  var v458 = dnaSequence$$1.search(/./);
  var v128 = v458 != -1;
  if(v128) {
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
  var v130 = tempString + theNumber;
  theNumber = v130 + " ";
  var v131 = sequenceToAppend + theNumber;
  sequenceToAppend = v131 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v459 = testArray[0];
  var v132 = v459 != testString;
  if(v132) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v460 = testString.search(re$$2);
  var v133 = v460 == -1;
  if(v133) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    if(JAMScript.isEval(eval)) {
      re$$2 = eval("introspect(JAMScript.introspectors.processAll) { " + "Exception handling not supported. Check browser compatibility page." + " }")
    }else {
      re$$2 = JAMScript.call(eval, null, ["Exception handling not supported. Check browser compatibility page."])
    }
  }catch(e$$4) {
    caughtException = true
  }
  var v134 = !caughtException;
  if(v134) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v135 = testString != "1X2X3X";
  if(v135) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v461 = testNum.toFixed(3);
  var v136 = v461 != 2489.824;
  if(v136) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v462 = testNum.toPrecision(5);
  var v137 = v462 != 2489.8;
  if(v137) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v463 = theNumber$$1.search(/\d/);
  var v138 = v463 == -1;
  if(v138) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v638 = emblFile.search(/ID/);
  var v464 = v638 == -1;
  var v640 = !v464;
  if(v640) {
    var v755 = emblFile.search(/AC/);
    var v639 = v755 == -1;
    var v757 = !v639;
    if(v757) {
      var v841 = emblFile.search(/DE/);
      var v756 = v841 == -1;
      var v843 = !v756;
      if(v843) {
        var v842 = emblFile.search(/SQ/);
        v756 = v842 == -1
      }
      v639 = v756
    }
    v464 = v639
  }
  var v139 = v464;
  if(v139) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v465 = theNumber$$2.search(/\d/);
  var v140 = v465 == -1;
  if(v140) {
    alert("Please enter a number.");
    return false
  }
  var v142 = theNumber$$2 > maxInput$$2;
  if(v142) {
    var v466 = "Please enter a number less than or equal to " + maxInput$$2;
    var v141 = v466 + ".";
    alert(v141);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v467 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v143 = v467 != -1;
  if(v143) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v468 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v144 = v468 != -1;
  if(v144) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v641 = genBankFile.search(/LOCUS/);
  var v469 = v641 == -1;
  var v643 = !v469;
  if(v643) {
    var v758 = genBankFile.search(/DEFINITION/);
    var v642 = v758 == -1;
    var v760 = !v642;
    if(v760) {
      var v844 = genBankFile.search(/ACCESSION/);
      var v759 = v844 == -1;
      var v846 = !v759;
      if(v846) {
        var v845 = genBankFile.search(/ORIGIN/);
        v759 = v845 == -1
      }
      v642 = v759
    }
    v469 = v642
  }
  var v145 = v469;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v644 = genBankFile$$1.search(/LOCUS/);
  var v470 = v644 == -1;
  var v646 = !v470;
  if(v646) {
    var v761 = genBankFile$$1.search(/DEFINITION/);
    var v645 = v761 == -1;
    var v763 = !v645;
    if(v763) {
      var v847 = genBankFile$$1.search(/ACCESSION/);
      var v762 = v847 == -1;
      var v849 = !v762;
      if(v849) {
        var v848 = genBankFile$$1.search(/ORIGIN/);
        v762 = v848 == -1
      }
      v645 = v762
    }
    v470 = v645
  }
  var v146 = v470;
  if(v146) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v471 = genBankFile$$1.search(/FEATURES {13}/);
  var v147 = v471 == -1;
  if(v147) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v647 = emblFile$$1.search(/ID/);
  var v472 = v647 == -1;
  var v649 = !v472;
  if(v649) {
    var v764 = emblFile$$1.search(/AC/);
    var v648 = v764 == -1;
    var v766 = !v648;
    if(v766) {
      var v850 = emblFile$$1.search(/DE/);
      var v765 = v850 == -1;
      var v852 = !v765;
      if(v852) {
        var v851 = emblFile$$1.search(/SQ/);
        v765 = v851 == -1
      }
      v648 = v765
    }
    v472 = v648
  }
  var v148 = v472;
  if(v148) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v473 = emblFile$$1.search(/^FT/m);
  var v149 = v473 == -1;
  if(v149) {
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
    var v150 = i$$5 + 1;
    lineOfText = rightNum(v150, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v474 = basePerLine / groupSize;
    var v153 = j$$6 <= v474;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v475 = k + i$$5;
        var v151 = text$$10.charAt(v475);
        lineOfText = lineOfText + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v476 = basePerLine / groupSize;
      v153 = j$$6 <= v476
    }
    var v154 = outputWindow.document;
    var v155 = lineOfText + "\n";
    JAMScript.call(v154.write, v154, [v155]);
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
    var v477 = adjustment < 0;
    if(v477) {
      v477 = adjusted >= 0
    }
    var v157 = v477;
    if(v157) {
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
  var v188 = i$$6 < stopBase$$2;
  for(;v188;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v478 = basePerLine$$2 / groupSize$$2;
    var v164 = j$$7 <= v478;
    for(;v164;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v479 = i$$6 + k$$1;
        var v158 = v479 >= stopBase$$2;
        if(v158) {
          break
        }
        var v480 = k$$1 + i$$6;
        var v159 = text$$12.charAt(v480);
        lineOfText$$1 = lineOfText$$1 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v162 = numberPosition$$1 == "above";
      if(v162) {
        var v481 = adjustNumbering(i$$6, numberingAdjustment);
        var v161 = rightNum(v481, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v161
      }
      var v163 = i$$6 >= stopBase$$2;
      if(v163) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v482 = basePerLine$$2 / groupSize$$2;
      v164 = j$$7 <= v482
    }
    var v187 = numberPosition$$1 == "left";
    if(v187) {
      var v165 = outputWindow.document;
      var v767 = adjustNumbering(lineNum, numberingAdjustment);
      var v650 = rightNum(v767, "", 8, tabIn$$3);
      var v483 = v650 + lineOfText$$1;
      var v166 = v483 + "\n";
      JAMScript.call(v165.write, v165, [v166]);
      var v170 = strands$$1 == "two";
      if(v170) {
        var v167 = outputWindow.document;
        var v768 = adjustNumbering(lineNum, numberingAdjustment);
        var v651 = rightNum(v768, "", 8, tabIn$$3);
        var v652 = complement(lineOfText$$1);
        var v484 = v651 + v652;
        var v168 = v484 + "\n";
        JAMScript.call(v167.write, v167, [v168]);
        var v169 = outputWindow.document;
        JAMScript.call(v169.write, v169, ["\n"])
      }
    }else {
      var v186 = numberPosition$$1 == "right";
      if(v186) {
        var v171 = outputWindow.document;
        var v653 = adjustNumbering(i$$6, numberingAdjustment);
        var v485 = lineOfText$$1 + v653;
        var v172 = v485 + "\n";
        JAMScript.call(v171.write, v171, [v172]);
        var v176 = strands$$1 == "two";
        if(v176) {
          var v173 = outputWindow.document;
          var v654 = complement(lineOfText$$1);
          var v655 = adjustNumbering(i$$6, numberingAdjustment);
          var v486 = v654 + v655;
          var v174 = v486 + "\n";
          JAMScript.call(v173.write, v173, [v174]);
          var v175 = outputWindow.document;
          JAMScript.call(v175.write, v175, ["\n"])
        }
      }else {
        var v185 = numberPosition$$1 == "above";
        if(v185) {
          var v177 = outputWindow.document;
          var v178 = aboveNum + "\n";
          JAMScript.call(v177.write, v177, [v178]);
          var v179 = outputWindow.document;
          var v180 = lineOfText$$1 + "\n";
          JAMScript.call(v179.write, v179, [v180]);
          var v184 = strands$$1 == "two";
          if(v184) {
            var v181 = outputWindow.document;
            var v487 = complement(lineOfText$$1);
            var v182 = v487 + "\n";
            JAMScript.call(v181.write, v181, [v182]);
            var v183 = outputWindow.document;
            JAMScript.call(v183.write, v183, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v188 = i$$6 < stopBase$$2
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
  var v207 = i$$7 < stopBase$$3;
  for(;v207;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v488 = basePerLine$$3 / groupSize$$3;
    var v195 = j$$8 <= v488;
    for(;v195;) {
      var v191 = k$$2 < groupSize$$3;
      for(;v191;) {
        var v489 = i$$7 + k$$2;
        var v189 = v489 >= stopBase$$3;
        if(v189) {
          break
        }
        var v490 = k$$2 + i$$7;
        var v190 = text$$13.charAt(v490);
        lineOfText$$2 = lineOfText$$2 + v190;
        k$$2 = k$$2 + 1;
        v191 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v193 = numberPosition$$2 == "above";
      if(v193) {
        var v192 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v192
      }
      var v194 = i$$7 >= stopBase$$3;
      if(v194) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v491 = basePerLine$$3 / groupSize$$3;
      v195 = j$$8 <= v491
    }
    var v206 = numberPosition$$2 == "left";
    if(v206) {
      var v196 = outputWindow.document;
      var v656 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v492 = v656 + lineOfText$$2;
      var v197 = v492 + "\n";
      JAMScript.call(v196.write, v196, [v197])
    }else {
      var v205 = numberPosition$$2 == "right";
      if(v205) {
        var v198 = outputWindow.document;
        var v493 = lineOfText$$2 + i$$7;
        var v199 = v493 + "\n";
        JAMScript.call(v198.write, v198, [v199])
      }else {
        var v204 = numberPosition$$2 == "above";
        if(v204) {
          var v200 = outputWindow.document;
          var v201 = aboveNum$$1 + "\n";
          JAMScript.call(v200.write, v200, [v201]);
          var v202 = outputWindow.document;
          var v203 = lineOfText$$2 + "\n";
          JAMScript.call(v202.write, v202, [v203])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v207 = i$$7 < stopBase$$3
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
  var v657 = sequence$$13.length;
  var v494 = v657 <= firstIndexToMutate;
  var v659 = !v494;
  if(v659) {
    var v658 = lastIndexToMutate < 0;
    var v769 = !v658;
    if(v769) {
      v658 = lastIndexToMutate <= firstIndexToMutate
    }
    v494 = v658
  }
  var v208 = v494;
  if(v208) {
    numMut = 0
  }
  var i$$8 = 0;
  var v216 = i$$8 < numMut;
  for(;v216;) {
    maxNum = sequence$$13.length;
    var v495 = Math.random();
    var v209 = v495 * maxNum;
    randNum = Math.floor(v209);
    var v496 = randNum < firstIndexToMutate;
    var v660 = !v496;
    if(v660) {
      v496 = randNum > lastIndexToMutate
    }
    var v210 = v496;
    if(v210) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v216 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v497 = Math.random();
      var v498 = components$$1.length;
      var v211 = v497 * v498;
      componentsIndex = Math.round(v211);
      var v499 = components$$1.length;
      var v212 = componentsIndex == v499;
      if(v212) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v500 = components$$1[componentsIndex]
      }
      var v213 = v500 != currentChar;
      if(v213) {
        needNewChar = false
      }
    }
    var v501 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v502 = components$$1[componentsIndex]
    }
    var v214 = v501 + v502;
    var v503 = randNum + 1;
    var v504 = sequence$$13.length;
    var v215 = sequence$$13.substring(v503, v504);
    sequence$$13 = v214 + v215;
    i$$8 = i$$8 + 1;
    v216 = i$$8 < numMut
  }
  var v217 = outputWindow.document;
  var v218 = addReturns(sequence$$13);
  JAMScript.call(v217.write, v217, [v218]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v223 = j$$9 < lengthOut$$1;
  for(;v223;) {
    var v505 = Math.random();
    var v506 = components$$2.length;
    var v219 = v505 * v506;
    tempNum$$1 = Math.floor(v219);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v507 = sequence$$14.length;
    var v222 = v507 == 60;
    if(v222) {
      var v220 = outputWindow.document;
      var v221 = sequence$$14 + "\n";
      JAMScript.call(v220.write, v220, [v221]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v223 = j$$9 < lengthOut$$1
  }
  var v224 = outputWindow.document;
  var v225 = sequence$$14 + "\n";
  JAMScript.call(v224.write, v224, [v225]);
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
  var v229 = dnaConformation == "circular";
  if(v229) {
    var v226 = sequence$$15.substring(0, lookAhead);
    shiftValue = v226.length;
    var v770 = sequence$$15.length;
    var v661 = v770 - lookAhead;
    var v662 = sequence$$15.length;
    var v508 = sequence$$15.substring(v661, v662);
    var v227 = v508 + sequence$$15;
    var v228 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v227 + v228;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v230 = outputWindow.document;
  JAMScript.call(v230.write, v230, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v231 = outputWindow.document;
  var v771 = '<tr><td class="title" width="200px">' + "Site:";
  var v663 = v771 + '</td><td class="title">';
  var v509 = v663 + "Positions:";
  var v232 = v509 + "</td></tr>\n";
  JAMScript.call(v231.write, v231, [v232]);
  var i$$9 = 0;
  var v510 = arrayOfItems.length;
  var v248 = i$$9 < v510;
  for(;v248;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v511 = arrayOfItems[i$$9]
    }
    var v233 = v511.match(/\/.+\//);
    matchExp = v233 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v772 = arrayOfItems[i$$9]
    }
    var v664 = v772.match(/\)\D*\d+/);
    var v512 = v664.toString();
    var v234 = v512.replace(/\)\D*/, "");
    cutDistance = parseFloat(v234);
    var v240 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v240;) {
      var v235 = matchExp.lastIndex;
      matchPosition = v235 - cutDistance;
      var v513 = matchPosition >= lowerLimit;
      if(v513) {
        v513 = matchPosition < upperLimit
      }
      var v238 = v513;
      if(v238) {
        timesFound = timesFound + 1;
        var v236 = tempString$$1 + ", ";
        var v514 = matchPosition - shiftValue;
        var v237 = v514 + 1;
        tempString$$1 = v236 + v237
      }
      var v239 = matchExp;
      var v665 = matchExp.lastIndex;
      var v773 = RegExp.lastMatch;
      var v666 = v773.length;
      var v515 = v665 - v666;
      v239.lastIndex = v515 + 1;
      v240 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v516 = tempString$$1.search(/\d/);
    var v241 = v516 != -1;
    if(v241) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v245 = timesFound == 0;
    if(v245) {
      backGroundClass = "none"
    }else {
      var v244 = timesFound == 1;
      if(v244) {
        backGroundClass = "one"
      }else {
        var v243 = timesFound == 2;
        if(v243) {
          backGroundClass = "two"
        }else {
          var v242 = timesFound == 3;
          if(v242) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v246 = outputWindow.document;
    var v1026 = '<tr><td class="' + backGroundClass;
    var v972 = v1026 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1086 = arrayOfItems[i$$9]
    }
    var v1058 = v1086.match(/\([^\(]+\)/);
    var v1027 = v1058.toString();
    var v973 = v1027.replace(/\(|\)/g, "");
    var v918 = v972 + v973;
    var v853 = v918 + '</td><td class="';
    var v774 = v853 + backGroundClass;
    var v667 = v774 + '">';
    var v517 = v667 + tempString$$1;
    var v247 = v517 + "</td></tr>\n";
    JAMScript.call(v246.write, v246, [v247]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v518 = arrayOfItems.length;
    v248 = i$$9 < v518
  }
  var v249 = outputWindow.document;
  JAMScript.call(v249.write, v249, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v250 = outputWindow.document;
  JAMScript.call(v250.write, v250, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v251 = outputWindow.document;
  var v919 = '<tr><td class="title">' + "Pattern:";
  var v854 = v919 + '</td><td class="title">';
  var v775 = v854 + "Times found:";
  var v668 = v775 + '</td><td class="title">';
  var v519 = v668 + "Percentage:";
  var v252 = v519 + "</td></tr>\n";
  JAMScript.call(v251.write, v251, [v252]);
  var i$$10 = 0;
  var v520 = arrayOfItems$$1.length;
  var v261 = i$$10 < v520;
  for(;v261;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v521 = arrayOfItems$$1[i$$10]
    }
    var v253 = v521.match(/\/[^\/]+\//);
    var matchExp$$1 = v253 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v522 = sequence$$16.search(matchExp$$1);
    var v255 = v522 != -1;
    if(v255) {
      var v254 = sequence$$16.match(matchExp$$1);
      tempNumber = v254.length
    }
    var percentage = 0;
    var v669 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v855 = arrayOfItems$$1[i$$10]
    }
    var v776 = v855.match(/\d+/);
    var v670 = parseFloat(v776);
    var v523 = v669 - v670;
    var v258 = v523 > 0;
    if(v258) {
      var v256 = 100 * tempNumber;
      var v524 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v777 = arrayOfItems$$1[i$$10]
      }
      var v671 = v777.match(/\d+/);
      var v525 = parseFloat(v671);
      var v257 = v524 - v525;
      percentage = v256 / v257
    }
    var v259 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1087 = arrayOfItems$$1[i$$10]
    }
    var v1059 = v1087.match(/\([^\(]+\)\b/);
    var v1028 = v1059.toString();
    var v974 = v1028.replace(/\(|\)/g, "");
    var v920 = "<tr><td>" + v974;
    var v856 = v920 + "</td><td>";
    var v778 = v856 + tempNumber;
    var v672 = v778 + "</td><td>";
    var v673 = percentage.toFixed(2);
    var v526 = v672 + v673;
    var v260 = v526 + "</td></tr>\n";
    JAMScript.call(v259.write, v259, [v260]);
    i$$10 = i$$10 + 1;
    var v527 = arrayOfItems$$1.length;
    v261 = i$$10 < v527
  }
  var v262 = outputWindow.document;
  JAMScript.call(v262.write, v262, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v528 = sequence$$17.length;
  var v269 = v528 > 0;
  for(;v269;) {
    maxNum$$1 = sequence$$17.length;
    var v529 = Math.random();
    var v263 = v529 * maxNum$$1;
    randNum$$1 = Math.floor(v263);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v264 = randNum$$1 + 1;
    var v265 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v264, v265);
    sequence$$17 = tempString1 + tempString2;
    var v530 = tempSeq.length;
    var v268 = v530 == 60;
    if(v268) {
      var v266 = outputWindow.document;
      var v267 = tempSeq + "\n";
      JAMScript.call(v266.write, v266, [v267]);
      tempSeq = ""
    }
    var v531 = sequence$$17.length;
    v269 = v531 > 0
  }
  var v270 = outputWindow.document;
  var v271 = tempSeq + "\n";
  JAMScript.call(v270.write, v270, [v271]);
  return true
}
function getGeneticCodeString(type$$25) {
  var v674 = type$$25.toLowerCase();
  var v532 = v674 == "standard";
  var v676 = !v532;
  if(v676) {
    var v675 = type$$25.toLowerCase();
    v532 = v675 == "transl_table=1"
  }
  var v273 = v532;
  if(v273) {
    var v1273 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1256 = v1273 + "/ga[tcuy]/=D,";
    var v1239 = v1256 + "/ga[agr]/=E,";
    var v1221 = v1239 + "/[tu][tu][tcuy]/=F,";
    var v1202 = v1221 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1181 = v1202 + "/ca[tcuy]/=H,";
    var v1160 = v1181 + "/a[tu][atcuwmhy]/=I,";
    var v1139 = v1160 + "/aa[agr]/=K,";
    var v1114 = v1139 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1088 = v1114 + "/a[tu]g/=M,";
    var v1060 = v1088 + "/aa[tucy]/=N,";
    var v1029 = v1060 + "/cc[acgturyswkmbdhvn]/=P,";
    var v975 = v1029 + "/ca[agr]/=Q,";
    var v921 = v975 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v857 = v921 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v779 = v857 + "/ac[acgturyswkmbdhvn]/=T,";
    var v677 = v779 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v533 = v677 + "/[tu]gg/=W,";
    var v272 = v533 + "/[tu]a[ctuy]/=Y,";
    return v272 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v534 = type$$25.toLowerCase();
  var v275 = v534 == "transl_table=2";
  if(v275) {
    var v1274 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1257 = v1274 + "/ga[tcuy]/=D,";
    var v1240 = v1257 + "/ga[agr]/=E,";
    var v1222 = v1240 + "/[tu][tu][tcuy]/=F,";
    var v1203 = v1222 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1182 = v1203 + "/ca[tcuy]/=H,";
    var v1161 = v1182 + "/a[tu][tcuy]/=I,";
    var v1140 = v1161 + "/aa[agr]/=K,";
    var v1115 = v1140 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1089 = v1115 + "/a[tu][agr]/=M,";
    var v1061 = v1089 + "/aa[tucy]/=N,";
    var v1030 = v1061 + "/cc[acgturyswkmbdhvn]/=P,";
    var v976 = v1030 + "/ca[agr]/=Q,";
    var v922 = v976 + "/cg[acgturyswkmbdhvn]/=R,";
    var v858 = v922 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v780 = v858 + "/ac[acgturyswkmbdhvn]/=T,";
    var v678 = v780 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v535 = v678 + "/[tu]g[agr]/=W,";
    var v274 = v535 + "/[tu]a[ctuy]/=Y,";
    return v274 + "/[tu]a[agr]|ag[agr]/=*"
  }
  var v536 = type$$25.toLowerCase();
  var v277 = v536 == "transl_table=3";
  if(v277) {
    var v1275 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1258 = v1275 + "/ga[tcuy]/=D,";
    var v1241 = v1258 + "/ga[agr]/=E,";
    var v1223 = v1241 + "/[tu][tu][tcuy]/=F,";
    var v1204 = v1223 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1183 = v1204 + "/ca[tcuy]/=H,";
    var v1162 = v1183 + "/a[tu][tcuy]/=I,";
    var v1141 = v1162 + "/aa[agr]/=K,";
    var v1116 = v1141 + "/[tu][tu][agr]/=L,";
    var v1090 = v1116 + "/a[tu][agr]/=M,";
    var v1062 = v1090 + "/aa[tucy]/=N,";
    var v1031 = v1062 + "/cc[acgturyswkmbdhvn]/=P,";
    var v977 = v1031 + "/ca[agr]/=Q,";
    var v923 = v977 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v859 = v923 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v781 = v859 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v679 = v781 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v537 = v679 + "/[tu]g[agr]/=W,";
    var v276 = v537 + "/[tu]a[ctuy]/=Y,";
    return v276 + "/[tu]a[agr]/=*"
  }
  var v538 = type$$25.toLowerCase();
  var v279 = v538 == "transl_table=4";
  if(v279) {
    var v1276 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1259 = v1276 + "/ga[tcuy]/=D,";
    var v1242 = v1259 + "/ga[agr]/=E,";
    var v1224 = v1242 + "/[tu][tu][tcuy]/=F,";
    var v1205 = v1224 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1184 = v1205 + "/ca[tcuy]/=H,";
    var v1163 = v1184 + "/a[tu][atcuwmhy]/=I,";
    var v1142 = v1163 + "/aa[agr]/=K,";
    var v1117 = v1142 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1091 = v1117 + "/a[tu]g/=M,";
    var v1063 = v1091 + "/aa[tucy]/=N,";
    var v1032 = v1063 + "/cc[acgturyswkmbdhvn]/=P,";
    var v978 = v1032 + "/ca[agr]/=Q,";
    var v924 = v978 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v860 = v924 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v782 = v860 + "/ac[acgturyswkmbdhvn]/=T,";
    var v680 = v782 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v539 = v680 + "/[tu]g[agr]/=W,";
    var v278 = v539 + "/[tu]a[ctuy]/=Y,";
    return v278 + "/[tu]a[agr]/=*"
  }
  var v540 = type$$25.toLowerCase();
  var v281 = v540 == "transl_table=5";
  if(v281) {
    var v1277 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1260 = v1277 + "/ga[tcuy]/=D,";
    var v1243 = v1260 + "/ga[agr]/=E,";
    var v1225 = v1243 + "/[tu][tu][tcuy]/=F,";
    var v1206 = v1225 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1185 = v1206 + "/ca[tcuy]/=H,";
    var v1164 = v1185 + "/a[tu][tcuy]/=I,";
    var v1143 = v1164 + "/aa[agr]/=K,";
    var v1118 = v1143 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1092 = v1118 + "/a[tu][agr]/=M,";
    var v1064 = v1092 + "/aa[tucy]/=N,";
    var v1033 = v1064 + "/cc[acgturyswkmbdhvn]/=P,";
    var v979 = v1033 + "/ca[agr]/=Q,";
    var v925 = v979 + "/cg[acgturyswkmbdhvn]/=R,";
    var v861 = v925 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v783 = v861 + "/ac[acgturyswkmbdhvn]/=T,";
    var v681 = v783 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v541 = v681 + "/[tu]g[agr]/=W,";
    var v280 = v541 + "/[tu]a[ctuy]/=Y,";
    return v280 + "/[tu]a[agr]/=*"
  }
  var v542 = type$$25.toLowerCase();
  var v283 = v542 == "transl_table=6";
  if(v283) {
    var v1278 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1261 = v1278 + "/ga[tcuy]/=D,";
    var v1244 = v1261 + "/ga[agr]/=E,";
    var v1226 = v1244 + "/[tu][tu][tcuy]/=F,";
    var v1207 = v1226 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1186 = v1207 + "/ca[tcuy]/=H,";
    var v1165 = v1186 + "/a[tu][atcuwmhy]/=I,";
    var v1144 = v1165 + "/aa[agr]/=K,";
    var v1119 = v1144 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1093 = v1119 + "/a[tu]g/=M,";
    var v1065 = v1093 + "/aa[tucy]/=N,";
    var v1034 = v1065 + "/cc[acgturyswkmbdhvn]/=P,";
    var v980 = v1034 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v926 = v980 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v862 = v926 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v784 = v862 + "/ac[acgturyswkmbdhvn]/=T,";
    var v682 = v784 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v543 = v682 + "/[tu]gg/=W,";
    var v282 = v543 + "/[tu]a[ctuy]/=Y,";
    return v282 + "/[tu]ga/=*"
  }
  var v544 = type$$25.toLowerCase();
  var v285 = v544 == "transl_table=9";
  if(v285) {
    var v1279 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1262 = v1279 + "/ga[tcuy]/=D,";
    var v1245 = v1262 + "/ga[agr]/=E,";
    var v1227 = v1245 + "/[tu][tu][tcuy]/=F,";
    var v1208 = v1227 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1187 = v1208 + "/ca[tcuy]/=H,";
    var v1166 = v1187 + "/a[tu][atcuwmhy]/=I,";
    var v1145 = v1166 + "/aag/=K,";
    var v1120 = v1145 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1094 = v1120 + "/a[tu]g/=M,";
    var v1066 = v1094 + "/aa[atcuwmhy]/=N,";
    var v1035 = v1066 + "/cc[acgturyswkmbdhvn]/=P,";
    var v981 = v1035 + "/ca[agr]/=Q,";
    var v927 = v981 + "/cg[acgturyswkmbdhvn]/=R,";
    var v863 = v927 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v785 = v863 + "/ac[acgturyswkmbdhvn]/=T,";
    var v683 = v785 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v545 = v683 + "/[tu]g[agr]/=W,";
    var v284 = v545 + "/[tu]a[ctuy]/=Y,";
    return v284 + "/[tu]a[agr]/=*"
  }
  var v546 = type$$25.toLowerCase();
  var v287 = v546 == "transl_table=10";
  if(v287) {
    var v1280 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1263 = v1280 + "/ga[tcuy]/=D,";
    var v1246 = v1263 + "/ga[agr]/=E,";
    var v1228 = v1246 + "/[tu][tu][tcuy]/=F,";
    var v1209 = v1228 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1188 = v1209 + "/ca[tcuy]/=H,";
    var v1167 = v1188 + "/a[tu][atcuwmhy]/=I,";
    var v1146 = v1167 + "/aa[agr]/=K,";
    var v1121 = v1146 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1095 = v1121 + "/a[tu]g/=M,";
    var v1067 = v1095 + "/aa[tucy]/=N,";
    var v1036 = v1067 + "/cc[acgturyswkmbdhvn]/=P,";
    var v982 = v1036 + "/ca[agr]/=Q,";
    var v928 = v982 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v864 = v928 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v786 = v864 + "/ac[acgturyswkmbdhvn]/=T,";
    var v684 = v786 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v547 = v684 + "/[tu]gg/=W,";
    var v286 = v547 + "/[tu]a[ctuy]/=Y,";
    return v286 + "/[tu]a[agr]/=*"
  }
  var v548 = type$$25.toLowerCase();
  var v289 = v548 == "transl_table=11";
  if(v289) {
    var v1281 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1264 = v1281 + "/ga[tcuy]/=D,";
    var v1247 = v1264 + "/ga[agr]/=E,";
    var v1229 = v1247 + "/[tu][tu][tcuy]/=F,";
    var v1210 = v1229 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1189 = v1210 + "/ca[tcuy]/=H,";
    var v1168 = v1189 + "/a[tu][atcuwmhy]/=I,";
    var v1147 = v1168 + "/aa[agr]/=K,";
    var v1122 = v1147 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1096 = v1122 + "/a[tu]g/=M,";
    var v1068 = v1096 + "/aa[tucy]/=N,";
    var v1037 = v1068 + "/cc[acgturyswkmbdhvn]/=P,";
    var v983 = v1037 + "/ca[agr]/=Q,";
    var v929 = v983 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v865 = v929 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v787 = v865 + "/ac[acgturyswkmbdhvn]/=T,";
    var v685 = v787 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v549 = v685 + "/[tu]gg/=W,";
    var v288 = v549 + "/[tu]a[ctuy]/=Y,";
    return v288 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v550 = type$$25.toLowerCase();
  var v291 = v550 == "transl_table=12";
  if(v291) {
    var v1282 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1265 = v1282 + "/ga[tcuy]/=D,";
    var v1248 = v1265 + "/ga[agr]/=E,";
    var v1230 = v1248 + "/[tu][tu][tcuy]/=F,";
    var v1211 = v1230 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1190 = v1211 + "/ca[tcuy]/=H,";
    var v1169 = v1190 + "/a[tu][atcuwmhy]/=I,";
    var v1148 = v1169 + "/aa[agr]/=K,";
    var v1123 = v1148 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1097 = v1123 + "/a[tu]g/=M,";
    var v1069 = v1097 + "/aa[tucy]/=N,";
    var v1038 = v1069 + "/cc[acgturyswkmbdhvn]/=P,";
    var v984 = v1038 + "/ca[agr]/=Q,";
    var v930 = v984 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v866 = v930 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v788 = v866 + "/ac[acgturyswkmbdhvn]/=T,";
    var v686 = v788 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v551 = v686 + "/[tu]gg/=W,";
    var v290 = v551 + "/[tu]a[ctuy]/=Y,";
    return v290 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v552 = type$$25.toLowerCase();
  var v293 = v552 == "transl_table=13";
  if(v293) {
    var v1283 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1266 = v1283 + "/ga[tcuy]/=D,";
    var v1249 = v1266 + "/ga[agr]/=E,";
    var v1231 = v1249 + "/[tu][tu][tcuy]/=F,";
    var v1212 = v1231 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1191 = v1212 + "/ca[tcuy]/=H,";
    var v1170 = v1191 + "/a[tu][tcuy]/=I,";
    var v1149 = v1170 + "/aa[agr]/=K,";
    var v1124 = v1149 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1098 = v1124 + "/a[tu][agr]/=M,";
    var v1070 = v1098 + "/aa[tucy]/=N,";
    var v1039 = v1070 + "/cc[acgturyswkmbdhvn]/=P,";
    var v985 = v1039 + "/ca[agr]/=Q,";
    var v931 = v985 + "/cg[acgturyswkmbdhvn]/=R,";
    var v867 = v931 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v789 = v867 + "/ac[acgturyswkmbdhvn]/=T,";
    var v687 = v789 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v553 = v687 + "/[tu]g[agr]/=W,";
    var v292 = v553 + "/[tu]a[ctuy]/=Y,";
    return v292 + "/[tu]a[agr]/=*"
  }
  var v554 = type$$25.toLowerCase();
  var v295 = v554 == "transl_table=14";
  if(v295) {
    var v1284 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1267 = v1284 + "/ga[tcuy]/=D,";
    var v1250 = v1267 + "/ga[agr]/=E,";
    var v1232 = v1250 + "/[tu][tu][tcuy]/=F,";
    var v1213 = v1232 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1192 = v1213 + "/ca[tcuy]/=H,";
    var v1171 = v1192 + "/a[tu][atcuwmhy]/=I,";
    var v1150 = v1171 + "/aag/=K,";
    var v1125 = v1150 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1099 = v1125 + "/a[tu]g/=M,";
    var v1071 = v1099 + "/aa[atcuwmhy]/=N,";
    var v1040 = v1071 + "/cc[acgturyswkmbdhvn]/=P,";
    var v986 = v1040 + "/ca[agr]/=Q,";
    var v932 = v986 + "/cg[acgturyswkmbdhvn]/=R,";
    var v868 = v932 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v790 = v868 + "/ac[acgturyswkmbdhvn]/=T,";
    var v688 = v790 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v555 = v688 + "/[tu]g[agr]/=W,";
    var v294 = v555 + "/[tu]a[atcuwmhy]/=Y,";
    return v294 + "/[tu]ag/=*"
  }
  var v556 = type$$25.toLowerCase();
  var v297 = v556 == "transl_table=15";
  if(v297) {
    var v1285 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1268 = v1285 + "/ga[tcuy]/=D,";
    var v1251 = v1268 + "/ga[agr]/=E,";
    var v1233 = v1251 + "/[tu][tu][tcuy]/=F,";
    var v1214 = v1233 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1193 = v1214 + "/ca[tcuy]/=H,";
    var v1172 = v1193 + "/a[tu][atcuwmhy]/=I,";
    var v1151 = v1172 + "/aa[agr]/=K,";
    var v1126 = v1151 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1100 = v1126 + "/a[tu]g/=M,";
    var v1072 = v1100 + "/aa[tucy]/=N,";
    var v1041 = v1072 + "/cc[acgturyswkmbdhvn]/=P,";
    var v987 = v1041 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v933 = v987 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v869 = v933 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v791 = v869 + "/ac[acgturyswkmbdhvn]/=T,";
    var v689 = v791 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v557 = v689 + "/[tu]gg/=W,";
    var v296 = v557 + "/[tu]a[ctuy]/=Y,";
    return v296 + "/[tu][agr]a/=*"
  }
  var v558 = type$$25.toLowerCase();
  var v299 = v558 == "transl_table=16";
  if(v299) {
    var v1286 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1269 = v1286 + "/ga[tcuy]/=D,";
    var v1252 = v1269 + "/ga[agr]/=E,";
    var v1234 = v1252 + "/[tu][tu][tcuy]/=F,";
    var v1215 = v1234 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1194 = v1215 + "/ca[tcuy]/=H,";
    var v1173 = v1194 + "/a[tu][atcuwmhy]/=I,";
    var v1152 = v1173 + "/aa[agr]/=K,";
    var v1127 = v1152 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1101 = v1127 + "/a[tu]g/=M,";
    var v1073 = v1101 + "/aa[tucy]/=N,";
    var v1042 = v1073 + "/cc[acgturyswkmbdhvn]/=P,";
    var v988 = v1042 + "/ca[agr]/=Q,";
    var v934 = v988 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v870 = v934 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v792 = v870 + "/ac[acgturyswkmbdhvn]/=T,";
    var v690 = v792 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v559 = v690 + "/[tu]gg/=W,";
    var v298 = v559 + "/[tu]a[ctuy]/=Y,";
    return v298 + "/[tu][agr]a/=*"
  }
  var v560 = type$$25.toLowerCase();
  var v301 = v560 == "transl_table=21";
  if(v301) {
    var v1287 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1270 = v1287 + "/ga[tcuy]/=D,";
    var v1253 = v1270 + "/ga[agr]/=E,";
    var v1235 = v1253 + "/[tu][tu][tcuy]/=F,";
    var v1216 = v1235 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1195 = v1216 + "/ca[tcuy]/=H,";
    var v1174 = v1195 + "/a[tu][tcuy]/=I,";
    var v1153 = v1174 + "/aag/=K,";
    var v1128 = v1153 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1102 = v1128 + "/a[tu][agr]/=M,";
    var v1074 = v1102 + "/aa[atcuwmhy]/=N,";
    var v1043 = v1074 + "/cc[acgturyswkmbdhvn]/=P,";
    var v989 = v1043 + "/ca[agr]/=Q,";
    var v935 = v989 + "/cg[acgturyswkmbdhvn]/=R,";
    var v871 = v935 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v793 = v871 + "/ac[acgturyswkmbdhvn]/=T,";
    var v691 = v793 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v561 = v691 + "/[tu]g[agr]/=W,";
    var v300 = v561 + "/[tu]a[ctuy]/=Y,";
    return v300 + "/[tu]a[agr]/=*"
  }
  var v562 = type$$25.toLowerCase();
  var v303 = v562 == "transl_table=22";
  if(v303) {
    var v1288 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1271 = v1288 + "/ga[tcuy]/=D,";
    var v1254 = v1271 + "/ga[agr]/=E,";
    var v1236 = v1254 + "/[tu][tu][tcuy]/=F,";
    var v1217 = v1236 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1196 = v1217 + "/ca[tcuy]/=H,";
    var v1175 = v1196 + "/a[tu][atcuwmhy]/=I,";
    var v1154 = v1175 + "/aa[agr]/=K,";
    var v1129 = v1154 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1103 = v1129 + "/a[tu]g/=M,";
    var v1075 = v1103 + "/aa[tucy]/=N,";
    var v1044 = v1075 + "/cc[acgturyswkmbdhvn]/=P,";
    var v990 = v1044 + "/ca[agr]/=Q,";
    var v936 = v990 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v872 = v936 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v794 = v872 + "/ac[acgturyswkmbdhvn]/=T,";
    var v692 = v794 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v563 = v692 + "/[tu]gg/=W,";
    var v302 = v563 + "/[tu]a[ctuy]/=Y,";
    return v302 + "/[tu][agcrsmv]a/=*"
  }
  var v564 = type$$25.toLowerCase();
  var v305 = v564 == "transl_table=23";
  if(v305) {
    var v1289 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1272 = v1289 + "/ga[tcuy]/=D,";
    var v1255 = v1272 + "/ga[agr]/=E,";
    var v1237 = v1255 + "/[tu][tu][tcuy]/=F,";
    var v1218 = v1237 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1197 = v1218 + "/ca[tcuy]/=H,";
    var v1176 = v1197 + "/a[tu][atcuwmhy]/=I,";
    var v1155 = v1176 + "/aa[agr]/=K,";
    var v1130 = v1155 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1104 = v1130 + "/a[tu]g/=M,";
    var v1076 = v1104 + "/aa[tucy]/=N,";
    var v1045 = v1076 + "/cc[acgturyswkmbdhvn]/=P,";
    var v991 = v1045 + "/ca[agr]/=Q,";
    var v937 = v991 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v873 = v937 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v795 = v873 + "/ac[acgturyswkmbdhvn]/=T,";
    var v693 = v795 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v565 = v693 + "/[tu]gg/=W,";
    var v304 = v565 + "/[tu]a[ctuy]/=Y,";
    return v304 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function orfFind(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v566 = testScript();
  var v306 = v566 == false;
  if(v306) {
    return false
  }
  var v992 = theDocument.forms;
  var v938 = v992[0];
  var v874 = v938.elements;
  var v796 = v874[8];
  var v694 = v796.options;
  var v993 = theDocument.forms;
  var v939 = v993[0];
  var v875 = v939.elements;
  var v797 = v875[8];
  var v695 = v797.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v567 = v694[v695]
  }
  var v307 = v567.value;
  var geneticCode = getGeneticCodeString(v307);
  geneticCode = geneticCode.split(/,/);
  var v876 = theDocument.forms;
  var v798 = v876[0];
  var v696 = v798.elements;
  var v568 = v696[7];
  var v308 = v568.value;
  var enteredNumber = v308.replace(/[^\d]/g, "");
  var v994 = theDocument.forms;
  var v940 = v994[0];
  var v877 = v940.elements;
  var v799 = v877[0];
  var v697 = checkFormElement(v799);
  var v569 = v697 == false;
  var v699 = !v569;
  if(v699) {
    var v1046 = theDocument.forms;
    var v995 = v1046[0];
    var v941 = v995.elements;
    var v878 = v941[7];
    var v800 = checkFormElement(v878);
    var v698 = v800 == false;
    var v802 = !v698;
    if(v802) {
      var v879 = verifyDigits(enteredNumber);
      var v801 = v879 == false;
      var v881 = !v801;
      if(v881) {
        var v1105 = theDocument.forms;
        var v1077 = v1105[0];
        var v1047 = v1077.elements;
        var v996 = v1047[0];
        var v942 = v996.value;
        var v880 = checkSequenceLength(v942, maxInput$$3);
        v801 = v880 == false
      }
      v698 = v801
    }
    v569 = v698
  }
  var v309 = v569;
  if(v309) {
    return false
  }
  var v570 = checkGeneticCode(geneticCode);
  var v310 = v570 == false;
  if(v310) {
    return false
  }
  var v882 = theDocument.forms;
  var v803 = v882[0];
  var v700 = v803.elements;
  var v571 = v700[0];
  var v311 = v571.value;
  newDna = getSequenceFromFasta(v311);
  var v883 = theDocument.forms;
  var v804 = v883[0];
  var v701 = v804.elements;
  var v572 = v701[0];
  var v312 = v572.value;
  title$$9 = getTitleFromFasta(v312);
  verifyDna(newDna);
  newDna = removeNonDna(newDna);
  openWindow("ORF Finder");
  var v313 = outputWindow.document;
  var v314 = getInfoFromTitleAndSequence(title$$9, newDna);
  JAMScript.call(v313.write, v313, [v314]);
  openPre();
  var v1048 = theDocument.forms;
  var v997 = v1048[0];
  var v943 = v997.elements;
  var v884 = v943[5];
  var v805 = v884.options;
  var v1049 = theDocument.forms;
  var v998 = v1049[0];
  var v944 = v998.elements;
  var v885 = v944[5];
  var v806 = v885.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v702 = v805[v806]
  }
  var v573 = v702.value;
  var v324 = v573 == "all";
  if(v324) {
    var v999 = theDocument.forms;
    var v945 = v999[0];
    var v886 = v945.elements;
    var v807 = v886[4];
    var v703 = v807.options;
    var v1000 = theDocument.forms;
    var v946 = v1000[0];
    var v887 = v946.elements;
    var v808 = v887[4];
    var v704 = v808.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v574 = v703[v704]
    }
    var v315 = v574.value;
    var v1001 = theDocument.forms;
    var v947 = v1001[0];
    var v888 = v947.elements;
    var v809 = v888[6];
    var v705 = v809.options;
    var v1002 = theDocument.forms;
    var v948 = v1002[0];
    var v889 = v948.elements;
    var v810 = v889[6];
    var v706 = v810.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v575 = v705[v706]
    }
    var v316 = v575.value;
    writeOrfs(newDna, geneticCode, v315, 0, v316, enteredNumber);
    var v1003 = theDocument.forms;
    var v949 = v1003[0];
    var v890 = v949.elements;
    var v811 = v890[4];
    var v707 = v811.options;
    var v1004 = theDocument.forms;
    var v950 = v1004[0];
    var v891 = v950.elements;
    var v812 = v891[4];
    var v708 = v812.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v576 = v707[v708]
    }
    var v317 = v576.value;
    var v1005 = theDocument.forms;
    var v951 = v1005[0];
    var v892 = v951.elements;
    var v813 = v892[6];
    var v709 = v813.options;
    var v1006 = theDocument.forms;
    var v952 = v1006[0];
    var v893 = v952.elements;
    var v814 = v893[6];
    var v710 = v814.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v577 = v709[v710]
    }
    var v318 = v577.value;
    writeOrfs(newDna, geneticCode, v317, 1, v318, enteredNumber);
    var v1007 = theDocument.forms;
    var v953 = v1007[0];
    var v894 = v953.elements;
    var v815 = v894[4];
    var v711 = v815.options;
    var v1008 = theDocument.forms;
    var v954 = v1008[0];
    var v895 = v954.elements;
    var v816 = v895[4];
    var v712 = v816.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v578 = v711[v712]
    }
    var v319 = v578.value;
    var v1009 = theDocument.forms;
    var v955 = v1009[0];
    var v896 = v955.elements;
    var v817 = v896[6];
    var v713 = v817.options;
    var v1010 = theDocument.forms;
    var v956 = v1010[0];
    var v897 = v956.elements;
    var v818 = v897[6];
    var v714 = v818.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v579 = v713[v714]
    }
    var v320 = v579.value;
    writeOrfs(newDna, geneticCode, v319, 2, v320, enteredNumber)
  }else {
    var v1011 = theDocument.forms;
    var v957 = v1011[0];
    var v898 = v957.elements;
    var v819 = v898[4];
    var v715 = v819.options;
    var v1012 = theDocument.forms;
    var v958 = v1012[0];
    var v899 = v958.elements;
    var v820 = v899[4];
    var v716 = v820.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v580 = v715[v716]
    }
    var v321 = v580.value;
    var v1013 = theDocument.forms;
    var v959 = v1013[0];
    var v900 = v959.elements;
    var v821 = v900[5];
    var v717 = v821.options;
    var v1014 = theDocument.forms;
    var v960 = v1014[0];
    var v901 = v960.elements;
    var v822 = v901[5];
    var v718 = v822.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v581 = v717[v718]
    }
    var v322 = v581.value;
    var v1015 = theDocument.forms;
    var v961 = v1015[0];
    var v902 = v961.elements;
    var v823 = v902[6];
    var v719 = v823.options;
    var v1016 = theDocument.forms;
    var v962 = v1016[0];
    var v903 = v962.elements;
    var v824 = v903[6];
    var v720 = v824.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v582 = v719[v720]
    }
    var v323 = v582.value;
    writeOrfs(newDna, geneticCode, v321, v322, v323, enteredNumber)
  }
  closePre();
  closeWindow();
  return true
}
function writeOrfs(dnaSequence$$3, geneticCode$$1, startCodons, startPos, strand, theLength) {
  function v2(str$$9, p1$$2, offset$$14, s$$4) {
    var v325 = " " + p1$$2;
    return v325 + " "
  }
  var i$$11 = 0;
  var k$$3 = 0;
  var codon$$1 = "";
  var foundStart = false;
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var proteinLength = 0;
  var foundStop = false;
  var geneticCodeMatchExpStop;
  var j$$10 = 0;
  var v583 = geneticCodeMatchExp$$2.length;
  var v327 = j$$10 < v583;
  for(;v327;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v584 = geneticCodeMatchResult$$2[j$$10]
    }
    var v326 = v584 == "*";
    if(v326) {
      geneticCodeMatchExpStop = geneticCodeMatchExp$$2[j$$10];
      break
    }
    j$$10 = j$$10 + 1;
    var v585 = geneticCodeMatchExp$$2.length;
    v327 = j$$10 < v585
  }
  var startRe = new RegExp(startCodons, "i");
  var sequenceToTranslate;
  startPos = parseInt(startPos);
  var rf = startPos + 1;
  theLength = parseInt(theLength);
  var v329 = strand == "reverse";
  if(v329) {
    var v328 = complement(dnaSequence$$3);
    dnaSequence$$3 = reverse(v328)
  }
  var v721 = dnaSequence$$3.length;
  var v586 = v721 - 3;
  var v348 = i$$11 <= v586;
  for(;v348;) {
    i$$11 = startPos;
    var v722 = dnaSequence$$3.length;
    var v587 = v722 - 3;
    var v347 = i$$11 <= v587;
    for(;v347;) {
      var v330 = i$$11 + 3;
      codon$$1 = dnaSequence$$3.substring(i$$11, v330);
      var v588 = startCodons != "any";
      if(v588) {
        var v723 = foundStart == false;
        if(v723) {
          var v825 = codon$$1.search(startRe);
          v723 = v825 == -1
        }
        v588 = v723
      }
      var v331 = v588;
      if(v331) {
        break
      }
      foundStart = true;
      var v589 = codon$$1.search(geneticCodeMatchExpStop);
      var v332 = v589 != -1;
      if(v332) {
        foundStop = true
      }
      proteinLength = proteinLength + 1;
      var v590 = foundStop;
      if(v590) {
        v590 = proteinLength < theLength
      }
      var v333 = v590;
      if(v333) {
        break
      }
      var v724 = foundStop;
      if(v724) {
        v724 = proteinLength >= theLength
      }
      var v591 = v724;
      var v726 = !v591;
      if(v726) {
        var v904 = dnaSequence$$3.length;
        var v826 = v904 - 5;
        var v725 = i$$11 >= v826;
        if(v725) {
          v725 = proteinLength >= theLength
        }
        v591 = v725
      }
      var v346 = v591;
      if(v346) {
        var v334 = i$$11 + 3;
        sequenceToTranslate = dnaSequence$$3.substring(startPos, v334);
        var v335 = outputWindow.document;
        var v1131 = k$$3 + 1;
        var v1106 = "&gt;ORF number " + v1131;
        var v1078 = v1106 + " in reading frame ";
        var v1050 = v1078 + rf;
        var v1017 = v1050 + " on the ";
        var v963 = v1017 + strand;
        var v905 = v963 + " strand extends from base ";
        var v906 = startPos + 1;
        var v827 = v905 + v906;
        var v727 = v827 + " to base ";
        var v728 = i$$11 + 3;
        var v592 = v727 + v728;
        var v336 = v592 + ".\n";
        JAMScript.call(v335.write, v335, [v336]);
        var v337 = outputWindow.document;
        var v593 = addReturns(sequenceToTranslate);
        var v338 = v593 + "\n\n";
        JAMScript.call(v337.write, v337, [v338]);
        var v339 = outputWindow.document;
        var v1018 = k$$3 + 1;
        var v964 = "&gt;Translation of ORF number " + v1018;
        var v907 = v964 + " in reading frame ";
        var v828 = v907 + rf;
        var v729 = v828 + " on the ";
        var v594 = v729 + strand;
        var v340 = v594 + " strand.\n";
        JAMScript.call(v339.write, v339, [v340]);
        sequenceToTranslate = sequenceToTranslate.replace(/(...)/g, v2);
        var m = 0;
        var v595 = geneticCodeMatchExp$$2.length;
        var v343 = m < v595;
        for(;v343;) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v341 = geneticCodeMatchExp$$2[m]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v342 = geneticCodeMatchResult$$2[m]
          }
          sequenceToTranslate = sequenceToTranslate.replace(v341, v342);
          m = m + 1;
          var v596 = geneticCodeMatchExp$$2.length;
          v343 = m < v596
        }
        sequenceToTranslate = sequenceToTranslate.replace(/\S{3}/g, "X");
        sequenceToTranslate = sequenceToTranslate.replace(/\s/g, "");
        sequenceToTranslate = sequenceToTranslate.replace(/[a-z]/g, "");
        var v344 = outputWindow.document;
        var v597 = addReturns(sequenceToTranslate);
        var v345 = v597 + "\n\n";
        JAMScript.call(v344.write, v344, [v345]);
        k$$3 = k$$3 + 1;
        break
      }
      i$$11 = i$$11 + 3;
      var v730 = dnaSequence$$3.length;
      var v598 = v730 - 3;
      v347 = i$$11 <= v598
    }
    startPos = i$$11 + 3;
    i$$11 = startPos;
    foundStart = false;
    foundStop = false;
    proteinLength = 0;
    var v731 = dnaSequence$$3.length;
    var v599 = v731 - 3;
    v348 = i$$11 <= v599
  }
  var v351 = k$$3 == 0;
  if(v351) {
    var v349 = outputWindow.document;
    var v600 = "No ORFs were found in reading frame " + rf;
    var v350 = v600 + ".\n\n";
    JAMScript.call(v349.write, v349, [v350])
  }
  return true
}
JAMScript.set(document, "onload", v3);
var v352 = document.getElementById("submitbtn");
JAMScript.set(v352, "onclick", v4);
var v353 = document.getElementById("clearbtn");
JAMScript.set(v353, "onclick", v5);

