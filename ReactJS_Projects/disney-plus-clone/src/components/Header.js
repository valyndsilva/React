import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import {auth, provider} from '../firebase';
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../features/user/userSlice';


function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate(); //helps redirect to homepage
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            setUser(user);
            navigate("/");
          }
        });
      }, [userName]);

      const setUser = (user) => {
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      };

      const handleAuth = () => {
        if (!userName) {
          auth
            .signInWithPopup(provider)
            .then((result) => {
              setUser(result.user);
            })
            .catch((error) => {
              alert(error.message);
            });
        } else if (userName) {
          auth
            .signOut()
            .then(() => {
              dispatch(setSignOutState());
              navigate("/");
            })
            .catch((err) => alert(err.message));
        }
      };

    return (
        <Nav>
            <Link to={`/`}>
             <Logo src="/images/logo.svg" />
            </Link>

            {!userName ? 
            ( <LoginContainer><Login onClick={handleAuth}>Login</Login></LoginContainer>  ) : 
            (
            <>
            <NavMenu>
                <a href="/#">
                    <img src="/images/home-icon.svg" alt="" />
                    <span>HOME</span>
                </a>
                <a href="/#">
                    <img src="/images/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </a>
                <a href="/#">
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>WATCHLIST</span>
                </a>
                <a href="/#">
                    <img src="/images/original-icon.svg" alt="" />
                    <span>ORIGINALS</span>
                </a>
                <a href="/#">
                    <img src="/images/movie-icon.svg" alt="" />
                    <span>MOVIES</span>
                </a>
                <a href="/#">
                    <img src="/images/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <SignOutContainer>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOutContainer>
        </>
      )}
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display: flex; 
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration:none;
        color: white;

        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0; 
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

const LoginContainer = styled.div`
    flex: 1;
    display:flex;
    justify-content: flex-end;
`

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;
    cursor:pointer;

    &:hover{
        background-color:#f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const DropDown = styled.div`
    position:absolute;
    top:40px;
    right:0px;
    background-color: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity:0;

    
`
const SignOutContainer = styled.div`
height:48px;
width:48px;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    ${DropDown}{
        opacity:1;
        transition-duration:1s;
    }
}
`