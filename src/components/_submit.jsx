import React, {useState} from "react"

function Submit({ text }) {

  const [isHovered, setIsHovered] = useState(false);
  const handleButtonClick = () => {
    if(onSubmit){
        onSubmit();
    }
  }

  return (
    <button
      type="submit"
      style={{
        fontFamily: '"Baloo 2", sans-serif',
        color: 'white',
        textAlign: 'center',
        width: '12rem',
        height: '3rem',
        background: '#543C5A',
        cursor: isHovered ? 'pointer' : 'none',
        boxShadow: isHovered ? '2px 2px 2px #43294A' : '6px 6px 6px #43294A',
        borderRadius: 10,
        margin: '1rem 1.2rem',
        transition: 'transform 0.3s, box-shadow 0.3s',
        transform: isHovered ? 'translateY(2px) translateX(2px)' : 'translateY(0)',
      }}
      onClick={handleButtonClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
}

export default Submit