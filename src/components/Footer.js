import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const MainFooter = styled.footer`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
	margin-top: 20rem;
  margin-bottom: 1rem;
  padding: 1rem 1rem;
  width: 100%;
  border-top: 2px solid white ;
	background-color: pink;
	font-size: 12pt;

`;



const MenuList = styled.ul`
  list-style: none;

`;

const MenuListItem = styled.li`
  margin-right: 1rem;

`;

function Footer() {
  return (
		<MainFooter> 
        <MenuList>
          <MenuListItem>
            <Link to='/contact'>Contact</Link>
          </MenuListItem>
          <MenuListItem>
            <Link to='/artists'>Artists</Link>
          </MenuListItem>
					<MenuListItem>
						<Link to= '/about'>About</Link>
					</MenuListItem>
        </MenuList>
			</MainFooter>
  );
}

export default Footer;