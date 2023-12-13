import React from 'react'

export const Voleibol = () => {
  return (
    <div> 
      <header>
        <h1>Articulos para Voleibol :3</h1>
      </header>
    <section class="contenido">
      <div class="mostrador" id="mostrador">
          <div class="fila">
              <div class="item" onclick="cargar(this)">
                  <div class="contenedor-foto">
                      <img src="https://newathletic.vtexassets.com/arquivos/ids/211355-800-800?v=638283325120530000&width=800&height=800&aspect=true" alt=""/>
                  </div>
                  <p class="descripcion">POLERA DEPORTIVA</p>
                  <span class="precio">300 Bs</span>
              </div>
              <div class="item" onclick="cargar(this)">
                  <div class="contenedor-foto">
                      <img src="https://cdnx.jumpseller.com/akira1/image/33431894/FINIS_TERRA_VOLEIBOL_1.jpg?1679836212" alt=""/>
                  </div>
                  <p class="descripcion" id>POLERA DEPORTIVA</p>
                  <span class="precio">800 Bs</span>
              </div>
              <div class="item" onclick="cargar(this)">
                  <div class="contenedor-foto">
                      <img src="https://monterodeportes.cl/wp-content/uploads/2023/10/Azul-Rosen-S-M-Delantero-300x300.jpg" alt=""/>
                  </div>
                  <p class="descripcion">POLERA DEPORTIVA</p>
                  <span class="precio">600 Bs</span>
              </div>
              <div class="item" onclick="cargar(this)">
                  <div class="contenedor-foto">
                      <img src="https://cdnx.jumpseller.com/celtry/image/25455071/VOLLEY-FEM-2-FR.jpg?1658802265" alt=""/>
                  </div>
                  <p class="descripcion">POLERA DEPORTIVA</p>
                  <span class="precio">800 Bs</span>
              </div>
          </div>
          <div class="fila">
              <div class="item" onclick="cargar(this)">
                  <div class="contenedor-foto">
                      <img src="https://static.wixstatic.com/media/735769_07c75f1c69d74eddac5dc1b9ae0b376f~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg" alt=""/>
                  </div>
                  <p class="descripcion">VALON 50%Off</p>
                  <span class="precio">130 Bs</span>
              </div>
              <div class="item" onclick="cargar(this)">
                  <div class="contenedor-foto">
                      <img src="https://m.media-amazon.com/images/I/61IsMAb2S9L.jpg" alt=""/>
                  </div>
                  <p class="descripcion">VALON 30%Off</p>
                  <span class="precio">400 Bs</span>
              </div>
              <div class="item" onclick="cargar(this)">
                  <div class="contenedor-foto">
                      <img src="https://m.media-amazon.com/images/I/91uTF4xr0AL._AC_UF894,1000_QL80_.jpg" alt=""/>
                  </div>
                  <p class="descripcion">VALON 20%Off</p>
                  <span class="precio">500 Bs</span>
              </div>
              <div class="item" onclick="cargar(this)">
                  <div class="contenedor-foto">
                      <img src="https://static.compreloadomicilio.com/dmraccesorios/products/026066/646fbcaa57014693462421.webp" alt=""/>
                  </div>
                  <p class="descripcion">VALON 60%Off</p>
                  <span class="precio">80 BS</span>
              </div>
          </div> 
      </div>
  
      
    </section> 
  </div>
  )
}
