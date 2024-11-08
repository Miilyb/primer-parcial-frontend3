import styles from './Card.module.css'

const Card = (props) => {

    return (
        <div className={styles.card} >
            <h4>Hola {props.nombre}.</h4>
            <p>Sabemos que el color que te gusta es {props.color}</p>
        </div>
    )
}

export default Card