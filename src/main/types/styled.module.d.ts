import { theme } from '@presentation/styles'
import 'styled-components'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
