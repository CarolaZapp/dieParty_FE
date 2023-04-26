import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { host } from "../api/host.jsx";
import FooterUser from "./FooterUser.jsx";
import styles from "../styles/forms.module.css";
import "../styles/buttons.css";

const UserLogin = () => {
  //useNavigate
  const navigate = useNavigate();

  // useState
  const Initial = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(Initial);

  // handleClick
  // const handleClickRegister = () => {
  //   navigate("/userRegister");
  // };

  const handleClickAuswahl = () => {
    navigate("/chooseDesign");
  };

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
    fetch(`${host}/user/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(alert("Schon als Kunde registriert? Die Eingabe passt nicht zur Registrierung! Bitte zunächst eine Designvorlage auswählen und registrieren! Danke!"));
        }
      })
      .then((json) => {
        navigate("/userHome");
      })
      .catch(console.log);
  };

  return (
    <>
      <div className={styles.background}>
        <div className={styles.backgroundFade}>
          <div className={styles.centerStripe}>
            <h1 className={styles.headline}>Anmeldung</h1>
            <hr />
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
              <button className="submit">Anmelden</button>
            </form>
            <div className={styles.navTo}>
              <h5>
                Noch kein <strong>die P@rty</strong> Kunde?
                {/* <button className="goTo" onClick={handleClickRegister}>
                  <strong> Registrierung </strong>
                </button> */}
                <p>
                  Bitte zunächst eine Designvorlage auswählen!
                  <button className="goTo" onClick={handleClickAuswahl}>
                    <strong> zur Auswahl </strong>
                  </button>
                </p>
              </h5>
            </div>
          </div>
          <FooterUser />
        </div>
      </div>
    </>
  );
};

export default UserLogin;
