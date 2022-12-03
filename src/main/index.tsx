import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles } from '@presentation/styles'
import { AuthProvider } from '@core/contexts'
import Router from './routes/router'
import { getCurrentAccount } from './adapters'

import '../presentation/styles/overrides/custom-bootstrap.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.render(
  <>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <AuthProvider getCurrentAccount={getCurrentAccount}>
          <Router />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </>,
  document.getElementById('main')
)
