import styled from 'styled-components/macro';

export const Container = styled.article`
  /* width: 100%;
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
  background-color: #fff; */
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid lightgray;

  a {
    text-decoration: none;
  }
  a,
  a:visited {
    color: #000;
  }
  :first-child {
    margin-top: 0;
  }

  :last-child {
    border-bottom: none;
  }

  .postDate {
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }

  .postBody {
    margin: 1rem 0;
  }
`;

export const Title = styled.h2``;

export const Text = styled.p``;
