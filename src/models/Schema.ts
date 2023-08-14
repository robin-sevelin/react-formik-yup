import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().min(2).max(20).required(),
  email: yup.string().email().required(),
  age: yup.number().min(18).max(70).required(),
});
