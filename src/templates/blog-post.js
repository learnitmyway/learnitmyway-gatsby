import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Subscribe from '../components/Subscribe'
import Nav from '../components/Nav'

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <div>
        <Nav fixedNav />
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
