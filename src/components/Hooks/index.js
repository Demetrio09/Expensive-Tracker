import React, { useState } from "react";
import "../Form/style.css";

const Form = () => {
  const [firstName, setFirtsName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassord] = useState();

  const handleSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!firstName || !lastName) {
      alert("you must fill first and last name");
    } else if (password.length < 5) {
      alert("pass must be longer than 5");
    } else {
      setPassord(e.target.value);
      alert(`Welcome ${firstName} ${lastName}`);
    }
  };

  return (
    <div>
      <p>
        Hello {firstName} {lastName}
      </p>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={(e) => setFirtsName(e.target.value)}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={password}
          name="password"
          onChange={(e) => setPassord(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
