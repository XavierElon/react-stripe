import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './tailwind.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarComponent from './components/NavBar'
import { Store, Success, Cancel } from './pages'

function App() {
  return (
    <Container>
      <NavBarComponent></NavBarComponent>
      <BrowserRouter>
        <Routes>
          <Route index element={<Store />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
