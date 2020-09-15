import React from "react";
import "./Interested.css";

const Interested = (props) => {
  return (
    <>
      <div className="card-containeri">
        <b className="circlei">{props.data.initials}</b>
        <h2>{props.data.name}</h2>
        <p>{props.data.ph}</p>
        <p>{props.data.mail}</p>
        <b className="termi">{props.data.date}</b>
        <b className="bidi">{props.data.bid}</b>
      </div>
    </>
  );
};

export default Interested;
