import React from 'react'
import Social from '../components/social'
import SEO from '../components/seo'
import { RightArrow } from '../img/icons/arrow'

const App = () => {
  return (
    <div className={'content'}>
      <SEO />
      <div className={'sidebar'}>
        <Social />
      </div>
      <div className={'p-5'}>
        <h1 className={'text-center font-semibold p-4'}>Hi, I'm Marc.</h1>
        <h4 className={'text-center font-normal'}>
          I'm a full stack developer writing code for{' '}
          <a href={'https://www.dgs1sdt.com'} target={'_blank'} rel={'noopener'}>
            Red 5
          </a>
          .
        </h4>
        <h5 className={'text-center font-light'}>We're a passionate group of Airmen solving problems with software.</h5>
      </div>
      <div className={'sidebar'}>
        <a href={'/projects/'}>
          <RightArrow text={'projects'} />
        </a>
      </div>
    </div>
  )
}

export default App
