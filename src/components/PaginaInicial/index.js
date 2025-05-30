import logo from '../../assets/images/restaurante.jpg'
import { useNavigate } from "react-router-dom";
import './styles.css'


function PaginaInicial(){
    const navigate = useNavigate()
    return(
        <div className="ContainerPaginaInicial">
            <img src={logo} alt="Logo da empresa"/>

            <h1>Bem Vindo a Panela da vovo</h1>

            <button onClick={() => navigate('/Cardapio')} className="link-usuarios">
                Cardapio
            </button>
        </div>
    )

}

export default PaginaInicial;