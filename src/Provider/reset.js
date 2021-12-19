import { css } from 'styled-components'

import fonts from './fonts'

export default css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;

    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }

  button {
    &:active {
      -webkit-tap-highlight-color: transparent;
    }
  }

  img {
    display: inline-block;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: normal;
  }

  strong {
    font-weight: normal;
    font-family: ${fonts.bold};
  }
`
