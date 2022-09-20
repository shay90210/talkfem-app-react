import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    
  return (
    <Nav className='main-nav pt-3 pb-3 justify-content-center'>
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
   )
}

export default NavigationBar; 