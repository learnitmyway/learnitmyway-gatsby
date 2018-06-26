import React from 'react'
import Link from 'gatsby-link'

import Nav from '../components/Nav'

const NotFoundPage = () => (
  <div>
    <Nav />
    <div className='not-found nested-links'>
      <h2>
        <span>The requested page was not found. Return to </span>
        <Link to='/'>home</Link>.
      </h2>
      <div className='not-found__gif' />
    </div>
  </div>
)

export default NotFoundPage
