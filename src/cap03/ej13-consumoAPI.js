async function obtenerProducto(idProducto) {
    const url = `https://api.escuelajs.co/api/v1/products/${idProducto}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function obtenerTitulo(idProducto) {
    const producto = await obtenerProducto(idProducto);
    return producto.title;
}