import styles from "./Forms.module.css"
import { useState } from "react"
import { validar } from "./validation"

export default function Forms(props) {
  const [inputs,setInputs]= useState({
    username:"",
    password: ""
  })
  const [errors,setErrors]= useState({
    username:"",
    password: ""
  })
  function handleInputChange(e){
    setInputs({...inputs, [e.target.name]: e.target.value})
    setErrors(validar({...inputs, [e.target.name]: e.target.value}))
  }
  function handleSubmit(){
    props.login(inputs)
  }
  return( <form onSubmit={handleSubmit}  className={styles.contenido}>
    <label className={styles.loginLabels}>Username: </label>
    <input className={errors.username?styles.warning : styles.loginInputs}
    onChange={handleInputChange}
    name="username"
    type="text"></input>
    <p className={styles.error}>{errors.username}</p>
    <label className={styles.loginLabels}>Password: </label>
    <input className={errors.password ? styles.warning : styles.loginInputs}
    onChange={handleInputChange}
    name="password"
    type="password"></input>
    <p className={styles.error}>{errors.password}</p>
    <button className={styles.loginButton} type="submit">LOGIN</button>
    
  </form>)
}