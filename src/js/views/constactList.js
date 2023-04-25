import React, { useState, useEffect } from "react";
const urlApi =
  "https://assets.breatheco.de/apis/fake/contact/agenda/nicosis-agenda";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  console.log("contacts:", contacts);

  const getAllContacts = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    const response = await fetch(urlApi, requestOptions);
    const data = await response.json();
    setContacts(data);
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <ul className="list-group">
      {contacts.map((contact) => (
        <li key={contact.id} className="list-group-item">
          <div className="row align-items-center">
            <div className="col-3">
              <img src="" alt="Avatar" className="rounded-circle" />
            </div>
            <div className="col-9">
              <h5 className="mb-0">Name: {contact.full_name}</h5>
              <p className="mb-0">Phone: {contact.phone}</p>
              <p className="mb-0">Email: {contact.email}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
