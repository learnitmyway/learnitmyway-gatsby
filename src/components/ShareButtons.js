import React from 'react'

import ShareButton from './ShareButton'

const FbShareButton = ({url}) => {
  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${url}`
  return (
    <ShareButton href={fbHref} src={'/img/facebook.svg'} />
  )
}

const TwitterShareButton = ({title, url}) => {
  const twitterHref = `https://twitter.com/intent/tweet?text=${title}&via=DeveloperDavo%20${url}`
  return (
    <ShareButton href={twitterHref} src={'/img/twitter.svg'} />
  )
}

const LinkedInShareButton = ({title, description, url}) => {
  const linkedInHref = `http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${description}`
  return (
    <ShareButton href={linkedInHref} src={'/img/linkedin.svg'} />
  )
}

const EmailShareButton = ({title, description, url}) => {
  const emailHref = `mailto:?subject=${title}&body=${description}%0A${url}`
  return (
    <ShareButton href={emailHref} src={'/img/email.svg'} />
  )
}

const ShareButtons = ({url, title, description, vertical}) => {
  const shareButtonsHorizontal = (
    <div className='blog-extras-container nested-links'>
      <div className='blog-extras-container__title'>
      Spread the word!
      </div>
      <div className='share-buttons-horizontal nested-links'>
        <div className='share-button-horizontal'>
          <FbShareButton url={url} />
        </div>
        <div className='share-button-horizontal'>
          <TwitterShareButton url={url} title={title} />
        </div>
        <div className='share-button-horizontal'>
          <LinkedInShareButton url={url} title={title} description={description} />
        </div>
        <div className='share-button-horizontal'>
          <EmailShareButton url={url} title={title} description={description} />
        </div>
      </div>
    </div>
  )
  const shareButtonsVertical = (
    <div className='share-buttons-vertical nested-links'>
      <div className='share-buttons-vertical__text'>
      SHARE
      </div>
      <FbShareButton url={url} />
      <TwitterShareButton url={url} title={title} />
      <LinkedInShareButton url={url} title={title} description={description} />
      <EmailShareButton url={url} title={title} description={description} />
    </div>
  )

  return vertical ? shareButtonsVertical : shareButtonsHorizontal
}

export default ShareButtons
