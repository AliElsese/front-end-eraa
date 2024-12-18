import * as yup from 'yup';

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper letter, 1 lower letter, 1 numeric digit

export const registerSchema = yup.object().shape({
  user_email: yup
    .string()
    .email('محتاج تكتب بريد الكتروني بطريقة صح')
    .required('محتاجين منك بريد الكتروني'),
  user_name: yup
    .string().min(2).required('برجاء ادخال الاسم ثلاثي'),
  user_password: yup
    .string()
    .min(5).required('محتاج تكت رقم سري اكبر من 4 خانات')
    .matches(passwordRegex, { message: 'لو كتبت رقم سري فيه حروف وارقام وعلامة هيكون كله تمام' })
    .required('محتاجين منك رقم سري'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('user_password')], 'لازم تكتب الرقم السري زي ما كتبته بالظبط')
    .required('محتاجينك تاكد الرقم السري')
})

export const loginSchema = yup.object().shape({
  user_email: yup
    .string()
    .email('محتاج تكتب بريد الكتروني بطريقة صح')
    .required('محتاجين منك بريد الكتروني'),
  user_password: yup
    .string()
    .min(5).required('محتاج تكت رقم سري اكبر من 4 خانات')
    .matches(passwordRegex, { message: 'برجاء ادخال رقم سري قوي يتكون من حروف وارقام وعلامة خاصة' })
    .required('محتاجين منك رقم سري'),
})