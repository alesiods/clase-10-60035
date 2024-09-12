import "./Eventos.css"
import { useState } from "react"

const Eventos = () => {

    const [input, setInput] = useState("")

    const manejadorClick = () => {
        console.log("Click")

    }

    const manejadorInput = (event) => {
    setInput(event.target.value)
    //La propiedada target es la referencia al objeto del DOM que dispara el evento.
    //Value es el texto que ingresa el usuario
    console.log(input)
    }


  return (
    <div>
        <button onClick={manejadorClick}>Haceme Click</button>

        <div className="caja"
            onMouseMove={()=>console.log("Pasaste el mickey mouse")}
            onMouseEnter={()=>console.log("Ingresaste")}
            onMouseLeave={()=>console.log("Saliste")}
        >

        </div>

        <form>
            <h2>Formulario</h2>
            <label htmlFor="campo">Ingrese Campo</label>
            <input type="text" id="campo" 
                onChange={manejadorInput}
                onKeyDown={()=> console.log("presionaste una tecla")}
                onKeyUp={()=> console.log("Soltaste una tecla")}
            />

        </form>

        {/* htmlFor = es igual al for que usamos en HTML */}
    </div>
  )
}

export default Eventos