import { createGlobalStyle } from "styled-components"
import reset from "styled-reset-advanced"
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  /* css reset https://github.com/markoradak/styled-reset-advanced */
  ${reset}

  /* my global styles */
  body {
    /* font-family: ${theme.body_font}; */
  }
  h1, h2, h3, h4, h5, h6 {
    /* font-family: ${theme.feature_font}; */
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 1em;
  }
  h1 { font-size: 2.5rem; }
  h2 { font-size: 2.0rem; }
  h3 { font-size: 1.75rem; }
  h4 { font-size: 1.5rem; }
  h5 { font-size: 1.25rem; }
  h6 { font-size: 1rem; }
  @media (min-width: ${theme.breakpoints[2]}) {
    h1 { font-size: 3.25rem; }
    h2 { font-size: 2.75rem; }
    h3 { font-size: 2.25rem; }
    h4 { font-size: 2.0rem; }
    h5 { font-size: 1.75rem; }
    h6 { font-size: 1.25rem; }
  }
  p {
    line-height: 1.25;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
`
