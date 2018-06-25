import React from 'react'

import LinkToRepo from '../components/LinkToRepo'

import 'normalize.css'
import '../css/styles.css'
import '../css/syntax.css'

class Template extends React.Component {
  render () {
    const { children } = this.props

    return (
      <div>
        {children()}
        <footer>
          <LinkToRepo />
        </footer>
      </div>
    )
  }
}

export default Template
