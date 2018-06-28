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

const ShareButtons = ({ pageUrl, pageTitle }) => {
  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`
  const fB = <ShareButton href={fbHref} src={'/img/facebook.svg'} />
  const twitterHref = `https://twitter.com/intent/tweet?text=${pageTitle}&via=DeveloperDavo%20${pageUrl}`
  const twitter = <ShareButton href={twitterHref} src={'/img/twitter.svg'} />
  return (
    <div className='share-buttons-vertical nested-links'>
      <div className='share-buttons-vertical__text'>
        SHARE
      </div>
      {fB}
      {twitter}
    </div>
  )
}

export default ShareButtons
