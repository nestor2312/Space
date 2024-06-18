import { styled } from "styled-components"

const FigureEstilizada = styled.figure((props) => ({
    backgroundImage: `url(${props.$backgroundImage})`,
    flexGrow: 1,
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    minHeight: '328px',
    margin: 0,
    borderRadius: '20px',
    maxWidth: '100%',
    backgroundSize: 'cover'
}));

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`
// eslint-disable-next-line react/prop-types
const Banner = ({texto, backgroundImage}) => {
    return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
        <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>)
}

export default Banner