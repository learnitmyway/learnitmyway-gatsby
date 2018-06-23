import React from 'react'
import '../../static/dist/styles.css'

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
