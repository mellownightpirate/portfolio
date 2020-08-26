import React, { useState } from 'react';
import { findByLabelText } from '@testing-library/react';

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    return (
      <form className="form">
        <input id="inputID" style={textInput}
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder="First name"
          type="text"
          name="firstName"
          required
        />
        <input id="inputID" style={textInput}
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder="Last name"
          type="text"
          name="lastName"
          required
        />
        <input id="inputID" style={textInput}
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          name="email"
          required
        />
        <textarea id="inputID" style={textarea}
          value={message}
          onChange={e => setMessage(e.target.value)}
          type="textarea"
          name="message"
          required
        />
        <button style={button} type="submit">Submit</button>
      </form>
    );
  }
export default Form;

var textInput = {
    backgroundColor: "RGB(146, 139, 97)",
    borderStyle: "none",
    border: "1px solid rgb(9, 8, 8)",
    marginBottom: "10px",
    height: "50px",
    borderRadius: "12px",
    paddingLeft: "25px",
    fontFamily: "\"Lora\", serif",
    width: "100%",
}

var textarea = {
    backgroundColor: "RGB(146, 139, 97)",
    borderStyle: "none",
    border: "1px solid rgb(9, 8, 8)",
    marginBottom: "10px",
    height: "200px",
    borderRadius: "12px",
    paddingLeft: "25px",
    fontFamily: "\"Lora\", serif",
    width: "100%",
}

var button = {
    backgroundColor: "RGB(146, 139, 97)",
    border: "1px solid rgb(9, 8, 8)",
    color: "RGB(9, 8, 8)",
    height: "50px",
    borderRadius: "12px",
    width: "100px",
    textAlign: "center",
    fontFamily: "\"Lora\", serif",
    cursor: "pointer",
}
