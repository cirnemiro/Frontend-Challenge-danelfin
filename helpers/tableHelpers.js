
export const alphaNiceNames = ["Price", "Volume", "Index", "Market Cap", "Short Interest", "P/E", "Dividend Yield (%)", "P/FCF",
"ROI", "ROE", "Perf Week", "Perf Quarter", "Perf Year", "Perf YTD", "Perf Month", "Perf Half Year", "Alpha YTD", "Alpha Year",
"Alpha Half Year", "Alpha Quarter", "Alpha Month", "Alpha Week", "Beta", "AUM", "Expense Ratio", "Fund Level Flows (1Y)",
"Turnover Ratio", "52-Week High", "52-Week Low", "Buy Signals (Days)"];

export const technicalDataColumnFunction = (value, chosenAlpha) => {
    if (!value) return null;

    const mappings = {
        "Price": value.price,
        "Volume": value.volume,
        "Index": value.index,
        "Market Cap": value.market_cap || value.finviz_market_cap,
        "Short Interest": value.short_interest,
        "P/E": value.pe || value.weighted_average_pe_ratio || value.finviz_pe,
        "Dividend Yield (%)": value.dividend_yield || value.finviz_dividend_pct,
        "P/FCF": value.pfcf || value.finviz_p_fcf,
        "ROI": value.roi || value.finviz_roi,
        "ROE": value.roe || value.finviz_roe,
        "Perf Week": value.perf_week,
        "Perf Quarter": value.perf_quarter,
        "Perf Year": value.perf_year,
        "Perf YTD": value.perf_ytd,
        "Perf Month": value.perf_month,
        "Perf Half Year": value.perf_halfyear || value.perf_half,
        "Alpha YTD": value.alpha_ytd,
        "Alpha Year": value.alpha_year,
        "Alpha Half Year": value.alpha_halfyear || value.alpha_half,
        "Alpha Quarter": value.alpha_quarter,
        "Alpha Month": value.alpha_month,
        "Alpha Week": value.alpha_week,
        "Beta": value.beta || value.finviz_beta,
        "AUM": value.total_assets_under_management,
        "Average Volume": value.avg_volume,
        "Expense Ratio": value.turnover_ratio,
        "Fund Level Flows (1Y)": value.year_1_fund_level_flows,
        "Turnover Ratio": value.turnover_ratio,
        "52-Week High": value.high_52w,
        "52-Week Low": value.low_52w,
        "Buy Signals (Days)": value.num_casos_3m
    };

    return mappings[chosenAlpha] !== undefined ? mappings[chosenAlpha] : value[chosenAlpha];
};

export const technicalDataTextMillionsFormat = (text) => {
    if(!text) {
        return;
    }
    const suffix = text.slice(-1);
    const hasDecimals = text.includes(".");
    const onlyNumber = text.replace("M", "").replace("B", "");
    const numWith2Decimals = hasDecimals ? parseFloat(onlyNumber).toFixed(2) : parseInt(onlyNumber);
    if(suffix === "M" || suffix === "B") {
        return `${numWith2Decimals}${suffix}`;
    } else {
        if(isNaN(text)) {
            return text;
        } else {
            return numWith2Decimals;
        }
    }
};

export const technicalDataNames = (textCopy, key, t, market, dsTable, isEtf) => {
    let alphaColumnKeys = [];
    const getKeys = dsTable && dsTable.length ? dsTable.map(ob => {
        if (ob.technical_data !== undefined && ob.technical_data !== null && Object.keys(ob.technical_data).length > 0) {
            alphaColumnKeys = alphaColumnKeys.concat(Object.keys(ob.technical_data))
        }
    }) : null;
    let uniqueKeys = [...new Set(alphaColumnKeys)];
    const etfExcluded = ['market_cap', 'pe', 'roe', 'roi', 'pfcf']
    const euExcluded = ['finviz_beta', 'finviz_dividend_pct', 'finviz_market_cap', 'finviz_p_fcf', 'finviz_pe', 'finviz_roe', 'finviz_roi']
    if(market === "eu"){
        uniqueKeys = uniqueKeys.filter(el=> !euExcluded.includes(el))
    }

    if(isEtf){
        uniqueKeys = uniqueKeys.filter(el=> !etfExcluded.includes(el))
    }

    let technicalDataDropdown = key ? [key] : uniqueKeys;
    return technicalDataDropdown = technicalDataDropdown.map((item) => {
        return item = item === "price" || item === "volume" || item === "index" || item === "market_cap" ||
            item === "short_interest" || item === "pe" || item === "dividend_yield" || item === "pfcf" || item === "roi" ||
            item === "roe" || item === "perf_week" || item === "perf_quarter" || item === "perf_year" || item === "perf_ytd" ||
            item === "perf_month" || item === "perf_halfyear" || item === "alpha_ytd" || item === "alpha_year" || item === "alpha_halfyear" || item === "avg_volume" ||
            item === "alpha_quarter" || item === "alpha_month" || item === "alpha_week" || item === "beta" ||
            item === "finviz_beta" || item === "finviz_dividend_pct" || item === "finviz_market_cap" || item === "finviz_p_fcf" || item === "finviz_pe" ||
            item === "finviz_roe" || item === "finviz_roi" || item === "alpha_half" || item === "perf_half" ||
            item === "total_assets_under_management" ||
            item === "turnover_ratio" ||
            item === "weighted_average_pe_ratio" ||
            item === "expense_ratio" ||
            item === "high_52w" ||
            item === "low_52w" ||
            item === "num_casos_3m" ||
            item === "year_1_fund_level_flows" ?
            t(`${textCopy}.${item}`) :
            item;
    });
};

export const queryAlphaFormat = (filter) => { //function to retrieve the query alpha without spaces and provide the nice name
    let queryAlphaExists;
    const queryAlpha = alphaNiceNames.map(alpha => {
        if(alpha.replaceAll(" ", "") === filter) queryAlphaExists = alpha;
    });
    return queryAlphaExists;
};

export const changeQuerySlug = (param) => { //function for changing or adding query params after the ?, given the new param
    const urlSplit = window.location.search.split("&");
    const paramsList = param.split("&");
    let newUrl;
    paramsList.map(param => {
        newUrl = urlSplit.map((item, i) => {
            const rawItem = i === 0 ? item.replace("?", "") : item;
            if(rawItem.split("=")[0] === param.split("=")[0]) {
                return item = param;
            } else {
                return rawItem;
            }
        });
        if(!newUrl.includes(param)) {
            newUrl.push(param);
        }
    });
    
    const urlTo = `?${newUrl[0] === "" ? param : newUrl.join("&")}`;
    window.history.pushState(null, "", urlTo);
};

export const removeQuerySlug = (param) => { //function for removing query params, given the param to delete
    const urlSplit = window.location.search.split("&");
    let newUrl = [];
    urlSplit.map((item, i) => {
        const rawItem = i === 0 ? item.replace("?", "") : item;
        const includesParam = rawItem.includes(param.split("=")[0]);
        if(rawItem === "" || includesParam || (includesParam && param.split("=")[1] === "")) {
            return;
        } else {
            return newUrl.push(rawItem);
        }
    });
    const urlTo = `?${newUrl[0] === "" ? param : newUrl.join("&")}`;
    window.history.pushState(null, "", urlTo);
};

export const findFilter = (name) => { //function receiving the filter name and returning the actual query value
    if(typeof window !== "undefined") {
        const searchSplit = window.location.search.split("&");
        let theFilter;
        for (let i = 0; i < searchSplit.length; i++) {
            const item = searchSplit[i];
            if(item.includes(`${name}=`)) {
                theFilter = item.replace("?", "")
                theFilter = theFilter.replace(`${name}=`, "");
                break;
            }
        }
        return theFilter;
    }
};

export const sortColumn = (dataSetProvided) => {
    if(dataSetProvided) {
        let filter = findFilter("filter");
        let order = findFilter("order");
        const fullDataToOrder = [...dataSetProvided];
        const wasSorted = order === "asc";
        
        const positive = wasSorted ? 1 : -1;
        const negative = wasSorted ? -1 : 1;
        if(filter && filter.includes("alphaColumn")) {
            const theRightAlpha = queryAlphaFormat(filter.replace("alphaColumn", "")); 
            const dataToCompare = (dataChosen) => technicalDataColumnFunction(dataChosen?.technical_data, theRightAlpha);
            const millionsAndBillionsFormat = (arr) => {
                const multipliers = { M: 1000000, B: 1000000000 };
                const value = dataToCompare(arr);
                const suffix = value ? value.slice(-1) : null;
                if (value && (suffix === 'M' || suffix === 'B')) {
                    const number = parseFloat(value);
                    if(theRightAlpha === "Market Cap") {
                        return arr = { ...arr, technical_data: { ...arr.technical_data, market_cap: number * multipliers[suffix] } };
                    }
                    if(theRightAlpha === "AUM") {
                        return arr = { ...arr, technical_data: { ...arr.technical_data, total_assets_under_management: number * multipliers[suffix] } };
                    }
                    if(theRightAlpha === "Fund Level Flows (1Y)") {
                        return arr = { ...arr, technical_data: { ...arr.technical_data, year_1_fund_level_flows: number * multipliers[suffix] } };
                    }
                } else {
                    return arr;
                }
            };
            const arrSorted = fullDataToOrder.sort(function (a, b) {
                const arrayA = { ...a };
                const arrayB = { ...b };
                const checkNumber = (arr) => {
                    const compareValue = dataToCompare(arr);
                    if (isNaN(parseFloat(compareValue))) {
                        return parseFloat(millionsAndBillionsFormat(compareValue));
                    } else {
                        return parseFloat(compareValue);
                    }
                };
    
                if (checkNumber(arrayA) === checkNumber(arrayB)) {
                    return 0; 
                } else if (dataToCompare(arrayA) === null || dataToCompare(arrayA) === undefined) {
                    return 1;
                } else if (order === "asc") {
                    return checkNumber(arrayA) < checkNumber(arrayB) ? -1 : 1;
                } else {
                    return checkNumber(arrayA) < checkNumber(arrayB) ? 1 : -1;
                }
            });
            return arrSorted;
        }
        const dataToCompare = (dataChosen) => 
            filter === "rank" ? parseInt(dataChosen.self_ranking || dataChosen.rank || dataChosen.ranking)
            : filter === "company" ? dataChosen.ticker
            : filter === "name" ? dataChosen.keyword || dataChosen.name
            : filter === "country" ? dataChosen.country_flag_img 
            : filter === "score" || filter === "aiscore" ? parseInt(dataChosen.smartscore || dataChosen.smartscore_avg || dataChosen.aiscore_general_cat)
            : filter === "change" ? parseInt(dataChosen.change) 
            : filter === "fundamental" ? parseInt(dataChosen.fundamental_score || dataChosen.fundamentalscore_value || dataChosen.aiscore_fundamental_cat)
            : filter === "technical" ? parseInt(dataChosen.technical_score || dataChosen.technicalscore_avg || dataChosen.aiscore_technical_cat) 
            : filter === "sentiment" ? parseInt(dataChosen.sentiment_score || dataChosen.sentimentscore_avg || dataChosen.aiscore_sentiment_cat)
            : filter === "risk" ? parseInt(dataChosen.risk_score || dataChosen.riskscore_avg || dataChosen.lowrisk)
            : filter === "sector" ? dataChosen.sector 
            : filter === "industry" ? dataChosen.industry 
            : filter === "gain" ? dataChosen.gain 
            : filter === "numComp" ? parseInt(dataChosen.num || dataChosen.total) 
            : filter === "relevance" ? parseInt(dataChosen.relevance) 
            : undefined;
            
            const arrNoNulls = (arr) => arr.sort(function (a, b) {
                return (dataToCompare(a) === null) - (dataToCompare(b) === null);
            });
    
            const fullDataSetArrWithoutNulls = arrNoNulls(fullDataToOrder)
            const arrSorted = (arr) => arr.sort( (a, b) => {
                if (dataToCompare(a) > dataToCompare(b)) {
                    return positive;
                }
                if (dataToCompare(a) < dataToCompare(b)) {
                    return negative;
                }
                return 0;
            });
            return arrSorted(fullDataSetArrWithoutNulls);
    }
};

export const addIndexToTable = (arr) => { //table arrives with a rank that is not correlative, this function adds the correct index to the rank
    let previousIndex = 0;
    const newArr = [];
    arr?.map((el, i)=> {
        if(el?.self_ranking){
            el.self_ranking = previousIndex + 1
        }

        if(el?.ranking){
            el.ranking = previousIndex + 1
        }
        newArr.push(el)
        previousIndex = i + 1
    })
    return newArr;
}

export const parseJSON = (json) => {
    if (json) {
        const headers = json[0]
        const result = []
        for (let index = 1; index < json.length; index++) {
            const element = json[index]
            var obj = {}
            for (let i = 0; i < headers.length; i++) {
                obj[headers[i]] = element[i]
            }
            result.push(obj);
        }
        return result
    } else {
        return null
    }
}

export const updateEtfDataSet = (newFilter, value, clearFilters, fullDataSet) => {
    let cds = [...fullDataSet]; //current dataSet
    if(clearFilters) { //this case is for when clear filter button is pressed, as only affects these filters
        clearFilters()
    }
    
    const removeInvalidCharacters = (string) => typeof string ==='string'? string.replaceAll(" ", "").replaceAll("&", "") : string;
    let urlSplit = window.location.search.split("&");
    if(urlSplit.filter(el => el.includes(`${newFilter}=`)).length === 0) {
      if(value !== null) {
        urlSplit.push(`${newFilter}=${removeInvalidCharacters(value)}`);
      }
    } else {
      urlSplit = urlSplit.map(item => {
        if(item.includes(`${newFilter}=`)) {
          return item = `${newFilter}=${removeInvalidCharacters(value)}`;
        } else {
          if(value !== null) {
            return item;
          }
        }
      });
    }

    urlSplit.map((item, i) => {
        const rawItem = i === 0 ? item.replace("?", "") : item;
        const itemKey = rawItem.split("=")[0];
        const itemValue = rawItem.split("=")[1];
        switch (itemKey) {
          case 'region':
            cds = cds.filter((etf) => removeInvalidCharacters(etf.region_general) === itemValue);
          break;
          case 'assetClass':
            cds = cds.filter((etf) => removeInvalidCharacters(etf.asset_class) === itemValue);
          break;
          case 'indexName':
            cds = cds.filter((etf) => removeInvalidCharacters(etf.index_tracked) === itemValue);
          break;
          case 'focus':
            cds = cds.filter((etf) => removeInvalidCharacters(etf.focus) === itemValue);
          break;
          case 'strategy':
            cds = cds.filter((etf) => removeInvalidCharacters(etf.strategy) === itemValue);
          break;
          case 'buy':
            const sellTrackChecked = urlSplit.find(item => item.includes("sell="));
            if(itemValue == 'true') {
              cds = cds.filter((ticker) => ticker.tids == "buy" || (sellTrackChecked === "sell=true" ? ticker.tids == "sell" : null))
            } 
          break;
          case 'sell':
            const buyTrackChecked = urlSplit.find(item => item.includes("buy="));
            if(itemValue == 'true') {
              cds = cds.filter((ticker) => ticker.tids == "sell" || (buyTrackChecked === "buy=true" ? ticker.tids == "buy" : null))
            } 
          break;
          case 'filter':
            cds = sortColumn(cds);
          break;
      } 
    });
    
    const retrieveNewIndex = () => { // function for changing the ranking index
      let sortable = [...cds];
      sortable.sort(function(a, b) {
          return a.ranking - b.ranking;
      });
      cds.map(etf => {
        sortable.map((itemSorted, i) => {
          if(itemSorted.ticker === etf.ticker) {
            etf.ranking = i + 1;
          }
        });
      });
    };
    
    retrieveNewIndex();
    
    return sortColumn(cds);
};
