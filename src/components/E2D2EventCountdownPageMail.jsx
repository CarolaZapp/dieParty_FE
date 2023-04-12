import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { host } from "../api/host.jsx";
import E2D2Footer from "./E2D2Footer.jsx";
import styles from "../styles/forms.module.css";

const E2D2EventCountdownPageMail = () => {
  // useState
  const [invitation, setInvitation] = useState([]);

  const { eventId } = useParams();
  console.log("Param Count eventId:", eventId);


  // useEffect
  useEffect(() => {
    fetch(`${host}/invitation/${eventId}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
console.log("get invitation countdownMail $ -json:",json);
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
      </div>
      <E2D2Footer/>
    </div>
  );
};

export default E2D2EventCountdownPageMail;
