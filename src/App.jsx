import Button from "./components/_button"
import Title from "./components/_title"
import Subtitle from "./components/_subtitle"
import SwitchTheme from "./components/_switchTheme"
import ThemeContext from "./components/_themeContext"
import { useState } from "react"

function App() {
  
  const [Theme, setTheme] = useState('dark')

  const handleDownloadCV = (openInNewTab) => {
        // Ruta relativa al archivo en la carpeta "public"
        const filePath = '/src/assets/my-cv/CV_RomanazziAlejandro.pdf';
  
        // Construir la URL completa del archivo
        const fileUrl = window.location.origin + filePath;
      
        if (openInNewTab) {
          // Abrir el PDF en una nueva pestaña
          window.open(fileUrl, '_blank');
        } else {
          // Descargar el PDF
          const tempLink = document.createElement('a');
          tempLink.href = fileUrl;
          tempLink.setAttribute('download', 'CV_RomanazziAlejandro.pdf');
          document.body.appendChild(tempLink);
          tempLink.click();
          document.body.removeChild(tempLink);
        }
    
  }

  return (
    <ThemeContext.Provider value={Theme}>
        <div className={`container ${Theme}`}>
          <SwitchTheme changeTheme={setTheme} />
          <Title />
          <Subtitle id={`container ${Theme}`} />
          <div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button text="Descargar CV" func={handleDownloadCV} />
                <Button text="Proyectos" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button text="Sobre mí" />
                <Button text="Contáctame" />
              </div>
            </div>
          </div>
        </div>
    </ThemeContext.Provider>
  )
}

export default App
