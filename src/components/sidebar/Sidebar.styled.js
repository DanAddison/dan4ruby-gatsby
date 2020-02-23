// Sidebar.styled.js
import styled from "styled-components"
import { color, space, typography, layout } from 'styled-system'

export const Navigation = styled.nav`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  ${color}
  ${layout}
  ${space}
`

export const MainMenu = styled.ul`

  text-align: center;
  ${color}
  ${typography}
  ${space}
  
  li {
    padding-bottom: .75em;
  }
`