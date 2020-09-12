import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import './Form.css';

function AddItem() {
  const initialValues = {
    title: '',
    description: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, 'Please use a reasonable title')
      .required('Give it a title'),
    description: Yup.string()
      .min(10, 'Write a reasonable description so you can get back to it')
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
        onSubmit={onSubmit}>
        {(formik) => {
          return (
            <Form autoComplete='off'>
              <FormikControl
                control='input'
                type='text'
                label='Title'
                name='title'
              />
              <FormikControl
                control='textarea'
                label='Description'
                name='description'
              />
              <button type='submit' disabled={!formik.isValid}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default AddItem;
