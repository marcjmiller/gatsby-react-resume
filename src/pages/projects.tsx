import React from 'react'
import Head from '../components/head'
import ProjectCard from '../components/projectCard'
import { LeftArrow, RightArrow } from '../img/icons/arrow'

const Projects = () => {
  return (
    <>
      <Head />
      <div className={'content'}>
        <div className={'sidebar'}>
          <a href={'/'}>
            <LeftArrow text={'home'} />
          </a>
        </div>
        <div className={''}>
          <h1 className={'text-center font-bold p-5'}>Projects</h1>
          <ProjectCard img={'/img/portfolio/portfolio.png'} tags={['GatsbyJS', 'ReactJS', 'TailwindCSS', 'Typescript']}/>
        </div>
        <div className={'sidebar'}>
          <a href={'/contact/'}>
            <RightArrow text={'contact'} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Projects
