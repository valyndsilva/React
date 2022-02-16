import styled from "styled-components/macro";

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  overflow: hidden;

  &.watchOnTV {
    .jumbotron_animation {
      width: 100%;
      height: 100%;
      max-width: 73%;
      max-height: 54%;
      position: absolute;
      top: 48%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .jumbotron_animationVideo {
      width: 100%;
      height: 100%;
    }
  }

  &.downloadAndWatch {
    .jumbotron_animationContainer {
      margin: -8% 0 -4% -15%;
      min-height: 100px;
      width: 100%;

      @media only screen and (min-width: 550px) and (max-width: 949px),
        only screen and (min-width: 400px) and (max-width: 549px),
        only screen and (min-width: 350px) and (max-width: 399px),
        only screen and (max-width: 349px) {
        margin: 0;
      }
    }
    .jumbotron_animation {
      position: absolute;
      z-index: 2;
      left: 50%;
      bottom: 8%;
      transform: translateX(-50%);
      margin: 0 auto;
      background: #000;
      display: flex;
      align-items: center;
      width: 60%;
      min-width: 15em;
      padding: 0.25em 0.65em;
      border: 2px solid rgba(255, 255, 255, 0.25);
      box-shadow: 0 0 2em 0 #000;
      border-radius: 0.75em;

      @media only screen and (min-width: 400px) and (max-width: 549px),
        only screen and (min-width: 550px) and (max-width: 949px) {
        padding: 0.35em 0.75em;
      }
    }
    .jumbotron_animationImage {
      margin: 0 1em 0 0;
      flex-grow: 0;
      flex-shrink: 0;

      img {
        height: 3em;

        @media only screen and (min-width: 550px) and (max-width: 949px) {
          height: 4em;
        }

        @media only screen and (min-width: 950px) and (max-width: 1449px) {
          height: 4.5em;
        }
      }
    }
    .jumbotron_animationText {
      margin: 0.3em 0;
      flex-grow: 1;
      flex-shrink: 1;
      text-align: left;

      :after {
        width: 2.75em;
        height: 2.75em;
        outline: 2px solid #000;
        outline-offset: -2px;
        display: block;
        background: url(images/download-icon.gif) center center no-repeat;
        background-size: 100%;
        content: "";
        flex-grow: 0;
        flex-shrink: 0;
        position: absolute;
        top: 10px;
        right: 10px;

        @media only screen and (min-width: 550px) and (max-width: 949px),
          only screen and (min-width: 950px) and (max-width: 1449px) {
          height: 3.75em;
        }
      }
    }
  }

  &.watchOnDevice {
    .jumbotron_animation {
      width: 100%;
      height: 100%;
      max-width: 63%;
      max-height: 47%;
      position: absolute;
      top: 34%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .jumbotron_animationVideo {
      width: 100%;
      height: 100%;
    }
  }

  &.kidsValueProp {
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  /* @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    padding: 70px 45px;
  } */
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;
export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  font-weight: 500;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: 550px) and (max-width: 949px) {
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (max-width: 349px) {
    font-size: 1.625rem;
  }
`;
export const SubTitle = styled.h2`
  font-size: 1.625rem;
  font-weight: normal;
  line-height: normal;
  font-weight: 400;

  @media only screen and (min-width: 550px) and (max-width: 949px) {
    font-size: 1.25rem;
  }

  @media only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (max-width: 349px) {
    font-size: 1.125rem;
  }
`;

export const AnimationContainer = styled.div`
  position: relative;
  overflow: hidden;
  /* margin: -5% -10% 0 0; */
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
`;
export const Animation = styled.div`
  /* width: 100%;
  height: 100%;
  max-width: 63%;
  max-height: 47%;
  position: absolute;
  top: 34%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

export const AnimationVideo = styled.video`
  /* width: 100%;
  height: 100%; */
`;
export const AnimationImage = styled.div`
  margin: 0 1em 0 0;
  flex-grow: 0;
  flex-shrink: 0;

  img {
    height: 3em;
    @media only screen and (min-width: 950px) and (max-width: 1449px) {
      height: 4.5em;
    }
  }
`;

export const AnimationText = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0.3em 0;

  /* &:after {
    width: 3em;
    height: 3em;
    outline: 2px solid #000;
    outline-offset: -2px;
    display: block;
    background: url(images/download-icon.gif) center center no-repeat;
    background-size: 100%;
    content: "";
    flex-grow: 0;
    flex-shrink: 0;
  } */

  .text-0 {
    font-weight: 600;
    font-size: 0.9em;

    @media only screen and (min-width: 550px) and (max-width: 949px),
      only screen and (min-width: 950px) and (max-width: 1449px),
      only screen and (min-width: 1450px) {
      font-size: 1em;
    }
  }

  .text-1 {
    font-weight: 400;
    font-size: 0.75em;
    color: #0071eb;

    @media only screen and (min-width: 550px) and (max-width: 949px),
      only screen and (min-width: 950px) and (max-width: 1449px),
      only screen and (min-width: 1450px) {
      font-size: 0.91em;
    }
  }
`;
