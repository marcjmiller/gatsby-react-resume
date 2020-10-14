import React from 'react'


const ProjectCard = () => {
  return (
    <div className={'bg-white max-w-sm rounded-lg overflow-hidden shadow-lg'}>
      <img className={'w-full'} src={'/img/portfolio/portfolio.png'} alt={'Sunset in the mountains'} />
      <div className={'px-6 py-4'}>
        <div className={'text-gray-800 font-bold text-xl mb-2'}>Developer Profile</div>
        <p className={'text-gray-700 text-base'}>A custom page to serve as my personal developer profile.</p>
      </div>
      <div className={'px-6 pt-4 pb-2'}>
        <span
          className={'project-tag'}
        >
          #GatsbyJS
        </span>
        <span
          className={'project-tag'}
        >
          #ReactJS
        </span>
        <span
          className={'project-tag'}
        >
          #TailwindCSS
        </span>
        <span
          className={'project-tag'}
        >
          #Typescript
        </span>
      </div>
    </div>
  )
}

export default ProjectCard
