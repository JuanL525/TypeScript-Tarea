type Persona= {
    readonly id:number,
    nombre:string,
    email?:string,
    esAdmin: boolean
}

const persona1:Persona ={
    id:1,
    nombre:"Pablo",
    email:"pablo.herrera@test.com",
    esAdmin: false
}

const persona2:Persona ={
    id:2,
    nombre:"Juan",
    esAdmin: true
}
persona2.nombre = "Pedro"

console.log(persona1);
console.log(persona2);