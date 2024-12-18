import './index.css'
import GroupCard from '../../components/GroupCard'
import GroupModal from '../../components/GroupModal'
import { useContext } from 'react'
import { ProjectContext } from '../../Context/store'


export default function Groups() {
    const colors = [
        '#DD6B20',
        '#00B5D8',
        '#38a169',
        '#3182ce',
        '#805ad5'
    ]

    const {modalType, setModalType} = useContext(ProjectContext);
    
    return (
        <>
            <div className="d-flex flex-column p-3 gap-3 flex-fill">
                <div className="d-flex justify-content-between align-items-center">
                    <p className='fw-bold ' style={{ fontSize: '20px', lineHeight: '1.2' }}>اهلا بك في مجموعاتك 📚</p>
                    <button className='add-group-btn d-flex justify-content-center align-items-center border-0 text-white fw-bold'
                        onClick={() => setModalType('add')}>
                        اضافة مجموعه
                    </button>
                </div>
                <div className="groups-section">
                    {
                        colors.map((color, index) => {
                            return (
                                <GroupCard key={index} CardBackGroundColor={color} cardNumber={index} />
                            )
                        })
                    }
                </div>
                {
                    modalType && <GroupModal />
                }
            </div>
        </>
    )
}