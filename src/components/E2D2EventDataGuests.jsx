import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { host } from "../api/host.jsx";
import styles from "../styles/forms.module.css";
import "../styles/contactList.css";

const E2D2EventDataGuests = () => {
  //useNavigate
  const navigate = useNavigate();

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
        <div className="centerStripeTable">
          <h1 className={styles.headline}>Geburtstag</h1>
          <hr />
          <h2 className={styles.title}>Gästeliste-Eventdaten</h2>

          <div className="tableContact">
            <table>
              <thead>
                <tr>
                  <th>Vorname</th>
                  <th>Nachname</th>
                  <th>Gruppe</th>
                  <th>Zusage</th>
                  <th>Absage</th>
                  <th>Erwachsene</th>
                  <th>Kinder</th>
                  <th>Ankunft</th>
                  <th>Abreise</th>
                  <th>Unterkunft</th>
                  <th>vegetarisch</th>
                  <th>vegan</th>
                  <th>Unverträglichkeiten</th>
                </tr>
              </thead>
              <tbody>
                {userguests.map((userguest) => (
                  <tr>
                    <td>{userguest.firstName}</td>
                    <td>{userguest.lastName}</td>
                    <td className="capitalize">{userguest.group}</td>
                    <td>{userguest.join ? "ja" : "nein"}</td>
                    <td>{userguest.join ? "nein" : "ja"}</td>
                    <td>{userguest.adults}</td>
                    <td>{userguest.kids}</td>
                    <td>{userguest.arrival}</td>
                    <td>{userguest.departure}</td>
                    <td className="capitalize">{userguest.kindlodging}</td>
                    <td>{userguest.vegetarian ? "ja" : "nein"}</td>
                    <td>{userguest.vegan ? "ja" : "nein"}</td>
                    <td>{userguest.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="buttonContainer">
            <button
              className="submitLarge"
              onClick={() => {
                navigate("/userHome");
              }}
            >
              Zurück zu mein Event
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default E2D2EventDataGuests;
