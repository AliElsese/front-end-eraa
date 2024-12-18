import './index.css'
import Application from '../../assets/app.png'

const OurApplication = () => {
  return (
    <div
      className='our-applecation d-flex flex-wrap justify-content-center align-items-center gap-5 position-relative overflow-hidden'
    >
      <div className="our-applecation-img w-100 d-flex justify-content-center align-items-center">
        <img className='w-100 position-relative' src={Application} alt="تطبيث منصة الابطال" />
      </div>
      <div className="our-applecation-content w-100 d-flex flex-column gap-3">
        <div className="overflow-hidden">
          <h2 className='position-relative fw-bold text-center text-lg-end' data-aos='fade-up'>
            حمل التطبيق الخاص بينا ليصلك كل جديد يا بطل 💪
          </h2>
        </div>
        <button className='position-relative fw-bold d-flex justify-content-center align-items-center gap-3 bg-white'>
          تحميل التطبيق
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
            >
            </path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default OurApplication