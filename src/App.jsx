import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Statistics from './pages/Statistics';
import Groups from './pages/Groups';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import StudentsInfo from './pages/StudentsInfo';
import Employees from './pages/Employees';
import Classes from './pages/Classes';
import Attendences from './pages/Attendences';
import Grades from './pages/Grades';
import Finance from './pages/Finance';
import GroupDetails from './pages/GroupDetails';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar />
        <div className="d-flex">
          <SideBar />
            <Routes>
              <Route path='/' >
                <Route index element={<Statistics />} />
                <Route path='statistics' element={<Statistics />} />
                <Route path='classes' element={<Classes />} />
                <Route path='groups' element={<Groups />} />
                <Route path='groupDetails' element={<GroupDetails />} />
                <Route path='students' element={<StudentsInfo />} />
                <Route path='employees' element={<Employees />} />
                <Route path='attendences' element={<Attendences />} />
                <Route path='grades' element={<Grades />} />
                <Route path='finance' element={<Finance />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='*' element={<h1 className='vh-100 d-flex align-items-center justify-content-center'>Eror 404 | Not Found</h1>} />
              </Route>
            </Routes>
        </div>
        
      </BrowserRouter>
    </div>
  )
}

export default App
