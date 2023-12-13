import React from 'react'
import './seccion.css';
function Seccion(){
    return(
        <div className='seccion1'>
					
			<section id="inicio" class="inicio">
				<div class="contenido-seccion">
					<div class="info">
						<h2>MUNDO<span class="txtRojo"> DEPOTIVO</span></h2>
						<p>Tenemos todo tipo de articulos deportivos!</p>
						
					</div>

				</div>
			</section>

			<section id="nosotros" class="nosotros">
				<div class="fila">
					<div class="col">
						<img src="https://s3.amazonaws.com/nikeinc/assets/91936/af1-chicago-no-cuts-no-glory-2_native_600.jpg" alt=""/>
					</div>
					<div class="col">
						<div class="contenedor-titulo">
							<div class="numero">
								01
							</div>
							<div class="info">
								<span class="frase">LA MEJOR EXPERIENCIA AL</span>
								<h2> CLIENTE</h2>
							</div>
						</div>
						<p class="p-especial">Tendras la mejor experiencia al cliente.</p>
						<p>En nuestra tienda, la satisfacción del cliente es nuestra prioridad. Nos enorgullece ofrecer la mejor experiencia de compra posible, desde un servicio amigable y experto hasta productos de alta calidad. Nuestro compromiso con la excelencia se refleja en cada interacción, garantizando que cada cliente se sienta valorado y atendido. Descubra la diferencia de una experiencia de compra excepcional en nuestra tienda, donde su comodidad y felicidad son nuestra mayor recompensa. ¡Bienvenido a una experiencia única y personalizada que supera sus expectativas!</p>
					</div>
				</div>
				<hr/>
				<div class="fila-nosotros">
					<div class="col1">
						<span class="frase">
							<span class="txtRojo">ENTRENA</span> DIFERENTE
						</span>
						<h2>ENTRENA <span class="txtRojo">GRATIS</span> HOY!</h2>
					</div>
					<div class="col2">
						<button>PASE LIBRE</button>
					</div>
				</div>
			</section>

			<section class="servicios" id="servicios">
				<div class="contenido-seccion">
					<div class="fila">
						<div class="col">
							<div class="contenedor-titulo">
								<div class="numero">
									02
								</div>
								<div class="info">
									<span class="frase">LA MEJOR EXPERIENCIA</span>
									<h2>SERVICIOS</h2>
								</div>
							</div>
							<p class="p-especial">En nuestra tienda muchos productos como:</p>
							<p>Ofrecemos una amplia variedad de productos que seguramente satisfarán todas sus necesidades y deseos. Desde la última moda en prendas de vestir hasta los más innovadores dispositivos electrónicos, nuestro catálogo abarca una gama diversa de artículos de alta calidad. Sumérjase en la elegancia con nuestras colecciones de ropa de moda, explore la tecnología de vanguardia con nuestros gadgets y accesorios electrónicos, o encuentre el regalo perfecto entre nuestra selección de productos exclusivos. Con una atención meticulosa a la calidad y la tendencia, estamos comprometidos a brindarle una experiencia de compra inigualable. ¡Descubra todo lo que tenemos para ofrecer y déjenos hacer realidad sus deseos de compra!</p>
						</div>
						<div class="col">
							<img src="https://img.planetafobal.com/2019/01/balon-adidas-uefa-champions-league-final-madrid-2019-ds-600x432.jpg" alt=""/>
						</div>
					</div>
				</div>
				<div class="info-servicios">
					<table>
						<tr>
							<td>
								<i class="fa-solid fa-person-walking"></i>
								<h3><span class="txtRojo">MODELOS </span> de TENIS DEPORTIVOS</h3>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis.</p>
							</td>
							<td>
								<i class="fa-solid fa-dumbbell"></i>
								<h3><span class="txtRojo">TIPOS </span> de PELOTAS DEPORTIVAS</h3>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis.</p>
							</td>
							<td>
								<i class="fa-solid fa-mitten"></i>
								<h3><span class="txtRojo">EQUIPO </span> de BUSEO</h3>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis.</p>
							</td>
						</tr>
						<tr>
							<td>
								<i class="fa-solid fa-clock"></i>
								<h3><span class="txtRojo">VARIEDAD </span> de VICIBLETAS</h3>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis.</p>
							</td>
							<td>
								<i class="fa-solid fa-heart-circle-bolt"></i>
								<h3><span class="txtRojo">ARTICULOS PARA</span> eL GYM</h3>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis.</p>
							</td>
							<td>
								<i class="fa-solid fa-bicycle"></i>
								<h3><span class="txtRojo">VARIEDAD </span> de CAMISETAS DEPORTIVAS</h3>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis.</p>
							</td>
						</tr>
					</table>
        </div>
    </section>

    <section class="contacto" id="contacto">
        <div class="contenido-seccion">
            <div class="contenedor-titulo">
                <div class="numero">
                    03
                </div>
                <div class="info">
                    <span class="frase">LA MEJOR EXPERIENCIA</span>
                    <h2>CONTACTANOS</h2>
                </div>
            </div>
            <div class="fila">
                <div class="col">
                    <input type="text" placeholder="Ingrese Email"/>
                </div>
                <div class="col">
                    <input type="text" placeholder="Ingrese Nombre"/>
                </div>
            </div>
            <div class="mensaje">
                <textarea name="" id="" cols="30" rows="10" placeholder="Ingresa el Mensaje"></textarea>
                <button>Enviar Mensaje</button>
            </div>
            <div class="fila-datos">
                <div class="col">
                    <i class="fa-solid fa-location-dot"></i>
                    REALIZADO POR:
                </div>
                <div class="col">
                    <i class="fa-solid fa-phone"></i>
                    Jose Alfredo Alarcon Perez
                </div>
                <div class="col">
                    <i class="fa-regular fa-clock"></i>
                    Lunes a Sábado, 8:00horas a 24:00horas
                </div>
            </div>
        </div>

    </section>
		</div>

		
    )
}

export default Seccion

