import styled from "styled-components/macro"

export const Container = styled.li``;

export const Input = styled.input`
  text-align: center;
  width: 2.5rem;
  width: 48px;
  min-width: 48px;
  height: 2.5rem;
  height: 48px;
  min-height: 48px;
  cursor: pointer;
  margin-right: 0.5rem;

  :focus + label {
    text-decoration: underline;
  }
`;

export const Label = styled.label``;
