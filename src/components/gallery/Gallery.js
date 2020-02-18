import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GalleryWrapper, GalleryImage } from './Gallery.styled';

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
