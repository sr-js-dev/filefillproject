document.head.innerHTML += "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>"
//Useful variables
let str = document.querySelectorAll("strong");
let br = document.querySelectorAll("br");
let tables = document.querySelectorAll("table");
let strongs = [];
let brs = [];
let mainContainer = document.createElement("div");
let regex = /( - ).+([A-Za-z0-9])*./g

// Removing all strongs elements
for(var i = 0; i < str.length; i ++){
    strongs.push(str[i]);
    document.body.removeChild(str[i]);
};

// Removing all hyperlink elements
for(var i = 1; i < br.length; i ++){
    brs.push(br[i]);
    document.body.removeChild(br[i]);
};

// Styling done by creating parent divs
for(var i = 0; i < tables.length; i++){
    // Creating the main div
    let newMainDiv =  document.createElement("div");
    newMainDiv.setAttribute("class", "tableContainer");
    newMainDiv.style.cssText = "overflow-y: hidden;";
    document.body.appendChild(newMainDiv);

    // Creating a dive for each box
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "tableHolder");
    newDiv.style.cssText += "height: 75%; overflow-y: scroll !important;";

    // Appending the created elements
    newDiv.appendChild(tables[i]);
    newMainDiv.appendChild(newDiv);

    // Creating the headers for each box and styling them
    let containers = document.querySelectorAll(".tableContainer");
    let header = document.createElement("strong");
    header.style.cssText= "font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;font-size: 1.5em;";
    header.innerText = strongs[i].innerText;
    containers[i].prepend(header);
};

// Appending the div for each box
let containers = document.querySelectorAll(".tableContainer");
for(var i = 0; i < containers.length; i ++){
    mainContainer.appendChild(containers[i]);
};

mainContainer.class = "container";
mainContainer.style = "width: 100%; height: 100%;";
mainContainer.setAttribute("class", "mainContainer");
mainContainer.style.cssText += "display: inline-grid; grid-template-columns: 2fr 2fr; grid-gap: 2%;";
document.body.appendChild(mainContainer);

// Removing all the  red rows
let tableHolders = document.querySelectorAll(".tableHolder");

for(var i = 0; i < tableHolders.length; i ++){
    let current = tableHolders[i];
    let tableBody = current.querySelectorAll("tbody");
    tableBody[0].style.cssText += "font-size: 0.7em;";
    let trTags = tableBody[0].querySelectorAll("tr");
    tableBody[0].removeChild(trTags[0]);

    // Replace the text after the file's name
    for(var j = 1; j < trTags.length; j ++){
        let text = trTags[j].querySelector("td");
        text.style.cssText += "color: #af011e;";
        let str = text.innerText;
        let regex = / -(.*)/g;
        text.innerText = str.replace(regex, "");
    }
}

//Styling all hyperlinks
let hyperlinks = document.querySelectorAll("a");
for(var i = 1; i < hyperlinks.length; i++){
    hyperlinks[i].innerHTML = "";
    hyperlinks[i].innerHTML = "<i class='fa fa-arrow-right' style='color: #af011e; text-decoration: none;'></i>";
};

    