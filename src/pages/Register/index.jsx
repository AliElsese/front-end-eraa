import './index.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerSchema } from '../../components/Schema';
import { useRef, useState } from 'react';
const Register = () => {
  const navigate = useNavigate();
  const [visablePassword, setVisablePassword] = useState(false);
  const [confirmVisablePassword, setConfirmVisablePassword] = useState(false);
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();

  const showPassword = () => {
    if (!visablePassword) {
      passwordInput.current.type = 'text'
      setVisablePassword(!visablePassword)
    }
    else {
      passwordInput.current.type = 'password'
      setVisablePassword(!visablePassword)
    }
  }

  const showConfirmPassword = () => {
    if (!confirmVisablePassword) {
      confirmPasswordInput.current.type = 'text'
      setConfirmVisablePassword(!confirmVisablePassword)
    }
    else {
      confirmPasswordInput.current.type = 'password'
      setConfirmVisablePassword(!confirmVisablePassword)
    }
  }

  const onSubmit = (values, actions) => {

    axios.post(`${baseUrl}/users/store`, values).then((res) => {
      if (res.data.err) {
        alert('This email is already taken');
      } else {
        alert('Register Done');
        navigate('/register');
        actions.resetForm();
      }
    }).catch((err) => {
      alert(err)
    })
  }

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      user_email: '',
      user_name: '',
      user_password: '',
      confirm_password: ''
    },
    validationSchema: registerSchema,
    onSubmit
  });


  return (
    <div className='register vh-100 position-relative d-flex align-items-center justify-content-center'>
      <div className="position-absolute top-0 bottom-0 start-0 end-0 register-layer"></div>
      <div className="register-box position-relative rounded py-4 px-3 bg-white">
        <div className="register-logo text-center mb-2">
          <h1>Ziad Eid</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className='row flex-column g-3'
        >
          <input
            type="email"
            name='user_email'
            placeholder='البريد الالكتروني'
            value={values.user_email}
            onChange={handleChange}
            onBlur={handleBlur}
            className='rounded pe-3'
          />
          {
            errors.user_email && touched.user_email &&
            <p className='error text-danger'>{errors.user_email}</p>
          }
          <input
            type="text"
            name='user_name'
            placeholder='الاسم ثلاثي'
            value={values.user_name}
            onChange={handleChange}
            onBlur={handleBlur}
            className='rounded pe-3'
          />
          {
            errors.user_name && touched.user_name &&
            <p className='error text-danger'>{errors.user_name}</p>
          }
          <div className='position-relative px-0 d-flex align-items-center justify-content-start'>
            <input
              type="password"
              name='user_password'
              placeholder='الرقم السري'
              value={values.user_password}
              onChange={handleChange}
              onBlur={handleBlur}
              className='rounded pe-3 rounded-start-0'
              ref={passwordInput}
            />
            {
              visablePassword ?
                <i
                  onClick={showPassword}
                  className="fa-solid fa-eye eyed position-absolute top-0 bottom-0 start-0 rounded-start border-end-0 d-flex align-items-center justify-content-center"
                ></i>
                :
                <i
                  onClick={showPassword}
                  className="fa-solid fa-eye-slash eyed position-absolute top-0 bottom-0 start-0 rounded-start border-end-0 d-flex align-items-center justify-content-center"
                ></i>
            }
          </div>
          {
            errors.user_password && touched.user_password &&
            <p className='error text-danger'>{errors.user_password}</p>
          }
          <div className='position-relative px-0 d-flex align-items-center justify-content-start'>
            <input
              type="password"
              name='confirm_password'
              placeholder=' تاكيد الرقم السري'
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              className='rounded pe-3 rounded-start-0'
              ref={confirmPasswordInput}
            />
            {
              confirmVisablePassword ?
                <i
                  onClick={showConfirmPassword}
                  className="fa-solid fa-eye eyed position-absolute top-0 bottom-0 start-0 rounded-start border-end-0 d-flex align-items-center justify-content-center"
                ></i>
                :
                <i
                  onClick={showConfirmPassword}
                  className="fa-solid fa-eye-slash eyed position-absolute top-0 bottom-0 start-0 rounded-start border-end-0 d-flex align-items-center justify-content-center"
                ></i>
            }
          </div>
          {
            errors.confirm_password && touched.confirm_password &&
            <p className='error text-danger'>{errors.confirm_password}</p>
          }
          <Link to={'/login'}>لديك حساب بالفعل ؟ الرجاء الضغط هنا لتسجيل الدخول</Link>
          <button disabled={isSubmitting} type='submit' className='text-white rounded '>
            انشاء حساب
            <i className="fa-solid fa-arrow-left me-2"></i>
          </button>
          <button disabled={isSubmitting} type='submit' className='text-white rounded'>
            انشاء حساب بواسطة جوجل
            <i className="fa-brands fa-google me-2"></i>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register