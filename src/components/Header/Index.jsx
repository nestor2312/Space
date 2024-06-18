import styled from "styled-components"
import Buscador from "../CampoTexto/Index"

const HeaderEstilizado =styled.header`
display: flex;
justify-content: space-between;
padding: 60px 0;
img{
    width: 212px;

}
`

const Cabecera = ()=>{
    return <HeaderEstilizado>
        <img src="/img/Logo.png" alt="logo"/>
        <Buscador></Buscador>
    </HeaderEstilizado>
    
}
export default Cabecera