import { Validators } from '@angular/forms';

export const profileFormFields = [
  {
    key: 'id',
    type: 'string',
    label: 'ID',
    validations: [Validators.required],
    errorMsgs: { 'required': 'You must enter a value'}
  },
  {
    key: 'firstName',
    type: 'string',
    label: 'First Name',
    validations: [Validators.required],
    errorMsgs: { 'required': 'You must enter a value'}
  },
  {
    key: 'lastName',
    type: 'string',
    label: 'Last Name',
    validations: [Validators.required],
    errorMsgs: { 'required': 'You must enter a value'}
  },
  {
    key: 'userName',
    type: 'string',
    label: 'User Name',
    validations: [Validators.required]
  },
  {
    key: 'email',
    type: 'string',
    label: 'Email',
    validations: [Validators.required, Validators.email],
    errorMsgs: { 'required': 'You must enter a value', 'email': 'Not a valid email'}
  },
  {
    key: 'password',
    type: 'string',
    label: 'Password',
    validations: [Validators.required]
  },
];
