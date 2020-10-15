import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Title, Link } from 'react-head'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            url
            description
          }
        }
      }
    `
  )
  return site.siteMetadata
}

const SEO = () => {
  const { title, url, description, author } = useSiteMetadata()

  return (
    <>
      <Link
        href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900'
        rel='stylesheet'
        type='text/css'
      />
      {title && <Title>{title}</Title>}
      {url && <meta property='og:url' content={url} />}
      {description && <meta property='og:description' content={description} />}
      {author && <meta name='twitter:creator' content={author} />}
    </>
  )
}

export default SEO
