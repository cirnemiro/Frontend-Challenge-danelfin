const { i18n } = require('./next-i18next.config');

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
