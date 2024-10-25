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


// function mostrarProductos() {
//     let catalogo = "Catálago de productos: \n";
//     catalogo += "1. Campera- $60000 \n";
//     catalogo += "2. Cartera- $50000 \n";
//     catalogo += "3. Zapatillas- $50000 \n";
//     catalogo += "4. Remera- $20000 \n";
//     return catalogo;
// }

// function comprarProducto() {
//     let total = 0;
//     let seguirComprando = true;

//     while (seguirComprando) {
//         let catalogo = mostrarProductos();
//         let eleccion = prompt(
//             catalogo + "Que producto quieres comprar? Ingrese el numero o escriba 'salir' para finalizar "
//         );
    
//         if (eleccion === null || eleccion === "") {
//             alert("No has ingresado un datos valido");
//             continue;
//         }

//         if (eleccion === "salir") {
//             break;
//         }

//         eleccion = parseInt(eleccion);
//         if (isNaN(eleccion) || eleccion < 1 || eleccion > 4) {
//             alert("Producto no valido, selecciona nuevamente");
//             continue;
//         }

//         if (eleccion === 1) {
//             total += 60000;
//             alert("Has agregado Campera ");
//         } else if (eleccion === 2) {
//             total += 50000;
//             alert("Has agregado Cartera ");
//         } else if (eleccion === 3) {
//             total += 50000;
//             alert("Has agregado Zapatillas ");
//         } else if (eleccion === 4) {
//             total += 20000;
//             alert("Has agregado Remera ");
//         }

//         let resupuesta = prompt("quieres seguir comprando? (si/no)");

//         if (resupuesta === "si") {
//             seguirComprando = true;
//         } else {
//             seguirComprando = false;
//         }
//     }
//     alert(`Gracias por su compra . El total es ${total}`);
// }
// comprarProducto();

const productos = [
    {
      id: 1,
      nombre: "Auriculares",
      precio: 40000,
      stock: 14,
    },
    {
      id: 2,
      nombre: "Teclado",
      precio: 50000,
      stock: 12,
    },
    {
      id: 3,
      nombre: "Mouse",
      precio: 30000,
      stock: 32,
    },
  ];
  
  const agregarProductos = ({ nombre, precio, stock }) => {
    productos.push({ id: 4, nombre, precio, stock });
  };
  
  const mostrarProductos = () => {
    let mensajeInformativo = "";
    for (let producto of productos) {
      mensajeInformativo += `
  
      ID : ${producto.id}
      Nombre : ${producto.nombre}
      Precio : ${producto.precio}
      Stock : ${producto.stock}\n
  
      `;
    }
    console.log(mensajeInformativo);
  };
  
  const solicitarDatosDelProducto = () => {
    let nombreProducto = prompt("Ingresa el nombre del producto");
    let precioDelProducto = parseFloat(
      prompt("A continuacion ingresa el precio")
    );
    let stock = parseInt(
      prompt("Por favor ingresa la cantidad de unidades disponible")
    );
    if (nombreProducto && !isNaN(precioDelProducto) && !isNaN(stock)) {
      return { nombre: nombreProducto, precio: precioDelProducto, stock };
    } else {
      alert("Por ingresa datos validos");
    }
  };
  
  const eliminarProducto = (nombre) => {
    const indice = productos.findIndex(
      (producto) => producto.nombre.toLowerCase() === nombre.toLowerCase()
    );
  
    if (indice !== -1) {
      productos.splice(indice, 1);
      console.log(`Producto ${nombre} eliminado con exito`);
      mostrarProductos();
    } else {
      alert(`Producto ${nombre} no encontrado`);
    }
  };
  
  const encontrarProductosBaratos = (precioMaximo) => {
    const productosBaratos = productos.filter(
      (producto) => producto.precio < precioMaximo
    );
  
    if (productosBaratos.length > 0) {
      console.log("Productos mas baratos que " + precioMaximo + ":");
  
      productosBaratos.map((producto) => {
        console.log(producto.nombre);
      });
    } else {
      console.log("No hay productos mas baratos que :" + precioMaximo);
    }
  };
  
  const main = () => {
    let opcion = "";
  
    while (opcion !== "5") {
      opcion = prompt(
        "Selecciona una opcion: \n1. Agregar Productos \n2. Ver Productos \n3. Eliminar producto \n4. Productos Baratos \n5. Salir"
      );
  
      switch (opcion) {
        case "1":
          const nuevoProducto = solicitarDatosDelProducto();
          if (nuevoProducto) {
            agregarProductos(nuevoProducto);
          }
          break;
  
        case "2":
          mostrarProductos();
          break;
  
        case "3":
          const productoAElimar = prompt(
            "ingresa el nombre del producto a elimar"
          );
          eliminarProducto(productoAElimar);
          break;
  
        case "4":
          const precioMaximo = parseFloat(
            prompt("Ingresa el precio maximo para encontrar productos baratos")
          );
          encontrarProductosBaratos(precioMaximo);
          break;
  
        case "5":
          console.log("Saliendo...");
          break;
  
        default:
          alert("Opcion no valida . Por favor selecciona de nuevo");
      }
    }
  };
  
  main();

