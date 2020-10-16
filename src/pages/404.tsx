import { Link } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'

const default404 = () => {
  return (
    <div className={'content'}>
      <SEO />
      <div className={'flex flex-auto flex-col justify-center items-center'}>
        <h1 className={'text-center font-semibold'}>Oh no! Something went wrong.</h1>
        <Link to={'/'}>Return to portfolio</Link>
      </div>
    </div>
  )
}

export default default404
