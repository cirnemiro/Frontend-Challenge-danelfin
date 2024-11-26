"use client"

import React from 'react';

const CorporationSchemaApp = ({ name, legalName, tickerSymbol, ratingValue, bestRating, worstRating, reviewDate, location, address, logo }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    ...(name && { "name": name }),
    ...(legalName && { "legalName": legalName }),
    ...(tickerSymbol && { "tickerSymbol": tickerSymbol }),
    "review": {
      "@type": "Review",
      ...(name && { "name": name }
      ),
      "reviewAspect": "AI Score",
      ...(ratingValue && {
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": ratingValue,
          "bestRating": bestRating,
          "worstRating": worstRating,
        },
      }),
      "author": {
        "@type": "Organization",
        "name": "Danelfin AI"
      },
      ...(reviewDate && { "datePublished": reviewDate }),
      "publisher": {
        "@type": "Organization",
        "name": "Danelfin AI"
      }
    },
    ...(address && location && { 
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": address,
          "addressCountry": location
        }
      }
    }),
    ...(logo && { "logo": logo }),
  };

  return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
  );
};

export default CorporationSchemaApp;
