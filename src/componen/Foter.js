import React from 'react'
import './foter.css';
function Foter(){
    return(
        <div className='foter'>
            <footer class="pie-pagina">
                <div class="grupo-1">
                    <div class="box">
                        <figure>
                            <a href="#">
                                <img src="https://i.pinimg.com/originals/e7/c2/c7/e7c2c78cfe6d190d63fbbff227deeb77.jpg" alt="Logo de SLee Dw"/>
                            </a>
                        </figure>
                    </div>
                    <div class="box">
                        <h2>MI INFORMACION</h2>
                        <p>MONBRE: Jose Alfredo Alarcon Perez</p>
                        <p>CI: 12989145lp</p>
                        <p>PARALELO: INF122 "D"</p>
                    </div>
                    <div class="box">
                        <h2>SIGUENOS</h2>
                        <div class="red-social">
                            <img src="https://st.depositphotos.com/47845802/57460/v/450/depositphotos_574607690-stock-illustration-black-rounded-vector-icons-facebook.jpg" alt="" height="50px"/>
                        </div>
                    </div>
                    
                </div>
                <div class="grupo-2">
                    <small>&copy; 2023 <b>PROYECYO DE 122</b> - Todos los Derechos Reservados.</small>
                </div>
            </footer>
        </div>
    )
}
export default Foter






