import React from 'react'

import {FbShareButton, TwitterShareButton, LinkedInShareButton, EmailShareButton} from './ShareButtons'

const ShareButtonsHorizontal = ({pageUrl, pageTitle, pageDescription}) => (
  <div className='blog-extras-container nested-links'>
    <div className='blog-extras-container__title'>
    Spread the word!
    </div>
    <div className='share-buttons-horizontal nested-links'>
      <div className='share-button-horizontal'>
        <FbShareButton pageUrl={pageUrl} />
      </div>
      <div className='share-button-horizontal'>
        <TwitterShareButton pageUrl={pageUrl} pageTitle={pageTitle} />
      </div>
      <div className='share-button-horizontal'>
        <LinkedInShareButton pageUrl={pageUrl} pageTitle={pageTitle} pageDescription={pageDescription} />
      </div>
      <div className='share-button-horizontal'>
        <EmailShareButton pageUrl={pageUrl} pageTitle={pageTitle} pageDescription={pageDescription} />
      </div>
    </div>
  </div>
)

export default ShareButtonsHorizontal
