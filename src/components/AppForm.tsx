import { Formik, Form, ErrorMessage, Field } from 'formik';
import { IFormData, initialValues } from '../models/IFormData';
import { schema } from '../models/Schema';

export const AppForm = () => {
  const handleSubmit = (data: IFormData) => {
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema}
      >
        <Form>
          <div>
            <label htmlFor='name'>Name</label>
            <Field type='text' id='name' name='name' />
            <ErrorMessage
              name='name'
              component='div'
              style={{ color: 'red' }}
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <Field type='email' id='email' name='email' />
            <ErrorMessage
              name='email'
              component='div'
              style={{ color: 'red' }}
            />
          </div>
          <div>
            <label htmlFor='age'>Age</label>
            <Field type='number' id='age' name='age' />
            <ErrorMessage name='age' component='div' style={{ color: 'red' }} />
          </div>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </>
  );
};
