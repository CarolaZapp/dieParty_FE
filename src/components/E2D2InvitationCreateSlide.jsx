import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { host } from "../api/host.jsx";
import styles from "../styles/forms.module.css";
import "../styles/buttons.css";

const E2D2InvitationCreateSlide = ({ setInvitation }) => {
  // useNavigate
  const navigate = useNavigate();

  // useState
  const Initial = {
    reason: "",
    comment: "",
    when: "",
    where: "",
    moreComment: "",
    who: "",
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
    fetch(`${host}/invitation`, {
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
          setInvitation({ ...formData });
          navigate("/userHome");
        }
      });
  };

  return (
    <>
      <div className={styles.invitationD2}>
        <div className={styles.rightSideD2}>
          <h1 className={styles.headline}>
            Personalisieren Sie Ihre Einladung!
          </h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.guests}>
              <label className={styles.create} htmlFor="reason">
                Zeile 1: Anlass
              </label>
              <input
                className={styles.input}
                type="text"
                name="reason"
                placeholder="Wir möchten..."
                onChange={handleChange}
                value={formData.reason}
                required
              />
            </div>
            <div className={styles.guests}>
              <label className={styles.create} htmlFor="comment">
                Zeile 2: Mitteilung
              </label>
              <input
                className={styles.input}
                type="text"
                name="comment"
                placeholder="Bitte meldet euch..."
                onChange={handleChange}
                value={formData.comment}
                required
              />
            </div>
            <div className={styles.guests}>
              <label className={styles.create} htmlFor="when">
                Zeile 3: WANN?
              </label>
              <input
                className={styles.input}
                type="text"
                name="when"
                placeholder="Am Samtag, den 26.08.2023 um 15:00 Uhr "
                onChange={handleChange}
                value={formData.when}
                required
              />
            </div>
            <div className={styles.guests}>
              <label className={styles.create} htmlFor="where">
                Zeile 4: WO?
              </label>
              <input
                className={styles.input}
                type="text"
                name="where"
                placeholder="Bei uns zu Hause ... Musterweg 7, 12345 Musterdorf"
                onChange={handleChange}
                value={formData.where}
                required
              />
            </div>

            <div className={styles.guests}>
              <label className={styles.create} htmlFor="moreComment">
                Zeile 5: Weiterer Text
              </label>
              <input
                className={styles.input}
                type="text"
                name="moreComment"
                placeholder="Wir freuen uns auf Euch!"
                onChange={handleChange}
                value={formData.moreComment}
                required
              />
            </div>

            <div className={styles.guests}>
              <label className={styles.create} htmlFor="who">
                Zeile 6: WER?
              </label>
              <input
                className={styles.input}
                type="text"
                name="who"
                placeholder="Hanna & Jan"
                onChange={handleChange}
                value={formData.who}
                required
              />
            </div>

            <button className="submitLarge">Einladung speichern</button>
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

export default E2D2InvitationCreateSlide;
