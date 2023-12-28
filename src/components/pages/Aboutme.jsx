import React from "react";
import ThemeContext from "../_themeContext";
import { useState } from "react";

const Aboutme = () =>{
    const [Theme, setTheme] = useState('dark')

    return(
        <ThemeContext.Provider value={Theme}>
            <div className={`container ${Theme}`}>
                <h1>AboutMe</h1>
            </div>
        </ThemeContext.Provider>
    )
}

export default Aboutme;