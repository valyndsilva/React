import React from "react";
import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
function FeaturedInfo() {
  return (
    <Container>
      <Item>
        <Title>Revenue</Title>
        <MoneyContainer>
          <Money>$2,415</Money>
          <MoneyRate>
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </MoneyRate>
        </MoneyContainer>
        <SubTitle>Compared to last month</SubTitle>
      </Item>
      <Item>
        <Title>Sales</Title>
        <MoneyContainer>
          <Money>$4,415</Money>
          <MoneyRate>
            -1.5 <ArrowDownward className="featuredIcon negative" />
          </MoneyRate>
        </MoneyContainer>
        <SubTitle>Compared to last month</SubTitle>
      </Item>
      <Item>
        <Title>Cost</Title>
        <MoneyContainer>
          <Money>$2,225</Money>
          <MoneyRate>
            +2.4
            <ArrowUpward className="featuredIcon" />
          </MoneyRate>
        </MoneyContainer>
        <SubTitle>Compared to last month</SubTitle>
      </Item>
    </Container>
  );
}

export default FeaturedInfo;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Item = styled.div`
  flex: 1;
  margin: 0 20px;
  padding: 30px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const Title = styled.span`
  font-size: 20px;
`;
const MoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;
const Money = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
const MoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;

  .featuredIcon {
    font-size: 14px;
    margin-left: 5px;
    fill: green;
  }

  .featuredIcon.negative {
    fill: red;
  }
`;
const SubTitle = styled.span`
  color: gray;
  font-size: 15px;
`;
