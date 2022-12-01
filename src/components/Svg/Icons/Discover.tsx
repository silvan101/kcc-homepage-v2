import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps & { isHover: boolean }> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 7.75V14.5C18 13.4 17.1 12.5 16 12.5H8C6.9 12.5 6 13.4 6 14.5V7.75C6 6.65 6.9 5.75 8 5.75H16C17.1 5.75 18 6.65 18 7.75Z"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 15.75H18"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 15.75H5"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 14V11C18 9.9 17.1 9 16 9H8C6.9 9 6 9.9 6 11V14"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 14.5V15.75H14.5C14.5 17.13 13.38 18.25 12 18.25C10.62 18.25 9.5 17.13 9.5 15.75H6V14.5C6 13.4 6.9 12.5 8 12.5H16C17.1 12.5 18 13.4 18 14.5Z"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
