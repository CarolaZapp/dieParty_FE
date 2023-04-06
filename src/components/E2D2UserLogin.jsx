import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { host } from "../api/host.jsx";
import E2D2Footer from "./E2D2Footer.jsx";
import styles from "../styles/forms.module.css";
import "../styles/buttons.css";

const E2D2UserLogin = () => {
  //useNavigate
  const navigate = useNavigate();

  // useState
  const Initial = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(Initial);

  // handleClick
  const handleClickRegister = () => {
    navigate("/userRegisterD2");
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
          throw new Error("Eingabe falsch");
        }
      })
      .then((json) => {
        console.log(json);
        navigate("/userHome");

    


        // if (!json.user.events) {
        //   fetch(`${host}/event`, {
        //     method: "POST",
        //     body: JSON.stringify({
        //       ...JSON.parse(sessionStorage.getItem("event")),
        //       user: json.user._id,
        //     }),
        //     headers: {
        //       "Content-type": "application/json; charset=UTF-8",
        //     },
        //   }).then((response) => {
        //     if (response.ok) {
        //       setFormData(Initial);
        //       navigate("/userHome");
        //     } else {
        //       throw new Error("Fehler bei Event Anlage");
        //     }
        //   });
        // } else {
        //   setFormData(Initial);
        //   navigate("/userHome");
        // }
      })
      .catch(console.log);
  };




  return (
    <>
      <div className={styles.backgroundD2}>
        <div className={styles.centerStripeD2}>
          <h1 className={styles.headline}>Geburtstag</h1>
          <hr />
          <h2 className={styles.title}>
            Zur weiteren Bearbeitung bitte anmelden!
          </h2>
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
            <button className="submit">Anmeldung</button>
          </form>
          <div className={styles.navTo}>
            <h5>
              Noch kein <strong>die P@rty</strong> Kunde?
              <button className="goTo" onClick={handleClickRegister}>
                <strong> Registrierung </strong>
              </button>
            </h5>
          </div>
        </div>
        <E2D2Footer/>
      </div>
    </>
  );
};

export default E2D2UserLogin;
