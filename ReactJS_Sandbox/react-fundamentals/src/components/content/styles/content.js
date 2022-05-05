import styled from "styled-components/macro";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
`;

export const Text = styled.p`
  font-size: 15px;
  color: #757575;
  margin-bottom: 40px;
  margin-top: 24px;
`;

export const Button = styled.button`
  font-size: 15px;
  color: #757575;
  margin-bottom: 24px;
  margin-top: 24px;
  padding: 15px;
`;
