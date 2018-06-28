import React from 'react'

import {FbShareButton, TwitterShareButton, LinkedInShareButton, EmailShareButton} from './ShareButtons'

const ShareButtons = ({ pageUrl, pageTitle, pageDescription }) => {
  return (
    <div className='share-buttons-vertical nested-links'>
      <div className='share-buttons-vertical__text'>
        SHARE
      </div>
      <FbShareButton pageUrl={pageUrl} />
      <TwitterShareButton pageUrl={pageUrl} pageTitle={pageTitle} />
      <LinkedInShareButton pageUrl={pageUrl} pageTitle={pageTitle} pageDescription={pageDescription} />
      <EmailShareButton pageUrl={pageUrl} pageTitle={pageTitle} pageDescription={pageDescription} />
    </div>
  )
}

export default ShareButtons
