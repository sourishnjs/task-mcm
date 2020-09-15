import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Route, match } from "react-router-dom";

import Header from "./Components/Header/Header";
import BidPicker from "./Components/Picker/BidPicker";
import Page from "./Components/Page/Page";
import Loading from "./Components/Loading/Loading";
import Search from "./Components/Search/Search";
import Error from "./Components/Error/Error";

import "./App.css";

const App = () => {
  const [app, setApp] = useState({});
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getApplicants();
  }, []);

  const getApplicants = async () => {
    try {
      const response = await Axios.get(
        "https://task-backendmcmakler.herokuapp.com/api/v1/appointments"
      );
      setApp(response.data.data);
      setLoad(false);
    } catch (error) {
      setError(true);
    }
  };

  if (app.appointments == null) {
    return <Loading />;
  } else {
    //IMPLEMENTING SEARCH
    const filterAppset = app.appointments.appset.filter(
      (x) =>
        x.name
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase()) ||
        x.mail
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
    );

    const filterProview = app.appointments.proview.filter(
      (x) =>
        x.name
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase()) ||
        x.mail
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
    );

    const filterInterested = app.appointments.interested.filter(
      (x) =>
        x.name
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase()) ||
        x.mail
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
    );

    const filterOfferAccepted = app.appointments.offeraccepted.filter(
      (x) =>
        x.name
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase()) ||
        x.mail
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
    );

    const filterData = [
      ...filterAppset,
      ...filterProview,
      ...filterInterested,
      ...filterOfferAccepted,
    ];

    return (
      <div className="container">
        {error ? (
          <Error />
        ) : (
          <>
            <Header tot={app} />
            <div className="block">
              <Search
                search={search}
                handleSearch={(e) => setSearch(e.target.value)}
              />

              <BidPicker />
            </div>
            <Page info={filterData} />
          </>
        )}
      </div>
    );
  }
};

export default App;

/*
.header {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  flex-direction: row;
}

<Header tot={data} />
<Page info={data} />
*/
