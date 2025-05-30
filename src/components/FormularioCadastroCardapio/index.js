// src\components\FormularioCadastro\index.js

import axios from "axios";
import { useState } from "react";
import logo from "../../assets/images/restaurante.jpg";
import useMensagem from "../../hooks/useMensagem";
import MensagemFeedback from "../MensagemFeedback";
import "./styles.css";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [disponibilidade, setDisponibilidade] = useState("");
  const [imagemPrato, setImagemPrato] = useState("");

  const { exibirMensagem, mensagem, tipoMensagem, visivel, fecharMensagem } =
    useMensagem();

  const cadastrarUsuario = async () => {
    try {
      const response = await axios.post("http://localhost:8080/restaurantes", {
        nome,
        descricao,
        preco,
        categoria,
        disponibilidade,
        imagemPrato,
      });
      exibirMensagem(
        response.data.mensagem || "Prato cadastrado com sucesso!",
        "sucesso"
      );
      setNome("");
      setDescricao("");
      setPreco("");
      setCategoria("");
      setDisponibilidade("");
      setImagemPrato("");
    } catch (error) {
      let erroMsg = "Erro ao conectar ao servidor.";
      if (error.response && error.response.data) {
        erroMsg = error.response.data.mensagem;
        if (error.response.data.erros) {
          erroMsg += " " + Object.values(error.response.data.erros).join(", ");
        }
      }
      exibirMensagem(erroMsg, "erro");
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo da empresa" />
      <h2>Cadastro de Pratos</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          cadastrarUsuario();
        }}
      >
        <input
          type="text"
          id="nome"
          placeholder="Nome do Prato"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <textarea
          type="text"
          id="idade"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
        <input
          type="text"
          id="altura"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />
        <input
          type="text"
          id="peso"
          placeholder="Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        />
        <input
          type="text"
          id="posicao"
          placeholder="Disponibilidade"
          value={disponibilidade}
          onChange={(e) => setDisponibilidade(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="URL da imagem"
          value={imagemPrato}
          onChange={(e) => setImagemPrato(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>

      <MensagemFeedback
        mensagem={mensagem}
        tipo={tipoMensagem}
        visivel={visivel}
        onclose={fecharMensagem}
      />
    </div>
  );
}

export default FormularioCadastro;
