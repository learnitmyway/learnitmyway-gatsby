import React from 'react'

import Head from '../components/Head'

import 'prismjs/themes/prism-solarizedlight.css'
import 'normalize.css'
import '../css/styles.css'

class Template extends React.Component {
  render () {
    const { children, data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const siteUrl = data.site.siteMetadata.siteUrl

    return (
      <div>
        <Head title={siteTitle} description={siteDescription} url={siteUrl} />
        {children()}
      </div>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`
