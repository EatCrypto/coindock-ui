import { createContext, FC } from 'react'

import useCoinsPrice, { CoinInfo } from '../hooks/useCoinsPrice'

type MarketContextState = {
  prices: CoinInfo[]
  loading: boolean
}

const initialState: MarketContextState = {
  loading: false,
  prices: [],
}

export const MarketContext = createContext<MarketContextState>(initialState)

export const MarketContextProvider: FC = ({ children }) => {
  const { loading, prices } = useCoinsPrice()

  return (
    <MarketContext.Provider
      value={{
        loading: loading,
        prices,
      }}
    >
      {children}
    </MarketContext.Provider>
  )
}
