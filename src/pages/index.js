import React from "react"
import { Layout, Splashpage, Heading } from "../components"
import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary['4']};
`

const Notice = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.white};

  p {
    font-size: ${props => props.theme.fontSizes['3']}
  }
`

const IndexPage = () => (
  <Layout>

    <Splashpage />

      {/* <Overlay>
        <Notice>
          <Heading fontSize={[8,9]} mb={2} mt={8}>Postponed <span role="img" aria-label="expletives">🤬</span></Heading>
          <p>See you in 2021?</p>
        </Notice>
      </Overlay> */}

  </Layout>
)

export default IndexPage

