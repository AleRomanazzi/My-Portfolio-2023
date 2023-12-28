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
                            <ProyectItem srcImage={"../src/assets/projects-images/subsecretaria.png"} title={"Subsecretaría de Jóvenes Emprendedores"} description={"Desarollo de página web oficial de la Subsecretaría de Jóvenes Emprendores (Ministerio de Trabajo, Empleo e Industria) perteneciente a la provincia de La Rioja (Argentina)."} proyectLink={"https://github.com/AleRomanazzi/SubsecretariaDeJovenesEmprendedores"}/>

                            <ProyectItem srcImage={"../src/assets/projects-images/comedor.png"} title={"Comedor estudiantil provincial de La Rioja"} proyectLink={"https://comedorestudiantil-larioja.com/"}
                            description={"Desarrollo de página oficial del comedor estudiantil de la provincia de La Rioja con sistema de reserva diario, manejo de usuarios y automatización de los procesos.Actualmente, tareas de mantenimiento, control de los procesos y backups semanales"}/>

                            <ProyectItem srcImage={"../src/assets/projects-images/agrocommerce.jpeg"} title={"AgroCommerce"} description={"Sistema web que brinda al agricultor la posibilidad de llevar un control y gestión de calidad de su cultivo y tierras, entregando información para lo toma de decisiones, apoyándose en funcionalidades como: Control de suelo (IA): teniendo en cuenta el tipo de cultivo sembrado, la humedad requerida y el suelo de la zona donde se encuentra. Asistencia y prevención de plagas: información sobre qué plagas acechan los cultivos. Información sobre diferentes cultivos (época de sembrado y cosecha). *Alertas climatológicas."} proyectLink={"https://github.com/InsiderUser/AgroCommerce"}/>

                            <ProyectItem srcImage={"../src/assets/projects-images/cc11.PNG"} title={"Calculadora de Bolo Alimenticio para Diabéticos"} description={"Sistema web desarrollado en la cátedra de Seminario de Actualización II, utilizando tecnologías innovadoras y recientes como, ReactPy + MongoDB. El sistema consiste en una calculadora, teniendo en cuenta variables reales, para el cálculo de inyección de insulina recomendado para el ususario. Inspirado en personas que padecen Diabetes, una idea con potencial."} proyectLink={"https://github.com/AleRomanazzi/Calculadora-Bolo"}/>

                            <ProyectItem srcImage={"../src/assets/projects-images/lunar-flight.avif"} title={"Reconstrucción del Juego Lunar Flight"} description={"Juego desarrollado en lenguaje C# utilizando el framework Monogame.net (Visual Basic.NET) para la cátedra de Programación II de la Universidad Nacional de La Rioja."} proyectLink={"https://github.com/AleRomanazzi/Lunar-Flight_MG"}/>

                            <ProyectItem srcImage={"../src/assets/projects-images/portfolio.png"} title={"Mi Portfolio 2023"} description={"Este proyecto es el portfolio en el que usted se encuentra ahora."} proyectLink={"https://github.com/AleRomanazzi/My-Portfolio-2023"}/>

                    </Slider>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}
export default Proyects