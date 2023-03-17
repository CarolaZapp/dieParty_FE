import { useEffect, useState } from "react";
import { host } from "../api/host.jsx";
import styles from "../styles/forms.module.css";

const E2D2UserInstruction = () => {
  // useState
  const [invitation, setInvitation] = useState([]);

  // useEffect
  useEffect(() => {
    fetch(`${host}/invitation`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => setInvitation(json));
  }, []);

  return (
    <div className={styles.backgroundD2}>
      <div className={styles.centerStripeD2}>
        <h1 className={styles.headline}>Anleitung</h1>
        <hr />
        <h2 className={styles.title}> Hallo {invitation.who},</h2>
        <h3 className={styles.text}>
          hier ein paar Informationen zur Benutzung dieser Eventhomepage:
        </h3>
        <div>
          <ol className={styles.liste}>
            <li>
              <strong>Einladung personalisieren </strong>
              <br></br>
              Bitte personalisiere als erstes die Einladung. <br></br>
              !! Dies ist sehr wichtig, da sie bei Anlage der einzelnen Gäste
              automatisch an die angegebene email-Adresse verschickt wird!!
            </li>
            <li>
              <strong>Personalisierte Einladung ansehen</strong> <br></br>
              Unter <strong>Eventpage</strong> Einladung ist die personalisierte
              Einladung zu sehen
            </li>
            <li>
              <strong>Gästeliste anlegen </strong>
              <br></br>
              Hier werden die Daten der Gäste eingetragen. <br></br>
              !! Die korrekte email-Adresse ist sehr wichtig damit die Einladung
              korrekt verschickt werden kann!!
            </li>
            <li>
              <strong>Gästeliste-Kontaktdaten</strong> <br></br>
              Hier sind die eingetragenen Kontaktdaten zu sehen.
            </li>
            <li>
              <strong>Gästeliste-Eventdaten</strong> <br></br>
              Hier sind die Daten der Rückmeldungen der Gäste zu sehen.<br></br>
              Sobald ein Gast das Antwortformular ausgefüllt und verschickt hat,
              können seine Daten hier eingesehen werden und für die weitere
              Planung verwendet werden.
            </li>
            <li>
              <strong>Rückmeldung Gäste Formular</strong> <br></br>
              Unter <strong>Eventpage</strong> Rückmeldung Gäste ist das
              Antwortformular für die Gäste zu sehen
            </li>
            <li>
              <strong>Bestätigung an Gäste</strong> <br></br>
              Unter <strong>Eventpage</strong> Bestätigung an Gäste ist die
              Antwort an die Gäste hinterlegt welche gesendet wird, wenn die
              Rückmeldung abgschickt ist.
            </li>
            <li>
              <strong>Feiern!</strong> <br></br>
              Viel Spass beim Feiern!
            </li>
            <li>
              <strong>Danksagung personalisieren</strong>
              <br></br>
              Personalisiere deine Danksagung mit eigenen Bildern und passe die
              Texte an.
            </li>
            <li>
              <strong>Personalisierte Danksagung ansehen</strong> <br></br>
              Unter <strong>Eventpage</strong> Danksagung ist die
              personalisierte Danksagung zu sehen
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default E2D2UserInstruction;
