//Especificar las propiedades del response

interface ProductoAPI{
    id: number,
    title: string,
    slug: string,
    price: number,
    description: string;
    category: {
        id: number;
        name: string;
        image: string;
        slug?:string
    };
    images: string[];
    creationAt: string;
    updatedAt: string;
}

async function obtenerProducto(idProducto: number): Promise<ProductoAPI> {
    const url = `https://api.escuelajs.co/api/v1/products/${idProducto}`;
    const response = await fetch(url);
    const data:ProductoAPI = await response.json();
    return data;
}

async function obtenerTitulo(idProducto:number): Promise<String> {
    const producto = await obtenerProducto(idProducto);
    return producto.title;
}

async function test(idProducto:number) {
    const tituloProducto = await obtenerTitulo(idProducto);
    console.log ("El titulo del producto es: ", tituloProducto)
}

test(17)