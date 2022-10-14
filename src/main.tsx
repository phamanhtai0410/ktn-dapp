import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/styles/main.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'

//B1: call create metadata B2:call SMC mint => BSC 
//B1: Call create order B2: call SMC tranfer B3: call log tx B4 listen event await => ETH ...

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
  ,
)


