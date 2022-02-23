import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpeg` : "../images/misc/home-bg.jpeg"}),
    top left / cover no-repeat;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background:none;`}
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  z-index: 2;
  display: flex;
  margin: 0 3.2rem;
  height: 63px;
  /* padding: 15px 0;
  margin-top: 20px; */
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 949px) {
    margin: 12px 40px;
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
// export const Feature = styled(Container)`
//   padding: 150px 0 500px 0;
//   flex-direction: column;
//   align-items: normal;
//   width: 36%;

//   @media (max-width: 1100px) {
//     display: none;
//   }
// `;

export const Feature = styled.div`
  z-index: 2;
  display: flex;
  margin: 0 3.4rem;
  height: 54px;
  padding: 15px 0;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;

  padding: 150px 0 500px 0;
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

  /* &:last-of-type {
    margin-right: 0;
  } */
`;
export const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5vw;
  .MuiSvgIcon-root {
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
  padding: 0.4rem 1.6rem 0.4rem 1.2rem;
  border-radius: 5px;
  max-width: 210px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  transition: background-color 0.5s ease;
  &:hover {
    background: rgb(198, 198, 198);
  }
  .playIcon {
    height: 2.4rem;
    width: 2.4rem;
  }
`;

export const MoreInfoButton = styled(PlayButton)`
  background-color: rgba(109, 109, 110, 0.7);
  color: rgb(249, 249, 249);
  padding: 0.5rem 1.6rem 0.5rem 1.2rem;

  &:hover {
    background-color: rgba(109, 109, 110, 0.4);
  }
  .moreIcon {
    height: 2.2rem;
    width: 2.2rem;
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

// export const SearchIcon = styled.button`
//   cursor: pointer;
//   background-color: transparent;
//   border: 0;
//   outline: 0;
//   height: 32px;
//   width: 32px;
//   padding: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   img {
//     filter: brightness(0) invert(1);
//     width: 16px;
//   }
// `;

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
