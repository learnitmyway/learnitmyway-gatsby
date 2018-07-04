import React from 'react'

import ShareButton from './ShareButton'

export const FbShareButton = ({url}) => {
  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${url}`
  return (
    <ShareButton href={fbHref} src={'/img/facebook.svg'} />
  )
}

export const TwitterShareButton = ({title, url}) => {
  const twitterHref = `https://twitter.com/intent/tweet?text=${title}&via=DeveloperDavo%20${url}`
  return (
    <ShareButton href={twitterHref} src={'/img/twitter.svg'} />
  )
}

export const LinkedInShareButton = ({title, description, url}) => {
  const linkedInHref = `http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${description}`
  return (
    <ShareButton href={linkedInHref} src={'/img/linkedin.svg'} />
  )
}

export const EmailShareButton = ({title, description, url}) => {
  const emailHref = `mailto:?subject=${title}&body=${description}%0A${url}`
  return (
    <ShareButton href={emailHref} src={'/img/email.svg'} />
  )
}
