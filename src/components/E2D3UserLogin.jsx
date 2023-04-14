import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { host } from "../api/host.jsx";
import E2D3Footer from "./E2D3Footer.jsx";
import styles from "../styles/forms.module.css";
import "../styles/buttons.css";

const E2D3UserLogin = () => {
  //useNavigate
  const navigate = useNavigate();

  //useState
  const Initial = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(Initial);

  // handleClick
  const handleClickRegister = () => {
    // navigate("/userRegisterD3"); // as long design not ready
  };

  // handleChange
  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // handleSubmit
  // re-check and update compared to E2D2UserLogin when Design created
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${host}/user/login`, {
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
          navigate("/userHome");
        }
      });
  };

  return (
    <>
      <div className={styles.backgroundD3}>
        <div className={styles.centerStripeD3}>
          <h1 className={styles.headline}>Geburtstag</h1>
          <hr />
          <h2 className={styles.title}>
            Zur weiteren Bearbeitung bitte anmelden!
          </h2>
            {/* <form className={styles.form} onSubmit={handleSubmit}> // as long design not ready */}
            <form className={styles.form}>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="email@mail.com"
              onChange={handleChange}
              value={formData.email}
              // required
              disabled // as long design not ready
            />

            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Passwort"
              onChange={handleChange}
              value={formData.password}
              // required
              disabled // as long design not ready
            />
            <button className="submit">Anmelden</button>
          </form>
          <div className={styles.navTo}>
            <h5>
              Noch kein <strong>die P@rty</strong> Kunde?
              <button className="goTo" onClick={handleClickRegister}>
                <strong> Registrierung </strong>
              </button>
            </h5>
          </div>
          {/* Under development */}
          <div className={styles.underDevelopment}>
            <p>
              Diese Designvorlage ist derzeit noch in der Entwicklung und daher
              noch nicht in Funktion! <br></br> Vielen Dank für Ihr Verständnis.
            </p>
          </div>
          <div className="buttonContainer">
          <button
              className="submitLarge"
              onClick={() => {
                navigate("/chooseDesign");
              }}
            >
              Zurück zur Auswahl
            </button>
        </div>
        </div>
        <E2D3Footer />
      </div>
    </>
  );
};

export default E2D3UserLogin;
