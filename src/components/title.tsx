import React from 'react'
import { Title, Link } from 'react-head'

const Head = () => {
  return (
    <>
      <Title>Developer Portfolio | React, Typescript, and Gatsby.</Title>
      <Link
        href={'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'}
        rel={'stylesheet'}
      />
    </>
  )
}

export default Head
