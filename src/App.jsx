import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyle/Index";
import Cabecera from "./components/Header/Index";
import BarraLateral from "./components/BarraLateral/Index";
import Banner from "./components/Banner/Index";
import banner from "./assets/Banner.png";
import Galeria from "./components/Galeria/Index";
import fotos from "./fotos.json"
import { useState } from "react";
import Modal from "./components/Modal/Index";
import Footer from "./components/Footer/Index";

import { useEffect } from "react"


const FondoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;
const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContauner = styled.main`
  display: flex;
  gap: 24px;
`;

const ContenidoGaleria = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 24px;
 
`;

const  App=() =>{

  const [fotosGaleria, setfotosgaleria]= useState(fotos)

  const [FotoSeleccionada, setFotoSeleccionada]=useState(null)

  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setfotosgaleria(fotosFiltradas)

  }, [filtro, tag])


  const FotoFavorita = (foto)=>{
    console.log('foto',foto);
    if (foto.id === FotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...FotoSeleccionada, favorita: !foto.favorita
      })
    }
    setfotosgaleria(fotosGaleria.map(fotogaleria=>{

      return {
        ...fotogaleria, favorita:fotogaleria.id === foto.id ? !foto.favorita : fotogaleria.favorita
      }
    }))
  }
  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera   filtro={filtro}
          setFiltro={setFiltro} />
          <MainContauner>
            <BarraLateral/>
            <ContenidoGaleria>
              <Banner texto="La galería más completa del espacio" backgroundImage={banner}></Banner>
              <Galeria  setTag={setTag} FotoFavorita={FotoFavorita} fotos={fotosGaleria} SeleccioanarFoto={foto=>setFotoSeleccionada(foto)}></Galeria>
            </ContenidoGaleria>
          </MainContauner>
        </AppContainer>
        <Modal foto={FotoSeleccionada} FotoFavorita={FotoFavorita} cerrar={()=>setFotoSeleccionada(null)} ></Modal>
        <Footer></Footer>
      </FondoGradiente>
    </>
  );
}

export default App;
