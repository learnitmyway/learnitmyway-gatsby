import React from 'react'
import Link from 'gatsby-link'

const ShareButtons = ({pageUrl}) => {
  return (
    <div className='share-buttons-vertical nested-links'>
      <div className='share-buttons-vertical__text'>
        SHARE
      </div>
      <div>
        <a className='popup' href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}>
          <img height='32px' width='32px' src='/img/facebook.svg' />
        </a>
      </div>
    </div>
  )
}

export default ShareButtons
