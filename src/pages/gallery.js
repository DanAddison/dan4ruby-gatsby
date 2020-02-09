import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <Gallery />
  </Layout>
)

export default GalleryPage