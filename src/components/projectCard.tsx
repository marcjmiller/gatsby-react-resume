import React from 'react'

interface OwnProps {
  title: string
  description: string
  tags: string[]
  imgSrc: string
  key: string
}

const ProjectCard: React.FC<OwnProps> = ({title, description, tags, imgSrc, key}) => {
  console.log(title, description, imgSrc, tags, key)
  return (
    <div className={'bg-white max-w-sm rounded-lg overflow-hidden shadow-lg m-4 opacity-75 hover:opacity-100'}>
      <img className={'w-full'} src={'/img/portfolio/portfolio.png'} alt={'Developer Profile screenshot'} />
      <div className={'px-6 py-4'}>
        <div className={'text-gray-800 font-bold text-xl mb-2'}>{title ? title : 'Title'}</div>
        <p className={'text-gray-700 text-base'}>A custom page to serve as my personal developer profile.</p>
      </div>
      <div className={'px-6 pt-4 pb-2'}>
        {tags?.length > 0 ?
          tags.map((tag, id) => {
            return <span className={'project-tag'} key={id}>#{tag}</span>
          }) :
          <span className={'project-tag'}>No tags set.</span>}
      </div>
    </div>
  )
}

export default ProjectCard
