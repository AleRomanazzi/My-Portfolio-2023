import React from "react";

const InputContact = ({type, content}) => {
    return(
        <div style={{fontFamily: '"Baloo 2"',
        padding: "0.3rem"
        }}>
            <input style={{
                padding: "2px",
                color: "white",
                width: "25rem",
                height: "2rem",
                backgroundColor: "transparent",
                borderBottom: "1px solid rgba(84, 60, 90, 1)",
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px"
            }} 
                type={type} 
                name={content}
                placeholder={content}
                ></input>
        </div>
    )
}

export default InputContact