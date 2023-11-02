import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .min(6, 'Min 6 letters required')
    .max(30, 'Max 30 letters required')
    .required('This field is required!'),
  passwordFirst: Yup.string()
    .min(7, 'Min 7 letters required')
    .max(30, 'Max 30 letters allowed')
    .matches(/^[a-zA-Z]/, 'Must contain Latin letters only')
    .matches(/\d/, 'Must contain number')
    .matches(/[a-z]/, 'Must contain lowercase letter')
    .matches(/[A-Z]/, 'Must contain uppercase letter')
    .matches(/^[a-zA-Z0-9]+$/, 'Must not contain spaces')
    .required('This field is required!'),
  passwordSecond: Yup.string()
    .oneOf([Yup.ref('passwordFirst')], 'Passwords must match')
    .required('Both fields with passwords is required!'),
});

export default validationSchema;
