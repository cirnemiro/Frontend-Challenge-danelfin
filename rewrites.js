/** cant find how to make this work with a generated object from COUNTRY_REPOSITORY O_O */
const COUNTRY_MAP = {
  american: {iso: "us", flag: "us", country: "USA", countrySlug: "usa", relative: "american", market: "us"},
  european: {
    iso: "eu",
    flag: "europeanunion",
    country: "Europe",
    countrySlug: "europe",
    numcode: "0",
    relative: "european",
    market: "eu"
  },
  austrian: {
    iso: "at",
    flag: "at",
    country: "Austria",
    countrySlug: "austria",
    numcode: "40",
    relative: "austrian",
    market: "eu"
  },
  belgian: {
    iso: "be",
    flag: "be",
    country: "Belgium",
    countrySlug: "belgium",
    numcode: "56",
    relative: "belgian",
    market: "eu"
  },
  danish: {
    iso: "dk",
    flag: "dk",
    country: "Denmark",
    countrySlug: "denmark",
    numcode: "208",
    relative: "danish",
    market: "eu"
  },
  finnish: {
    iso: "fi",
    flag: "fi",
    country: "Finland",
    countrySlug: "finland",
    numcode: "246",
    relative: "finnish",
    market: "eu"
  },
  french: {
    iso: "fr",
    flag: "fr",
    country: "France",
    countrySlug: "france",
    numcode: "250",
    relative: "french",
    market: "eu"
  },
  german: {
    iso: "de",
    flag: "de",
    country: "Germany",
    countrySlug: "germany",
    numcode: "276",
    relative: "german",
    market: "eu"
  },
  irish: {
    iso: "ie",
    flag: "ie",
    country: "Ireland",
    countrySlug: "ireland",
    numcode: "372",
    relative: "irish",
    market: "eu"
  },
  italian: {
    iso: "it",
    flag: "it",
    country: "Italy",
    countrySlug: "italy",
    numcode: "380",
    relative: "italian",
    market: "eu"
  },
  luxembourgish: {
    iso: "lu",
    flag: "lu",
    country: "Luxembourg",
    countrySlug: "luxembourg",
    numcode: "442",
    relative: "luxembourgish",
    market: "eu"
  },
  dutch: {
    iso: "nl",
    flag: "nl",
    country: "Netherlands",
    countrySlug: "netherlands",
    numcode: "528",
    relative: "dutch",
    market: "eu"
  },
  norwegian: {
    iso: "no",
    flag: "no",
    country: "Norway",
    countrySlug: "norway",
    numcode: "578",
    relative: "norwegian",
    market: "eu"
  },
  polish: {
    iso: "pl",
    flag: "pl",
    country: "Poland",
    countrySlug: "poland",
    numcode: "616",
    relative: "polish",
    market: "eu"
  },
  portuguese: {
    iso: "pt",
    flag: "pt",
    country: "Portugal",
    countrySlug: "portugal",
    numcode: "620",
    relative: "portuguese",
    market: "eu"
  },
  spanish: {
    iso: "es",
    flag: "es",
    country: "Spain",
    countrySlug: "spain",
    numcode: "724",
    relative: "spanish",
    market: "eu"
  },
  swedish: {
    iso: "se",
    flag: "se",
    country: "Sweden",
    countrySlug: "sweden",
    numcode: "752",
    relative: "swedish",
    market: "eu"
  },
  swiss: {
    iso: "ch",
    flag: "ch",
    country: "Switzerland",
    countrySlug: "switzerland",
    numcode: "756",
    relative: "swiss",
    market: "eu"
  },
  british: {
    iso: "gb",
    flag: "gb",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    numcode: "826",
    relative: "british",
    market: "eu"
  },
}

const PRICING_PLANS = {
  annual: {
    slug: "annual",
    isPromo: false,
    canonical: false
  }, monthly: {
    slug: "monthly",
    isPromo: false,
    canonical: false
  }, promo_annual: {
    slug: 'promo-annual',
    isPromo: true,
    canonical: true
  }, promo_monthly: {
    slug: 'promo-monthly',
    isPromo: true,
    canonical: true
  },
};

module.exports = async function rewrites() {
  return [
    {
      source: "/top-stocks/:page*",
      destination: "/tickers/[market]/top-stocks/:page*",
    },
    {
      source: "/etf/:page*",
      destination: "/stock/etf/:page*",
    },
    {
      source: "/stocks/:symbol1-:name1([A-Za-z0-9\\-]+)-vs-:symbol2-:name2([A-Za-z0-9\\-]+)",
      destination: "/stocks/compare?symbol1=:symbol1&symbol2=:symbol2&name1=:name1&name2=:name2",
    },
    /* {
       source: "/stocks/:symbol1-:name1([A-Za-z0-9\\-]+)-vs-:symbol2-:name2([A-Za-z0-9\\-]+)?-compare",
       destination: "/stocks/compare?symbol1=:symbol1&symbol2=:symbol2&name1=:name1&name2=:name2&compare=compare",
     },*/
     /*...Object.entries(PRICING_PLANS).map(([key, value]) => ({
       source: `/pricing/${value.slug}`,
       destination: `/pricing?plan=${value.plan}&isPromo=${value.isPromo}&canonical=${value.canonical}`,
     })),*/
    /** TOP [COUNTRY] STOCKS */
/*
    ...Object.entries(COUNTRY_MAP).map(([key, value]) => {
      return {
        source: `/tops-${key}-stocks`,
        destination: `/tops/${value.countrySlug}?market=${value.market}`,
      };
    })
*/
  ];
}
