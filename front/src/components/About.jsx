import styles from "./About.module.css";

export default function About() {

  return( <div className={styles.contenido}>
    <div>
    <h1>Acerca del creador</h1>
    <h2>Juan Andrés Bravo</h2>
    <h3>Edad: 19</h3>
    <h3>Estudiante de Desarrollo de software y Soy Henry</h3>
    </div>
    <img 
    className={styles.imagen} src="../img/yo.jpg"></img>
    
  </div>)
}