// Gallery.styled.js
import styled from "styled-components"

export const GalleryWrapper = styled.div`
  padding: 2em 1em;
  display: flex;
  flex-wrap: wrap;
  /* now override flexbox fallback with grid for supporting browsers */
  /* don't add grid until over 400px wide due to the min width of each cell being 400px */
  @media (min-width: 420px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 1rem;
  }
`

export const GalleryImage = styled.div`
  width: 100%;
  max-width: 600px;
  /* until display grid kicks in */
  padding-bottom: 1em;

    @media (min-width: 420px) {
      padding-bottom: 0;
    }

`;