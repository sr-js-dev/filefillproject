const negative_div = document.querySelector('.negative_div');
const positive_div = document.querySelector('.positive_div');
const keystats_div = document.querySelector('.keystats_div');

// Code that helps us retreive the ticker, date and type from current page
function findGetParameter(parameterName) { // returns a value of a GET parameter
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

var date = findGetParameter('date');
var ticker = findGetParameter('ticker');
var type = findGetParameter('type');

// Call the API for specific data, selected by date, ticker and type(Q or K)
$.ajax({
    url:'/eod_data?date='+date+'&ticker='+ticker+'&type='+type,
    success: res => {
        render_eod_data(res);
    }
});

// Creates an item for the Key Stats element
function createListItem(key, value) {
    return `<li class="list-group-item">${key}: ${value}</li>`;
}

function render_eod_data(json) {
    let balance_sheet_key_params = '';
    let cash_flow_key_params = '';
    let income_statement_key_params = '';

    // Loop over each element in the EOD callback
    for (let key in json.balance_sheet){
        balance_sheet_key_params += createListItem(key, json.balance_sheet[key]);
    }
    for (let key in json.cash_flow){
        cash_flow_key_params += createListItem(key, json.cash_flow[key]);
    }
    for (let key in json.cash_flow){
        income_statement_key_params += createListItem(key, json.cash_flow[key]);
    }

    // Insert our items into Key Stats
    keystats_div.insertAdjacentHTML('beforeend', balance_sheet_key_params);
    keystats_div.insertAdjacentHTML('beforeend', cash_flow_key_params);
    keystats_div.insertAdjacentHTML('beforeend', income_statement_key_params);

    let totalAssets = parseInt(json.balance_sheet.totalAssets);
    let totalLiab = parseInt(json.balance_sheet.totalLiab);

    
    if (totalAssets > totalLiab){
        positive_div.insertAdjacentHTML('beforeend', '<li class="list-group-item">total assets are greater than the total liabilities</li>');
    }
    else
    {
        negative_div.insertAdjacentHTML('beforeend', '<li class="list-group-item">the total liabilities are greater than total assets</li>');
    }
}