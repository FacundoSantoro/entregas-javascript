import { getCartItems } from "./cart.js";

const products = [
  {
    id: 1,
    title: "Teclado Mecánico Logitech",
    price: 77000,
    image:
      "https://i0.wp.com/www.kelver.com.ar/wp-content/uploads/2024/08/158511-800-800.png?fit=800%2C800&ssl=1",
  },
  {
    id: 2,
    title: "Mouse Wireless Logitech G305",
    price: 42000,
    image:
      "https://jhankor.com/wp-content/uploads/2022/08/mouse-logitech-g-g305-lightspeed-wireless-lila-usb-pn910-006020.jpg",
  },
  {
    id: 3,
    title: "Auriculares Logitech G733",
    price: 205000,
    image:
      "https://www.mrpc.com.co/wp-content/uploads/2023/11/001-30.png",
  },
  {
    id: 4,
    title: "Monitor LG Led 100hz",
    price: 250000,
    image:
      "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/24MS500_800.jpg",
  },
  {
    id: 5,
    title: "Gabinete CoolerMaster fans(x3)",
    price: 85000,
    image:
      "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-9973513.png",
  },
  {
    id: 6,
    title: "Cable HDMI mallado",
    price: 10000,
    image:
      "https://dazimportadora.com.ar/wp-content/uploads/2022/02/Cable-HDMI-5MTS-Mallado.jpg",
  },
];

export const renderProducts = () => {
  const productList = document.getElementById("productList");

  products.forEach((product) => {
    const productCard = document.createElement("article");
    productCard.classList.add("product");
    productCard.setAttribute("data-id", product.id);

    productCard.innerHTML = `
      <div>
        <img class="product__image" src="${product.image}" alt="${
      product.title
    }" />
      </div>
      <div>
        <h5 class="product__title">${product.title}</h5>
        <p class="product__price">$${product.price.toFixed(2)}</p>
      </div>
      <button class="product__add">Agregar</button>
    `;

    productList.append(productCard);
  });
};

export const updateCartUi = () => {
  const cartContainer = document.querySelector(".cart__container");

  cartContainer.innerHTML = "";
  const cartItems = getCartItems();

  cartItems.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart__item");
    cartItem.setAttribute("data-id", item.id);

    cartItem.innerHTML = `
     <div class="cart__item">
        <div class="cart__item-title">${item.title}</div>
        <div>${item.price}</div>
        <div>
          <button class="cart__increase">+</button>
          <button class="cart__decrease">-</button>
          <button class="cart__remove">Eliminar</button>
        </div>
      </div>
    
    `;

    cartContainer.appendChild(cartItem);
  });
};