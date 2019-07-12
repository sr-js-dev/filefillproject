const express = require("express");
const app = express();
const request = require("request");
const convert = require("xml-js");
const fs = require("fs");
const bodyParser = require("body-parser");
const eodapi = require("eodhistoricaldata-api");
const path = require("path");
const http = require("http");

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

function replaceString(body, strReplace, wholeSentence, marker, note, id) {
  strReplace = strReplace;
  var bodyWow = body.replace(/<(?:.|\n)*?>/gm, "</a> <a>");
  bodyWow = bodyWow.replace(/(\r\n|\n|\r)/gm, " ");
  body = body.replace(/(\r\n|\n|\r)/gm, " ");
  if (wholeSentence) {
    var re = /<([\w]+)[^>]*>(.*?)<\/\1>/gm;
    var m;
    var list = [];
    do {
      m = re.exec(bodyWow);
      if (m) {
        list.push(m[2].split("."));
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
      var reg = new RegExp(strReplace, "g");
    } catch (Error) {
      return body;
    }
    var replaceWith = `<span class="anchor active" id="active1"><span class="ao-item"><span class="ao-preview"><input type="checkbox" id="ao-toggle" class="ao-toggle" name="ao-toggle" checked /><mark id="${id}" class="${marker}">${strReplace}</mark><span class="ao-annotations ${marker}"><span>${note}</span></span></span></span></span> <i class="arrow fa fa-arrow-left" data-toggle="tooltip" data-placement="left" title="Red Flag">⇽</i>`;
    return [body.replace(reg, replaceWith), strReplace];
  } else {
    var esc = strReplace.replace(/[\-\[\]{}()<>*+?.,\\\^$|#\s]/g, "\\$&");
    var reg = new RegExp(strReplace, "ig");
    var replaceWith = `<span class="anchor active" id="active1"><span class="ao-item"><span class="ao-preview"><input type="checkbox" id="ao-toggle" class="ao-toggle" name="ao-toggle" checked /><mark id="${id}" class="${marker}">${strReplace}</mark><span class="ao-annotations ${marker}"><span>${note}</span></span></span></span></span> <i class="arrow fa fa-arrow-left" data-toggle="tooltip" data-placement="left" title="Red Flag">⇽</i>`;
    return [body.replace(reg, replaceWith), strReplace];
  }
}

app.use("/", express.static(__dirname + "/"));

const server = app.listen(3000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/result", (req, res) => {
  const ticker = req.query.ticker;
  const type = req.query.type;
  let i = 1;
  var url = `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&${type}=${ticker}&type=10-&dateb=&owner=exclude&start=0&start=${i * 100 - 100}&count=${i *100}&output=atom`;
  console.log(url);
  request(url, function(error, response, body) {
	  console.log("error:", error); // Print the error if one occurred and handle it
	  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received

	  if (body.includes("No matching Ticker Symbol.")) {
		  request(`https://eodhistoricaldata.com/api/fundamentals/${ticker}.US?api_token=5d039059ec3318.16078074`, (error, response, body) => {
			  var json = JSON.parse(body);
			  var name = json.General.Name;
			  name = name.replace(" Corporation","")
			  name = name.replace(" Corp","")
			  res.redirect('/result/?ticker='+name+"&type=company");
		  });
	  } else {
		var xml = convert.xml2json(body, { compact: true, spaces: 4 });

		var json = JSON.parse(xml);
		let k_list = "";
		let q_list = "";
		let sorted_list = "";
		json.feed.entry.forEach(function(filing) {
		  var str = filing.link._attributes.href;
		  str = "/filing?file=" + str.substring(str.indexOf("data/") + 1);
		  var date = filing.content["filing-date"]._text;
		  if (filing.title._text.includes("10-Q ")) {
			q_list += `
				<a href="${str}&period=quarterly&ticker=${ticker}&date=${date}" class="list-group-item list-group-item-action">
				  <div class="list_content">
					<div class="list_content_item">10-Q</div>
					<div class="list_content_item text-right">Quarterly Report</div>
					<div class="list_content_item text-right">${date}</div>
					<div class="list_content_item text-right"><img src="/static/images/go.svg" alt="go"></div>
				  </div>
				</a>
				`;
			sorted_list += `
				<a href="${str}&period=quarterly&ticker=${ticker}&date=${date}" class="list-group-item list-group-item-action">
				  <div class="list_content">
					<div class="list_content_item">10-Q</div>
					<div class="list_content_item text-right">Quarterly Report</div>
					<div class="list_content_item text-right">${date}</div>
					<div class="list_content_item text-right"><img src="/static/images/go.svg" alt="go"></div>
				  </div>
				</a>
				`;
		  } else if (filing.title._text.includes("10-K ")) {
			k_list += `
				<a href="${str}&period=yearly&ticker=${ticker}&date=${date}" class="list-group-item list-group-item-action">
				  <div class="list_content">
					<div class="list_content_item">10-K</div>
					<div class="list_content_item text-right">Annual Report</div>
					<div class="list_content_item text-right">${date}</div>
					<div class="list_content_item text-right"><img src="/static/images/go.svg" alt="go"></div>
				  </div>
				</a>
				`;
			sorted_list += `
				<a href="${str}&period=yearly&ticker=${ticker}&date=${date}" class="list-group-item list-group-item-action">
				  <div class="list_content">
					<div class="list_content_item">10-K</div>
					<div class="list_content_item text-right">Annual Report</div>
					<div class="list_content_item text-right">${date}</div>
					<div class="list_content_item text-right"><img src="/static/images/go.svg" alt="go"></div>
				  </div>
				</a>
				`;
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
		  `;

		let sorted = `
		  <section id="sorted" class="d-none">
			<div class="list-group">${sorted_list}</div>
		  </section>
		  `;

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
						<input type="search" class="form-control search-autocomplete" name="ticker" size="40" placeholder="Ticker or company name" autocomplete="off" autocorrect="off" autocapitalize="off"/>
						<input type="hidden" name="type" value="CIK"><span class="input-group-btn">
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
		  `);
	  }
	}
  );
});



// Filing handeller
app.get("/filing", (req, res) => {
  request(
    `https://www.sec.gov/Archives/edgar/d${req.query.file}`,
    (error, response, body1) => {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);
      var str = body1;
      str = str.split("/Archives/edgar")[1];
      str = str.split('"')[0];

      let period_of_report = body1.split('<div class="infoHead">Period of Report</div>')[1].split('</div>')[0].replace('<div class="info">', '').trim();

      request(`https://www.sec.gov/Archives/edgar${str}`,(error, response, body) => {
        console.log("error:", error); // Print the error if one occurred and handle it
        console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
        

        // Get the data from the eod API
        const api_token = '5d039059ec3318.16078074'
        let ticker =  req.query.ticker;
        let period =  req.query.period;
        let date =  req.query.date;
        
        //eodapi.getFundamentals(ticker).then(result => {
        request(`https://eodhistoricaldata.com/api/fundamentals/${ticker}.US?api_token=${api_token}`,(err, json_data, json_body) => {

          json_body = JSON.parse(json_body)

          let Financials_data = json_body['Financials'];
          let Balance_Sheet_Data = Financials_data['Balance_Sheet'][period][period_of_report];
          let Income_Statement_Data = Financials_data['Income_Statement'][period][period_of_report];

          let data = {...Balance_Sheet_Data, ...Income_Statement_Data}
          
          Financials_data = JSON.stringify(Financials_data)
          period_of_report_data = JSON.stringify(data)


          let period_of_report_year = period_of_report.split('-')[0];


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
                  <a class="navbar-brand" href="/">FilingFindings</a> <span id="beta">Beta</span>
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
                  <div class="form-group">
                    <label for="select">DETAILS</label>
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
                  <button id="back" class="btn btn-default"><i class="fas fa-chevron-left"></i> BACK</button>
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
            <script>
              let period = '${period}';
              let period_of_report = '${period_of_report}';
              let period_of_report_year = ${period_of_report_year};
              let data = ${period_of_report_data};
              let Financials_data = ${Financials_data};

              let balance_sheet = Financials_data['Balance_Sheet'][period]
              let income_statement = Financials_data['Income_Statement'][period]


              let balance_sheet_tem;
              let income_statement_tem; 
            </script>
            <script src="/static/js/paragraphGrouper.js"></script>
            <script src="/static/js/filing.js"></script>
            <script src="/rules.js"></script>
            <script src="/static/js/rules_do.js"></script>
          </body>
        </html>
  
        `);


        });

        }
      );
    }
  );
});

app.get("/test", (req, res) => {
  var x = new XMLHttpRequest();
  x.open(
    "GET",
    "https://www.sec.gov/Archives/edgar/data/12927/000001292719000030/ba-20190331.xsd",
    true
  );
  x.onreadystatechange = function() {
    if (x.readyState == 4 && x.status == 200) {
      var doc = x.responseXML;
      // …
    }
  };
  x.send(null);
});

// Config view to add or remove rules
app.get("/config", (req, res) => {
  res.render('config')
});


/***
 * 
 * 
 * starting with the rules functions
 * 
 */


 // Get all rules
app.get("/get_rules/", (req, res) => {
  fs.readFile("rules.json", (err, data) => {
    res.send(data)
  });
})

 // Add role to rules
app.post("/add_rule/", (req, res) => {
  let logic = req.body.logic;
  let text = req.body.text.trim();
  let sections = JSON.parse(req.body.sections);

  logic = logic.replace(/and/g, ' && ');
  logic = logic.replace(/\n|\r/g, "");

  let rules;

  const rule = { logic, text, sections }

  fs.readFile("rules.json", (err, data) => {
    rules = JSON.parse(data);
    rules.push(rule)
    fs.writeFile("rules.json", JSON.stringify(rules));
  });

  rules_check_builder()
  res.send({added: 'OK'})
})

// Set rules
app.post("/set_rules/", (req, res) => {
  const rules = req.body.rules;
  fs.writeFile("rules.json", rules);

  rules_check_builder()
  res.send({set: 'OK'})
})




// Helpful functions

// Function to build the rules checker
function rules_check_builder() {
  setTimeout(() => {
    fs.readFile("rules.json", (err, data) => {
      rules = JSON.parse(data);
  
      script = 'function rules_conditions() {';
      rules.forEach(rule => {

        if (rule.logic.startsWith('~')) {
          // parse the [x] and get the value of that year
          let regex = /\w*\[\d*\]/g;
          let matches = rule.logic.match(regex)

          let special_output = '';

          
          let new_logic = rule.logic; // to change the values on this variable
          new_logic = new_logic.replace('~', '');
          new_logic = new_logic.replace(/and/g, ' && ');

          matches.forEach(match => {

            let base_value = match.split('[')[0];
            let n_year = match.split('[')[1].replace(']', '');


            special_output += `
              target_year = period_of_report_year - ${n_year};

              for ( let x in balance_sheet) {
                if (x.startsWith(target_year)) {
                  balance_sheet_tem = balance_sheet[x]
                  break;
                }
            
              };

              for ( let x in income_statement) {
                if (x.startsWith(target_year)) {
                  income_statement_tem = income_statement[x]
                  break;
                }
            
              };

              data_${n_year} = {...balance_sheet_tem, ...income_statement_tem};


            
            ${base_value}_${n_year} = data_${n_year}['${base_value}']
            `
            
            new_logic = new_logic.replace(match, `${base_value}_${n_year}`)
            
          })

          script += special_output
          script +=
          `
          if (${new_logic.replace(/and/g, ' && ').replace(/\n|\r/g, "")}) {
            result.push('<li class="list-group-item" data-sections="${rule.sections}">${rule.text.replace(/'/g, "\\'").trim()}</li>');
          };`;



        } else {
          // normally adding the rule
          script += `
          if (${rule.logic.replace(/and/g, ' && ').replace(/\n|\r/g, "")}) {
            result.push('<li class="list-group-item" data-sections="${rule.sections}">${rule.text.replace(/'/g, "\\'").trim()}</li>');
          };`;
        }



      })

      script += '}'
  
      fs.writeFile("rules.js", script);
    });
  }, 500);
}


// Test on eod data api - working now!
app.get("/eod_data", (req, res) => {
  // let QorK = "quarterly";
  // let date = "2019-03-31";

  // eodapi.getFundamentals("aa").then(result => {
  //   let Balance_Sheet_Data = result['Financials']['Balance_Sheet'][QorK][date];
  //   let Income_Statement_Data = result['Financials']['Income_Statement'][QorK][date];

  //   let data = {...Balance_Sheet_Data, ...Income_Statement_Data}


  //   res.send(data)

  //   // res.send(data)
  //   for (let x in data) {
  //     if (data[x].date === date) {
  //       res.send(data[date])
  //     }
  //   }

  // });

  // return null

  
  
  // Get the data from the eod API
  const api_token = '5d039059ec3318.16078074'
  let ticker = 'ea'
  let period = 'yearly'
  
  //eodapi.getFundamentals(ticker).then(result => {
  request(`https://eodhistoricaldata.com/api/fundamentals/${ticker}.US?api_token=${api_token}`,(err, json_data, json_body) => {

    data = JSON.parse(json_body)
    
    res.json(data['Financials']['Cash_Flow'][period])
  })



});



app.get("/remove", (req, res) => {
  res.end("<HTML>Removed annotation! <a href='/config'>Continue..</a></HTML>");
  fs.readFile("config.json", function read(err, data) {
    var config = JSON.parse(data);
    if (config.comments[req.query.id - 1].text == req.query.text) {
      config.comments.splice(req.query.id - 1, 1);
    }
    fs.writeFile("config.json", JSON.stringify(config));
  });
});

