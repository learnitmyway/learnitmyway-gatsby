import React from 'react'
import Helmet from 'react-helmet'

const Head = ({title, description, url}) => (
  <Helmet title={title}>
    <meta name='description' content={description} />

    <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
    <link rel='manifest' href='/favicon/site.webmanifest' />
    <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#004ba0' />
    <link rel='shortcut icon' href='/favicon/favicon.ico' />
    <meta name='msapplication-TileColor' content='#004ba0' />
    <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
    <meta name='theme-color' content='#ffffff' />

    <meta property='fb:app_id' content='366384430479764' />
    <meta property='og:title' content={title} />
    <meta property='og:url' content={url} />
    <meta property='og:description' content={description} />
    <meta property='og:type' content='website' />
    <meta property='og:image' content='/img/logo-200w.png' />
    <meta property='og:image:width' content='200' />
    <meta property='og:image:height' content='200' />

    <meta name='twitter:card' content='summary' />
  </Helmet>
)

export default Head
