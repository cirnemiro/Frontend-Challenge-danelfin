interface Filter {
    field: string;
    operation: string;
    value: string;
}

const FILTERS_MAP = {
    'country': {
        name: 'country',
        placeholder: 'Country',
        options: [
            {value: '', text: 'Any',},
            {value: 'usa', text: 'USA',},
            {value: 'hong-kong', text: 'Hong Kong',},
            {value: 'belgium', text: 'Belgium',},
        ],
        optionFilterMap: {
            'usa': [{field: 'country', operation: '=', value: 'US'}],
            'hong-kong': [{field: 'country', operation: '=', value: 'HK'}],
            'belgium': [{field: 'country', operation: '=', value: 'BE'}],
        }
    },
    'market-cap': {
        name: 'market-cap',
        placeholder: 'Market Cap',
        options: [
            {value: '', text: 'Any',},
            {value: 'mega', text: 'Mega ($200bln and more)',},
            {value: 'large', text: 'Large ($10bln to $200bln)',},
            {value: 'mid', text: 'Mid ($2bln to $10bln)',},
            {value: 'small', text: 'Small ($300mln to $2bln)',},
            {value: 'micro', text: 'Micro ($50mln to $300mln)',},
            {value: 'nano', text: 'Nano (under $50mln)',},
            {value: 'largeover', text: '+Large (over $10bln)',},
            {value: 'midover', text: '+Mid (over $2bln)',},
            {value: 'smallover', text: '+Small (over $300mln)',},
            {value: 'microover', text: '+Micro (over $50mln)',},
            {value: 'largeunder', text: '-Large (under $200bln)',},
            {value: 'midunder', text: '-Mid (under $10bln)',},
            {value: 'smallunder', text: '-Small (under $2bln)',},
            {value: 'microunder', text: '-Micro (under $300mln)',},
            {value: 'frange', text: 'Custom (Elite only)',},
        ],
        optionFilterMap: {
            'mega': [{field: 'fundamental.market_cap', operation: '>', value: 200000000000}],
            'large': [{field: 'fundamental.market_cap', operation: 'between', value: [10000000000, 200000000000]}],
            'mid': [{field: 'fundamental.market_cap', operation: 'between', value: [2000000000, 10000000000]}]
        }
    },
    'price': {
        name: 'price',
        placeholder: 'Price',
        options: [
            {value: "", text: 'Any'},
            {value: "u1", text: 'Under $1'},
            {value: "u2", text: 'Under $2'},
            {value: "u3", text: 'Under $3'},
            {value: "u4", text: 'Under $4'},
            {value: "u5", text: 'Under $5'},
            {value: "u7", text: 'Under $7'},
            {value: "u10", text: 'Under $10'},
            {value: "u15", text: 'Under $15'},
            {value: "u20", text: 'Under $20'},
            {value: "u30", text: 'Under $30'},
            {value: "u40", text: 'Under $40'},
            {value: "u50", text: 'Under $50'},
            {value: "o1", text: 'Over $1'},
            {value: "o2", text: 'Over $2'},
            {value: "o3", text: 'Over $3'},
            {value: "o4", text: 'Over $4'},
            {value: "o5", text: 'Over $5'},
            {value: "o7", text: 'Over $7'},
            {value: "o10", text: 'Over $10'},
            {value: "o15", text: 'Over $15'},
            {value: "o20", text: 'Over $20'},
            {value: "o30", text: 'Over $30'},
            {value: "o40", text: 'Over $40'},
            {value: "o50", text: 'Over $50'},
            {value: "o60", text: 'Over $60'},
            {value: "o70", text: 'Over $70'},
            {value: "o80", text: 'Over $80'},
            {value: "o90", text: 'Over $90'},
            {value: "o100", text: 'Over $100'},
            {value: "1to5", text: '$1 to $5'},
            {value: "1to10", text: '$1 to $10'},
            {value: "1to20", text: '$1 to $20'},
            {value: "5to10", text: '$5 to $10'},
            {value: "5to20", text: '$5 to $20'},
            {value: "5to50", text: '$5 to $50'},
            {value: "10to20", text: '$10 to $20'},
            {value: "10to50", text: '$10 to $50'},
            {value: "20to50", text: '$20 to $50'},
            {value: "50to100", text: '$50 to $100'},
            {value: "frange", text: 'Custom (Elite only)'},

        ],
        optionFilterMap: {
            'u1': [{field: 'technical.price', operation: '<', value: 1}],
            'u2': [{field: 'technical.price', operation: '<', value: 2}],
            'o1': [{field: 'technical.price', operation: '>', value: 1}]
        }
    },
    'is_trade_idea_buy': {
        name: 'is_trade_idea_buy',
        placeholder: 'Buy',
        optionFilterMap: {
            'true': [{field: 'is_trade_idea', operation: '=', value: 'buy'}],
        }
    },
    'is_trade_idea_sell': {
        name: 'is_trade_idea_sell',
        placeholder: 'Sell',
        optionFilterMap: {
            'true': [{field: 'is_trade_idea', operation: '=', value: 'sell'}],
        }
    },
    'general_score': {
        name: 'general_score',
        placeholder: 'General Score',
        optionFilterMap: Object.fromEntries(
            Array.from({length: 11}, (_, i) => [i, [{
                field: 'score.model_type',
                operation: '=',
                value: 'general'
            }, {field: 'score_value', operation: '=', value: i}]])
        )
    },
    'technical_score': {
        name: 'technical_score',
        placeholder: 'Technical Score',
        optionFilterMap: Object.fromEntries(
            Array.from({length: 11}, (_, i) => [i, [{
                field: 'score.model_type',
                operation: '=',
                value: 'technical'
            }, {field: 'score_value', operation: '=', value: i}]])
        )
    },
    'fundamental_score': {
        name: 'fundamental_score',
        placeholder: 'Fundamental Score',
        optionFilterMap: Object.fromEntries(
            Array.from({length: 11}, (_, i) => [i, [{
                field: 'score.model_type',
                operation: '=',
                value: 'fundamental'
            }, {field: 'score_value', operation: '=', value: i}]])
        )
    },
    'sentiment_score': {
        name: 'sentiment_score',
        placeholder: 'Sentiment Score',
        optionFilterMap: Object.fromEntries(
            Array.from({length: 11}, (_, i) => [i, [{
                field: 'score.model_type',
                operation: '=',
                value: 'sentiment'
            }, {field: 'score_value', operation: '=', value: i}]])
        )
    },
    'risk_score': {
        name: 'risk_score',
        placeholder: 'Risk Score',
        optionFilterMap: Object.fromEntries(
            Array.from({length: 11}, (_, i) => [i, [{
                field: 'score.model_type',
                operation: '=',
                value: 'risk'
            }, {field: 'score_value', operation: '=', value: i}]])
        )
    }
}


export {
    FILTERS_MAP
}

export default Filter