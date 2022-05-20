import React from "react";
import styled from "styled-components";

function NewProduct() {
  return (
    <Container>
      <Title>New Product</Title>
      <NewProductForm>
        <NewProductItem>
          <Label>Image</Label>
          <Input type="file" id="file" />
        </NewProductItem>
        <NewProductItem>
          <Label>Product Name</Label>
          <Input type="text" placeholder="Apple Airpods" />
        </NewProductItem>
        <NewProductItem>
          <Label>Stock</Label>
          <Input type="text" placeholder="123" />
        </NewProductItem>
        <NewProductItem>
          <Label>Active</Label>
          <ProductSelect name="active" id="active">
            <ProductOption value="yes">Yes</ProductOption>
            <ProductOption value="no">No</ProductOption>
          </ProductSelect>
        </NewProductItem>
        <NewProductButton>Create</NewProductButton>
      </NewProductForm>
    </Container>
  );
}

export default NewProduct;

const Container = styled.div`
  flex: 4;
`;

const Title = styled.h1``;
const NewProductForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
`;
const NewProductItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 20px;

  label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
  }
  input {
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }
`;

const Label = styled.label``;
const Input = styled.input``;

const ProductSelect = styled.select`
  padding: 10px;
  height: 40px;
  border-radius: 5px;
`;
const ProductOption = styled.option``;

const NewProductButton = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 600px;
`;
