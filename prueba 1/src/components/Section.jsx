import styles from './Section.module.css'
import Form from './Form'
import Card from './Card'
import { useState } from 'react'

const Section = () => {

    const [nombre, setNombre] = useState('')
    const [color, setColor] = useState('')

    function handleSubmit(nuevoNombre, nuevoColor){
        setNombre(nuevoNombre)
        setColor(nuevoColor)
    }

    return (
        <div className={styles.section}>
            <Form agregar = {handleSubmit}/>
            { (nombre && color) ? < Card nombre = {nombre} color = {color} /> : null }
        </div>
    )
}

export default Section 

