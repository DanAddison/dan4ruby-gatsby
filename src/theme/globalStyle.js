import { createGlobalStyle } from "styled-components"
import reset from "styled-reset-advanced"
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  /* css reset https://github.com/markoradak/styled-reset-advanced */
  ${reset}

  /* my global styles */
  body {
    background: ${theme.colors.pageBackground};
    font-family: 'Questrial';
  }
  h1, h2, h3 {
    line-height: ${theme.lineHeights[1]};
    
    font-weight: bold;
    margin-top: .5em;
    margin-bottom: .5em;
  }
  h4, h5, h6 {
    line-height: ${theme.lineHeights[2]};
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  h1 { font-size: ${theme.fontSizes[6]}; }
  h2 { font-size: ${theme.fontSizes[5]}; }
  h3 { font-size: ${theme.fontSizes[4]}; }
  h4 { font-size: ${theme.fontSizes[3]}; }
  h5 { font-size: ${theme.fontSizes[2]}; }
  h6 { font-size: ${theme.fontSizes[1]}; }
  @media (min-width: ${theme.breakpoints[2]}) {
    h1 { font-size: ${theme.fontSizes[7]}; }
    h2 { font-size: ${theme.fontSizes[6]}; }
    h3 { font-size: ${theme.fontSizes[5]}; }
    h4 { font-size: ${theme.fontSizes[4]}; }
    h5 { font-size: ${theme.fontSizes[3]}; }
    h6 { font-size: ${theme.fontSizes[2]}; }
  }
  p {
    line-height: ${theme.lineHeights[2]};
    margin-bottom: 1rem;
    @media (min-width: ${theme.breakpoints[1]}) {
      font-size: ${theme.fontSizes[2]};
    }
  }
  ul {
    margin: 0 auto;
    @media (min-width: ${theme.breakpoints[1]}) {
      font-size: ${theme.fontSizes[2]};
    }
  }
  em {
    font-style: italic;
  }
  .visuallyHidden {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      height: 0;
      width: 0;
      z-index: -1;
  }
`
