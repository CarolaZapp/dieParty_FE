// not used at MVP -Version!!!!

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { host } from "../api/host.jsx";
import styles from "../styles/forms.module.css";
import "../styles/buttons.css";

const E2D2LoginGuest = () => {
  // useNavigate
  const navigate = useNavigate();

  // useState
  const Initial = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(Initial);

  // handleCXhange
  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${host}/userGuest/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          console.log("Eingabe falsch", json.error);
        }
        if (json.message) {
          setFormData(Initial);
          navigate("/guestRegister");
        }
      });
  };

  return (
    <>
      <div className={styles.backgroundD2}>
        <div className={styles.centerStripeD2}>
          <h1 className={styles.headline}>Geburtstag</h1>
          <hr />
          <h2 className={styles.title}>Hanna & Jan</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="email@mail.com"
              onChange={handleChange}
              value={formData.email}
              required
            />

            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Passwort"
              onChange={handleChange}
              value={formData.password}
              required
            />
            <button className="submit">Zum Geburtstag</button>
          </form>
          <div className={styles.guestFeedback}>
            <h5>
              Bitte mit der Email-Adresse der Einladung anmelden! <br />
              Passwort mit mindestens 8 Zeichen!
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default E2D2LoginGuest;
