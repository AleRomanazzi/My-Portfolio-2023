import React from "react";
import ThemeContext from "../_themeContext";
import SwitchTheme from "../_switchTheme";
import { useState } from 'react'
import InputContact from '../_input'
import Button from "../_button";

const Contact = () => {

    const [Theme, setTheme] = useState('dark')

    return(
        <ThemeContext.Provider value={Theme}>
            <div className={`container ${Theme}` }>
                <form style={{
                    padding: '4rem 25rem',
                    border: '2px solid rgba(84, 60, 90, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} action="" method="post">
                    <div style={{ display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                        <h1 style={{fontFamily: '"Josefin Sans"',color:"white"}}>CONTACTO</h1>
                        <InputContact type={"text"} content={"Nombre"} />
                        <InputContact type={"text"} content={"Apellido"} />
                        <InputContact type={"e-mail"} content={"Email"} />
                        <textarea 
                        style={{
                            fontFamily: '"Baloo 2"',
                            padding: "2px",
                            backgroundColor: "transparent",
                            color: "white",
                            margin: "1rem 0",
                            border: '1px solid rgba(84, 60, 90, 1)',
                            width: "25rem",
                            height: "10rem"}} 
                            name="Mensaje" 
                            placeholder="Escriba su mensaje"></textarea>
                        <Button text={"Enviar Mensaje"} /> 
                    </div>        
                </form>
                <div>
                    
                </div>
            </div>
        </ThemeContext.Provider>
    )
}

export default Contact