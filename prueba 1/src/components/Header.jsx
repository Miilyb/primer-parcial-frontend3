import styles from './Header.module.css'

const Header = () => {

    function recargar(){
        window.location.reload(true)
    }

    return (
    <div className={styles.header}>
        <img src="/logo.png"/> 
        <h3> Parcial 1 - frontend 3  </h3>
        <button onClick={recargar}>Recargar</button>
    </div>    
    )
 
}

export default Header 