import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './tailwind.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarComponent from './components/NavBar'
import { Store, Success, Cancel } from './pages'
import { CartStateProvider } from './context/CartContext'

function App() {
  return (
    <Container>
      <CartStateProvider>
        <NavBarComponent></NavBarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </CartStateProvider>
    </Container>
  )
}

export default App
