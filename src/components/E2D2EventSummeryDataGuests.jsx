// // will follow soon... :-) not included at MVP

import { useEffect, useState } from "react";
import { host } from "../api/host.jsx";
import styles from "../styles/forms.module.css";
import "../styles/summery.css";

const E2D2EventSummeryDataGuests = () => {
  // useState
  const [userguests, setUserGuests] = useState([]);

  // useEffect
  useEffect(() => {
    fetch(`${host}/userGuest`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => setUserGuests(json));
  }, []);

  return (
    <>
      <div className={styles.backgroundD2}>
        <div className="centerStripeSummery">
          <h1 className={styles.headline}>Geburtstag</h1>
          <hr />
          <h2 className={styles.title}>Auswertung-Gästedaten</h2>

          <div className="containerSummery">
            <h3>Status:</h3>
            <div className="summery">
              <p>Einladungen: </p>
              <p>Zusagen:</p>
              <p>Absagen:</p>
              <p>offen:</p>
            </div>
            <h3>Teilnehmer:</h3>
            <div className="summery">
              <p>Erwachsene: </p>
              <p>Kinder:</p>
            </div>
            <h3>Benötigte Unterkünfte:</h3>
            <div className="summery">
              <p>Hotel: </p>
              <p>Pension:</p>
              <p>Sofa:</p>
            </div>
            <h3>Benötigte Menues:</h3>
            <div className="summery">
              <p>vegetarisch: {}</p>
              <p>vegan: </p>
            </div>
            <div>
              <h3>Unverträglichkeiten / Kommentare:</h3>
              <ul>
                {userguests.map((userguest) => (
                  <li>{userguest.comment}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default E2D2EventSummeryDataGuests;
