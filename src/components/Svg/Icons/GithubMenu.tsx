import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps & { isHover: boolean }> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#clip0_1059_1394)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.52443 22.2065C9.50774 21.6698 9.53014 20.734 9.59165 19.3992C8.5557 19.435 7.9012 19.3631 7.62815 19.1836C7.31217 18.9758 6.99595 18.4341 6.70086 17.9286C6.61338 17.7787 6.52776 17.632 6.44455 17.4982C6.16082 17.0417 5.6073 16.8849 5.22263 16.7759C5.114 16.7452 5.01884 16.7182 4.94702 16.6894C4.62091 16.5585 4.53904 16.025 5.84565 16.4285C6.71691 16.6975 7.03553 17.2757 7.27335 17.7073C7.39217 17.9229 7.49082 18.1019 7.62815 18.1875C8.0403 18.4444 9.02575 18.332 9.4724 18.1262C9.81299 17.9693 9.87477 17.4866 9.9202 17.1315C9.93436 17.0209 9.94693 16.9227 9.96585 16.8506C10.0622 16.5794 9.74136 16.5102 9.70672 16.5027C9.70516 16.5024 9.70418 16.5022 9.70385 16.5021C9.26775 16.5021 6.97695 16.0039 6.34775 13.7855C5.7185 11.5672 6.52905 10.1173 6.96145 9.49399C7.24975 9.07844 7.22425 8.19284 6.88495 6.83709C8.11675 6.67969 9.06735 7.06739 9.7367 8.00029C9.73675 8.00072 9.74257 7.99766 9.75395 7.99165C9.88295 7.92365 10.7267 7.47884 12.0001 7.47884C13.027 7.47884 13.5629 7.71443 13.9261 7.87405C14.053 7.92985 14.1588 7.97637 14.2571 8.00029C14.3671 8.02707 14.4708 7.90099 14.6196 7.71991C14.9841 7.27656 15.6196 6.50353 17.2834 6.83709C16.7941 7.79869 16.3844 9.00029 16.6971 9.49399C16.721 9.53164 16.7502 9.57555 16.7834 9.62553C17.1856 10.231 18.1798 11.7275 17.4833 13.7855C16.9807 15.2709 15.9926 16.1764 14.5192 16.5021C14.3502 16.556 14.2657 16.643 14.2657 16.763C14.2657 16.8343 14.3015 16.8804 14.3652 16.9625C14.4624 17.0877 14.6245 17.2966 14.8232 17.8061C15.0276 18.3297 15.0554 19.7585 14.9066 22.0925C19.2918 20.8319 22.5 16.7906 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 16.9462 4.92008 21.0937 9.52443 22.2065ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
          fill={props.isHover ? '#21C397' : '#040A2D'}
        />
      </g>
      <defs>
        <clipPath id="clip0_1059_1394">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default Icon
