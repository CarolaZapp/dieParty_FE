import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { host } from "../api/host.jsx";
import E2D2Footer from "./E2D2Footer.jsx";
import styles from "../styles/forms.module.css";
import "../styles/buttons.css";

const E2D2UserRegister = () => {
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
    birthday: "",
    email: "",
    password: "",
  };

  const [event, setEvent] = useState("");
  const [formData, setFormData] = useState(Initial);


  useEffect(() => {
    if (sessionStorage){
      setEvent(JSON.parse(sessionStorage.getItem("event")));
    } 
    sessionStorage.clear();
    console.log("Sitzungsspeicher gelöscht: ", sessionStorage);
  }, []);
  

  useEffect(() => {
    if(event){
      fetch(`${host}/event`, {
        method: "POST",
        body: JSON.stringify(event),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      } ) 
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setFormData((prev) => ({
          ...prev,
          events: json._id
        }));
      }) 
    }
  }, [event]);

  
  // handleClick  
  const handleClickLogin = () => {
    navigate("/userLoginD2");
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
    fetch(`${host}/user`, {
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

        if (json.approved) {
          setFormData(Initial);
          navigate("/userLoginD2");
        }
      });
  };

  return (
    <>
      <div className={styles.backgroundD2}>
        <div className={styles.centerStripeD2}>
          <h1 className={styles.headline}>Geburtstag</h1>
          <hr />
          <h2 className={styles.title}>Registrierung</h2>
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
            <input
              className={styles.input}
              type="text"
              name="birthday"
              placeholder="Geburtstag"
              onChange={handleChange}
              value={formData.birthday}
              required
            />
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
            <p className={styles.password}>Das Passwort soll mindestens acht Zeichen enthalten, davon mindestens einen Kleinbuchstaben, mindestens einen Großbuchstaben, mindestens eine Zahl und mindestens ein Sonderzeichen (z.B.: ! § $ % & / = ? + #). Danke!</p>
            <button className="submit">Registrieren</button>
          </form>
          <div className={styles.navTo}>
            <h5>
              Schon <strong>dieP@rty</strong> Kunde?
              <button className="goTo" onClick={handleClickLogin}>
                <strong>Anmeldung</strong>
              </button>
            </h5>
          </div>
        </div>
        <E2D2Footer/>
      </div>
    </>
  );
};

export default E2D2UserRegister;
