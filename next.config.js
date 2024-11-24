const {i18n} = require('./next-i18next.config');
const rewrites = require('./rewrites');

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  }
]

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  trailingSlash: false,
  async rewrites() {
    return await rewrites();
  },
  async redirects() {
    return [
      {
        source: '/best-stocks',
        destination: '/',
        permanent: true,
      },
      {
        source: '/crowdfunding',
        destination: 'https://www.crowdcube.com/companies/danelfin/pitches/lz9VAq',
        permanent: true,
      },
      {
        source: '/etfs/:index',
        destination: '/etf/:index',
        permanent: true,
      },
      {
        source: '/stocks/investing-themes',
        destination: '/stocks/investment-themes',
        permanent: true,
      },
      {
        source: '/docs/Danelfin_Best_Stocks_Performance.pdf',
        destination: '/best-stock-investment-strategy',
        permanent: true,
      },
      {
        source: '/stocks/:symbol-investing-themes',
        destination: '/stocks/:symbol-investment-themes',
        permanent: true,
      },
     /* {
        source: '/pricing',
        destination: '/pricing/annual',
        permanent: true,
      },*/
    ]
  },
  i18n,
  images: {
    domains: [
      process.env.PUBLIC_URL,
      'localhost',
      'cdn1.danelfin.com',
      'next.danelfin.com'
    ],
    loader: 'default',
    path: process.env.PUBLIC_URL,
  }
}
