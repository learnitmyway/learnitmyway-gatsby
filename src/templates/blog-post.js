import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Nav from '../components/Nav'
import ShareButtons from '../components/ShareButtons'
import Subscribe from '../components/Subscribe'
import Bio from '../components/Bio'

class BlogPostTemplate extends React.Component {
  render () {
    const { data, location } = this.props
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const siteUrl = data.site.siteMetadata.siteUrl
    const pathName = location.pathname
    const { previous, next } = this.props.pathContext

    return (
      <div>
        <Nav fixedNav />
        <ShareButtons pageUrl={`${siteUrl}${pathName}`} />
        <div className='page'>
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <article className='article'>
            <time className='article__date'>
              {post.frontmatter.date}
            </time>
            <h1 className='article__title--large'>{post.frontmatter.title}</h1>
            <section className='article__content nested-links'>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <hr />
            </section>
          </article>
          <Bio />

          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0
            }}
          >
            {previous && (
              <li>
                <Link to={previous.fields.slug} rel='prev'>
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}

            {next && (
              <li>
                <Link to={next.fields.slug} rel='next'>
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
          <div className='article-extra'>
            <Subscribe />
          </div>
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
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
