import React from "react";
import "./OfferAccepted.css";

const OfferAccepted = (props) => {
  return (
    <>
      <div className="card-containero">
        <b className="circleo">{props.data.initials}</b>
        <h2>{props.data.name}</h2>
        <p>{props.data.ph}</p>
        <p>{props.data.mail}</p>
        <b className="termo">{props.data.date}</b>{" "}
        <b className="bido">{props.data.bid}</b>
      </div>
    </>
  );
};

export default OfferAccepted;
