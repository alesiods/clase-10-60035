import React from 'react'
import Eventos from './componentes/Eventos/Eventos'
import Formulario from './componentes/Formulario/Formulario'
import Escuchadores from './componentes/Escuchadores/Escuchadores'
import Automatico from './componentes/Automatico/Automatico'


const App = () => {
  return (
    <div>
      {/* <Eventos/>
         <Formulario/>
        <Escuchadores/>
      */}
      
        <Automatico/>
    </div>
    
  )
}

export default App


/* 
En JS vainilla usamos eventos como:

1) addEventListener

const btnPrincipal = document.getElementeById("btn")

btn.addEventListener("click", ()=>{
  la funcion que queriamos realizar
  })

2) Propiedadaes de los nodos

const tituloPrincipal = document.getElementById("titulo")

tituloPrincipal.onMouseMove = (aca metiamos la funcion con el comportamiento buscado)

3)Era como atributo de las etiquetas HTML.

*/