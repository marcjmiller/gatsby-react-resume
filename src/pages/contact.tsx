import React from 'react'
import SEO from '../components/seo'
import { LeftArrow, RightArrow } from '../img/icons/arrow'
import Email from '../img/icons/email'
import GitHub from '../img/icons/gitHub'
import LinkedIn from '../img/icons/linkedIn'

const Contact = () => {
  return (
    <>
      <SEO />
      <div className={'content'}>
        <div className={'sidebar'}>
          <a href={'/projects/'}>
            <LeftArrow text={'projects'} />
          </a>
        </div>
        <div className={'flex flex-col justify-around overflow-hidden'}>
          <h1 className={'font-bold p-5'}>Let's talk</h1>
          <div className={'flex flex-row items-center p-5'}>
            <LinkedIn />
            <GitHub />
            <Email />
          </div>
        </div>
        <div className={'sidebar'}>
          <a href={'/'}>
            <RightArrow text={'home'} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
