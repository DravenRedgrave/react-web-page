import React,{useState, useEffect} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../gloabalStyles';
import {Nav,NavbarContainer,NavLogo,NavIcon,MobileIcon,NavMenu,NavItem,NavLink,NavItemBtn,NavBtnLink} from './Navbar.element';

 

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click)

    const showButton = () => {
        if(window.innerWidth<=960){
            setButton(false)
        } else {
            setButton(true)
        }
    }


    useEffect(()=>{
        showButton()
    },[])

    window.addEventListener('resize',showButton);


    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon/>
                        ULTRA
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/>:<FaBars/>}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLink to='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/service'>Service</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/product'>Product</NavLink>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/signup'>
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ):(
                                <NavBtnLink to='/signup'>
                                <Button  fontBig primary>SIGN UP</Button>
                            </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
