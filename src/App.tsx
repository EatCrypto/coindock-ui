import 'twin.macro'

import { useContext } from 'react'

import Article from './components/Article'
import Footer from './components/Footer'
import Header from './components/Header'
import { MarketContext } from './contexts/MarketContext'

const App = () => {
  const { loading } = useContext(MarketContext)

  return loading ? null : (
    <div tw="relative">
      <Header />

      <main>
        <Article />
      </main>

      <Footer />
    </div>
  )
}

export default App
