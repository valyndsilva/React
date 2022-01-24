import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Publish } from "@mui/icons-material";
import Chart from "../components/Chart";
import { productData } from "../dummyData";
function Product() {
  return (
    <Container>
      <TitleContent>
        <Title>Edit Product</Title>
        <Link to="/newProduct">
          <Button>Create</Button>
        </Link>
      </TitleContent>
      <ProductContentTop>
        <ProductLeft>
          <Chart data={productData} title="Sales Performance" dataKey="Sales" />
        </ProductLeft>
        <ProductRight>
          <ProductInfoTop>
            <ProductImg
              src="https://images.unsplash.com/photo-1600375104627-c94c416deefa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />
            <ProductName>Apple Airpods</ProductName>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>id:</ProductInfoKey>
              <ProductInfoValue>123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>sales:</ProductInfoKey>
              <ProductInfoValue>5123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>active:</ProductInfoKey>
              <ProductInfoValue>yes</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>in stock:</ProductInfoKey>
              <ProductInfoValue>no</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductRight>
      </ProductContentTop>
      <ProductContentBottom>
        <ProductUpdateForm>
          <ProductUpdateFormLeft>
            <UpdateItem>
              <UpdateLabel>Product Name</UpdateLabel>
              <UpdateInput type="text" placeholder="Apple Airpods" />
            </UpdateItem>
            <UpdateItem>
              <UpdateLabel>In Stock</UpdateLabel>
              <UpdateSelect name="inStock" id="idStock">
                <UpdateOption value="yes">Yes</UpdateOption>
                <UpdateOption value="no">No</UpdateOption>
              </UpdateSelect>
            </UpdateItem>
            <UpdateItem>
              <UpdateLabel>Active</UpdateLabel>
              <UpdateSelect name="active" id="idActive">
                <UpdateOption value="yes">Yes</UpdateOption>
                <UpdateOption value="no">No</UpdateOption>
              </UpdateSelect>
            </UpdateItem>
          </ProductUpdateFormLeft>
          <ProductUpdateFormRight>
            <UpdateImg>
              <UpdateProductImg
                src="https://images.unsplash.com/photo-1600375104627-c94c416deefa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />
              <UpdateProductImgLabel htmlFor="file">
                <Publish className="productUpdateIcon" />
              </UpdateProductImgLabel>
              <UpdateImgInput type="file" id="file" />
            </UpdateImg>
            <UpdateProductButton>Update</UpdateProductButton>
          </ProductUpdateFormRight>
        </ProductUpdateForm>
      </ProductContentBottom>
    </Container>
  );
}

export default Product;
const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1``;
const Button = styled.button`
  width: 80px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: teal;
  font-size: 16px;
  cursor: pointer;
`;

const ProductContentTop = styled.div`
  display: flex;
  margin-top: 20px;
`;
const ProductLeft = styled.div`
  flex: 1;
`;

const ProductRight = styled.div`
  flex: 1;
  margin: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductInfoTop = styled.div`
  display: flex;
  align-items: center; ;
`;

const ProductImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;
`;

const ProductName = styled.span`
  font-weight: 600;
`;

const ProductInfoBottom = styled.div`
  margin-top: 10px;
`;
const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
const ProductInfoKey = styled.span``;
const ProductInfoValue = styled.span`
  font-weight: 300;
`;
const ProductContentBottom = styled.div`
  margin: 20px;
  padding: 20px;

  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
`;
const ProductUpdateFormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const UpdateLabel = styled.label`
  margin-bottom: 10px;
  color: gray;
`;
const UpdateInput = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
  ${
    "" /* width: 250px;
  height: 30px; */
  }
`;

const UpdateSelect = styled.select`
  margin-bottom: 10px;
`;
const UpdateOption = styled.option``;

const ProductUpdateFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const UpdateProductButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 600;
`;
const UpdateImg = styled.div`
  display: flex;
  align-items: center;
`;
const UpdateProductImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
const UpdateProductImgLabel = styled.label`
  .productUpdateIcon {
    cursor: pointer;
  }
`;
const UpdateImgInput = styled.input`
  display: none;
`;
