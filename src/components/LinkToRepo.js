import React from 'react'

const LinkToRepo = () => {
  function handleClick () {
    window.open('https://github.com/DeveloperDavo/learnitmyway', '_blank, noopener')
  }

  return (
    <div className='link-to-repo nested-links'>
      <span>View the source code on </span>
      <button className='btn btn--github' onClick={handleClick}>GitHub</button>
    </div>
  )
}

export default LinkToRepo
