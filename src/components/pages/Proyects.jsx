import React, { useState } from "react";
import ThemeContext from "../_themeContext";
import { Link } from 'react-router-dom'
import ProyectItem from "../_proyectItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Proyects = () => {
    const [Theme, setTheme] = useState('dark')
    // Configuración del slider
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return(
        <ThemeContext.Provider value={Theme}>
            <div className={`container ${Theme}`}>
                <div className="backPage">
                    <Link to='/' className="linkBack">
                        <img className="imgBackPage" src='../src/assets/flecha.png'/>
                        <p>Volver</p>
                    </Link>
                </div>
                <div className="proyects">
                    <h1 className="contactFormTitle">PROYECTOS</h1>
                    <Slider {...sliderSettings}>
                            <ProyectItem srcImage={"../src/assets/subsecretaria.png"} title={"Subsecretaría de Jóvenes Emprendedores"} description={"Primer proyecto hecho con HTML, CSS."} proyectLink={"SubsecretariaDeJovenesEmprendedores"}/>
                            <ProyectItem srcImage={"../src/assets/comedor.png"} title={"Comedor estudiantil provincial"} proyectLink={"cc11"}/>
                            <ProyectItem srcImage={"../src/assets/awsss.png"} title={"CC11 Cosmeticos con Magia"} description={"Primer proyecto hecho con HTML, CSS."} proyectLink={"cc11"}/>
                            <ProyectItem srcImage={"../src/assets/cc11.PNG"} title={"CC11 Cosmeticos con Magia"} description={"Primer proyecto hecho con HTML, CSS."} proyectLink={"cc11"}/>
                    </Slider>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default Proyects