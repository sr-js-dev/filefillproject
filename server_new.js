const express = require('express');
const app = express();
const request = require('request');
const convert = require('xml-js');
const fs = require('fs');
const path = require('path');
const http = require('http');
var bodyParser = require("body-parser");
const eodapi = require('eodhistoricaldata-api')

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
function replaceString(body, strReplace, wholeSentence, marker, note, id) {
  strReplace = strReplace;
  var bodyWow = body.replace(/<(?:.|\n)*?>/gm, '</a> <a>');
  bodyWow = bodyWow.replace(/(\r\n|\n|\r)/gm, " ");
  body = body.replace(/(\r\n|\n|\r)/gm, " ");
  if (wholeSentence) {

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
        if (word.toUpperCase().includes(strReplace.toUpperCase())) {
          strReplace = word;
        }
      });
    });
    var esc = strReplace.replace(/[\-\[\]{}()<>*+?.,\\\^$|#\s]/g, "\\$&");

    strReplace = escapeRegExp(strReplace);

    try {
      var reg = new RegExp(strReplace, 'g');
    } catch (Error) {
      return body;
    }
    var replaceWith = "<span class=\"anchor active\" id=\"active1\"><span class=\"ao-item\"><span class=\"ao-preview\"><input type=\"checkbox\" id=\"ao-toggle\" class=\"ao-toggle\" name=\"ao-toggle\" checked \/><mark id='" + id + "' class=\"" + marker + "\">" + strReplace + "</mark><span class=\"ao-annotations " + marker + "\"><span>" + note + "<\/span><\/span><\/span><\/span></span> <i class=\"arrow fa fa-arrow-left\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Red Flag\">⇽</i>"
    return [body.replace(reg, replaceWith), strReplace];

  } else {
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

  request('https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=' + req.query.ticker + '&type=&dateb=&owner=exclude&start=0&start=' + ((i * 100) - 100) + '&count=' + (i * 100) + '&output=atom', function (error, response, body) {

    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    if (body.includes("No matching Ticker Symbol.")) {
      res.send("No ticker symbol matches that search.");
    } else {
      var xml = convert.xml2json(body, { compact: true, spaces: 4 });

      var json = JSON.parse(xml)
      let k_list = ''
      let q_list = ''
      let sorted_list = ''
      json.feed.entry.forEach(function (filing) {
        var str = filing.link._attributes.href
        var date = filing.content['filing-date']._text;
        str = "/filing?file=" + str.substring(str.indexOf("data/") + 1) + '&date=' + date + "&ticker=" + req.query.ticker;
        if (filing.title._text.includes("10-Q ")) {
          q_list += `
                <a href="${str + "&type=Q"}" class="list-group-item list-group-item-action">
                  <div class="list_content">
                    <div class="list_content_item">10-Q</div>
                    <div class="list_content_item text-right">Quarterly Report</div>
                    <div class="list_content_item text-right">${date}</div>
                    <div class="list_content_item text-right"><img src="/static/images/go.svg" alt="go"></div>
                  </div>
                </a>
                `
          sorted_list += `
                <a href="${str + "&type=Q"}" class="list-group-item list-group-item-action">
                  <div class="list_content">
                    <div class="list_content_item">10-Q</div>
                    <div class="list_content_item text-right">Quarterly Report</div>
                    <div class="list_content_item text-right">${date}</div>
                    <div class="list_content_item text-right"><img src="/static/images/go.svg" alt="go"></div>
                  </div>
                </a>
                `
        } else if (filing.title._text.includes("10-K ")) {
          k_list += `
                <a href="${str + "&type=K"}" class="list-group-item list-group-item-action">
                  <div class="list_content">
                    <div class="list_content_item">10-K</div>
                    <div class="list_content_item text-right">Annual Report</div>
                    <div class="list_content_item text-right">${date}</div>
                    <div class="list_content_item text-right"><img src="/static/images/go.svg" alt="go"></div>
                  </div>
                </a>
                `
          sorted_list += `
                <a href="${str + "&type=K"}" class="list-group-item list-group-item-action">
                  <div class="list_content">
                    <div class="list_content_item">10-K</div>
                    <div class="list_content_item text-right">Annual Report</div>
                    <div class="list_content_item text-right">${date}</div>
                    <div class="list_content_item text-right"><img src="/static/images/go.svg" alt="go"></div>
                  </div>
                </a>
                `
        }
      });


      // List containers
      let listed = `
          <section id="listed">
            <div class="row">
              <div class="col-md-6">
                <div class="list-group">${k_list}</div>
              </div>

              <div class="col-md-6">
                <div class="list-group">${q_list}</div>
              </div>
            </div>
          </section>
          `

      let sorted = `
          <section id="sorted" class="d-none">
            <div class="list-group">${sorted_list}</div>
          </section>
          `


      res.send(`
          <head>
            <link rel="stylesheet" href="/static/css/styles.763f1700.css" />
            <title>result</title>
          </head>
          <body>
            <div class="navbar navbar-default" role="navigation">
              <div class="container-fluid limited">
                <div class="navbar-header">
                  <a class="navbar-brand" href="/">FilingFindings™</a>
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse" >
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                </div>
                <div class="collapse navbar-collapse anonymous-navbar-collapse" id="navbar-collapse" >
                  <div id="entity-search-form-container" data-style-variant="navbar" data-initial-value="" data-autofocus="true">
                    <form class="navbar-form focus" action="/result" method="get" spellcheck="false" role="search">
                      <div class="input-group">
                        <input type="search" class="form-control search-autocomplete" name="ticker" size="40" placeholder="Ticker or company name" autocomplete="off" autocorrect="off" autocapitalize="off"/><span class="input-group-btn">
                          <button class="btn btn-default" type="submit">
                            <img src="/static/images/icons/red-5.png" style="width:18px;height:18px;padding:0;margin:0;"/>
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>


            <main class="container result_main">
              <h1 class="text-center">${req.query.ticker.toUpperCase()}</h1>
              <div class="text-center btns">
                <button id="list_btn" class="btn btn-lg btn-default">
                  <img src="/static/images/list.svg" alt="list">
                </button>
                <button id="sort_btn" class="btn btn-lg btn-default">
                  <img src="/static/images/sort.svg" alt="sort">
                </button>
              </div>

            ${listed}
            ${sorted}
            </main>

            <script src="/result.js"></script>
          </body>
          `)
    }
  });
});

app.get('/filing', (req, res) => {
  if (!req.query.file || !req.query.type || !req.query.date || !req.query.ticker) {
    res.send('Bad query parameters.');
    return;
  }
  request('https://www.sec.gov/Archives/edgar/d' + req.query.file, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    var str = body;
    str = str.split("/Archives/edgar")[1];
    str = str.split("\"")[0];

    request('https://www.sec.gov/Archives/edgar' + str, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred and handle it
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // fs.readFile("config2.json", function read(err, data) {
      //   var config = JSON.parse(data);
      //   var blueAnnotations = "<p class='blues'><strong>Important Finds</strong><strong class='bluee'>----</strong></br>";
      //   var greenAnnotations = "<p class='greens'><strong>Positive Finds</strong><strong class='greene'>----</strong></br>";
      //   var yellowAnnotations = "<p class='yellows'><strong>Negative Finds</strong><strong class='yellowe'>----</strong></br>";
      //   var redAnnotations = "<p class='reds'><strong>Red Alert Finds</strong><strong class='rede'>----</strong></br>";
      //   var id = 0;
      //   config.comments.forEach(function(text) {
      //     console.log(3);
      //     id = id + 1;
      //     var marker = "<mark>"
      //     marker = text.style + " " + text.type;
      //     var replaceStringResponse = replaceString(body, text.text, true, marker, text.note, id);
      //     var newbody = replaceStringResponse[0];
      //     if(newbody != body){
      //       console.log(8);
      //       if(text.type == "blue"){
      //         console.log(4);
      //         blueAnnotations = blueAnnotations + "<a href='#" + id + "'> - " +  text.note + "</a></br>";
      //       }else if(text.type == "green"){
      //         console.log(5);
      //         greenAnnotations = greenAnnotations + "<a href='#" + id + "'> - " + text.note + "</a></br>";
      //       }else if(text.type == "yellow"){
      //         console.log(6);
      //         yellowAnnotations = yellowAnnotations + "<a href='#" + id + "'> - " + text.note + "</a></br>";
      //       }else if(text.type == "red"){
      //         console.log(7);
      //         redAnnotations = redAnnotations + "<a href='#" + id + "'> - " + text.note + "</a></br>";
      //       }
      //       console.log(9);
      //     }
      //     body = newbody;
      //   });
      // });
      res.send(`
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.css" />
          <script src="https://unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>

          <link rel="stylesheet" href="/static/css/styles.763f1700.css" />
          <title>Filling</title>
        </head>
        <body>
          <div class="navbar navbar-default mb-0 fixed_nav" role="navigation">
            <div class="container-fluid limited">
              <div class="navbar-header">
                <a class="navbar-brand" href="/">FilingFindings™</a>
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span><span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div
                class="collapse navbar-collapse anonymous-navbar-collapse" id="navbar-collapse">
                <div id="entity-search-form-container" data-style-variant="navbar" data-initial-value="" data-autofocus="true" >
                  <form class=" navbar-form focus" action="/result" method="get" spellcheck="false" role="search">
                    <div class="input-group">
                      <input type="search" class="form-control search-autocomplete" name="ticker" size="40" placeholder="Ticker or company name" autocomplete="off" autocorrect="off" autocapitalize="off" autofocus=""/><span class="input-group-btn"
                        ><button class="btn btn-default" type="submit">
                          <img src="./static/images/icons/red-5.png"style="width:18px;height:18px;padding:0;margin:0;"/></button></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <main class="filing_main">
            <section class="settings">
              <div class="settings_item">
                <button id="back" class="btn btn-default"><i class="fas fa-chevron-left"></i> BACK</button>
              </div>

              <div class="settings_item">
                <div class="form-group">
                  <label for="select">SELECT</label>
                  <select class="form-control" id="select">
                    <option value="pnn">Positive/Negative/Neutral</option>
                    <option value="important">Important</option>
                    <option value="positive">Positive Only</option>
                    <option value="negative">Negative Only</option>
                    <option value="neutral">Neutral Only</option>
                    <option value="hidden">Hidden</option>
                    <option value="redflags">Red Flags</option>
                    <option value="unusualactivity">Unusual Activity</option>
                    <option value="significantchanges">Significant Changes</option>
                    <option disabled="disabled">──────────────────</option>
                    <option value="industrycomparisons">Industry Comparisons</option>
                    <option value="companystructure">Company Structure</option>
                    <option value="keystats">Key Stats</option>
                    <option value="trends">Trends</option>
                    <option value="ratios">Ratios</option>
                    <option value="forecasts">Forecasts</option>
                  </select>
                </div>
              </div>


              <div class="settings_item">
                <div class="checkbox checkbox-primary">
                  <input class="display_control" id="findings" type="checkbox" checked />
                  <label for="findings">Display Findings</label>
                </div>

                <div class="checkbox checkbox-primary">
                  <input class="display_control" id="annotations" type="checkbox" checked />
                  <label for="annotations">Display Annotations</label>
                </div>

                <div class="checkbox checkbox-primary">
                  <input class="display_control" id="Underline" type="checkbox" checked />
                  <label for="Underline">Underline/Box Text</label>
                </div>
              </div>

              <button class="settingsBtn btn btn-lg"><i id="toggler" class="fas fa-chevron-up"></i></button>
            </section>

            <section class="filing">
              <div class="left_panel">
                <div class="left_panel_item important_div d-none">
                  <p>Important</p>
                </div>
                <div class="left_panel_item positive_div">
                  <p>Positive</p>
                </div>
                <div class="left_panel_item negative_div">
                  <p>Negative</p>
                </div>
                <div class="left_panel_item neutral_div">
                  <p>Neutral</p>
                </div>
                <div class="left_panel_item hidden_div d-none">
                  <p>Hidden</p>
                </div>
                <div class="left_panel_item redflags_div d-none">
                  <p>Red Flags</p>
                </div>
                <div class="left_panel_item unusualactivity_div d-none">
                  <p>Unusual Activity</p>
                </div>
                <div class="left_panel_item significantchanges_div d-none">
                  <p>Significant Changes</p>
                </div>
                <div class="left_panel_item industrycomparisons_div d-none">
                  <p>Industry Comparisons</p>
                </div>
                <div class="left_panel_item companystructure_div d-none">
                  <p>Company Structure</p>
                </div>
                <div class="left_panel_item keystats_div d-none">
                  <p>Key Stats</p>
                </div>
                <div class="left_panel_item trends_div d-none">
                  <p>Trends</p>
                </div>
                <div class="left_panel_item ratios_div d-none">
                  <p>Ratios</p>
                </div>
                <div class="left_panel_item forecasts_div d-none">
                  <p>Forecasts</p>
                </div>
              </div>

              <div class="content" >${body}</div>

              <div class="right_panel"></div>
            </section>
          </main>

          <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
          <script src="/eodparser.js"></script>
          <script src="/filing.js"></script>
        </body>
      </html>

      `)
    });
  });
});

app.get('/test', (req, res) => {
  var x = new XMLHttpRequest();
  x.open("GET", "https://www.sec.gov/Archives/edgar/data/12927/000001292719000030/ba-20190331.xsd", true);
  x.onreadystatechange = function () {
    if (x.readyState == 4 && x.status == 200) {
      var doc = x.responseXML;
      // …
    }
  };
  x.send(null);
});

app.get('/config', (req, res) => {
  // Config view to add or remove (things!)

  fs.readFile("config2.json", function read(err, data) {

    res.send(`
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
        <link rel="stylesheet" href="/static/css/styles.763f1700.css" />
        <link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.css" />
        <script src="https://unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
        <title>Configuration</title>
      </head>
      <body>
        <nav class="index_nav navbar navbar-default">
          <div class="container-fluid limited">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">FilingFindings™</a>
            </div>
          </div>
        </nav>

        <main class="config container">
          <section>
            <div class="form-group">
              <label for="text">Enter list item</label>
              NEW SERVER WORKS!
              <textarea class="form-control" id="text" rows="3"></textarea>
            </div>

            <div>
              <div class="checkbox checkbox-primary">
                <input class="display_control" id="positive" type="checkbox"/>
                <label for="positive">Positive</label>
              </div>

              <div class="checkbox checkbox-primary">
                <input class="display_control" id="negative" type="checkbox"/>
                <label for="negative">Negative</label>
              </div>

              <div class="checkbox checkbox-primary">
                <input class="display_control" id="neutral" type="checkbox"/>
                <label for="neutral">Neutral</label>
              </div>

              <div class="checkbox checkbox-primary">
                <input class="display_control" id="important" type="checkbox"/>
                <label for="important">Important</label>
              </div>

              <div class="checkbox checkbox-primary">
                <input class="display_control" id="unusualactivity" type="checkbox"/>
                <label for="unusualactivity">Unusual Activity</label>
              </div>

              <div class="checkbox checkbox-primary">
                <input class="display_control" id="significantchanges" type="checkbox"/>
                <label for="significantchanges">Significant Changes</label>
              </div>

              <div class="checkbox checkbox-primary">
                <input class="display_control" id="companystructure" type="checkbox"/>
                <label for="companystructure">Company Structure</label>
              </div>

              <div class="checkbox checkbox-primary">
                <input class="display_control" id="trends" type="checkbox"/>
                <label for="trends">Trends</label>
              </div>
            </div>

            <button id="add" class="btn btn-lg btn-default" type="button">Add</button>
          </section>

          <br><hr><br>

          <section class="data">
            <h4>Positive</h4> <ul class="list-group positive_div"></ul>
            <h4>Negative</h4> <ul class="list-group negative_div"></ul>
            <h4>Neutral</h4> <ul class="list-group neutral_div"></ul>
            <h4>Important</h4> <ul class="list-group important_div"></ul>
            <h4>Unusual Activity</h4> <ul class="list-group unusualactivity_div"></ul>
            <h4>Significant Changes</h4> <ul class="list-group significantchanges_div"></ul>
            <h4>Company Structure</h4> <ul class="list-group companystructure_div"></ul>
            <h4>Trends</h4> <ul class="list-group trends_div"></ul>
          </section>
        </main>

        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <script src="/config.js"></script>
      </body>
    </html>
    `)
  });
});


app.post('/add', (req, res) => {
  // Write what user enterened in the JSON file

  let text = req.body.text;
  let selected_params = JSON.parse(req.body.selected_params);
  let config;

  fs.readFile("config2.json", (err, data) => {
    config = JSON.parse(data);

    selected_params.forEach(param => {
      config[param].push(text)
    })

    fs.writeFile("config2.json", JSON.stringify(config));
  });

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ 'msg': 'Done!' }));
});


app.get('/get_data', (req, res) => {
  // Return data ojct of the config2.json file

  fs.readFile("config2.json", (err, data) => {
    const config = JSON.parse(data);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(config));
  });

})

app.get('/eod_data', (req, res) => {
  if (!req.query.date || !req.query.ticker || !req.query.type) {
    res.status(400);
    res.send('Bad request!');
    return;
  }
  let QorK = (req.query.type === 'Q') ? 'quarterly' : 'yearly';
  res.setHeader('Content-Type', 'application/json');
  eodapi.getFundamentals(req.query.ticker).then(result => {
    let date = '';
    let obj = new Object();
    for (let x in result['Financials']['Balance_Sheet'][QorK]) { // resolve our date with this 'weird date'
      if (result['Financials']['Balance_Sheet'][QorK][x].filing_date === req.query.date) {
        date = x;
        break;
      }
    }
    obj['balance_sheet'] = result['Financials']['Balance_Sheet'][QorK][date];
    obj['cash_flow'] = result['Financials']['Cash_Flow'][QorK][date];
    obj['income_statement'] = result['Financials']['Income_Statement'][QorK][date];
    res.send(JSON.stringify(obj));
  });
})


app.post('/set_data', (req, res) => {
  // Return data ojct of the config2.json file
  const data = req.body.data;

  fs.writeFile("config2.json", data)
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ done: 'OK' }));
})


app.get('/remove', (req, res) => {
  res.end("<HTML>Removed annotation! <a href='/config'>Continue..</a></HTML>");
  fs.readFile("config.json", function read(err, data) {
    var config = JSON.parse(data);
    if (config.comments[req.query.id - 1].text == req.query.text) {
      config.comments.splice((req.query.id - 1), 1);
    }
    fs.writeFile("config.json", JSON.stringify(config));
  });
});


