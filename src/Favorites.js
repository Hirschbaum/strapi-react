import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";

function Favorites() {
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

  function handleFavorite(e, id, favorite) {
    e.preventDefault();

    axios
      .put(`http://localhost:1337/products/${id}`, { favorite: !favorite }, [
        "Content-Type",
      ])
      .then((res) => {
        console.log("POSTING NEW DATA");
        console.log(res);
        getProducts();
      })
      .catch((err) => {
        console.log("Error while posting favorite", err);
      });
  }

  function renderProducts() {
    return products
      .filter((product) => product.favorite === true)
      .map((product) => {
        const { id, photo, title, colors, price, favorite } = product;
        const ending = photo.formats.medium.url;
        const colorsArray = colors
          .filter((obj) => obj.oneColor)
          .map((obj) => obj.oneColor)
          .join(" ");

        return (
          <div key={id} className="product-card">
            <img
              src={"//localhost:1337" + ending}
              alt={title}
              width="350"
              height="470"
            />
            <div className="product-with-favorite">
              <h2>{title}</h2>
              <button
                className="favorite-button"
                onClick={(e) => handleFavorite(e, id, favorite)}
              >
                {favorite === false ? (
                  <span className="material-icons">favorite_border</span>
                ) : (
                  <span className="material-icons">favorite</span>
                )}
              </button>
            </div>
            <p className="text">{colorsArray}</p>
            <p className="text">{price} SEK</p>
          </div>
        );
      });
  }

  return (
    <div>
      <Navigation />

      <div className="favorites-container" style={{ marginTop: "3%" }}>
        {renderProducts()}
      </div>
    </div>
  );
}

export default Favorites;
