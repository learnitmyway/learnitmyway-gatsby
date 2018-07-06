import React from 'react'

import Head from '../components/Head'
import Nav from '../components/Nav'
import ShareButtons from '../components/ShareButtons'
import Subscribe from '../components/Subscribe'
import Comments from '../components/Comments'
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
    const title = `${pageTitle} | ${siteTitle}`
    const siteDescription = data.site.siteMetadata.description
    const pageDescription = post.frontmatter.excerpt
    const description = pageDescription || siteDescription
    const siteUrl = data.site.siteMetadata.siteUrl
    const pathName = location.pathname
    const pageUrl = `${siteUrl}${pathName}`
    const extraContent = post.frontmatter.extraContent

    return (
      <div>
        <Head title={title} description={description} />
        <Nav fixedNav />
        <ShareButtons url={pageUrl} title={pageTitle} description={pageDescription} vertical />
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
          <div className='share-horizontal article-extra'>
            <ShareButtons url={pageUrl} title={pageTitle} description={pageDescription} />
          </div>
          {extraContent &&
            <div className='article-extra'>
              <ExtraContent extraContent={extraContent} />
            </div>
          }
          <div className='article-extra'>
            <Comments />
          </div>
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
