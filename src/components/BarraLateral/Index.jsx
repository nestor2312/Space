import styled from "styled-components"
import ItemNavegacion from "./ItemNavegacion/Index"
const ListaEstilos = styled.ul`
margin: 0;
padding: 0;
list-style: none;

`


const BarraLateral = ()=>{
return <aside>
    <nav>
        <ListaEstilos>
            <ItemNavegacion iconoActivo="iconos/home-activo.png" iconoInactivo="iconos/home-inactivo.png" activo>
            Inicio
            </ItemNavegacion>
            <ItemNavegacion iconoActivo="iconos/mas-vistas-activo.png" iconoInactivo="iconos/mas-vistas-inactivo.png" activo>
            Mas vistas
            </ItemNavegacion>
        </ListaEstilos>
    </nav>
</aside>
}

export default BarraLateral