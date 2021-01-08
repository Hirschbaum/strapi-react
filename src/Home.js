import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getHomes();
  }, []);

  function getHomes() {
    axios
      .get("http://localhost:1337/homes")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log("An error occurred while getting API data", err);
      });
  }
  if (!data) {
    return <Navigation />;
  }

  console.log(data);

  return (
    <div>
      <Navigation />
      <h3>{data[0].title}</h3>
      <p>{data[0].description}</p>
      <img
        src="http://localhost:1337/uploads/home_c9e1f6f472.jpg"
        alt="GIF with clothes"
        width="500"
      />
    </div>
  );
}

export default Home;
