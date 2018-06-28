import React from 'react'

import 'prismjs/themes/prism-solarizedlight.css'
import 'normalize.css'
import '../css/styles.css'

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
