// Sidebar.styled.js
import styled from "styled-components"
import { color, space, typography, layout } from 'styled-system'

export const SidebarWrapper = styled.header`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: right;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  ${color}
  ${layout}
`

export const Navigation = styled.nav`
  ${color}
  ${space}
  ${typography}

  li {
    padding-bottom: .5em;
    text-align: right;
  }
`

export const Credits = styled.div`
  margin-top: auto;
  ${color}
  ${typography}
`