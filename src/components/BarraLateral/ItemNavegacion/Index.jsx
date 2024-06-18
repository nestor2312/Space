import styled from "styled-components"

const ItemEstilos =styled.li`
font-size: 23px;
margin-bottom: 30px;
line-height: 28px;
display: flex;
align-items: center;
gap: 16px;
color: ${props => props.$activo ? "#7b78e3" : "#d9d9d9"};
`

// eslint-disable-next-line react/prop-types
const ItemNavegacion = ({children, iconoActivo, iconoInactivo, activo=false})=>{
    return<ItemEstilos $activo={activo}>
    <img src={activo ? iconoActivo : iconoInactivo  }  alt="imagen"/>
    {children}
    </ItemEstilos>
}

export default ItemNavegacion