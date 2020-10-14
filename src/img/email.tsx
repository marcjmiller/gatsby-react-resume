import React from 'react'

const path =
  'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
const fill = '#fff'

const Email = () => {
  return (
    <a href={'mailto:marcjmiller@outlook.com'} target={'_blank'} rel={'noopener'} className={'opacity-25 hover:opacity-75'}>
      <svg height={90} width={90} viewBox={'0 0 24 24'}>
        <path d={path} fill={fill} />
      </svg>
    </a>
  )
}

export default Email
