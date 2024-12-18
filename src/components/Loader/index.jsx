import './index.css'

const Loader = ({ width, height }) => {
  return (
    <span class="loader" style={{ width: width, height: height }}>
      <div className="beforee" style={{ width: width, height: height }} ></div>
      <div className="afterr" style={{ width: width, height: height }} ></div>
    </span>
  )
}

export default Loader