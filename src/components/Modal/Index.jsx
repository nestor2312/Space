import styled from "styled-components"
import Imagen from "../Galeria/Imagen/Index"
import BotonIcono from "../BotonIcono/Index"

const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.7);
`
const DialogModal =styled.dialog`
 position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`
const Modal =({foto, cerrar, FotoFavorita})=>{
    return <>
   {foto &&  <>
    <Overlay />

   <DialogModal open={!!foto} onClose={cerrar}>
        <Imagen foto={foto} expandida={true} FotoFavorita={FotoFavorita}></Imagen>
        <form action="dialog">
        <BotonIcono formMethod="dialog">
                            <img src="/iconos/cerrar.png" alt="Ícono de cerrar" />
                        </BotonIcono>

        </form>
    </DialogModal> 
    </>
    }
 </>
}

export default Modal