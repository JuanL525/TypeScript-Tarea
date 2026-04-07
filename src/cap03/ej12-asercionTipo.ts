let mensaje: unknown

mensaje = "Hola mundo"

let resultado = (<string>mensaje).toUpperCase();

console.log("resultado = ", resultado)