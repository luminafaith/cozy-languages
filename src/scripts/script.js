// Display search results
function populateResultDisplay(searchID, displayID, verSelID, langSelID) {
    let searchTerm = document.getElementById(searchID).value;
    // let searchTerm = document.getElementsByName("textField").value;
    let verSelected = document.getElementById(verSelID).value;
    let langSelected = document.getElementById(langSelID).value;
    let displayElem = document.getElementById(displayID)

    // displayElem.innerHTML = ''; // Clear display before filling it

    // let accordionItem = document.createElement("div");

    // let accordionHead = document.createElement("h2");
    // accordionHead.id = "flush-heading1";

    // let accordionButton = document.createElement("button");
    // accordionButton.className = "accordion-button collapsed";
    // accordionButton.type = "button";
    
    // accordionButton.appendChild(searchTerm);

    // accordionHead.appendChild(accordionButton);

    // let accordionBody = document.createElement("div");

    // accordionItem.appendChild(accordionHead);

    // displayElem.appendChild(accordionItem);
    

    displayElem.innerHTML = displayElem.innerHTML + searchTerm;
}

function clickTest(elemID) {
    document.getElementById(elemID).innerHTML = "Hello World";
    // document.getElementById("demo").innerHTML = "Hello World";
}

function buildAccItem(resultNumber) {
    let builtHTML = '';

    builtHTML = builtHTML + '<div class="accordion-item">';
    // accordion-header
    builtHTML = builtHTML + '<h2 class="accordion-header" id="flush-heading1"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1">';
    builtHTML = builtHTML + 'Result #' + String(resultNumber)
    builtHTML = builtHTML + "</button></h2>"

    // accordion-body
    builtHTML = builtHTML
}

function copyToClipboard(elemID) {
    var copyText = document.getElementById(elemID).innerText;

    navigator.clipboard.writeText(copyText);

    alert("Copied the text: " + copyText);
}

function copyWTToClipboard(elemID) {
    var copyText = document.getElementById(elemID).innerText;

    navigator.clipboard.writeText(copyText);

    alert("Copied the text: " + copyText);
}