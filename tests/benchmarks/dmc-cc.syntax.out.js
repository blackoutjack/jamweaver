// dmc-cc.js
function isInteger(s$$2) {
  var i$$1;
  i$$1 = 0;
  var v1 = i$$1 < s$$2.length;
  for (;v1;) {
    var c = s$$2.charAt(i$$1);
    var v29 = c < "0";
    if (!v29) {
      v29 = c > "9";
    }
    if (v29) {
      return false;
    }
    i$$1 = i$$1 + 1;
    v1 = i$$1 < s$$2.length;
  }
  return true;
}
function stripCharsInBag(s$$3, bag) {
  var i$$2;
  var returnString = "";
  i$$2 = 0;
  var v3 = i$$2 < s$$3.length;
  for (;v3;) {
    var c$$1 = s$$3.charAt(i$$2);
    if (bag.indexOf(c$$1) == -1) {
      returnString = returnString + c$$1;
    }
    i$$2 = i$$2 + 1;
    v3 = i$$2 < s$$3.length;
  }
  return returnString;
}
function daysInFebruary(year$$2) {
  var v4;
  var v54 = year$$2 % 4 == 0;
  if (v54) {
    var v83 = !(year$$2 % 100 == 0);
    if (!v83) {
      v83 = year$$2 % 400 == 0;
    }
    v54 = v83;
  }
  if (v54) {
    v4 = 29;
  } else {
    v4 = 28;
  }
  return v4;
}
function DaysArray(n$$1) {
  var i$$3 = 1;
  var v7 = i$$3 <= n$$1;
  for (;v7;) {
    this[i$$3] = 31;
    var v84 = i$$3 == 4;
    if (!v84) {
      v84 = i$$3 == 6;
    }
    var v55 = v84;
    if (!v55) {
      v55 = i$$3 == 9;
    }
    var v35 = v55;
    if (!v35) {
      v35 = i$$3 == 11;
    }
    if (v35) {
      this[i$$3] = 30;
    }
    if (i$$3 == 2) {
      this[i$$3] = 29;
    }
    i$$3 = i$$3 + 1;
    v7 = i$$3 <= n$$1;
  }
  return this;
}
function isDate(dtStr) {
  var daysInMonth = DaysArray(12);
  var pos1 = dtStr.indexOf(dtCh);
  var pos2 = JAM.call(dtStr.indexOf, dtStr, [dtCh, pos1 + 1], JAM.policy.p1);
  var strMonth = JAM.call(dtStr.substring, dtStr, [0, pos1], JAM.policy.p1);
  var strDay = JAM.call(dtStr.substring, dtStr, [pos1 + 1, pos2], JAM.policy.p1);
  var strYear = dtStr.substring(pos2 + 1);
  strYr = strYear;
  var v36 = strDay.charAt(0) == "0";
  if (v36) {
    v36 = strDay.length > 1;
  }
  if (v36) {
    strDay = strDay.substring(1);
  }
  var v37 = strMonth.charAt(0) == "0";
  if (v37) {
    v37 = strMonth.length > 1;
  }
  if (v37) {
    strMonth = strMonth.substring(1);
  }
  var i$$4 = 1;
  var v14 = i$$4 <= 3;
  for (;v14;) {
    var v38 = strYr.charAt(0) == "0";
    if (v38) {
      v38 = strYr.length > 1;
    }
    if (v38) {
      strYr = strYr.substring(1);
    }
    i$$4 = i$$4 + 1;
    v14 = i$$4 <= 3;
  }
  month = parseInt(strMonth);
  day = parseInt(strDay);
  year = parseInt(strYr);
  var v39 = pos1 == -1;
  if (!v39) {
    v39 = pos2 == -1;
  }
  if (v39) {
    alert("The date format should be : mm/dd/yyyy");
    return false;
  }
  var v64 = strMonth.length < 1;
  if (!v64) {
    v64 = month < 1;
  }
  var v40 = v64;
  if (!v40) {
    v40 = month > 12;
  }
  if (v40) {
    alert("Please enter a valid month");
    return false;
  }
  var v105 = strDay.length < 1;
  if (!v105) {
    v105 = day < 1;
  }
  var v88 = v105;
  if (!v88) {
    v88 = day > 31;
  }
  var v66 = v88;
  if (!v66) {
    var v89 = month == 2;
    if (v89) {
      v89 = day > daysInFebruary(year);
    }
    v66 = v89;
  }
  var v41 = v66;
  if (!v41) {
    v41 = day > daysInMonth[month];
  }
  if (v41) {
    alert("Please enter a valid day");
    return false;
  }
  var v91 = strYear.length != 4;
  if (!v91) {
    v91 = year == 0;
  }
  var v69 = v91;
  if (!v69) {
    v69 = year < minYear;
  }
  var v42 = v69;
  if (!v42) {
    v42 = year > maxYear;
  }
  if (v42) {
    alert("Please enter a valid 4 digit year between " + minYear + " and " + maxYear);
    return false;
  }
  var v44 = JAM.call(dtStr.indexOf, dtStr, [dtCh, pos2 + 1], JAM.policy.p1) != -1;
  if (!v44) {
    v44 = isInteger(JAM.call(stripCharsInBag, null, [dtStr, dtCh], JAM.policy.p1)) == false;
  }
  if (v44) {
    alert("Please enter a valid date");
    return false;
  }
  return true;
}
function check_dept_netid() {
  if (!isan(document.myForm4a.net_id.value)) {
    alert("Please enter a 10 digit UW ID Number");
    return false;
  } else {
    if (document.myForm4a.net_id.value.length != 10) {
      alert("Please enter a 10 digit UW ID Number");
      return false;
    } else {
      return true;
    }
  }
  return;
}
function check_pers_netid() {
  if (!isan(document.myForm.id.value)) {
    alert("Please enter a 10 digit UW ID Number");
    return false;
  } else {
    if (document.myForm.id.value.length != 10) {
      alert("Please enter a 10 digit UW ID Number");
      return false;
    } else {
      return true;
    }
  }
  return;
}
function isan(string) {
  if (string.length == 0) {
    return false;
  }
  var i$$5 = 0;
  var v27 = i$$5 < string.length;
  for (;v27;) {
    var v51 = JAM.call(string.substring, string, [i$$5, i$$5 + 1], JAM.policy.p1) < "0";
    if (!v51) {
      v51 = JAM.call(string.substring, string, [i$$5, i$$5 + 1], JAM.policy.p1) > "9";
    }
    if (v51) {
      return false;
    }
    i$$5 = i$$5 + 1;
    v27 = i$$5 < string.length;
  }
  return true;
}
var dtCh = "/";
var minYear = 1900;
var maxYear = 2100

