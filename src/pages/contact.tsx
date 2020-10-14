import React from 'react'
import Head from '../components/title'
import { LeftArrow, RightArrow } from '../img/arrow'
import Email from '../img/email'
import GitHub from '../img/gitHub'
import LinkedIn from '../img/linkedIn'

const Contact = () => {
  return (
    <>
      <Head />
      <div className={'content'}>
        <div className={'sidebar'}>
          <a href={'/projects/'}>
            <LeftArrow text={'projects'}/>
          </a>
        </div>
        <div className={'flex flex-col justify-around overflow-scroll'}>
          <h1 className={'font-bold'}>Let's talk</h1>
          <div className={'flex flex-row justify-items-center items-center'}>
              <LinkedIn/>
              <GitHub/>
              <Email/>
          </div>
        </div>
        <div className={'sidebar'}>
          <a href={'/'}>
            <RightArrow text={'home'}/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
