import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu
} from './NavBarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />
				<NavMenu>
					<NavLink to='/home'>
						Home
					</NavLink>
					<NavLink to='/blogs'>
						Blogs
					</NavLink>
					<NavLink to='/about'>
						About
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
