import React from "react";

const ProyectItem = ({ srcImage, title, description, proyectLink }) => {
    return(
            <div className="proyectDiv">
                <img className="img" src={srcImage}></img>
                <div className="proyectText">
                    <div className="proyectTitle">{title}</div>
                    <div className="description">{description}</div>
                    <a className="github" href={`${proyectLink}`} target="_blank">
                        <img src="../src/assets/github.png" alt="" />
                    </a>
                </div>
            </div>
        )
}

export default ProyectItem