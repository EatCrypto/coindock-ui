import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import tw, { css } from 'twin.macro'

import LogoImg from '../assets/images/logo.png'
import { ReactComponent as ArrowRightSvg } from '../assets/svgs/arrow-right.svg'
import { ReactComponent as PauseSvg } from '../assets/svgs/pause.svg'
import { ReactComponent as PlaySvg } from '../assets/svgs/play.svg'
import PriceBanner from './PriceBanner'

const CarouselBtnStyle = css`
  ${tw`border border-white w-10 h-10 rounded-full p-1.5 absolute top-0 left-0`}
`
const ExternalLink = tw.a`h-full inline-flex justify-center items-center border-l border-white min-w-[200px] max-w-[200px] gap-2 hover:underline`

const LINKS = [
  {
    title: 'Markets',
    url: 'https://www.coindesk.com/markets/',
  },
  {
    title: 'Business',
    url: 'https://www.coindesk.com/business/',
  },
  {
    title: 'Tech',
    url: 'https://www.coindesk.com/tech/',
  },
  {
    title: 'Policy',
    url: 'https://www.coindesk.com/policy/',
  },
  {
    title: 'Indices',
    url: 'https://www.coindesk.com/indices/',
  },
  {
    title: 'TV & Videos',
    url: 'https://www.coindesk.com/tv/',
  },
  {
    title: 'Podcasts',
    url: 'https://www.coindesk.com/podcasts/',
  },
  {
    title: 'Crypto Explainer+',
    url: 'https://www.coindesk.com/learn/',
  },
  {
    title: 'Events',
    url: 'https://www.coindesk.com/events/',
  },
  {
    title: 'Research',
    url: 'https://www.coindesk.com/research/',
  },
  {
    title: 'About',
    url: 'https://www.coindesk.com/about/',
  },
]

const Header = () => {
  const [playing, setPlaying] = useState(false)
  const bannerRef = useRef<HTMLDivElement | null>(null)
  const [bannerWidth, setBannerWidth] = useState(0)
  const [bannerPos, setBannerPos] = useState(0)

  useLayoutEffect(() => {
    setTimeout(
      () =>
        setBannerWidth(bannerRef.current?.getBoundingClientRect().width ?? 0),
      100
    )
  }, [])

  useEffect(() => {
    if (playing && bannerWidth) {
      const interval = setInterval(
        () =>
          setBannerPos((pos) => {
            if (pos <= -bannerWidth) {
              return 0
            }
            return pos - 1
          }),
        20
      )

      return () => clearInterval(interval)
    }
  }, [bannerWidth, playing])

  return (
    <header tw="pt-14">
      <div tw="px-6">
        <div tw="flex justify-center items-center mb-10">
          <img alt="CoinDock" src={LogoImg} tw="max-w-sm" />
        </div>
        <nav tw="pb-5">
          <ul tw="flex justify-between">
            {LINKS.map((link) => (
              <li key={link.title}>
                <a href={link.url} tw="font-bold hover:underline">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div tw="flex bg-gray-400 text-white h-[60px] overflow-hidden">
        <div tw="w-full flex">
          <div tw="w-20 h-full flex items-center justify-center">
            <button
              tw="w-10 h-10 relative"
              onClick={() => setPlaying((v) => !v)}
            >
              <PauseSvg
                css={[CarouselBtnStyle, tw`p-0`, !playing && tw`opacity-0`]}
              />
              <PlaySvg css={[CarouselBtnStyle, playing && tw`opacity-0`]} />
            </button>
          </div>

          <div tw="w-full h-full overflow-hidden relative">
            <div
              style={{
                left: bannerPos,
              }}
              tw="absolute h-full"
            >
              <PriceBanner ref={bannerRef} />
            </div>
            <div
              style={{
                left: bannerPos + bannerWidth,
              }}
              tw="absolute h-full"
            >
              <PriceBanner />
            </div>
          </div>
        </div>

        <div tw="inline-flex">
          <ExternalLink href="https://www.coindesk.com/data/">
            Crypto Prices <ArrowRightSvg />
          </ExternalLink>

          <ExternalLink href="https://www.coindesk.com/coindesk20/">
            Top Assets <ArrowRightSvg />
          </ExternalLink>
        </div>
      </div>
    </header>
  )
}

export default Header
