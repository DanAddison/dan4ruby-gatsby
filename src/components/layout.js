/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "../theme/globalStyle"
import { theme } from '../theme/theme';
import Sidebar from "./sidebar"
import { FaBars } from "react-icons/fa"

const ContentWrapper = styled.div`
  min-height: 100vh;
`

const Hamburger = styled(FaBars)`
  color: white;
  position: absolute;
  top: 1em;
  left: 1em;
  font-size: 1.5rem;
  z-index: 200;
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

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Sidebar
          menuLinks={data.site.siteMetadata.menuLinks}
        />
        <Hamburger />
        <ContentWrapper>
          <main>{children}</main>
        </ContentWrapper>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
