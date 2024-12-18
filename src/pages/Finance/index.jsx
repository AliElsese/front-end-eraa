import './index.css'
import FinanceTable from '../../components/FinanceTable';


export default function Finance() {

    return (
        <>
            <div className="d-flex flex-column p-3 gap-3 flex-fill">
                <div className="d-flex justify-content-between align-items-center">
                    <p className='fw-bold ' style={{ fontSize: '20px', lineHeight: '1.2' }}>اهلا بك في جدول المصروفات 📚</p>
                </div>
                <FinanceTable />
            </div>
        </>
    )
}