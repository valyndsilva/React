import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 142px 45px;
  z-index: 1;

  @media (max-width: 949px) {
    padding: 108px 22px;
  }
  @media (max-width: 549px) {
    padding: 57px 22px;
  }
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 3.6rem;
  line-height: 1.1;
  font-weight: 500;
  margin: auto;

  @media (max-width: 1449px) {
    font-size: 2.8rem;
  }

  @media (max-width: 549px) {
    font-size: 1.5rem;
  }
`;
export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 549px) {
    font-size: 18px;
  }
`;
