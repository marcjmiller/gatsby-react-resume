import { graphql } from 'gatsby'
import React from 'react'
import { LeftArrow, RightArrow } from '../img/icons/arrow'
import SEO from '../components/seo'
import ProjectCard from '../components/projectCard'

interface OwnProps {
  data: {
    allContentfulProject: {
      edges: [
        {
          node: {
            title: string
            repoLink: string
            tags: string[]
            description: { description: string }
            screencap: { file: { url: string } }
          }
        }
      ]
    }
  }
}

const Projects: React.FC<OwnProps> = ({ data }) => {
  const projects = data.allContentfulProject.edges

  return (
    <>
      <SEO />
      <div className={'content'}>
        <div className={'sidebar'}>
          <a href={'/'}>
            <LeftArrow text={'home'} />
          </a>
        </div>
        <div>
          <h1 className={'text-center font-bold p-5'}>Projects</h1>
          <div className={'flex flex-row max-h-full overflow-auto'}>
            {projects.length > 0 &&
              projects.map(project => {
                return (
                  <ProjectCard
                    project={project.node}
                  />
                )
              })}
          </div>
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

export const query = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          title
          description {
            description
          }
          tags
          repoLink
          screencap {
            file {
              url
            }
          }
        }
      }
    }
  }
`
