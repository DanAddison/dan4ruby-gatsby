import React from "react";
import { bool } from 'prop-types';
import { Link } from "gatsby";
import { Navigation, MainMenu } from './Sidebar.styled';

const Sidebar = ({menuLinks, open}) => (

  <Navigation open={open} display={'flex'} flexDirection='column' width={[1, 1/2, 1/2, 1/3]} bg={'secondary'} p={4}>

    <MainMenu color={'white'} fontSize={[4,4,4]}>
      {menuLinks.map(link => (
        <li key={link.name}>
          <Link to={link.link}>{link.name}</Link>
        </li>
      ))}
    </MainMenu>

  </Navigation>
)

// type checking
Sidebar.propTypes = {
  open: bool.isRequired,
}

export default Sidebar
