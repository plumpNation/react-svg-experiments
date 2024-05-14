import { ThemeProvider } from '@emotion/react'
import { Donut } from './components/Donut'

const theme = {
  colors: {
    primary: 'hotpink'
  }
}

export const App = () => (
  <ThemeProvider theme={theme}>
    <Donut />
  </ThemeProvider>
)
