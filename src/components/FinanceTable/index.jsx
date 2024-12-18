import './index.css'
import DataTable from "react-data-table-component";
import { useState, useContext } from 'react';
import { ProjectContext } from "../../Context/store";
import CalenderFilter from '../Calender';

export default function FinanceTable() {
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
        }
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
            </div>
        </>
    )
}