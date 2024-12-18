import './index.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from '../../components/Schema';
import { useRef, useState } from 'react';
const Login = () => {
  const navigate = useNavigate();
  const [visablePassword, setVisablePassword] = useState(false);
  const passwordInput = useRef();

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

  const onSubmit = (values, actions) => {
    axios.post(`${baseUrl}/users/auth`, values).then((res) => {
      if (res.data.err) {
        alert(res.data.msg);
      } else {
        let token = res.data.data[0].user_token
        sessionStorage.setItem('token', JSON.stringify(token))
        navigate('/');
        alert(res.data.msg);
      }
    }).catch((err) => {
      console.log(err)
    })
    actions.resetForm()
  }

  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      user_password: '',
      user_email: ''
    },
    validationSchema: loginSchema,
    onSubmit
  });

  return (
    <div className='login vh-100 position-relative d-flex align-items-center justify-content-center'>
      <div className="position-absolute top-0 bottom-0 start-0 end-0 login-layer"></div>
      <div className="login-box position-relative rounded py-4 px-3 bg-white">
        <div className="login-logo text-center mb-2">
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
          <div className="position-relative px-0 d-flex align-items-center justify-content-start">
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
          <Link to={'/register'}>ليس لديك حساب ؟ الرجاء الضغط هنا لانشاء حساب</Link>
          <Link>نسيت الرقم السري ؟ متقلقش دوس هنا و هنرجعلك الرقم السري</Link>
          <button disabled={isSubmitting} type='submit' className='text-white rounded '>
            تسجيل الدخول
            <i className="fa-solid fa-arrow-left me-2"></i>
          </button>
          <button disabled={isSubmitting} type='submit' className='text-white rounded'>
            تسجيل الدخول بواسطة جوجل
            <i className="fa-brands fa-google me-2"></i>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login