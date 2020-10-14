import React from 'react'
import Head from '../components/head'
import { LeftArrow, RightArrow } from '../img/icons/arrow'

const Projects = () => {
  return (
    <>
      <Head />
      <div className={'content'}>
        <div className={'sidebar'}>
          <a href={'/'}>
            <LeftArrow text={'home'}/>
          </a>
        </div>
        <div className={'overflow-scroll'}>
          <h1 className={'text-center font-bold'}>Projects</h1>
          <img src={'/img/portfolio/portfolio.png'} className={'max-w-md rounded-lg shadow-md'}/>
        </div>
        <div className={'sidebar'}>
          <a href={'/contact/'}>
            <RightArrow text={'contact'}/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Projects
