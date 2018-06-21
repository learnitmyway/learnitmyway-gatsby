import React from 'react'
import Link from 'gatsby-link'

class Nav extends React.Component {
  fixNavBar () {
    const nav = document.querySelector('nav')
    nav.classList.add('nav--fixed')
    document.body.style.paddingTop = nav.offsetHeight + 'px'
  }

  componentDidMount () {
    this.fixNavBar()
  }

  render () {
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
}

export default Nav
