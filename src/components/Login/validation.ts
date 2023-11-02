/* eslint-disable import/no-extraneous-dependencies */
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .min(4, 'Min 4 letters required')
    .max(30, 'Max 30 letters allowed')
    .test('login-or-email', 'Invalid login or email', (value) => {
      const loginRegex = /^[a-zA-Z0-9]*$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return (
        typeof value === 'string' &&
        (loginRegex.test(value) || emailRegex.test(value))
      );
    })
    .required('This field is required!'),
  password: Yup.string()
    .min(7, 'Min 7 letters required')
    .max(30, 'Max 30 letters allowed')
    .required('This field is required!'),
});

export default validationSchema;
