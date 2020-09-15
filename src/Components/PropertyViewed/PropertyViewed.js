import React from "react";
import "./PropertyViewed.css";

const PropertViewed = (props) => {
  return (
    <div className="card-container">
      <b className="circle">{props.data.initials}</b>
      <h2>{props.data.name}</h2>
      <p>{props.data.ph}</p>
      <p>{props.data.mail}</p>
      <b className="age">{props.data.date}</b>
      <b className="bid">{props.data.bid}</b>
    </div>
  );
};

export default PropertViewed;
