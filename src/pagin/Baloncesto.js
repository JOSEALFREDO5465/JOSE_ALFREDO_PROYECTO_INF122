import React from 'react'

export const Baloncesto = () => {
  return (
    <div>

    <header>
			<h1>Articulos de Baloncesto</h1>
		</header>
      <section class="contenido">
        <div class="mostrador" id="mostrador">
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://contents.mediadecathlon.com/p2033217/k$00f1d357be4fc87afe8270707d6ee34a/tenis-de-baloncesto-adulto-hslashm-nivel-iniciacion-protect-120.jpg?format=auto&quality=40&f=452x452" alt=""/>
                    </div>
                    <p class="descripcion">TENIS PARA BALONCESTO</p>
                    <span class="precio">300 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://contents.mediadecathlon.com/p2154216/k$b57b5a81814e4638a74e2fb224f1ade2/tenis-de-baloncesto-tarmak-fast-500-adulto-negro.jpg?format=auto&quality=40&f=452x452" alt=""/>
                    </div>
                    <p class="descripcion" id>TENIS PARA BALONCESTO</p>
                    <span class="precio">800 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9e68f2a5-adfe-4098-bb9c-fab78b2bec16/air-jordan-xxxviii-fundamental-zapatillas-de-baloncesto-VBbxNb.png" alt=""/>
                    </div>
                    <p class="descripcion">TENIS PARA BALONCESTO</p>
                    <span class="precio">600 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://contents.mediadecathlon.com/p2142959/k$96aefafd07999c3c7ddb2c08867b55d2/tenis-de-baloncesto-tarmak-ss500h-ninos-azul-blanco.jpg?format=auto&quality=40&f=800x800" alt=""/>
                    </div>
                    <p class="descripcion">TENIS PARA BALONCESTO</p>
                    <span class="precio">800 Bs</span>
                </div>
            </div>
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://contents.mediadecathlon.com/p1550117/k$fd664c532d08d4866f7a9f2c78d25ec5/sq/balon-de-baloncesto-talla-7-tarmak-bt100-marron-avellana.jpg?format=auto&f=800x0" alt=""/>
                    </div>
                    <p class="descripcion">VALON 50%Off</p>
                    <span class="precio">130 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://resize.sprintercdn.com/f/261x261/products/57b3ed1b89a84afa9551b65b744049c2/balon-baloncesto-molten-bg4500_57b3ed1b89a84afa9551b65b744049c2_20507693.jpg?w=384&q=75" alt=""/>
                    </div>
                    <p class="descripcion">VALON 30%Off</p>
                    <span class="precio">400 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT49n_dMkZ_bH3B9ghyZCBzoZTqUwPr2KgciBl9yOdvNBp_ott17xLW_FzMwQmxl_n4jsc&usqp=CAU" alt=""/>
                    </div>
                    <p class="descripcion">VALON 20%Off</p>
                    <span class="precio">500 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBK4eej5XAXeePZnaKuN9flKA3UBlEIMrAYfvX9RvmPJCuZDEUoCz9690q8nDuvGOdb10&usqp=CAU" alt=""/>
                    </div>
                    <p class="descripcion">VALON 60%Off</p>
                    <span class="precio">80 BS</span>
                </div>
            </div> 
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://img.freepik.com/vector-gratis/patron-camiseta-baloncesto-degradado_23-2150305309.jpg" alt=""/>
                    </div>
                    <p class="descripcion">POLERA EN 50%Off</p>
                    <span class="precio">130 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://img.freepik.com/vector-gratis/patron-camiseta-baloncesto-degradado_23-2150305312.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702339200&semt=ais" alt=""/>
                    </div>
                    <p class="descripcion">POLERA EN 30%Off</p>
                    <span class="precio">400 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://i.pinimg.com/236x/f8/c3/93/f8c3938da4c3248cfae2f4adb54e515d.jpg" alt=""/>
                    </div>
                    <p class="descripcion">POLERA 20%Off</p>
                    <span class="precio">500 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQy0aOTgkdsmVPwQHvlT5bkGZzgxPGO6sGB3q0DdKRXeOLvpWx-zdVYCLUFbyUsAwtXA&usqp=CAU" alt=""/>
                    </div>
                    <p class="descripcion">POLERA NEGRA</p>
                    <span class="precio">80.99 BS</span>
                </div>
            </div> 
        </div>
    
        
      </section> 

    </div>
  )
}
