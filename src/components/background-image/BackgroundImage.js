import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// we will use Gatsby Img component so that we get nice blur-up effect etc, but then apply inline styles to it so that it becomes a background image.
// You might expect to be able to abstract it into a styled(Img) component, but this doesn't work because the component ends up wrapped inside another Gatsby Img wrapper. So we have to use inline styles on the Img component.

const BackgroundImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Ruby&Dan-181.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img style={{
    position:'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1
  }}
  fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default BackgroundImage
