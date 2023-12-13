import React from 'react'
import './ropita.css'
export const Ropa = () => {
  return (
    <div>
       <header>
			  <h1>Catalogo de Ropa deportiva</h1>
		  </header>
      <section class="contenido">
        <div class="mostrador" id="mostrador">
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3b00a83-0888-4137-8baf-fdf84ec374ef/sudadera-con-gorro-sin-cierre-sportswear-club-fleece-Gw4Nwq.png" alt=""/>
                    </div>
                    <p class="descripcion">CANGURO NIKE</p>
                    <span class="precio">300 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0aa2f844-3cd1-49b4-ae38-94b0f649f743/joggers-sportswear-club-fleece-talla-grande-SCXgK1.png" alt=""/>
                    </div>
                    <p class="descripcion" id>JOGERS NIKE ORIGINAL</p>
                    <span class="precio">800 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a070ce16-2c56-4080-9672-4fdbc0a5bc9b/camiseta-de-tirantes-cropped-pro-dri-fit-jSJSkH.png" alt=""/>
                    </div>
                    <p class="descripcion">CONJUTO DE MUJER NIKE
                    </p>
                    <span class="precio">750 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d09f097e-1b9a-40f2-ba8c-eb6e830527e1/camiseta-de-tirantes-de-entrenamiento-cropped-pro-dri-fit-MBd3NF.png" alt=""/>
                    </div>
                    <p class="descripcion">CONJUTO NEGRO NIKE</p>
                    <span class="precio">820 Bs</span>
                </div>
            </div>
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/y0pys5jfozblhxlsqzxq/dri-fit-camiseta-deportiva-rMXj0g.png" alt=""/>
                    </div>
                    <p class="descripcion">NIKE BLAZER NEGRO </p>
                    <span class="precio">230 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e19b775-aa46-486d-a85c-a232bdcc4944/playera-versátil-de-manga-corta-primary-XK77j1.png" alt=""/>
                    </div>
                    <p class="descripcion">POLERA ESENTIAL</p>
                    <span class="precio">300 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vdo8oxupaaxafkbgnqon/prenda-para-la-parte-superior-de-manga-corta-pro-CTKmcB.png" alt=""/>
                    </div>
                    <p class="descripcion">POLERA NIKE ZOOM</p>
                    <span class="precio">100 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://i.ebayimg.com/thumbs/images/g/~TcAAOSwxclk8un9/s-l640.jpg" alt=""/>
                    </div>
                    <p class="descripcion">CONJUTO DE MUJER NIKE</p>
                    <span class="precio">850 BS</span>
                </div>
            </div> 
        </div>

        <div class="seleccion" id="seleccion">
            <div class="cerrar" onclick="cerrar()">
                &#x2715
            </div>
            <div class="info">
                <img src="img/1.png" alt="" id="img"/>
                <h2 id="modelo">NIKE MODEL 1</h2>
                <p id="descripcion">Descripción Modelo 1</p>

                <span class="precio" id="precio">1.130 Bs</span>

                <div class="fila">
                    <div class="size">
                        <label for="">SIZE</label>
                        <select name="" id="">
                            <option value="">40</option>
                            <option value="">42</option>
                            <option value="">44</option>
                            <option value="">46</option>
                        </select>
                    </div>
                    <button>AGREGAR AL CARRITO</button>
                </div>
            </div>
        </div>
      </section>
      

    </div>
  )
}
