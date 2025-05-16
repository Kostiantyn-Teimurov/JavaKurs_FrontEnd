const containerElem = document.getElementById("products-container");

async function fetchProducts() {
  const access_token = localStorage.getItem("access_token");
  const res = await fetch("https://api.escuelajs.co/api/v1/products");

  const productsArray = await res.json();
  console.log(productsArray);
  productsArray.forEach((element) => {
    // console.log(element);

    const { title, price, description, images } = element;

    const productCardElem = document.createElement("div");
    const titleElem = document.createElement("h2");
    const descriptionElem = document.createElement("p");
    const priceElem = document.createElement("p");
    const imageElem = document.createElement("img");

    titleElem.innerText = title;
    priceElem.innerText = `Price: ${price}$`;
    imageElem.src = images[0];
    imageElem.class = "image-product";
    descriptionElem.innerText = description;

    productCardElem.append(titleElem, priceElem, imageElem, descriptionElem);

    if (access_token) {
      const addButton = document.createElement("button");
      addButton.innerText = "Add Product";
      productCardElem.append(addButton);
    }

    containerElem.append(productCardElem);
  });
}

fetchProducts();
