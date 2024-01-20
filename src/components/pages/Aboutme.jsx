import React from "react";
import ThemeContext from "../_themeContext";
import { useState } from "react";
import { Link } from "react-router-dom";
const Aboutme = () =>{
    const [Theme, setTheme] = useState('dark')

    return(
        <ThemeContext.Provider value={Theme}>
            <div className={`container ${Theme}`}>
                <h1>AboutMe</h1>
                <div className="backPage">
                    <Link to='/' className="linkBack">
                        <img className="imgBackPage" src='../src/assets/flecha.png'/>
                        <p>Volver</p>
                    </Link>
                </div>
            </div>
        </ThemeContext.Provider>
    )
}

export default Aboutme;