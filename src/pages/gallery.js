import React from "react"
import { Layout, Gallery, Box } from "../components"

const GalleryPage = () => (
  <Layout>
    <Box py={[5,6]} px={[2,5]}>
      <Gallery />
    </Box>
  </Layout>
)

export default GalleryPage