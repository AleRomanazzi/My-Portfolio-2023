import React from "react";

const InputContact = ({campo, type}) => {
    return(
        <div>
            <label htmlFor={campo}>{campo}</label>
            <input type={type} name={campo}></input>
        </div>
    )
}

export default InputContact