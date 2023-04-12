import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { host } from "../api/host.jsx";
import E2D2Footer from "./E2D2Footer.jsx";
import styles from "../styles/forms.module.css";
import "../styles/buttons.css";

const E2D2EventCountdownPage = () => {
  // useNavigate
  const navigate = useNavigate();

  // useState
  const [invitation, setInvitation] = useState([]);

  // useEffect
  useEffect(() => {
    fetch(`${host}/invitation`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setInvitation(json)});
  }, []);

  return (
    <div className={styles.backgroundD2}>
      <div className={styles.centerStripeD2}>
        <h1 className={styles.headline}>Geburtstag</h1>
        <hr />

        <div>
          <h2 className={styles.title}>{invitation.moreComment}</h2>
          <h2 className={styles.title}>{invitation.when}</h2>
          <h2 className={styles.title}>{invitation.where}</h2>
          <h2 className={styles.title}> bis dahin ... </h2>
          <h2 className={styles.title}> Viele liebe Grüße {invitation.who}</h2>
        </div>
        <div className="buttonContainer">
          <button
              className="submitLarge"
              onClick={() => {
                navigate("/userHome");
              }}
            >
              Zurück zu mein Event
            </button>
        </div>
      </div>
      <E2D2Footer/>
    </div>
  );
};

export default E2D2EventCountdownPage;
