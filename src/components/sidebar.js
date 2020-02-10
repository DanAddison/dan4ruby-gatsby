import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { color, layout, space, typography, flexbox } from 'styled-system'

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 100;
  ${layout}
  ${color}
  ${space}
  ${flexbox}
`

const Navigation = styled.nav`
  ${color}
  ${space}
  ${typography}
`

const Credits = styled.div`
  margin-top: auto;
  ${color}
  ${typography}
`

const Sidebar = ({menuLinks}) => (
  <Wrapper display={'flex'} flexDirection='column' width={['150px','200px']} bg={'primary'} p={4}>

    <Navigation color={'white'} mt={4} fontSize={[2,2,3]}>
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </Navigation>

    <Credits color={'white'}>
      <p>© {new Date().getFullYear()} Ruby & <a href="https://danaddisoncreative.com">Dan Addison</a></p>
    </Credits>

  </Wrapper>
)


export default Sidebar
