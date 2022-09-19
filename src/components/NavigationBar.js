import { Collapse, Nav, NavItem, NavbarToggler, Navbar } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavigationBar = () => {
    
const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark sticky='top' expand='md' className='main-nav'>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='pt-3 pb-3' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                        <i className='fa fa-user' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/podcast'>
                        <i className='fa fa-microphone' /> Podcast
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                        <i className='fa fa-address-card' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
    </Navbar>
   )
}

export default NavigationBar; 