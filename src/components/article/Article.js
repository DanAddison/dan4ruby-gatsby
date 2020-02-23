import styled from 'styled-components'
import { Box } from '../../components'
import { theme } from '../../theme/theme';

const Article = styled(Box)`
  max-width: 60em;
  padding: 6em 2em;

  @media (min-width: ${theme.breakpoints[1]}) {
    padding-left: 10vw;
  }
`

export default Article