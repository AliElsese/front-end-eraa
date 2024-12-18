import './index.css'
import faqImg from '../../assets/faq.png'
import Faq from '../Faq'
import { useState } from 'react';

const FaqSection = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div
      className='faq-section position-relative d-flex flex-wrap-reverse justify-content-center align-items-center gap-5 p-3'
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ position: 'absolute', top: '-1px', width: '100%', zIndex: '-1' }}
      >
        <path
          fill="#4299e1"
          fillOpacity="1"
          d="M0,128L48,144C96,160,192,192,288,218.7C384,245,480,267,576,229.3C672,192,768,96,864,58.7C960,21,1056,43,1152,64C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        >
        </path>
      </svg>
      <div className="faq-content w-100">
        <hr />
        <Faq
          id={1}
          isActive={isActive}
          setIsActive={setIsActive}
          question={'من نحن؟'}
          answer={'نحن منصة اللابطال , منصة مختصة في تجهيز الطالب فالمراحل الثانوية للتفوق عن طريق توفير له كورسات وجداول للمذاكرة وامتحانات'}
        />
        <hr />
        <Faq
          id={2}
          isActive={isActive}
          setIsActive={setIsActive}
          question={'ليه تختارنا احنا؟'}
          answer={'لان احنا بنوفرلك اكفأ المدرسين مع متابعة ليك عشان نجهزك يبطل'}
        />
        <hr />
        <Faq
          id={3}
          isActive={isActive}
          setIsActive={setIsActive}
          question={'ايه هو سعر الاشتراك في المنصة؟'}
          answer={'الاشتراك فالمنصة عبارة عن شراء كورسات للدروس الي عاوزها فالمادة الي عاوزها'}
        />
        <hr />
      </div>
      <div className="faq-img w-100">
        <img
          className='w-100'
          src={faqImg}
          alt="FAQ"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-once="true"
        />
      </div>
    </div>
  )
}

export default FaqSection