import { useState, useEffect } from "react"

const Automatico = () => {

    const [monstrarMensaje, setMostrarMensaje] = useState(false)

    useEffect( ()=>{
        let tiempoEspera = null

        const reiniciarTemporizador = () =>{
            clearTimeout(tiempoEspera)
            tiempoEspera = setTimeout(() => {
                setMostrarMensaje(true)
            }, 5000)
        }

        const manejarActividadUsuario = () => {
            reiniciarTemporizador()
        }

        window.addEventListener("mousemove", manejarActividadUsuario)
        window.addEventListener("keydown", manejarActividadUsuario)

        reiniciarTemporizador()

        return () =>{
            window.removeEventListener("mousemove", manejarActividadUsuario)
            window.removeEventListener("keydown", manejarActividadUsuario)
            clearTimeout(tiempoEspera)
        }


    },[])

    const seguirMirandoTele = () => {
        setMostrarMensaje(false)
    }


  return (
    
    <div>
        {
            monstrarMensaje && (
                <div>
                    <p>¿Seguis con vida?</p>
                    <button onClick={seguirMirandoTele}>Seguir mirando tele, estoy bien</button>
                </div>
            )
        }

        <h2>Netflix</h2>
        <p>El Padrino</p>


    </div>
  )
}

export default Automatico