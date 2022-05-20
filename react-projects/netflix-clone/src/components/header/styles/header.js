import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
    src ? `${src}` : "../images/misc/home-bg.jpeg"});

  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background:none;`}
  }
`;

export const Frame = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  width: 100%;
  height: 70px;
  padding: 0 36px;
  position: fixed;
  top: 0;
  background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%);

  transition-timing-function: ease-in;
  transition: all 0.5s;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 949px) {
    margin: 12px 40px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;

  .rightAligned {
    position: absolute;
    right: 0;
  }

  .volumeUpIcon {
    border: 2px solid white;
    border-radius: 50%;
    padding: 5px;
    width: 3vw;
    height: 3vw;
    /* position: relative; */
    margin: 0 1.1vw 0 0;
    &:hover {
      background-color: rgba(109, 109, 110, 0.4);
    }
  }
`;

export const Logo = styled.img`
  height: 23px;
  width: 92.5px;
  margin-right: 40px;

  @media (max-width: 949px) {
    height: 40px;
    width: 100px;
  }
`;

export const NavLink = styled.span`
  a {
    cursor: pointer;
    color: white;
    text-decoration: none;
    margin-right: 20px;
    font-size: 14px;
    font-weight: ${({ active }) => (active === "true" ? "780" : "normal")};

    &:hover {
      font-weight: bold;
    }

    &:active {
      font-weight: 780;
    }
  }
`;

export const TextLink = styled.p`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  font-size: 14px;
  font-weight: ${({ active }) => (active === "true" ? "780" : "normal")};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:active {
    font-weight: 780;
  }
`;

export const Gradient = styled.div`
  height: 7.3rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: white;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: ${({ active }) => (active === true ? "10px" : "0")};
  padding: ${({ active }) => (active === true ? "0 10px" : "0")};
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  width: ${({ active }) => (active === true ? "200px" : "0px")};
  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
`;

export const DropDown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    ${TextLink} {
      cursor: pointer;
    }
    ${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${DropDown} {
    display: flex;
    flex-direction: column;

    button {
      background-repeat: no-repeat;
      height: 21px;
      width: 21px;
    }
  }

  .notificationsIcon {
    margin-right: 20px;
  }

  .dropdownIcon {
    /* margin-left: 20px;
    margin-right: 20px; */
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }
`;

export const Feature = styled.div`
  z-index: 0;
  display: flex;
  margin: 0 3.4rem;
  height: 54px;
  padding: 15px 0;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 150px 0 150px 0;
  flex-direction: column;
  align-items: normal;
  width: 36%;
  a {
    display: flex;
  }

  @media (max-width: 949px) {
    margin: 12px 40px;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: white;
  font-size: 1.4vw;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;

  &#hideMeAfter10Seconds {
    animation: hideAnimation 0s ease-in 8s;
    animation-fill-mode: forwards;
  }

  @keyframes hideAnimation {
    to {
      visibility: hidden;
      width: 0;
      height: 0;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  padding: 60px 0 150px 0;
  margin: 0 0 0 3.4rem;
  justify-content: space-between;
  .playIcon,
  .moreIcon {
    margin-right: 5px;
  }
`;

export const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: white;
  color: #000;
  border-width: 0;
  padding: 0.1rem 1.4rem 0.1rem 0.8rem;
  border-radius: 5px;
  max-width: 210px;
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
  margin-right: 0.8rem;
  margin-bottom: 0.8rem;
  transition: background-color 0.5s ease;
  &:hover {
    background: rgb(198, 198, 198);
  }
  .playIcon {
    height: 2.2rem;
    width: 2.2rem;
  }
`;

export const MoreInfoButton = styled(PlayButton)`
  background-color: rgba(109, 109, 110, 0.7);
  color: rgb(249, 249, 249);
  padding: 0.3rem 1.6rem 0.3rem 1.2rem;
  text-decoration: none;

  &:hover {
    background-color: rgba(109, 109, 110, 0.4);
  }
  .moreIcon {
    height: 1.8rem;
    width: 1.8rem;
  }
`;

export const MaturityIcon = styled.span`
  border: solid 3px #dcdcdc;
  border-style: none none none solid;
  background-color: rgba(51, 51, 51, 0.6);
  font-size: 1.1vw;
  padding: 0.5vw 3.5vw 0.5vw 0.8vw;
  display: flex;
  align-items: center;
  height: 3vw;
  box-sizing: border-box;

  span {
    background-color: #fb4f93;
    border: 1px solid white;
    border-radius: 50%;
    padding: 5px;
    width: 2em;
    height: 2em;
    vertical-align: center;
  }
`;
