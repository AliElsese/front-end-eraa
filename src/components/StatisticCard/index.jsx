import { useNavigate } from 'react-router-dom'
import './index.css'

export default function StatisticCard({ title, i, bg, name }) {
    const navigate = useNavigate()

    return (
        <>
            <div className="statistic-card d-flex flex-column w-100 p-3 rounded-4 text-white fw-bold gap-3 overflow-hidden"
                style={{ backgroundColor: bg }}
                onClick={() => {navigate(`/${name}`)}}>
                <div className="layer position-absolute"></div>
                <div className='d-flex justify-content-start align-items-center gap-2'>
                    <i style={{ color: bg }} className="rounded-circle bg-white">
                        {i}
                    </i>
                    <p>{title}</p>
                </div>
                <div className="d-flex flex-column gap-3">
                    <p className=''>العدد</p>
                    <hr className='w-100' />
                    <div className="number">
                        100
                    </div>
                </div>
            </div>
        </>
    )
}