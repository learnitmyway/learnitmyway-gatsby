import React from 'react'
import Link from 'gatsby-link'

import SocialFollow from './SocialFollow'

class Nav extends React.Component {
  fixNavBar () {
    const nav = document.querySelector('nav')
    nav.classList.add('nav--fixed')
    document.body.style.paddingTop = nav.offsetHeight + 'px'
  }

  componentDidMount () {
    if (this.props.fixedNav) {
      this.fixNavBar()
    }
  }

  render () {
    return (
      <nav className='nav'>
        <Link to='/' className='nav__title'>
          {'Learn it my way'}
        </Link>
        <SocialFollow />
      </nav>
    )
  }
}

export default Nav
