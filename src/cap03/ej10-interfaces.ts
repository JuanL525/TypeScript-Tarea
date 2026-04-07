interface ProductoComercial{
    nombre:string,
    precio:number,
    stock:boolean,
    color?:string
}

const miProducto: ProductoComercial = {
    nombre: "computador",
    precio: 1000,
    stock:true,
    color: "gris"
}
