import { useContext } from 'react';
import './index.css';
import { ProjectContext } from '../../Context/store';

export default function GroupModal() {
    const {modalType, setModalType} = useContext(ProjectContext)
    
    return (
        <>
            <div className="modal-student d-flex justify-content-center align-items-center" onClick={() => setModalType(false)}>
                <div className="modal-content rounded-3 p-5" onClick={(e) => e.stopPropagation()}>
                    <div className="close-model-btn position-absolute" onClick={() => setModalType(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m7 7l10 10M7 17L17 7" />
                        </svg>
                    </div>
                    {
                        modalType == 'add' ? 
                        <div className="d-flex flex-column gap-5">
                            <div className="d-flex justify-content-center align-items-center">
                                <p className='modal-title fw-bold'>اضافة مجموعه جديده</p>
                            </div>
                            <form action="" className='d-flex flex-column overflow-hidden gap-3'>
                                <div className="student-input">
                                    <label htmlFor="" className='fw-bold'>اسم الطالب</label>
                                    <input className='w-100' type="text" name='studentName' />
                                </div>
                                <div className="student-input">
                                    <label htmlFor="" className='fw-bold'>رقم الهاتف</label>
                                    <input className='w-100' type="text" name='studentName' />
                                </div>
                                <div className="student-input">
                                    <label htmlFor="" className='fw-bold'>رقم هاتف ولي الامر</label>
                                    <input className='w-100' type="text" name='studentName' />
                                </div>
                                <div className="submit-button mt-3">
                                    <button type="submit" className='d-flex justify-content-center align-items-center fw-bold w-100 rounded-pill'>
                                        اضافة
                                    </button>
                                </div>
                            </form>
                        </div>
                        :
                        <div className="d-flex flex-column gap-5">
                            <div className="d-flex justify-content-center align-items-center">
                                <p className='modal-title fw-bold'>تعديل المجموعه</p>
                            </div>
                            <form action="" className='d-flex flex-column overflow-hidden gap-3'>
                                <div className="student-input">
                                    <label htmlFor="" className='fw-bold'>اسم الطالب</label>
                                    <input className='w-100' type="text" name='studentName' />
                                </div>
                                <div className="student-input">
                                    <label htmlFor="" className='fw-bold'>رقم الهاتف</label>
                                    <input className='w-100' type="text" name='studentName' />
                                </div>
                                <div className="student-input">
                                    <label htmlFor="" className='fw-bold'>رقم هاتف ولي الامر</label>
                                    <input className='w-100' type="text" name='studentName' />
                                </div>
                                <div className="submit-button mt-3">
                                    <button type="submit" className='d-flex justify-content-center align-items-center fw-bold w-100 rounded-pill'>
                                        تعديل
                                    </button>
                                </div>
                            </form>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}