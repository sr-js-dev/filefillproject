function rules_conditions() {
          if ((( netIncome / totalAssets) * 100) > 15) {
            result.push('<li class="list-group-item" data-sections="positive,important">ROA is greater than 15%</li>');
          };
          if (((operatingIncome / totalRevenue )*100) < 10) {
            result.push('<li class="list-group-item" data-sections="negative,companystructure">Operating Margin is weak, indicating the company has poor management</li>');
          };
          if (( totalLiab / totalStockholderEquity ) < 1) {
            result.push('<li class="list-group-item" data-sections="positive">Company is purchasing most of its assets with equity</li>');
          };
          if (( totalCurrentAssets / totalCurrentLiabilities ) > 1.5) {
            result.push('<li class="list-group-item" data-sections="positive">Company is able to pay off short term obligations</li>');
          };
          if ((( netIncome / totalAssets) * 100) > 15) {
            result.push('<li class="list-group-item" data-sections="positive">Company is using their Assets efficiently.</li>');
          };
          if (( operatingIncome / totalRevenue ) > 25) {
            result.push('<li class="list-group-item" data-sections="positive">Operating Margin is very strong, indicating efficient management</li>');
          };
          if ((( cash + netReceivables + shortTermInvestments ) / totalCurrentLiabilities ) < 1) {
            result.push('<li class="list-group-item" data-sections="negative">Company is unable to pay off its current debt</li>');
          };
          if ((( cash + netReceivables + shortTermInvestments ) / totalCurrentLiabilities ) > 1) {
            result.push('<li class="list-group-item" data-sections="positive">Company is capable of paying off its current debt</li>');
          };
          if (( totalCurrentAssets / totalCurrentLiabilities ) > 2) {
            result.push('<li class="list-group-item" data-sections="negative">Company has a surplus of funds which are not being handled well</li>');
          };
          if (((cash + shortTermInvestments ) / totalCurrentLiabilities) < 0.2) {
            result.push('<li class="list-group-item" data-sections="negative">The company might encounter immediate problems with paying bills</li>');
          };
          if (((longTermDebt + shortLongTermDebt ) / totalStockholderEquity) > 3) {
            result.push('<li class="list-group-item" data-sections="negative">Company is too over-leveraged and may experience difficulty raising new capital</li>');
          };
          if (((longTermDebt + shortLongTermDebt ) / totalStockholderEquity) < 0.3) {
            result.push('<li class="list-group-item" data-sections="neutral">Company\'s debt situation is stable but its Debt To Equity Ratio suggests management is unwilling to take risks</li>');
          };
          if ((netIncome / (longTermDebt + shortLongTermDebt ) ) > 1.5) {
            result.push('<li class="list-group-item" data-sections="neutral">High percentage of the company\'s cash comes from their operations</li>');
          };
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
          if ( netIncome > netIncome_3) {
            result.push('<li class="list-group-item" data-sections="positive">ni3 works</li>');
          };
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
          if ( netIncome_2 > netIncome_3) {
            result.push('<li class="list-group-item" data-sections="positive">ni2 > ni3 works</li>');
          };
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
              target_year = period_of_report_year - 4;

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

              data_4 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_4 = data_4['netIncome']
            
          if ( netIncome_2 > netIncome_3 && ~ netIncome_3 > netIncome_4) {
            result.push('<li class="list-group-item" data-sections="positive">testing now</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
          if (netIncome > netIncome_1 && netIncome_1 > netIncome_2 && netIncome_2 > netIncome_3) {
            result.push('<li class="list-group-item" data-sections="positive">ni3 test</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
              target_year = period_of_report_year - 4;

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

              data_4 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_4 = data_4['netIncome']
            
              target_year = period_of_report_year - 4;

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

              data_4 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_4 = data_4['netIncome']
            
              target_year = period_of_report_year - 5;

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

              data_5 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_5 = data_5['netIncome']
            
          if (netIncome > netIncome_1 && netIncome_1 > netIncome_2 && netIncome_2 > netIncome_3 && netIncome_3 > netIncome_4 && netIncome_4 > netIncome_5 ) {
            result.push('<li class="list-group-item" data-sections="positive">ni for several periods</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
              target_year = period_of_report_year - 4;

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

              data_4 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_4 = data_4['netIncome']
            
              target_year = period_of_report_year - 4;

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

              data_4 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_4 = data_4['netIncome']
            
              target_year = period_of_report_year - 5;

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

              data_5 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_5 = data_5['netIncome']
            
          if (netIncome > netIncome_1 && netIncome_1 > netIncome_2 && netIncome_2 > netIncome_3 && netIncome_3 > netIncome_4 && netIncome_4 < netIncome_5 ) {
            result.push('<li class="list-group-item" data-sections="positive">ni test test test</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
          if (netIncome > netIncome_1 && netIncome_1 < netIncome_2 && netIncome_2 > netIncome_3) {
            result.push('<li class="list-group-item" data-sections="positive">HR 1</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalRevenue_1 = data_1['totalRevenue']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netBorrowings_1 = data_1['netBorrowings']
            
          if (totalRevenue < totalRevenue_1 && netBorrowings > netBorrowings_1) {
            result.push('<li class="list-group-item" data-sections="negative">Company is obtaining more debt than its requirement and it will hamper company capacity to repay</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalRevenue_1 = data_1['totalRevenue']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netBorrowings_1 = data_1['netBorrowings']
            
          if (totalRevenue > totalRevenue_1 && netBorrowings < netBorrowings_1) {
            result.push('<li class="list-group-item" data-sections="positive">Company is less relying on debt and financing most of working capital requirements through equity</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            costOfRevenue_1 = data_1['costOfRevenue']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            grossProfit_1 = data_1['grossProfit']
            
          if (costOfRevenue > costOfRevenue_1 && grossProfit < grossProfit_1) {
            result.push('<li class="list-group-item" data-sections="negative">Company may be unable to control its direct cost</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities > totalCashFromOperatingActivities_1 && totalCashflowsFromInvestingActivities > totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="positive">Company is generating enough cash flow from its routine operations to finance its initial operations</li>');
          };
          if ((totalRevenue / netIncome) < ~(totalRevenue[1] / netIncome[1])) {
            result.push('<li class="list-group-item" data-sections="negative">Shrinking gross margin</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            cash_1 = data_1['cash']
            
          if (cash > cash_1) {
            result.push('<li class="list-group-item" data-sections="positive">Inflow of Cash</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            cash_1 = data_1['cash']
            
          if (cash < cash_1) {
            result.push('<li class="list-group-item" data-sections="neutral">Outflow of cash</li>');
          };
          if ((((totalRevenue - costOfRevenue ) / totalRevenue ) *100) > 50) {
            result.push('<li class="list-group-item" data-sections="positive,important">Company is selling its inventory for a much larger price then what it obtained it for</li>');
          };
          if (( totalRevenue / totalAssets ) < 1) {
            result.push('<li class="list-group-item" data-sections="negative">Company is failing to generate efficient revenue</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netReceivables_1 = data_1['netReceivables']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalRevenue_1 = data_1['totalRevenue']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalRevenue_1 = data_1['totalRevenue']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netReceivables_1 = data_1['netReceivables']
            
          if ( ( ( netReceivables - netReceivables_1 ) / netReceivables ) > ( ( totalRevenue - totalRevenue_1 ) / totalRevenue ) && totalRevenue > totalRevenue_1  &&  netReceivables > netReceivables_1) {
            result.push('<li class="list-group-item" data-sections="negative">Receivables growing faster than sales</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities > totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities > totalCashFromFinancingActivities_1  &&  totalCashflowsFromInvestingActivities < totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="positive,important">The company is expanding its operation by using the positive cash flows from operations and financing to expand its capital base. This scenario is stable.</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities > totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities < totalCashFromFinancingActivities_1  &&  totalCashflowsFromInvestingActivities > totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="neutral,important">The company is selling off its assets and using the cash from operations to pay off member equity/debt. However, the company can not keep selling off its investments and survive in the long run. This is a stable scenario in the short run.</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities < totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities > totalCashFromFinancingActivities_1  &&  totalCashflowsFromInvestingActivities < totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="neutral">The company could be expanding operations because of increased business or business could be in a downturn. However, it is not a stable long-term position. This scenario is indeterminate.</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities < totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities < totalCashFromFinancingActivities_1  &&  totalCashflowsFromInvestingActivities > totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="negative,important">The business is contracting and the company is selling off its investments to fund operations and retire its equity/debt. This situation is not stable.</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities > totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities < totalCashFromFinancingActivities_1  &&   totalCashflowsFromInvestingActivities < totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="positive,important">The cash flows from operations are funding capital expansion and debt/equity retirement. This scenario shows very strong operations and is stable.</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities < totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities < totalCashFromFinancingActivities_1  &&   totalCashflowsFromInvestingActivities < totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="negative,important">The company is drawing down its cash reserves and may face liquidity problems in the near future. This situation is not stable</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities > totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities > totalCashFromFinancingActivities_1  &&  totalCashflowsFromInvestingActivities > totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="neutral,unusualactivity">The company is using cash flow from all three areas (operations, investments, and financing) to build up cash reserves. The company may be looking for an acquisition. This position is not stable in the long run.</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities < totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities > totalCashFromFinancingActivities_1  &&  totalCashflowsFromInvestingActivities > totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="neutral,important">The company is subsidizing its operations through debt/equity and selling off parts of its investments. This situation is not stable in the long run.</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
              target_year = period_of_report_year - 4;

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

              data_4 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_4 = data_4['netIncome']
            
          if (netIncome > netIncome_1 && netIncome_1 > netIncome_2  &&  netIncome_2 > netIncome_3  &&  netIncome_3 < netIncome_4) {
            result.push('<li class="list-group-item" data-sections="positive">Net Income has been increasing for the last 3 reports</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
              target_year = period_of_report_year - 4;

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

              data_4 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_4 = data_4['netIncome']
            
          if (netIncome > netIncome_1 && netIncome_1 > netIncome_2  &&  netIncome_2 > netIncome_3  &&  netIncome_3 < netIncome_4) {
            result.push('<li class="list-group-item" data-sections="positive">cc1</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
              target_year = period_of_report_year - 4;

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

              data_4 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_4 = data_4['netIncome']
            
          if (netIncome > netIncome_1 &&  netIncome_1 > netIncome_2 && netIncome_2 > netIncome_3  &&  netIncome_3 < netIncome_4) {
            result.push('<li class="list-group-item" data-sections="positive">sasasas</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
              target_year = period_of_report_year - 4;

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

              data_4 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_4 = data_4['netIncome']
            
          if (netIncome > netIncome_1  &&  netIncome_1 > netIncome_2  &&  netIncome_2 > netIncome_3  &&  netIncome_3 < netIncome_4) {
            result.push('<li class="list-group-item" data-sections="positive">x1</li>');
          };
          if (5 > 4  &&  4 > 3  &&  3 > 2 && 2 > 1) {
            result.push('<li class="list-group-item" data-sections="positive">final test</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_1 = data_1['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 2;

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

              data_2 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_2 = data_2['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
              target_year = period_of_report_year - 3;

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

              data_3 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_3 = data_3['netIncome']
            
              target_year = period_of_report_year - 4;

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

              data_4 = {...balance_sheet_tem, ...income_statement_tem};


            
            netIncome_4 = data_4['netIncome']
            
          if (netIncome > netIncome_1  &&  netIncome_1 > netIncome_2  &&  netIncome_2 > netIncome_3  &&  netIncome_3 < netIncome_4) {
            result.push('<li class="list-group-item" data-sections="positive">nr1</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities < totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities < totalCashFromFinancingActivities_1  &&  totalCashflowsFromInvestingActivities < totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="negative,important">The company is drawing down its cash reserves and may face liquidity problems in the near future. This situation is not stable.</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities > totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities > totalCashFromFinancingActivities_1  &&  totalCashflowsFromInvestingActivities < totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="positive,important">The company is expanding its operation by using the positive cash flows from operations and financing to expand its capital base. This scenario is stable.</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities > totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities < totalCashFromFinancingActivities_1  &&  totalCashflowsFromInvestingActivities > totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="neutral,important">The company is selling off its assets and using the cash from operations to pay off member equity/debt. However, the company can not keep selling off its investments and survive in the long run. This is a stable scenario in the short run.</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities < totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities > totalCashFromFinancingActivities_1  &&  totalCashflowsFromInvestingActivities < totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="neutral">The company could be expanding operations because of increased business or business could be in a downturn. However, it is not a stable long-term position. This scenario is indeterminate.</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities < totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities < totalCashFromFinancingActivities_1  &&  totalCashflowsFromInvestingActivities > totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="negative,important">The business is contracting and the company is selling off its investments to fund operations and retire its equity/debt. This situation is not stable.</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities > totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities < totalCashFromFinancingActivities_1  &&  totalCashflowsFromInvestingActivities < totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="positive,important">The cash flows from operations are funding capital expansion and debt/equity retirement. This scenario shows very strong operations and is stable.</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities < totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities < totalCashFromFinancingActivities_1  &&  totalCashflowsFromInvestingActivities < totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="negative,important">The company is drawing down its cash reserves and may face liquidity problems in the near future. This situation is not stable</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities > totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities > totalCashFromFinancingActivities_1  &&  totalCashflowsFromInvestingActivities > totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="neutral,unusualactivity">The company is using cash flow from all three areas (operations, investments, and financing) to build up cash reserves. The company may be looking for an acquisition. This position is not stable in the long run.</li>');
          };
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromOperatingActivities_1 = data_1['totalCashFromOperatingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashFromFinancingActivities_1 = data_1['totalCashFromFinancingActivities']
            
              target_year = period_of_report_year - 1;

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

              data_1 = {...balance_sheet_tem, ...income_statement_tem};


            
            totalCashflowsFromInvestingActivities_1 = data_1['totalCashflowsFromInvestingActivities']
            
          if (totalCashFromOperatingActivities < totalCashFromOperatingActivities_1  &&  totalCashFromFinancingActivities > totalCashFromFinancingActivities_1  &&  totalCashflowsFromInvestingActivities > totalCashflowsFromInvestingActivities_1) {
            result.push('<li class="list-group-item" data-sections="neutral,important">The company is subsidizing its operations through debt/equity and selling off parts of its investments. This situation is not stable in the long run.</li>');
          };
          if (5 > 4) {
            result.push('<li class="list-group-item" data-sections="positive">yea</li>');
          };}