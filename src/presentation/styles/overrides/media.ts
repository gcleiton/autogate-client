import { generateMedia } from 'styled-media-query'
import { breakpoints } from '@main/configs'

export const media = generateMedia({
  desktop: `${breakpoints.desktop}px`,
  tablet: `${breakpoints.tablet}px`,
  mobile: `${breakpoints.mobile}px`
})
