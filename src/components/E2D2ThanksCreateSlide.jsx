import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { host } from "../api/host.jsx";
import styles from "../styles/forms.module.css";
import "../styles/buttons.css";
import storePicture from "../lib/storePicture.js";

const E2D2ThanksCreateSlide = () => {
  // useNavigate
  const navigate = useNavigate();

  // useState
  const Initial = {
    topleft: "",
    topmiddle: "",
    topright: "",
    reason: "",
    who: "",
    middleleft: "",
    middleright: "",
    title: "",
    moreComment: "",
    bottom: "",
    comment: "",
  };

  const [formData, setFormData] = useState(Initial);

  // handleChange
  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeImage = async (event) => {
    const url = await storePicture(event.target.files[0]);
    //
    console.log("url:", url);
    //
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: url,
    }));
  };

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData();

    // Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    console.log(formData);
    fetch(`${host}/thanks`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.error) {
          console.log("Eingabe falsch", json.error);
        }
        if (json.approved) {
          setFormData(Initial);
          navigate("/userHome");
        }
      });
  };

  return (
    <>
      <div className={styles.thanksD2}>
        <div className={styles.rightSideD2}>
          <h1 className={styles.headline}>
            Personalisieren Sie Ihre Danksagung!
          </h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.guests}>
              <label className={styles.create} htmlFor="topleft">
                Bild 1: oben links
              </label>
              <input
                className={styles.input}
                type="file"
                name="topleft"
                placeholder="Bilddatei auswählen"
                onChange={handleChangeImage}
              />
            </div>
            <div className={styles.guests}>
              <label className={styles.create} htmlFor="topmiddle">
                Bild 2: oben Mitte
              </label>
              <input
                className={styles.input}
                type="file"
                name="topmiddle"
                placeholder="Bilddatei auswählen"
                onChange={handleChangeImage}
              />
            </div>
            <div className={styles.guests}>
              <label className={styles.create} htmlFor="topright">
                Bild 3: oben rechts
              </label>
              <input
                className={styles.input}
                type="file"
                name="topright"
                placeholder="Bilddatei auswählen"
                onChange={handleChangeImage}
              />
            </div>
            <div className={styles.guests}>
              <label className={styles.create} htmlFor="reason">
                Zeile 1: Anlass
              </label>
              <input
                className={styles.input}
                type="text"
                name="reason"
                placeholder="Vielen Dank"
                onChange={handleChange}
                value={formData.reason}
              />
            </div>
            <div className={styles.guests}>
              <label className={styles.create} htmlFor="who">
                Zeile 2: WER?
              </label>
              <input
                className={styles.input}
                type="text"
                name="who"
                placeholder="Hanna & Jan"
                onChange={handleChange}
                value={formData.who}
              />
            </div>
            <div className={styles.guests}>
              <label className={styles.create} htmlFor="middleleft">
                Bild 4: Mitte links
              </label>
              <input
                className={styles.input}
                type="file"
                name="middleleft"
                placeholder="Bilddatei auswählen"
                onChange={handleChangeImage}
              />
            </div>
            <div className={styles.guests}>
              <label className={styles.create} htmlFor="middleright">
                Bild 5: Mitte rechts
              </label>
              <input
                className={styles.input}
                type="file"
                name="middleright"
                placeholder="Bilddatei auswählen"
                onChange={handleChangeImage}
              />
            </div>
            <div className={styles.guests}>
              <label className={styles.create} htmlFor="title">
                Zeile 3: Anrede
              </label>
              <input
                className={styles.input}
                type="text"
                name="title"
                placeholder="Ihr Lieben,"
                onChange={handleChange}
                value={formData.title}
              />
            </div>
            <div className={styles.guests}>
              <label className={styles.create} htmlFor="moreComment">
                Textblock: Mitteilung
              </label>
              <textarea
                className={styles.textarea}
                type="text"
                name="moreComment"
                cols="10"
                rows="10"
                placeholder="
                wir hatten einen unvergesslichen Tag mit unzähligen wunderschönen Momenten.
                Dank euch wird er uns immer in Erinnerung bleiben.
                Wir möchten uns ganz herzlich für die zahlreichen Glückwünsche, Geschenke
                und Aufmerksamkeiten zu unserem Event bedanken."
                onChange={handleChange}
                value={formData.moreComment}
              />
            </div>
            <div className={styles.guests}>
              <label className={styles.create} htmlFor="bottom">
                Bild 6: Mitte unten
              </label>
              <input
                className={styles.input}
                type="file"
                name="bottom"
                placeholder="Bilddatei auswählen"
                onChange={handleChangeImage}
              />
            </div>
            <div className={styles.guests}>
              <label className={styles.create} htmlFor="comment">
                Zeile 4: Mitteilung / Datum
              </label>
              <input
                className={styles.input}
                type="text"
                name="comment"
                placeholder="26.08.2023"
                onChange={handleChange}
                value={formData.comment}
              />
            </div>
            <button className="submitLarge">Danksagung speichern</button>
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

export default E2D2ThanksCreateSlide;
