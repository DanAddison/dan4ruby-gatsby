import React from "react"
import { Layout, SEO, Gallery, Box } from "../components"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <Box py={[5,6]} px={[2,5]}>
      <Gallery />
    </Box>
  </Layout>
)

export default GalleryPage