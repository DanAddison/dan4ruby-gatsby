import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { color, layout } from 'styled-system'

const HeaderOuter = styled.header`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 100;
  color: ${props => props.theme.white};
  ${layout}

  @media (min-width: ${props => props.theme.sidenav}) {
    left: 0;
  }
`

const HeaderInner = styled.div`
  flex-direction: column;
  margin: 0 auto;
  max-width: 60em;
  padding: 2rem;
  display: flex;
  height: 100%;
  ${color}
`

const MainNav = styled.nav`
  margin-left: auto;
  text-align: right;
  margin-right: -1rem;
  font-size: 1.25rem;

  @media (min-width: ${props => props.theme.sidenav}) {
    margin-left: 0;
    text-align: left;
    margin-top: 2em;
  }
`

const Credits = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.sidenav}) {
    display: block;
    margin-top: auto;

    p {
      margin-bottom: 1em;
    }
  }
`

const Sidebar = ({menuLinks}) => (
  <HeaderOuter width={['200px','500px']}>
    <HeaderInner bg={'primary'}>
      <MainNav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </MainNav>
      <Credits>
        <p>© {new Date().getFullYear()} Ruby & <a href="https://danaddisoncreative.com">Dan Addison</a></p>
      </Credits>
    </HeaderInner>
  </HeaderOuter>
)


export default Sidebar
