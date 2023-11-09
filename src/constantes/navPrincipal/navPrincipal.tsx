import {  Link } from "react-router-dom";
import { Nav_NavPrin, HeaderNavPrin, DivNavPrin, Article_NavPrin, ImageNavPrin, UlNavPrin, LiNavPrin, LinkCotizaNavPrin, Image2NavPrin, Div2NavPrin, ParrafoNavPrin, h1NavPrin } from "./navPrinEstilos"
import './nav2PrincEstilos.css'
import { useState } from 'react';
export const NavPrincipal = ({ nombrePagina }: { nombrePagina: string }) => {


    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const className = isHovered ? 'expansion' : ' '; // Aplicar la clase de expansión cuando el mouse está sobre el elemento



    return (

        <div style={DivNavPrin}>
            <header style={HeaderNavPrin}>
                naciomos para reinventar el futuro
            </header>
           
            <nav style={Nav_NavPrin}>   
                <div>
                <img style={ImageNavPrin} src="../public/logoEmpresa.jpeg" />
                </div>
                
                <ul style={UlNavPrin}>
                    <li style={{...LiNavPrin, paddingLeft: "30%"}}><Link to="/inicio">inicio</Link> </li>
                    <li style={LiNavPrin}><Link to="/servicios">Servicios</Link></li>
                    <li style={LiNavPrin}><Link to="/productos">Productos</Link></li>
                    <li style={LiNavPrin}><Link to="/nosotros">Nosotros</Link></li>
                    <li style={LiNavPrin}><Link to="/contactenos">Contactenos</Link></li>

                </ul>
            </nav>
            <article style={Article_NavPrin}>
                <img style={Image2NavPrin}

                    className={className}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                
                src="../public/logoPortada.jpg"/>
                <div style={Div2NavPrin}>
                    <h1 className="animated-element" style={h1NavPrin}>{nombrePagina} </h1>
                    <p style={ParrafoNavPrin} >La IMAGEN y la organización 
                        es un atributo especial que toda empresa debe poseer,
                        para lo cual Graficas Chimborazo es tú mejor opción</p>
                        <div className="animated-element" ><Link to="www.facebook.com" style = { LinkCotizaNavPrin }  >cotiza gratis</Link></div>
                    
                </div>
            </article>
        </div>
        
    )
}

