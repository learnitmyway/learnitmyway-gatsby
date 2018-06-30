import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Nav from '../components/Nav'
import ShareButtonsVertical from '../components/ShareButtonsVertical'
import ShareButtonsHorizontal from '../components/ShareButtonsHorizontal'
import Subscribe from '../components/Subscribe'
import LinkToRepo from '../components/LinkToRepo'
import License from '../components/License'

const ExtraContent = ({ extraContent }) => {
  return (
    <div className='blog-extras-container nested-links'>
      <div className='blog-extras-container__title'>
        You might also like:
      </div>
      <ul className='extra-content-items'>
        {extraContent.map(item => {
          return (
            <li key={item.title}>
              <a href={item.url} target='_blank' rel='noopener'>{item.title}</a>
              <span> {item.extras}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

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
    const extraContent = post.frontmatter.extraContent

    return (
      <div>
        <Helmet title={`${pageTitle} | ${siteTitle}`}>
          <meta name='description' content={pageDescription || siteDescription} />

          <meta property='fb:app_id' content='366384430479764' />
          <meta property='og:image' content='/img/logo-200w.png' />
          <meta property='og:image:width' content='200' />
          <meta property='og:image:height' content='200' />
          <meta property='og:title' content={`${pageTitle || siteTitle}`} />

          <meta name='twitter:card' content='summary' />
        </Helmet>
        <Nav fixedNav />
        <ShareButtonsVertical pageUrl={pageUrl} pageTitle={pageTitle} pageDescription={pageDescription} />
        <div className='page'>
          <article className='article'>
            <time className='article__date'>
              {date}
            </time>
            <h1 className='article__title--large'>{pageTitle}</h1>
            <section className='article__content nested-links'>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <hr />
            </section>
          </article>
          <div className='article-extra'>
            <Subscribe />
          </div>
          <div className='share-horizontal article-extra'>
            <ShareButtonsHorizontal pageUrl={pageUrl} pageTitle={pageTitle} pageDescription={pageDescription} />
          </div>
          {extraContent &&
            <div className='article-extra'>
              <ExtraContent extraContent={extraContent} />
            </div>
          }
        </div>
        <footer>
          <LinkToRepo />
          <License />
        </footer>
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
