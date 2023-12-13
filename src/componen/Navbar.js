
import {useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom'
function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState()
  useEffect(()=>{
    const onScroll = () =>{
      if(window.scrollY > 50){
        setScrolled(true);
      }else{
        setScrolled(true);
      }
    }
    window.addEventListener("scroll",onScroll)
    return ()=>window.removeEventListener("scrolled", onScroll);
  },[])
    const onUpdateActiveLink = (value) =>{
      setActiveLink(value);
    }
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" href="#" to='Inicio' >Inicio</Link>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            
            <li class="nav-item">
              <Link class="nav-link" href="#" to='Ropa'>Ropa deportiva</Link>
            </li>
            <li class="nav-item"> 
              <Link class="nav-link" href="#" to='Tenis' >Tenis deportivos</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#" to='Promociones'>Promociones</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#" to='Nosotros'>Creditos</Link>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                catalogo
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link class="dropdown-item" href="#" to='Gimnacio'>Gimnacio</Link></li>
                <li><Link class="dropdown-item" href="#" to='Futbol'>Futbol</Link></li>
                <li><Link class="dropdown-item" href="#" to='Baloncesto'>Baloncesto</Link></li>
                <li><Link class="dropdown-item" href="#" to='Voleibol'>Voleibol</Link></li>
                <li><Link class="dropdown-item" href="#" to='Natacion'>Natacion</Link></li>
                <li><Link class="dropdown-item" href="#" to='Ciclismo'>Ciclismo</Link></li>
              </ul>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar