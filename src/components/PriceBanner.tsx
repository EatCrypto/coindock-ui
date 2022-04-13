import 'twin.macro'

import { forwardRef, useContext } from 'react'

import { MarketContext } from '../contexts/MarketContext'

const PriceBanner = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { prices } = useContext(MarketContext)
  return (
    <div ref={ref} tw="flex h-full">
      {prices.map((asset) => (
        <a
          key={asset.id}
          href="https://www.coindesk.com/price/bitcoin/"
          tw="flex items-center pl-5 pr-10 font-bold text-sm whitespace-nowrap gap-2.5 hover:(bg-white bg-opacity-10)"
        >
          <div>{asset.name}</div>
          <div tw="text-green-400">
            <span tw="mr-1.5">${asset.current_price}</span> +
            {asset.price_change_percentage_24h}%
          </div>
        </a>
      ))}
    </div>
  )
})

export default PriceBanner
