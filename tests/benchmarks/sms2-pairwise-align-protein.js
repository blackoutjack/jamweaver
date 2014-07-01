// sms2_common.js
//Written by Paul Stothard, University of Alberta, Canada

function addReturns (sequence) {
	sequence = sequence.replace(/(.{60})/g, 
                    function (str, p1, offset, s) {
                      	return p1 + "\n";
                   }
        );
	return sequence;
}

function checkAlign (arrayOfTitles, arrayOfSequences)	{
	var lengthOfAlign = arrayOfSequences[0].length;
	if (arrayOfSequences.length < 2)	{
		alert ("Please enter an alignment consisting of at least two sequences.");
		return false;
	}
	for (var i = 0; i < arrayOfTitles.length; i++)	{
		if ((arrayOfTitles[i].search(/\S/) == -1) || (arrayOfSequences[i].search(/\S/) == -1) || (arrayOfSequences[i].length != lengthOfAlign))	{
			alert ("There is a problem with the alignment format.");
			return false;
		}
	}
	return true;
}

function checkCodonTable (codonTable)	{
	if ((codonTable.search(/AmAcid/) == -1) || (codonTable.search(/Codon/) == -1) || (codonTable.search(/Number/) == -1) || (codonTable.search(/\/1000/) == -1) || (codonTable.search(/Fraction\s*\.\./) == -1)) {
		alert ("The codon table has been entered incorrectly.");
		return false;
	}
	return true;
}

function checkFormElement (formElement)	{
    	if (formElement.value.search(/\S/) == -1)	{
		alert ("Please enter some text.");
 		return false;
    	}
    	return true;
}

function checkGeneticCode (arrayOfPatterns)	{
	var z = 0;
	var codon = "";
	var oneMatch = false;
	var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
	while (z < arrayOfPatterns.length)	{
		if (arrayOfPatterns[z].search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/) == -1)	{
			alert ("Genetic code error: one or more patterns have been entered incorrectly.");
			return false;
		}
		if (moreExpressionCheck(arrayOfPatterns[z]) == false)	{
			alert ("Genetic code error: one or more patterns have been entered incorrectly.");
			return false;
		}
		z = z + 1;
	}
	var geneticCodeMatchResult = new Array (arrayOfPatterns.length);
	var geneticCodeMatchExp = new Array (arrayOfPatterns.length);
	for (var j = 0; j < arrayOfPatterns.length; j++)	{
			geneticCodeMatchExp[j] = eval(arrayOfPatterns[j].match(/\/.+\//) + "gi");
			geneticCodeMatchResult[j] = (arrayOfPatterns[j].match(/=[a-zA-Z\*]/)).toString();
			geneticCodeMatchResult[j] = geneticCodeMatchResult[j].replace(/=/g,"");
	}
	for (var i = 0; i <= testSequence.length - 3; i = i + 3)	{
		codon = testSequence.substring(i,(i+3));
		for (var j = 0; j < geneticCodeMatchExp.length; j++)	{
			if (codon.search(geneticCodeMatchExp[j]) != -1)	{
				if (oneMatch == true)	{
					alert('Genetic code error: more than one amino acid is coded by the codon: ' + codon + ".");
					return false;
				}
				oneMatch = true;
			}
		}
		if (oneMatch == false)	{
			alert('The genetic code expressions are missing a codon.');
			return false;
		}
		oneMatch = false;
	}
	return true;
}

function checkGroupInput (arrayOfPatterns)	{
	var z = 0;
	while (z < arrayOfPatterns.length)	{
		if (arrayOfPatterns[z].search(/[^acdefghiklmnpqrstvwyz]/i) != -1)	{	
			alert ("One or more groups have been entered incorrectly.");
			return false;
		}
		z = z + 1;
	}
	for (var i = 0; i < arrayOfPatterns.length; i++)	{
		var re = new RegExp ("[" + arrayOfPatterns[i] + "]","gi");
		for (var j = i + 1; j < arrayOfPatterns.length; j++)	{
			if (arrayOfPatterns[j].search(re) != -1)	{
				alert('The same amino acid is in more than one similarity group.');
				return false;
			}
		}
	}
	return true;
}

function checkRestPatterns (arrayOfPatterns)	{
	var z = 0;
	while (z < arrayOfPatterns.length)	{
		if (arrayOfPatterns[z].search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i) == -1)	{
			alert ("One or more patterns have been entered incorrectly.");
			return false;
		}
		if (moreExpressionCheck(arrayOfPatterns[z]) == false)	{
			alert ("One or more patterns have been entered incorrectly.");
			return false;
		}
		z = z + 1;
	}
	return true;
}

function checkSequenceLength (text, maxInput) {
	if ( ((getSequenceFromFasta(text)).replace(/[^A-Za-z]/g, "")).length > maxInput) {
		alert ("Please enter a sequence consisting of less than or equal to " + maxInput + " characters.");
		return false;
	}
	else {
		return true;
	}
}

function checkTextLength (text, maxInput) {
	if (text.length > maxInput) {
		alert ("Please enter text consisting of less than or equal to " + maxInput + " characters.");
		return false;
	}
	else {
		return true;
	}
}


function complement (dnaSequence)	{
	//there is no tr operator
	//should write a tr method to replace this
	dnaSequence = dnaSequence.replace(/g/g,"1");
	dnaSequence = dnaSequence.replace(/c/g,"2");
	dnaSequence = dnaSequence.replace(/1/g,"c");
	dnaSequence = dnaSequence.replace(/2/g,"g");
	dnaSequence = dnaSequence.replace(/G/g,"1");
	dnaSequence = dnaSequence.replace(/C/g,"2");
	dnaSequence = dnaSequence.replace(/1/g,"C");
	dnaSequence = dnaSequence.replace(/2/g,"G");	

	dnaSequence = dnaSequence.replace(/a/g,"1");
	dnaSequence = dnaSequence.replace(/t/g,"2");
	dnaSequence = dnaSequence.replace(/1/g,"t");
	dnaSequence = dnaSequence.replace(/2/g,"a");
	dnaSequence = dnaSequence.replace(/A/g,"1");
	dnaSequence = dnaSequence.replace(/T/g,"2");
	dnaSequence = dnaSequence.replace(/1/g,"T");
	dnaSequence = dnaSequence.replace(/2/g,"A");

	dnaSequence = dnaSequence.replace(/u/g,"a");
	dnaSequence = dnaSequence.replace(/U/g,"A");

	dnaSequence = dnaSequence.replace(/r/g,"1");
	dnaSequence = dnaSequence.replace(/y/g,"2");
	dnaSequence = dnaSequence.replace(/1/g,"y");
	dnaSequence = dnaSequence.replace(/2/g,"r");
	dnaSequence = dnaSequence.replace(/R/g,"1");
	dnaSequence = dnaSequence.replace(/Y/g,"2");
	dnaSequence = dnaSequence.replace(/1/g,"Y");
	dnaSequence = dnaSequence.replace(/2/g,"R");	

	dnaSequence = dnaSequence.replace(/k/g,"1");
	dnaSequence = dnaSequence.replace(/m/g,"2");
	dnaSequence = dnaSequence.replace(/1/g,"m");
	dnaSequence = dnaSequence.replace(/2/g,"k");
	dnaSequence = dnaSequence.replace(/K/g,"1");
	dnaSequence = dnaSequence.replace(/M/g,"2");
	dnaSequence = dnaSequence.replace(/1/g,"M");
	dnaSequence = dnaSequence.replace(/2/g,"K");

	dnaSequence = dnaSequence.replace(/b/g,"1");
	dnaSequence = dnaSequence.replace(/v/g,"2");
	dnaSequence = dnaSequence.replace(/1/g,"v");
	dnaSequence = dnaSequence.replace(/2/g,"b");
	dnaSequence = dnaSequence.replace(/B/g,"1");
	dnaSequence = dnaSequence.replace(/V/g,"2");
	dnaSequence = dnaSequence.replace(/1/g,"V");
	dnaSequence = dnaSequence.replace(/2/g,"B");

	dnaSequence = dnaSequence.replace(/d/g,"1");
	dnaSequence = dnaSequence.replace(/h/g,"2");
	dnaSequence = dnaSequence.replace(/1/g,"h");
	dnaSequence = dnaSequence.replace(/2/g,"d");
	dnaSequence = dnaSequence.replace(/D/g,"1");
	dnaSequence = dnaSequence.replace(/H/g,"2");
	dnaSequence = dnaSequence.replace(/1/g,"H");
	dnaSequence = dnaSequence.replace(/2/g,"D");
		
	return dnaSequence;
}

function closeForm ()	{
	outputWindow.document.write ("</form>");
	return true;
}

function closePre () {
	//this is needed for Internet Explorer bug
	outputWindow.document.write ("</div>");
	outputWindow.document.write ('</pre>\n');
}

function closeTextArea ()	{
	outputWindow.document.write ('</textarea>');
	return true;
}

function closeWindow ()	{
	outputWindow.document.write ("</body>\n</html>\n");
	outputWindow.status = 'Done.';
	outputWindow.document.close();
	return true;
}

function convertDegenerates (sequence) {
	sequence = sequence.toLowerCase();
	sequence = sequence.replace(/t/g, "[TU]");
	sequence = sequence.replace(/r/g, "[AGR]");
	sequence = sequence.replace(/y/g, "[CTUY]");
	sequence = sequence.replace(/s/g, "[GCS]");
	sequence = sequence.replace(/w/g, "[ATUW]");
	sequence = sequence.replace(/k/g, "[GTUK]");
	sequence = sequence.replace(/m/g, "[ACM]");
	sequence = sequence.replace(/b/g, "[CGTUBSKY]");
	sequence = sequence.replace(/d/g, "[AGTUDRKW]");
	sequence = sequence.replace(/h/g, "[ACTUHMYW]");	
	sequence = sequence.replace(/v/g, "[ACGVSMR]");
	sequence = sequence.replace(/n/g, "[ACGTURYSWKMBDHVN]");
	return sequence;	
}

function earlyCheckAlign (alignArray)	{
	if (alignArray.length < 3)	{
		alert ("There is a problem with the alignment format.");
		return false;
	}
	for (var i = 1; i < alignArray.length; i++)	{
		if (alignArray[i].search(/[^\s]+\s/) == -1)	{
			alert ("There is a problem with the alignment format.");
			return false;
		}
	}
	return true;
}

function filterAlignSeq (alignSeq)	{
	alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi,"");
	return alignSeq;
}


function filterFastaTitle (sequenceTitle)	{
	sequenceTitle = sequenceTitle.replace(/\s{2,}/g," ");
	sequenceTitle = sequenceTitle.replace(/^\s*/g,"");
	sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g,"\n");
	return sequenceTitle.replace (/[\<\>]\n/gi,"");
}

function getArrayOfFasta (sequenceData) {
	var arrayOfFasta = new Array();
	var matchArray;
	var re = /\>[^\>]+/g;
	if (sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/) != -1)	{
		while (matchArray = re.exec(sequenceData)) {
			arrayOfFasta.push(matchArray[0]);
		}		
	}
	else {
		arrayOfFasta[0] = sequenceData;
	}
	return arrayOfFasta;
}

function getFastaTitleFromTitleAndSequence (fastaSequenceTitle, sequence)	{
	var stringToReturn = '&gt;results for ' + sequence.length + ' residue sequence ';
	if (fastaSequenceTitle.search(/[^\s]/) != -1)	{
		stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
	}
	stringToReturn = stringToReturn + ' starting "' + sequence.substring(0,10) + '"';
	return stringToReturn + '\n';
}

function getFuzzySearchTitle (fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo)	{
	var stringToReturn = 'Search results for ' + sequenceOne.length + ' residue sequence ';
	if (fastaSequenceTitleOne.search(/[^\s]/) != -1)	{
		stringToReturn = stringToReturn + '"' + fastaSequenceTitleOne + '"';
	}
	stringToReturn = stringToReturn + ' starting "' + sequenceOne.substring(0,10) + '"\n';
	stringToReturn = stringToReturn + 'and ' + sequenceTwo.length + ' residue sequence ';
	if (fastaSequenceTitleTwo.search(/[^\s]/) != -1)	{
		stringToReturn = stringToReturn + '"' + fastaSequenceTitleTwo + '"';
	}
	stringToReturn = stringToReturn + ' starting "' + sequenceTwo.substring(0,10) + '"';
	return '<div class="info">' + stringToReturn + '</div>\n';
}

function getGeneticCodeMatchExp (arrayOfPatterns) {
	var geneticCodeMatchExp = new Array (arrayOfPatterns.length);
	for (var j = 0; j < arrayOfPatterns.length; j++)	{
			geneticCodeMatchExp[j] = eval(arrayOfPatterns[j].match(/\/.+\//) + "gi");
	}
	return geneticCodeMatchExp;
}

function getGeneticCodeMatchResult (arrayOfPatterns) {
	var geneticCodeMatchResult = new Array (arrayOfPatterns.length);
	for (var j = 0; j < arrayOfPatterns.length; j++)	{
			geneticCodeMatchResult[j] = (arrayOfPatterns[j].match(/=[a-zA-Z\*]/)).toString();
			geneticCodeMatchResult[j] = geneticCodeMatchResult[j].replace(/=/g,"");			
	}
	return geneticCodeMatchResult;
}

function getInfoFromTitleAndSequence (fastaSequenceTitle, sequence)	{
	var stringToReturn = 'Results for ' + sequence.length + ' residue sequence ';
	if (fastaSequenceTitle.search(/[^\s]/) != -1)	{
		stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
	}
	stringToReturn = stringToReturn + ' starting "' + sequence.substring(0,10) + '"';
	return '<div class="info">' + stringToReturn + '</div>\n';
}

function getInfoFromTitleAndSequenceAndTopology (fastaSequenceTitle, sequence, topology)	{
	var stringToReturn = 'Results for ' + topology + ' ' + sequence.length + ' residue sequence ';
	if (fastaSequenceTitle.search(/[^\s]/) != -1)	{
		stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
	}
	stringToReturn = stringToReturn + ' starting "' + sequence.substring(0,10) + '"';
	return '<div class="info">' + stringToReturn + '</div>\n';
}

function getPairwiseAlignTitle (fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo)	{
	var stringToReturn = 'Alignment results for ' + sequenceOne.length + ' residue sequence ';
	if (fastaSequenceTitleOne.search(/[^\s]/) != -1)	{
		stringToReturn = stringToReturn + '"' + fastaSequenceTitleOne + '"';
	}
	stringToReturn = stringToReturn + ' starting "' + sequenceOne.substring(0,10) + '"\n';
	stringToReturn = stringToReturn + 'and ' + sequenceTwo.length + ' residue sequence ';
	if (fastaSequenceTitleTwo.search(/[^\s]/) != -1)	{
		stringToReturn = stringToReturn + '"' + fastaSequenceTitleTwo + '"';
	}
	stringToReturn = stringToReturn + ' starting "' + sequenceTwo.substring(0,10) + '"';
	return '<div class="info">' + stringToReturn + '</div>\n';
}

function getRandomSequence (components, lengthOut)	{
	var sequenceArray = new Array();
	var tempNum = 0;
	var tempChar = "";
	for (var j = 0; j < (lengthOut); j++)	{
		tempNum = Math.floor(Math.random() * components.length);
		tempChar = components[tempNum];
		sequenceArray.push(tempChar);
	}
	return sequenceArray.join("");
}

function getSequenceFromFasta (sequenceRecord) {
	if (sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/) != -1)	{
		sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/,"");
	}
	return sequenceRecord;
}

function getTitleFromFasta (sequenceRecord) {
	var fastaTitle = "Untitled";
	if (sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/) != -1)	{
		fastaTitle = (sequenceRecord.match(/\>[^\f\n\r]+[\f\n\r]/,"")).toString();
		fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g,"");
		fastaTitle = fastaTitle.replace(/\s{2,}/g," ");
	        fastaTitle = fastaTitle.replace(/[\<\>]/gi,"");
	}
	return fastaTitle;
}

function moreExpressionCheck (expressionToCheck)	{
	if ((expressionToCheck.search(/\[[A-Za-z\|]*\[/) != -1) || (expressionToCheck.search(/\][A-Za-z\|]*\]/) != -1) || (expressionToCheck.search(/\[\]/) != -1) || (expressionToCheck.search(/\/[A-Za-z\|]*\]/) != -1) || (expressionToCheck.search(/\[[A-Za-z\|]*\//) != -1) || (expressionToCheck.search(/\|\|/) != -1) || (expressionToCheck.search(/\/\|/) != -1) || (expressionToCheck.search(/\|\//) != -1) || (expressionToCheck.search(/\[.\]/) != -1) || (expressionToCheck.search(/\</) != -1) || (expressionToCheck.search(/\>/) != -1))	{
		return false;
	}
	return true;
}

function openForm ()	{
	outputWindow.document.write ('<form action="">\n');
	return true;
}

function openPre () {
	//this is needed for Internet Explorer bug
	outputWindow.document.write ('<pre>');
	outputWindow.document.write ('<div class="pre">');	
}

function openTextArea ()	{
	outputWindow.document.write ('<br /><textarea rows="6" cols="61">\n');
	return true;
}

function openWindow (title) {
    _openWindow (title, true);
}

function _openWindow (title, isColor) {

	outputWindow=window.open("","my_new_window","toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
	outputWindow.focus();
	outputWindow.document.write ("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
			             "<html lang=\"en\">\n" +
				     "<head>\n" +
                                     "<title>Sequence Manipulation Suite</title>\n" +                         
                                     "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\" />\n");

	if (isColor) {
        outputWindow.document.write ("<style type=\"text/css\">\n" +
				     "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" +
			             "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" +
				     "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" +
				     "div.info {font-weight: bold}\n" +	
				     "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" +
			             "span.one, td.one {color: #000000; background-color: #66FF00}\n" +
				     "span.two, td.two {color: #000000; background-color: #FFFF66}\n" +	
				     "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" +
				     "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" +
				     "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" +
				     "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" +
				     "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" +
				     "td.many {color: #000000}\n" +
				     "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" +
				      "</style>\n");
	}
	else {
        outputWindow.document.write ("<style type=\"text/css\">\n" +
				     "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" +
			             "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" +
				     "div.title {display: none}\n" +
				     "div.info {font-weight: bold}\n" +	
				     "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" +
			             "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" +
				     "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" +	
				     "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" +
				     "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" +
				     "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" +
				     "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" +
				     "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" +
				     "td.many {color: #000000; background-color: #FFFFFF}\n" +
				     "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" +
				     "img {display: none}\n" +
				     "</style>\n");
	}
        outputWindow.document.write ("</head>\n" +
                                     "<body class=\"main\">\n" +
                                     "<div class=\"title\">" + title + " results</div>\n");
	outputWindow.status = 'Please Wait.';
	return true;
}

function openWindowAlign (title) {
        _openWindowAlign(title, true);
}

function _openWindowAlign (title, isBackground) {

	outputWindow=window.open("","my_new_window","toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
	outputWindow.focus();
	outputWindow.document.write ("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
			             "<html lang=\"en\">\n" +
				     "<head>\n" +
                                     "<title>Sequence Manipulation Suite</title>\n" +                         
                                     "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\" />\n");
	if (isBackground) {
        outputWindow.document.write ("<style type=\"text/css\">\n" +
				     "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" +
			             "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" +
				     "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" +
				     "div.info {font-weight: bold}\n" +	
 				     "span.ident {color: #FFFFFF; background-color: #000000}\n" +
				     "span.sim {color: #FFFFFF; background-color: #666666}\n" +
				     "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" +
				     "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" +
			             "span.c, span.m {color: #000000; background-color: #FFFF00}\n" +
				     "span.s, span.t {color: #000000; background-color: #66FF00}\n" +
				     "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" +
				     "span.d, span.e {color: #000000; background-color: #0066FF}\n" +
				     "span.n, span.q {color: #000000; background-color: #996633}\n" +
			             "span.p {color: #000000; background-color: #FF99FF}\n" +
				     "</style>\n");
	}
	else {
        outputWindow.document.write ("<style type=\"text/css\">\n" +
				     "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" +
			             "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" +
				     "div.title {display: none}\n" +
				     "div.info {font-weight: bold}\n" +	
 				     "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" +
				     "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" +
				     "span.diff {color: #999999; background-color: #FFFFFF}\n" +
				     "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" +
				     "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" +
			             "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" +
				     "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" +
				     "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" +
				     "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" +
				     "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" +
			             "span.p {color: #00FFCC; background-color: #FFFFFF}\n" +
				     "img {display: none}\n" +
				     "</style>\n");
	}
        outputWindow.document.write ("</head>\n" +
                                     "<body class=\"main\">\n" +
                                     "<div class=\"title\">" + title + " results</div>\n");
	outputWindow.status = 'Please Wait.';
	return true;
}

function removeFormatting (sequence) {
	return sequence.replace(/[\d\s]/g, "");
}
	
function removeNonDna (sequence) {
	return sequence.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
}

function removeNonDnaStrict (sequence) {
	return sequence.replace(/[^gatucGATUC]/g, "");
}

function removeNonProtein (sequence) {
	return sequence.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
}

function removeNonProteinStrict (sequence) {
	return sequence.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
}

function removeNonProteinAllowDegen (sequence) {
	return sequence.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
}

function removeNonProteinAllowX (sequence) {
	return sequence.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
}

function removeWhiteSpace (text) {
	return text.replace(/\s/g, "");
}

function removeNonLetters (sequence) {
	return sequence.replace(/[^A-Z]/gi, "");
}

function reverse (dnaSequence)	{	
	var tempDnaArray = new Array();
	if (dnaSequence.search(/./) != -1)	{
		tempDnaArray = dnaSequence.match(/./g);
		tempDnaArray = tempDnaArray.reverse();
		dnaSequence = tempDnaArray.join("");
	}
	return dnaSequence;
}

function rightNum (theNumber, sequenceToAppend, lengthOfColumn, tabIn)	{
	var j = 0;
	var tempString = "";
	theNumber = theNumber.toString();
	for (var j = theNumber.length; j < lengthOfColumn; j++)	{
		tempString = tempString + " ";
	}
	theNumber = tempString + theNumber + " ";
	sequenceToAppend = sequenceToAppend + theNumber + tabIn;
	return sequenceToAppend;
}

function testScript() {
	//test some javascript functions to see how the browser performs. 
	//want to prevent non Javascript 1.5 browsers from attempting to run.
	//first test Array.push()
	var testArray = new Array();
	var testString = "1234567890";
	
	testArray.push(testString);
	if (testArray[0] != testString) {
		alert("Array object push method not supported. See browser compatibility page.");
		return false;
	}

	//now test the 'm' flag in a regular expression
	testString = "1\n2\n3";
	var re = /^2$/m;
	if (testString.search(re) == -1) {
		alert("Regular expression 'm' flag not supported. See browser compatibility page.");
		return false;
	}

	var caughtException = false;
	//now test exception handling
	try {
		re = eval("Exception handling not supported. Check browser compatibility page.");
	}
	catch(e) {
		caughtException = true;
	}

	if (!(caughtException)) {
		alert("Exception handling not supported. See browser compatibility page.");
	}

	//now test replace lambda function
	testString = "123";	
	testString = testString.replace(/(\d)/g, 
                    function (str, p1, offset, s) {
                      	return p1 + "X";
                   }
        );
	if (testString != "1X2X3X") {
		alert ("Nested function in String replace method not supported. See browser compatibility page.");
		return false;
	}

	//test number methods toFixed() and toPrecision()
	var testNum = 2489.8237;
	if (testNum.toFixed(3) != 2489.824) {
		alert ("Number toFixed() method not supported. See browser compatibility page.");
		return false;
	}

	if (testNum.toPrecision(5) != 2489.8) {
		alert ("Number toPrecision() method not supported. See browser compatibility page.");
		return false;
	}

	return true;
}

function verifyDigits (theNumber)	{
	if (theNumber.search(/\d/) == -1) {
		alert ("Please enter a number");
		return false;
	}
}

function verifyEmbl (emblFile) {
	if ((emblFile.search(/ID/) == -1) || (emblFile.search(/AC/) == -1) || (emblFile.search(/DE/) == -1) || (emblFile.search(/SQ/) == -1)) {
		alert ("Please enter the contents of an EMBL file.");
		return false;
	}
	return true;
}

function verifyMaxDigits (theNumber, maxInput)	{
	if (theNumber.search(/\d/) == -1) {
		alert ("Please enter a number.");
		return false;
	}
	if (theNumber > maxInput) {
	        alert ("Please enter a number less than or equal to " + maxInput + ".");
	        return false;
        }
}

function verifyDna (dnaSequence)	{
	if (dnaSequence.search(/[^gatucryswkmbdhvnx\s]/i) != -1) {	
		alert ("The sequence contains non-DNA characters, which will be omitted.");
	}
	return true;
}

function verifyProtein (proteinSequence)	{
	if (proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i) != -1) {	
		alert ("The sequence contains non-protein characters, which will be omitted.");
	}
	return true;
}

function verifyGenBank (genBankFile) {
	if ((genBankFile.search(/LOCUS/) == -1) || (genBankFile.search(/DEFINITION/) == -1) || (genBankFile.search(/ACCESSION/) == -1) || (genBankFile.search(/ORIGIN/) == -1)) {
		alert ("Please enter the contents of a GenBank file.");
		return false;
	}
	return true;
}

function verifyGenBankFeat (genBankFile) {
	if ((genBankFile.search(/LOCUS/) == -1) || (genBankFile.search(/DEFINITION/) == -1) || (genBankFile.search(/ACCESSION/) == -1) || (genBankFile.search(/ORIGIN/) == -1)) {
		alert ("Please enter the contents of a GenBank file.");
		return false;
	}
	if (genBankFile.search(/FEATURES {13}/) == -1)	{
		alert ("The file has no defined features.");
		return false;
	}
	return true;
}

function verifyEmblFeat (emblFile) {
	if ((emblFile.search(/ID/) == -1) || (emblFile.search(/AC/) == -1) || (emblFile.search(/DE/) == -1) || (emblFile.search(/SQ/) == -1)) {
		alert ("Please enter the contents of an EMBL file.");
		return false;
	}
	if (emblFile.search(/^FT/m) == -1)	{
		alert ("The file has no defined features.");
		return false;
	}
	return true;
}

//deprecated                        
function writeGroupNum (text, tabIn, groupSize, basePerLine, startBase, stopBase) {
	var i = parseInt(startBase);
	var k = 0;
	var lineOfText = "";
	var sepChar = " ";
	groupSize = parseInt(groupSize);
	basePerLine = parseInt(basePerLine);
	while (i < stopBase)	{
		lineOfText = rightNum(i + 1,lineOfText,8,tabIn);
		for (var j = 1; j <= (basePerLine/groupSize); j++)	{//makes a group each loop
			while (k < groupSize)	{
				lineOfText = lineOfText + text.charAt(k + i);
				k = k + 1;
			}
			i = i + groupSize;
			k = 0;
			lineOfText = lineOfText + sepChar;
		}
		outputWindow.document.write (lineOfText + "\n");
		lineOfText = "";
	}
	return true;
}

function writeGroupNumDna (text, tabIn, groupSize, basePerLine, startBase, stopBase, strands, numberPosition) {
	writeGroupNumDnaSetStart (text, tabIn, groupSize, basePerLine, startBase, stopBase, strands, numberPosition, 0)
	return true;
}

function writeGroupNumDnaSetStart (text, tabIn, groupSize, basePerLine, startBase, stopBase, strands, numberPosition, numberingAdjustment) {
	//strands can be 'one' or 'two'
	//numberPosition can be 'left', 'above', or 'right'
	var i = parseInt(startBase);
	var k = 0;
	var lineOfText = "";
	var lineNum = "";
	var sepChar = " ";
	var aboveNum = "";
	groupSize = parseInt(groupSize);
	basePerLine = parseInt(basePerLine);
	numberingAdjustment = parseInt(numberingAdjustment);
	while (i < stopBase)	{
		lineNum = i + 1;
		for (var j = 1; j <= (basePerLine/groupSize); j++)	{//makes a group each loop
			while (k < groupSize)	{
				if (i + k >= stopBase) {
					break;
				}
				lineOfText = lineOfText + text.charAt(k + i);
				k = k + 1;
			}
			lineOfText = lineOfText + sepChar;
			i = i + k;
			if (numberPosition == 'above') {
				aboveNum = aboveNum + rightNum(adjustNumbering(i, numberingAdjustment),"",groupSize,tabIn);
			}
			if (i >= stopBase) {
				break;
			}
			k = 0;
		}
		if (numberPosition == 'left') {
			outputWindow.document.write (rightNum(adjustNumbering(lineNum, numberingAdjustment),"",8,tabIn) + lineOfText + "\n");
			if (strands == 'two') {	
				outputWindow.document.write (rightNum(adjustNumbering(lineNum, numberingAdjustment),"",8,tabIn) + complement(lineOfText) + "\n");
				outputWindow.document.write ("\n");
			}
		}
		else if (numberPosition == 'right') {
			outputWindow.document.write (lineOfText + adjustNumbering(i, numberingAdjustment) + "\n");
			if (strands == 'two') {	
				outputWindow.document.write (complement(lineOfText) + adjustNumbering(i, numberingAdjustment) + "\n");
				outputWindow.document.write ("\n");
			}		
		}
		else if (numberPosition == 'above') {
			outputWindow.document.write (aboveNum + "\n");
			outputWindow.document.write (lineOfText + "\n");
			if (strands == 'two') {	
				outputWindow.document.write (complement(lineOfText) + "\n");
				outputWindow.document.write ("\n");
			}		
		}
		aboveNum = "";
		lineOfText = "";
	}
	return true;

	//This function is used to change the numbering of base '0' to '1'
	function adjustNumbering (original, adjustment) {
		var adjusted = original + adjustment;
		if ((adjustment < 0) && (adjusted >= 0)) {
			adjusted++;
		}
		return adjusted;
	}
}

function writeGroupNumProtein (text, tabIn, groupSize, basePerLine, startBase, stopBase, numberPosition) {
	//numberPosition can be 'left', 'above', or 'right'
	var i = parseInt(startBase);
	var k = 0;
	var lineOfText = "";
	var lineNum = "";
	var sepChar = " ";
	var aboveNum = "";
	groupSize = parseInt(groupSize);
	basePerLine = parseInt(basePerLine);
	while (i < stopBase)	{
		lineNum = i + 1;
		for (var j = 1; j <= (basePerLine/groupSize); j++)	{//makes a group each loop
			while (k < groupSize)	{
				if (i + k >= stopBase) {
					break;
				}
				lineOfText = lineOfText + text.charAt(k + i);
				k = k + 1;
			}
			lineOfText = lineOfText + sepChar;
			i = i + k;
			if (numberPosition == 'above') {
				aboveNum = aboveNum + rightNum(i,"",groupSize,tabIn);
			}
			if (i >= stopBase) {
				break;
			}
			k = 0;
		}
		if (numberPosition == 'left') {
			outputWindow.document.write (rightNum(lineNum,"",8,tabIn) + lineOfText + "\n");
		}
		else if (numberPosition == 'right') {
			outputWindow.document.write (lineOfText + i + "\n");		
		}
		else if (numberPosition == 'above') {
			outputWindow.document.write (aboveNum + "\n");
			outputWindow.document.write (lineOfText + "\n");		
		}
		aboveNum = "";
		lineOfText = "";
	}
	return true;
}

function writeMutatedSequence (sequence, components, numMut, firstIndexToMutate, lastIndexToMutate)	{
	var currentChar = "";
	var randNum = 0;
	var maxNum = 0;
	var needNewChar = "";
	var componentsIndex = 0;

	numMut = parseInt(numMut);
	firstIndexToMutate = parseInt(firstIndexToMutate);
	lastIndexToMutate = parseInt(lastIndexToMutate);
	
	if ((sequence.length <= firstIndexToMutate) || (lastIndexToMutate < 0) || (lastIndexToMutate <= firstIndexToMutate)) {
		numMut = 0;
	}

	for (var i = 0; i < numMut; i++)	{
		maxNum = sequence.length;
		randNum = Math.floor(Math.random() * maxNum);
	
		if ((randNum < firstIndexToMutate) || (randNum > lastIndexToMutate)) {
			numMut++;
			continue;
		}
	
		currentChar = sequence.charAt(randNum);
		needNewChar = true;
		while (needNewChar) {
			componentsIndex = Math.round(Math.random() * components.length);
			if (componentsIndex == components.length)	{
				componentsIndex = 0;
			}
			if (components[componentsIndex] != currentChar) {
				needNewChar = false;	
			}			
		}
		sequence = sequence.substring(0,randNum) + components[componentsIndex] + sequence.substring((randNum + 1),sequence.length);

	}
	outputWindow.document.write(addReturns(sequence));
	return true;
}

function writeRandomSequence (components, lengthOut)	{
	var sequence = "";
	var tempNum = 0;
	var tempChar = "";
	for (var j = 0; j < (lengthOut); j++)	{
		tempNum = Math.floor(Math.random() * components.length);
		tempChar = components[tempNum];
		sequence = sequence + tempChar;
		if (sequence.length == 60)	{
			outputWindow.document.write(sequence +'\n');
			sequence = "";
		}
	}
	outputWindow.document.write(sequence + '\n');
	return true;
}

function writeRestrictionSites (sequence, arrayOfItems, dnaConformation)	{	
	var resultArray = new Array();
	var lookAhead = 50;
	var lowerLimit = 0;
	var upperLimit = sequence.length;
	var shiftValue = 0;
	var cutDistance;
	var matchExp;
	var matchPosition;
	var tempString;
	var backGroundClass;
	var matchArray;
	var timesFound = 0;
	if (dnaConformation == "circular")	{
		shiftValue = (sequence.substring(0, lookAhead)).length;
		sequence = sequence.substring(sequence.length - lookAhead,sequence.length) + sequence + sequence.substring(0,lookAhead);
		lowerLimit = 0 + shiftValue;
		upperLimit = upperLimit + shiftValue;
	}
	outputWindow.document.write ('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');	
	outputWindow.document.write ('<tr><td class="title" width="200px">' + 'Site:' + '</td><td class="title">' + 'Positions:' + '</td></tr>\n');	
	for (var i = 0; i < (arrayOfItems.length); i++)	{
		tempString = "none";
		backGroundClass = "many";
		matchExp = arrayOfItems[i].match(/\/.+\//) + "gi";
		matchPosition = 0;
		matchExp = eval(matchExp);
		cutDistance = parseFloat((arrayOfItems[i].match(/\)\D*\d+/)).toString().replace(/\)\D*/,""));

		while (matchArray = matchExp.exec(sequence)) {

			matchPosition = matchExp.lastIndex - cutDistance;
			if ((matchPosition >= lowerLimit) && (matchPosition < upperLimit))	{
			    	timesFound++;
				tempString = tempString + ', ' + (matchPosition - shiftValue + 1);
			}
			matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
		}		

		if (tempString.search(/\d/) != -1)	{
			tempString = tempString.replace(/none,\s*/,"");
		}

		if (timesFound == 0) {
			backGroundClass = "none";
		}
		else if (timesFound == 1) {
			backGroundClass = "one";
		}
		else if (timesFound == 2) {
			backGroundClass = "two";
		}
		else if (timesFound == 3) {
			backGroundClass = "three";
		}
		else {
			backGroundClass = "many";
		}		

		outputWindow.document.write ('<tr><td class="' + backGroundClass + '">' + ((arrayOfItems[i].match(/\([^\(]+\)/)).toString()).replace(/\(|\)/g,"") + '</td><td class="' + backGroundClass + '">' + tempString + '</td></tr>\n');

		timesFound = 0;
	}
	outputWindow.document.write('</tbody></table>\n');
	return true;
}

function writeSequenceStats (sequence, arrayOfItems)	{	//arrayOFItems are regular expressions. A number included with each regular expression serves as an adjustment for the percentage calculation. Any additional text will appear next to the pattern when the results are given.
	var originalLength = sequence.length;
	outputWindow.document.write ('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');	
	outputWindow.document.write ('<tr><td class="title">' + 'Pattern:' + '</td><td class="title">' + 'Times found:' + '</td><td class="title">' + 'Percentage:' + '</td></tr>\n');	
	for (var i = 0; i < (arrayOfItems.length); i++)	{
		var tempNumber = 0;
		var matchExp = arrayOfItems[i].match(/\/[^\/]+\//) + "gi";
		matchExp = eval(matchExp);
		if (sequence.search(matchExp) != -1)	{
			tempNumber = ((sequence.match(matchExp)).length);
		}
		var percentage = 0;
		if ((originalLength + 1 - parseFloat(arrayOfItems[i].match(/\d+/))) > 0) {
			percentage = (100 * tempNumber/(originalLength + 1 - parseFloat(arrayOfItems[i].match(/\d+/))));
		}

		outputWindow.document.write ('<tr><td>' + ((arrayOfItems[i].match(/\([^\(]+\)\b/)).toString()).replace(/\(|\)/g,"") + '</td><td>' + tempNumber + '</td><td>' + percentage.toFixed(2) + '</td></tr>\n');
	}
	outputWindow.document.write('</tbody></table>\n');
	return true;
}

function writeShuffledSequence (sequence)	{
	var tempSeq = "";
	var tempChar = "";
	var tempString1 = "";
	var tempString2 = "";
	var randNum = 0;
	var maxNum = 0;
	while (sequence.length > 0)	{
		maxNum = sequence.length;
		randNum = Math.floor(Math.random() * maxNum);
		tempChar = sequence.charAt(randNum);
		tempSeq = tempSeq + tempChar;		
		tempString1 = sequence.substring(0,randNum);
		tempString2 = sequence.substring((randNum + 1),sequence.length);
		sequence = tempString1 + tempString2;
		if (tempSeq.length == 60)	{
			outputWindow.document.write(tempSeq +'\n');
			tempSeq = "";
		}
	}
	outputWindow.document.write(tempSeq + '\n');
	return true;
}


// pairwise_align_protein.js
//Written by Paul Stothard, University of Alberta, Canada

function pairwiseAlignProtein (theDocument) {	

	//var MATRIX = "blosum62";
	//var GAP_PENALTY = 2;

	//var BEGIN_GAP_PENALTY = 0;
	//var END_GAP_PENALTY = 0;

	var newProteinOne = "";
	var titleOne = "";

	var newProteinTwo = "";
	var titleTwo = "";
	
	var maxInput = 2000;

	if (testScript() == false) {
		return false;
	}

	if ((checkFormElement (theDocument.forms[0].elements[0]) == false) || (checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput) == false) || (checkFormElement (theDocument.forms[0].elements[1]) == false) || (checkSequenceLength(theDocument.forms[0].elements[1].value, maxInput) == false))	{
		return false;
	}

	var MATRIX = theDocument.forms[0].elements[5].options[theDocument.forms[0].elements[5].selectedIndex].value;
	var BEGIN_GAP_PENALTY = parseInt(theDocument.forms[0].elements[6].options[theDocument.forms[0].elements[6].selectedIndex].value);
	var GAP_PENALTY = parseInt(theDocument.forms[0].elements[7].options[theDocument.forms[0].elements[7].selectedIndex].value);
	var END_GAP_PENALTY = parseInt(theDocument.forms[0].elements[8].options[theDocument.forms[0].elements[8].selectedIndex].value);

	openWindow("Pairwise Align Protein");
	openPre();

	newProteinOne = getSequenceFromFasta(theDocument.forms[0].elements[0].value);
	newProteinOne = removeNonProtein(newProteinOne);
	titleOne = getTitleFromFasta(theDocument.forms[0].elements[0].value);

	newProteinTwo = getSequenceFromFasta(theDocument.forms[0].elements[1].value);
	newProteinTwo = removeNonProtein(newProteinTwo);
	titleTwo = getTitleFromFasta(theDocument.forms[0].elements[1].value);

	outputWindow.document.write(getPairwiseAlignTitle(titleOne, newProteinOne, titleTwo, newProteinTwo));

	//change to arrays for pass by reference, so that large sequence isn't copied
	if (newProteinOne.search(/./) != -1)	{
		newProteinOne = newProteinOne.match(/./g);
	}


	if (newProteinTwo.search(/./) != -1)	{
		newProteinTwo = newProteinTwo.match(/./g);
	}


	pairwiseProtein (titleOne, newProteinOne, titleTwo, newProteinTwo, MATRIX, GAP_PENALTY, BEGIN_GAP_PENALTY, END_GAP_PENALTY);
	closePre();
	closeWindow();
	return true;
}	

function pairwiseProtein (titleOne, newProteinOne, titleTwo, newProteinTwo, matrix, gapPenalty, beginGapPenalty, endGapPenalty)	{

	//can use one or both.
	//can compare scores (should be identical)
	var useLinearSpace = true;
	var useQuadraticSpace = false;

	//create scoringMatrix object
	var scoringMatrix;

	if (matrix == "pam30") {
		scoringMatrix = new Pam30();
	}
	else if (matrix == "pam70") {
		scoringMatrix = new Pam70();
	}
	else if (matrix == "blosum80") {
		scoringMatrix = new Blosum80();
	}
	else if (matrix == "blosum62") {
		scoringMatrix = new Blosum62();
	}
	else if (matrix == "blosum45") {
		scoringMatrix = new Blosum45();
	}

	var scoreSet = new ScoreSet();
	scoreSet.setScoreSetParam(scoringMatrix, gapPenalty, beginGapPenalty, endGapPenalty);

	var alignment;
	
	if (useLinearSpace) {

		alignment = new AlignPairLinear();
		alignment.setAlignParam(newProteinOne, newProteinTwo, scoreSet);
		alignment.align();

		outputWindow.document.write(">" + titleOne + "\n");
		outputWindow.document.write(addReturns(alignment.getAlignedM()));
		outputWindow.document.write("\n");
		outputWindow.document.write("\n");
		outputWindow.document.write(">" + titleTwo + "\n");
		outputWindow.document.write(addReturns(alignment.getAlignedN()));
		outputWindow.document.write("\n\n");
		outputWindow.document.write("Alignment score: " + alignment.score + "\n\n");
	}

	if (useQuadraticSpace) {
	
		alignment = new AlignPairQuad();
		alignment.initializeMatrix(newProteinOne, newProteinTwo, scoreSet);
		alignment.fillMatrix();
		//alignment.dumpMatrix();
		alignment.align();	

		outputWindow.document.write(">" + titleOne + "\n");
		outputWindow.document.write(addReturns(alignment.getAlignedM()));
		outputWindow.document.write("\n");
		outputWindow.document.write("\n");
		outputWindow.document.write(">" + titleTwo + "\n");
		outputWindow.document.write(addReturns(alignment.getAlignedN()));
		outputWindow.document.write("\n\n");
		outputWindow.document.write("Alignment score: " + alignment.score + "\n\n");
	}
}



//------------------------------------ ScoreSet class

//ScoreSet getScore
function getScore (r1, r2) {
	return this.scoringMatrix.scoringMatrix_getScore(r1, r2);	
}

//ScoreSet setScoreSetParam
function setScoreSetParam (scoringMatrix, gapPenalty, beginGapPenalty, endGapPenalty) {
	this.scoringMatrix = scoringMatrix;
	this.gap = gapPenalty;
	this.beginGap = beginGapPenalty;
	this.endGap = endGapPenalty;
}

//ScoreSet class
function ScoreSet () {
	this.scoringMatrix;
	this.gap;
	this.beginGap;
	this.endGap;
	this.useBeginGapTop = true;
	this.useBeginGapLeft = true;
	this.useEndGapBottom = true;
	this.useEndGapRight = true;
}

//create and throw away a prototype object
new ScoreSet();

//define object methods
ScoreSet.prototype.getScore = getScore;
ScoreSet.prototype.setScoreSetParam = setScoreSetParam;

//------------------------------------


//------------------------------------ ScoringMatrix Abstract Class
//ScoringMatrix getScore method
function scoringMatrix_getScore(r1, r2) {
	r1 = r1.toLowerCase();
	r2 = r2.toLowerCase();
	if (this.scoreHash[r1 + r2] == null) {
		throw "Unrecognized residue pair: " + r1 + ", " + r2 + "."; 
	}
	else {
		return this.scoreHash[r1 + r2];
	}
}

function scoringMatrix_fillHash(matrix) {
	var cols = matrix[0].split(/\s+/);
	var cells;
	//go through rows
	for (var i = 1; i < matrix.length; i++) {
		cells = matrix[i].split(/\s+/);	
		//go through cells in this row		
		for (var j = 1; j < cols.length + 1; j++) {
			this.scoreHash[cells[0].toLowerCase() + cols[j-1].toLowerCase()] = parseInt(cells[j]);
		}
	}
}

//ScoringMatrix class
function ScoringMatrix() {
	this.scoreHash = {};
}

//create and throw away a prototype object
new ScoringMatrix();

//define object methods
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;
ScoringMatrix.prototype.scoringMatrix_fillHash = scoringMatrix_fillHash;

//------------------------------------ Blosum62 Class extends ScoringMatrix Class
//constructor
function Blosum62 () {
	
	var matrix = new Array (
   "A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V",
"A  4 -1 -2 -2  0 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -3 -2  0",
"R -1  5  0 -2 -3  1  0 -2  0 -3 -2  2 -1 -3 -2 -1 -1 -3 -2 -3",
"N -2  0  6  1 -3  0  0  0  1 -3 -3  0 -2 -3 -2  1  0 -4 -2 -3",
"D -2 -2  1  6 -3  0  2 -1 -1 -3 -4 -1 -3 -3 -1  0 -1 -4 -3 -3",
"C  0 -3 -3 -3  9 -3 -4 -3 -3 -1 -1 -3 -1 -2 -3 -1 -1 -2 -2 -1",
"Q -1  1  0  0 -3  5  2 -2  0 -3 -2  1  0 -3 -1  0 -1 -2 -1 -2",
"E -1  0  0  2 -4  2  5 -2  0 -3 -3  1 -2 -3 -1  0 -1 -3 -2 -2",
"G  0 -2  0 -1 -3 -2 -2  6 -2 -4 -4 -2 -3 -3 -2  0 -2 -2 -3 -3",
"H -2  0  1 -1 -3  0  0 -2  8 -3 -3 -1 -2 -1 -2 -1 -2 -2  2 -3",
"I -1 -3 -3 -3 -1 -3 -3 -4 -3  4  2 -3  1  0 -3 -2 -1 -3 -1  3",
"L -1 -2 -3 -4 -1 -2 -3 -4 -3  2  4 -2  2  0 -3 -2 -1 -2 -1  1",
"K -1  2  0 -1 -3  1  1 -2 -1 -3 -2  5 -1 -3 -1  0 -1 -3 -2 -2",
"M -1 -1 -2 -3 -1  0 -2 -3 -2  1  2 -1  5  0 -2 -1 -1 -1 -1  1",
"F -2 -3 -3 -3 -2 -3 -3 -3 -1  0  0 -3  0  6 -4 -2 -2  1  3 -1",
"P -1 -2 -2 -1 -3 -1 -1 -2 -2 -3 -3 -1 -2 -4  7 -1 -1 -4 -3 -2",
"S  1 -1  1  0 -1  0  0  0 -1 -2 -2  0 -1 -2 -1  4  1 -3 -2 -2",
"T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -2 -1  1  5 -2 -2  0",
"W -3 -3 -4 -4 -2 -2 -3 -2 -2 -3 -2 -3 -1  1 -4 -3 -2 11  2 -3",
"Y -2 -2 -2 -3 -2 -1 -2 -3  2 -1 -1 -2 -1  3 -3 -2 -2  2  7 -1",
"V  0 -3 -3 -3 -1 -2 -2 -3 -3  3  1 -2  1 -1 -2 -2  0 -3 -1  4");

	this.scoringMatrix_fillHash(matrix);
}

Blosum62.prototype = new ScoringMatrix();


//------------------------------------ Blosum45 Class extends ScoringMatrix Class
//constructor
function Blosum45 () {
	
	var matrix = new Array (
   "A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V",
"A  5 -2 -1 -2 -1 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -2 -2  0",
"R -2  7  0 -1 -3  1  0 -2  0 -3 -2  3 -1 -2 -2 -1 -1 -2 -1 -2",
"N -1  0  6  2 -2  0  0  0  1 -2 -3  0 -2 -2 -2  1  0 -4 -2 -3", 
"D -2 -1  2  7 -3  0  2 -1  0 -4 -3  0 -3 -4 -1  0 -1 -4 -2 -3",
"C -1 -3 -2 -3 12 -3 -3 -3 -3 -3 -2 -3 -2 -2 -4 -1 -1 -5 -3 -1",
"Q -1  1  0  0 -3  6  2 -2  1 -2 -2  1  0 -4 -1  0 -1 -2 -1 -3",
"E -1  0  0  2 -3  2  6 -2  0 -3 -2  1 -2 -3  0  0 -1 -3 -2 -3",
"G  0 -2  0 -1 -3 -2 -2  7 -2 -4 -3 -2 -2 -3 -2  0 -2 -2 -3 -3",
"H -2  0  1  0 -3  1  0 -2 10 -3 -2 -1  0 -2 -2 -1 -2 -3  2 -3",
"I -1 -3 -2 -4 -3 -2 -3 -4 -3  5  2 -3  2  0 -2 -2 -1 -2  0  3",
"L -1 -2 -3 -3 -2 -2 -2 -3 -2  2  5 -3  2  1 -3 -3 -1 -2  0  1",
"K -1  3  0  0 -3  1  1 -2 -1 -3 -3  5 -1 -3 -1 -1 -1 -2 -1 -2",
"M -1 -1 -2 -3 -2  0 -2 -2  0  2  2 -1  6  0 -2 -2 -1 -2  0  1",
"F -2 -2 -2 -4 -2 -4 -3 -3 -2  0  1 -3  0  8 -3 -2 -1  1  3  0",
"P -1 -2 -2 -1 -4 -1  0 -2 -2 -2 -3 -1 -2 -3  9 -1 -1 -3 -3 -3",
"S  1 -1  1  0 -1  0  0  0 -1 -2 -3 -1 -2 -2 -1  4  2 -4 -2 -1",
"T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -1 -1  2  5 -3 -1  0",
"W -2 -2 -4 -4 -5 -2 -3 -2 -3 -2 -2 -2 -2  1 -3 -4 -3 15  3 -3",
"Y -2 -1 -2 -2 -3 -1 -2 -3  2  0  0 -1  0  3 -3 -2 -1  3  8 -1",
"V  0 -2 -3 -3 -1 -3 -3 -3 -3  3  1 -2  1  0 -3 -1  0 -3 -1  5");

	this.scoringMatrix_fillHash(matrix);	
}

Blosum45.prototype = new ScoringMatrix();


//------------------------------------ Blosum80 Class extends ScoringMatrix Class
//constructor
function Blosum80 () {
	
	var matrix = new Array (
   "A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V",
"A  5 -2 -2 -2 -1 -1 -1  0 -2 -2 -2 -1 -1 -3 -1  1  0 -3 -2  0",
"R -2  6 -1 -2 -4  1 -1 -3  0 -3 -3  2 -2 -4 -2 -1 -1 -4 -3 -3",
"N -2 -1  6  1 -3  0 -1 -1  0 -4 -4  0 -3 -4 -3  0  0 -4 -3 -4",
"D -2 -2  1  6 -4 -1  1 -2 -2 -4 -5 -1 -4 -4 -2 -1 -1 -6 -4 -4",
"C -1 -4 -3 -4  9 -4 -5 -4 -4 -2 -2 -4 -2 -3 -4 -2 -1 -3 -3 -1",
"Q -1  1  0 -1 -4  6  2 -2  1 -3 -3  1  0 -4 -2  0 -1 -3 -2 -3",
"E -1 -1 -1  1 -5  2  6 -3  0 -4 -4  1 -2 -4 -2  0 -1 -4 -3 -3",
"G  0 -3 -1 -2 -4 -2 -3  6 -3 -5 -4 -2 -4 -4 -3 -1 -2 -4 -4 -4",
"H -2  0  0 -2 -4  1  0 -3  8 -4 -3 -1 -2 -2 -3 -1 -2 -3  2 -4",
"I -2 -3 -4 -4 -2 -3 -4 -5 -4  5  1 -3  1 -1 -4 -3 -1 -3 -2  3",
"L -2 -3 -4 -5 -2 -3 -4 -4 -3  1  4 -3  2  0 -3 -3 -2 -2 -2  1",
"K -1  2  0 -1 -4  1  1 -2 -1 -3 -3  5 -2 -4 -1 -1 -1 -4 -3 -3",
"M -1 -2 -3 -4 -2  0 -2 -4 -2  1  2 -2  6  0 -3 -2 -1 -2 -2  1",
"F -3 -4 -4 -4 -3 -4 -4 -4 -2 -1  0 -4  0  6 -4 -3 -2  0  3 -1",
"P -1 -2 -3 -2 -4 -2 -2 -3 -3 -4 -3 -1 -3 -4  8 -1 -2 -5 -4 -3",
"S  1 -1  0 -1 -2  0  0 -1 -1 -3 -3 -1 -2 -3 -1  5  1 -4 -2 -2",
"T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -2 -1 -1 -2 -2  1  5 -4 -2  0",
"W -3 -4 -4 -6 -3 -3 -4 -4 -3 -3 -2 -4 -2  0 -5 -4 -4 11  2 -3",
"Y -2 -3 -3 -4 -3 -2 -3 -4  2 -2 -2 -3 -2  3 -4 -2 -2  2  7 -2",
"V  0 -3 -4 -4 -1 -3 -3 -4 -4  3  1 -3  1 -1 -3 -2  0 -3 -2  4");

	this.scoringMatrix_fillHash(matrix);	
}

Blosum80.prototype = new ScoringMatrix();


//------------------------------------ Pam70 Class extends ScoringMatrix Class
//constructor
function Pam70 () {
	
	var matrix = new Array (
    "A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V",
"A   5  -4  -2  -1  -4  -2  -1   0  -4  -2  -4  -4  -3  -6   0   1   1  -9  -5  -1",
"R  -4   8  -3  -6  -5   0  -5  -6   0  -3  -6   2  -2  -7  -2  -1  -4   0  -7  -5",
"N  -2  -3   6   3  -7  -1   0  -1   1  -3  -5   0  -5  -6  -3   1   0  -6  -3  -5",
"D  -1  -6   3   6  -9   0   3  -1  -1  -5  -8  -2  -7 -10  -4  -1  -2 -10  -7  -5",
"C  -4  -5  -7  -9   9  -9  -9  -6  -5  -4 -10  -9  -9  -8  -5  -1  -5 -11  -2  -4",
"Q  -2   0  -1   0  -9   7   2  -4   2  -5  -3  -1  -2  -9  -1  -3  -3  -8  -8  -4",
"E  -1  -5   0   3  -9   2   6  -2  -2  -4  -6  -2  -4  -9  -3  -2  -3 -11  -6  -4",
"G   0  -6  -1  -1  -6  -4  -2   6  -6  -6  -7  -5  -6  -7  -3   0  -3 -10  -9  -3",
"H  -4   0   1  -1  -5   2  -2  -6   8  -6  -4  -3  -6  -4  -2  -3  -4  -5  -1  -4",
"I  -2  -3  -3  -5  -4  -5  -4  -6  -6   7   1  -4   1   0  -5  -4  -1  -9  -4   3",
"L  -4  -6  -5  -8 -10  -3  -6  -7  -4   1   6  -5   2  -1  -5  -6  -4  -4  -4   0",
"K  -4   2   0  -2  -9  -1  -2  -5  -3  -4  -5   6   0  -9  -4  -2  -1  -7  -7  -6",
"M  -3  -2  -5  -7  -9  -2  -4  -6  -6   1   2   0  10  -2  -5  -3  -2  -8  -7   0",
"F  -6  -7  -6 -10  -8  -9  -9  -7  -4   0  -1  -9  -2   8  -7  -4  -6  -2   4  -5",
"P   0  -2  -3  -4  -5  -1  -3  -3  -2  -5  -5  -4  -5  -7   7   0  -2  -9  -9  -3",
"S   1  -1   1  -1  -1  -3  -2   0  -3  -4  -6  -2  -3  -4   0   5   2  -3  -5  -3",
"T   1  -4   0  -2  -5  -3  -3  -3  -4  -1  -4  -1  -2  -6  -2   2   6  -8  -4  -1",
"W  -9   0  -6 -10 -11  -8 -11 -10  -5  -9  -4  -7  -8  -2  -9  -3  -8  13  -3 -10",
"Y  -5  -7  -3  -7  -2  -8  -6  -9  -1  -4  -4  -7  -7   4  -9  -5  -4  -3   9  -5",
"V  -1  -5  -5  -5  -4  -4  -4  -3  -4   3   0  -6   0  -5  -3  -3  -1 -10  -5   6");
	
	this.scoringMatrix_fillHash(matrix);
}

Pam70.prototype = new ScoringMatrix();

//------------------------------------ Pam30 Class extends ScoringMatrix Class
//constructor
function Pam30 () {
	
	var matrix = new Array (
    "A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V",
"A   6  -7  -4  -3  -6  -4  -2  -2  -7  -5  -6  -7  -5  -8  -2   0  -1 -13  -8  -2",
"R  -7   8  -6 -10  -8  -2  -9  -9  -2  -5  -8   0  -4  -9  -4  -3  -6  -2 -10  -8",
"N  -4  -6   8   2 -11  -3  -2  -3   0  -5  -7  -1  -9  -9  -6   0  -2  -8  -4  -8",
"D  -3 -10   2   8 -14  -2   2  -3  -4  -7 -12  -4 -11 -15  -8  -4  -5 -15 -11  -8",
"C  -6  -8 -11 -14  10 -14 -14  -9  -7  -6 -15 -14 -13 -13  -8  -3  -8 -15  -4  -6",
"Q  -4  -2  -3  -2 -14   8   1  -7   1  -8  -5  -3  -4 -13  -3  -5  -5 -13 -12  -7",
"E  -2  -9  -2   2 -14   1   8  -4  -5  -5  -9  -4  -7 -14  -5  -4  -6 -17  -8  -6",
"G  -2  -9  -3  -3  -9  -7  -4   6  -9 -11 -10  -7  -8  -9  -6  -2  -6 -15 -14  -5",
"H  -7  -2   0  -4  -7   1  -5  -9   9  -9  -6  -6 -10  -6  -4  -6  -7  -7  -3  -6",
"I  -5  -5  -5  -7  -6  -8  -5 -11  -9   8  -1  -6  -1  -2  -8  -7  -2 -14  -6   2",
"L  -6  -8  -7 -12 -15  -5  -9 -10  -6  -1   7  -8   1  -3  -7  -8  -7  -6  -7  -2",
"K  -7   0  -1  -4 -14  -3  -4  -7  -6  -6  -8   7  -2 -14  -6  -4  -3 -12  -9  -9",
"M  -5  -4  -9 -11 -13  -4  -7  -8 -10  -1   1  -2  11  -4  -8  -5  -4 -13 -11  -1",
"F  -8  -9  -9 -15 -13 -13 -14  -9  -6  -2  -3 -14  -4   9 -10  -6  -9  -4   2  -8",
"P  -2  -4  -6  -8  -8  -3  -5  -6  -4  -8  -7  -6  -8 -10   8  -2  -4 -14 -13  -6",
"S   0  -3   0  -4  -3  -5  -4  -2  -6  -7  -8  -4  -5  -6  -2   6   0  -5  -7  -6",
"T  -1  -6  -2  -5  -8  -5  -6  -6  -7  -2  -7  -3  -4  -9  -4   0   7 -13  -6  -3",
"W -13  -2  -8 -15 -15 -13 -17 -15  -7 -14  -6 -12 -13  -4 -14  -5 -13  13  -5 -15",
"Y  -8 -10  -4 -11  -4 -12  -8 -14  -3  -6  -7  -9 -11   2 -13  -7  -6  -5  10  -7",
"V  -2  -8  -8  -8  -6  -7  -6  -5  -6   2  -2  -9  -1  -8  -6  -6  -3 -15  -7   7");

	this.scoringMatrix_fillHash(matrix);	
}

Pam30.prototype = new ScoringMatrix();



// align_pair_linear.js
//Written by Paul Stothard, University of Alberta, Canada

//This class performs alignments in linear space, by recursively dividing
//the alignment. Once subalignments of acceptable size are obtained, they
//are solved using the quadratic space implementation in align_pair_quad.js.

//To use this class: (see pairwise_dna.js for example)
//var alignment = new AlignPairLinear();
//alignment.initializeMatrix(sequenceArrayM, sequenceArrayN, scoreSet);
//alignment.fillMatrix();
//alignment.align();
//var alignedSequenceStringM = alignment.getAlignedM();
//var alignedSequenceStringN = alignment.getAlignedN();

//------------------------------------ AlignPairLinear class
//AlignPairLinear class align() method
function align () {
	if (this.M.length == 0) {

		for (var j = 1; j <= this.N.length; j++) {
			this.alignedM.push("-");
			this.alignedN.push(this.N[j - 1]);
			this.score = this.score + this.scoreSet.gap;			
		}
	}
	else if (this.N.length == 0) {
		for (var j = 1; j <= this.M.length; j++) {
			this.alignedN.push("-");
			this.alignedM.push(this.M[j - 1]);
			this.score = this.score + this.scoreSet.gap;			
		}

	}
	else if ((this.M.length == 0) && (this.N.length == 0)) {
		//do nothing
	}
	else {
		this.path(0, 0, this.M.length, this.N.length);
	}
}

//AlignPairLinear class recursive method path()
function path (i1, j1, i2, j2) {

	//alert ("i1, j1, : i2, j2 " + i1 +", " + j1 + ", " + i2 + ", " + j2);

	if ((i1 + 1 == i2) || (j1 == j2)) {
		//align using quadratic space alignment
		var subM = new Array();
		var subN = new Array();

		for (var i = i1 + 1; i <= i2; i++) {
			subM.push(this.M[i-1]);	
		}

		for (var j = j1 + 1; j <= j2; j++) {
			subN.push(this.N[j-1]);	
		}

		var alignment = new AlignPairQuad();

		subScoreSet = new ScoreSet();
		if (j1 == j2) {

			if (j1 == 0) {
				subScoreSet.setScoreSetParam(this.scoreSet.scoringMatrix, this.scoreSet.beginGap, this.scoreSet.beginGap, this.scoreSet.beginGap);
			}
			else if (j1 == this.N.length) {
				subScoreSet.setScoreSetParam(this.scoreSet.scoringMatrix, this.scoreSet.endGap, this.scoreSet.endGap, this.scoreSet.endGap);
			}
			else {
				subScoreSet.setScoreSetParam(this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.gap, this.scoreSet.gap);
			}
		}
		else {
			
			subScoreSet.setScoreSetParam(this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.beginGap, this.scoreSet.endGap);
			subScoreSet.useBeginGapTop = false;
			subScoreSet.useBeginGapLeft = false;
			subScoreSet.useEndGapBottom = false;
			subScoreSet.useEndGapRight = false;

			if (i1 == 0) {
				subScoreSet.useBeginGapTop = true;
			}
	
			if (j1 == 0) {
				subScoreSet.useBeginGapLeft = true;
			}
			
			if (j2 == this.N.length) {
				subScoreSet.useEndGapRight = true;
			}

			if (i2 == this.M.length) {
				subScoreSet.useEndGapBottom = true;
			}
		}

		alignment.initializeMatrix(subM, subN, subScoreSet);
		alignment.fillMatrix();
		alignment.align();
		//alignment.dumpMatrix();
		this.alignedM.push(alignment.getAlignedM());
		this.alignedN.push(alignment.getAlignedN());

		this.score = this.score + alignment.score;		
	}
	else {
		var middle = Math.floor((i1 + i2)/2);

		//linear-space computation of alignment score to middle row
		//forward pass

		//gaps along top

		this.Sn[j1] = 0;
		
		if (i1 == 0) {
			for (var j = j1 + 1; j <= j2; j++) {
				this.Sn[j] = this.Sn[j - 1] - this.scoreSet.beginGap;
			}
		}
		else {
			for (var j = j1 + 1; j <= j2; j++) {
				this.Sn[j] = this.Sn[j - 1] - this.scoreSet.gap;
			}
		}

		//now continue down rows to middle row
		var diag;
		var left;
		//for (var i = i1 + 1; i <= i2; i++) {
		for (var i = i1 + 1; i <= middle; i++) {
			diag = this.Sn[j1];
			left;
			if (j1 == 0) {
				left = this.Sn[j1] - this.scoreSet.beginGap;
			}
			else {
				left = this.Sn[j1] - this.scoreSet.gap;
			}

			this.Sn[j1] = left;		
			
			//we need three values to set the score: diag, left, and above to fill in the row
			for (var j = j1 + 1; j <= j2; j++) {
				//above will be in the this.Sn array, which is holding a mixture of the previous row and the new row
				//var above = this.Sn[j];
			
				//pick max of three and store in next left
				if ((j == this.N.length) && (i == this.M.length)) {
					left = Math.max(this.Sn[j] - this.scoreSet.endGap, Math.max((left - this.scoreSet.endGap), diag + this.scoreSet.getScore(this.M[i-1], this.N[j-1])));
				}
				else if (i == this.M.length) {
					left = Math.max(this.Sn[j] - this.scoreSet.gap, Math.max((left - this.scoreSet.endGap), diag + this.scoreSet.getScore(this.M[i-1], this.N[j-1])));
				}
				else if (j == this.N.length) {
					left = Math.max(this.Sn[j] - this.scoreSet.endGap, Math.max((left - this.scoreSet.gap), diag + this.scoreSet.getScore(this.M[i-1], this.N[j-1])));
				}
				else {
					left = Math.max(this.Sn[j] - this.scoreSet.gap, Math.max((left - this.scoreSet.gap), diag + this.scoreSet.getScore(this.M[i-1], this.N[j-1])));
				}
				diag = this.Sn[j];
				
				//prepares this.Sn for use in next iteration of i loop
				this.Sn[j] = left;

			}	
		}
	
		//linear-space computation of alignment score to middle row
		//reverse pass

		//gaps along bottom

		this.Sp[j2] = 0;
		
		if (i2 == this.M.length) {
			for (var j = j2 - 1; j >= j1; j--) {
				this.Sp[j] = this.Sp[j + 1] - this.scoreSet.endGap;
			}
		}
		else {
			for (var j = j2 - 1; j >= j1; j--) {
				this.Sp[j] = this.Sp[j + 1] - this.scoreSet.gap;
			}
		}

		//now continue up rows to middle row
		var right;
		//for (var i = i2 - 1; i >= i1; i--) {
		for (var i = i2 - 1; i >= middle; i--) {
			diag = this.Sp[j2];
			if (j2 == this.N.length) {
				right = this.Sp[j2] - this.scoreSet.endGap;	
			}
			else {
				right = this.Sp[j2] - this.scoreSet.gap;	
			}

			this.Sp[j2] = right;

			//we need three values to set the score: diag, right, and below to fill in the row			
			for (var j = j2 - 1; j >= j1; j--) {
				//below will be in the this.Sp array, which is holding a mixture of the previous row and the new row
				//var below = this.Sp[j];
				
				//pick max of three and store in next right
				if ((j == 0) && (i == 0)) {
					right = Math.max(this.Sp[j] - this.scoreSet.beginGap, Math.max((right - this.scoreSet.beginGap), diag + this.scoreSet.getScore(this.M[i + 1 - 1], this.N[j + 1 - 1])));		
				}
				else if (j == 0) {
					right = Math.max(this.Sp[j] - this.scoreSet.beginGap, Math.max((right - this.scoreSet.gap), diag + this.scoreSet.getScore(this.M[i + 1 - 1], this.N[j + 1 - 1])));	
				}
				else if (i == 0) {
					right = Math.max(this.Sp[j] - this.scoreSet.gap, Math.max((right - this.scoreSet.beginGap), diag + this.scoreSet.getScore(this.M[i + 1 - 1], this.N[j + 1 - 1])));	
				}
				else {
					right = Math.max(this.Sp[j] - this.scoreSet.gap, Math.max((right - this.scoreSet.gap), diag + this.scoreSet.getScore(this.M[i + 1 - 1], this.N[j + 1 - 1])));		
				}		
				diag = this.Sp[j];
				this.Sp[j] = right;
			}

		}
	
		//now find the value of j that maximizes this.Sn[j] + this.Sp[j]
		//this point will be in the maximum scoring path in the final alignment.
		//once we have this point we can divide the problem into two new problems,
		

		var maxValue = this.Sn[j1] + this.Sp[j1];
		var maxJ = j1;

		for (var j = j1 + 1; j <= j2; j++) {
			if (this.Sn[j] + this.Sp[j] >= maxValue) {
				maxValue = this.Sn[j] + this.Sp[j];
				maxJ = j;
			}
		}

		this.path(i1, j1, middle, maxJ);
		this.path(middle, maxJ, i2, j2);

	}
}

//AlignPairLinear class getAlignedM() method
function getAlignedM() {
	return this.alignedM.join("");
}

//AlignPairLinear class getAlignedN() method
function getAlignedN() {
	return this.alignedN.join("");
}

//AlignPairLinear class setAlignParam method
function setAlignParam (M, N, scoreSet) {
	this.M = M;
	this.N = N;
	this.alignedM = new Array();
	this.alignedN = new Array();
	this.scoreSet = scoreSet;
	this.Sn = new Array(this.N.length);
	this.Sp = new Array(this.N.length);
	this.score = 0;
}

//AlignPairLinear class
function AlignPairLinear () {
	this.M;
	this.N;
	this.alignedM;
	this.alignedN;
	this.scoreSet;
	this.Sn;
	this.Sp;
	this.score;
}

//create and throw away a prototype object
new AlignPairLinear();

//define object methods
AlignPairLinear.prototype.align = align;
AlignPairLinear.prototype.path = path;
AlignPairLinear.prototype.setAlignParam = setAlignParam;
AlignPairLinear.prototype.getAlignedM = getAlignedM;
AlignPairLinear.prototype.getAlignedN = getAlignedN;



// align_pair_quad.js
//Written by Paul Stothard, University of Alberta, Canada

//This class should be used for small alignments,
//since it uses O(nm) memory, where n and m are the sequence lengths.
//For larger alignments use the linear space algorithm implemented
//in align_pair_linear.js

//To use this class: (see pairwise_dna.js for example)
//var alignment = new AlignPairQuad();
//alignment.initializeMatrix(sequenceArrayM, sequenceArrayN, scoreSet);
//alignment.fillMatrix();
//alignment.align();
//var alignedSequenceStringM = alignment.getAlignedM();
//var alignedSequenceStringN = alignment.getAlignedN();


//------------------------------------ Node class
//Node class
function Node() {
	this.value;
	this.tracebackI;
	this.tracebackJ;
}
//------------------------------------

//------------------------------------ AlignPairQuad class
//AlignPairQuad class initializeMatrix method
function initializeMatrix (sequenceOne, sequenceTwo, scoreSet) {


	this.scoreSet = scoreSet;

	this.M = sequenceOne;
	this.N = sequenceTwo;
	this.score = 0;

	//create an two-dimensional array of nodes
	this.nodes = new Array(this.M.length + 1);

	//row i
 	for (var i = 0; i < this.nodes.length; i++) {
   		this.nodes[i] = new Array(this.N.length + 1);
		//column j
   		for (var j = 0; j < this.nodes[i].length; j++) {
      			this.nodes[i][j] = new Node();
   		}
	}


	this.nodes[0][0].value = 0;

	
	//i rows
	for (var i = 1; i < this.nodes.length; i++)	{
		if (this.scoreSet.useBeginGapLeft) {
			this.nodes[i][0].value = this.nodes[i - 1][0].value - this.scoreSet.beginGap;
		}
		else {
			this.nodes[i][0].value = this.nodes[i - 1][0].value - this.scoreSet.gap;
		}
		this.nodes[i][0].tracebackI = i - 1;
		this.nodes[i][0].tracebackJ = 0;
	}

	//j columns
	for (var j = 1; j < this.nodes[0].length; j++)	{
		if (this.scoreSet.useBeginGapTop) {	
			this.nodes[0][j].value = this.nodes[0][j - 1].value - this.scoreSet.beginGap;
		}
		else {
			this.nodes[0][j].value = this.nodes[0][j - 1].value - this.scoreSet.gap;
		}
		this.nodes[0][j].tracebackI = 0;
		this.nodes[0][j].tracebackJ = j - 1;
	}
	
}

//AlignPairQuad class dumpMatrix method
function dumpMatrix () {
	outputWindow.document.write("Dynamic programming matrix i=" + this.nodes.length + " and j=" + this.nodes[0].length);
	outputWindow.document.write("\n");
 	for (var i = 0; i < this.nodes.length; i++) {
   		for (var j = 0; j < this.nodes[i].length; j++) {
			var traceI = this.nodes[i][j].tracebackI;
			var traceJ = this.nodes[i][j].tracebackJ;
			
			if (traceI == undefined) {
				traceI = "u";
			}
			if (traceJ == undefined) {
				traceJ = "u";
			}
			var output = "(" + i + "," + j + ")[" + traceI + "," + traceJ + "]=" + this.nodes[i][j].value;
 			outputWindow.document.write(rightNum(output, "", 20, " "));
   		}
		outputWindow.document.write("\n");
	}
	outputWindow.document.write("\n");

}

//AlignPairQuad class fillMatrix method
function fillMatrix () {

	//i rows
	for (var i = 1; i < this.nodes.length; i++)	{
		//j columns
		for (var j = 1; j < this.nodes[0].length; j++)	{

			var a;
			var b;
			var c;

			//handle end gaps here

			if ((i == this.nodes.length - 1) && (j == this.nodes[0].length - 1)) {
				if (this.scoreSet.useEndGapRight) {
					a = this.nodes[i - 1][j].value - this.scoreSet.endGap;
				}
				else {
					a = this.nodes[i - 1][j].value - this.scoreSet.gap;
				}

				if (this.scoreSet.useEndGapBottom) {
					b = this.nodes[i][j - 1].value - this.scoreSet.endGap;
				}
				else {
					b = this.nodes[i][j - 1].value - this.scoreSet.gap;
				}
			}
			else if (i == this.nodes.length - 1) {
				a = this.nodes[i - 1][j].value - this.scoreSet.gap;
				if (this.scoreSet.useEndGapBottom) {
					b = this.nodes[i][j - 1].value - this.scoreSet.endGap;
				}
				else {
					b = this.nodes[i][j - 1].value - this.scoreSet.gap;
				}
			}
			else if (j == this.nodes[0].length - 1) {
				if (this.scoreSet.useEndGapRight) {
					a = this.nodes[i - 1][j].value - this.scoreSet.endGap;
				}
				else {
					a = this.nodes[i - 1][j].value - this.scoreSet.gap;
				}
				b = this.nodes[i][j - 1].value - this.scoreSet.gap;			
			}
			else {
				a = this.nodes[i - 1][j].value - this.scoreSet.gap;
				b = this.nodes[i][j - 1].value - this.scoreSet.gap;
			}

			c = this.nodes[i - 1][j - 1].value + this.scoreSet.getScore(this.M[i - 1], this.N[j - 1]);

			if ((a >= b) && (a >= c)) {
				this.nodes[i][j].value = a;
				this.nodes[i][j].tracebackI = i - 1;
				this.nodes[i][j].tracebackJ = j;
			}
			else if ((b >= c) && (b >= a)) {
				this.nodes[i][j].value = b;			
				this.nodes[i][j].tracebackI = i;
				this.nodes[i][j].tracebackJ = j - 1;				
			}
			else {
				this.nodes[i][j].value = c;			
				this.nodes[i][j].tracebackI = i - 1;
				this.nodes[i][j].tracebackJ = j - 1;
			}			
		}
	}
	this.score = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1].value;	

}

//AlignPairQuad class align() method
function alignQuad() {
	this.alignedM = new Array();	
	this.alignedN = new Array();
	
	var currentI = this.nodes.length - 1;
	var currentJ = this.nodes[0].length - 1;
 
	var currentNode = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1];

	while ((currentNode.tracebackI != undefined) && (currentNode.tracebackJ != undefined)) {

		if ((currentNode.tracebackI == currentI - 1) && (currentNode.tracebackJ == currentJ - 1)) { 
			this.alignedM.push(this.M.pop());	
			this.alignedN.push(this.N.pop());
		}

		else if (currentNode.tracebackJ == currentJ - 1) {
			this.alignedM.push("-");
			this.alignedN.push(this.N.pop());
		}
		else { 
			this.alignedM.push(this.M.pop());			
			this.alignedN.push("-");			
		}

		currentI = currentNode.tracebackI;
		currentJ = currentNode.tracebackJ;

		currentNode = this.nodes[currentNode.tracebackI][currentNode.tracebackJ];
		
	}

	this.alignedM = this.alignedM.reverse();
	this.alignedN = this.alignedN.reverse();	
}

//AlignPairQuad class getAlignedM() method
function getAlignedM() {
	return this.alignedM.join("");
}

//AlignPairQuad class getAlignedN() method
function getAlignedN() {
	return this.alignedN.join("");
}

//AlignPairQuad class
function AlignPairQuad () {
	this.M;
	this.N;
	this.scoreSet;
	this.nodes;
	this.alignedM;
	this.alignedN;
	this.score;
}

//create and throw away a prototype object
new AlignPairQuad();

//define object methods
AlignPairQuad.prototype.initializeMatrix = initializeMatrix;
AlignPairQuad.prototype.fillMatrix = fillMatrix;
AlignPairQuad.prototype.align = alignQuad;
AlignPairQuad.prototype.getAlignedM = getAlignedM;
AlignPairQuad.prototype.getAlignedN = getAlignedN;
AlignPairQuad.prototype.dumpMatrix = dumpMatrix;




// pairwise_align_protein.html
document.onload = function() { document.main_form.main_submit.focus() }
document.getElementById("submitbtn").onclick = function() { try{pairwiseAlignProtein(document)} catch(e) {alert('The following error was encountered: ' + e);} }
document.getElementById("clearbtn").onclick = function() { document.forms[0].elements[0].value = ' '; document.forms[0].elements[4].value = ' '; }

