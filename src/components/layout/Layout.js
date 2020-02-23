/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useRef } from 'react'
import { useOnClickOutside } from '../../hooks'
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "../../theme/globalStyle"
import { theme } from "../../theme/theme"
import { Sidebar, Burger } from "../../components"
import { space } from 'styled-system'

const SiteHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 1rem;

  @media (max-width: ${theme.breakpoints[1]}) {
    background-color: rgba(255,255,255,.7);
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
    text-align: right;
  }
`
const Credits = styled.div`
  position: absolute;
  bottom: 0;
  right: 1rem;
`

const NavigationWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
`
const ContentWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  max-width: 2000px;
  margin-left: auto;
  margin-right: auto;
  ${space}
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteNavQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const [open, setOpen] = useState(false);
  const node = useRef(); 

  useOnClickOutside(node, () => setOpen(false));
  
  
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <SiteHeader>
          <h1><Link to={"/"}>Ruby & Dan</Link></h1>
        </SiteHeader>
        <NavigationWrapper ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Sidebar open={open} setOpen={setOpen}
            menuLinks={data.site.siteMetadata.menuLinks}
          />
        </NavigationWrapper>
        <ContentWrapper pt={[5, 5, 5]}>
          <main>{children}</main>
            <Credits>
              <p>© {new Date().getFullYear()} Ruby & <a href="https://danaddisoncreative.com">Dan Addison</a></p>
            </Credits>
        </ContentWrapper>
      </>
    </ThemeProvider>
  )
}

// type checking
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
