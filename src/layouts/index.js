import React from 'react'

import 'normalize.css'
import '../css/styles.css'
import '../css/syntax.css'

class Template extends React.Component {
  render () {
    const { children } = this.props

    return (
      <div>
        {children()}
      </div>
    )
  }
}

export default Template
