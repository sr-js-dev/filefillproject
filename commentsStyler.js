
var columnOne = document.body.querySelector(".column");
var comments = document.body.getElementsByClassName("column-o");
var parag = comments[0].querySelectorAll("p");
// var createdIcon = document.createElement("<i class='fa fa-angle-left' style='position: absolute; top: 1%; right: -5%; font-size: 24px; height: 10%; width: 10%; border-radius: 100%;'></i>")
// comments.appendChild(createdIcon);


comments[0].style.cssText = "width: 24%; height: 99.75%; position: fixed; top: 20%; left: 0%; background-color: rgba(226,226,226);  border: 1px black solid;";
columnOne.style.cssText = "position: absolute; left: 25%; width: 50%; top: 23%;";

for(var i = 0; i < parag.length; i++){
    var elClass = parag[i].getAttribute("class");
    var color = elClass.slice(0, -1);
    parag[i].style.cssText += "width: 100%; height: 23%; position: relative; left: 0%; outline: 1px solid black; text-align: center; overflow-y: scroll;";
    
    var a = parag[i].querySelectorAll("a");
    var str = parag[i].querySelectorAll("strong");
    for(var j = 0; j < str.length; j ++){
        str[j].style.cssText += "font-size: 18px;";
    };
    for(var j = 0; j < a.length; j ++){
        a[j].style.cssText += "float: left; text-align: left; text-decoration: none; color: " + color + ";";
    };
};

var row = document.body.getElementsByClassName("row")[0];
var rightPanel = document.createElement("div");
row.appendChild(rightPanel);

// var rightPanelClass = rightPanel.createAttribute("class");
// rightPanelClass.value = "right-panel";
// rightPanel.setAttributeNode(rightPanelClass);
rightPanel.setAttribute("class", "right-panel");
rightPanel.setAttribute("id", "right-pan");
rightPanel.setAttribute("style", "width: 24%; height: 99.75%; position: fixed; top: 20%; right: 0%; background-color: rgba(226,226,226);  border: 1px black solid;")
/*
// Highlighting the bar on the side of each title
document.getElementsByClassName("greene")[0].style.cssText = "background: green; color: green;";
document.getElementsByClassName("greene")[0].innerText += "----------";
document.getElementsByClassName("yellowe")[0].style.cssText = "background: yellow; color: yellow;";
document.getElementsByClassName("yellowe")[0].innerText += "----------";
document.getElementsByClassName("bluee")[0].style.cssText = "background: blue; color: blue;";
document.getElementsByClassName("bluee")[0].innerText += "----------";
document.getElementsByClassName("rede")[0].style.cssText = "background: red; color: red;";
document.getElementsByClassName("rede")[0].innerText += "----------";

// Change "Red Alert finds" to "Red Flags finds"
var paragOfFlags =  document.getElementsByClassName("reds")[0];
var replacedText = paragOfFlags.getElementsByTagName("strong")[0];
replacedText.innerText = "Red Flags Finds";
*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var left = document.getElementById("left-pan");
    var middle = document.getElementById("middle-pan");
    var right = document.getElementById("right-pan");

    if (content.style.maxHeight!="0%"){
      content.style.maxHeight = "0%";
      var btn = document.getElementById("btn");
      btn.style.top = "5.2%";
      btn.src = "./static/images/filling/Folded Button.png";
      left.style.top = "7.6%";
      middle.style.top = "9%";
      right.style.top = "7.6%";
    } else {
      content.style.maxHeight = "165px";
      var btn = document.getElementById("btn");
      btn.style.top = "18%";
      btn.src = "./static/images/filling/Unfolded Button.png";
      left.style.top = "20%";
      middle.style.top = "23%";
      right.style.top = "20%";
    }
  });
}


function changecheckbox(clicked_id) {

  if (document.getElementById(clicked_id).src.endsWith("CheckmarkBox.png")) 
  {
    document.getElementById(clicked_id).src = "./static/images/filling/Checkmark.png";
  }
  else 
  {
    document.getElementById(clicked_id).src = "./static/images/filling/CheckmarkBox.png";
  }
}

function changeselectedimg(clickedvalue) {
  if(clickedvalue!= "pnn"){
    document.getElementById("dropmenustatus1").src = "./static/images/filling/"+clickedvalue+".png";
	document.getElementById("dropmenustatus2").src = "";
	document.getElementById("dropmenustatus3").src = "";
	
	document.getElementById("tdimg1").style.borderBottom = "0px black solid";
	document.getElementById("tdimg2").style.borderBottom = "0px black solid";
  }else{
    document.getElementById("dropmenustatus1").src = "./static/images/filling/positiveonly.png";
	document.getElementById("dropmenustatus2").src = "./static/images/filling/negativeonly.png";
	document.getElementById("dropmenustatus3").src = "./static/images/filling/neutralonly.png";
	
	document.getElementById("tdimg1").style.borderBottom = "1px black solid";
	document.getElementById("tdimg2").style.borderBottom = "1px black solid";
	
  }
}