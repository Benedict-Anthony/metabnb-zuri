import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './styles/GlobalStyles.styles';
import NavBar from './components/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Place from './pages/Place';
import { useState, useEffect } from 'react';

function App() {
  const [activeModal, setActiveModal] = useState(false)
  const showModal = () => {
    setActiveModal(true)
  }

  const hideModal = () => {
    setActiveModal(false)
  }

  useEffect(() => {
    if (activeModal) {
      document.documentElement.style.background = "#ccc"
      document.documentElement.style.opacity = ".8"
    } else {
      document.documentElement.style.background = "#fff"
      document.documentElement.style.opacity = "1"
    }
  }, [activeModal])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <NavBar handleClick={showModal} />
        <Routes>
          <Route path={"/"} element={<Home activeModal={activeModal} handleClick={hideModal} />} />
          <Route path={"/place-to-stay"} element={<Place />} />
        </Routes>
        <Footer />

      </BrowserRouter>

    </ThemeProvider >
  );
}

export default App;
