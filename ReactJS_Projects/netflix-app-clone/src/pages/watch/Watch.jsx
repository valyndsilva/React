import React from "react";
import styled from "styled-components";
import { ArrowBackOutlined } from "@mui/icons-material";

export default function Watch() {
  return (
    <Container>
      <BackButton>
        <ArrowBackOutlined />
        Home
      </BackButton>
      <video className="video" autoPlay progress controls loop>
        <source src="/videos/trailer.mp4" type="video/mp4"></source>
      </video>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const BackButton = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  z-index: 2; // arrow over video
`;
