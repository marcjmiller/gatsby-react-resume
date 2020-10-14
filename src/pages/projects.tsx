import React from 'react'
import Head from '../components/title'
import { LeftArrow, RightArrow } from '../img/arrow'

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
          <h1 className={'font-bold'}>Projects</h1>
        </div>
        <div className={'sidebar '}>
          <a href={'/contact/'}>
            <RightArrow text={'contact'}/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Projects
