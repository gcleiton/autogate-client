import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles } from '@presentation/styles'
import { AuthProvider } from '@core/contexts'
import Router from './routes/router'
import { getCurrentAccount } from './adapters'

import '../presentation/styles/overrides/custom-bootstrap.scss'

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider getCurrentAccount={getCurrentAccount}>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  </>,
  document.getElementById('main')
)
