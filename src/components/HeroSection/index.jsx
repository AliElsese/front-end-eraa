import './index.css'
import CoursesAnimation from '../../components/Lotties/courseLottie.json'
import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'
const HeroSection = () => {
  const navegate = useNavigate();
  return (
    <div className='hero-section position-relative d-flex flex-wrap-reverse justify-content-center align-items-center'>
      <div className="hero-content d-flex flex-column justify-content-center w-100">
        <div className="overflow-hidden">
          <h1 className='fw-bold' data-aos="fade-up">منصة الابطال</h1>
        </div>
        <hr />
        <div className="overflow-hidden">
          <span className='fw-bold d-block' data-aos="fade-up">معانا هتكون بطل جديد</span>
        </div>
        <hr />
        <p className='p-3 rounded'>
          منصة "الابطال" هي بوابتك لتحقيق التفوق الدراسي بفضل كورساتنا المصممة لطلاب الثانوية. معانا هتتعلم وتنجح بأسلوب سهل وفعال،وتكون دايمّا بطل دراستك!
        </p>
        <button className='text-white rounded px-3' onClick={() => navegate('/login')}>
          سجل معانا وابدأ رحلتك
          <svg className='me-2' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4  4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            >
            </path>
          </svg>
        </button>
      </div>
      <div className="hero-video w-100">
        <Lottie
          style={{
            width: "100%",
          }}
          animationData={CoursesAnimation}
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ position: 'absolute', bottom: '0px', width: '100%', zIndex: '-1' }}
      >
        <path
          fill="#4299e1"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
        </path>
      </svg>
    </div>
  )
}

export default HeroSection