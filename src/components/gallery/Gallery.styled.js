// Gallery.styled.js
import styled from "styled-components"

export const GalleryWrapper = styled.div`
  padding: 2em 1em;
  display: flex;
  flex-wrap: wrap;
  /* now override flexbox fallback with grid for supporting browsers */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 1rem;
`

export const GalleryImage = styled.div`
  width: 100%;
  max-width: 600px;
`;