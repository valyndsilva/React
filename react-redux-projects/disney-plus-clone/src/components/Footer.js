import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
  <Nav>
        <LogoWrap>
            <Logo src="/images/logo.svg" />
        </LogoWrap>
      
       <FooterMenu>
                    <a href="/#">
                        <span>Privacy Policy</span>
                    </a>
                    <a  href="/#">
                        <span>Cookies Policy</span>
                    </a>
                    <a href="/#">
                        <span>UK & EU Privacy Rights</span>
                    </a>
                    <a href="/#">
                        <span>Subscriber Agreement</span>
                    </a>
                    <a href="/#">
                        <span>Help</span>
                    </a>
                    <a href="/#">
                        <span>Supported Devices</span>
                    </a>
                    <a href="/#">
                        <span>About Us</span>
                    </a>
                    <a href="/#">
                        <span>Interest-based Ads</span>
                    </a>
                    <a href="/#">
                        <span>Manage Preferences</span>
                    </a>
        </FooterMenu>
        <FooterCopyright>
        <span>© Disney. All rights reserved.</span>
        </FooterCopyright>
  </Nav>
  )
}

export default Footer;


const Nav = styled.nav`
    background-color: #090b13;
    color: #cacaca;
    padding: 36px 0;
    overflow-x:hidden;
    display:flex;
    flex-direction: column;
    margin-top: auto;
`

const LogoWrap = styled.div`
    display: flex;
    width: 100%;
`

const Logo = styled.img`
    width: 80px;
    min-height: 38px;
    min-width: 63px;
    margin: auto;
  
`

const FooterMenu = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 15px 0;

    a{
        display: flex;
        align-items: center;
        padding: 12px 10px;
        cursor: pointer;
        text-decoration: none;
        color: #cacaca;
    

        span{
            font-size: 12px;
            letter-spacing: 1.42px;
            position: relative;

          
        }
        &:hover{
            color: white;
            }
        }
    }
`
const FooterCopyright = styled.div`
   width: 100%;
   display: flex;
    justify-content: center;
    font-size: 12px;
`