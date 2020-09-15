import React from "react";
import AppointmentSet from "../AppointmentSet/AppointmentSet";
import PropertyViewed from "../PropertyViewed/PropertyViewed";
import Interested from "../Interested/Interested";
import OfferAccepted from "../OfferAccepted/OfferAccepted";

import "./Page.css";

const Page = (props) => {
  console.log(props);

  const appointment = props.info.filter((x) => x.status === "appointment_set");

  const viewed = props.info.filter((x) => x.status === "property_viewed");

  const interested = props.info.filter((x) => x.status === "interested");

  const accepted = props.info.filter((x) => x.status === "offer_accepted");

  return (
    <>
      <h3>Appointment Set ({appointment.length})</h3>
      <div className="card-list">
        {appointment.map((x) => {
          return <AppointmentSet key={x.sr} data={x} />;
        })}
      </div>

      <h3>Property Viewed ({viewed.length})</h3>
      <div className="card-list">
        {viewed.map((x) => {
          return <PropertyViewed key={x.sr} data={x} />;
        })}
      </div>

      <h3>Interested ({interested.length})</h3>
      <div className="card-list">
        {interested.map((x) => {
          return <Interested key={x.sr} data={x} />;
        })}
      </div>

      <h3>Offer Accepted ({accepted.length})</h3>
      <div className="card-list">
        {accepted.map((x) => {
          return <OfferAccepted key={x.sr} data={x} />;
        })}
      </div>
    </>
  );
};

export default Page;

//{props.info.setbid.map((x) => {
//  return <PropertyViewed name={x.name} age={x.age} ph={x.ph} />;
//})}

//<Interested />
//<OfferAcepted />
//age={x.age} ph={x.ph};

//({props.info.appset.length})
//({props.info.proview.length})
