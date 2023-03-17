import { useEffect, useState } from "react";
import { host } from "../api/host.jsx";
import styles from "../styles/forms.module.css";
import "../styles/contactList.css";

const E2D2ContactListGuests = () => {
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
          <h2 className={styles.title}>Gästeliste-Kontaktdaten</h2>

          <div className="tableContact">
            <table>
              <thead>
                <tr>
                  <th>Vorname</th>
                  <th>Nachname</th>
                  <th>email</th>
                  <th>verschickt</th>
                  <th>Id</th>
                  <th>Strasse</th>
                  <th>Hausnummer</th>
                  <th>Postleitzahl</th>
                  <th>Stadt</th>
                  <th>Telefon</th>
                  <th>Geburtstag</th>
                </tr>
              </thead>
              <tbody>
                {userguests.map((userguest) => (
                  <tr>
                    <td>{userguest.firstName}</td>
                    <td>{userguest.lastName}</td>
                    <td>{userguest.email}</td>
                    <td>{userguest.send ? "ja" : "nein"}</td>
                    <td>{userguest._id}</td>
                    <td>{userguest.street}</td>
                    <td>{userguest.houseNumber}</td>
                    <td>{userguest.zipCode}</td>
                    <td>{userguest.city}</td>
                    <td>{userguest.telephone}</td>
                    <td>{userguest.birthday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default E2D2ContactListGuests;
