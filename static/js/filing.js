const settings = document.querySelector(".settings");
const content = document.querySelector(".content");
const left_panel = document.querySelector(".left_panel");
const right_panel = document.querySelector(".right_panel");
const select = document.querySelector("#select");

let settings_status = "shown";

// other variables
let content_width = 52;
let left_panel_width = 24;
let right_panel_width = 24;

// Config file
let config;

// Filing rules builder variables
let researchDevelopment,
  effectOfAccountingCharges,
  incomeBeforeTax,
  minorityInterest,
  netIncome,
  sellingGeneralAdministrative,
  grossProfit,
  ebit,
  operatingIncome,
  otherOperatingExpenses,
  interestExpense,
  extraordinaryItems,
  nonRecurring,
  otherItems,
  incomeTaxExpense,
  totalRevenue,
  totalOperatingExpenses,
  costOfRevenue,
  totalOtherIncomeExpenseNet,
  discontinuedOperations,
  netIncomeFromContinuingOps,
  netIncomeApplicableToCommonShares,
  intangibleAssets,
  totalLiab,
  totalStockholderEquity,
  deferredLongTermLiab,
  otherCurrentLiab,
  totalAssets,
  commonStock,
  otherCurrentAssets,
  retainedEarnings,
  otherLiab,
  goodWill,
  otherAssets,
  cash,
  totalCurrentLiabilities,
  shortLongTermDebt,
  otherStockholderEquity,
  propertyPlantEquipment,
  totalCurrentAssets,
  longTermInvestments,
  netTangibleAssets,
  shortTermInvestments,
  netReceivables,
  longTermDebt,
  inventory,
  accountsPayable,
  totalPermanentEquity,
  noncontrollingInterestInConsolidatedEntity,
  temporaryEquityRedeemableNoncontrollingInterests,
  accumulatedOtherComprehensiveIncome,
  additionalPaidInCapital,
  commonStockTotalEquity,
  preferredStockTotalEquity,
  retainedEarningsTotalEquity,
  treasuryStock,
  netBorrowings,
  totalCashFromOperatingActivities,
  investments,
  changeToLiabilities,
  totalCashflowsFromInvestingActivities,
  totalCashFromFinancingActivities,
  changeToOperatingActivities,
  changeInCash,
  depreciation,
  otherCashflowsFromInvestingActivities,
  dividendsPaid,
  changeToInventory,
  changeToAccountReceivables,
  salePurchaseOfStock,
  otherCashflowsFromFinancingActivities,
  changeToNetincome,
  capitalExpenditures

// Rules array
result = []




window.addEventListener("DOMContentLoaded", event => {
  // Back button
  document.getElementById("back").addEventListener("click", e => window.history.back() );

  // Settings button
  document.querySelector(".settingsBtn").addEventListener("click", e => {
    const toggler = document.getElementById("toggler");

    if (settings_status == "shown") {
      settings.style.height = "5px";
      settings.style.padding = "20px";
      // content.style.height = '805px';
      toggler.classList.remove("fa-chevron-up");
      toggler.classList.add("fa-chevron-down");
      settings_status = "hidden";

      // added for static content
      document.querySelector(".left_panel").style.top = "9.4vh";
      document.querySelector(".right_panel").style.top = "9.4vh";
      document.querySelector(".content").style.top = "9.4vh";

      document.querySelectorAll(".settings_item").forEach(item => {
        item.classList.add("d-none");
      });
    } else if (settings_status == "hidden") {
      settings.style.height = "120px";
      settings.style.padding = "10px";
      // content.style.height = '728px';
      toggler.classList.add("fa-chevron-up");
      toggler.classList.remove("fa-chevron-down");
      settings_status = "shown";

      // added for static content
      document.querySelector(".left_panel").style.top = "17.8vh";
      document.querySelector(".right_panel").style.top = "17.8vh";
      document.querySelector(".content").style.top = "17.8vh";

      setTimeout(() => {
        document.querySelectorAll(".settings_item").forEach(item => {
          item.classList.remove("d-none");
        });
      }, 350);
    }
  });


  // Select button
  select.addEventListener("change", e => {
    const filing = document.querySelector(".filing");

    if (e.target.value == "pnn") {
      document.querySelectorAll(".left_panel_item").forEach(ele => {
        ele.classList.add("d-none");
      });

      document.querySelector(".positive_div").classList.remove("d-none");
      document.querySelector(".positive_div").style.height = "32%";
      document.querySelector(".negative_div").classList.remove("d-none");
      document.querySelector(".negative_div").style.height = "32%";
      document.querySelector(".neutral_div").classList.remove("d-none");
      document.querySelector(".neutral_div").style.height = "32%";

      return;
    }

    document.querySelectorAll(".left_panel_item").forEach(ele => {
      if (ele.classList[1] == `${e.target.value}_div`) {
        ele.classList.remove("d-none");
        ele.style.height = "98%";
      } else {
        ele.classList.add("d-none");
      }
    });
  });


  // Display control
  document.querySelectorAll(".display_control").forEach(ele => {
    ele.addEventListener("change", e => {
      if (e.target.checked == true) {
        // Display
        switch (e.target.id) {
          case "findings":
            if (select.value == "pnn") {
              document.querySelector(".positive_div").classList.remove("d-none");
              document.querySelector(".negative_div").classList.remove("d-none");
              document.querySelector(".neutral_div").classList.remove("d-none");
            } else {
              document.querySelector(`.${select.value}_div`).classList.remove("d-none");
            }

            left_panel_width = 24;
            left_panel.style.width = `${left_panel_width}%`;
            content.style.left = `${left_panel_width}%`;
            content.style.width = `${100 - left_panel_width - right_panel_width}%`;
            break;
          case "annotations":
            right_panel_width = 24;
            right_panel.style.width = `${right_panel_width}%`;
            content.style.width = `${100 -
              left_panel_width -
              right_panel_width}%`;
            break;
        }
      } else {
        // Hide
        switch (e.target.id) {
          case "findings":
            document.querySelectorAll(".left_panel_item").forEach(ele => {
              ele.classList.add("d-none");
            });

            left_panel_width = 1;
            left_panel.style.width = `${left_panel_width}%`;
            content.style.left = `${left_panel_width}%`;
            content.style.width = `${100 - left_panel_width - right_panel_width}%`;
            break;
          case "annotations":
            right_panel_width = 1;
            right_panel.style.width = `${right_panel_width}%`;
            content.style.width = `${100 - left_panel_width - right_panel_width}%`;
            break;
        }
      }
    });
  });


  // Get the data for each option choice ( json file )
  // $.ajax({
  //   url: "/get_data/",
  //   success: res => {
  //     config = res;
  //     render_data();
  //   }
  // });

  // function render_data() {
  //   for (var key in config) {
  //     if (config.hasOwnProperty(key)) {
  //       let content = '';
  //       config[key].forEach(li => {
  //         content += `<li class="list-group-item">${li}</li>`
  //       })

  //       const element = document.querySelector(`.${key}_div`);

  //       element.innerHTML += content;
  //       new SimpleBar(element, { autoHide: false });

  //     }
  //   }
  // }


  // Logging out the data we got!
  console.log('Data for the current document')
  console.log(data)
  console.log('Data for the current document (ALL)')
  console.log(Financials_data)



  netBorrowings = data.netBorrowings == null ? null : parseFloat(data.netBorrowings);
  researchDevelopment = data.researchDevelopment == null ? null : parseFloat(data.researchDevelopment)
  effectOfAccountingCharges = data.effectOfAccountingCharges == null ? null : parseFloat(data.effectOfAccountingCharges)
  incomeBeforeTax = data.incomeBeforeTax == null ? null : parseFloat(data.incomeBeforeTax)
  minorityInterest = data.minorityInterest == null ? null : parseFloat(data.minorityInterest)
  netIncome = data.netIncome == null ? null : parseFloat(data.netIncome)
  sellingGeneralAdministrative = data.sellingGeneralAdministrative == null ? null : parseFloat(data.sellingGeneralAdministrative)
  grossProfit = data.grossProfit == null ? null : parseFloat(data.grossProfit)
  ebit = data.ebit == null ? null : parseFloat(data.ebit)
  operatingIncome = data.operatingIncome == null ? null : parseFloat(data.operatingIncome)
  otherOperatingExpenses = data.otherOperatingExpenses == null ? null : parseFloat(data.otherOperatingExpenses)
  interestExpense = data.interestExpense == null ? null : parseFloat(data.interestExpense)
  extraordinaryItems = data.extraordinaryItems == null ? null : parseFloat(data.extraordinaryItems)
  nonRecurring = data.nonRecurring == null ? null : parseFloat(data.nonRecurring)
  otherItems = data.otherItems == null ? null : parseFloat(data.otherItems)
  incomeTaxExpense = data.incomeTaxExpense == null ? null : parseFloat(data.incomeTaxExpense)
  totalRevenue = data.totalRevenue == null ? null : parseFloat(data.totalRevenue)
  totalOperatingExpenses = data.totalOperatingExpenses == null ? null : parseFloat(data.totalOperatingExpenses)
  costOfRevenue = data.costOfRevenue == null ? null : parseFloat(data.costOfRevenue)
  totalOtherIncomeExpenseNet = data.totalOtherIncomeExpenseNet == null ? null : parseFloat(data.totalOtherIncomeExpenseNet)
  discontinuedOperations = data.discontinuedOperations == null ? null : parseFloat(data.discontinuedOperations)
  netIncomeFromContinuingOps = data.netIncomeFromContinuingOps == null ? null : parseFloat(data.netIncomeFromContinuingOps)
  totalCashFromOperatingActivities = data.totalCashFromOperatingActivities == null ? null : parseFloat(data.totalCashFromOperatingActivities)
  netIncomeApplicableToCommonShares = data.netIncomeApplicableToCommonShares == null ? null : parseFloat(data.netIncomeApplicableToCommonShares)
  investments = data.investments == null ? null : parseFloat(investments);
  changeToLiabilities = data.changeToLiabilities == null ? null : parseFloat(changeToLiabilities);
  totalCashflowsFromInvestingActivities = data.totalCashflowsFromInvestingActivities == null ? null : parseFloat(totalCashflowsFromInvestingActivities);
  totalCashFromFinancingActivities = data.totalCashFromFinancingActivities == null ? null : parseFloat(totalCashFromFinancingActivities);
  changeToOperatingActivities = data.changeToOperatingActivities == null ? null : parseFloat(changeToOperatingActivities);
  changeInCash = data.changeInCash == null ? null : parseFloat(changeInCash);
  depreciation = data.depreciation == null ? null : parseFloat(depreciation);
  otherCashflowsFromInvestingActivities = data.otherCashflowsFromInvestingActivities == null ? null : parseFloat(otherCashflowsFromInvestingActivities);
  dividendsPaid = data.dividendsPaid == null ? null : parseFloat(dividendsPaid);
  changeToInventory = data.changeToInventory == null ? null : parseFloat(changeToInventory);
  changeToAccountReceivables = data.changeToAccountReceivables == null ? null : parseFloat(changeToAccountReceivables);
  salePurchaseOfStock = data.salePurchaseOfStock == null ? null : parseFloat(salePurchaseOfStock);
  otherCashflowsFromFinancingActivities = data.otherCashflowsFromFinancingActivities == null ? null : parseFloat(otherCashflowsFromFinancingActivities);
  changeToNetincome = data.changeToNetincome == null ? null : parseFloat(changeToNetincome);
  capitalExpenditures = data.capitalExpenditures == null ? null : parseFloat(capitalExpenditures);



  intangibleAssets = data.intangibleAssets == null ? null : parseFloat(data.intangibleAssets);
  totalLiab = data.totalLiab == null ? null : parseFloat(data.totalLiab);
  totalStockholderEquity = data.totalStockholderEquity == null ? null : parseFloat(data.totalStockholderEquity);
  deferredLongTermLiab = data.deferredLongTermLiab == null ? null : parseFloat(data.deferredLongTermLiab);
  otherCurrentLiab = data.otherCurrentLiab == null ? null : parseFloat(data.otherCurrentLiab);
  totalAssets = data.totalAssets == null ? null : parseFloat(data.totalAssets);
  commonStock = data.commonStock == null ? null : parseFloat(data.commonStock);
  otherCurrentAssets = data.otherCurrentAssets == null ? null : parseFloat(data.otherCurrentAssets);
  retainedEarnings = data.retainedEarnings == null ? null : parseFloat(data.retainedEarnings);
  otherLiab = data.otherLiab == null ? null : parseFloat(data.otherLiab);
  goodWill = data.goodWill == null ? null : parseFloat(data.goodWill);
  otherAssets = data.otherAssets == null ? null : parseFloat(data.otherAssets);
  cash = data.cash == null ? null : parseFloat(data.cash);
  totalCurrentLiabilities = data.totalCurrentLiabilities == null ? null : parseFloat(data.totalCurrentLiabilities);
  shortLongTermDebt = data.shortLongTermDebt == null ? null : parseFloat(data.shortLongTermDebt);
  otherStockholderEquity = data.otherStockholderEquity == null ? null : parseFloat(data.otherStockholderEquity);
  propertyPlantEquipment = data.propertyPlantEquipment == null ? null : parseFloat(data.propertyPlantEquipment);
  totalCurrentAssets = data.totalCurrentAssets == null ? null : parseFloat(data.totalCurrentAssets);
  longTermInvestments = data.longTermInvestments == null ? null : parseFloat(data.longTermInvestments);
  netTangibleAssets = data.netTangibleAssets == null ? null : parseFloat(data.netTangibleAssets);
  shortTermInvestments = data.shortTermInvestments == null ? null : parseFloat(data.shortTermInvestments);
  netReceivables = data.netReceivables == null ? null : parseFloat(data.netReceivables);
  longTermDebt = data.longTermDebt == null ? null : parseFloat(data.longTermDebt);
  inventory = data.inventory == null ? null : parseFloat(data.inventory);
  accountsPayable = data.accountsPayable == null ? null : parseFloat(data.accountsPayable);
  totalPermanentEquity = data.totalPermanentEquity == null ? null : parseFloat(data.totalPermanentEquity);
  noncontrollingInterestInConsolidatedEntity = data.noncontrollingInterestInConsolidatedEntity == null ? null : parseFloat(data.noncontrollingInterestInConsolidatedEntity);
  temporaryEquityRedeemableNoncontrollingInterests = data.temporaryEquityRedeemableNoncontrollingInterests == null ? null : parseFloat(data.temporaryEquityRedeemableNoncontrollingInterests);
  accumulatedOtherComprehensiveIncome = data.accumulatedOtherComprehensiveIncome == null ? null : parseFloat(data.accumulatedOtherComprehensiveIncome);
  additionalPaidInCapital = data.additionalPaidInCapital == null ? null : parseFloat(data.additionalPaidInCapital);
  commonStockTotalEquity = data.commonStockTotalEquity == null ? null : parseFloat(data.commonStockTotalEquity);
  preferredStockTotalEquity = data.preferredStockTotalEquity == null ? null : parseFloat(data.preferredStockTotalEquity);
  retainedEarningsTotalEquity = data.retainedEarningsTotalEquity == null ? null : parseFloat(data.retainedEarningsTotalEquity);
  treasuryStock = data.treasuryStock == null ? null : parseFloat(data.treasuryStock);

  rules_conditions()
  rules_do()
});
