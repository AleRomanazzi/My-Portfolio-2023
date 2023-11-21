import React from "react";
import InputContact from "../_input";
import Button from "../_button";

const Contact = () => {
    return(
        <div>
            <InputContact campo={"Nombre"} type={"text"} />
            <InputContact campo={"Apellido"} type={"text"} />
            <InputContact campo={"Email"} type={"e-mail"} />
            <textarea name="Mensaje" cols="30" rows="10"></textarea>
            <Button text={"Enviar Mensaje"} />
        </div>
    )
}

export default Contact