import styled from 'styled-components/macro';
export const Container = styled.form`
  /* width: 100%; */
  display: flex;
  justify-content: flex-start;
  margin: 0.25rem 0 0;
  padding: 0 0.5rem 0.25rem;
  border-bottom: 1px solid #eee;
`;
export const Label = styled.label`
  position: absolute;
  left: -99999px;
`;
export const Input = styled.input`
  flex-grow: 1;
  max-width: 100%;
  min-height: 48px;
  font-size: 1rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  outline: none;
`;
