import React from 'react'
import { Title, Link } from 'react-head'

const Head = () => {
  return (
    <>
      <Link
        href="https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900"
        rel="stylesheet"
        type="text/css"
      />
      <Title>Developer Portfolio | React, Typescript, and Gatsby.</Title>
    </>
  )
}

export default Head
