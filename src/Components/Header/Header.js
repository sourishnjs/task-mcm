import React from "react";
import "./Header.css";

const Page = (props) => {
  const total =
    props.tot.appointments.appset.length +
    props.tot.appointments.proview.length +
    props.tot.appointments.interested.length +
    props.tot.appointments.offeraccepted.length;

  return (
    <span className="header">
      <h2>Applicants</h2>
      <table className="tt">
        <thead className="thead">
          <tr>
            <th>{total}</th>
            <th>{props.tot.appointments.appset.length}</th>
            <th>{props.tot.appointments.proview.length}</th>
            <th>{props.tot.appointments.interested.length}</th>
            <th>{props.tot.appointments.offeraccepted.length}</th>
            <th>0</th>
            <th>0</th>
          </tr>
        </thead>
        <tbody className="tdata">
          <tr>
            <td>Total</td>
            <td>Appointment</td>
            <td>Viewed</td>
            <td>Interested</td>
            <td>Accepted</td>
            <td>New</td>
            <td>Others</td>
          </tr>
        </tbody>
      </table>
    </span>
  );
};

export default Page;
