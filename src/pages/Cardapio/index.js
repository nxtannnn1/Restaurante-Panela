// src\pages\Lista\index.js

import CardapioDePratos from '../../components/Cardapio'
import { useNavigate } from 'react-router-dom'
import './styles.css'

function PaginaListaPratos() {
    const navigate = useNavigate()
    
return (
        <div className='pagina-lista-usuarios'>
            <div className='container'>
                <h2>Cardapio Panela da Vovo</h2>
                <CardapioDePratos/>
                <button onClick={() => navigate('/Cadastro')} className='link-voltar'>
                    Cadastrar Pratos
                </button>
            </div>
        </div>
    )
}

export default PaginaListaPratos