import React from 'react'

export const Ciclismo = () => {
  return (
    <div>

      <header>
			  <h1>Articulos para CICLISMO :3</h1>
		  </header>
      <section class="contenido">
        <div class="mostrador" id="mostrador">
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_949015-MBO54164075718_032023-O.webp" alt=""/>
                    </div>
                    <p class="descripcion">VICICLETA WE2</p>
                    <span class="precio">3.99.99 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://s.libertaddigital.com/2022/06/09/bicicleta-de-montana-savadeck-svmb0013.jpg" alt=""/>
                    </div>
                    <p class="descripcion" id>VICICLETA WE23</p>
                    <span class="precio">1.800.99 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://bicicletasshekina.com.co/wp-content/uploads/2022/07/Cross-azul.png" alt=""/>
                    </div>
                    <p class="descripcion">VICICLETA WERT</p>
                    <span class="precio">6.00.99 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://cemacogt.vtexassets.com/arquivos/ids/491301-800-800?v=638141252579600000&width=800&height=800&aspect=true" alt=""/>
                    </div>
                    <p class="descripcion">VICICLETA WE34</p>
                    <span class="precio">8.00.99 Bs</span>
                </div>
            </div>
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://falabella.scene7.com/is/image/Falabella/6593810_1" alt=""/>
                    </div>
                    <p class="descripcion">PEDAL</p>
                    <span class="precio">130.99 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://www.oxfordstore.cl/media/catalog/product/cache/cb1ea22e42c95eeb3d4e77abf38ffa96/r/x/rx2009ba.jpg" alt=""/>
                    </div>
                    <p class="descripcion">CASCO 30%Off</p>
                    <span class="precio">400.99 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://tatoo.ws/files/public/tips/CascoMultiuso.jpg" alt=""/>
                    </div>
                    <p class="descripcion">LENTES 20%Off</p>
                    <span class="precio">500.99 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://biciurbana.com.ar/11888/pedal-plataforma-aluminio-mountain-peak.jpg" alt=""/>
                    </div>
                    <p class="descripcion">PEDALES 60%Off</p>
                    <span class="precio">80.99 BS</span>
                </div>
            </div> 
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_748338-MLM41485890933_042020-O.webp" alt=""/>
                    </div>
                    <p class="descripcion">LLANTA 50%Off</p>
                    <span class="precio">130.99 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_708437-MLM41485895696_042020-O.webp" alt=""/>
                    </div>
                    <p class="descripcion">LLANTA 30%Off</p>
                    <span class="precio">400.00 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://m.media-amazon.com/images/I/714K1R62F3L.jpg" alt=""/>
                    </div>
                    <p class="descripcion">CASCO 20%Off</p>
                    <span class="precio">500.99 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://www.theedgesport.cl/wp-content/uploads/2022/02/61f951d585c8034815989fe0-1.jpg" alt=""/>
                    </div>
                    <p class="descripcion">CASCO 60%Off</p>
                    <span class="precio">180.99 BS</span>
                </div>
            </div> 
        </div>
    
        
      </section> 

    </div>
  )
}
