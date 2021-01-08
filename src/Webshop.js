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
      const ending = photo.formats.medium.url;
      const colorsArray = colors
        .filter((obj) => obj.oneColor)
        .map((obj) => obj.oneColor)
        .join(" ");

      //console.log(Object.values(colors));
      //console.log(colors.find((obj) => obj.oneColor));
      //console.log(colors.filter((obj) => obj.oneColor).map((obj) => obj.oneColor));

      return (
        <div key={id}>
          <img
            src={"//localhost:1337" + ending}
            alt={title}
            width="350"
            height="470"
          />
          <h2>{title}</h2>
          <p className="text">{colorsArray}</p>
          <p className="text">{price} SEK</p>
        </div>
      );
    });
  }

  return (
    <div>
      <Navigation />
      <div style={{ marginTop: "3%" }}>{renderProducts()}</div>
    </div>
  );
}

export default Webshop;
