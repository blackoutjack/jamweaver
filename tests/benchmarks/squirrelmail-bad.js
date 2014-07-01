var f = document.forms.length;
var i = 0;
var pos = -1;
while( pos == -1 && i < f ) {
    var e = document.forms[i].elements.length;
    var j = 0;
    while( pos == -1 && j < e ) {
        if (document.forms[i].elements[j].type == "text" || document.forms[i].elements[j].type == "password" ) {
            pos = j;
        }
        j++;
    }
    i++;
}
if( pos >= 0 ) {
    document.forms[i-1].elements[pos].focus();
	document.getElementById("c1").src = "http://www.blackoutjack.com/pics/TweekGhost.jpg"
}
