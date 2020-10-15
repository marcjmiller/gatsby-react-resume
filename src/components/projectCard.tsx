import React from 'react'

interface OwnProps {
  project: {
    title: string
    repoLink: string
    description: { description: string }
    tags: string[]
    screencap: { file: { url: string } }
  }
}

const ProjectCard: React.FC<OwnProps> = ({ project }) => {
  return (
    <div className={'bg-white max-w-sm rounded-2xl overflow-hidden shadow-md m-4 opacity-75 hover:opacity-100'}>
      <img
        className={'w-full'}
        src={project.screencap?.file?.url}
        alt={project.title ? project.title.concat(' image') : 'image alt text'}
      />
      <div className={'px-6 py-4'}>
        <div className={'flex flex-row justify-between w-full text-gray-800 font-bold text-xl mb-2'}>
          {project.title ? project.title : 'Title'}
          <a href={project.repoLink} target={'_blank'} rel={'noopener'}>
          <div className={'project-tag'}>Github</div></a>
        </div>
        <p className={'text-gray-700 text-base'}>
          {project.description?.description ? project.description?.description : 'Description'}
        </p>
      </div>
      <div className={'px-6 pt-4 pb-2'}>
        {project.tags?.length > 0 ? (
          project.tags.map((tag, id) => {
            return (
              <span className={'project-tag'} key={id}>
                #{tag}
              </span>
            )
          })
        ) : (
          <span className={'project-tag'}>No tags set.</span>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
