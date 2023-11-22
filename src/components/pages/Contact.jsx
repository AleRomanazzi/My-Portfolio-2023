import React, { useState, useEffect, useRef } from "react";
import ThemeContext from "../_themeContext";
import SwitchTheme from "../_switchTheme";
import InputContact from '../_input'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import ModalMessage from "../_modalMessage";

const Contact = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [Theme, setTheme] = useState('dark')
    const [showModal, setShowModal] = useState(false);
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        if(!form.current){
            console.error('Form no encontrado.');
            return
        }
  const nombreField = form.current.nombre;
  const asuntoField = form.current.asunto;
  const emailField = form.current.email;
  const mensajeField = form.current.mensaje;

  if (!nombreField || !asuntoField || !emailField || !mensajeField) {
    console.error('Alguno de los campos del formulario no encontrado.');
    return;
  }

  const nombre = nombreField.value;
  const asunto = asuntoField.value;
  const email = emailField.value;
  const mensaje = mensajeField.value;

  console.log('Nombre:', nombre);
  console.log('Asunto:', asunto);
  console.log('Email:', email);
  console.log('Mensaje:', mensaje);
    
        emailjs.sendForm('service_ewdu4lr', 'template_1mkn6vh', form.current, '2LIjvHYEovGyhADvV')
          .then((result) => {
              console.log(result.text);
              console.log("Message sent");
              setShowModal(true);
          }, (error) => {
              console.log(error.text);
          });
    }

    const closeModal = () => {
        setShowModal(false);
      };
    

    return(
        <ThemeContext.Provider value={Theme}>
            <div className={`container ${Theme}` }>
                <div style={{
                    display:'flex',
                    flexDirection: 'row',
                    flexWrap: 'no-wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontFamily: '"Baloo 2"',
                    position: "relative"
                }}>
                    <Link to='/' style={
                        {color: 'white', 
                        textDecoration: 'none', 
                        display: "flex", 
                        flexDirection: "row", 
                        fontSize: "20px", 
                        position: "fixed",
                        top: "3rem",
                        left: "1.5rem"
                        }}>
                        <img style={{width: '23px', marginRight: "8px"}} src='../src/assets/flecha.png'/>
                        <p>Volver</p>
                    </Link>
                    
                </div>
                <form style={{
                    padding: '4rem 25rem',
                    border: '2px solid rgba(84, 60, 90, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                 ref={form}
                 onSubmit={sendEmail}
                 method="post">
                    <div style={{ display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                        <h1 style={{fontFamily: '"Josefin Sans"',color:"white"}}>CONTACTO</h1>
                        <InputContact type={"text"} content={"Nombre"} />
                        <InputContact type={"text"} content={"Asunto"} />
                        <InputContact type={"e-mail"} content={"Email"}/>
                        <textarea 
                        style={{
                            fontSize: "20px",
                            fontFamily: '"Baloo 2"',
                            padding: "2px",
                            backgroundColor: "transparent",
                            color: "white",
                            margin: "1rem 0",
                            border: '1px solid rgba(84, 60, 90, 1)',
                            width: "25rem",
                            height: "10rem"}} 
                            name="mensaje" 
                            placeholder="Escriba su mensaje"
                            id="mensaje"
                            ></textarea>
                        <input style={{
                            color: "white",
                            backgroundColor: "#543C5A",
                            fontFamily: '"Baloo 2"',
                            cursor: "pointer",
                            width: "12rem",
                            height: "3rem",
                            borderRadius: 10,
                            boxShadow: isHovered ? '2px 2px 2px #43294A' :'6px 6px 6px #43294A',
                            border: "none",
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            transform: isHovered ? 'translateY(2px) translateX(2px)' : 'translateY(0)',
                        }} 
                        onMouseEnter={()=>setIsHovered(true)}
                        onMouseLeave={()=> setIsHovered(false)}
                        type="submit" value={"Enviar mensaje"} /> 
                    </div>        
                </form>
                {showModal && <ModalMessage message="¡Mensaje enviado!" onClose={closeModal} />}
            </div>
        </ThemeContext.Provider>
    )
}

export default Contact