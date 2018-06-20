import React from 'react'
import Link from 'gatsby-link'
import Nav from '../components/Nav'
import './styles.css'

class Template extends React.Component {
  render () {
    const { children } = this.props

    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <Nav />
        {children()}
      </div>
    )
  }
}

export default Template
