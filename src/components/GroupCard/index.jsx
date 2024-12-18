import { useNavigate } from 'react-router-dom'
import './index.css'
import { useContext } from 'react'
import { ProjectContext } from '../../Context/store'

export default function GroupCard({ CardBackGroundColor, cardNumber }) {
    const navigate = useNavigate()

    const { modalType, setModalType } = useContext(ProjectContext)

    return (
        <>
            <div className="group-card d-flex flex-column w-100 p-3 rounded-4 text-white fw-bold gap-3 overflow-hidden"
                style={{ backgroundColor: `${CardBackGroundColor}` }}
                onClick={() => {navigate('/groupdetails')}}
                >
                <div className="layer position-absolute"></div>
                <div className="group-actions pt-2 d-flex flex-column align-items-center gap-2 position-absolute"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className='rounded-2 px-2 py-1' style={{border: 'none', color: '#00B5D8'}}
                        onClick={() => setModalType('update')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M7.243 17.997H3v-4.243L14.435 2.319a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415zm-4.243 2h18v2H3z" />
                        </svg>
                    </button>
                    <button className='rounded-2 px-2 py-1' style={{border: 'none', color: '#e53e3e'}}
                        onClick={() => handleDelete(row.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
                        </svg>
                    </button>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-3">
                    <div className="group-number d-flex justify-content-center align-items-center rounded-circle"
                        style={{ color: `${CardBackGroundColor}` }}>
                        {cardNumber + 1}
                    </div>
                    <div className="group-days">
                        السبت - الاثنين - الاربعاء ( 10 صباحا )
                    </div>
                </div>
                <div className="d-flex flex-column gap-3">
                    <p className=''>عدد الطلاب</p>
                    <hr className='w-100' />
                    <div className="number">
                        100
                    </div>
                </div>
            </div>
        </>
    )
}