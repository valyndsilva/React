import React from 'react';
import { Form } from '../components';
import { ButtonContainer } from './button';
export function FormContainer({ requestType, setRequestType }) {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <ButtonContainer
        buttonText="users"
        requestType={requestType}
        setRequestType={setRequestType}
      />
      <ButtonContainer
        buttonText="posts"
        requestType={requestType}
        setRequestType={setRequestType}
      />
      <ButtonContainer
        buttonText="comments"
        requestType={requestType}
        setRequestType={setRequestType}
      />
    </Form>
  );
}
