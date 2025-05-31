import React, { useState } from 'react';

const categorias = ['Entrada', 'Prato Principal', 'Sobremesa', 'Bebida'];
const disponibilidades = ['Em estoque', 'Esgotado'];

function CadastroPrato({ onSubmit, onVoltar }) {
  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    preco: '',
    categoria: categorias[0],
    disponibilidade: disponibilidades[0],
    imagem: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.nome || !form.preco) {
      alert('Nome e preço são obrigatórios!');
      return;
    }
    onSubmit(form);
    alert('Prato cadastrado com sucesso!');
    onVoltar();
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Cadastrar Novo Prato</h2>
      <input name="nome" placeholder="Nome do Prato" value={form.nome} onChange={handleChange} required />
      <textarea name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} rows={3} />
      <input type="number" name="preco" placeholder="Preço (R$)" value={form.preco} onChange={handleChange} required />
      
      <select name="categoria" value={form.categoria} onChange={handleChange}>
        {categorias.map(cat => <option key={cat} value={cat}>{cat}</option>)}
      </select>
      
      <select name="disponibilidade" value={form.disponibilidade} onChange={handleChange}>
        {disponibilidades.map(disp => <option key={disp} value={disp}>{disp}</option>)}
      </select>

      <input name="imagem" placeholder="URL da Imagem do Prato" value={form.imagem} onChange={handleChange} />
      <div style={{ marginTop: 10 }}>
        <button type="submit">Salvar</button>
        <button type="button" onClick={onVoltar} style={{ marginLeft: 10 }}>Voltar</button>
      </div>
    </form>
  );
}

export default CadastroPrato;
