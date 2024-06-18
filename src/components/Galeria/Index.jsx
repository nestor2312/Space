import styled from "styled-components"
import Titulo from "../Titulo/Index"
import Tag from "./Tags/Index"
import Populares from "./Populares/Index"
import Imagen from "./Imagen/Index"


const GaleriaContainer= styled.div`
display: flex;
`
const SeccionFLuida= styled.section`
flex-grow: 1;
`

const ImagenContainer= styled.section`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
gap: 20px;
`

const Galeria = ({fotos = [], setTag, SeleccioanarFoto, FotoFavorita})=>{
    return <>
    <Tag setTag={setTag} ></Tag>
    <GaleriaContainer>
        <SeccionFLuida>
    <Titulo>Navegue por la galeria</Titulo>
    <ImagenContainer>
    {fotos.map((foto)=>{
        // return <h1>{foto.titulo}</h1>
        return <Imagen key={foto.id} foto={foto} FotoFavorita={FotoFavorita}  Zoom={SeleccioanarFoto}/> 
    })}
    </ImagenContainer>

        </SeccionFLuida>
       <Populares></Populares>
    </GaleriaContainer>
    </>
}

export default Galeria