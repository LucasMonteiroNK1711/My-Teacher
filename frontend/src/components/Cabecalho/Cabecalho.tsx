import { CabecalhoConteiner, Logo } from "./Cabecalho.style";

const Cabecalho = () => {
    return (
        <CabecalhoConteiner>
            <div>
                <Logo src="/imagens/myteacher.png" />
            </div>

            <p>Encontre o professor perfeito!</p>
        </CabecalhoConteiner>
    )
}

export default Cabecalho;