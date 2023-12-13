import React from 'react'

import './estilos.css'
export const Gimnacio = () => {
  return (
    <div>

        <header>
			<h1>Articulos para Gimnacio</h1>
		</header>
      <section class="contenido">
        <div class="mostrador" id="mostrador">
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://cdn.globalso.com/mndfitnessequip/475.png" alt=""/>
                    </div>
                    <p class="descripcion">PESA DE 4K</p>
                    <span class="precio">399.99 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://sportechfitness.com/cdn/shop/products/KBPO6_1800x1800.webp?v=1652375825" alt=""/>
                    </div>
                    <p class="descripcion" id>PESA DE 5K</p>
                    <span class="precio">899.99 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://image.made-in-china.com/202f0j00IwPishnkElpG/Hot-Sale-Gym-Equipment-Fitness-Training-Weight-Lifting-Accessories-Squat-Training-Single-Pipe-Accessory.webp" alt=""/>
                    </div>
                    <p class="descripcion">MANCUERNA</p>
                    <span class="precio">59.99 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://sc04.alicdn.com/kf/He64e97d62ab24ab89f6d3ab1761c00d07.jpg" alt=""/>
                    </div>
                    <p class="descripcion">MANCUERNA</p>
                    <span class="precio">99.99 Bs</span>
                </div>
            </div>
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://p.globalsources.com/IMAGES/PDT/B1191234576/Paso-aerobico.jpg" alt=""/>
                    </div>
                    <p class="descripcion">MIQUINA PARA ESTIRAMIENTOS</p>
                    <span class="precio">1.399.99 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://image.made-in-china.com/2f0j00gRrftiOqaJzv/Hot-Selling-Gym-Equipment-Leg-Press-Body-Building-Commercial-Strength-Fitness-Equipment.webp" alt=""/>
                    </div>
                    <p class="descripcion">MAQUINA PARA HOMBROS</p>
                    <span class="precio">1.499.99 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://image.made-in-china.com/202f0j00WsmUbVELbuok/Commercial-Gym-Equipment-Fitness-Machine-Strength-Machine-45-Degree-Leg-Press.webp" alt=""/>
                    </div>
                    <p class="descripcion">MAQUINA PARA PIERNAS</p>
                    <span class="precio">1.599.99. Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://d29tjgzzzhtw92.cloudfront.net/images/picture_59d5262470a60.png" alt=""/>
                    </div>
                    <p class="descripcion">COLCHON PARA EJERCICIOS</p>
                    <span class="precio">199.99 BS</span>
                </div>
            </div> 
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://m.media-amazon.com/images/I/717wa5hCLcL._AC_UF894,1000_QL80_.jpg" alt=""/>
                    </div>
                    <p class="descripcion">MANCUERNAS</p>
                    <span class="precio">139.99 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://d2r9epyceweg5n.cloudfront.net/stores/001/073/061/products/v20series1-52fcf30164087bdfd915872635272452-480-0.jpg" alt=""/>
                    </div>
                    <p class="descripcion">CAMINADORA</p>
                    <span class="precio">499.99 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://image.made-in-china.com/202f0j00fMGURFwDbhbC/Commercial-Treadmill-Gym-Fitness-Equipment-Running-Machine-Manual-Treadmill.jpg" alt=""/>
                    </div>
                    <p class="descripcion">CAMINADORA</p>
                    <span class="precio">599.99 Bs</span>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://chelosports.com/cdn/shop/products/macuernagoma3_800x.png?v=1669759728" alt=""/>
                    </div>
                    <p class="descripcion">MANCUERNAS</p>
                    <span class="precio">349.99 BS</span>
                </div>
            </div> 
        </div>
    
        
      </section>

    </div>
  )
}
