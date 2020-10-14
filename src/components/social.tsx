import React from 'react'
import Email from '../img/icons/email'
import GitHub from '../img/icons/gitHub'
import LinkedIn from '../img/icons/linkedIn'

const Social = () => {
  return (
    <div className={'flex-col'}>
      <div className={'flex flex-col items-center'}>
        <LinkedIn />
        <GitHub />
        <Email />
      </div>
    </div>
  )
}

export default Social
