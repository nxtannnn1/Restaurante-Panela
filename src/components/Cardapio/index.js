// src\components\ListaDeUsuarios\index.js

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Cardapio() {
  const [pratos, setPratos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const carregarPratos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/restaurantes');
        setPratos(response.data);
      } catch (error) {
        alert("Erro ao buscar Pratos: ", error);
        setPratos([]);
      }
    };
    carregarPratos();
  }, []);

  return (
    <ul id="listaPratos" className="lista-pratos">
      {pratos.length === 0 ? (
        <li>Nenhum prato cadastrado</li>
      ) : (
        pratos.map((prato) => (
          <div>
            <li key={prato.id}>
              <strong>Nome do prato: </strong> {prato.nome}
              <br />
              <strong>Descrição: </strong> {prato.desccricao}
              <br />
              <strong>Preço: </strong> {prato.preco}
              <br />
              <strong>Categoria: </strong> {prato.categoria}
              <br />
              <strong>Disponibilidade </strong> {prato.disponibilidade}
              <br />
              <strong></strong> {prato.imagem}
              <br />
            </li>

            <button
              onClick={() => navigate("/Cadastro")}
              className="link-voltar"
            >
              Cadastrar Pratos
            </button>
          </div>
        ))
      )}
    </ul>
  );
}

export default Cardapio;
