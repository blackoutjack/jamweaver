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


// pcr_primer_stats.js
//Written by Paul Stothard, University of Alberta, Canada

function pcrPrimerStats (theDocument) {	

	var newDna = "";
	var title = "";
	var maxInput = 5000;
	var maxPrimerLength = 50;
	var milliMolarSalt = 50;
	var milliMolarMagnesium = 1.5;
	var nanoMolarPrimerTotal = 200;
	var isPhosphorylated = false;

	if (testScript() == false) {
		return false;
	}

	if ((checkFormElement (theDocument.forms[0].elements[0]) == false) || (checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput) == false))	{
		return false;
	}

	molarSalt = (milliMolarSalt/1E3); //convert to molar from millimolar
	molarMagnesium = (milliMolarMagnesium/1E3); //convert to molar from millimolar
	molarPrimerTotal = (nanoMolarPrimerTotal/1E9); //convert to molar from nanomolar
	isPhosphorylated = false;

	//molarSalt affects Salt adjusted Tm and Tm (Nearest neighbor)
	//molarMagnesium affects Tm (Nearest neighbor)
	//molarPrimerTotal affects Tm (Nearest neighbor)
	//isPhosphorylated affects molecular weight

	openWindow("PCR Primer Stats");
	openPre();
	var arrayOfFasta = getArrayOfFasta (theDocument.forms[0].elements[0].value);

	outputWindow.document.write("Global settings:\n");
	if (isPhosphorylated) {
		outputWindow.document.write("-The primers have a 5'-phosphate group.\n");
	}
	else {
		outputWindow.document.write("-The primers do not have a 5'-phosphate group.\n");
	}
	outputWindow.document.write("-Combined concentration of K+ and Na+ in the reaction = " + milliMolarSalt + " millimolar.\n");
	outputWindow.document.write("-Mg+2 concentration in the reaction = " + milliMolarMagnesium + " millimolar.\n");
	outputWindow.document.write("-Primer concentration in the reaction = " + nanoMolarPrimerTotal + " nanomolar.\n");
	outputWindow.document.write('\n');
	outputWindow.document.write('------------------------------------------------------------\n');

	for (var i = 0; i < arrayOfFasta.length; i++)	{
		newDna = getSequenceFromFasta (arrayOfFasta[i]);
		title = getTitleFromFasta (arrayOfFasta[i]);

		newDna = _removeNonPrimer(newDna);

		if (newDna.length == 0) {
			continue;
		}

		if (newDna.length > maxPrimerLength) {
			continue;
		}

		var percentGC = _percentGC(newDna);
		var nearestNeighborTm = _nearestNeighborTm(newDna, molarSalt, molarPrimerTotal, molarMagnesium);
		var selfCompHash = _getSelfComplementarityReport(newDna, 3, 50);
		var hairpinHash = _getHairpinReport(newDna, 3, 50);

		outputWindow.document.write('------------------------------------------------------------\n');
		outputWindow.document.write ('General properties:\n');
		outputWindow.document.write ('-------------------\n');
		outputWindow.document.write(rightNum("Primer name:", "", 32, "") + title + "\n");
		outputWindow.document.write(rightNum("Primer sequence:", "", 32, "") + newDna + "\n");
		outputWindow.document.write(rightNum("Sequence length:", "", 32, "") + newDna.length + "\n");
		outputWindow.document.write(rightNum("Base counts:", "", 32, "") + _baseCounts(newDna) + "\n");
		outputWindow.document.write(rightNum("GC content (%):", "", 32, "") + percentGC + "\n");
		outputWindow.document.write(rightNum("Molecular weight (Daltons):", "", 32, "") + _molecularWeight(newDna, isPhosphorylated) + "\n");
		outputWindow.document.write(rightNum("nmol/A260:", "", 32, "") + _nmolPerA260(newDna) + "\n");
		outputWindow.document.write(rightNum("micrograms/A260:", "", 32, "") + _microgramsPerA260(newDna, isPhosphorylated) + "\n");
		outputWindow.document.write(rightNum("Basic Tm (degrees C):", "", 32, "") + _basicTm(newDna) + "\n");
		outputWindow.document.write(rightNum("Salt adjusted Tm (degrees C):", "", 32, "") + _molarSaltAdjustedTm(newDna, molarSalt) + "\n");
		outputWindow.document.write(rightNum("Nearest neighbor Tm (degrees C):", "", 32, "") + nearestNeighborTm + "\n");
		
		outputWindow.document.write ('\n');
		outputWindow.document.write ('PCR suitability tests (Pass / Warning):\n');
		outputWindow.document.write ('------------------------------------\n');			
		outputWindow.document.write(rightNum("Single base runs:", "", 32, "") + _getBaseRunsReport(newDna, 5) + "\n");
		outputWindow.document.write(rightNum("Dinucleotide base runs:", "", 32, "") + _getDiNucleotideRunsReport(newDna, 5) + "\n");
		outputWindow.document.write(rightNum("Length:", "", 32, "") + _getSuitableLengthReport(newDna, 14, 30) + "\n");
		outputWindow.document.write(rightNum("Percent GC:", "", 32, "") + _getSuitableGCReport(newDna, percentGC, 40, 60) + "\n");
		outputWindow.document.write(rightNum("Tm (Nearest neighbor):", "", 32, "") + _getSuitableTmReport(newDna, nearestNeighborTm, 50, 58) + "\n");
		outputWindow.document.write(rightNum("GC clamp:", "", 32, "") + _getSuitableThreePrimeGC(newDna, 1, 3) + "\n");
		outputWindow.document.write(rightNum("Self-annealing:", "", 32, "") + selfCompHash['report'] + "\n");
		if (selfCompHash['report'] != "Pass") {
			outputWindow.document.write(rightNum(":", "", 32, "") + selfCompHash['upper'] + "\n");
			outputWindow.document.write(rightNum(":", "", 32, "") + selfCompHash['divider'] + "\n");
			outputWindow.document.write(rightNum(":", "", 32, "") + selfCompHash['lower'] + "\n");
		}
		outputWindow.document.write(rightNum("Hairpin formation:", "", 32, "") + hairpinHash['report'] + "\n");
		if (hairpinHash['report'] != "Pass") {
			outputWindow.document.write(rightNum(":", "", 32, "") + hairpinHash['upper']  + "\n");
			outputWindow.document.write(rightNum(":", "", 32, "") + hairpinHash['divider'] + "\n");
			outputWindow.document.write(rightNum(":", "", 32, "") + hairpinHash['lower'] + "\n");
		}
		outputWindow.document.write('------------------------------------------------------------\n');
		outputWindow.document.write('\n');
	}
	closePre();
	closeWindow();
	return true;
}


//Nucleotide Code: Base:
//---------------- -----
//A.................Adenine
//C.................Cytosine
//G.................Guanine
//T (or U)..........Thymine (or Uracil)
//R.................A or G
//Y.................C or T
//S.................G or C
//W.................A or T
//K.................G or T
//M.................A or C
//B.................C or G or T
//D.................A or G or T
//H.................A or C or T
//V.................A or C or G
//N.................any base


function _removeNonPrimer (sequence) {
	sequence.replace(/u/g, "t");
	sequence.replace(/U/g, "T");
	return sequence.replace(/[^gatcryswkmbdhvnGATCRYSWKMBDHVN]/g, "");
}

function _containsOnlyNonDegenerates (sequence) {
    	if (sequence.search(/[^gatc]/i) == -1)	{
 		return true;
    	}
	return false;
}

function _baseCounts (sequence) {
	var numG = _getBaseCount(sequence, "g");
	var numA = _getBaseCount(sequence, "a");
	var numT = _getBaseCount(sequence, "t");
	var numC = _getBaseCount(sequence, "c");
	var numOther = sequence.length - (numG + numA + numT + numC);
	return "G=" + numG + "; A=" + numA + "; T=" + numT + "; C=" + numC + "; Other=" + numOther + ";";
}

function _microgramsPerA260 (sequence, isPhosphorylated) {
	if (_containsOnlyNonDegenerates(sequence)) {
		return _microgramsPerA260NonDegen (sequence, isPhosphorylated);
	}
	else {
		return _microgramsPerA260Degen (sequence, isPhosphorylated);
	}
}

function _microgramsPerA260NonDegen(sequence, isPhosphorylated) {

	var mw = _mw(sequence, isPhosphorylated)
	var result = mw / _getExtinctionCoefficient(sequence);
	return result.toFixed(2);
}

function _microgramsPerA260Degen(sequence, isPhosphorylated) {
	var lowerBoundsSequence = sequence;
	var upperBoundsSequence = sequence;

	//replace all other degenerates with the base with lowest value in lowerBoundsSequence
	lowerBoundsSequence = lowerBoundsSequence.replace(/r/gi, "g");
	lowerBoundsSequence = lowerBoundsSequence.replace(/y/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/s/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/w/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/k/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/m/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/b/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/d/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/h/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/v/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/n/gi, "c");

	//replace all other degenerates with base with highest value in upperBoundsSequence
	upperBoundsSequence = upperBoundsSequence.replace(/r/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/y/gi, "t");
	upperBoundsSequence = upperBoundsSequence.replace(/s/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/w/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/k/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/m/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/b/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/d/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/h/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/v/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/n/gi, "a");

	//swap upper and lower because of how downstream calculation is done
	//return _microgramsPerA260NonDegen(lowerBoundsSequence, isPhosphorylated) + " to " + _microgramsPerA260NonDegen(upperBoundsSequence, isPhosphorylated);

	return _microgramsPerA260NonDegen(upperBoundsSequence, isPhosphorylated) + " to " + _microgramsPerA260NonDegen(lowerBoundsSequence, isPhosphorylated);	

}

function _nmolPerA260 (sequence) {
	if (_containsOnlyNonDegenerates(sequence)) {
		return _nmolPerA260NonDegen (sequence);
	}
	else {
		return _nmolPerA260Degen (sequence);
	}
}

function _nmolPerA260NonDegen(sequence) {
		
	var result = _getExtinctionCoefficient(sequence);
	result = 1 / result * 1000;
	return result.toFixed(2);
}

function _getExtinctionCoefficient(sequence) {
	var dimerValues = _getDimerExtinctionCoefficients();
	var singleValues = _getSingleExtinctionCoefficients();
	var dimerSum = 0;
	var singleSum = 0;
	sequence = sequence.toLowerCase();

	for (var i = 0; i < sequence.length - 1; i++) {
		dimerSum = dimerSum + dimerValues[sequence.charAt(i) + sequence.charAt(i + 1)];
	}

	for (var i = 1; i < sequence.length - 1; i++) {
		singleSum = singleSum + singleValues[sequence.charAt(i)];
	}
	return (2 * dimerSum - singleSum);
}

function _nmolPerA260Degen(sequence) {
	var lowerBoundsSequence = sequence;
	var upperBoundsSequence = sequence;

	//replace all other degenerates with the base with lowest value in lowerBoundsSequence
	lowerBoundsSequence = lowerBoundsSequence.replace(/r/gi, "g");
	lowerBoundsSequence = lowerBoundsSequence.replace(/y/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/s/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/w/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/k/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/m/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/b/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/d/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/h/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/v/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/n/gi, "c");

	//replace all other degenerates with base with highest value in upperBoundsSequence
	upperBoundsSequence = upperBoundsSequence.replace(/r/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/y/gi, "t");
	upperBoundsSequence = upperBoundsSequence.replace(/s/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/w/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/k/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/m/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/b/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/d/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/h/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/v/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/n/gi, "a");

	//swap upper and lower because of how downstream calculation is done
	//return _nmolPerA260NonDegen(lowerBoundsSequence) + " to " + _nmolPerA260NonDegen(upperBoundsSequence);
	return _nmolPerA260NonDegen(upperBoundsSequence) + " to " + _nmolPerA260NonDegen(lowerBoundsSequence);
}

function _percentGC (sequence) {
	if (_containsOnlyNonDegenerates(sequence)) {
		return _percentGCNonDegen (sequence);
	}
	else {
		return _percentGCDegen (sequence);
	}
}

function _percentGCNonDegen (sequence) {

	var numHits = _getBaseCount(sequence, "g") + _getBaseCount(sequence, "c");
	return ((numHits / sequence.length) * 100).toFixed(2);
}

function _percentGCDegen (sequence) {

	var lowerBoundsSequence = sequence;
	var upperBoundsSequence = sequence;

	//replace degenerates that must be g or c with g in both sequences
	lowerBoundsSequence = lowerBoundsSequence.replace(/s/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/s/gi, "g");

	//replace degenerates that must be a or t with a in both sequences
	lowerBoundsSequence = lowerBoundsSequence.replace(/w/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/w/gi, "a");

	//replace all other degenerates with a or t in lowerBoundsSequence
	lowerBoundsSequence = lowerBoundsSequence.replace(/r/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/y/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/k/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/m/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/b/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/d/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/h/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/v/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/n/gi, "a");

	//replace all other degenerates with g or c in upperBoundsSequence
	upperBoundsSequence = upperBoundsSequence.replace(/r/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/y/gi, "c");
	upperBoundsSequence = upperBoundsSequence.replace(/k/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/m/gi, "c");
	upperBoundsSequence = upperBoundsSequence.replace(/b/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/d/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/h/gi, "c");
	upperBoundsSequence = upperBoundsSequence.replace(/v/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/n/gi, "g");

	return _percentGCNonDegen(lowerBoundsSequence) + " to " + _percentGCNonDegen(upperBoundsSequence);
}

function _molecularWeight (sequence, isPhosphorylated) {

	if (_containsOnlyNonDegenerates(sequence)) {
		return _molecularWeightNonDegen (sequence, isPhosphorylated);
	}
	else {
		return _molecularWeightDegen (sequence, isPhosphorylated);
	}
}

function _molecularWeightNonDegen (sequence, isPhosphorylated) {
	return _mw(sequence, isPhosphorylated).toFixed(2);
}

function _mw(sequence, isPhosphorylated) {
	//DNA molecular weight for synthesized oligonucleotides
	var g = _getBaseCount(sequence, "g");
	var a = _getBaseCount(sequence, "a");
	var t = _getBaseCount(sequence, "t");
	var c = _getBaseCount(sequence, "c");
	var phosAdjust = 0;
	if (isPhosphorylated) {
		phosAdjust = 79.0;
	}
	return ((g * 329.21) + (a * 313.21) + (t * 304.2) + (c * 289.18) - 61.96 + phosAdjust);
}

function _molecularWeightDegen (sequence, isPhosphorylated) {

	var lowerBoundsSequence = sequence;
	var upperBoundsSequence = sequence;

	//replace all other degenerates with lightest base possible in lowerBoundsSequence
	lowerBoundsSequence = lowerBoundsSequence.replace(/r/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/y/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/s/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/w/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/k/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/m/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/b/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/d/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/h/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/v/gi, "c");
	lowerBoundsSequence = lowerBoundsSequence.replace(/n/gi, "c");

	//replace all other degenerates with heaviest base possible in upperBoundsSequence
	upperBoundsSequence = upperBoundsSequence.replace(/r/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/y/gi, "t");
	upperBoundsSequence = upperBoundsSequence.replace(/s/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/w/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/k/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/m/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/b/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/d/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/h/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/v/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/n/gi, "g");

	return _molecularWeightNonDegen(lowerBoundsSequence, isPhosphorylated) + " to " + _molecularWeightNonDegen(upperBoundsSequence, isPhosphorylated);
}

function _basicTm (sequence) {
	if (_containsOnlyNonDegenerates(sequence)) {
		return _basicTmNonDegen (sequence);
	}
	else {
		return _basicTmDegen (sequence);
	}
}

function _basicTmNonDegen (sequence) {
	//Simple formula when primer length < 14 bases from
	//Rychlik, W. and Rhoads, R.E. (1989) Nucleic Acids Research 17, 8543
	//Tm = 4C x (number of G's and C's in the primer) + 2C x (number of A's and T's in the primer)
	//
	//When longer use:
	//tm = 64.9C + 41C * (number of G's and C's in the primer - 16.4)/ primer length
	//
	//both assume reaction is carried out in the presence of 50mM monovalent cations
	
	if (sequence.length < 14) {
		var numG = _getBaseCount(sequence, "g");
		var numC = _getBaseCount(sequence, "c");
		var numA = _getBaseCount(sequence, "a");
		var numT = _getBaseCount(sequence, "t");
		return (4 * (numG + numC) + 2 * (numA + numT)).toFixed(0);
	}
	else {
		var numG = _getBaseCount(sequence, "g");
		var numC = _getBaseCount(sequence, "c");
		return (64.9 + 41 * (numG + numC - 16.4) / sequence.length).toFixed(0);	
	}
}

function _basicTmDegen (sequence) {

	var lowerBoundsSequence = sequence;
	var upperBoundsSequence = sequence;

	//replace degenerates that must be g or c with g in both sequences
	lowerBoundsSequence = lowerBoundsSequence.replace(/s/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/s/gi, "g");

	//replace degenerates that must be a or t with a in both sequences
	lowerBoundsSequence = lowerBoundsSequence.replace(/w/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/w/gi, "a");

	//replace all other degenerates with a or t in lowerBoundsSequence
	lowerBoundsSequence = lowerBoundsSequence.replace(/r/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/y/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/k/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/m/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/b/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/d/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/h/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/v/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/n/gi, "a");

	//replace all other degenerates with g or c in upperBoundsSequence
	upperBoundsSequence = upperBoundsSequence.replace(/r/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/y/gi, "c");
	upperBoundsSequence = upperBoundsSequence.replace(/k/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/m/gi, "c");
	upperBoundsSequence = upperBoundsSequence.replace(/b/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/d/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/h/gi, "c");
	upperBoundsSequence = upperBoundsSequence.replace(/v/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/n/gi, "g");

	return _basicTmNonDegen(lowerBoundsSequence) + " to " + _basicTmNonDegen(upperBoundsSequence);

}

//molarSalt in molar concentration
function _molarSaltAdjustedTm (sequence, molarSalt) {
	if (_containsOnlyNonDegenerates(sequence)) {
		return _molarSaltAdjustedTmNonDegen (sequence, molarSalt);
	}
	else {
		return _molarSaltAdjustedTmDegen (sequence, molarSalt);
	}
}

function _molarSaltAdjustedTmNonDegen (sequence, molarSalt) {
	//commonly used formula takes into account the molarSalt concentration of the reaction:
	//Tm = 81.5C + 7.21C x Math.log(molarSalt) + (0.41 x GC) - (675 / primer length);
	//see refs
	//Rychlik, W. and Rhoads, R.E. (1989) Nucl. Acids Res. 17, 8543.
	//PCR Core Systems Technical Bulletin #TB254, Promega Corporation.
	//Sambrook, J., Fritsch, E.F. and Maniatis, T. (1989) Molecular Cloning: A Laboratory Manual, Cold Spring Harbor Laboratory Press, Cold Spring Harbor, NY.
	//Mueller, P.R. et al. (1993) In: Current Protocols in Molecular Biology 15.5, Greene Publishing Associates, Inc. and John Wiley and Sons, New York.

	var gcHits = _getBaseCount(sequence, "g") + _getBaseCount(sequence, "c");
	var pGC = (gcHits / sequence.length) * 100;	
	return (81.5 + 7.21 * Math.log(molarSalt) + (0.41 * pGC) - (675 / sequence.length)).toFixed(0);
		
	
}

function _molarSaltAdjustedTmDegen (sequence, molarSalt) {

	var lowerBoundsSequence = sequence;
	var upperBoundsSequence = sequence;

	//replace degenerates that must be g or c with g in both sequences
	lowerBoundsSequence = lowerBoundsSequence.replace(/s/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/s/gi, "g");

	//replace degenerates that must be a or t with a in both sequences
	lowerBoundsSequence = lowerBoundsSequence.replace(/w/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/w/gi, "a");

	//replace all other degenerates with a or t in lowerBoundsSequence
	lowerBoundsSequence = lowerBoundsSequence.replace(/r/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/y/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/k/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/m/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/b/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/d/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/h/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/v/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/n/gi, "a");

	//replace all other degenerates with g or c in upperBoundsSequence
	upperBoundsSequence = upperBoundsSequence.replace(/r/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/y/gi, "c");
	upperBoundsSequence = upperBoundsSequence.replace(/k/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/m/gi, "c");
	upperBoundsSequence = upperBoundsSequence.replace(/b/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/d/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/h/gi, "c");
	upperBoundsSequence = upperBoundsSequence.replace(/v/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/n/gi, "g");

	return _molarSaltAdjustedTmNonDegen(lowerBoundsSequence, molarSalt) + " to " + _molarSaltAdjustedTmNonDegen(upperBoundsSequence, molarSalt);
}

function _nearestNeighborTm (sequence, molarSalt, molarPrimerTotal, molarMagnesium) {
	if (_containsOnlyNonDegenerates(sequence)) {
		return _nearestNeighborTmNonDegen (sequence, molarSalt, molarPrimerTotal, molarMagnesium);
	}
	else {
		return _nearestNeighborTmDegen (sequence, molarSalt, molarPrimerTotal, molarMagnesium);
	}
}

function _nearestNeighborTmNonDegen (sequence, molarSalt, molarPrimerTotal, molarMagnesium) {
	//The most sophisticated Tm calculations take into account the exact sequence and base stacking parameters, not just the base composition.
	//Tm = ((1000* dh)/(ds+(R * Math.log(primer concentration))))-273.15;
	//Borer P.N. et al. (1974)  J. Mol. Biol. 86, 843.
	//SantaLucia, J. (1998) Proc. Nat. Acad. Sci. USA 95, 1460.
	//Allawi, H.T. and SantaLucia, J. Jr. (1997) Biochemistry 36, 10581.
	//von Ahsen N. et al. (1999) Clin. Chem. 45, 2094.

	sequence = sequence.toLowerCase();

	var R = 1.987; //universal gas constant in Cal/degrees C * mol
	var ds = 0;    //cal/Kelvin/mol
	var dh = 0;    //kcal/mol

	//perform salt correction
	var correctedSalt = molarSalt + molarMagnesium * 140; //adjust for greater stabilizing effects of Mg compared to Na or K. See von Ahsen et al 1999
	ds = ds + 0.368 * (sequence.length - 1) * Math.log(correctedSalt); //from von Ahsen et al 1999

	//perform terminal corrections
	var termDsCorr = _getTerminalCorrectionsDsHash();
	ds = ds + termDsCorr[sequence.charAt(0)];
	ds = ds + termDsCorr[sequence.charAt(sequence.length - 1)];

	var termDhCorr = _getTerminalCorrectionsDhHash();
	dh = dh + termDhCorr[sequence.charAt(0)];
	dh = dh + termDhCorr[sequence.charAt(sequence.length - 1)];

	var dsValues = _getDsHash();
	var dhValues = _getDhHash();

	for (var i = 0; i < sequence.length - 1; i++) {
		ds = ds + dsValues[sequence.charAt(i) + sequence.charAt(i + 1)];
		dh = dh + dhValues[sequence.charAt(i) + sequence.charAt(i + 1)];
	}
	return (((1000 * dh) / (ds + (R * Math.log(molarPrimerTotal / 2)))) - 273.15).toFixed(2);
}

function _nearestNeighborTmDegen (sequence, molarSalt, molarPrimerTotal, molarMagnesium) {

	var lowerBoundsSequence = sequence;
	var upperBoundsSequence = sequence;

	//replace degenerates that must be g or c with g in both sequences
	lowerBoundsSequence = lowerBoundsSequence.replace(/s/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/s/gi, "g");

	//replace degenerates that must be a or t with a in both sequences
	lowerBoundsSequence = lowerBoundsSequence.replace(/w/gi, "a");
	upperBoundsSequence = upperBoundsSequence.replace(/w/gi, "a");

	//replace all other degenerates with a or t in lowerBoundsSequence
	lowerBoundsSequence = lowerBoundsSequence.replace(/r/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/y/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/k/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/m/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/b/gi, "t");
	lowerBoundsSequence = lowerBoundsSequence.replace(/d/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/h/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/v/gi, "a");
	lowerBoundsSequence = lowerBoundsSequence.replace(/n/gi, "a");

	//replace all other degenerates with g or c in upperBoundsSequence
	upperBoundsSequence = upperBoundsSequence.replace(/r/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/y/gi, "c");
	upperBoundsSequence = upperBoundsSequence.replace(/k/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/m/gi, "c");
	upperBoundsSequence = upperBoundsSequence.replace(/b/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/d/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/h/gi, "c");
	upperBoundsSequence = upperBoundsSequence.replace(/v/gi, "g");
	upperBoundsSequence = upperBoundsSequence.replace(/n/gi, "g");

	return _nearestNeighborTmNonDegen(lowerBoundsSequence, molarSalt, molarPrimerTotal, molarMagnesium) + " to " + _nearestNeighborTmNonDegen(upperBoundsSequence, molarSalt, molarPrimerTotal, molarMagnesium);

}

function _getBaseCount (sequence, base) {
	var basePattern = new RegExp (base, "gi");
	if (sequence.search(basePattern) != -1)	{
		return (sequence.match(basePattern)).length;
	}
	else {
		return 0;
	}
}

function _getTerminalCorrectionsDsHash() {
	//SantaLucia, J. (1998) Proc. Nat. Acad. Sci. USA 95, 1460.
	var hash = {};
	hash['g'] = -2.8;
	hash['a'] = 4.1;
	hash['t'] = 4.1;
	hash['c'] = -2.8;
	return hash;
}

function _getTerminalCorrectionsDhHash() {
	//SantaLucia, J. (1998) Proc. Nat. Acad. Sci. USA 95, 1460.
	var hash = {};
	hash['g'] = 0.1;
	hash['a'] = 2.3;
	hash['t'] = 2.3;
	hash['c'] = 0.1;
	return hash;
}

function _getDsHash() {
	//SantaLucia, J. (1998) Proc. Nat. Acad. Sci. USA 95, 1460.
	var hash = {};
	hash['gg'] = -19.9;
	hash['ga'] = -22.2;
	hash['gt'] = -22.4;
	hash['gc'] = -27.2;

	hash['ag'] = -21.0;
	hash['aa'] = -22.2;
	hash['at'] = -20.4;
	hash['ac'] = -22.4;

	hash['tg'] = -22.7;
	hash['ta'] = -21.3;
	hash['tt'] = -22.2;
	hash['tc'] = -22.2;

	hash['cg'] = -27.2;
	hash['ca'] = -22.7;
	hash['ct'] = -21.0;
	hash['cc'] = -19.9;

	return hash;
}

function _getDhHash() {
	//SantaLucia, J. (1998) Proc. Nat. Acad. Sci. USA 95, 1460.
	var hash = {};
	hash['gg'] = -8.0;
	hash['ga'] = -8.2;
	hash['gt'] = -8.4;
	hash['gc'] = -10.6;

	hash['ag'] = -7.8;
	hash['aa'] = -7.9;
	hash['at'] = -7.2;
	hash['ac'] = -8.4;

	hash['tg'] = -8.5;
	hash['ta'] = -7.2;
	hash['tt'] = -7.9;
	hash['tc'] = -8.2;

	hash['cg'] = -10.6;
	hash['ca'] = -8.5;
	hash['ct'] = -7.8;
	hash['cc'] = -8.0;

	return hash;
}

function _getDimerExtinctionCoefficients() {
	//netprimer documentation
	var hash = {};
	hash['gg'] = 10.8;
	hash['ga'] = 12.6;
	hash['gt'] = 10.0;
	hash['gc'] = 8.8;

	hash['ag'] = 12.5;
	hash['aa'] = 13.7;
	hash['at'] = 11.4;
	hash['ac'] = 10.6;

	hash['tg'] = 9.5;
	hash['ta'] = 11.7;
	hash['tt'] = 8.4;
	hash['tc'] = 8.1;

	hash['cg'] = 9.0;
	hash['ca'] = 10.6;
	hash['ct'] = 7.6;
	hash['cc'] = 7.3;

	return hash;
}

function _getSingleExtinctionCoefficients() {
	//netprimer documentation
	var hash = {};
	hash['g'] = 11.5;
	hash['a'] = 15.4;
	hash['t'] = 8.7;
	hash['c'] = 7.4;

	return hash;
}

function _getBaseRunsReport(sequence, minRunLength) {
	var report = "";
	var hasRun = false;
	var nucleotides = ['G', 'A', 'T', 'C'];

	for (var i = 0; i < nucleotides.length; i++) {
		if (_hasRunOfBases(sequence, nucleotides[i], minRunLength)) {
			hasRun = true;
			report = report + "Contains run of " + nucleotides[i] + "'s; ";
		}
	}

	if (hasRun) {
		return "Warning: " + report;
	}
	else {
		return "Pass";
	}

}

function _getDiNucleotideRunsReport(sequence, minRunLength) {
	var report = "";
	var hasRun = false;
	var diNucleotides = ['GA', 'GT', 'GC', 'AG', 'AT', 'AC', 'TG', 'TA', 'TC', 'CG', 'CA', 'CT'];

	for (var i = 0; i < diNucleotides.length; i++) {
		if (_hasRunOfBases(sequence, diNucleotides[i], minRunLength)) {
			hasRun = true;
			report = report + "Contains run of " + diNucleotides[i] + "'s; ";
		}
	}

	if (hasRun) {
		return "Warning: " + report;
	}
	else {
		return "Pass";
	}

}

function _hasRunOfBases(sequence, base, minRunLength) {
	var basePattern = new RegExp ("(?:" + base + "){" + minRunLength + ",}", "gi");
	if (sequence.search(basePattern) != -1)	{
		return (sequence.match(basePattern)).length;
	}
	else {
		return 0;
	}	
}

function _getSuitableLengthReport(sequence, minSuitableLength, maxSuitableLength) {
	var report = "";
	var hasProblem = false;
	
	if (sequence.length < minSuitableLength) {
		hasProblem = true;
		report = report + "Contains fewer than " + minSuitableLength + " bases; ";
	}

	if (sequence.length > maxSuitableLength) {
		hasProblem = true;
		report = report + "Contains more than " + maxSuitableLength + " bases; ";
	}

	if (hasProblem) {
		return "Warning: " + report;
	}
	else {
		return "Pass";
	}	
}

function _getSuitableGCReport(sequence, percentGCRange, minSuitableGC, maxSuitableGC) {
	var report = "";
	var hasProblem = false;
	var lowerCalculated;
	var upperCalculated;
	
	//percentGCRange may be a single number or a string containing something like "40 to 60";
	var rangePattern = new RegExp ("([\d\.]+)\D+([\d\.]+)", "gi");
	if (percentGCRange.search(rangePattern) != -1)	{
		lowerCalculated = parseFloat($1);
		upperCalculated = parseFloat($2);
	}
	else {
		lowerCalculated = parseFloat(percentGCRange);
		upperCalculated = parseFloat(percentGCRange);
	}
	
	if (lowerCalculated < minSuitableGC) {
		hasProblem = true;
		report = report + "%GC is less than " + minSuitableGC + "; ";
	}

	if (upperCalculated > maxSuitableGC) {
		hasProblem = true;
		report = report + "%GC is greater than " + maxSuitableGC + "; ";
	}

	if (hasProblem) {
		return "Warning: " + report;
	}
	else {
		return "Pass";
	}	
}


function _getSuitableLengthReport(sequence, minSuitableLength, maxSuitableLength) {
	var report = "";
	var hasProblem = false;
	
	if (sequence.length < minSuitableLength) {
		hasProblem = true;
		report = report + "Contains fewer than " + minSuitableLength + " bases; ";
	}

	if (sequence.length > maxSuitableLength) {
		hasProblem = true;
		report = report + "Contains more than " + maxSuitableLength + " bases; ";
	}

	if (hasProblem) {
		return "Warning: " + report;
	}
	else {
		return "Pass";
	}	
}

function _getSuitableTmReport(sequence, range, minSuitable, maxSuitable) {
	var report = "";
	var hasProblem = false;
	var lowerCalculated;
	var upperCalculated;
	
	//range may be a single number or a string containing something like "40 to 60";
	var rangePattern = new RegExp ("([\d\.]+)\D+([\d\.]+)", "gi");
	if (range.search(rangePattern) != -1)	{
		lowerCalculated = parseFloat($1);
		upperCalculated = parseFloat($2);
	}
	else {
		lowerCalculated = parseFloat(range);
		upperCalculated = parseFloat(range);
	}
	
	if (lowerCalculated < minSuitable) {
		hasProblem = true;
		report = report + "Tm is less than " + minSuitable + "; ";
	}

	if (upperCalculated > maxSuitable) {
		hasProblem = true;
		report = report + "Tm is greater than " + maxSuitable + "; ";
	}

	if (hasProblem) {
		return "Warning: " + report;
	}
	else {
		return "Pass";
	}	
}

function _getSuitableThreePrimeGC(sequence, minSuitable, maxSuitable) {
	var threePrimeEnd;
	var desiredThreePrimeEndSize = 5;
	var report = "";
	var gcCounts;
	var hasProblem = false;
	if (sequence.length >= desiredThreePrimeEndSize) {
		threePrimeEnd = sequence.substr(sequence.length - desiredThreePrimeEndSize, 5);
	}
	else {
		threePrimeEnd = sequence;
	}

	gcCounts = _getBaseCount(threePrimeEnd, "g") + _getBaseCount(threePrimeEnd, "c");

	if (gcCounts < minSuitable) {
		hasProblem = true;
		report = report + "There are less than " + minSuitable + " G's or C's in the last " + threePrimeEnd.length + " bases; ";		
	}

	if (gcCounts > maxSuitable) {
		hasProblem = true;
		report = report + "There are more than " + maxSuitable + " G's or C's in the last " + threePrimeEnd.length + " bases; ";
	}

	if (hasProblem) {
		return "Warning: " + report;
	}
	else {
		return "Pass";
	}

}

function _getSelfComplementarityReport(sequence, maxContig, maxPercentIdent) {
	var matchScore = 1;
	var mismatchScore = -1;
	var gapPenalty = 99;
	var beginGapPenalty = 0;
	var endGapPenalty = 0;

	var returnHash = {};
	returnHash['report'] = "";
	returnHash['upper'] = "";
	returnHash['lower'] = "";
	returnHash['divider'] = "";

	var report = "";
	var hasProblem = false;
	var sequenceLength = sequence.length;

	var matrix = new Complementarity();
	matrix.setMatch(matchScore);
	matrix.setMismatch(mismatchScore);

	var scoreSet = new ScoreSet();
	scoreSet.setScoreSetParam(matrix, gapPenalty, beginGapPenalty, endGapPenalty);

	var rev = reverse(sequence);
	//convert String to Array
	sequence = sequence.match(/./g);
	rev = rev.match(/./g);

	//align_pair_quad.js
	alignment = new AlignPairQuad();
	alignment.initializeMatrix(sequence, rev, scoreSet);
	alignment.fillMatrix();
	alignment.align();

	//aligned output will be something like:
	//cttttgagcaagttcagcctggttaag--
	//--gaattggtccgacttgaacgagttttc
	var seqAligned = (alignment.getAlignedM()).replace(/\-/g," ");
	var revAligned = (alignment.getAlignedN()).replace(/\-/g," ");	
	
	var score = alignment.score;

	var divider = new Array();
	var maxContiguous = 0;
	var totalMatches = 0;
	var contiguous = 0;
	for (var i = 0; i < seqAligned.length; i++)	{
		if (scoreSet.getScore(seqAligned.charAt(i), revAligned.charAt(i)) == matchScore) {
			divider.push("|");
			contiguous++;
			totalMatches++;
		}
		else {
			divider.push(" ");
			contiguous = 0;
		}
		
		if (contiguous > maxContiguous) {
			maxContiguous = contiguous;	
		}
	}

	if (maxContiguous > maxContig) {
		hasProblem = true;
		report = report + "There are more than " + maxContig + " self-annealing bases in a row; ";
	}

	if (((totalMatches / sequenceLength) * 100) > maxPercentIdent) {
		hasProblem = true;
		report = report + "More than " + maxPercentIdent  + " percent of the bases are self-annealing; ";
	}

	if (hasProblem) {
		report = "Warning: " + report;
	}
	else {
		report = "Pass";
	}

	returnHash['report'] = report;
	returnHash['upper'] = seqAligned;
	returnHash['lower'] = revAligned;
	returnHash['divider'] = divider.join("");

	return returnHash;

}

function _getHairpinReport(sequence, maxContig, maxPercentIdent) {
	
	var upper = sequence;
	upper = upper.match(/./g);
	var loop = "";
	var lower = new Array();

	var returnHash = {};
	returnHash['report'] = "";
	returnHash['upper'] = "";
	returnHash['lower'] = "";
	returnHash['divider'] = "";
	
	var topScore = 0;
	var score;
	var u;
	var l;
	var topScoreUpper = sequence;
	var topScoreLower = "";
	var topScoreLoop = "";	

	var matchScore = 1;
	var mismatchScore = -1;
	var gapPenalty = 99;
	var beginGapPenalty = 0;
	var endGapPenalty = 0;

	var report = "";
	var hasProblem = false;
	var sequenceLength = sequence.length;

	var matrix = new Complementarity();
	matrix.setMatch(matchScore);
	matrix.setMismatch(mismatchScore);

	var scoreSet = new ScoreSet();
	scoreSet.setScoreSetParam(matrix, gapPenalty, beginGapPenalty, endGapPenalty);
	
	while(upper.length > 0) {
		score = 0;
		if (loop == "") {
			loop = upper.pop();
		}
		else {
			lower.push(loop);
			loop = "";
		}

		//determine score
		u = upper.length - 1;
		l = lower.length - 1;
		while ((u >= 0) && (l >= 0)) {
			score = score + scoreSet.getScore(upper[u], lower[l]);
			u--;
			l--;
		}

		if (score > topScore) {
			topScore = score;
			topScoreUpper = upper.join("");
			topScoreLower = lower.join("");
			topScoreLoop = loop;				
		}	

	}

	//format top scoring hit and return

	var upperLowerDiff = topScoreUpper.length - topScoreLower.length;
	if (upperLowerDiff > 0) {
		for (var i = 0; i < upperLowerDiff; i++)	{
			topScoreLower = " " + topScoreLower;
		}
	}
	else if (upperLowerDiff < 0) {
		for (var i = upperLowerDiff; i < 0; i++)	{
			topScoreUpper = " " + topScoreUpper;
		}
	}

	var maxContiguous = 0;
	var totalMatches = 0;
	var contiguous = 0;
	var divider = new Array();
	//add vertical lines between matches
	for (var i = 0; i < topScoreUpper.length; i++)	{
		if (scoreSet.getScore(topScoreUpper.charAt(i), topScoreLower.charAt(i)) == matchScore) {
			divider.push("|");
			contiguous++;
			totalMatches++;
		}
		else {
			divider.push(" ");		
			contiguous = 0;
		}
		
		if (contiguous > maxContiguous) {
			maxContiguous = contiguous;	
		}
	}

	if (maxContiguous > maxContig) {
		hasProblem = true;
		report = report + "There are more than " + maxContig + " hairpin bases in a row; ";
	}

	if (((totalMatches / sequenceLength) * 100) > maxPercentIdent) {
		hasProblem = true;
		report = report + "More than " + maxPercentIdent  + " percent of the bases are in a hairpin; ";
	}

	if (hasProblem) {
		report = "Warning: " + report;
	}
	else {
		report = "Pass";
	}

	if (topScoreLoop == "") {
		topScoreLoop = ")";
	}

	returnHash['report'] = report;
	returnHash['upper'] = topScoreUpper;
	returnHash['divider'] = divider.join("") + topScoreLoop;
	returnHash['lower'] = topScoreLower;

	return returnHash;	
}


//I wrote these classes originally in pairwise_align_dna.js
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


//------------------------------------ ScoringMatrix abstract class
//ScoringMatrix getScore method
function scoringMatrix_getScore(r1, r2) {
	r1 = r1.toLowerCase();
	r2 = r2.toLowerCase();
	if (((r1 == "g") && (r2 == "c")) || ((r2 == "g") && (r1 == "c"))) {
		return this.match;
	}
	else if (((r1 == "a") && (r2 == "t")) || ((r2 == "a") && (r1 == "t"))) {
		return this.match;
	}
	else {
		return this.mismatch;
	}
}

//ScoringMatrix class
function ScoringMatrix() {
	this.mismatch;
	this.match;
}

//create and throw away a prototype object
new ScoringMatrix();

//define object methods
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;

//------------------------------------ Complementarity class extends ScoringMatrix Class
//Complementarity class setMismatch method
function setMismatch(mismatchScore) {
	this.mismatch = mismatchScore;
}

//Complementarity class setMatch method
function setMatch(matchScore) {
	this.match = matchScore;
}

//Complementarity class
function Complementarity () {
}

Complementarity.prototype = new ScoringMatrix();
Complementarity.prototype.setMismatch = setMismatch;
Complementarity.prototype.setMatch = setMatch;


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




// pcr_primer_stats.html
document.onload = function() { document.main_form.main_submit.focus() }
document.getElementById("submitbtn").onclick = function() { try{pcrPrimerStats(document)} catch(e) {alert('The following error was encountered: ' + e);} }
document.getElementById("clearbtn").onclick = function() { document.forms[0].elements[0].value = ' '; document.forms[0].elements[4].value = ' '; }

