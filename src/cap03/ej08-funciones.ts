function sumar(a:number,b:number): number{
    return a + b;
}

let resultadoSuma: number= sumar(5,3);
console.log(resultadoSuma); //Salida 8


function saludar(nombre: string): void {
    console.log(`Hola, ${nombre}`);
}

saludar("Ana")

function saludarConApellido(nombre:string, apellido?:string):string {
    if(apellido){
        return `Hola, ${nombre} ${apellido}`;
    } else {
        return `Hola ${nombre}`;
    }
}

console.log(saludarConApellido("Juan"));
console.log(saludarConApellido("Maria", "Perez"));

//Funciones con valores por defecto

function saludarConCiudad(nombre: string, ciudad: string = "Desconocido"): string{
    return `Hola ${nombre} vives en ${ciudad}`;
}

console.log(saludarConCiudad("Juan", "Quito"));
console.log(saludarConCiudad("Pedro"))
