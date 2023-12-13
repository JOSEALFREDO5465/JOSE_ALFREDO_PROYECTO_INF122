import React from 'react'

export const Promociones = () => {
  return (
    <div>

      <header>
			  <h1>Articulos que estan en REMATE</h1>
		  </header>
      <section class="contenido">
        <div class="mostrador" id="mostrador">
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwQgMDYTe3ip_8eiIi_vlGHw8gNRDpRWcJwqlV0QXGtz9AY6-yi_Ryj45oDLWF60kEV54&usqp=CAU" alt=""/>
                    </div>
                    <p class="descripcion">POLERA DEPORTIVA</p>
                    <span class="precio">300 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2vmx-y9dpGt-2DsSBeKgixWQGhXTXyizZmTvUH3sATyXWBQHoAWj6BZOV-l2obw8_OI&usqp=CAU" alt=""/>
                    </div>
                    <p class="descripcion" id>POLERA DEPORTIVA</p>
                    <span class="precio">800 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwmzujDjwIV1ccthEi6LednjrCpLAYuQ9NN1hWwxvjVSSRe7KfF0q8sN66zSNl-Zn8Knw&usqp=CAU" alt=""/>
                    </div>
                    <p class="descripcion">POLERA DEPORTIVA</p>
                    <span class="precio">600 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyVVQgSB1f2jpD2Rwg4RsQHMxVAq7zuq7CfGfUkyQPzF9CNWn3yCZRv64KorGgw8zCx0&usqp=CAU" alt=""/>
                    </div>
                    <p class="descripcion">POLERA DEPORTIVA</p>
                    <span class="precio">800 Bs</span>
                </div>
            </div>
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://w7.pngwing.com/pngs/754/495/png-transparent-paris-saint-germain-f-c-football-nike-sport-ballon-foot-sporting-goods-sports-equipment-clothing-accessories.png" alt=""/>
                    </div>
                    <p class="descripcion">VALON 50%Off</p>
                    <span class="precio">130 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://w7.pngwing.com/pngs/131/679/png-transparent-2018-world-cup-football-nike-sport-ball-sport-sporting-goods-sports-equipment.png" alt=""/>
                    </div>
                    <p class="descripcion">VALON 30%Off</p>
                    <span class="precio">400 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://e7.pngegg.com/pngimages/214/442/png-clipart-football-sporting-goods-ball-sport-sports-equipment-thumbnail.png" alt=""/>
                    </div>
                    <p class="descripcion">VALON 20%Off</p>
                    <span class="precio">500 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://w7.pngwing.com/pngs/802/169/png-transparent-football-nike-futsal-sporting-goods-ball-sport-sporting-goods-sports-equipment.png" alt=""/>
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

