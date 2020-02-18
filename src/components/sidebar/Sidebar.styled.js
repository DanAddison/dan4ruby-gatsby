// Sidebar.styled.js
import styled from "styled-components"
import { color, layout, space, typography, flexbox } from 'styled-system'

export const SidebarWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  ${layout}
  ${color}
  ${space}
  ${flexbox}
`

export const Navigation = styled.nav`
  ${color}
  ${space}
  ${typography}

  li {
    padding-bottom: .5em;
  }
`

export const Credits = styled.div`
  margin-top: auto;
  ${color}
  ${typography}
`