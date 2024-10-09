// ||
// let nombre="Facundo";
// let apellido="Santoro";
// const ESPACIO= " ";
// let nombreYApellido=nombre + ESPACIO + apellido;


// let anioActual= 2024;
// let anioNacimiento= 2003;
// let edad= anioActual - anioNacimiento;


// const IVA=21;

// console.log(nombreYApellido, edad);

// let nombreUsuario=prompt("ingresa tu nombre");

// console.log(nombreUsuario);
// alert("Hola " + nombreUsuario + ", buen nombre.");

// let edad=prompt("ingrese su edad");

// if (edad >= 18) {
//     alert("sos mayor de edad, podes ingresar.");
// }else{
//     alert("sos menor de edad, no podes ingresar");
// }

// let hora = prompt("ingresa la hora");
// if (hora >= 6 && hora < 12) {
//     alert("Buenos días!");
// } else if (hora >= 12 && hora < 20) {
//     alert("Buenas tardes!");
// } else {
//     alert("Buenas noches!");
// }

// let usuario1 = "Facundo";
// let usuario2 = "Santoro";

// let nombreUsuario = prompt("ingresa tu nombre de usuario");

// if (nombreUsuario == "Facundo"){
//     alert("Bienvenido " + nombreUsuario);
// } else if (nombreUsuario == "Santoro") {
//     alert("Bienvenido " + nombreUsuario);
// } else{
//     alert ("El usuario no existe");
// }



// if (nombreUsuario == usuario1 || nombreUsuario == usuario2) {
//     alert ("Bienvenido " + nombreUsuario);
// } else {
//     alert ("El usuario no existe");
// }

// // Definimos los productos
// const productos = [
//     { nombre: 'Mouse', precio: 30000 },
//     { nombre: 'Pad XL', precio: 15000 },
//     { nombre: 'Monitor', precio: 200000 },
//     { nombre: 'Teclado', precio: 50000 },
//     { nombre: 'Auriculares', precio: 15000 }
// ];

// // Carrito de compras
// let carrito = [];

// // Función para mostrar los productos
// function mostrarProductos() {
//     let lista = 'Lista de productos disponibles:\n';
//     productos.forEach((producto, index) => {
//         lista += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
//     });
//     return lista;
// }

// // Función para agregar productos al carrito
// function agregarAlCarrito() {
//     let seleccion = parseInt(prompt(mostrarProductos() + '\nSeleccione el número del producto que desea agregar al carrito:'));

//     // Validamos si la selección es válida
//     if (seleccion >= 1 && seleccion <= productos.length) {
//         carrito.push(productos[seleccion - 1]);
//         alert(`${productos[seleccion - 1].nombre} ha sido agregado al carrito.`);
//     } else {
//         alert('Selección inválida, por favor intente de nuevo.');
//         agregarAlCarrito(); // Volvemos a llamar a la función si la selección es inválida
//     }

//     // Preguntamos si quiere agregar otro producto
//     let continuar = prompt('¿Desea agregar otro producto al carrito? (si/no)');
//     if (continuar.toLowerCase() === 'si') {
//         agregarAlCarrito();
//     } else {
//         mostrarCarrito();
//     }
// }

// // Función para mostrar el carrito de compras y el total
// function mostrarCarrito() {
//     if (carrito.length === 0) {
//         alert('El carrito está vacío.');
//     } else {
//         let detalleCarrito = 'Carrito de compras:\n';
//         let total = 0;

//         carrito.forEach((producto, index) => {
//             detalleCarrito += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
//             total += producto.precio;
//         });

//         detalleCarrito += `\nTotal a pagar: $${total}`;
//         alert(detalleCarrito);
//     }
// }

// // Iniciamos el programa
// agregarAlCarrito();


function mostrarProductos() {
    let catalogo = "Catálago de productos: \n";
    catalogo += "1. Campera- $60000 \n";
    catalogo += "2. Cartera- $50000 \n";
    catalogo += "3. Zapatillas- $50000 \n";
    catalogo += "4. Remera- $20000 \n";
    return catalogo;
}

function comprarProducto() {
    let total = 0;
    let seguirComprando = true;

    while (seguirComprando) {
        let catalogo = mostrarProductos();
        let eleccion = prompt(
            catalogo + "Que producto quieres comprar? Ingrese el numero o escriba 'salir' para finalizar "
        );
    
        if (eleccion === null || eleccion === "") {
            alert("No has ingresado un datos valido");
            continue;
        }

        if (eleccion === "salir") {
            break;
        }

        eleccion = parseInt(eleccion);
        if (isNaN(eleccion) || eleccion < 1 || eleccion > 4) {
            alert("Producto no valido, selecciona nuevamente");
            continue;
        }

        if (eleccion === 1) {
            total += 60000;
            alert("Has agregado Campera ");
        } else if (eleccion === 2) {
            total += 50000;
            alert("Has agregado Cartera ");
        } else if (eleccion === 3) {
            total += 50000;
            alert("Has agregado Zapatillas ");
        } else if (eleccion === 4) {
            total += 20000;
            alert("Has agregado Remera ");
        }

        let resupuesta = prompt("quieres seguir comprando? (si/no)");

        if (resupuesta === "si") {
            seguirComprando = true;
        } else {
            seguirComprando = false;
        }
    }
    alert(`Gracias por su compra . El total es ${total}`);
}
comprarProducto();

