import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { host } from "../api/host.jsx";
import styles from "../styles/forms.module.css";
import "../styles/buttons.css";

const E2D2GuestListCreate = () => {
  //useNavigate
  const navigate = useNavigate();

  //useState
  const Initial = {
    firstName: "",
    lastName: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    city: "",
    telephone: "",
    // birthday: "",
    email: "",
    group: "",
  };

  const [formData, setFormData] = useState(Initial);

  // handleChange
  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${host}/userGuest`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          console.log("Eingabe falsch", json.error);
        }
        if (json.approved) {
          setFormData(Initial);
          navigate("/contactListGuests");
        }
      });
  };
  return (
    <>
      <div className={styles.backgroundD2}>
        <div className={styles.centerStripeD2}>
          <h1 className={styles.headline}>Geburtstag</h1>
          <hr />
          <h2 className={styles.title}>Gast hinzufügen und einladen</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              name="firstName"
              placeholder="Vorname"
              onChange={handleChange}
              value={formData.firstName}
              required
            />
            <input
              className={styles.input}
              type="text"
              name="lastName"
              placeholder="Nachname"
              onChange={handleChange}
              value={formData.lastName}
              required
            />
            <input
              className={styles.input}
              type="text"
              name="street"
              placeholder="Strasse"
              onChange={handleChange}
              value={formData.street}
              required
            />
            <input
              className={styles.input}
              type="text"
              name="houseNumber"
              placeholder="Hausnummer"
              onChange={handleChange}
              value={formData.houseNumber}
              required
            />
            <input
              className={styles.input}
              type="text"
              name="zipCode"
              placeholder="Postleitzahl"
              onChange={handleChange}
              value={formData.zipCode}
              required
            />
            <input
              className={styles.input}
              type="text"
              name="city"
              placeholder="Stadt"
              onChange={handleChange}
              value={formData.city}
              required
            />
            <input
              className={styles.input}
              type="tel"
              name="telephone"
              placeholder="Telefon"
              onChange={handleChange}
              value={formData.telephone}
              required
            />
            {/* <input
              className={styles.input}
              type="text"
              name="birthday"
              placeholder="Geburtstag"
              onChange={handleChange}
              value={formData.birthday}
              required
            /> */}
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="email@mail.com"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <div className={styles.guests}>
              <label className={styles.labelSelect} htmlFor="group">
                Gruppe
              </label>
              <select
                className={styles.select}
                name="group"
                placeholder="Gruppe"
                onChange={handleChange}
                required
              >
                <option value="">bitte auswählen</option>
                <option value="familie">Familie</option>
                <option value="freunde">Freunde</option>
                <option value="kollegen">Kollegen</option>
                <option value="bekannte">Bekannte</option>
              </select>
            </div>
            <button className="submitLarge">Einladung abschicken</button>
            <button
              className="submitLarge"
              onClick={() => {
                navigate("/userHome");
              }}
            >
              Zurück zu mein Event
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default E2D2GuestListCreate;
