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

// sms_restriction_sites.js
//Written by Paul Stothard, University of Alberta, Canada

function getRestrictionSiteString (type) {
	if (type.toLowerCase() == "standard") {
	    return "/aggcct/ (AatI agg|cct)3," +
	    "/gacgtc/ (AatII gacgt|c)1," +
	    "/tgcgca/ (Acc16I tgc|gca)3," +
	    "/cgcg/ (AccII cg|cg)2," +
	    "/tccgga/ (AccIII t|ccgga)5," +
	    "/aacgtt/ (AclI aa|cgtt)4," +
	    "/cacgtg/ (AcvI cac|gtg)3," +
	    "/gtac/ (AfaI gt|ac)2," +
	    "/agcgct/ (AfeI agc|gct)3," +
	    "/cttaag/ (AflII c|ttaag)5," +
	    "/accggt/ (AgeI a|ccggt)5," +
	    "/actagt/ (AhlI a|ctagt)5," +
	    "/gtgcac/ (Alw441 g|tgcac)5," +
	    "/agct/ (AluI ag|ct)2," +
	    "/agcgct/ (Aor51HI agc|gct)3," +
	    "/gggccc/ (ApaI gggcc|c)1," +
	    "/gtgcac/ (ApaLI g|tgcac)5," +
	    "/ggcgcgcc/ (AscI gg|cgcgcc)6," +
	    "/attaat/ (AseI at|taat)4," +
	    "/ggtacc/ (Asp718I g|gtacc)5," +
	    "/ttcgaa/ (AsuII tt|cgaa)4," +
	    "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5," +
	    "/tgcgca/ (AviII tgc|gca)3," +
	    "/cctagg/ (AvrII c|ctagg)5," +
	    "/tggcca/ (BalI tgg|cca)3," +
	    "/ggatcc/ (BamHI g|gatcc)5," +
	    "/atcgat/ (BanIII at|cgat)4," +
	    "/ggcgcc/ (BbeI ggcgc|c)1," +
	    "/cacgtg/ (BbrPI cac|gtg)3," +
	    "/gcatgc/ (BbuI gcatg|c)1," +
	    "/actagt/ (BcuI a|ctagt)5," +
	    "/tgatca/ (BclI t|gatca)5," +
	    "/ctag/ (BfaI c|tag)3," +
	    "/cttaag/ (BfrI c|ttaag)5," +
	    "/atgcat/ (BfrBI atg|cat)3," +
	    "/agatct/ (BglII a|gatct)5," +
	    "/cctagg/ (BlnI c|ctagg)5," +
	    "/atcgat/ (BseCI at|cgat)4," +
	    "/gcgcgc/ (BsePI g|cgcgc)5," +
	    "/cggccg/ (BseX3I c|ggccg)5," +
	    "/accggt/ (BshTI a|ccggt)5," +
	    "/tgtaca/ (Bsp1407I t|gtaca)5," +
	    "/ccatgg/ (Bsp19I c|catgg)5," +
	    "/atcgat/ (BspDI at|cgat)4," +
	    "/tccgga/ (BspEI t|ccgga)5," +
	    "/tgtaca/ (BsrGI t|gtaca)5," +
	    "/gcgcgc/ (BssHII g|cgcgc)5," +
	    "/cgcg/ (BstUI cg|cg)2," +
	    "/atcgat/ (ClaI at|cgat)4," +
	    "/gatc/ (DpnII |gatc)4," +
	    "/tttaaa/ (DraI ttt|aaa)3," +
	    "/cggccg/ (EagI c|ggccg)5," +
	    "/gaattc/ (EcoRI g|aattc)5," +
	    "/gatatc/ (EcoRV gat|atc)3," +
	    "/ggcgcc/ (EgeI ggc|gcc)3," +
	    "/ggccggcc/ (FseI ggccgg|cc)2," +
	    "/tgcgca/ (FspI tgc|gca)3," +
	    "/ggcc/ (HaeIII gg|cc)2," +
	    "/gt[cty][agr]ac/ (HincII gty|rac)3," +
	    "/aagctt/ (HindIII a|agctt)5," +
	    "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4," +
	    "/gttaac/ (HpaI gtt|aac)3," +
	    "/ccgg/ (HpaII c|cgg)3," +
	    "/ggcgcc/ (KasI g|gcgcc)5," +
	    "/ggtacc/ (KpnI ggtac|c)1," +
	    "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5," +
	    "/caattg/ (MfeI c|aattg)5," +
	    "/acgcgt/ (MluI a|cgcgt)5," +
	    "/tggcca/ (MscI tgg|cca)3," +
	    "/ttaa/ (MseI t|taa)3," +
	    "/ccgg/ (MspI c|cgg)3," +
	    "/gccggc/ (NaeI gcc|ggc)3," +
	    "/ggcgcc/ (NarI gg|cgcc)4," +
	    "/ccatgg/ (NcoI c|catgg)5," +
	    "/catatg/ (NdeI ca|tatg)4," +
	    "/gatc/ (NdeII |gatc)4," +
	    "/gccggc/ (NgoMIV g|ccggc)5," +
	    "/gctagc/ (NheI g|ctagc)5," +
	    "/catg/ (NlaIII catg|)0," +
	    "/gcggccgc/ (NotI gc|ggccgc)6," +
	    "/tcgcga/ (NruI tcg|cga)3," +
	    "/atgcat/ (NsiI atgca|t)1," +
	    "/ttaattaa/ (PacI ttaat|taa)3," +
	    "/acatgt/ (PciI a|catgt)5," +
	    "/ggcc/ (PhoI gg|cc)2," +
	    "/gtttaaac/ (PmeI gttt|aaac)4," +
	    "/cacgtg/ (PmlI cac|gtg)3," +
	    "/ttataa/ (PsiI tta|taa)3," +
	    "/ctgcag/ (PstI ctgca|g)1," +
	    "/cgatcg/ (PvuI cgat|cg)2," +
	    "/cagctg/ (PvuII cag|ctg)3," +
	    "/gtac/ (RsaI gt|ac)2," +
	    "/gagctc/ (SacI gagct|c)1," +
	    "/ccgcgg/ (SacII ccgc|gg)2," +
	    "/gtcgac/ (SalI g|tcgac)5," +
	    "/cctgcagg/ (SbfI cctgca|gg)2," +
	    "/agtact/ (ScaI agt|act)3," +
	    "/ggcgcc/ (SfoI ggc|gcc)3," +
	    "/cccggg/ (SmaI ccc|ggg)3," +
	    "/tacgta/ (SnaBI tac|gta)3," +
	    "/actagt/ (SpeI a|ctagt)5," +
	    "/gcatgc/ (SphI gcatg|c)1," +
	    "/aatatt/ (SspI aat|att)3," +
	    "/gagctc/ (SstI gagct|c)1," +
	    "/ccgcgg/ (SstII ccgc|gg)2," +
	    "/aggcct/ (StuI agg|cct)3," +
	    "/atttaaat/ (SwaI attt|aaat)4," +
	    "/tcga/ (TaqI t|cga)3," +
	    "/ctcgag/ (TliI c|tcgag)5," +
	    "/attaat/ (VspI at|taat)4," +
	    "/tctaga/ (XbaI t|ctaga)5," +
	    "/ctcgag/ (XhoI c|tcgag)5," +
	    "/cccggg/ (XmaI c|ccggg)5";
	}
	
	return true;
}

// sms_genetic_codes.js
//Written by Paul Stothard, University of Alberta, Canada

function getGeneticCodeString (type) {

//  The Standard Code (transl_table=1)
//    AAs  = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//  Starts = ---M---------------M---------------M----------------------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG

	if ((type.toLowerCase() == "standard") || (type.toLowerCase() == "transl_table=1")) {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[ctuy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][atcuwmhy]/=I," +
	    "/aa[agr]/=K," +
	    "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," +
	    "/a[tu]g/=M," +
	    "/aa[tucy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]/=Q," +
	    "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," +
	    "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," +
	    "/ac[acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]gg/=W," +
	    "/[tu]a[ctuy]/=Y," +
	    "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
	}

//  The Vertebrate Mitochondrial Code (transl_table=2)
//Standard = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//    AAs  = FFLLSSSSYY**CCWWLLLLPPPPHHQQRRRRIIMMTTTTNNKKSS**VVVVAAAADDEEGGGG
//  Starts = --------------------------------MMMM---------------M------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG


	if (type.toLowerCase() == "transl_table=2") {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[ctuy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][tcuy]/=I," +
	    "/aa[agr]/=K," +
	    "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," +
	    "/a[tu][agr]/=M," +
	    "/aa[tucy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]/=Q," +
	    "/cg[acgturyswkmbdhvn]/=R," +
	    "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," +
	    "/ac[acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]g[agr]/=W," +
	    "/[tu]a[ctuy]/=Y," +
	    "/[tu]a[agr]|ag[agr]/=*";
	}


//  The Yeast Mitochondrial Code (transl_table=3)
//Standard = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//    AAs  = FFLLSSSSYY**CCWWTTTTPPPPHHQQRRRRIIMMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//  Starts = ----------------------------------MM----------------------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG


	if (type.toLowerCase() == "transl_table=3") {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[ctuy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][tcuy]/=I," +
	    "/aa[agr]/=K," +
	    "/[tu][tu][agr]/=L," +
	    "/a[tu][agr]/=M," +
	    "/aa[tucy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]/=Q," +
	    "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," +
	    "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," +
	    "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]g[agr]/=W," +
	    "/[tu]a[ctuy]/=Y," +
	    "/[tu]a[agr]/=*";
	}

//  The Mold, Protozoan, and Coelenterate Mitochondrial Code and the Mycoplasma/Spiroplasma Code (transl_table=4)
//Standard = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//    AAs  = FFLLSSSSYY**CCWWLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//  Starts = --MM---------------M------------MMMM---------------M------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG

	if (type.toLowerCase() == "transl_table=4") {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[ctuy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][atcuwmhy]/=I," +
	    "/aa[agr]/=K," +
	    "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," +
	    "/a[tu]g/=M," +
	    "/aa[tucy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]/=Q," +
	    "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," +
	    "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," +
	    "/ac[acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]g[agr]/=W," +
	    "/[tu]a[ctuy]/=Y," +
	    "/[tu]a[agr]/=*";
	}

//  The Invertebrate Mitochondrial Code (transl_table=5)
//Standard = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//    AAs  = FFLLSSSSYY**CCWWLLLLPPPPHHQQRRRRIIMMTTTTNNKKSSSSVVVVAAAADDEEGGGG
//  Starts = ---M----------------------------MMMM---------------M------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG

	if (type.toLowerCase() == "transl_table=5") {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[ctuy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][tcuy]/=I," +
	    "/aa[agr]/=K," +
	    "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," +
	    "/a[tu][agr]/=M," +
	    "/aa[tucy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]/=Q," +
	    "/cg[acgturyswkmbdhvn]/=R," +
	    "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," +
	    "/ac[acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]g[agr]/=W," +
	    "/[tu]a[ctuy]/=Y," +
	    "/[tu]a[agr]/=*";
	}

//  The Ciliate, Dasycladacean and Hexamita Nuclear Code (transl_table=6)
//Standard = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//    AAs  = FFLLSSSSYYQQCC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//  Starts = -----------------------------------M----------------------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG

	if (type.toLowerCase() == "transl_table=6") {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[ctuy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][atcuwmhy]/=I," +
	    "/aa[agr]/=K," +
	    "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," +
	    "/a[tu]g/=M," +
	    "/aa[tucy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q," +
	    "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," +
	    "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," +
	    "/ac[acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]gg/=W," +
	    "/[tu]a[ctuy]/=Y," +
	    "/[tu]ga/=*";
	}


//  The Echinoderm and Flatworm Mitochondrial Code (transl_table=9)
//Standard = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//    AAs  = FFLLSSSSYY**CCWWLLLLPPPPHHQQRRRRIIIMTTTTNNNKSSSSVVVVAAAADDEEGGGG
//  Starts = -----------------------------------M---------------M------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG

	if (type.toLowerCase() == "transl_table=9") {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[ctuy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][atcuwmhy]/=I," +
	    "/aag/=K," +
	    "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," +
	    "/a[tu]g/=M," +
	    "/aa[atcuwmhy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]/=Q," +
	    "/cg[acgturyswkmbdhvn]/=R," +
	    "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," +
	    "/ac[acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]g[agr]/=W," +
	    "/[tu]a[ctuy]/=Y," +
	    "/[tu]a[agr]/=*";
	}


//  The Euplotid Nuclear Code (transl_table=10)
//Standard = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//    AAs  = FFLLSSSSYY**CCCWLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//  Starts = -----------------------------------M----------------------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG

	if (type.toLowerCase() == "transl_table=10") {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[atcuwmhy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][atcuwmhy]/=I," +
	    "/aa[agr]/=K," +
	    "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," +
	    "/a[tu]g/=M," +
	    "/aa[tucy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]/=Q," +
	    "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," +
	    "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," +
	    "/ac[acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]gg/=W," +
	    "/[tu]a[ctuy]/=Y," +
	    "/[tu]a[agr]/=*";
	}

//  The Bacterial and Plant Plastid Code (transl_table=11)
//Standard = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//    AAs  = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//  Starts = ---M---------------M------------MMMM---------------M------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
	
	if (type.toLowerCase() == "transl_table=11") {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[ctuy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][atcuwmhy]/=I," +
	    "/aa[agr]/=K," +
	    "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," +
	    "/a[tu]g/=M," +
	    "/aa[tucy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]/=Q," +
	    "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," +
	    "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," +
	    "/ac[acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]gg/=W," +
	    "/[tu]a[ctuy]/=Y," +
	    "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
	}


//  The Alternative Yeast Nuclear Code (transl_table=12)
//Standard = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//    AAs  = FFLLSSSSYY**CC*WLLLSPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//  Starts = -------------------M---------------M----------------------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG

	if (type.toLowerCase() == "transl_table=12") {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[ctuy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][atcuwmhy]/=I," +
	    "/aa[agr]/=K," +
	    "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L," +
	    "/a[tu]g/=M," +
	    "/aa[tucy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]/=Q," +
	    "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," +
	    "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S," +
	    "/ac[acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]gg/=W," +
	    "/[tu]a[ctuy]/=Y," +
	    "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
	}


//  The Ascidian Mitochondrial Code (transl_table=13)
//Standard = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//    AAs  = FFLLSSSSYY**CCWWLLLLPPPPHHQQRRRRIIMMTTTTNNKKSSGGVVVVAAAADDEEGGGG
//  Starts = ---M------------------------------MM---------------M------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG

	if (type.toLowerCase() == "transl_table=13") {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[ctuy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][tcuy]/=I," +
	    "/aa[agr]/=K," +
	    "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," +
	    "/a[tu][agr]/=M," +
	    "/aa[tucy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]/=Q," +
	    "/cg[acgturyswkmbdhvn]/=R," +
	    "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," +
	    "/ac[acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]g[agr]/=W," +
	    "/[tu]a[ctuy]/=Y," +
	    "/[tu]a[agr]/=*";
	}

//  The Alternative Flatworm Mitochondrial Code (transl_table=14)
//Standard = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//    AAs  = FFLLSSSSYYY*CCWWLLLLPPPPHHQQRRRRIIIMTTTTNNNKSSSSVVVVAAAADDEEGGGG
//  Starts = -----------------------------------M----------------------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG

	if (type.toLowerCase() == "transl_table=14") {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[ctuy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][atcuwmhy]/=I," +
	    "/aag/=K," +
	    "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," +
	    "/a[tu]g/=M," +
	    "/aa[atcuwmhy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]/=Q," +
	    "/cg[acgturyswkmbdhvn]/=R," +
	    "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," +
	    "/ac[acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]g[agr]/=W," +
	    "/[tu]a[atcuwmhy]/=Y," +
	    "/[tu]ag/=*";
	}

//  Blepharisma Nuclear Code (transl_table=15)
//Standard = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//    AAs  = FFLLSSSSYY*QCC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//  Starts = -----------------------------------M----------------------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG

	if (type.toLowerCase() == "transl_table=15") {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[ctuy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][atcuwmhy]/=I," +
	    "/aa[agr]/=K," +
	    "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," +
	    "/a[tu]g/=M," +
	    "/aa[tucy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]|[tu]ag|[tcuy]ag/=Q," +
	    "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," +
	    "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," +
	    "/ac[acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]gg/=W," +
	    "/[tu]a[ctuy]/=Y," +
	    "/[tu][agr]a/=*";
	}

//  Chlorophycean Mitochondrial Code (transl_table=16)
//Standard = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//    AAs  = FFLLSSSSYY*LCC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//  Starts = -----------------------------------M----------------------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG

	if (type.toLowerCase() == "transl_table=16") {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[ctuy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][atcuwmhy]/=I," +
	    "/aa[agr]/=K," +
	    "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L," +
	    "/a[tu]g/=M," +
	    "/aa[tucy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]/=Q," +
	    "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," +
	    "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," +
	    "/ac[acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]gg/=W," +
	    "/[tu]a[ctuy]/=Y," +
	    "/[tu][agr]a/=*";
	}

//  Trematode Mitochondrial Code (transl_table=21)
//Standard = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//    AAs  = FFLLSSSSYY**CCWWLLLLPPPPHHQQRRRRIIMMTTTTNNNKSSSSVVVVAAAADDEEGGGG
//  Starts = -----------------------------------M---------------M------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG

	if (type.toLowerCase() == "transl_table=21") {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[ctuy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][tcuy]/=I," +
	    "/aag/=K," +
	    "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," +
	    "/a[tu][agr]/=M," +
	    "/aa[atcuwmhy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]/=Q," +
	    "/cg[acgturyswkmbdhvn]/=R," +
	    "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," +
	    "/ac[acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]g[agr]/=W," +
	    "/[tu]a[ctuy]/=Y," +
	    "/[tu]a[agr]/=*";
	}


//  Scenedesmus obliquus mitochondrial Code (transl_table=22)
//Standard = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//    AAs  = FFLLSS*SYY*LCC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//  Starts = -----------------------------------M----------------------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG

	if (type.toLowerCase() == "transl_table=22") {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[ctuy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][atcuwmhy]/=I," +
	    "/aa[agr]/=K," +
	    "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L," +
	    "/a[tu]g/=M," +
	    "/aa[tucy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]/=Q," +
	    "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," +
	    "/[tu]c[cgtyskb]|ag[ct]/=S," +
	    "/ac[acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]gg/=W," +
	    "/[tu]a[ctuy]/=Y," +
	    "/[tu][agcrsmv]a/=*";
	}


//  Thraustochytrium Mitochondrial Code (transl_table=23)
//Standard = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//    AAs  = FF*LSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
//  Starts = --------------------------------M--M---------------M------------
//  Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
//  Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
//  Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG

	if (type.toLowerCase() == "transl_table=23") {
	    return "/gc[acgturyswkmbdhvn]/=A," +
	    "/[tu]g[ctuy]/=C," +
	    "/ga[tcuy]/=D," +
	    "/ga[agr]/=E," +
	    "/[tu][tu][tcuy]/=F," +
	    "/gg[acgturyswkmbdhvn]/=G," +
	    "/ca[tcuy]/=H," +
	    "/a[tu][atcuwmhy]/=I," +
	    "/aa[agr]/=K," +
	    "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L," +
	    "/a[tu]g/=M," +
	    "/aa[tucy]/=N," +
	    "/cc[acgturyswkmbdhvn]/=P," +
	    "/ca[agr]/=Q," +
	    "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," +
	    "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," +
	    "/ac[acgturyswkmbdhvn]/=T," +
	    "/g[tu][acgturyswkmbdhvn]/=V," +
	    "/[tu]gg/=W," +
	    "/[tu]a[ctuy]/=Y," +
	    "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
	}

	return true;
}


// primer_map.js
//Written by Paul Stothard, University of Alberta, Canada

function primerMap (theDocument) {	

	var newDna = "";
	var title = "";
	var maxInput = 200000;

	if (testScript() == false) {
		return false;
	}

	var restrictionSiteCollection;
	var forwardMatches;
	var reverseMatches;

	var geneticCode = getGeneticCodeString(theDocument.forms[0].elements[7].options[theDocument.forms[0].elements[7].selectedIndex].value);

	var restrictionSites = getRestrictionSiteString("standard");	

	if ((checkFormElement (theDocument.forms[0].elements[0]) == false) || (checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput) == false))	{
		return false;
	}

	geneticCode = geneticCode.split(/,/);

	if (checkGeneticCode(geneticCode) == false)	{
		return false;
	}

	restrictionSites = restrictionSites.split(/,/);
	if (checkRestPatterns(restrictionSites) == false)	{
		return false;
	}

	var isColor;
	if (theDocument.forms[0].elements[10].options[theDocument.forms[0].elements[10].selectedIndex].value == 'color') {
	    isColor = true;
	}
	else {
	    isColor = false;
	}

	var primers = theDocument.forms[0].elements[1].value.split(/,/);
	var newPrimers = new Array();
	var primerSeq;
	var primerRe;
	var primerName;
	var matchArray;
	var re = /\(([^\(]+)\)\s*([A-Za-z]+)/;
	for (var i = 0; i < primers.length; i++) {
		//isolate name and seq and check  
		if (matchArray = re.exec(primers[i])) {
			primerName = matchArray[1];
			if (matchArray[2].length < 10) {
				alert("Please enter primer sequences that are at least 10 bases long.");
				return false;
			}
			primerSeq = matchArray[2];
			primerRe = eval("/" + convertDegenerates(primerSeq) + "/gi");
			newPrimers.push(new Primer(primerSeq, primerRe, primerName));		
		}			
	}

	_openWindow("Primer Map", isColor);	
	if (theDocument.forms[0].elements[8].options[theDocument.forms[0].elements[8].selectedIndex].value == "shown") {
		outputWindow.document.write("<span class=\"one\">" + "cuts once" + "</span><br />\n");
		outputWindow.document.write("<span class=\"two\">" + "cuts twice" + "</span><br />\n");
		outputWindow.document.write("\n");
		outputWindow.document.write("<span class=\"forward_primer\">" + "&gt;&gt;&gt;forward primer" + "</span><br />\n");
		outputWindow.document.write("<span class=\"reverse_primer\">" + "&lt;&lt;&lt;reverse primer" + "</span><br />\n");
		outputWindow.document.write("\n");	
	}			
	var arrayOfFasta = getArrayOfFasta (theDocument.forms[0].elements[0].value);

	for (var i = 0; i < arrayOfFasta.length; i++)	{
		newDna = getSequenceFromFasta (arrayOfFasta[i]);
		title = getTitleFromFasta (arrayOfFasta[i]);

		newDna = removeNonDna(newDna);
		openPre();
		outputWindow.document.write(getInfoFromTitleAndSequenceAndTopology(title, newDna, theDocument.forms[0].elements[9].options[theDocument.forms[0].elements[9].selectedIndex].value));

		if (theDocument.forms[0].elements[8].options[theDocument.forms[0].elements[8].selectedIndex].value == "shown") {
			restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, theDocument.forms[0].elements[9].options[theDocument.forms[0].elements[9].selectedIndex].value);
			restrictionSiteCollection.sortRestrictionSites();
		}
		
		//create match collections
		forwardMatches = findMatches (newPrimers, newDna, theDocument.forms[0].elements[9].options[theDocument.forms[0].elements[9].selectedIndex].value, false);
		reverseMatches = findMatches (newPrimers, reverse(complement(newDna)), theDocument.forms[0].elements[9].options[theDocument.forms[0].elements[9].selectedIndex].value, true);

		//now adjust forwardMatches for the figure
		for (var j = 0; j < forwardMatches.matches.length; j++) {
			forwardMatches.matches[j].position = forwardMatches.matches[j].position - forwardMatches.matches[j].matchingText.length;
			forwardMatches.matches[j].end = forwardMatches.matches[j].position + forwardMatches.matches[j].matchingText.length;
			if (forwardMatches.matches[j].position < 0) {
				forwardMatches.matches[j].position = forwardMatches.matches[j].position + newDna.length;
			}
			if (forwardMatches.matches[j].end > newDna.length) {
				forwardMatches.matches[j].end = forwardMatches.matches[j].end - newDna.length;
			}
		}		

		//now adjust reverseMatches for the figure
		for (var j = 0; j < reverseMatches.matches.length; j++) {
			reverseMatches.matches[j].position = newDna.length - reverseMatches.matches[j].position;
			reverseMatches.matches[j].end = reverseMatches.matches[j].position + reverseMatches.matches[j].matchingText.length
			if (reverseMatches.matches[j].position < 0) {
				reverseMatches.matches[j].position = reverseMatches.matches[j].position + newDna.length;
			}
			if (reverseMatches.matches[j].end > newDna.length) {
				reverseMatches.matches[j].end = reverseMatches.matches[j].end - newDna.length;
			}
		}

		//sort forwardMatches and reverseMatches.
		forwardMatches.sortMatches();
		reverseMatches.sortMatches();

		layoutPrimerMap (newDna, geneticCode, restrictionSiteCollection, forwardMatches, reverseMatches, theDocument.forms[0].elements[5].options[theDocument.forms[0].elements[5].selectedIndex].value, theDocument.forms[0].elements[6].options[theDocument.forms[0].elements[6].selectedIndex].value);
		
		outputWindow.document.write ('\n');
		closePre();		
		//this is a summary of the sites.
		if (theDocument.forms[0].elements[8].options[theDocument.forms[0].elements[8].selectedIndex].value == "shown") {				
			writeRestrictionSites (newDna, restrictionSites, theDocument.forms[0].elements[9].options[theDocument.forms[0].elements[9].selectedIndex].value);
			outputWindow.document.write ('<br />\n');	
		}
		//write summary of primers
		writePrimerSites(newPrimers);		

		outputWindow.document.write ('<br />\n<br />\n');

		//set primers hasMatch to false
		for (var j = 0; j < newPrimers.length; j++) {
			newPrimers[j].hasForwardMatch = false;
			newPrimers[j].hasReverseMatch = false;
		}	
	}

	closeWindow();
	return true;
}

function writePrimerSites (primers) {
	var backGroundClass;
	outputWindow.document.write ('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');	
	outputWindow.document.write ('<tr><td class="title" width="200px">' + 'Primer:' + '</td><td class="title">' + 'Sequence:' + '</td></tr>\n');	
	for (var i = 0; i < (primers.length); i++)	{
		if ((primers[i].hasForwardMatch) && (primers[i].hasReverseMatch)) {
			backGroundClass = "many";	
		}
		else if (primers[i].hasForwardMatch) {
			backGroundClass = "forward_primer";			
		}
		else if (primers[i].hasReverseMatch) {
			backGroundClass = "reverse_primer";			
		}
		else {
			backGroundClass = "none";
		}		
		outputWindow.document.write ('<tr><td class="' + backGroundClass + '">' + primers[i].name + '</td><td class="' + backGroundClass + '">' + '5\'-' + primers[i].sequence  + '-3\'' + '</td></tr>\n');
	}
	outputWindow.document.write('</tbody></table>\n');
	return true;
}	

function layoutPrimerMap (dnaSequence, geneticCode, restrictionSiteCollection, forwardMatches, reverseMatches, basesPerLine, readingFrame)	{

	basesPerLine = parseInt(basesPerLine);

	var geneticCodeMatchExp = getGeneticCodeMatchExp (geneticCode);
	var geneticCodeMatchResult = getGeneticCodeMatchResult (geneticCode);
	var spaceString = "                                                                                                                                  ";	

	var textLayout = new TextLayout();

	if ((readingFrame == "3") || (readingFrame == "all_three")) {
		var translation = new TranslationComponent();
		translation.setCharacters("  " + translate(dnaSequence.substring(2, dnaSequence.length), geneticCodeMatchExp, geneticCodeMatchResult));
		textLayout.addComponent(translation);
	}

	if ((readingFrame == "2") || (readingFrame == "all_three")) {
		var translation = new TranslationComponent();
		translation.setCharacters(" " + translate(dnaSequence.substring(1, dnaSequence.length), geneticCodeMatchExp, geneticCodeMatchResult));
		textLayout.addComponent(translation);
	}

	if ((readingFrame == "1") || (readingFrame == "all_three")) {
		var translation = new TranslationComponent();
		translation.setCharacters(translate(dnaSequence, geneticCodeMatchExp, geneticCodeMatchResult));
		textLayout.addComponent(translation);
	}

	if (readingFrame == "uppercase") {
		var translation = new UppercaseTranslationComponent();
		translation.setCharacters(uppercaseTranslate(dnaSequence, geneticCodeMatchExp, geneticCodeMatchResult));
		textLayout.addComponent(translation);
	}
		
	var dna = new DnaComponent();
	dna.setCharacters(dnaSequence);
	textLayout.addComponent(dna);

	var ruler = new RulerComponent();
       	ruler.setCharacters(dnaSequence);
	ruler.buildRuler();
	textLayout.addComponent(ruler);

	dna = new DnaComponent();
	dna.setCharacters(complement(dnaSequence));
	textLayout.addComponent(dna);

	var sitesInRange = new Array();

	for (var i = 0; i < dnaSequence.length; i = i + basesPerLine) {

		if (restrictionSiteCollection != null) {
		    //first get restriction sites in this range
		    sitesInRange = restrictionSiteCollection.getSitesInRange(i, i + basesPerLine);

		    //reversing gives better appearance
		    sitesInRange.reverse();

		    for (var j = 0; j < sitesInRange.length; j++) {
			    //9 is added because of indent to dna sequence

			    if (sitesInRange[j].numberOfCuts == 1) {
				    outputWindow.document.write(spaceString.substring(0, sitesInRange[j].position - i + 9) + "<span class=\"one\">" + sitesInRange[j].label + "</span>\n");
			    }

			    else if (sitesInRange[j].numberOfCuts == 2) {
				    outputWindow.document.write(spaceString.substring(0, sitesInRange[j].position - i + 9) + "<span class=\"two\">" + sitesInRange[j].label + "</span>\n");
			    }

			    else if (sitesInRange[j].numberOfCuts == 3) {
				    outputWindow.document.write(spaceString.substring(0, sitesInRange[j].position - i + 9) + "<span class=\"three\">" + sitesInRange[j].label + "</span>\n");
			    }

			    else {
				    outputWindow.document.write(spaceString.substring(0, sitesInRange[j].position - i + 9) + sitesInRange[j].label + "\n");
			    }
		    }
		}

		//get forwardPrimer matches in this range
		sitesInRange = forwardMatches.getMatchesInRange(i, i + basesPerLine);

		sitesInRange.reverse();
		for (var j = 0; j < sitesInRange.length; j++) {
			//9 is added because of indent to dna sequence
			outputWindow.document.write(spaceString.substring(0, sitesInRange[j].position - i + 9) + "<span class=\"forward_primer\">" + "&gt;&gt;&gt;" + sitesInRange[j].primerName + "&gt;&gt;&gt;" + " " + (sitesInRange[j].position + 1) + " to " + sitesInRange[j].end + "</span>\n");
		}

		//get reversePrimer matches in this range
		sitesInRange = reverseMatches.getMatchesInRange(i, i + basesPerLine);

		sitesInRange.reverse();
		for (var j = 0; j < sitesInRange.length; j++) {
			//9 is added because of indent to dna sequence
			outputWindow.document.write(spaceString.substring(0, sitesInRange[j].position - i + 9) + "<span class=\"reverse_primer\">" + "&lt;&lt;&lt;" + sitesInRange[j].primerName + "&lt;&lt;&lt;" + " " + (sitesInRange[j].position + 1) + " to " + sitesInRange[j].end + "</span>\n");
		}		

		textLayout.writeLayout(i, i + basesPerLine);
	}

	return true;
}

function translate (dnaSequence, geneticCodeMatchExp, geneticCodeMatchResult) {

	//don't translate if fewer than three bases
	if (dnaSequence.replace(/[^A-Za-z]/g, "").length < 3) {
		return "";
	}

	dnaSequence = dnaSequence.replace(/(...)/g, 
                    function (str, p1, offset, s) {
                      	return " " + p1 + " ";
                   }
        );	
	
	for (var i = 0; i < geneticCodeMatchExp.length; i++)	{
		dnaSequence = dnaSequence.replace(geneticCodeMatchExp[i], geneticCodeMatchResult[i]);
	}

	dnaSequence = dnaSequence.replace(/\S{3}/g, "X");
	dnaSequence = dnaSequence.replace(/\s\S{1,2}$/, "");
	dnaSequence = dnaSequence.replace(/^\s/, "");
	return dnaSequence;	
}

function uppercaseTranslate (dnaSequence, geneticCodeMatchExp, geneticCodeMatchResult) {

	dnaSequence = dnaSequence.replace(/[a-z]/g, " ");

	//don't translate if fewer than three bases
	if (dnaSequence.replace(/[^A-Za-z]/g, "").length < 3) {
		return "";
	}

	dnaSequence = dnaSequence.replace(/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, 
                    function (str, p1, p2, p3, p4, p5, p6, offset, s) {
                      	return " " + p1 + p3 + p5 + " " + p2 + p4 + p6;
                   }
        );

	dnaSequence = dnaSequence.replace(/\s\S{1,2}\s/g, "");

	for (var i = 0; i < geneticCodeMatchExp.length; i++)	{
		dnaSequence = dnaSequence.replace(geneticCodeMatchExp[i], geneticCodeMatchResult[i]);
	}

	dnaSequence = dnaSequence.replace(/\S{3}/g, "X");
	dnaSequence = dnaSequence.replace(/^\s/, "");

	return dnaSequence;	
}

function findRestrictionSites (sequence, arrayOfItems, dnaConformation)	{	

	var lookAhead = 50;
	var lowerLimit = 0;
	var upperLimit = sequence.length;
	var shiftValue = 0;
	var cutDistance;
	var matchExp;
	var matchPosition;
	var matchArray;
	var label;
	var timesFound = 0;
	var tempArray = new Array();

	var restrictionSiteCollection = new RestrictionSiteCollection();

	if (dnaConformation == "circular")	{
		shiftValue = (sequence.substring(0, lookAhead)).length;
		sequence = sequence.substring(sequence.length - lookAhead,sequence.length) + sequence + sequence.substring(0,lookAhead);
		lowerLimit = 0 + shiftValue;
		upperLimit = upperLimit + shiftValue;
	}

	for (var i = 0; i < (arrayOfItems.length); i++)	{

		matchExp = arrayOfItems[i].match(/\/.+\//) + "gi";
		matchPosition = 0;
		matchExp = eval(matchExp);
		cutDistance = parseFloat((arrayOfItems[i].match(/\)\D*\d+/)).toString().replace(/\)\D*/,""));
		label = ((arrayOfItems[i].match(/\([^\(]+\)/)).toString()).replace(/\(|\)/g,"");

		while (matchArray = matchExp.exec(sequence)) {

			matchPosition = matchExp.lastIndex;
			matchPosition = matchPosition - cutDistance;
			if ((matchPosition >= lowerLimit) && (matchPosition < upperLimit))	{
			        timesFound++;
				tempArray.push(new RestrictionSite(label + " " + (matchPosition - shiftValue + 1), (matchPosition - shiftValue)));
			}
			matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
		}
		
		
		for (var j = 0; j < tempArray.length; j++) {
			tempArray[j].numberOfCuts = timesFound;
			restrictionSiteCollection.addRestrictionSite(tempArray[j]);
		}
		timesFound = 0;	
		tempArray = new Array();
	}
	
	return restrictionSiteCollection;
}

function findMatches (primers, sequence, topology, isReverseStrand) {
	var matchArray;
	var matchPosition;
	var matchCollection = new MatchCollection();
	var re;
	var originalLength = sequence.length;

	if (topology == "circular")	{
		var lookAhead = 50;
		var shiftValue = (sequence.substring(0, lookAhead)).length;
		var upperLimit = sequence.length + shiftValue;
		sequence = sequence.substring(sequence.length - lookAhead,sequence.length) + sequence + sequence.substring(0,lookAhead);
		var lowerLimit = 0 + shiftValue;
		
		for (var i = 0; i < primers.length; i++)	{
			re = primers[i].re;
			while (matchArray = re.exec(sequence)) {
				matchPosition = re.lastIndex;
				if ((matchPosition >= lowerLimit) && (matchPosition < upperLimit))	{
					matchPosition = matchPosition - shiftValue;
					if (matchPosition == 0) {
						matchPosition = originalLength;
					}
					matchCollection.addMatch(new Match(primers[i].name, matchArray[0], matchPosition));
					if (isReverseStrand) {
						primers[i].hasReverseMatch = true;
					}
					else {
						primers[i].hasForwardMatch = true;
					}
				}
				re.lastIndex = re.lastIndex - RegExp.lastMatch.length + 1;
			}
		}
	}
	else {
		for (var i = 0; i < primers.length; i++)	{
			re = primers[i].re;
			while (matchArray = re.exec(sequence)) {
				matchPosition = re.lastIndex;
				matchCollection.addMatch(new Match(primers[i].name, matchArray[0], matchPosition));
				if (isReverseStrand) {
					primers[i].hasReverseMatch = true;
				}
				else {
					primers[i].hasForwardMatch = true;
				}
				re.lastIndex = re.lastIndex - RegExp.lastMatch.length + 1;
			}
		}
	}
	return matchCollection;
}

//------------------------------------ TextLayout Class
//TextLayout writeLayout method
function writeLayout (start, stop) {
	for (var i = 0; i < this.components.length; i++)	{
		this.components[i].writeLayoutComponent(start, stop);
	}	
}

//TextLayout addComponent method
function addComponent(component) {
	this.components.push(component);
}

//TextLayout class
function TextLayout () {
   	this.components = new Array();
}

//create and throw away a prototype object
new TextLayout();

//define object methods
TextLayout.prototype.writeLayout = writeLayout;
TextLayout.prototype.addComponent = addComponent;
//------------------------------------


//------------------------------------ LayoutComponent Abstract Class
//LayoutComponent writeLayoutComponent method
function writeLayoutComponent(start, stop) {
	//abstract method
}

//LayoutComponent setCharacters method
function setCharacters (text) {
	if (text.search(/./) != -1)	{
		this.characters = text.match(/./g);
	}
}

//LayoutComponent isRoom method
function isRoom (start, stop) {
	//return true if nothing in characters array in this range
	var rangeToCheck = this.characters.slice(start, stop);
	rangeToCheck = rangeToCheck.join("");
	if (rangeToCheck.search(/\w/) == -1) {
		return true;
	}
	else {
		return false;
	}
}

//LayoutComponent class
function LayoutComponent() {
	this.characters = new Array();
	this.positionLabel = 1;
}

//create and throw away a prototype object
new LayoutComponent();

//define object methods
LayoutComponent.prototype.writeLayoutComponent = writeLayoutComponent;
LayoutComponent.prototype.setCharacters = setCharacters;
LayoutComponent.prototype.isRoom = isRoom;
//------------------------------------

//------------------------------------ TranslationComponent Class extend LayoutComponent Class
//constructor
function TranslationComponent () {
	this.characters = new Array();
	this.positionLabel = 1;
}

TranslationComponent.prototype = new LayoutComponent();

//override writeLayoutComponent
TranslationComponent.prototype.writeLayoutComponent = function (start, stop) {
	outputWindow.document.write (rightNum (this.positionLabel, "", 8, ""));
	outputWindow.document.write (this.characters.slice(start, stop).join("") + "\n");
	this.positionLabel = this.positionLabel + (stop - start) / 3;
}

//------------------------------------

//------------------------------------ UppercaseTranslationComponent Class extend LayoutComponent Class
//constructor
function UppercaseTranslationComponent () {
	this.characters = new Array();
	this.positionLabel = 1;
}

UppercaseTranslationComponent.prototype = new LayoutComponent ();

//override writeLayoutComponent
UppercaseTranslationComponent.prototype.writeLayoutComponent = function (start, stop) {
	var textToWrite = this.characters.slice(start, stop).join("") + "\n";
	if (textToWrite.search(/\w/) != -1) {
		outputWindow.document.write (rightNum (this.positionLabel, "", 8, ""));
		this.positionLabel = this.positionLabel + ((textToWrite.match(/[A-Z]/g)).length);
		outputWindow.document.write (textToWrite);
	}
}
//------------------------------------

//------------------------------------ DnaComponent Class extend LayoutComponent Class
//constructor
function DnaComponent () {
	this.characters = new Array();
	this.positionLabel = 1;
}
DnaComponent.prototype = new LayoutComponent ();

//override writeLayoutComponent
DnaComponent.prototype.writeLayoutComponent = function (start, stop) {
	outputWindow.document.write (rightNum (this.positionLabel, "", 8, ""));
	outputWindow.document.write (this.characters.slice(start, stop).join("") + "\n");
	this.positionLabel = this.positionLabel + (stop - start);
}
//------------------------------------

//------------------------------------ RulerComponent Class extend LayoutComponent Class
//constructor
function RulerComponent () {
	this.characters = new Array();
	this.positionLabel = 1;
}
RulerComponent.prototype = new LayoutComponent ();

//override writeLayoutComponent
RulerComponent.prototype.writeLayoutComponent = function (start, stop) {
	outputWindow.document.write (rightNum (this.positionLabel, "", 8, ""));
	var text = this.characters.slice(start, stop).join("");
	text = text.replace(/^(\d+)/g, 
                 function (str, p1, offset, s) {		     
		     return p1.replace(/./g," ");
                 }
    	);
	text = text.replace(/(\d+)$/g, 
                 function (str, p1, offset, s) {		     
		     return p1.replace(/./g," ");
                 }
    	);
        outputWindow.document.write (text + "\n");
	this.positionLabel = this.positionLabel + (stop - start);
}

//RulerComponent buildRuler method
function buildRuler () {
    //do something
    var sequence = this.characters.join("");
    var count = 0;
    var spacing = "         ";
    sequence = sequence.replace(/(.{1,10})/g, 
                 function (str, p1, offset, s) {
		     var ruler = count + spacing;
		     if (count == 0) {
			 ruler = spacing;
		     }
		     count = count + 10;
		     return ruler.substring(0,10);
                 }
    );
    this.characters = sequence.match(/./g)
}

//create and throw away a prototype object
new RulerComponent();

//define object methods
RulerComponent.prototype.buildRuler = buildRuler;

//------------------------------------


//------------------------------------ RestrictionSite class
//RestrictionSite class
function RestrictionSite(label, position) {
	this.label = label;
	this.position = position;
	this.numberOfCuts;
}
//------------------------------------

//------------------------------------ RestrictionSiteCollection class
//RestrictionSiteCollection addRestrictionSite method
function addRestrictionSite (restrictionSite) {
	this.restrictionSites.push(restrictionSite);	
}

//RestrictionSiteCollection sortRestrictionSites method
function sortRestrictionSites () {
	this.restrictionSites.sort(restrictionSiteSorter);	
}

//RestrictionSiteCollection getSitesInRange method
function getSitesInRange (start, stop) {
	var arrayToReturn = new Array();
	//start at end
	for (var i = this.restrictionSites.length - 1; i >= 0; i--)	{
		if ((this.restrictionSites[i].position >= start) && (this.restrictionSites[i].position < stop)) {
			arrayToReturn.push(this.restrictionSites.pop());
		}
		else {
			break;
		}
	}	
	return arrayToReturn;
}

//RestrictionSiteCollection class
function RestrictionSiteCollection () {
   	this.restrictionSites = new Array();
}

//create and throw away a prototype object
new RestrictionSiteCollection();

//define object methods
RestrictionSiteCollection.prototype.addRestrictionSite = addRestrictionSite;
RestrictionSiteCollection.prototype.sortRestrictionSites = sortRestrictionSites;
RestrictionSiteCollection.prototype.getSitesInRange = getSitesInRange;

//------------------------------------

//sort so first ones at end
function restrictionSiteSorter (a, b) {
   	if (a.position < b.position) {
      		return 1;
	}
   	if (a.position > b.position) {
      		return -1;
	}
	else {
		return 0;
	}
}

//------------------------------------

//Primer class
function Primer (sequence, re, name) {
	this.sequence = sequence;
	this.re = re;
	this.name = name;
	this.hasForwardMatch = false;
	this.hasReverseMatch = false;
}

//------------------------------------

//Match class
function Match (primerName, matchingText, position) {
	this.primerName = primerName;
	this.matchingText = matchingText;
	this.position = position;
	this.end;
}
//------------------------------------ MatchCollection class
//MatchCollection addMatch method
function addMatch (match) {
	this.matches.push(match);	
}

//MatchCollection sortMatches method
function sortMatches () {
	this.matches.sort(matchSorter);	
}

//MatchCollection getMatchesInRange method
function getMatchesInRange (start, stop) {
	var arrayToReturn = new Array();
	//start at end
	for (var i = this.matches.length - 1; i >= 0; i--)	{
		if ((this.matches[i].position >= start) && (this.matches[i].position < stop)) {
			arrayToReturn.push(this.matches.pop());
		}
		else {
			break;
		}
	}	
	return arrayToReturn;
}

//MatchCollection class
function MatchCollection () {
   	this.matches = new Array();
}

//create and throw away a prototype object
new MatchCollection();

//define object methods
MatchCollection.prototype.addMatch = addMatch;
MatchCollection.prototype.sortMatches = sortMatches;
MatchCollection.prototype.getMatchesInRange = getMatchesInRange;

//sort so first ones at end
function matchSorter (a, b) {
   	if (a.position < b.position) {
      		return 1;
	}
   	if (a.position > b.position) {
      		return -1;
	}
	else {
		return 0;
	}
}


// primer_map.html
document.onload = function() { document.main_form.main_submit.focus() }
document.getElementById("submitbtn").onclick = function() { try{primerMap(document)} catch(e) {alert('The following error was encountered: ' + e);} }
document.getElementById("clearbtn").onclick = function() { document.forms[0].elements[0].value = ' '; document.forms[1].elements[0].value = ' '; }

