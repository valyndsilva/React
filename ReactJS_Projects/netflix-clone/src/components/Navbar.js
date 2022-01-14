import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import '../App.css';

function Navbar() {

    const [show, setShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setShow(true);
            } else setShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])
    return (
       <Nav className={show ? 'navbar colorChange': 'navbar'}>
           <Logo src="/images/logo.svg" alt=""/>
           <Avatar src="/images/netflix-avatar.png" />
       </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
    z-index: 1;
    position:fixed;  
    top:0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    ${'' /* background-color: #090b13; */}
    
    transition-timing-function: ease-in;
    transition all 0.5s;    
`
const Logo = styled.img`
    position: fixed;
    left:20px;
    width: 80px;
    object-fit:contain;
`
const Avatar = styled.img`
    position: fixed;
    right: 20px;
    width: 30px;
    object-fit:contain;
    cursor: pointer;
`
