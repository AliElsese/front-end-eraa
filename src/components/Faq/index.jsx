import './index.css'

const Faq = ({id, isActive, setIsActive, question, answer}) => {
  const expandAnswer = () => {
    setIsActive(id)
    if (isActive == id) {
      setIsActive(0)
    }
  }
  
  return (
    <div className='faq'>
      <div
        onClick={expandAnswer}
        className="faq-question d-flex align-items-center w-100 px-3 py-2"
      >
        <p className='p-2'>{question}</p>
        <svg
          className={isActive == id ? 'rotated-icon' : ''}
          viewBox="0 0 24 24"
        >
          <path
            d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
          >
          </path>
        </svg>
      </div>
      {
        isActive == id &&
        <div className="faq-answer p-3 pt-2">{answer}</div>
      }
    </div>
  )
}

export default Faq