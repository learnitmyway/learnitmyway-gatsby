import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div className='not-found nested-links'>
    <h2>
      <span>The requested page was not found. Return to </span>
      <Link to='/'>home</Link>.
    </h2>
    <div className='not-found__gif' />
  </div>
)

export default NotFoundPage
