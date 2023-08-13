import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';

interface IFormData {
  name: string;
  age: number;
  email: string;
}

const initialValues: IFormData = {
  name: '',
  age: 0,
  email: '',
};

const schema = yup.object({
  name: yup.string().min(2).max(20).required(),
  email: yup.string().email().required(),
  age: yup.number().min(18).max(70).required(),
});

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
