import './index.css'
import ClassCard from '../../components/ClassCard'

export default function Classes() {
    const cardProperties = [
        {
            color: '#DD6B20',
            name: 'الصف الاول الثانوي'
        },
        {
            color: '#00B5D8',
            name: 'الصف الثاني الثانوي'
        },
        {
            color: '#38a169',
            name: 'الصف الثالث الثانوي'
        }
    ]
    
    return (
        <>
            <div className="d-flex flex-column p-3 gap-3 flex-fill">
                <div className="d-flex justify-content-between align-items-center">
                    <p className='fw-bold ' style={{ fontSize: '20px', lineHeight: '1.2' }}>اهلا بك في فصولك 📚</p>
                </div>
                <div className="classes-section">
                    {
                        cardProperties.map((cardPropertie, index) => {
                            return (
                                <ClassCard key={index} CardBackGroundColor={cardPropertie.color} ClassCardName={cardPropertie.name} cardNumber={index} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}