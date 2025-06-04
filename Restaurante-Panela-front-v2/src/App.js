import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import ListarPratos from './pages/ListarPratos';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          backgroundColor: '#0d6efd',
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <Link to="/" style={{ color: 'white' }}>🏠 Home</Link>
        <Link to="/cadastro" style={{ color: 'white' }}>➕ Cadastrar</Link>
        <Link to="/listar" style={{ color: 'white' }}>📃 Listar Pratos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listar" element={<ListarPratos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
