import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";

function Webshop() {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getCategories();
  });

  useEffect(() => {
    getProducts();
  }, []);

  function getCategories() {
    axios
      .get("http://localhost:1337/categories")
      .then((response) => {
        //console.log(response);
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(
          "An error occurred while getting categories from strapi",
          error
        );
      });
    if (!categories) {
      return <div></div>;
    }
  }

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
        //console.log("POSTING NEW DATA");
        //console.log(res);
        getProducts(); //update products with the updatated favorite
      })
      .catch((err) => {
        console.log("Error while posting favorite", err);
      });
  }

  function renderCategoryNames() {
    return categories.map((category) => {
      const { name, published_at } = category;
      //console.log(name);
      return <li key={published_at}>{name}</li>;
    });
  }

  function renderProducts() {
    //console.log(products);
    return products.map((product) => {
      const { id, photo, title, colors, price, favorite, categories } = product;
      const ending = photo.formats.medium.url;
      const colorsArray = colors
        .filter((obj) => obj.oneColor)
        .map((obj) => obj.oneColor)
        .join(" ");

      const choosenCategory = categories[0].name;
      //console.log(choosenCategory); works

      return (
        <div key={id} className="product-card" dataCategory={choosenCategory}>
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
    <div className="App">
      <Navigation />
      <div>
        <ul>
          <li>all</li>
          {renderCategoryNames()}
        </ul>
      </div>
      <div className="product-container" style={{ marginTop: "3%" }}>
        {renderProducts()}
      </div>
    </div>
  );
}

export default Webshop;
