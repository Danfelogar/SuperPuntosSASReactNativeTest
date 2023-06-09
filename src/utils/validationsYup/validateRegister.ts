import * as yup from 'yup';

export const validateRegister = yup.object().shape({
  username: yup
    .string()
    .required('Required field.')
    .min(2, 'Username needs at least 2 characters'),
  password: yup
    .string()
    .required(
      'Required field, please remember to use a password with both alphanumeric characters and special characters (`*`,`#`,`$`,etc...).',
    )
    .min(8, 'Password needs at least 8 characters'),
  password2: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(
      'Required field, please remember to use a password with both alphanumeric characters and special characters (`*`,`#`,`$`,etc...).',
    ),
  email: yup
    .string()
    .required('Required field.')
    .email('Enter a valid email address.'),
  nombre: yup
    .string()
    .required('Required field.')
    .min(2, 'Name needs at least 2 characters'),
  apellido: yup
    .string()
    .required('Required field.')
    .min(2, 'Last name needs at least 2 characters'),
  cedula: yup
    .number()
    .required('Required field.')
    .test(
      'len',
      'DNI needs at least 6 characters',
      val => val.toString().length >= 6,
    ),
  // image: yup.string().nullable().min(1, 'image needs at least 1 characters'),
  entidad: yup
    .string()
    .required('Required field.')
    .oneOf(['EPS'], 'You must choose between these options [EPS]'),
});
