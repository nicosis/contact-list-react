import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/contactList.css";
import { urlApiGet, urlApiContact, urlLegoFace } from "../component/url";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

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
  }, [contacts]); //La dependencia 'conctacts' actualiza el mapeao cada vez que borro un contacto

  const deleteContactId = async (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };
    const response = await fetch(urlApiContact + id, requestOptions);
    const data = await response.json();
    console.log("data:", data);
    // getAllContacts(); // podria solamente hacer un get y no el filter. depende el caso si quiero mantener localmente la info o no
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  // const getFaces = (conctact) => {
  //   let random = Math.floor(Math.random() * 9);
  //   return urlLegoFace + random + ".jpg";
  // };

  return (
    <ul className="list-group mx-5">
      {contacts.map((contact, index) => (
        <li key={contact.id} className="list-group-item border mb-1">
          <div className="row align-items-center">
            <div className="col-2">
              <img
                src={urlLegoFace + index + ".jpg"}
                alt="Avatar"
                className="rounded-circle w-100"
              />
            </div>
            <div className="col-8">
              <h5 className="mb-0">Name: {contact.full_name}</h5>
              <p className="mb-0">Phone: {contact.phone}</p>
              <p className="mb-0">Email: {contact.email}</p>
              <p className="mb-0">Address: {contact.address}</p>
            </div>
            <div className="col-2">
              <Link to={`/edit-form/${contact.id}`}>
                <button className="btn btn-warning btn-block w-100 m-1">Edit</button>
              </Link>
              <button
                className="btn btn-danger btn-block w-100 m-1"
                onClick={() => deleteContactId(contact.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
