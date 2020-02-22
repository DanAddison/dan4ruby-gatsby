import React from "react"
import { Layout, SEO } from "../components"
import styled from 'styled-components'
import { space } from 'styled-system'

const Article = styled.article`
  ${space}
`

const GiftingPage = () => (
  <Layout>
    <SEO title="Gifting" description="Well, if you must!" />
    <Article px={[2,3,5]}>
      <h1>Gifting</h1>
    </Article>
  </Layout>
)

export default GiftingPage

