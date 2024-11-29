interface Ticker {
    id: number;
    name: string;
    company: string;
    countryName: string;
    sectorSlug: string;
    industrySlug: string;
    focusSlug: string;
    country: string;
    slug: string;
    eTF: boolean;
    tradeIdea: string;
    alpha_half_year: string;
    alpha_month: string;
    alpha_quarter: string;
    alpha_week: string;
    alpha_year: string;
    alpha_ytd: string;
    perf_half_year: string;
    perf_month: string;
    perf_quarter: string;
    perf_week: string;
    perf_year: string;
    perf_ytd: string;
    ranking: string;
    fundamentalData: {
        marketCap: string;
        pe: string;
    } | null;
    shortName: string;
    technicalData: {
        price: number;
        change: number;
        volume: number;
    } | null;
    score: {
        'fundamental': { change: string, gross: string, ranking: string, value: string } | null;
        'risk': { change: string, gross: string, ranking: string, value: string } | null;
        'general': { change: string, gross: string, ranking: string, value: string } | null;
        'sentiment': { change: string, gross: string, ranking: string, value: string } | null;
        'technical': { change: string, gross: string, ranking: string, value: string } | null;
    } | null;
}

export default Ticker;
