import styled from 'styled-components/macro';

export const Container = styled.main`
  width: 100%;
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
  background-color: #fff;
`;
export const Post = styled.article``;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  height: 48px;
  min-width: 48px;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: red;
  color: #fff;
  cursor: pointer;
`;
