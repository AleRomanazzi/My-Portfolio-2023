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
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
                <h1 className="contactFormTitle">Proyectos</h1>
                <Slider {...sliderSettings}>
                    <ProyectItem srcImage={'../../src/assets/cc11.PNG'} title={'CC11 Cosmeticos con Magia'} description={'Pagina web fronted creada con HTML, CSS.'} proyectLink={'CC11-Cosmeticos-con-Magia'}/>
                </Slider>
            </div>
        </ThemeContext.Provider>
    )
}

export default Proyects