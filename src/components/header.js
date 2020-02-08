import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors, breakpoints } from "../utilities"

const HeaderOuter = styled.header`
  position: absolute;
  width: ${breakpoints.sidenavWidth};
  left: -${breakpoints.sidenavWidth};
  top: 0;
  bottom: 0;
  z-index: 100;
  color: ${colors.white};

  @media (min-width: ${breakpoints.sidenav}) {
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
`

const SiteNav = styled.nav`
  margin-left: auto;
  text-align: right;
  margin-right: -1rem;
  font-size: 1.25rem;

  ul {
    display: flex;

    li {
      padding: 0 1em;

      a:hover {
        background-color: #f6ae2d;
      }
    }
  }

  @media (min-width: ${breakpoints.sidenav}) {
    margin-left: 0;
    text-align: left;
    margin-top: 2em;

    ul {
      display: block;

      li {
        padding: 0.5em 0;

        a {
          padding-right: 1rem;
        }
      }
    }
  }
`

const Credits = styled.div`
  display: none;

  @media (min-width: ${breakpoints.sidenav}) {
    display: block;
    margin-top: auto;

    p {
      margin-bottom: 1em;
    }
  }
`

const Header = ({ siteTitle, menuLinks }) => (
  <HeaderOuter>
    <HeaderInner>
      <SiteNav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </SiteNav>
      <Credits>
        <p>© {new Date().getFullYear()} Ruby & <a href="https://danaddisoncreative.com">Dan Addison</a></p>
      </Credits>
    </HeaderInner>
  </HeaderOuter>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
