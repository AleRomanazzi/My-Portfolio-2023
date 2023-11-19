import React from "react"

function Button({text, contenidoPDF}) {
  const handleButtonClick = ()=>{
    const pdfBlob = new Blob([contenidoPDF], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const tempLink = document.createElement("a");
    tempLink.href = pdfUrl;
    tempLink.setAttribute("download", "archivo.pdf");
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  }
  return (
    <>
    <div style={
      {fontFamily: '"Baloo 2", sans-serif',
      color: 'white',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '12rem',
      height: '3rem',
      background: '#543C5A',
      boxShadow: '6px 6px 6px #43294A',
      borderRadius: 10,
      margin: '1rem 1.2rem',
      transition: 'transform 0.3s, box-shadow 0.3s'
    }
      
      }
      onClick={handleButtonClick}
      >{text}
    </div>
    </>
  )
}

export default Button