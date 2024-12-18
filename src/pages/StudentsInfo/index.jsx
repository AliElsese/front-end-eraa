import './index.css'
import { useContext } from 'react';
import { ProjectContext } from "../../Context/store";
import StudentModal from '../../components/StudentModal';
import StudentsTable from '../../components/StudentsTable';


export default function StudentsInfo() {
    const {modalType, setModalType} = useContext(ProjectContext)

    return (
        <>
            <div className="d-flex flex-column p-3 gap-3 flex-fill">
                <div className="d-flex justify-content-between align-items-center">
                    <p className='fw-bold ' style={{ fontSize: '20px', lineHeight: '1.2' }}>اهلا بك في بيانات طلابك 📚</p>
                    <button className='add-student-btn d-flex justify-content-center align-items-center border-0 text-white fw-bold'
                        onClick={() => setModalType('add')}
                    >
                        اضافة طالب
                    </button>
                </div>
                <StudentsTable />
                {
                    modalType && <StudentModal />
                }
            </div>
        </>
    )
}