import React from 'react'

const fill = '#fff'
const pathL = 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
const pathR = 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'

interface ArrowProps {
  text?: string
}

export const RightArrow: React.FC<ArrowProps> = ({ text }) => {
  return (
    <div className={'text-center'}>
      <svg width={100} viewBox={'0 0 25 25'}>
        <path d={pathR} fill={fill} />
      </svg>
      {text ?? <div className={'arrow-text-R'}>{text}</div>}
    </div>
  )
}

export const LeftArrow: React.FC<ArrowProps> = ({ text }) => {
  return (
    <div className={'text-center'}>
      <svg width={100} viewBox={'0 0 25 25'}>
        <path d={pathL} fill={fill} />
      </svg>
      {text ?? <div className={'arrow-text-R'}>{text}</div>}
    </div>
  )
}
