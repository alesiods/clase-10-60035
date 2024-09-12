import React, { useEffect } from 'react'

const Escuchadores = () => {

    window.addEventListener("resize", () => {
        console.log("Cmabiaste la pantalla")
    })

    window.addEventListener("click",()=>{
        console.log("Realizaste un nuevo click!!!!")
    })

    useEffect(()=>{
        function click() {
            console.log("click")

            return () => {
                window.removeEventListener("click", click)
            }
        
        }

    },[])

  return (
    <div>Escuchadores</div>
  )
}

export default Escuchadores