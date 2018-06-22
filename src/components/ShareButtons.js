import React from 'react'

import popupCenter from './popupCenter'

const ShareButtons = ({ pageUrl }) => {
  function handleClick (url, e) {
    popupCenter(url)
    e.preventDefault()
  }
  const fbLink = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`
  return (
    <div className='share-buttons-vertical nested-links'>
      <div className='share-buttons-vertical__text'>
        SHARE
      </div>
      <div>
        <a href={fbLink} onClick={(e) => handleClick(fbLink, e)}>
          <img height='32px' width='32px' src='/img/facebook.svg' />
        </a>
      </div>
    </div>
  )
}

export default ShareButtons
