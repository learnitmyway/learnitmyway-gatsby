import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Nav from '../components/Nav'
import ShareButtons from '../components/ShareButtons'
import Subscribe from '../components/Subscribe'
import ExtraContent from '../components/ExtraContent'

class BlogPostTemplate extends React.Component {
  render () {
    const { data, location } = this.props
    const post = data.markdownRemark
    const date = post.frontmatter.date
    const siteTitle = data.site.siteMetadata.title
    const pageTitle = post.frontmatter.title
    const siteDescription = data.site.siteMetadata.description
    const pageDescription = post.frontmatter.excerpt
    const siteUrl = data.site.siteMetadata.siteUrl
    const pathName = location.pathname
    const pageUrl = `${siteUrl}${pathName}`
    const { previous, next } = this.props.pathContext
    const extraContent = post.frontmatter.extraContent

    return (
      <div>
        <Helmet title={`${pageTitle} | ${siteTitle}`}>
          <meta name='description' content={pageDescription || siteDescription} />
        </Helmet>
        <Nav fixedNav />
        <ShareButtons pageUrl={pageUrl} />
        <div className='page'>
          <article className='article'>
            <time className='article__date'>
              {date}
            </time>
            <h1 className='article__title--large'>{pageTitle}</h1>
            <section className='article__content nested-links'>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </section>
          </article>
          <div className='article-extra'>
            <Subscribe />
          </div>
          {extraContent &&
            <div className='article-extra'>
              <ExtraContent extraContent={extraContent} />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        excerpt
        date(formatString: "MMMM DD, YYYY")
        extraContent {
          url
          title
          extras
        }
      }
    }
  }
`
