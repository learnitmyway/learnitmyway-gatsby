import React from 'react'

import popupCenter from './popupCenter'

const ShareButton = ({ href, src }) => {
  function handleClick (href, e) {
    popupCenter(href)
    e.preventDefault()
  }

  return (
    <div>
      <a href={href} onClick={(e) => handleClick(href, e)}>
        <img height='32px' width='32px' src={src} />
      </a>
    </div>
  )
}

const ShareButtons = ({ pageUrl }) => {
  return (
    <div className='share-buttons-vertical nested-links'>
      <div className='share-buttons-vertical__text'>
        SHARE
      </div>
      <ShareButton href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`} src={'/img/facebook.svg'} />
    </div>
  )
}

export default ShareButtons
