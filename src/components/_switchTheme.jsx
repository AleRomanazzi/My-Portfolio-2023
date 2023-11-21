import React, { createContext, useContext } from "react";
import ThemeContext from "./_themeContext";

function SwitchTheme({changeTheme}){

    const darkMode = useContext(ThemeContext)
    
    return(
        <div style={{position: 'absolute', top:'0', right:'0', alignSelf:'end', justifySelf:'end', marginRight: '1rem'
    }}>
            <input type="checkbox" id="switch" defaultChecked={true} onChange={(e)=>{if(e.currentTarget.checked ){
                changeTheme("dark")
            }
            else{
                changeTheme("light")
                }
             }
            } />
            <label htmlFor="switch">Toggle</label>
        </div>
    )
}

export default SwitchTheme