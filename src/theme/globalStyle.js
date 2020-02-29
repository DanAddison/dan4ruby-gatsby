import { createGlobalStyle } from "styled-components"
import reset from "styled-reset-advanced"
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  /* css reset https://github.com/markoradak/styled-reset-advanced */
  ${reset}

  /* my global styles */
  body {
    background: ${theme.colors.pageBackground};
    font-family: 'Lora';
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
  li {
    padding-bottom: .5em;
  }
  em {
    font-style: italic;
  }
  a {
    text-decoration: underline;
  }
  a.fancylink {
    text-decoration: none;
    position: relative;
    z-index: 1;
    
    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: -5px;
      bottom: -5px;
      left: -0.25em;
      right: -0.25em;
      background-color: ${theme.colors.primary[2]};
      transform-origin: center right;
      transform: scaleX(0);
      transition: transform 0.2s ease-in-out;
    }
    
    &:hover::before {
      transform: scaleX(1);
      transform-origin: center left;
    }
    &:focus {
      outline: thin dotted;
    }
    &:hover,
    &:active {
      outline: 0;
    }
  }
  .btn {
    display: inline-block;
    padding: .7em 1.4em;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: .15em;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    background: ${theme.colors.primary['1']};
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.2s;

    :hover {
      background: ${theme.colors.primary[2]};
    }
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
