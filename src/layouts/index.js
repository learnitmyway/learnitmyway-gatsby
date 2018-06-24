import React from 'react'
import '../css/styles.css'
import '../css/syntax.css'
import 'normalize.css'

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
