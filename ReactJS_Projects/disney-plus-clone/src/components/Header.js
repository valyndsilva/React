import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import {auth, provider} from '../firebase';
import { selectUserName, selectUserPhoto, setUserLoginDetails, setGuestLoginDetails, setSignOutState } from '../features/user/userSlice';


function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate(); //helps redirect to homepage
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
      if (userName === "Guest") {
        navigate("/");
      } else {
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            setUser(user);
            navigate("/");
          }
        });
      }
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


      const handleAuthGuest = () => {
        dispatch(setGuestLoginDetails());
        navigate("/");
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
            navigate("/");
          } else if (userName === "guest") {
            dispatch(setSignOutState());
            navigate("/");
          
        } else if (userName) {
          auth
            .signOut()
            .then(() => {
              dispatch(setSignOutState());
              navigate("/login");
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
            ( <LoginContainer>
                <Login onClick={handleAuth}>Login</Login>
                <Login onClick={handleAuthGuest}>Guest</Login>
              </LoginContainer>  ) : 
            (
            <>
            <NavMenu>
                <a href="/">
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
                <DropDownItem>
                  <img src="./images/home-icon.svg" alt="home" />
                  <a href="/home">Home</a>
                </DropDownItem>
                <DropDownItem>
                  <img src="./images/search-icon.svg" alt="home" />
                  <a href="/home">Search</a>
                </DropDownItem>
                <DropDownItem>
                  <img src="./images/watchlist-icon.svg" alt="home" />
                  <a href="/home">Watchlist</a>
                </DropDownItem>
                <DropDownItem>
                  <img src="./images/original-icon.svg" alt="home" />
                  <a href="/home">Original</a>
                </DropDownItem>
                <DropDownItem>
                  <img src="./images/series-icon.svg" alt="home" />
                  <a href="/home">Series</a>
                </DropDownItem>

                <span onClick={handleAuth}><img src="./images/logout-icon.svg" alt="home" />SIGN OUT</span>
            </DropDown>
          </SignOutContainer>
        </>
      )}
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
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


  @media (max-width: 768px) {
    display: none;
  }
`


const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

const LoginContainer = styled.div`
    
    display:flex;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: flex-end;
    ${'' /* flex: 1; */}
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: auto;
`

const Login = styled.a`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    margin-left: 10px;
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
    width: 115px;
    opacity:0;

    img {
      width: 12px;
      height: 12px;
      margin-right: 7px;
     
    }
    span {
      font-size: 12px;
      letter-spacing: 1.2px;
      text-transform: uppercase;
    }

  @media (max-width: 768px) {
    width: 120px;
  }
    
`

const DropDownItem = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    a {
      display: block;
      margin-bottom: 14px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      color:white;
      text-decoration:none;
    }
    img {
      width: 16px;
      height: 16px;
      margin-right: 7px;
    }
    
  }
`;

const SignOutContainer = styled.div`
height:48px;
width:48px;
display: flex;
align-items: center;
justify-content: center;
cursor:pointer;

&:hover{
    ${DropDown}{
        opacity:1;
        transition-duration:1s;
    }
}
`