enum EstadoPedido {
    Inicial,
    EnProceso,
    Enviando,
    Recibido
}

let estado: EstadoPedido;

estado = EstadoPedido.Enviando;

console.log("Estado del pedido", estado);

enum EstadoCompra {
    Inicial = "I",
    Facturado = "F",
    Devuelto = "D"
}

let estadoC : EstadoCompra;

estadoC = EstadoCompra.Devuelto;

console.log("Estado Compra ", estadoC)

enum CodigoError{
    OK = 100,
    ErrorRed = 200,
    ErrorBDD = 300 
}

let codigoE : CodigoError;

codigoE = CodigoError.ErrorRed;

console.log("Codigo Error = ", codigoE)