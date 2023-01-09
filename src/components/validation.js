const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword= /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/i

export function validar(inputs){
  var errors={};
  if(!inputs.username){
    errors.username="El nombre de usuario tiene que ser un email"
  }else if(!regexEmail.test(inputs.username)){
    errors.username="El nombre de usuario tiene que ser un email"
  }else if(inputs.username>35){
    errors.username="El nombre de usuario no puede tener más de 35 caracteres"
  }else if(!regexPassword.test(inputs.password)){
    errors.password="La contraseña debe tener al entre 6 y 10 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula"
  }
  return errors
}