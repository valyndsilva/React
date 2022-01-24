import React from "react";
import styled from "styled-components";
import FeaturedInfo from "../components/FeaturedInfo";
import { userData } from "../dummyData";
import Chart from "../components/Chart";
import WidgetSmall from "../components/WidgetSmall";
import WidgetLarge from "../components/WidgetLarge";

function Home() {
  return (
    <Container>
      <FeaturedInfo></FeaturedInfo>
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <Widgets>
        <WidgetSmall />
        <WidgetLarge />
      </Widgets>
    </Container>
  );
}

export default Home;

const Container = styled.div``;

const Widgets = styled.div`
  display: flex;
  margin: 20px;
`;
