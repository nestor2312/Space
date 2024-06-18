import styled from "styled-components"
import tags from "./Tags.json"

const TagTitulo = styled.h3`
color: #D9D9D9;
font-size: 24px;
    margin: 0;
`
const TagsContend= styled.button`
  font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`
const Contenedor= styled.section`
display: flex;
align-items: center;
gap: 60px;
margin-top: 50px;
`

const Tags= styled.div`
display: flex;
justify-content: end;
gap: 25px;

`

const Tag =  ({setTag})=>{
    return<>
    <Contenedor>
    <TagTitulo>Buscar por tag</TagTitulo>
    <Tags>   
    {tags.map(tag => <TagsContend key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</TagsContend>)}
    </Tags>
    </Contenedor>
    </>

}
export default Tag