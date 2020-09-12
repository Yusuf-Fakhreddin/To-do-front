import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function RegistrationForm() {
  const initialValues = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validate = (values) => {
    const errors = {};

    if (!values.fullname) {
      errors.fullname = 'Name is required';
    } else if (/^[a-zA-Z]+$/.test(values.fullname)) {
      errors.fullname = 'Please enter a proper full name';
    }

    return errors;
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <div className='form'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validate={validate}>
        {(formik) => {
          return (
            <Form autoComplete='off'>
              <FormikControl
                control='input'
                type='text'
                label='Full Name'
                name='fullname'
              />
              <FormikControl
                control='input'
                type='email'
                label='Email'
                name='email'
              />
              <FormikControl
                control='input'
                type='password'
                label='Password'
                name='password'
              />
              <FormikControl
                control='input'
                type='password'
                label='Confirm Password'
                name='confirmPassword'
              />
              <button type='submit' disabled={formik.dirty || !formik.isValid}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default RegistrationForm;
