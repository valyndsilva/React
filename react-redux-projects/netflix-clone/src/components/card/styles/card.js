import styled from "styled-components/macro";

export const Title = styled.p`
  font-size: 1.4vw;
  color: #e5e5e5;
  font-weight: bold;
  margin: 0 4% 0.5em 4.2%;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 30px;
  z-index: 899;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "row" ? "row" : "column"};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -160px;
    }
  }
`;

export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const Row = styled.div``;

export const Grid = styled.div`
  margin-top: 10px;
  position: relative;

  .sliderArrow {
    width: 50px;
    height: 100%;
    background-color: rgba(22, 22, 22, 0.5);
    position: absolute;
    z-index: 99;
    color: white;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;

    &.left {
      left: 0;
      visibility: hidden;
    }
    &.right {
      visibility: hidden;
      right: 0;
    }
  }

  &:hover {
    .left,
    .right {
      visibility: visible;
    }
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;

  .genre {
    font-size: 14px;
    color: lightgray;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  width: 198px; // split half width 99px
  height: 118px;

  margin-right: 5px;
  overflow: hidden;
  background-color: #181818;

  &:hover {
    width: 296px; // split half width 148px
    height: 312px;

    position: absolute;
    top: -180px;
    -webkit-box-shadow: 0 2px 15px 0px rgb(255, 255, 255, 0.07);
    box-shadow: 0 2px 15px 0px rgb(255, 255, 255, 0.07);
    border-radius: 5px;

    img {
      z-index: 1;
      height: 140px;
    }
    .video {
      background-color: transparent;
      z-index: 2;
      width: 100%;
      height: 140px;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  /* transition: transform 450ms;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; */
`;

export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) =>
    fontWeight === "bold" ? "bold" : "normal"};
  margin: 0;
  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: #181818;
  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;
    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }

  .closeIcon {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? "#f44336" : "#2f9600")};
  border-radius: 15px;
  width: 28px;
  line-height: 28px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;
export const Controls = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;

  .MuiSvgIcon-root {
    border: 2px solid #919191;
    background-color: #232323;
    color: white;
    padding: 5px;
    border-radius: 50%;
    /* margin-right: 8px; */
    height: 2.2rem;
    width: 2.2rem;

    &:hover {
      border: 2px solid white;
      background-color: #303030;
    }
  }

  .playIcon {
    background-color: white;
    color: #000;
    border-color: white;

    &:hover {
      background-color: #e6e6e6;
    }
  }

  .addBtn {
    :disabled {
      .addIcon.MuiSvgIcon-root {
        background-color: white;
        color: #000;
        border-color: white;
      }
    }
  }

  .media {
    color: white;
    padding: 0;
  }
`;
export const TopControls = styled.div`
  margin-bottom: 10px;
`;
export const LeftControls = styled.div``;
export const RightControls = styled.div``;
export const InfoTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  color: gray;

  .percentValue {
    color: #45d369;
    font-weight: 600;
    padding: 1px 3px 1px 0;
  }
  .maturityValue {
    background-color: #dc080a;
    color: white;
    font-weight: normal;
    border: 1px solid white;
    border-radius: 50%;
    padding: 5px;
    width: 1.8em;
    height: 1.8em;
    vertical-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 5px;
  }
  .lengthValue {
    color: white;
    font-weight: normal;
    padding: 1px 3px;
    margin-left: 5px;
  }
`;

export const InnerSlider = styled.div`
  margin-left: 50px;
  display: flex;
  width: max-content;
  transform: translateX(0px);
  transition: all 1s ease;
`;
