import tw, { styled } from 'twin.macro'

import { ReactComponent as ClockSvg } from '../assets/svgs/clock.svg'

const ArticleContent = styled.div`
  ${tw`text-lg leading-[30px] tracking-normal mx-12`}

  p {
    ${tw`mb-5 text-lg`}
  }

  h2 {
    ${tw`mt-10 mb-5 text-[42px] leading-[52px] tracking-wide font-bold font-display`}
  }

  li {
    ${tw`mb-5 relative pl-5`}

    &::before {
      content: ' ';
      ${tw`w-2 h-2 rounded-full bg-green-500 absolute left-0 top-3`}
    }

    & > div {
      ${tw`mb-3`}
    }

    & > ul > li {
      ${tw`mb-2`}

      &::before {
        ${tw`border border-green-500 bg-transparent`}
      }
    }
  }
`

const Article = () => {
  return (
    <article>
      <div tw="pt-10 pb-12">
        <div tw="max-w-[1056px] mx-auto">
          <div tw="pb-10">
            <div tw="mb-5">
              <a
                href="https://www.coindesk.com/business/"
                tw="font-bold text-[32px] leading-[30px] text-green-500"
              >
                Business
              </a>
            </div>
            <div tw="mb-2.5">
              <h1 tw="font-bold font-display text-[42px] tracking-wide leading-[52px]">
                Joystick Education
              </h1>
            </div>
            <div tw="mb-6">
              <h2 tw="font-display2 font-medium text-2xl leading-9 tracking-normal">
                We’re creating a program that allows anyone, at any financial
                level, to climb from the bottom rung up to owning their own web3
                business, in whichever direction they want to go.
              </h2>
            </div>
            <div tw="mb-5 flex items-center">
              <div tw="text-sm font-bold">
                By{' '}
                <a
                  href="https://www.coindesk.com/author/tanzeel-akhtar/"
                  tw="hover:underline"
                >
                  Tanzeel Akhtar
                </a>
              </div>

              <div tw="flex ml-2.5">
                <span tw="mr-2.5">‧</span>
                <div tw="flex gap-1 items-center text-sm">
                  <ClockSvg tw="w-5 h-5" />
                  <span>Oct 8, 2021 at 2:02 a.m.</span>
                </div>
              </div>

              <div tw="text-sm ml-2.5">
                <span tw="mr-2.5">‧</span>

                <span>Updated Oct 8, 2021 at 2:17 a.m.</span>
              </div>
            </div>

            <div>
              <figure>
                <img
                  alt=""
                  src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/CPJCLTKVGBHEDDC2TCAMQOFUHU.jpg"
                />
                <figcaption tw="text-white bg-gray-400 bg-opacity-50 px-2.5 italic inline-flex">
                  <p>
                    Inside Axie Infinity, a game YGG supports. (Axis Infinity)
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>

          <ArticleContent>
            <div>
              <h2>LEARN TO EARN (either tokens or access)</h2>
              <p>
                Concept to get people to learn and actually earn something from
                nothing.
              </p>
              <p>
                Have users go through educational materials, provide them with a
                quiz to complete at the end, and if they pass, they earn xJOY
                tokens or greater access, or entered into weekly/monthly
                giveaways, or a combination of some/all. Questions should
                randomize, put systems in to disincentivize people from
                attempting to do it over and over - either make it impossible or
                unrealistic. IE: create a profile with Joystick, connect your
                wallet to it, IP tracking, etc.
              </p>
              <p>
                This can provide baseline education in each of the main learning
                categories that will allow complete beginners to learn and to
                earn and begin to grow in the web3 world.
              </p>
              <p>
                Maybe by staking JOY you automatically unlock different levels
                of access to education content… but if you’re not, you can get
                access to ground level and you have to pass to climb the ladder.
                Perhaps create a level up system for your Joystick account, so
                as you grow you earn badges in whatever learning paths you
                pursue. IE: You complete stage 1 of eSports training, you earn
                the eSports Stage 1 badge which unlocks eSports Stage 2 and
                makes you eligible for the weekly/monthly eSports Education
                giveaways.
              </p>
            </div>

            <div>
              <h2>CORE LEARNING PATHS</h2>
              <ul>
                <li>
                  <div>Initially</div>
                  <ul>
                    <li>eSports Professional or Team Owner</li>
                  </ul>
                </li>
                <li>
                  <div>Down the line</div>
                  <ul>
                    <li>Leadership: Business/Brand</li>
                    <li>Web3 Content Creator/Influencer</li>
                    <li>Educator/Teacher</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h2>QUESTIONS TO ANSWER</h2>
              <ul>
                <li>
                  What mediums will we be using? Written content, video content,
                  blog/forum/etc?
                </li>
                <li>Who are the educators?</li>
                <li>
                  <div>
                    How can we build someone from nothing into becoming a
                    leader? How do we give someone the access and tools needed
                    to build their own community from within our ecosystem?
                  </div>

                  <ul>
                    <li>
                      Think tiered leadership positions within the ecosystem
                    </li>
                    <li>
                      Joystick is the parent, but people can build their own
                      guilds/communities within the ecosystem of Joystick. Gives
                      them a sense of ownership and leadership/responsibility.
                      The goal here is to give power to the players, give the
                      opportunity to the players to create their freedom in the
                      web3 world, underneath and with the help of Joystick. You
                      are your own guild/business, but you “hang your flag” with
                      Joystick.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h2>RESOURCES</h2>
              <ul>
                <li>
                  <div>Founder of Acadarena, Kevin Hoang</div>
                  <ul>
                    <li>
                      8 years at Twitch spent building their eSports education
                      platform
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </ArticleContent>
        </div>
      </div>
    </article>
  )
}

export default Article
