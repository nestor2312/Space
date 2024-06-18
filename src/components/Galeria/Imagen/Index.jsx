import styled from "styled-components"
import BotonUno from "../../BotonUno/Index"
import BotonIcono from "../../BotonIcono/Index"

const Card = styled.figure`
 display: flex;
 flex-direction: column;
position: relative;
background: red;
width: ${(props) => (props.$expandida ? '80%' : '460px')};
height: 250px;
border-radius: 20px 20px 20px 20px;
margin: 0;
margin-bottom: 100px;
& > img {
        max-width: 100%;
        border-radius: 20px 20px 20px 20px;
    }
`
const CardFooter = styled.footer`
position: absolute;
display: flex;
    justify-content: space-between;
    align-items: center;
top: 250px;
background: #001634;
width: ${(props) => (props.$expandida ? '90%' : '460px')};
height: 80px;
border-radius:  0px 0px 20px 20px;
`
const Text = styled.h1`
margin-left: 10px;
color: #fff;
font-size: 20px;
font-weight: 700;
`
const Text2 = styled.h2`
margin-left: 15px;
color: #fff;
font-size: 15px;
font-weight: 400;
`


const Imagen =({ foto, expandida = false, Zoom, FotoFavorita }) => {

    const iconoFavorito= foto.favorita ? "/iconos/favorito-activo.png" :"/iconos/favorito.png" 

    return<Card $expandida={expandida} id={`foto-${foto.id}`} >
        <img src={foto.path} alt={foto.path}/>
        <CardFooter>
            <Text>{foto.titulo}</Text>
            <Text2>{foto.fuente}</Text2>
            <BotonIcono onClick={()=>FotoFavorita(foto)} >
            <img src={iconoFavorito} alt="Icone de favorito" />
            </BotonIcono>
            {!expandida && <BotonIcono aria-hidden={expandida} onClick={()=>Zoom(foto)}>
                    <img src="/iconos/expandir.png" alt="Icono de expandir" />
                </BotonIcono>}
        </CardFooter>
    </Card>
}
export default Imagen