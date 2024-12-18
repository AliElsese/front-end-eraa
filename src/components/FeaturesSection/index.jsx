import FeatureCard from '../FeatureCard'
import feature1 from '../../assets/feature-1.png'
import feature2 from '../../assets/feature-2.png'
import feature3 from '../../assets/feature-3.png'
import './index.css'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css'

const FeaturesSection = () => {

  return (
    <div className='features-section position-relative d-flex flex-column text-white p-md-4 p-3'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', zIndex: '1' }}
      >
        <path
          fill="#4299e1"
          fillOpacity="1"
          d="M0,128L48,144C96,160,192,192,288,218.7C384,245,480,267,576,229.3C672,192,768,96,864,58.7C960,21,1056,43,1152,64C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        >
        </path>
      </svg>
      <h2
        className='fw-bold border-top border-bottom mx-auto overflow-hidden'
        style={{ position: 'relative', zIndex: '2' }}
      >
        <span
          className='d-block'
          data-aos="fade-up"
        >
          ازاي هنجهزك يا بطل
        </span>
      </h2>
      <div className="features-cards d-flex flex-wrap justify-content-center">
        <FeatureCard
          featureImg={feature1}
          imgAlt='تدريب دراسي'
          header='هتدرب'
          paragraph='امتحانات الكترونية تقدر تعدها لحد ما تتقنها'
        />
        <FeatureCard
          featureImg={feature2}
          imgAlt='تجهيز دراسي'
          header='هنجهزك'
          paragraph='مش محتاج تسأل هذاكر ايه النهاردة..إحنا هنقولك'
        />
        <FeatureCard
          featureImg={feature3}
          imgAlt='تنافس دراسي'
          header='هتنافس'
          paragraph='نظام نقط علي كل حاجة بتذاكرها وهدايا للطلبة النشطين'
        />
        <FeatureCard
          featureImg={feature3}
          imgAlt='تشارك دراسي'
          header='هتشارك'
          paragraph='ممجموعات للمناقشة علي اسأل وتشارك أفكارك مع زمايلك'
        />
      </div>
      <div className="features-content d-flex align-items-center gap-2 mx-auto">
        <span>❣️</span>
        <h4 className='border-bottom fw-bold text-center'>دا غير اننا هنوفرلك اكفأ المدرسين واهتمام طول اليوم بيك يبطل  علشان انت تهمنا</h4>
        <span>❣️</span>
      </div>
      <Link className='w-100 mx-auto fw-bold border text-white d-flex align-items-center justify-content-center'>
        اشترك معانا وخليك واحد من الابطال
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
      </Link>
    </div>
  )
}

export default FeaturesSection