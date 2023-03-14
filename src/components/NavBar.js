import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { useState, useEffect } from "react";
import { VscGithub } from 'react-icons/vsc';

export const NavBar=()=>{
    const [activeLink,setActiveLink]=useState('');
    const[scrolled,setScrolled]=useState(false);


    //UseEffect will be triggered when the scroll starts.
    useEffect(()=>{
        const onScroll =() => {
            if(window.scrollY>50)
            setScrolled(true);
            else
            setScrolled(false);
        }
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll);
    },[]);
    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }
    return(
    <Navbar  expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
           
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'?'active-navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects'?'active-navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text"> 
           <div className="social-icon">
            <a href="https://www.linkedin.com/in/ayush-raj-9967951b8/"><img src={navIcon1} alt="" /></a>
            <a href="https://www.facebook.com/profile.php?id=100008603410049"><img src={navIcon2} alt="" /></a>
            <a href="https://instagram.com/_.a._y_u_s_h?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt="" /></a>
           </div>
           <button className="vvd">
  <span>
  <Nav.Link style={{color: "#746AB0" }} href="#connect" className={activeLink==='connect'?'active-navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('connect')}>Contact me</Nav.Link>
  </span>
</button>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}