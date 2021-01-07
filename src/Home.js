import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getHomes();
  });

  function getHomes() {
    axios
      .get("http://localhost:1337/homes")
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((err) => {
        console.log("An error occurred while getting API data", err);
      });
  }

  return (
    <div>
      <h3>{data[0].title}</h3>
      <p>{data[0].description}</p>
      <img src={data[0].photo[0].url} alt="GIF with clothes" />
    </div>
  );
}

export default Home;
