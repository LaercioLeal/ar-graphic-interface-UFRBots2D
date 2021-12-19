import { createGlobalStyle } from 'styled-components'

import reset from './reset'
import fonts, { fontFaces } from './fonts'

export default createGlobalStyle`
  ${reset}
  ${fontFaces}

  * {
    -webkit-text-stroke: -0.5px;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: ${fonts.medium};

    background-color: #f6f6f6;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body.companies {
    background-color: #fff;
  }

  #root-membership {
    overflow-x: hidden;
  }

  .grecaptcha-badge {
    visibility: hidden;
  }

  .MuiTooltip-tooltip {
    font-family: ${fonts.medium} !important;
  }

  #notistack-snackbar {
    font-family: ${fonts.medium} !important;
  }
`
