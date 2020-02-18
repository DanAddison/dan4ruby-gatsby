import React from "react"
import { Link } from "gatsby"
import { SidebarWrapper, Navigation, Credits } from './Sidebar.styled';

const Sidebar = ({menuLinks}) => (
  <SidebarWrapper display={'flex'} flexDirection='column' width={['150px','200px']} bg={'rgba(0, 0, 0, 0.7)'} p={4}>

    <Navigation color={'white'} mt={5} fontSize={[2,2,3]}>
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

  </SidebarWrapper>
)


export default Sidebar
