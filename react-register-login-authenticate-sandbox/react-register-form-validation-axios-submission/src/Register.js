import React, { useRef, useState, useEffect } from 'react';
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/; // [A-z]: start with lower/uppercase letter, [A-z0-9-_]{3,23}: start with 3 to 23 characters that can include lower/uppercase letters/numbers/-/_
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; // needs atleast 1 lowercase/ 1 uppercase/ 1 number/1 special character and it can be 8 to 24 characters long
const REGISTER_URL = '/register';

export default function Register() {
  const userRef = useRef();
  const errorRef = useRef();
  return <div>Register</div>;
}
