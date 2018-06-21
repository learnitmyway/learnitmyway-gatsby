import React from 'react'

const Subscribe = () => {
  return (
    <form className='blog-extras-container blog-extras-container--center nested-links'
      action='https://tinyletter.com/developerdavo-noreply'
      method='post'
      target='popupwindow'
      onsubmit="window.open('https://tinyletter.com/developerdavo-noreply', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
      <label className='blog-extras-container__title' for='tlemail'>Enter your email to receive the latest content!</label>
      <p><input className='subscribe__input' type='text' name='email' id='tlemail' /></p>
      <input type='hidden' value='1' name='embed' />
      <button className='btn btn--subscribe' type='submit'>Subscribe</button>
    </form>
  )
}

export default Subscribe
