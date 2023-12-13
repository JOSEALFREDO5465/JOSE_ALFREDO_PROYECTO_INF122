import React from 'react'

export const Futbol = () => {
  return (
    <div>

        <header>
			<h1>Articulos para Futbolistas</h1>
		</header>
            
      <section class="contenido">
        <div class="mostrador" id="mostrador">
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f9655f95-f26f-41e4-9da1-2b504dbc261f/marcus-rashford-academy-balon-de-futbol-sJ9NqB.png" alt=""/>
                    </div>
                    <p class="descripcion">VALON BLANCO</p>
                    <span class="precio">300 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://media.futbolmania.com/media/catalog/product/cache/1/image/0f330055bc18e2dda592b4a7c3a0ea22/c/n/cn5448-100-5_imagen-del-balon-de-futbol-nike-club-2020-2021-blanco_1_frontal.jpg" alt=""/>
                    </div>
                    <p class="descripcion" id>VALON BLANCO</p>
                    <span class="precio">100 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://media.futbolmania.com/media/catalog/product/cache/1/fm_imagen_b1/300x/9df78eab33525d08d6e5fb8d27136e95/C/U/CU8041-101-4_imagen-del-balon-de-futbol-entrenamiento-talla-4-Nike-Academy-Pro-Fifa-2021-blanco_1_frontal.jpg" alt=""/>
                    </div>
                    <p class="descripcion">VALON DEL MANCHESTER</p>
                    <span class="precio">600 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://media.futbolmania.com/media/catalog/product/cache/1/image/0f330055bc18e2dda592b4a7c3a0ea22/d/a/da5635-100_imagen-del-balon-de-futbol-nike-flight-2020-2021-blanco_1_frontal.jpg" alt=""/>
                    </div>
                    <p class="descripcion">VALON DEL TIGRE</p>
                    <span class="precio">800 Bs</span>
                </div>
            </div>
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://hapi.cultofutbol.com/medias?context=bWFzdGVyfGltYWdlc3wxMDcwNTl8aW1hZ2UvcG5nfGltYWdlcy9oZjUvaDgxLzEwMTMzMzYzMDY0ODYyLnBuZ3xjMDAzODY5ZDQ2YzhmNGZhYzQzOTY3NTgyMDQxMTBjMTcwYWYxYmRjYzg0Y2RiMDhjY2YxZDZlOTZkYzQ2OTY4" alt=""/>
                    </div>
                    <p class="descripcion">VALON 50%Off</p>
                    <span class="precio">130 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/88a6263f-db36-493e-9d72-43b996eaa425/flight-balon-de-futbol-XxZsPb.png" alt=""/>
                    </div>
                    <p class="descripcion">VALON 30%Off</p>
                    <span class="precio">400 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://www.digitalsport.com.ar/files/products/617049e676df3-537176-500x500.jpg" alt=""/>
                    </div>
                    <p class="descripcion">VALON 20%Off</p>
                    <span class="precio">500 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://www.digitalsport.com.ar/files/products/631f9cc2355dc-553693-500x500.jpg" alt=""/>
                    </div>
                    <p class="descripcion">VALON 60%Off</p>
                    <span class="precio">80 BS</span>
                </div>
            </div> 
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/2902eee888fb4e8c9651ae9b01178b25_9366/Calzado_de_Futbol_X_Speedportal.3_Pasto_Sintetico_Azul_GW8485_22_model.jpg" alt=""/>
                    </div>
                    <p class="descripcion">tenisito 50%Off</p>
                    <span class="precio">130 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuecLvNPRv0nonKTz8v44G5OwK2Zfdvfpgz7aBmxIRU2uP6qd53qNYKOfhdHLrbsR0qI&usqp=CAU" alt=""/>
                    </div>
                    <p class="descripcion">TENIS  30%Off</p>
                    <span class="precio">400 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://img.freepik.com/vector-gratis/diseno-camisetas-futbol-sublimacion-diseno-camisetas-deportivas_29096-3437.jpg" alt=""/>
                    </div>
                    <p class="descripcion">POLERA 20%Off</p>
                    <span class="precio">500 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://img.freepik.com/vector-premium/diseno-camisetas-futbol-sublimacion-diseno-camisetas-deportivas_29096-3018.jpg?size=626&ext=jpg" alt=""/>
                    </div>
                    <p class="descripcion">POLERA 60%Off</p>
                    <span class="precio">80 BS</span>
                </div>
            </div> 
        </div>
    
        
      </section> 

    </div>
  )
}
