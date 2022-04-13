import tw, { styled } from 'twin.macro'

import LogoImg from '../assets/images/logo-white.png'

const Section = styled.div`
  ${tw`flex flex-col items-start`}

  h4 {
    ${tw`text-2xl font-bold font-display2 h-[70px]`}
  }

  a {
    ${tw`text-base leading-5 pb-2 hover:underline`}
  }
`
const Disclaimer = styled.p`
  ${tw`text-xs leading-5`}

  a {
    ${tw`text-green-300`}
  }
`

const Footer = () => {
  return (
    <footer>
      <div tw="bg-gray-400 text-white p-16">
        <div tw="mb-12">
          <img alt="CoinDock" src={LogoImg} tw="w-[190px]" />
        </div>

        <div tw="grid grid-cols-4 mb-4 gap-x-12 gap-y-4">
          <Section>
            <h4>About</h4>
            <a href="https://www.coindesk.com/about/">About</a>
            <a href="https://www.coindesk.com/masthead/">Masthead</a>
            <a href="https://www.coindesk.com/contributors/">Contributors</a>
            <a href="https://boards.greenhouse.io/coindesk">Careers</a>
            <a href="https://www.coindesk.com/company-news/">Company News</a>
          </Section>

          <Section>
            <h4>Stay Updated</h4>
            <a href="https://www.coindesk.com/events/">Events</a>
            <a href="https://www.coindesk.com/newsletters/">Newsletters</a>
            <a href="https://www.coindesk.com/follow/">Follow</a>
          </Section>

          <Section>
            <h4>Get In Touch</h4>
            <a href="https://www.coindesk.com/advertise/">Advertise</a>
            <a href="https://www.coindesk.com/accessibility-help/">
              Accessibility Help
            </a>
          </Section>

          <Section>
            <h4>The Fine Print</h4>
            <a href="https://www.coindesk.com/ethics/">Ethics Policy</a>
            <a href="https://www.coindesk.com/privacy/">Privacy</a>
            <a href="https://www.coindesk.com/terms/">Terms & Conditions</a>
          </Section>
        </div>

        <div tw="mb-4 border border-b-white border-opacity-20" />

        <div tw="grid grid-cols-2 gap-x-4 gap-y-6">
          <Disclaimer>
            The leader in news and information on cryptocurrency, digital assets
            and the future of money, CoinDesk is a media outlet that strives for
            the highest journalistic standards and abides by a{' '}
            <a
              className="link__Link-lw0p1v-0 tatPI"
              href="https://www.coindesk.com/ethics/"
            >
              strict set of editorial policies
            </a>
            . CoinDesk is an independent operating subsidiary of{' '}
            <a
              className="link__Link-lw0p1v-0 tatPI"
              href="https://dcg.co/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Digital Currency Group
            </a>
            , which invests in{' '}
            <a
              className="link__Link-lw0p1v-0 tatPI"
              href="https://dcg.co/#digital-assets-portfolio"
              rel="noopener noreferrer"
              target="_blank"
            >
              cryptocurrencies
            </a>{' '}
            and blockchain{' '}
            <a
              className="link__Link-lw0p1v-0 tatPI"
              href="https://dcg.co/portfolio/"
              rel="noopener noreferrer"
              target="_blank"
            >
              startups
            </a>
            . As part of their compensation, certain CoinDesk employees,
            including editorial employees, may receive exposure to DCG equity in
            the form of{' '}
            <a
              className="link__Link-lw0p1v-0 tatPI"
              href="https://www.investopedia.com/terms/s/sar.asp"
              rel="noopener noreferrer"
              target="_blank"
            >
              stock appreciation rights
            </a>
            , which vest over a multi-year period. CoinDesk journalists are not
            allowed to purchase stock outright in DCG.
          </Disclaimer>

          <div tw="flex justify-center items-center">
            <span tw="text-xs italic">
              @{new Date().getFullYear()} coindock
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
