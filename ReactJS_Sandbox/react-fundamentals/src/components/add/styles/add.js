import styled from "styled-components/macro"

export const Container= styled.form`
width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 0.5rem 0 0;
  padding: 0 0.5rem 0.25rem;
  border-bottom: 1px solid #eee;
`;

export const Label= styled.label`
  position: absolute;
  left: -99999px;
`;

export const Input= styled.input`
flex-grow: 1;
  max-width: calc(100% - 50px);
  min-height: 48px;
  font-size: 1rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  margin-right: 0.25rem;
  outline: none;
`;

export const Button= styled.button`
height: 48px;
  min-width: 48px;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: aliceblue;
  color: mediumblue;
  cursor: pointer;

  :focus, 
  :hover {
  color: white;
  background-color: limegreen;
  outline: none;
}
`
