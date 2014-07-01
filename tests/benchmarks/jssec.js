function snipDisplay(c,p)
{
 document.getElementById(c).checked==true?document.getElementById(p).style.display='block':document.getElementById(p).style.display='none';
}

function initSnippets() {
    var d=document;			
    document.getElementById("c1").onclick = function () {
	snipDisplay('c1','s1');
    }    
}

function snapDisplay(c)
{var d=document; 
 if (document.getElementById(c).innerHTML=="Show All")
 {document.getElementById(c).innerHTML="Hide All"; for (var i=1;i<=31;i++){document.getElementById("c"+i).checked=true;document.getElementById("s"+i).style.display='block'}}
 else
 {document.getElementById(c).innerHTML="Show All"; for (var i=1;i<=31;i++){document.getElementById("c"+i).checked=false;document.getElementById("s"+i).style.display='none'}}
}

initSnippets();
document.getElementById("c1").onclick();
