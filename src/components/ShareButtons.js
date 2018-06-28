import React from 'react'

import ShareButton from './ShareButton'

export const FbShareButton = ({pageUrl}) => {
  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`
  return (
    <ShareButton href={fbHref} src={'/img/facebook.svg'} />
  )
}

export const TwitterShareButton = ({pageTitle, pageUrl}) => {
  const twitterHref = `https://twitter.com/intent/tweet?text=${pageTitle}&via=DeveloperDavo%20${pageUrl}`
  return (
    <ShareButton href={twitterHref} src={'/img/twitter.svg'} />
  )
}

export const LinkedInShareButton = ({pageTitle, pageDescription, pageUrl}) => {
  const linkedInHref = `http://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}&summary=${pageDescription}`
  return (
    <ShareButton href={linkedInHref} src={'/img/linkedin.svg'} />
  )
}

export const EmailShareButton = ({pageTitle, pageDescription, pageUrl}) => {
  const emailHref = `mailto:?subject=${pageTitle}&body=${pageDescription}%0A${pageUrl}`
  return (
    <ShareButton href={emailHref} src={'/img/email.svg'} />
  )
}
