import styled from 'styled-components/macro';

export const Container = styled.nav`
  width: 100%;
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Form = styled.form`
  width: 80%;
  padding: 1rem 0 0 0.75rem;
`;

export const Label = styled.label`
  position: absolute;
  left: -99999px;
`;

export const Input = styled.input`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  min-height: 48px;
  font-size: 1rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  outline: none;
`;

export const List = styled.ul`
  color: #fff;
  list-style-type: none;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const Item = styled.li`
  padding: 1rem;

  a {
    padding: 1rem;
    color: #fff;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    background-color: #eee;
    color: #333;
  }

  :hover a,
  :focus a {
    cursor: pointer;
  }
`;
