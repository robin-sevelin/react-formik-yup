export interface IFormData {
  name: string;
  age: number;
  email: string;
}

export const initialValues: IFormData = {
  name: '',
  age: 0,
  email: '',
};
