import React from 'react'
import Link from 'gatsby-link'

const Nav = () => {
  return (
    <nav className='nav'>
      <Link to='/' className='nav__title'>
        {'Learn it my way'}
      </Link>
      <div>
        {/* {{ partial "social-follow.html" . }} */}
      </div>
    </nav>
  )
}

export default Nav
