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

export default ShareButton
