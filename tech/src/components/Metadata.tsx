import React from 'react'
import { Helmet } from 'react-helmet'

import siteImage from '../images/favicon.png'
import useSiteMetadata from '../queries/useSiteMetadata'

export default function Metadata() {
  const site = useSiteMetadata()

  return (
    <Helmet>
      {/* HTML language */}
      <html itemScope itemType="http://schema.org/WebPage" lang={site.language} />

      {/* Title comes first (meta charset and viewport are automatically included) */}
      <title itemProp="name">{site.title}</title>

      {/* Search engine */}
      <meta name="description" content={site.description} />
      <meta name="image" content={site.siteUrl + siteImage} />
      <link rel="canonical" href={site.siteUrl} />

      {/* Preconnect to external data sources */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

      {/* Schema.org for Google */}
      <meta itemProp="name" content={site.title} />
      <meta itemProp="description" content={site.description} />
      <meta itemProp="image" content={site.siteUrl + siteImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={site.title} />
      <meta name="twitter:description" content={site.description} />
      <meta name="twitter:image" content={site.siteUrl + siteImage} />

      {/* Open Graph general (Facebook, Pinterest, Slack & Google+) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={site.title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:site_name" content={site.title} />
      <meta property="og:url" content={site.siteUrl} />
      <meta property="og:image" content={site.siteUrl + siteImage} />
      <meta property="og:locale" content={site.locale} />

      {/* Non-essential, but required for analytics */}
      {site.facebookAppId && <meta property="fb:app_id" content={site.facebookAppId} />}
      {site.twitterHandle && <meta name="twitter:site" content={site.twitterHandle} />}
    </Helmet>
  )
}
