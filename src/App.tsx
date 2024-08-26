import { ThemeProvider } from 'styled-components'

//import { Outlet } from 'react-router-dom'

//import { Header } from './components/Header'
import { defaultTheme } from './styles/themes/default'

import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { CartContextProvider } from './contexts/CartProvider'


export function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <BrowserRouter>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </BrowserRouter>
      </ThemeProvider>

    </>
  )
}

