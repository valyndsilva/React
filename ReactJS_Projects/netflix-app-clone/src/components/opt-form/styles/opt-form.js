import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  max-width: 950px;
  padding-top: 0.85rem;
  margin: 0 auto;

  @media (max-width: 949px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 48px;
  box-sizing: border-box;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 48px;
  min-height: 40px;
  background: #e50914;
  color: white;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  border-left: 1px solid #333;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 949px) {
    height: 40px;
    font-size: 16px;
    margin-top: 20px;
  }
`;
export const Text = styled.p`
  font-size: 1.1rem;
  color: white;
  text-align: center;
  margin-bottom: 15px;
  padding: 0 10%;

  @media (max-width: 600px) {
    font-size: 23px;
    line-height: 22px;
  }
`;
