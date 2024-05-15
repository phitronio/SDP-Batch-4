const loadAllProduct = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      displayProduct(data);
    });
};

const displayProduct = (products) => {
  const productContaine = document.getElementById("product-container");

  products.forEach((product) => {
    console.log(product);
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <img class="card-img" src=${product.image} alt="" />
        <h5>${product.title}</h5>
        <h3>price: ${product.price}</h3>
        <p>${product.description.slice(0, 50)}</p>
        <button onclick="singleProduct('${product.id}')">Details</button>
        <button onclick="handleAddToCart('${product.title.slice(0, 12)}',${
      product?.price
    })">Add toTO CArt</button>
        `;

    productContaine.appendChild(div);
  });
};

const handleAddToCart = (name, price) => {
  const cartCount = document.getElementById("count").innerText;

  let convertedCOunt = parseInt(cartCount);
  convertedCOunt = convertedCOunt + 1;
  document.getElementById("count").innerText = convertedCOunt;

  console.log(convertedCOunt);

  const container = document.getElementById("cart-main-container");
  console.log(name, price);

  const div = document.createElement("div");
  div.classList.add("cart-info");
  div.innerHTML = `
    <p>${name}</p>
    <h3 class="price">${price}</h3>
    `;
  container.appendChild(div);
  UpdateTotal();
};

const UpdateTotal = () => {
  const allPrice = document.getElementsByClassName("price");
  let count = 0;
  for (const element of allPrice) {
    count = count + parseFloat(element.innerText);
  }
  document.getElementById("total").innerText = count.toFixed(2);
};

const singleProduct = (id) => {
    console.log(id);
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

loadAllProduct();
