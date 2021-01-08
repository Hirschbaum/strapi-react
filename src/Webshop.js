import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";

function Webshop() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios
      .get("http://localhost:1337/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log("An error occurred while getting products", err);
      });
  }
  if (!products) {
    return <Navigation />;
  }

  function renderProducts() {
    console.log(products);
    return products.map((product) => {
      const { id, photo, title, colors, price } = product;
      const ending = photo.formats.small.url;
      console.log(ending);

      return (
        <div key={id}>
          <img
            src={"//localhost:1337" + ending}
            alt={title}
            width="200"
            height="270"
          />
          <h5>{title}</h5>
          <p>{colors.toString()}</p>
          <p>{price} SEK</p>
        </div>
      );
    });
  }

  return (
    <div>
      <Navigation />
      <h3>Products</h3>
      {renderProducts()}
    </div>
  );
}

export default Webshop;
