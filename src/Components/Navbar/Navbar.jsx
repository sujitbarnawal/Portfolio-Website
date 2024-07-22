import { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu,setMenu]=useState("home")

  const menuRef = useRef()

  const openMenu=()=>{
    menuRef.current.style.right="0"
  }

  const closeMenu=()=>{
    menuRef.current.style.right="-350px"
  }

  return (
    <div className='navbar'>
      <div className='logo-name'>SUJIT</div>
      <img src={menu_open} className='nav-mob-open ' onClick={()=>openMenu()} />
      <ul ref={menuRef} className="nav-menu ">
        <img src={menu_close} className='nav-mob-close ' onClick={()=>closeMenu()}/>

        <li> <AnchorLink className='alink' offset={-50} href='#home'> <p onClick={()=>{setMenu("home")}}>Home</p> </AnchorLink> {menu==="home"? <img className='flex m-auto' src={underline}/>:<></> }</li>

        <li> <AnchorLink className='alink' offset={50} href='#about'> <p onClick={()=>{setMenu("about")}}>About Me</p> </AnchorLink> {menu==="about"? <img className='flex m-auto' src={underline}/>:<></> }</li>

        <li> <AnchorLink className='alink' offset={50} href='#services'> <p onClick={()=>{setMenu("services")}}>Services</p> </AnchorLink> {menu==="services"? <img className='flex m-auto' src={underline}/>:<></> }</li>

        <li> <AnchorLink className='alink' offset={50} href='#work'> <p onClick={()=>{setMenu("work")}}>Portfolio</p> </AnchorLink> {menu==="work"? <img className='flex m-auto' src={underline}/>:<></> }</li>

        <li> <AnchorLink className='alink' offset={50} href='#contact'> <p onClick={()=>{setMenu("contact")}}>Contact</p> </AnchorLink> {menu==="contact"? <img className='flex m-auto' src={underline}/>:<></> }</li>
      </ul>
      <div className='nav-connect'><AnchorLink className='alink' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
