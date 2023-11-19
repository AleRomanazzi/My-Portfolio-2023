import Button from "./components/_button"
import Title from "./components/_title"
import Subtitle from "./components/_subtitle"
import Switch from "./components/_switch"
import ThemeContext from "./components/_themeContext"
import { useState } from "react"

function App() {
  
  const [Theme, setTheme] = useState('dark')
  console.log(Theme);

  return (
    <ThemeContext.Provider>
      <div className={`container ${Theme}`} >
          <Switch changeTheme={setTheme}/>
          <Title/>
          <Subtitle id={`container ${Theme}`}/>
          <div>
            <div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <Button text={"Descargar CV"}/>      
                <Button text={"Proyectos"}/>     
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <Button text={"Sobre mí"}/>      
                <Button text={"Contáctame"}/>
              </div>
              
            </div>
          </div>
      </div>  
    </ThemeContext.Provider>
  )
}

export default App
