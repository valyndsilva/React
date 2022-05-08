import React from 'react';
import { Button } from '../components';

export function ButtonContainer({ buttonText, requestType, setRequestType }) {
  // if buttonText is equal to requestType then add a class name selected else don't add a class. This helps know which button is selected.
  return (
    <Button
      className={buttonText === requestType ? 'selected' : null}
      type="button"
      onClick={() => setRequestType(buttonText)}
    >
      {buttonText}
    </Button>
  );
}
