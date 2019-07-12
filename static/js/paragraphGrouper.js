// Hello! Welcome to this hell of code!
// (C) 2019 Snowp, do not distribute
// Paragraph Grouper, created for Tony Alexander and Tony Alexander ONLY
// Created with ♥ in The Netherlands

// Oh look! It begins! vvv


// CONFIG

// It is assumed that there is at least and only one (1) element for both of these classes
var DOCUMENTBASECLASS = "content";
var RIGHTPANELCLASS = "right_panel";
var PARAGRAPHSLOADING = "<br><br>LOADING...";
var PGDEBUGMODE = false;

// END OF CONFIG

var DOCUMENTBASE = document.getElementsByClassName(DOCUMENTBASECLASS)[0];
var RIGHTPANEL = document.getElementsByClassName(RIGHTPANELCLASS)[0];
RIGHTPANEL.innerHTML = PARAGRAPHSLOADING;


// Hallelujah! Thank you Stackoverflow!
// https://stackoverflow.com/questions/783899/how-can-i-count-text-lines-inside-an-dom-element-can-i
// Modified it a bit though
function countLines(el) {
  var divHeight = el.offsetHeight;
  var lineHeight = parseInt(el.style.lineHeight);
  var lines = divHeight / lineHeight;
  return lines;
}
// Another one
// https://stackoverflow.com/questions/11805955/how-to-get-the-distance-from-the-top-for-an-element
function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
}
// Another one
// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function randomStr(length) {
   var result           = '';
   // Excluded x, v, and z. Both capital and lowercase
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUWYabcdefghijklmnopqrstuwy0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function insertParagraphSvg(yAxis, height, info)
{
  var lenMin = 20;
  var lenMax = 70;
  var randomStrLen = Math.floor(Math.random() * (lenMax-lenMin)) + 20;
  var numOfLines = Math.ceil(randomStrLen / 20)
  var text = "";
  switch (numOfLines) {
    case 1:
      text = "<text x=\"45\" y=\""+((height/2)+5+2)+"\" fill=\"black\">"+randomStr(randomStrLen)+"</text>";
      break;
    case 2:
      var firstStrsLen = Math.ceil(randomStrLen / 2);
      var lastStrLen = randomStrLen - (1 * firstStrsLen);
      text = "<text x=\"45\" y=\""+((height/2)+5-5)+"\" fill=\"black\">"+randomStr(firstStrsLen)+"</text><text x=\"45\" y=\""+((height/2)+5+9)+"\" fill=\"black\">"+randomStr(lastStrLen)+"</text>";
      break;
    case 3:
      var firstStrsLen = Math.ceil(randomStrLen / 3);
      var lastStrLen = randomStrLen - (2 * firstStrsLen);
      text = "<text x=\"45\" y=\""+((height/2)+5-15)+"\" fill=\"black\">"+randomStr(firstStrsLen)+"</text><text x=\"45\" y=\""+((height/2)+5+2)+"\" fill=\"black\">"+randomStr(firstStrsLen)+"</text><text x=\"45\" y=\""+((height/2)+5+19)+"\" fill=\"black\">"+randomStr(lastStrLen)+"</text>";
      break;
    case 4:
      var firstStrsLen = Math.ceil(randomStrLen / 4);
      var lastStrLen = randomStrLen - (3 * firstStrsLen);
      text = "<text x=\"45\" y=\""+((height/2)+5-16)+"\" fill=\"black\">"+randomStr(firstStrsLen)+"</text><text x=\"45\" y=\""+((height/2)+5-4)+"\" fill=\"black\">"+randomStr(firstStrsLen)+"</text><text x=\"45\" y=\""+((height/2)+5+8)+"\" fill=\"black\">"+randomStr(firstStrsLen)+"</text><text x=\"45\" y=\""+((height/2)+5+20)+"\" fill=\"black\">"+randomStr(lastStrLen)+"</text>";
      break;
    default:
      console.log("got a weird one:");
      console.log(randomStrLen);
      console.log(numOfLines);
  }
  return "<svg style=\"position:absolute;left:0px;top:"+(yAxis-5)+"px;\" width=\"100%\" height=\""+(height+5+5)+"\" data-link=\""+info+"\"><line x1=\"0\" y1=\"5\" x2=\"30\" y2=\"5\" style=\"stroke:rgb(255,0,0);stroke-width:2\"/><line x1=\"0\" y1=\""+(height-1+5)+"\" x2=\"30\" y2=\""+(height-1+5)+"\" style=\"stroke:rgb(255,0,0);stroke-width:2\"/><line x1=\"30\" y1=\"5\" x2=\"30\" y2=\""+(height+5)+"\" style=\"stroke:rgb(255,0,0);stroke-width:2\"/><line x1=\"30\" y1=\""+((height/2)+5)+"\" x2=\"40\" y2=\""+((height/2)+5)+"\" style=\"stroke:rgb(255,0,0);stroke-width:2\"/>"+text+"</svg>";
}


// Never sure if JS refreshes these itself, so I'll just put this in here
function refreshElements()
{
  var DOCUMENTBASE = document.getElementsByClassName(DOCUMENTBASECLASS)[0];
  var RIGHTPANEL = document.getElementsByClassName(RIGHTPANELCLASS)[0];
}
function groupParagraphs()
{
  // FORMULA TO CHECK IF IF ENOUGH CHARACTERS
  // c>=Math.floor((60/(s/10))*(h/(s*1.5)))
  // c is number of chars in div
  // s is fontSize in div
  // h is height of div

  document.body.scrollTop = 0;
  RIGHTPANEL.scrollTop = 0;

  refreshElements();
  var nodes = document.getElementsByTagName("text")[0].children;
  var documentBounds = DOCUMENTBASE.getBoundingClientRect();
  var panelBounds = RIGHTPANEL.getBoundingClientRect();

  var out = "";
  for(var i=0; i<nodes.length; i++)
  {
    if(nodes[i].nodeName === "DIV")
    {
      var rect = nodes[i].getBoundingClientRect();
      var fontSizeStr = nodes[i].style.fontSize;
      var fontSize = ((fontSizeStr==="")?10:parseInt(fontSizeStr.replace("pt","")));
      if(rect.height >= 40 && nodes[i].innerText.length >= Math.floor((60/(fontSize/10))*(rect.height/(fontSize*1.5))))
      {
        out+=insertParagraphSvg(documentBounds.top+rect.top-(2*panelBounds.top)+1, rect.height-4, /*nodes[i].innerText*/"");
      }
    }
    if(PGDEBUGMODE)console.log("paragraph loop "+i+"/"+nodes.length);
  }
  if(RIGHTPANEL.innerHTML !== out) RIGHTPANEL.innerHTML = out;
}


// Another code snippet.
// Thanks!
// https://stackoverflow.com/questions/5489946/jquery-how-to-wait-for-the-end-of-resize-event-and-only-then-perform-an-ac
var rtime;
var timeout = false;
var delta = 200;
window.addEventListener("resize",function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
});
function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
        groupParagraphs();
    }
}

document.addEventListener("scroll", function()
{
  refreshElements();
  if(RIGHTPANEL.innerHTML!==PARAGRAPHSLOADING) RIGHTPANEL.scrollTop = document.body.scrollTop;
});
RIGHTPANEL.addEventListener("scroll", function()
{
  refreshElements();
  if(RIGHTPANEL.innerHTML!==PARAGRAPHSLOADING) document.body.scrollTop = RIGHTPANEL.scrollTop;
  else RIGHTPANEL.scrollTop = 0;
});

console.log("I'm alive! Hello world!\nParagraph Grouper will start indexing soon...\nParagraph Grouper (C) 2019 Snowp DO NOT DISTRIBUTE\nCreated with ♥ in The Netherlands for Tony Alexander");
window.addEventListener("load",function(){setTimeout(groupParagraphs, 1000);});
