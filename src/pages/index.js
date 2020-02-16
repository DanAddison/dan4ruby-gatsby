import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Splashpage from "../components/background-image"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Splashpage />
  </Layout>
)

export default IndexPage

