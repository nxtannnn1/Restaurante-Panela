import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function Home() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
    },
    title: {
      fontSize: '2.5rem',
      color: '#0d6efd',
      marginBottom: '30px',
    },
    buttonsContainer: {
      display: 'flex',
      gap: '20px',
    },
    button: {
      padding: '12px 24px',
      fontSize: '1rem',
      color: 'white',
      backgroundColor: '#0d6efd',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.2s',
    },
    buttonHover: {
      backgroundColor: '#0b5ed7',
      transform: 'scale(1.05)',
    },
  };

  const [hoverButton, setHoverButton] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🍽️ Bem-vindo ao Restaurante</h1>
      <div style={styles.buttonsContainer}>
        <Link to="/cadastro">
          <button
            style={
              hoverButton === 'cadastro'
                ? { ...styles.button, ...styles.buttonHover }
                : styles.button
            }
            onMouseEnter={() => setHoverButton('cadastro')}
            onMouseLeave={() => setHoverButton(null)}
          >
            ➕ Cadastrar Prato
          </button>
        </Link>

        <Link to="/listar">
          <button
            style={
              hoverButton === 'listar'
                ? { ...styles.button, ...styles.buttonHover }
                : styles.button
            }
            onMouseEnter={() => setHoverButton('listar')}
            onMouseLeave={() => setHoverButton(null)}
          >
            📃 Listar Pratos
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
