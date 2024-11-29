export const parseFilters = (filters, parse) => {
    const compare = (a, b) => {
        if (a.feature_alias < b.feature_alias) {
            return -1;
        }
        if (a.feature_alias > b.feature_alias) {
            return 1;
        }
        return 0;
    }

    if(!filters) {
        return null
    }

    const headers = filters[0]
    const result = []
    for (let index = 1; index < filters.length; index++) {
        const element = filters[index]
        var obj = {}
        for (let i = 0; i < headers.length; i++) {
            obj[headers[i]] = element[i]
        }
        result.push(obj);
    }

    result.sort(compare)
    result.unshift({ label: "All", feature_alias: "All", feature_id: '0', value: '0', count: 1 })
    return result
};

export const parseFiltersCountries = (countries, parse, market, t) => {
    if(!countries) {
        return null
    }
    
    const headers = countries[0]
    const result = []
    for (let index = 1; index < countries.length; index++) {
        const element = countries[index]
        var obj = {}
        
        for (let i = 0; i < headers.length; i++) {
            obj[headers[i]] = element[i]
        }
        result.push(obj);
    }
    
    if (market !== 'eu') {
        if (!result.find(el => el.iso === "US")) {
            result.push({ iso: "US", name: "UNITED STATES", nicename: "United States", numcode: "840" });
        }
        if (!result.find(el => el.iso === "0")) {
            result.unshift({ iso: "0", name: "All", nicename: "All", numcode: "0" });
        }
    } else {
        result.unshift({ iso: "EU", name: "All", nicename: "All", numcode: "0", value: 0 });
    }

    const countryIso = (iso) => iso.iso.toLowerCase() === 'eu' ? 'europeanunion' : iso.iso.toLowerCase()
    const optionsCountries = result.map(a => {
        return {
            label: `<img class="${a.iso === '0' ? "" : "stock-list-dropdown-flag flag-border"}" src=${a.iso === '0' && a.iso !== 'eu' ? process.env.NEXT_PUBLIC_CDN_URL + '/images/icons/worldIcon.svg' :
                `${process.env.NEXT_PUBLIC_CDN_URL_FLAGS}/` + countryIso(a) + '.svg'} />` + ' ' + a.nicename,
            value: a.numcode,
            nicename: a.nicename,
            iso: a.iso,
            dontDelete: a.iso === "0" || a.iso == 'EU' ? true : false
        }
    })
    optionsCountries.sort((a,b) => (a.nicename > b.nicename) ? 1 : ((b.nicename > a.nicename) ? -1 : 0))
    return optionsCountries
    
};