import { useCallback, useEffect, useState } from 'react'

export type CoinInfo = {
  id: string
  symbol: string
  name: 'Bitcoin'
  current_price: number
  price_change_percentage_24h: number
  last_updated: string
}

const useCoinsPrice = () => {
  const [loading, setLoading] = useState(false)
  const [prices, setPrices] = useState<CoinInfo[]>([])

  const fetchPrice = useCallback(() => {
    setLoading(true)
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,terra-luna,solana'
    )
      .then((res) => res.json())
      .then((result: CoinInfo[]) => {
        setPrices(result)
      })
      .catch(console.error)
      .then(() => setLoading(false))
  }, [])

  useEffect(() => {
    fetchPrice()
  }, [fetchPrice])

  return { loading, prices }
}

export default useCoinsPrice
