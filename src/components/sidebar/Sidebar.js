import React from "react";
import { bool } from 'prop-types';
import { Link } from "gatsby";
import { SidebarWrapper, Navigation, Credits } from './Sidebar.styled';

const Sidebar = ({menuLinks, open}) => (

  <SidebarWrapper open={open} display={'flex'} flexDirection='column' width={[1, 1/2, 1/3, 1/4]} bg={'rgba(0, 0, 0, 0.85)'} p={4}>

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

// type checking
Sidebar.propTypes = {
  open: bool.isRequired,
}

export default Sidebar
