import './index.css'
import DataTable from "react-data-table-component";
import { useState, useContext, useEffect } from 'react';
import { ProjectContext } from "../../Context/store";
import StudentModal from '../StudentModal';
import CalenderFilter from '../Calender';

export default function StudentsTable() {
    const columns = [
        {
            name: "كود الطالب",
            selector: row => row.id,
            sortable: true
        },
        {
            name: "الاسم",
            selector: row => row.fullName,
            sortable: true
        },
        {
            name: "رقم الهاتف",
            selector: row => row.height,
            sortable: true
        },
        {
            name: "رقم ولي الامر",
            selector: row => row.weight,
            sortable: true
        },
        {
            name: "التاريخ",
            selector: row => row.date,
            sortable: true
        },
        {
            name: "",
            cell: row => (
                <div className='d-flex gap-3'>
                    <button style={{backgroundColor: 'transparent', border: 'none', color: '#00B5D8'}}
                        onClick={() => setModalType('update')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M7.243 17.997H3v-4.243L14.435 2.319a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415zm-4.243 2h18v2H3z" />
                        </svg>
                    </button>
                    <button style={{backgroundColor: 'transparent', border: 'none', color: '#e53e3e'}}
                        onClick={() => handleDelete(row.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
                        </svg>
                    </button>
                </div>
            ),
        },
    ];

    const rows = [
        {
            id: 1,
            fullName: "John Doe",
            height: "1.75m",
            weight: "89kg",
            date: new Date('2024-11-10').toLocaleDateString()
        },
        {
            id: 2,
            fullName: "Jane Doe",
            height: "1.64m",
            weight: "55kg",
            date: new Date('2024-9-10').toLocaleDateString()
        },
        {
            id: 3,
            fullName: "Sheera Maine",
            height: "1.69m",
            weight: "74kg",
            date: new Date('2024-8-10').toLocaleDateString()
        },
        {
            id: 4,
            fullName: "Sheera Maine",
            height: "1.69m",
            weight: "74kg",
            date: new Date('2024-8-20').toLocaleDateString()
        },
    ];

    const [data, setData] = useState(rows);
    const {
        modalType, setModalType,
        selectedDate, setSelectedDate    
    } = useContext(ProjectContext)

    const handleSearch = (e) => {
        let searchValue = ''
        const newRows = rows.filter((row) => {
            let idValue = row.id
                .toString()
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
            let fullNameValue = row.fullName
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
            let heightValue = row.height
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
            let weightValue = row.weight
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
      
            if (idValue) {
                searchValue = idValue;
            } else if (fullNameValue) {
                searchValue = fullNameValue;
            } else if (heightValue) {
                searchValue = heightValue;
            } else {
                searchValue = weightValue;
            }
            
            return searchValue;
        });

        setData(newRows);
    }

    // useEffect(() => {
    //     make filter function on table date
    // }, [selectedDate])

    return (
        <>
            <div className="d-flex flex-column gap-3 flex-fill overflow-hidden">
                <div className="d-flex justify-content-start align-items-center gap-5">
                    <div className="table-search d-flex align-items-center">
                        <input type="search"
                            className="search-btn ps-3" 
                            placeholder="بحث"
                            onChange={handleSearch}
                        />
                    </div>
                    <CalenderFilter />
                </div>
                <div className="table-section">
                    <DataTable columns={columns} data={data} 
                        fixedHeader pagination striped selectableRows selectableRowsSingle selectableRowsHighlight />
                </div>
                {
                    modalType && <StudentModal />
                }
            </div>
        </>
    )
}