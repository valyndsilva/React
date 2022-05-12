import styled from 'styled-components/macro';

export const Container = styled.header`
  width: 100%;
  background-color: #66d8f5;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 2rem;

    @media only screen and (min-width: 992px) {
      font-size: 3rem;
    }
  }
`;
export const Title = styled.h1`
  font-size: 1.5rem;

  @media only screen and (min-width: 610px) {
    font-size: 2rem;
  }
`;
