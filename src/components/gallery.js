import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const GalleryWrapper = styled.div`
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  /* now override flexbox fallback with grid for supporting browsers */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 1rem;
`

const GalleryImage = styled.div`
  min-width: 400px;
`

const Gallery = () => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { relativeDirectory: { eq: "gallery-images" } }
          sort: { fields: name }
        ) {
          nodes {
            id
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={data => {
      const galleryImages = data.images.nodes.map(image => (
        <GalleryImage key={image.id}>
          <Img
            fluid={image.childImageSharp.fluid}
            style={{
              maxWidth: 600,
            }}
            alt={image.name}
          />
        </GalleryImage>
      ))
      return (
        <GalleryWrapper>
          {galleryImages}
        </GalleryWrapper>
      )
    }}
  />
)
export default Gallery
