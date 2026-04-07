//Uniones

type IDPERSONA = number | string;
let idPersona: IDPERSONA;

idPersona = "a001"
idPersona = 100

imprimirCodigo(idPersona)

function imprimirCodigo(id: IDPERSONA){
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    } else{
        console.log(id)
    }
}

//Intersecciones

type Producto = {
    id:number;
    nombre: string;
    precio: number;
}

type ConDescuento = {
    descuento : number
}

type ProductoConDescuento = Producto & ConDescuento;

const libroEnOferta: ProductoConDescuento = {
    id:101,
    nombre: "Don quijote",
    precio:25.00,
    descuento: 0.15
}