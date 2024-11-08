import { useState } from "react"
import styles from './Form.module.css'

const Form = (props) => {

    const [nombre, setNombre] = useState('')
    const [color, setColor] = useState('')
    const [mensaje, setMensaje] = useState('')

    function validar(event){
        event.preventDefault()

        if (nombre.trim().length >= 3 && color.trim().length >=6 ){
            setMensaje ('')
            props.agregar(nombre,color)
        }
        else {
            setMensaje ('¿Esta correcta la información?')
            props.agregar('','')
        }
    }


    return (

        <form className={styles.form} onSubmit={validar} >
            <label htmlFor="nombre">Ingresa tú nombre</label>
            <input 
                type="text" 
                id="nombre" 
                value={nombre} onChange={(e) => setNombre (e.target.value)} 
            />
            <label htmlFor="color">Ingresa tú color favorito </label>
            <input 
                type="text" 
                id="notacolor" 
                placeholder="FORMATO HEX"
                value={color} onChange={(e) => setColor (e.target.value)} 
            />
            <button type="submit"> Enviar </button>
            {mensaje ? <p> {mensaje} </p> : null}
        </form>
    )
}

export default Form