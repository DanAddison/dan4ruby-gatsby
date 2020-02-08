/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import { GlobalStyle } from "../theme/globalStyle"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { colors } from "../utilities"

const ContentWrapper = styled.div`
  min-height: 100vh;
  background-color: ${colors.background};
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
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
      />
      <Hamburger />
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
