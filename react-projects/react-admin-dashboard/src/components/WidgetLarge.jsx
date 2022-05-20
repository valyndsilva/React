import React from "react";
import styled from "styled-components";
function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <Container>
      <Title>Latest Transactions</Title>

      <WidgetTable>
        <WidgetTRow>
          <WidgetTHead>Customer</WidgetTHead>
          <WidgetTHead>Date</WidgetTHead>
          <WidgetTHead>Amount</WidgetTHead>
          <WidgetTHead>Status</WidgetTHead>
        </WidgetTRow>
        <WidgetTRow>
          <WidgetTCell className="widgetLgUser">
            <Image src="/images/user.png" />
            <UserName>Susan Carol</UserName>
          </WidgetTCell>
          <WidgetTCell className="widgetLgDate">2 Feb 2022</WidgetTCell>
          <WidgetTCell className="widgetLgAmount">$122.00</WidgetTCell>
          <WidgetTCell>
            <Button type="Approved" />
          </WidgetTCell>
        </WidgetTRow>
        <WidgetTRow>
          <WidgetTCell className="widgetLgUser">
            <Image src="/images/user.png" />
            <UserName>Susan Carol</UserName>
          </WidgetTCell>
          <WidgetTCell className="widgetLgDate">2 Feb 2022</WidgetTCell>
          <WidgetTCell className="widgetLgAmount">$122.00</WidgetTCell>
          <WidgetTCell>
            <Button type="Declined" />
          </WidgetTCell>
        </WidgetTRow>
        <WidgetTRow>
          <WidgetTCell className="widgetLgUser">
            <Image src="/images/user.png" />
            <UserName>Susan Carol</UserName>
          </WidgetTCell>
          <WidgetTCell className="widgetLgDate">2 Feb 2022</WidgetTCell>
          <WidgetTCell className="widgetLgAmount">$122.00</WidgetTCell>
          <WidgetTCell>
            <Button type="Pending" />
          </WidgetTCell>
        </WidgetTRow>
        <WidgetTRow>
          <WidgetTCell className="widgetLgUser">
            <Image src="/images/user.png" />
            <UserName>Susan Carol</UserName>
          </WidgetTCell>
          <WidgetTCell className="widgetLgDate">2 Feb 2022</WidgetTCell>
          <WidgetTCell className="widgetLgAmount">$122.00</WidgetTCell>
          <WidgetTCell>
            <Button type="Approved" />
          </WidgetTCell>
        </WidgetTRow>
        <WidgetTRow>
          <WidgetTCell className="widgetLgUser">
            <Image src="/images/user.png" />
            <UserName>Susan Carol</UserName>
          </WidgetTCell>
          <WidgetTCell className="widgetLgDate">2 Feb 2022</WidgetTCell>
          <WidgetTCell className="widgetLgAmount">$122.00</WidgetTCell>
          <WidgetTCell>
            <Button type="Approved" />
          </WidgetTCell>
        </WidgetTRow>
      </WidgetTable>
    </Container>
  );
}

export default WidgetLarge;

const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

const WidgetTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const WidgetTHead = styled.th`
  text-align: left;
`;
const WidgetTRow = styled.tr``;

const WidgetTCell = styled.td`
  .widgetLgButton {
    padding: 5px 7px;
    border: none;
    border-radius: 10px;

    &.Approved {
      background-color: #e5faf2;
      color: #3bb077;
    }
    &.Declined {
      background-color: #fff0f1;
      color: #d95087;
    }
    &.Pending {
      background-color: #ebf1fe;
      color: #2a7ade;
    }
  }

  &.widgetLgUser {
    display: flex;
    align-items: center;
    font-weight: 600;
  }

  &.widgetLgDate,
  &.widgetLgAmount {
    font-weight: 300;
  }
`;

const Image = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`;
const UserName = styled.span``;
