import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");

  const manejadorFormulario = (e) => {
    e.preventDefault();
    const nuevoCliente = { nombre, apellido, email };
    console.log(nuevoCliente);

    //Limpiamos los input
    setNombre(""), setApellido("");
    setEmail("");
  };

  return (
    <form onSubmit={manejadorFormulario}>
      <label htmlFor="">Nombre</label>
      <input
        type="text"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
      />
      <br />
      <br />
      <label htmlFor="">Apellido</label>
      <input
        type="text"
        onChange={(e) => setApellido(e.target.value)}
        value={apellido}
      />
      <br />
      <br />
      <label htmlFor="">Correo Electronico</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <br />

      <button>Enviar Datos</button>
    </form>
  );
};

export default Formulario;
