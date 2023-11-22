import React, { useEffect } from 'react';

const ModalMessage = ({ message, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3000); // El modal se cerrará automáticamente después de 3000 milisegundos (3 segundos)

    //return () => clearTimeout(timeoutId); // Limpiar el temporizador al desmontar el componente
  }, [onClose]);

  return (
    <div className="modal">
      <p>{message}</p>
    </div>
  );
};

export default ModalMessage;
