import styled from "styled-components";
import search from './search.png'
const ContainerEstilos =styled.div`
position: relative;
display: inline-block;
img{
    position: relative;
    width: 32px;
}
`
const InputEstilos =styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
   
`
const Lupa = styled.img`
  position: absolute;
  top: 10px;
  right: 44px;
  height: 38px;
  width: 38px!important;
`
const Buscador = ({ setFiltro })=>{
    return <ContainerEstilos>
         <InputEstilos onChange={(evento) => { setFiltro(evento.target.value) }} type="text" placeholder="¿Qué estás buscando?"/>
         <Lupa src={search} alt="ícono de lupa" />
    </ContainerEstilos>
    
}

export default Buscador