import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './index.css'
import { ProjectProvider } from './Context/store.jsx'

createRoot(document.getElementById('root')).render(
    <ProjectProvider>
        <App />
    </ProjectProvider>
)