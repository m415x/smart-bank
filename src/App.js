import React, { useState } from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [tema, setTema] = useState(() => {
    // Intenta obtener el tema almacenado en localStorage
    const temaAlmacenado = localStorage.getItem("tema");
    // Devuelve el tema almacenado si existe, de lo contrario, usa el tema predeterminado
    return temaAlmacenado ? temaAlmacenado === "claro" : true;
  });

  const toggleTema = () => {
    const nuevoTema = !tema;
    setTema(nuevoTema);
    localStorage.setItem("tema", nuevoTema ? "claro" : "oscuro");
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
