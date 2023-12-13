import React from 'react'

export const Natacion = () => {
  return (
    <div>

        <header>
			<h1>Articulos para NATACION</h1>
		</header>
      <section class="contenido">
        <div class="mostrador" id="mostrador">
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVOswkdyBAE2-gsL6rWaIVQ1H2C3ZTkp_JBdq848UPsFptVdm7_9r_SoJlv99Om0ZVKE&usqp=CAU" alt=""/>
                    </div>
                    <p class="descripcion">PRENDA PARA NATACION</p>
                    <span class="precio">300 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/07/26141321/Phelps_RopaDeBano_Mujer_MidBackSolid_SW253060632_03.jpg" alt=""/>
                    </div>
                    <p class="descripcion" id>PRENDA PARA NATACION</p>
                    <span class="precio">800 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://dojiw2m9tvv09.cloudfront.net/69760/product/phelps_ropadeban-o_mujer_midbacksolid_sw2534242_011639.jpg" alt=""/>
                    </div>
                    <p class="descripcion">PRENDA PARA NATACION</p>
                    <span class="precio">600 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://dojiw2m9tvv09.cloudfront.net/69760/product/phelps_ropadeban-o_mujer_compbacksolid_sw2570404_015688.jpg" alt=""/>
                    </div>
                    <p class="descripcion">PRENDA PARA NATACION</p>
                    <span class="precio">800 Bs</span>
                </div>
            </div>
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://dojiw2m9tvv09.cloudfront.net/69760/product/akona-shorty-green-011854.jpg" alt=""/>
                    </div>
                    <p class="descripcion">PRENDA PARA VARON</p>
                    <span class="precio">130 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://contents.mediadecathlon.com/p2280320/k$e5bc28e56a5708e42af97d415fefa2f7/goggles-de-natacion-500-spirit-talla-g-azul-cristales-ahumados.jpg?format=auto&quality=40&f=452x452" alt=""/>
                    </div>
                    <p class="descripcion">BINOCULARES</p>
                    <span class="precio">400 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://kaosport.com/cdn/shop/products/SPE-70984-75_1024x1024.jpg?v=1594672068" alt=""/>
                    </div>
                    <p class="descripcion">SOMBRERO</p>
                    <span class="precio">500 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://imagenes.elpais.com/resizer/WszO0zqk4FXvxuVAidRbrWlJl-o=/414x414/cloudfront-eu-central-1.images.arcpublishing.com/prisa/WIT732H6HBBX5JZEK7BCXDPM2E.jpg" alt=""/>
                    </div>
                    <p class="descripcion">SOMBRERO</p>
                    <span class="precio">80 BS</span>
                </div>
            </div> 
            
        </div>
    
        
      </section> 

    </div>
  )
}
