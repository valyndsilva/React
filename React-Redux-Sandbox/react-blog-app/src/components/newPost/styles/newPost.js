import styled from 'styled-components/macro';

export const Container = styled.main`
  width: 100%;
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2``;

export const Form = styled.form`
  /* @media only screen and (min-width: 610px) {
    width: 50%;
    padding: 0.5rem 0;
  } */
`;

export const Input = styled.input`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  min-height: 48px;
  font-size: 1rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  margin-right: 0.25rem;
  margin-bottom: 1rem;
  outline: none;

  /* @media only screen and (min-width: 610px) {
    margin-left: 0.5rem;
  } */
`;

export const TextArea = styled.textarea`
  height: 100px;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  min-height: 48px;
  font-size: 1rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  margin-right: 0.25rem;
  outline: none;

  @media only screen and (min-width: 610px) {
    height: 300px;
  }
`;

export const Label = styled.label`
  margin-top: 1rem;
`;

export const Button = styled.button`
  margin-top: 1rem;
  height: 48px;
  min-width: 48px;
  border-radius: 10px;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
`;
