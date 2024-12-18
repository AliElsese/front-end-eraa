import { createContext, useState } from "react"

const ProjectContext = createContext();
const ProjectProvider = ({ children }) => {
    const [modalType, setModalType] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const contextValues = {
        modalType,
        setModalType,
        isSideBarOpen,
        setIsSideBarOpen,
        selectedDate,
        setSelectedDate
    }

    return (
        <ProjectContext.Provider value={ contextValues }>
            { children }
        </ProjectContext.Provider>
    )
}

export { ProjectContext, ProjectProvider };