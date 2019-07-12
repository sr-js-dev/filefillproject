const express = require('express');
const app = express();
const request = require('request');
const convert = require('xml-js');
const fs = require('fs');
const path = require('path');
var bodyParser = require("body-parser");

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
function replaceString(body, strReplace, wholeSentence, marker, note, id) {
    strReplace = strReplace ;
    var bodyWow = body.replace(/<(?:.|\n)*?>/gm, '</a> <a>');
    bodyWow = bodyWow.replace(/(\r\n|\n|\r)/gm," ");
    body = body.replace(/(\r\n|\n|\r)/gm," ");
    if(wholeSentence){

        var re = /<([\w]+)[^>]*>(.*?)<\/\1>/gm;
    var m;
    var list = [];
    do {
        m = re.exec(bodyWow);
        if (m) {
            list.push(m[2].split("."))
        }
    } while (m);

    list.forEach(array => {
        array.forEach(word => {
            if(word.toUpperCase().includes(strReplace.toUpperCase())){
                strReplace = word;
            }
        });
    });
    var esc = strReplace.replace(/[\-\[\]{}()<>*+?.,\\\^$|#\s]/g, "\\$&");

    strReplace = escapeRegExp(strReplace);

    try{
    var reg = new RegExp(strReplace, 'g');
    }catch(Error){
        return body;
    }
    var replaceWith = "<span class=\"anchor active\" id=\"active1\"><span class=\"ao-item\"><span class=\"ao-preview\"><input type=\"checkbox\" id=\"ao-toggle\" class=\"ao-toggle\" name=\"ao-toggle\" checked \/><mark id='" + id + "' class=\"" + marker + "\">" + strReplace + "</mark><span class=\"ao-annotations " + marker + "\"><span>" + note + "<\/span><\/span><\/span><\/span></span> <i class=\"arrow fa fa-arrow-left\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Red Flag\">⇽</i>"
    return [body.replace(reg, replaceWith), strReplace];

    }else{
    var esc = strReplace.replace(/[\-\[\]{}()<>*+?.,\\\^$|#\s]/g, "\\$&");
    var reg = new RegExp(strReplace, 'ig');
    var replaceWith = "<span class=\"anchor active\" id=\"active1\"><span class=\"ao-item\"><span class=\"ao-preview\"><input type=\"checkbox\" id=\"ao-toggle\" class=\"ao-toggle\" name=\"ao-toggle\" checked \/><mark id='" + id + "' class=\"" + marker + "\">" + strReplace + "</mark><span class=\"ao-annotations " + marker + "\"><span>" + note + "<\/span><\/span><\/span><\/span></span> <i class=\"arrow fa fa-arrow-left\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Red Flag\">⇽</i>"
    return [body.replace(reg, replaceWith), strReplace];
    }
};

app.use('/', express.static(__dirname + '/'));

const server = app.listen(3000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
    app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/result', (req, res) => {
  var i = 1;
  
  request('https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=' + req.query.ticker + '&type=&dateb=&owner=exclude&start=0&start=' + ((i*100)-100) + '&count=' + (i*100) + '&output=atom', function (error, response, body) {

      console.log('error:', error); // Print the error if one occurred and handle it
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

      if(body.includes("No matching Ticker Symbol.")){
          res.send("No ticker symbol matches that search.");
      }else{
          var xml = convert.xml2json(body, {compact: true, spaces: 4});

          var json = JSON.parse(xml)
          var financials = "<table border=\"1\"><tr><th>Filing Name</th><th>Filing Link</th></tr>";
          var news = "<table border=\"1\"><tr><th>Filing Name</th><th>Filing Link</th></tr>";
          var prospectusesAndRegistrations = "<table border=\"1\"><tr><th>Filing Name</th><th>Filing Link</th></tr>";
          var proxies = "<table border=\"1\"><tr><th>Filing Name</th><th>Filing Link</th></tr>";
          var ownership = "<table border=\"1\"><tr><th>Filing Name</th><th>Filing Link</th></tr>";
          var other = "<table border=\"1\"><tr><th>Filing Name</th><th>Filing Link</th></tr>";
          json.feed.entry.forEach(function(filing) {
              var str = filing.link._attributes.href
              str = "/filing?file=" + str.substring(str.indexOf("data/") + 1);
              if(filing.title._text.includes("10-Q ") || filing.title._text.includes("10-K ") || filing.title._text.includes("10-Q ")) {
                financials = financials + "<tr><td>" + filing.title._text + "</td><td><a href=\"" + str + "\">View</a></td></tr>";
              }else if(filing.title._text.includes("8-K ") || filing.title._text.includes("8-K/A ")|| filing.title._text.includes("6-K ")) {
                news = news + "<tr><td>" + filing.title._text + "</td><td><a href=\"" + str + "\">View</a></td></tr>";
              }else if(filing.title._text.includes("25 ") || filing.title._text.includes("8-A12B ") || filing.title._text.includes("S-3ASR ") || filing.title._text.includes("S-8 ") || filing.title._text.includes("424B2 ")) {
                prospectusesAndRegistrations = prospectusesAndRegistrations + "<tr><td>" + filing.title._text + "</td><td><a href=\"" + str + "\">View</a></td></tr>";
              }else if(filing.title._text.includes("PX14A6G ") || filing.title._text.includes("DEFA14A ") || filing.title._text.includes("DEF 14A ") || filing.title._text.includes("PRE14A ")) {
                proxies = proxies + "<tr><td>" + filing.title._text + "</td><td><a href=\"" + str + "\">View</a></td></tr>";
              }else if(filing.title._text.includes("4 ") || filing.title._text.includes("4/A ") || filing.title._text.includes("3 ") || filing.title._text.includes("3/A ") || filing.title._text.includes("SC 13G ") || filing.title._text.includes("SC 13G/A ") || filing.title._text.includes("SC 13D/A ")) {
                ownership = ownership + "<tr><td>" + filing.title._text + "</td><td><a href=\"" + str + "\">View</a></td></tr>";
              }else {
                other = other + "<tr><td>" + filing.title._text + "</td><td><a href=\"" + str + "\">View</a></td></tr>";
              }
          });
		  res.send("<a href=\"/\">back</a><br><strong>Financials</strong>" + financials + "</table><br><strong>News</strong>" + news + "</table><br><strong>Prospectuses and Registrations</strong>" + prospectusesAndRegistrations + "</table><br><strong>Proxies</strong>" + proxies + "</table><br><strong>Ownership</strong>" + ownership + "</table><br><strong>Other</strong>" + other + "</table><script src=\"tableStyler.js\"></script>");
      }
    });
});

app.get('/filing', (req, res) => {
    request('https://www.sec.gov/Archives/edgar/d' + req.query.file, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred and handle it
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        var str = body;
        str = str.split("/Archives/edgar")[1];
        str = str.split("\"")[0];

        request('https://www.sec.gov/Archives/edgar' + str, function (error, response, body) {
			console.log(1);
            console.log('error:', error); // Print the error if one occurred and handle it
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            fs.readFile("config.json", function read(err, data) {
			console.log(2);
                var config = JSON.parse(data);
                var blueAnnotations = "<p class='blues'><strong>Important Finds</strong><strong class='bluee'>----</strong></br>";
                var greenAnnotations = "<p class='greens'><strong>Positive Finds</strong><strong class='greene'>----</strong></br>";
                var yellowAnnotations = "<p class='yellows'><strong>Negative Finds</strong><strong class='yellowe'>----</strong></br>";
                var redAnnotations = "<p class='reds'><strong>Red Alert Finds</strong><strong class='rede'>----</strong></br>";
                var id = 0;
                config.comments.forEach(function(text) {
				console.log(3);
                    id = id + 1;
                    var marker = "<mark>"
                    marker = text.style + " " + text.type;
                    var replaceStringResponse = replaceString(body, text.text, true, marker, text.note, id);
                    var newbody = replaceStringResponse[0];
                    if(newbody != body){
						console.log(8);
                        if(text.type == "blue"){
							console.log(4);
                            blueAnnotations = blueAnnotations + "<a href='#" + id + "'> - " +  text.note + "</a></br>";
                        }else if(text.type == "green"){
							console.log(5);
                            greenAnnotations = greenAnnotations + "<a href='#" + id + "'> - " + text.note + "</a></br>";
                        }else if(text.type == "yellow"){
							console.log(6);
                            yellowAnnotations = yellowAnnotations + "<a href='#" + id + "'> - " + text.note + "</a></br>";
                        }else if(text.type == "red"){
							console.log(7);
                            redAnnotations = redAnnotations + "<a href='#" + id + "'> - " + text.note + "</a></br>";
                        }
						console.log(9);

                    }

                    body = newbody;

                });
				var NavBar = "<div class=\"navbar navbar-default navbar-seamless navbar-seamless navbar-marketing\" role=\"navigation\"><div class=\"container-fluid limited\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"/\">FilingFindings™</a><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button></div><div class=\"collapse navbar-collapse anonymous-navbar-collapse\" id=\"navbar-collapse\"><div id=\"entity-search-form-container\" data-style-variant=\"navbar\" data-initial-value=\"\" data-autofocus=\"true\"><form class=\" navbar-form focus\" action=\"/result\" method=\"get\" spellcheck=\"false\" role=\"search\"><div class=\"input-group\"><input type=\"search\" class=\"form-control search-autocomplete\" name=\"ticker\" size=\"40\" placeholder=\"Ticker or company name\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" autofocus=\"\"><span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"submit\"><img src=\"./static/images/icons/red-5.png\" style=\"width:18px;height:18px;padding:0;margin:0;\"></button></span></div></form></div><ul class=\"nav navbar-nav navbar-right\"><li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Features <b class=\"caret\"></b></a><ul class=\"dropdown-menu\"><li><a href=\"./document-search.html\">Document Search</a></li><li><a href=\"./table-downloads.html\">Table Downloads</a></li><li><a href=\"./similar-tables.html\">Similar Tables</a></li><li><a href=\"./collaboration.html\">Collaboration</a></li><li><a href=\"./organization.html\">Organization</a></li><li><a href=\"./other.html\">Other</a></li></ul></li><li><a href=\"./pricing.html\">Pricing</a></li><li class=\"hide-navbar-small\"><a href=\"./contact.html\">Contact</a></li><li><a href=\"./login.html\">Log In</a></li><li><a class=\"sign-up\" href=\"./register.html\">Free Trial</a></li></ul></div></div></div>";
                var dropmenu = "<select name=\"typeselect\" onchange=\"changeselectedimg(this.value);\" style=\"margin-left: 0.5%; width: 90%;\"><option value=\"pnn\">Positive/Negative/Neutral</option><option value=\"important\">Important</option><option value=\"positiveonly\">Positive Only</option><option value=\"negativeonly\">Negative Only</option><option value=\"neutralonly\">Neutral Only</option><option value=\"hidden\">Hidden</option><option value=\"redflags\">Red Flags</option><option value=\"unusualactivity\">Unusual Activity</option><option value=\"significantchanges\">Significant Changes</option><option disabled=\"disabled\">──────────────────</option><option value=\"industrycomparisons\">Industry Comparisons</option><option value=\"companystructure\">Company Structure</option><option value=\"keystats\">Key Stats</option><option value=\"trends\">Trends</option><option value=\"ratios\">Ratios</option><option value=\"forecasts\">Forecasts</option></select>";
				var backbutton = "<div class=\"hoverdropmenu\" style=\"margin-left: 1%; margin-top: 3%; \"><a href=\"/\"><img style=\"width:65%;\" src=\"./static/images/filling/Back Button.png\" alt=\"Card Back\"><img style=\"width:65%;\" src=\"./static/images/filling/Back Button -Hovered.png\" class=\"img-top\" alt=\"Card Front\"></a></div>";
				var gearcheckbox = "<table><tr><td><p style=\" font-size: 9pt; color: darkred; display:inline;\">Display Annotations</p></td><td><img class=\"fillingcheckbox\" id=\"checkbox1\" onclick=\"changecheckbox(this.id)\" src=\"./static/images/filling/CheckmarkBox.png\"/></td><tr><td><p style=\" font-size: 9pt; color: darkred; display:inline;\">Underline/Box Text</p></td><td><img class=\"fillingcheckbox\" id=\"checkbox2\" onclick=\"changecheckbox(this.id)\" src=\"./static/images/filling/CheckmarkBox.png\"/></td></tr></table>";
				var gearbutton = "<table><tr><td><div class=\"hoverdropmenu\" style=\"margin-left: 1%; \"><a href=\"#\"><img style=\"width:65%;\" src=\"./static/images/filling/Gear.png\" alt=\"Card Back\"><img style=\"width:65%;\" src=\"./static/images/filling/Gear-Hovered.png\" class=\"img-top\" alt=\"Card Front\"></a></div></td><td>"+ gearcheckbox +"</td></tr></table>";
				var FillingSlider="<img id=\"btn\" class=\"collapsible fixed\" src=\"./static/images/filling/UnFolded Button.png\" width=\"42\" height=\"42\"><div class=\"FillingSlider content\" id=\"FillingSlider\"> <table style=\"width:100%; height:100%\"><tr><td style=\"border-right: 1px black solid; width:23.5%\">"+ dropmenu +"</td><td style=\"width:53.05%\">"+ backbutton +"</td><td style=\"border-left: 1px black solid;\">"+ gearbutton +"</td></tr></table></div>";
				var leftpanel = "<table style=\"width: 100%; height: 80%;\"><tr><td id=\"tdimg1\" ><img style=\"margin-left: 30%;\" id=\"dropmenustatus1\" src=\"./static/images/filling/positiveonly.png\" /></td></tr><tr><td id=\"tdimg2\"><img style=\"margin-left: 30%;\" id=\"dropmenustatus2\" src=\"./static/images/filling/negativeonly.png\" /></td></tr><tr><td><img style=\"margin-left: 30%;\" id=\"dropmenustatus3\" src=\"./static/images/filling/neutralonly.png\" /></td></tr></table>";
				//res.send("<html><head><link rel=\"stylesheet\" type=\"text/css\" href=\"./static/css/stylenavbar.css\"><link rel=\"preload\" href=\"./static/fonts/roboto-v18-latin-700.037d8304.woff2\" as=\"font\" type=\"font/woff2\" crossorigin=\"anonymous\"><link rel=\"preload\" href=\"./static/fonts/roboto-v18-latin-400.5d4aeb4e.woff2\" as=\"font\" type=\"font/woff2\" crossorigin=\"anonymous\"><link rel=\"preload\" href=\"./static/fonts/fontello.15a5a5f8.woff2\" as=\"font\" type=\"font/woff2\" crossorigin=\"anonymous\"><link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png?v=kPgnR2Y2K0\"><link rel=\"icon\" type=\"image/png\" href=\"https://image.prntscr.com/image/Dbrj0tUoRy_bO4jdp8FXMw.png\" sizes=\"32x32\"><link rel=\"icon\" type=\"image/png\" href=\"https://image.prntscr.com/image/Dbrj0tUoRy_bO4jdp8FXMw.png\" sizes=\"16x16\"><link rel=\"manifest\" href=\"/manifest.json?v=kPgnR2Y2K0\"><link rel=\"mask-icon\" href=\"https://i.imgur.com/Ksle5uR.png\" color=\"#b6000e\"><link rel=\"stylesheet\" href=\"textCommentsOnSide_files/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\"><link href=\"textCommentsOnSide_files/style.html\" rel=\"stylesheet\"><link rel=\"stylesheet\" type=\"type/css\" href=\"commentsStyler.css\"><link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\" /><link href=\'css\/style.css\' rel=\"stylesheet\"><\/link></head><body style=\"font-family:Times New Roman;font-size:10pt;\">"+ NavBar + FillingSlider +"<div class=\"row\"><div class=\"column-o\" id=\"left-pan\">" +  greenAnnotations + yellowAnnotations + blueAnnotations + redAnnotations +"</div><div class=\"column\" id=\"middle-pan\">" + body + "</div><div class=\"column\"><a id=\"downBtn\" onclick=\"down()\" type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-caret-down\"></i></a><a id=\"upBtn\" onclick=\"up()\" type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-caret-up\"></i></a></div></div><script src=\"commentsStyler.js\"></script><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script></body></html>")
                res.send("<html><head><link rel=\"stylesheet\" type=\"text/css\" href=\"./static/css/stylenavbar.css\"><link rel=\"preload\" href=\"./static/fonts/roboto-v18-latin-700.037d8304.woff2\" as=\"font\" type=\"font/woff2\" crossorigin=\"anonymous\"><link rel=\"preload\" href=\"./static/fonts/roboto-v18-latin-400.5d4aeb4e.woff2\" as=\"font\" type=\"font/woff2\" crossorigin=\"anonymous\"><link rel=\"preload\" href=\"./static/fonts/fontello.15a5a5f8.woff2\" as=\"font\" type=\"font/woff2\" crossorigin=\"anonymous\"><link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png?v=kPgnR2Y2K0\"><link rel=\"icon\" type=\"image/png\" href=\"https://image.prntscr.com/image/Dbrj0tUoRy_bO4jdp8FXMw.png\" sizes=\"32x32\"><link rel=\"icon\" type=\"image/png\" href=\"https://image.prntscr.com/image/Dbrj0tUoRy_bO4jdp8FXMw.png\" sizes=\"16x16\"><link rel=\"manifest\" href=\"/manifest.json?v=kPgnR2Y2K0\"><link rel=\"mask-icon\" href=\"https://i.imgur.com/Ksle5uR.png\" color=\"#b6000e\"><link rel=\"stylesheet\" href=\"textCommentsOnSide_files/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\"><link href=\"textCommentsOnSide_files/style.html\" rel=\"stylesheet\"><link rel=\"stylesheet\" type=\"type/css\" href=\"commentsStyler.css\"><link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\" /><link href=\'css\/style.css\' rel=\"stylesheet\"><\/link></head><body style=\"font-family:Times New Roman;font-size:10pt;\">"+ NavBar + FillingSlider +"<div class=\"row\"><div class=\"column-o\" id=\"left-pan\">"+leftpanel+"</div><div class=\"column\" id=\"middle-pan\">" + body + "</div><div class=\"column\"><a id=\"downBtn\" onclick=\"down()\" type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-caret-down\"></i></a><a id=\"upBtn\" onclick=\"up()\" type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-caret-up\"></i></a></div></div><script src=\"commentsStyler.js\"></script><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script></body></html>")
			});
      });
  });
});

app.get('/test', (req, res) => {
    var x = new XMLHttpRequest();
	x.open("GET", "https://www.sec.gov/Archives/edgar/data/12927/000001292719000030/ba-20190331.xsd", true);
	x.onreadystatechange = function () {
	  if (x.readyState == 4 && x.status == 200)
	  {
		var doc = x.responseXML;
		// …
	  }
	};
	x.send(null);
});

app.get('/config', (req, res) => {
    var body = "Current annotation table:"
    fs.readFile("config.json", function read(err, data) {
        var i = 0;
        var config = JSON.parse(data);
        var table = "<table border=\"1\"><tr><td>#</td><td>Text to Annotate</td><td>Annotation</td><td>Colour</td><td>Style</td><td>Action</td></tr>";
        config.comments.forEach(function(text) {
            i = i + 1;
            table = table + "<tr><td>" + i + "</td><td>" + text.text + "</td><td>" + text.note + "</td><td>" + text.type + "</td><td>" + text.style + "</td><td><a href='/remove?id="+ i + "&text=" + text.text + "'>Remove</a></td></tr>";
        });
        res.send("<form method=\'POST\' action=\'\/add\'><p>Add new annotation! Enter the text:<\/p><input type=\'text\', placeholder=\'\' name=\'text\'><p>Enter the annotation:</p><input type=\'note\', placeholder=\'\' name=\'note\'><p>Enter the colour:</p><input type=\"radio\" id=\"red\" name=\"colour\" value=\"red\"><label for=\"red\">Red<\/label><input type=\"radio\" id=\"blue\" name=\"colour\" value=\"blue\"><label for=\"blue\">Blue<\/label><input type=\"radio\" id=\"yellow\" name=\"colour\" value=\"yellow\"><label for=\"yellow\">Yellow<\/label><input type=\"radio\" id=\"green\" name=\"colour\" value=\"green\"><label for=\"green\">Green<\/label><input type=\"radio\" id=\"orange\" name=\"colour\" value=\"orange\"><label for=\"orange\">Orange<\/label><input type=\"radio\" id=\"purple\" name=\"colour\" value=\"purple\"><label for=\"green\">Purple<\/label><input type=\"radio\" id=\"gray\" name=\"colour\" value=\"gray\"><label for=\"gray\">Gray<\/label><input type=\"radio\" id=\"pink\" name=\"colour\" value=\"pink\"><label for=\"pink\">Pink<\/label><p>Enter the style:</p><input type=\"radio\" id=\"boxed\" name=\"style\" value=\"boxed\"><label for=\"boxed\">Boxed<\/label><input type=\"radio\" id=\"underline\" name=\"style\" value=\"underline\"><label for=\"underline\">Underlined<\/label><input type=\"radio\" id=\"highlight\" name=\"style\" value=\"highlight\"><label for=\"highlight\">Highlight<\/label><input type=\"radio\" id=\"all\" name=\"style\" value=\"all\"><label for=\"all\">All<\/label><button>Add<\/button><\/form>"
         + table + "</table>");
    });
});

app.post('/add', (req, res) =>{
    var text = req.body.text;
    var note = req.body.note;
    var impact = req.body.colour;
    var style = req.body.style;
    console.log(text + " | " + note + " | " + impact);
    res.end("<HTML>Added new annotation! <a href='/config'>Continue..</a></HTML>");
    fs.readFile("config.json", function read(err, data) {
        var config = JSON.parse(data);
        config.comments.push({"text":text.trim(),"note":note,"type":impact,"style":style});
        fs.writeFile("config.json", JSON.stringify(config));
    });
});

app.get('/remove', (req, res) => {
    res.end("<HTML>Removed annotation! <a href='/config'>Continue..</a></HTML>");
    fs.readFile("config.json", function read(err, data) {
        var config = JSON.parse(data);
        if(config.comments[req.query.id-1].text == req.query.text){
            config.comments.splice((req.query.id-1), 1);
        }
        fs.writeFile("config.json", JSON.stringify(config));
    });
});


