import React from 'react'
import Link from 'gatsby-link'

const ExtraContent = ({ extraContent }) => {
  return (
    <div className='blog-extras-container nested-links'>
      <div className='blog-extras-container__title'>
        You might also like:
      </div>
      <ul className='extra-content-items'>
        {extraContent.map(item => {
          return (
            <li key={item.title}>
              <a href={item.url} target='_blank' rel='noopener'>{item.title}</a>
              <span> {item.extras}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ExtraContent
