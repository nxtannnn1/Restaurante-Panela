import React from 'react';

const PratoCard = ({ prato }) => {
  const disponibilidadeTexto =
    prato.disponibilidade === 'EM_ESTOQUE' ? 'Disponível' : 'Indisponível';

  const disponibilidadeCor =
    prato.disponibilidade === 'EM_ESTOQUE' ? 'green' : 'red';

  const styles = {
    card: {
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      width: '250px',
      backgroundColor: 'white',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    cardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    },
    image: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
    },
    content: {
      padding: '15px',
    },
    title: {
      marginBottom: '8px',
      color: '#0d6efd',
    },
    description: {
      fontSize: '0.9rem',
      color: '#555',
      minHeight: '50px',
    },
    price: {
      fontWeight: 'bold',
      marginTop: '10px',
    },
    disponibilidade: {
      fontSize: '0.8rem',
      color: disponibilidadeCor,
    },
  };

  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={hover ? { ...styles.card, ...styles.cardHover } : styles.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={
          prato.urlImagem ||
          'https://via.placeholder.com/250x150?text=Imagem+Indisponível'
        }
        alt={prato.nome}
        style={styles.image}
      />
      <div style={styles.content}>
        <h3 style={styles.title}>{prato.nome}</h3>
        <p style={styles.description}>{prato.descricao}</p>
        <p style={styles.price}>R$ {Number(prato.preco).toFixed(2)}</p>
        <p style={styles.disponibilidade}>{disponibilidadeTexto}</p>
      </div>
    </div>
  );
};

export default PratoCard;
