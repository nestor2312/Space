import styled from "styled-components"
import Titulo from "../../Titulo/Index"
import Popularess from "./Populares.json"

const SeccionPopular = styled.div`
display: flex;
flex-direction: column;


img{
    border-radius: 20px;
    margin-top: 15px;
}
`

const Boton = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Populares = ()=>{
    return <>
    <Titulo $aling="center">Populares

    <SeccionPopular>
      
    {Popularess.map((popular)=>{
        return <img key={popular.id} src={popular.path} alt={popular.alt} />
    })}
    <Boton>Ver mas</Boton>
    </SeccionPopular>

    </Titulo>

    
    </>
   
}
export default Populares