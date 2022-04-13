import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { MarketContextProvider } from './contexts/MarketContext'
import reportWebVitals from './reportWebVitals'
import GlobalStyles from './styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <MarketContextProvider>
      <GlobalStyles />
      <App />
    </MarketContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
