import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/${src}.jpg` : "../images/home-bg.jpeg"}),
    top left / cover no-repeat;
`;

export const Gradient = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: 1;
  width: 100%;
  height: 78%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );

  @media (max-width: 949px) {
    height: 80%;
  }

  @media (max-width: 549px) {
    height: 56%;
  }
`;
export const Frame = styled.div``;

export const Container = styled.div`
  z-index: 2;
  display: flex;
  margin: 0 3.1rem;
  height: 54px;
  padding: 15px 0;
  margin-top: 20px;
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
  height: 33px;
  width: 125px;
  margin-right: 40px;

  @media (max-width: 949px) {
    height: 40px;
    width: 100px;
  }
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
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
