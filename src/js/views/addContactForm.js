import React, { useState } from "react";

const urlApiPost = "https://assets.breatheco.de/apis/fake/contact/";

const AddContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newcontact = {
      full_name: fullName,
      email: email,
      agenda_slug: "agenda-flaco",
      address: "Avellaneda",
      phone: phone,
    };

    setFullName("");
    setPhone("");
    setEmail("");

    // hacer el POST...
    console.log("log de json", JSON.stringify(newcontact));
    fetch(urlApiPost, {
      method: "POST",
      body: JSON.stringify(newcontact), // data can be a `string` or  an {object} which comes from somewhere further above in our application
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then((response) => console.log("Success:", response))
      .catch((error) => alert(error));
  };

  return (
    <form className="EditContactForm mx-5" onSubmit={handleSubmit}>
      <div className="form-group row mb-1">
        <label htmlFor="fullName" className="col-sm-2 col-form-label">
          Full Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group row mb-1">
        <label htmlFor="phone" className="col-sm-2 col-form-label">
          Phone
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-success mt-3">
        Done
      </button>
    </form>
  );
};

export default AddContactForm;
