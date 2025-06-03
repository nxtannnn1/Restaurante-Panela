import { useEffect, useState } from 'react';
import { buscarPratos } from '../services/pratosService';
import PratoCard from '../components/PratoCard';

function ListarPratos() {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    const carregarPratos = async () => {
      try {
        const dados = await buscarPratos();
        setPratos(dados);
      } catch (error) {
        console.error('Erro ao buscar pratos:', error);
      }
    };

    carregarPratos();
  }, []);

  return (
    <div
      style={{
        padding: '40px',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#0d6efd',
          fontSize: '2rem',
        }}
      >
        📃 Lista de Pratos
      </h2>

      {pratos.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Nenhum prato cadastrado.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            justifyItems: 'center',
          }}
        >
          {pratos.map((prato) => (
            <PratoCard key={prato.id} prato={prato} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListarPratos;
