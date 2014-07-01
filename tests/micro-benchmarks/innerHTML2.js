var elt = document.createElement("script");
// Confirmed that using |setAttribute| in the following way does not
// cause parsing/insertion of the value.
//elt.setAttribute("innerHTML", "x = 2; alert('gotcha');");
// So just convert this to a more standard |innerHTML| test.
elt.innerHTML = "x = 2; alert('gotcha');";
document.body.appendChild(elt);
