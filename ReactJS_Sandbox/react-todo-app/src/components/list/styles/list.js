import styled from "styled-components/macro"

export const Container = styled.ul`
  font-size: 15px;
  color: #757575;
  margin-bottom: 24px;
  /* margin-top: 24px; */
  padding: 15px;
  width: 100%;
  list-style: none;
  padding: 0 0.25rem 0.25rem;

  .item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem 0 0.5rem 0.5rem;
    margin: 0.25rem 0;
    background-color: #eee;
  }

  .item > label {
    font-size: 0.75rem;
    flex-grow: 1;
  }

  .item:first-child {
    margin: 0;
  }
  .item svg {
    width: 48px;
    min-width: 48px;
    height: 36px;
    font-size: 1rem;
    color: steelblue;
    cursor: pointer;
  }

  .item svg:focus,
  .item svg:hover {
    color: red;
    outline: none;
  }
`;
