import { useNavigate, useParams} from "react-router-dom";
import { useState } from "react";
import { host } from "../api/host.jsx";
import styles from "../styles/forms.module.css";
import "../styles/buttons.css";
import E2D2Footer from "./E2D2Footer.jsx";

const E2D2RegisterGuestMail = () => {
  // useNavigate
  const navigate = useNavigate();

  // useState
  const Initial = {
    join: true,
    adults: "",
    kids: "",
    arrival: "",
    departure: "",
    lodging: false,
    kindlodging: "",
    vegetarian: false,
    vegan: false,
    comment: "",
  };

  const [formData, setFormData] = useState(Initial);

  // useParams
  const { eventId, userGuestId } = useParams();

  // handleChange
  const handleChange = (event) => {
    if (event.target.name === "join" || event.target.name === "lodging") {
      setFormData((prev) => ({
        ...prev,
        [event.target.name]: event.target.value === "true",
      }));
    } else if (
      event.target.name === "vegetarian" ||
      event.target.name === "vegan"
    ) {
      setFormData((prev) => ({
        ...prev,
        [event.target.name]: !prev[event.target.name],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  };

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const body = { formData, eventId, userGuestId };
    fetch(`${host}/userGuest`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          console.log("Eingabe falsch", json.eror);
        }
        if (json.approved) {
          setFormData(Initial);
          navigate(`/eventCountdownPageMail/${eventId}`);
        }
      });
  };
  return (
    <>
      <div className={styles.backgroundD2}>
        <div className={styles.centerStripeD2}>
          <h1 className={styles.headline}>Geburtstag</h1>
          <hr />
          <h2 className={styles.title}>Rückmeldung</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.paragraph}>Kannst Du, könnt Ihr kommen?</p>
            <div className={styles.radio}>
              <label className={styles.labelRadio} htmlFor="join">
                ja
              </label>
              <input
                type="radio"
                name="join"
                onChange={handleChange}
                value={true}
                checked={formData.join === true}
              />
              <label className={styles.labelRadio} htmlFor="join">
                nein
              </label>
              <input
                type="radio"
                name="join"
                onChange={handleChange}
                value={false}
                checked={formData.join === false}
              />
            </div>
            <div>
              <p className={styles.paragraph}>
                Schön, dass Du, Ihr zugesagt habt. Wer kommt?
              </p>
            </div>
            <div className={styles.guests}>
              <label className={styles.labelSelect} htmlFor="adults">
                Erwachsene
              </label>
              <select
                className={styles.selectGuests}
                name="adults"
                onChange={handleChange}
              >
                <option value="">bitte auswählen</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className={styles.guests}>
              <label className={styles.labelSelect} htmlFor="kids">
                Kinder
              </label>
              <select
                className={styles.selectGuests}
                name="kids"
                onChange={handleChange}
              >
                <option value="">bitte auswählen</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <p className={styles.paragraph}>Wann kommst Du, Ihr?</p>
            </div>
            <div className={styles.guests}>
              <label className={styles.labelSelect} htmlFor="arrival">
                Ankunft:
              </label>
              <input
                className={styles.input}
                type="text"
                name="arrival"
                onChange={handleChange}
                value={formData.arrival}
              />
              <label className={styles.labelSelect} htmlFor="departure">
                Abreise:
              </label>
              <input
                className={styles.input}
                type="text"
                name="departure"
                onChange={handleChange}
                value={formData.departure}
              />
            </div>
            <p className={styles.paragraph}>
              Brauchst Du, braucht Ihr eine Unterkunft?
            </p>
            <div className={styles.radio}>
              <label className={styles.labelRadio} htmlFor="lodging">
                ja
              </label>
              <input
                type="radio"
                name="lodging"
                onChange={handleChange}
                value={true}
                checked={formData.lodging === true}
              />
              <label className={styles.labelRadio} htmlFor="lodging">
                nein
              </label>
              <input
                type="radio"
                name="lodging"
                onChange={handleChange}
                value={false}
                checked={formData.lodging === false}
              />
            </div>
            <div className={styles.guests}>
              <label className={styles.labelSelect} htmlFor="kindlodging">
                Welche Art Unterkunft möchtest Du, Ihr?
              </label>
              <select
                className={styles.select}
                name="kindlodging"
                onChange={handleChange}
              >
                <option value="">bitte auswählen</option>
                <option value="hotel">Hotel</option>
                <option value="pension">Pension</option>
                <option value="sofa">Sofa</option>
              </select>
            </div>
            <div>
              <p className={styles.paragraph}>
                Womit können wir Dir, können wir Euch beim Menü eine Freude
                machen? Wer möchte vegetarisch oder vegan essen, bzw. hat
                Nahrungsmittel-Unverträglichkeiten oder Allergien?
              </p>
            </div>
            <div className={styles.radio}>
              <label className={styles.labelRadio} htmlFor="vegetarian">
                vegetarisch
              </label>
              <input
                className={styles.input}
                type="checkbox"
                name="vegetarian"
                onChange={handleChange}
                checked={formData.vegetarian}
              />
              <label className={styles.labelRadio} htmlFor="vegan">
                vegan
              </label>
              <input
                className={styles.input}
                type="checkbox"
                name="vegan"
                onChange={handleChange}
                checked={formData.vegan}
              />
            </div>
            <textarea
              className={styles.textarea}
              type="text"
              name="comment"
              cols="10"
              rows="10"
              placeholder="Bitte notiere Unverträglichkeiten oder 
                Allergien damit die Küche darauf 
                Rücksicht nehmen kann"
              onChange={handleChange}
              value={formData.comment}
            />
            <button className="submitLarge">Rückmeldung abschicken</button>
          </form>
        </div>
        <E2D2Footer/>
      </div>
    </>
  );
};

export default E2D2RegisterGuestMail;
