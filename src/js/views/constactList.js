import React, { useState, useEffect } from "react";
const urlApiGet =
  "https://assets.breatheco.de/apis/fake/contact/agenda/agenda-flaco";
const urlApiPost = "https://assets.breatheco.de/apis/fake/contact/";
const urlApiDeleteId = "https://assets.breatheco.de/apis/fake/contact/";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  console.log("contacts:", contacts);

  const getAllContacts = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const response = await fetch(urlApiGet, requestOptions);
    const data = await response.json();
    setContacts(data);
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  const deleteContactId = async (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };
    const response = await fetch(urlApiDeleteId + id, requestOptions);
    const data = await response.json();
    console.log("data:", data);
    getAllContacts()
  };

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
              <p className="mb-0">Address: {contact.address}</p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => deleteContactId(contact.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
