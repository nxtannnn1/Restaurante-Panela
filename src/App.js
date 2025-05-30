import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaCadastro from './pages/Cadastro';
import PaginaListaPratos from './pages/Cardapio';
import PaginaInicio from './pages/Inicio';
import './App.css'; // Para estilos globais, se necessário

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/Cadastro" element={<PaginaCadastro />} />
        <Route path="/cardapio" element={<PaginaListaPratos />} />
      </Routes>
    </Router>
  );
}

export default App;