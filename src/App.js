import './App.css';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import Seccion from './componen/Seccion';
import Foter from './componen/Foter';
import Imagenes from './assets/Imagenes';
import Navbar from './componen/Navbar';


import { Tenis } from './paginas/Tenis';
import { Ropa } from './paginas/Ropa';
import { Promociones } from './paginas/Promociones';
import { Nosotros } from './paginas/Nosotros';

import { Gimnacio } from './pagin/Gimnacio';
import { Futbol } from './pagin/Futbol';
import { Baloncesto } from './pagin/Baloncesto';
import { Voleibol } from './pagin/Voleibol';
import { Natacion } from './pagin/Natacion';
import { Ciclismo } from './pagin/Ciclismo';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar/>
        <Routes>


          <Route path='Ropa' element={<Ropa/>} />
          <Route path='Tenis' element={<Tenis/>} />
          <Route path='Nosotros' element={<Nosotros/>} />
          <Route path='Promociones' element={<Promociones/>} />

          <Route path='Gimnacio' element={<Gimnacio/>} />
          <Route path='Futbol' element={<Futbol/>} />
          <Route path='Baloncesto' element={<Baloncesto/>} />
          <Route path='Voleibol' element={<Voleibol/>} />
          <Route path='Natacion' element={<Natacion/>} />
          <Route path='Ciclismo' element={<Ciclismo/>} />
          
        </Routes>
      </BrowserRouter>
        

      

      <Seccion/>

      <div className='carusel'>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Imagenes.img1} class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src={Imagenes.img2} class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src={Imagenes.img3} class="d-block w-100" alt="..."></img>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Foter/>

      
    </div>
    
    
  );
}

export default App;
