/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useRef } from 'react'
import { useOnClickOutside } from '../../hooks'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "../../theme/globalStyle"
import { theme } from "../../theme/theme"
import { Sidebar, Burger } from "../../components"
import { space } from 'styled-system'

const NavigationWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
`
const ContentWrapper = styled.div`
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
        <NavigationWrapper ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Sidebar open={open} setOpen={setOpen}
            menuLinks={data.site.siteMetadata.menuLinks}
          />
        </NavigationWrapper>
        <ContentWrapper py={6} px={[2, 4]}>
          <main>{children}</main>
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
