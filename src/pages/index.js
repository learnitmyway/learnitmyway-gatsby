import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import SocialFollow from '../components/SocialFollow'

const Header = ({ title, quote }) => (
  <header className='site-header'>
    <div className='site-header__social-follow-wrapper'>
      <SocialFollow />
    </div>
    <div className='site-header__text'>
      <h1 className='site-header__header-text'>
        {title}
      </h1>
      <h3 className='site-header__subheader-text'>
        {quote}
      </h3>
    </div>
  </header>
)

class BlogIndex extends React.Component {
  render () {
    const { data } = this.props
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const siteTitle = data.site.siteMetadata.title
    const quote = data.site.siteMetadata.quote

    return (
      <div>
        <Header title={siteTitle} quote={quote} />
        <div>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3>
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        quote
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
