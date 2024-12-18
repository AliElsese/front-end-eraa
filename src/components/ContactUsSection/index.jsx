import { useFormik } from 'formik';
import './index.css'
import { contactSchema } from '../Schema';

const ContactUsSection = () => {
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
      user_message: '',
    },
    validationSchema: contactSchema,
    onSubmit
  });

  return (

    <div className='contact-us-section position-relative p-3'>
      <div className="position-absolute top-0 bottom-0 start-0 end-0 contact-us-section-layer"></div>
      <div className="content d-flex flex-column justify-content-center align-items-center gap-4 position-relative">
        <div className="overflow-hidden pb-3">
          <h2 className='fw-bold text-white position-relative' data-aos='fade-up'>تواصل معنا</h2>
        </div>
        <div className="forms w-100 d-flex flex-column gap-2 p-3 bg-white rounded-2">
          <form
            onSubmit={handleSubmit}
            className='d-flex flex-column gap-2'
          >
            <input
              type="email"
              name='user_email'
              placeholder='البريد الالكتروني'
              value={values.user_email}
              onChange={handleChange}
              onBlur={handleBlur}
              className='rounded px-3 py-2'
            />
            {
              errors.user_email && touched.user_email &&
              <p className='error text-danger'>{errors.user_email}</p>
            }
            <input
              type="text"
              name='user_name'
              placeholder='الاسم'
              value={values.user_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className='rounded px-3 py-2'
            />
            {
              errors.user_name && touched.user_name &&
              <p className='error text-danger'>{errors.user_name}</p>
            }
            <textarea
              name="user_message"
              placeholder='الرسالة'
              value={values.user_message}
              onChange={handleChange}
              onBlur={handleBlur}
              className='rounded px-3 py-2'
              rows="4"
            />
            {
              errors.user_message && touched.user_message &&
              <p className='error text-danger'>{errors.user_message}</p>
            }
            <button disabled={isSubmitting} type='submit' className='text-white d-flex justify-content-center align-items-center gap-3 rounded'>
              ارسال الرسالة
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                >
                </path>
              </svg>
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default ContactUsSection