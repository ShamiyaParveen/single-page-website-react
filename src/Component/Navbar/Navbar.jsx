import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import Logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';



const Navbar = () => {

const [sticky, setSticky] = useState(false);

useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
}, []);

const [mobileMenu, setMobileMenu] = useState(false)
const ToggleMenu = () =>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu (true);
}

  return (
    <nav className={`container  ${sticky ? 'dark-nav' : '' }`}>

        <img src={Logo} alt="logo" className='logo'/>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to="Hero" smooth={true} offset={0} duration={500}> Home </Link> </li>
            <li><Link to="Program" smooth={true} offset={-260} duration={500}>Programme</Link></li>
            <li><Link to="About" smooth={true} offset={-150} duration={500}>About us </Link> </li>
            <li><Link to="Campus" smooth={true} offset={-260} duration={500}>Campus </Link></li>
            <li><Link to="Testimonial" smooth={true} offset={-260} duration={500}>Testimonial </Link></li>
            <li><Link to="Contact" smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={ToggleMenu}/>

    </nav>
  )
}

export default Navbar