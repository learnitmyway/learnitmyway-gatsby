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

const Excerpt = ({date, title, excerpt}) => (
  <div className='summary'>
    <div className='article__date'>
      {date}
    </div>
    <h1 className='article__title'>
      {title}
    </h1>
    <div className='summary__excerpt'>
      {excerpt}
    </div>
  </div>
)

class BlogIndex extends React.Component {
  render () {
    const { data } = this.props
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const siteTitle = data.site.siteMetadata.title
    const quote = data.site.siteMetadata.quote

    const excerpts = posts.map(({ node }) => {
      const date = node.frontmatter.date
      const title = node.frontmatter.title
      const excerpt = node.frontmatter.excerpt
      const slug = node.fields.slug

      return (
        <Link key={slug} className='index-anchor' to={slug}>
          <Excerpt date={date} title={title} excerpt={excerpt} />
        </Link>
      )
    })

    return (
      <div>
        <Header title={siteTitle} quote={quote} />
        {excerpts}
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
            excerpt
          }
        }
      }
    }
  }
`
