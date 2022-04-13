import { createGlobalStyle } from 'styled-components'
import { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  @font-face {
    font-family: "Roslindale Display Bold";
    src: url("/fonts//roslindale_display_bold.woff2")
        format("font-woff2"),
      url("/fonts//roslindale_display_bold.woff")
        format("font-woff"),
      url("/fonts//roslindale_display_bold.ttf")
        format("truetype");
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Display Narrow Bold Roslindale";
    src: url("/fonts//roslindale_display_narrow.woff2")
        format("font-woff2"),
      url("/fonts//roslindale_display_narrow.woff")
        format("woff"),
      url("/fonts//roslindale_display_narrow.ttf")
        format("truetype");
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Haas Grotesk Text Pro";
    src: url("/fonts//NHaasGroteskTXStd-55Rg.woff2")
        format("font-woff2"),
      url("/fonts//NHaasGroteskTXStd-55Rg.woff")
        format("woff"),
      url("/fonts//NHaasGroteskTXStd-55Rg.ttf")
        format("truetype");
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Haas Grotesk Text Pro";
    src: url("/fonts//NHaasGroteskTXStd-56It.woff2")
        format("font-woff2"),
      url("/fonts//NHaasGroteskTXStd-56It.woff")
        format("woff"),
      url("/fonts//NHaasGroteskTXStd-56It.ttf")
        format("truetype");
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Haas Grotesk Display Pro";
    src: url("/fonts//NHaasGroteskTXStd-65Md.woff2")
        format("font-woff2"),
      url("/fonts//NHaasGroteskTXStd-65Md.woff")
        format("woff"),
      url("/fonts//NHaasGroteskTXStd-65Md.ttf")
        format("truetype");
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Haas Grotesk Display Pro";
    src: url("/fonts//NHaasGroteskTXStd-66MdIt.woff2")
        format("font-woff2"),
      url("/fonts//NHaasGroteskTXStd-66MdIt.woff")
        format("woff"),
      url("/fonts//NHaasGroteskTXStd-66MdIt.ttf")
        format("truetype");
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Haas Grotesk Text Pro";
    src: url("/fonts//NHaasGroteskTXStd-75Bd.woff2")
        format("font-woff2"),
      url("/fonts//NHaasGroteskTXStd-75Bd.woff")
        format("woff"),
      url("/fonts//NHaasGroteskTXStd-75Bd.ttf")
        format("truetype");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Haas Grotesk Display Pro";
    src: url("/fonts//NHaasGroteskTXStd-76BdIt.woff2")
        format("font-woff2"),
      url("/fonts//NHaasGroteskTXStd-76BdIt.woff")
        format("woff"),
      url("/fonts//NHaasGroteskTXStd-76BdIt.ttf")
        format("truetype");
    font-style: italic;
    font-display: swap;
  }

  body {
    font-family: "Neue Haas Grotesk Text Pro", sans-serif;
    margin: 0;
    box-sizing: border-box;
    position: relative;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
