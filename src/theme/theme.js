// theme.js
/* eslint-disable prefer-destructuring */
/**
 * This is our custom theme where we define global styles.
 * It should serve as a guideline for styling, but not all styles *have* to be taken from here.
 */
const breakpoints = ['576px', '768px', '992px', '1200px']

//  Aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

/**
 * Primary: Colors to use for actionable items, such as links, buttons etc.
 * Grey: Colors for items that are not that important
 */
const colors = {
  pageBackground: 'radial-gradient(circle at 69% 86%, rgba(165, 165, 165,0.06) 0%, rgba(165, 165, 165,0.06) 25%,rgba(193, 193, 193,0.06) 25%, rgba(193, 193, 193,0.06) 50%,rgba(221, 221, 221,0.06) 50%, rgba(221, 221, 221,0.06) 75%,rgba(249, 249, 249,0.06) 75%, rgba(249, 249, 249,0.06) 100%),radial-gradient(circle at 49% 76%, rgba(129, 129, 129,0.06) 0%, rgba(129, 129, 129,0.06) 25%,rgba(164, 164, 164,0.06) 25%, rgba(164, 164, 164,0.06) 50%,rgba(200, 200, 200,0.06) 50%, rgba(200, 200, 200,0.06) 75%,rgba(235, 235, 235,0.06) 75%, rgba(235, 235, 235,0.06) 100%),radial-gradient(circle at 22% 64%, rgba(173, 173, 173,0.06) 0%, rgba(173, 173, 173,0.06) 25%,rgba(119, 119, 119,0.06) 25%, rgba(119, 119, 119,0.06) 50%,rgba(64, 64, 64,0.06) 50%, rgba(64, 64, 64,0.06) 75%,rgba(10, 10, 10,0.06) 75%, rgba(10, 10, 10,0.06) 100%),linear-gradient(307deg, rgb(255,255,255),rgb(255,255,255))',
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  primary: {
    100: '#001f3f',
    200: '#0b8457',
    300: '#ff304f',
    400: 'hsl(227, 63%, 67%)',
    500: 'hsl(230, 65%, 63%)',
    600: 'hsl(230, 52%, 53%)',
    700: 'hsl(230, 51%, 43%)',
    800: 'hsl(230, 57%, 34%)',
    900: 'hsl(231, 55%, 28%)',
  },
  grey: {
    100: 'hsl(210, 17%, 98%)',
    200: 'hsl(207, 22%, 90%)',
    300: 'hsl(210, 24%, 87%)',
    400: 'hsl(208, 17%, 83%)',
    500: 'hsl(209, 24%, 74%)',
    600: 'hsl(215, 17%, 63%)',
    700: 'hsl(214, 11%, 49%)',
    800: 'hsl(215, 17%, 30%)',
    900: 'hsl(215, 23%, 16%)',
  },
}

/**
 * Space is used for margin and padding scales.
 * It's recommended to use powers of two to ensure alignment across the entire project
 * I'm not down with that though so I've added a couple of in-between values
 */
const space = [
  '0',
  '4px',
  '8px',
  '16px',
  '24px',
  '32px',
  '48px',
  '64px',
  '128px',
  '256px',
]

/**
 * Typographic scale
 */
const fontSizes = [
  '14px',
  '16px',
  '18px',
  '20px',
  '24px',
  '30px',
  '36px',
  '42px',
  '50px',
  '58px',
  '68px',
]

const lineHeights = [1, 1.125, 1.25, 1.5]

const fontWeights = {
  normal: 400,
  semibold: 600,
}

/**
 * Letter-spacing should vary, depending on usage of text
 */
const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  labels: '0.05em',
}

/**
 * Border-radius
 */
const radii = ['0', '2px', '4px', '8px', '16px']

export const theme = {
  name: 'Default',
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
}