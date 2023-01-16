import React from "react";
import "../Style/User.css";
//import { Link } from "react-router-dom";

const User = ({ id, name, username, email, phone, street }) => {
  return (
    <div className="container">
      <div className="container-item">
        <h1 className="id">#{id}</h1>
        <h2 className="name-username">
          {name} {username}
        </h2>
        <p>Email: {email}</p>
        <p>Celular: {phone}</p>
        <p>Ciudad: {street}</p>
      </div>
    </div>
  );
};

export default User;
