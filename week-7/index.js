//GEnesysy week 7

let title = document.getElementById("title");
title.innerText = "Lets Giddy";
title.innerHtml = "Lets Giddy";
title.innerText = "Lets Giddy";

let paragraphClass = document.getElementsByClassName("para");
paragraphClass[0].textContent = "This is cool";
paragraphClass[0].textStyle = "This is cool";
paragraphClass[0].textContent = "This is cool";


let inputID = document.getElementById("inputId");
//inputID.innerHtml = "Enter your Name";
//inputID.innerText = "Enter your Name";
//inputID.textContent = "Enter your Name";
inputID.value = "Enter your Name";

let buttontag = document.getElementsByTagName("button");
buttontag[0].innerText = "Search";
buttontag[0].onlick += showAlert(inputID);





































