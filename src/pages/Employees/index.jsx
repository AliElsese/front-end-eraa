import './index.css'
import { useContext } from 'react';
import { ProjectContext } from "../../Context/store";
import EmployeeModal from '../../components/EmployeeModal';
import EmployeesTable from '../../components/EmployeesTable';


export default function Employees() {
    const {modalType, setModalType} = useContext(ProjectContext)

    return (
        <>
            <div className="d-flex flex-column p-3 gap-3 flex-fill">
                <div className="d-flex justify-content-between align-items-center">
                    <p className='fw-bold ' style={{ fontSize: '20px', lineHeight: '1.2' }}>اهلا بك في تهيئة المحررين 📚</p>
                    <button className='add-employee-btn d-flex justify-content-center align-items-center border-0 text-white fw-bold'
                        onClick={() => setModalType('add')}
                    >
                        اضافة محرر
                    </button>
                </div>
                <EmployeesTable />
                {
                    modalType && <EmployeeModal />
                }
            </div>
        </>
    )
}