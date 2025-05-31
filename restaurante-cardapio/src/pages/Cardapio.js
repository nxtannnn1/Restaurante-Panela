import React, { useState } from 'react';

function Cardapio({ pratos, onVoltar }) {
  const [filtro, setFiltro] = useState('Todos');

  const categorias = ['Todos', 'Entrada', 'Prato Principal', 'Sobremesa', 'Bebida'];

  const pratosFiltrados = filtro === 'Todos' ? pratos : pratos.filter(p => p.categoria === filtro);

  return (
    <div>
      <h2>Cardápio</h2>
      <button onClick={onVoltar}>Voltar</button>
      
      <div style={{ margin: '10px 0' }}>
        <label>Filtrar por categoria: </label>
        <select value={filtro} onChange={e => setFiltro(e.target.value)}>
          {categorias.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: 15
      }}>
        {pratosFiltrados.length === 0 ? <p>Nenhum prato disponível.</p> :
          pratosFiltrados.map(p => (
            <div key={p.id} style={{ border: '1px solid #ccc', padding: 10, borderRadius: 5 }}>
              {p.imagem ? <img src={p.imagem} alt={p.nome} style={{ width: '100%', height: 140, objectFit: 'cover' }} /> : <div style={{width: '100%', height: 140, backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Sem imagem</div>}
              <h3>{p.nome}</h3>
              <p>R$ {p.preco}</p>
              <p><i>{p.categoria} - {p.disponibilidade}</i></p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Cardapio;
