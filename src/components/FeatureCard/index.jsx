import './index.css'

const FeatureCard = ({featureImg,imgAlt, header, paragraph}) => {
  return (
    <div className='feature-card w-100 position-relative d-flex flex-column align-items-center justify-content-center border rounded-2 p-3 overflow-hidden'>
      <img src={featureImg} alt={imgAlt} />
      <h6 className='fw-bold'>{header}</h6>
      <p className='text-center'>{paragraph}</p>
    </div>
  )
}

export default FeatureCard