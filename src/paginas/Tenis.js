import React from 'react'
import './tenisito.css'
export const Tenis = () => {
  return (
    <div>
        <header>
			<h1>Catalogo de Tenis deportivos</h1>
		</header>
      <section class="contenido">
        <div class="mostrador" id="mostrador">
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/1bb96f3b-ea2b-422c-ab0d-49f06c3c54ef/calzado-air-force-1-gtx-GpZp3J.png" alt=""/>
                    </div>
                    <p class="descripcion">NIKE AIR 97</p>
                    <span class="precio">1.300 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://grailify.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeTdaQXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b26e0e417ccdc260121833771e4a8bbd20f9fc/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDSUFOcEFpQURPZ3h4ZFdGc2FYUjVhVjg9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--ea1da7d273fb4fac2f3bf305727b365ca4d6c39a/Image%200" alt=""/>
                    </div>
                    <p class="descripcion" id>NIKE RUNNING </p>
                    <span class="precio">1.800 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://down-tw.img.susercontent.com/file/sg-11134201-7qvfb-lhwqjn1x67ju60" alt=""/>
                    </div>
                    <p class="descripcion">NIKE WINFLO 8
                    </p>
                    <span class="precio">3.600 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://artwalk.vteximg.com.br/arquivos/ids/419064-1000-1000/DQ597-3-200-3.jpg?v=638252054002770000" alt=""/>
                    </div>
                    <p class="descripcion">NIKE LOW-TOP</p>
                    <span class="precio">1.800 Bs</span>
                </div>
            </div>
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://exclusiveshopperu.com/wp-content/uploads/Nike-Air-Force-1-Craft-Beige-Gum.jpg" alt=""/>
                    </div>
                    <p class="descripcion">NIKE BLAZER 97</p>
                    <span class="precio">1.130 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://cdn.shopify.com/s/files/1/0282/7501/5759/products/2_2e4c1f74-db5d-493f-aaff-afe33ae7d202_1200x1200.jpg" alt=""/>
                    </div>
                    <p class="descripcion">NIKE ESENTIAL</p>
                    <span class="precio">2.000 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLZJy6b18MrAdtetligYPNFHl_z-m1FNNt_HSVjELTY19zVreqlA2twRQ7oq2tp_uoao&usqp=CAU" alt=""/>
                    </div>
                    <p class="descripcion">NIKE AIR ZOOM</p>
                    <span class="precio">2.500 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://secure-images.nike.com/is/image/DotCom/DD1503_101/?$NIKE_PWP_GRAY$&wid=420&hei=420" alt=""/>
                    </div>
                    <p class="descripcion">NIKE TERRA KING</p>
                    <span class="precio">1.800 BS</span>
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





        