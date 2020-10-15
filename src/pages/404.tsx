import React from 'react'


const default404 = () => {
  return (
    <div className={'content'}>
      <SEO />
      <div className={'flex flex-auto flex-col justify-center items-center'}>
        <h1 className={'text-center font-semibold'}>Oh no! Something went wrong.</h1>
        <a href={'/'}>Return to portfolio</a>
      </div>
    </div>
  )
}

export default default404
