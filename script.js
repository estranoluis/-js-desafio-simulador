let producto;
let totalNotebook = 0;
let totalTeclado = 0;
let totalMouse = 0;
let precio = 0;
let precioTotal = 0;
const IVA = 0.19;

let nombre = prompt("A continuación ingrese su nombre para poder comprar: ");

alert("Hola " + nombre + " un gusto recibirte en nuestra tienda!!")

let opcion = parseInt(prompt("Ingrese una opción: \n1 Comprar \n2 Cerrar Sesión"));
if (opcion == 1) {
    comprarProducto();
} else if (opcion == 2) {
    alert("Gracias por su visita!");
}

function comprarProducto() {
    producto = parseInt(prompt("Que producto quiere comprar? Presione \n1 Notebook \n2 Teclado \n3 Mouse \n\n4 Finalizar"));
    while (producto != 4) {
        switch (producto) {
            case 1:
                precio = 1000000;
                alert("Ud compró una Notebook por el valor de $" + precio);
                totalNotebook += precio;
                break;
    
            case 2:
                precio = 30000;
                alert("Ud compró un Teclado por el valor de $" + precio);
                totalTeclado += precio;
                break;
    
            case 3:
                precio = 20000;
                alert("Ud compró un Mouse por el valor de $" + precio);
                totalMouse += precio;
                break;
        
            default:
                alert("Error, opción incorrecta");
                break;
        }
        producto = parseInt(prompt("Desea seguir comprando? Presione:\n1 Notebook \n2 Teclado \n3 Mouse \n\n4 Finalizar"));
    }
    if (producto == 4) {
        finalizarCompra();
    }
}

function finalizarCompra() {
    precioTotal = totalNotebook + totalTeclado + totalMouse;
    let  valorConImpuesto = calculoImpuesto(precioTotal)
    if (precioTotal == 0) {
        alert("Ud no realizó ninguna compra");
        alert("Gracias por su visita!");
    } else {
        alert("El total de su compra es: " + precioTotal);
        alert('El total con impuestos a pagar es: '+valorConImpuesto)
        alert("Gracias por comprar en nuestra tienda!!");
    }
}

function calculoImpuesto() {
    const impuestos = precioTotal * IVA
    return precioTotal + impuestos
}


