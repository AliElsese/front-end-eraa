import { useNavigate } from 'react-router-dom'
import './index.css'

export default function ClassCard({ CardBackGroundColor, cardNumber, ClassCardName }) {
    const navigate = useNavigate()

    return (
        <>
            <div className="class-card d-flex flex-column w-100 p-3 rounded-4 text-white fw-bold gap-3 overflow-hidden"
                style={{ backgroundColor: `${CardBackGroundColor}` }}
                onClick={() => {navigate('/groups')}}>
                <div className="layer position-absolute"></div>
                <div className="d-flex justify-content-start align-items-center gap-3">
                    <div className="group-number d-flex justify-content-center align-items-center rounded-circle"
                        style={{ color: `${CardBackGroundColor}` }}>
                        {cardNumber + 1}
                    </div>
                    <div className="group-days">
                        {ClassCardName}
                    </div>
                </div>
                <div className="d-flex flex-column gap-3">
                    <p className=''>عدد المجاميع</p>
                    <hr className='w-100' />
                    <div className="number">
                        100
                    </div>
                </div>
            </div>
        </>
    )
}