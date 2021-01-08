import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import axios from "axios";

function Contact() {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    getContacts();
  }, []);

  function getContacts() {
    axios
      .get("http://localhost:1337/contacts")
      .then((response) => {
        setContacts(response.data);
      })
      .catch((err) => {
        console.log(
          "An error occurred while getting contacts data from strapi",
          err
        );
      });
  }
  if (!contacts) {
    return <Navigation />;
  }

  console.log(contacts);

  return (
    <div>
      <Navigation />

      <h3>{contacts[0].name} - Contacts</h3>
      <p>{contacts[0].telephon}</p>
      <p>{contacts[0].email}</p>
      <p>{contacts[0].address}</p>
      <img
        src="http://localhost:1337/uploads/medium_hailey_moeller_dumc_R_Yel9_Z0_unsplash_db42307f88.jpg"
        alt="some sommer clothes and accessories"
        width="500"
      />
      <p>{contacts[0].description}</p>
    </div>
  );
}

export default Contact;
