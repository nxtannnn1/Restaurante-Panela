import { useState } from "react";
import { cadastrarPrato } from "../services/pratosService";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("ENTRADA");
  const [disponibilidade, setDisponibilidade] = useState("EM_ESTOQUE");
  const [urlImagem, setUrlImagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prato = { nome, descricao, preco, categoria, disponibilidade, urlImagem };

    try {
      await cadastrarPrato(prato);
      alert("✅ Prato cadastrado com sucesso!");
      limparFormulario();
    } catch (error) {
      console.error("Erro ao cadastrar prato:", error);
      alert("❌ Erro no cadastro. Verifique os dados.");
    }
  };

  const limparFormulario = () => {
    setNome("");
    setDescricao("");
    setPreco("");
    setCategoria("ENTRADA");
    setDisponibilidade("EM_ESTOQUE");
    setUrlImagem("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🍽️ Cadastro de Prato</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={styles.input}
          required
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          style={{ ...styles.input, height: "80px" }}
          required
        />
        <input
          type="number"
          placeholder="Preço (ex: 19.90)"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          style={styles.input}
          step="0.01"
          required
        />

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          style={styles.input}
        >
          <option value="ENTRADA">🍤 Entrada</option>
          <option value="PRATOPRINCIPAL">🥩 Prato Principal</option>
          <option value="SOBREMESA">🍰 Sobremesa</option>
          <option value="BEBIDA">🍹 Bebida</option>
        </select>

        <select
          value={disponibilidade}
          onChange={(e) => setDisponibilidade(e.target.value)}
          style={styles.input}
        >
          <option value="EM_ESTOQUE">✅ Em estoque</option>
          <option value="ESGOTADO">❌ Indisponível</option>
        </select>

        <input
          placeholder="URL da Imagem"
          value={urlImagem}
          onChange={(e) => setUrlImagem(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Cadastrar Prato
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
};

export default Cadastro;
