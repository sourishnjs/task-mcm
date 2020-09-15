import React from "react";
import "./AppointmentSet.css";

const AppointmentSet = (props) => {
  return (
    <>
      <div className="card-containera">
        <b className="circlea">{props.data.initials}</b>
        <h2>{props.data.name}</h2>
        <p>{props.data.ph}</p>
        <p>{props.data.mail}</p>
        <b className="term">{props.data.date}</b>
      </div>
    </>
  );
};

export default AppointmentSet;
