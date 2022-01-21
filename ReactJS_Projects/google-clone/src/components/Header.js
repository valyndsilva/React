import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
function Header() {
  return (
      <Container>
        <HeaderLeft>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
        </HeaderLeft>
        <HeaderRight>
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
        </HeaderRight>
    </Container>
  );
}

export default Header;

const Container = styled.div`
    display:flex;
    justify-content: space-between;
`
const HeaderLeft = styled.div`

`
const HeaderRight = styled.div`

`