import React, { useState } from 'react';
import Home from './pages/Home';
import CadastroPrato from './pages/CadastroPrato';
import Cardapio from './pages/Cardapio';

function App() {
  const [page, setPage] = useState('home');
  const [pratos, setPratos] = useState([]);

  // Adiciona prato novo ao estado local
  const adicionarPrato = (novoPrato) => {
    setPratos([...pratos, { ...novoPrato, id: Date.now() }]);
  };

  // Renderiza a página conforme estado
  const renderPage = () => {
    switch(page) {
      case 'cadastro': return <CadastroPrato onSubmit={adicionarPrato} onVoltar={() => setPage('home')} />;
      case 'cardapio': return <Cardapio pratos={pratos} onVoltar={() => setPage('home')} />;
      default: return <Home onNavigate={setPage} />;
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      {renderPage()}
    </div>
  );
}

export default App;
