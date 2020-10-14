import React from 'react'
import Email from '../img/email'
import GitHub from '../img/gitHub'
import LinkedIn from '../img/linkedIn'

const Social = () => {
  return (
    <div className={'flex-col slide-left'}>
      <div className={'flex flex-col items-center'}>
        <LinkedIn />
        <GitHub />
        <Email />
      </div>
    </div>
  )
}

export default Social
