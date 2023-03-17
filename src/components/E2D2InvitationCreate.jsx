import "../styles/invitation.css";
import "../styles/invitationCreate.css";
import "../styles/buttons.css";
import E2D2InvitationCreateSlide from "./E2D2InvitationCreateSlide.jsx";

const E2D2InvitationCreate = ({ invitation, setInvitation }) => {
  return (
    <div className="containerInvitation">
      <div className="bgimg-one">
        <div className="caption-one">
          <h1>Einladung</h1>
        </div>
      </div>
      <div className="demoBox">
        <h3 className="demoH3">
          {invitation.reason === ""
            ? "Wir möchten mit Euch Geburtstag feiern !"
            : invitation.reason}
        </h3>
        <p>
          {invitation.comment === ""
            ? "Bitte meldet euch bis zum 26.05.2023 über die Anmeldung am Ende der Seite an..."
            : invitation.comment}
        </p>
      </div>
      <div className="bgimg-two">
        <div className="caption">
          <span className="transparent">Nach unten scrollen</span>
        </div>
      </div>
      <div className="textBox">
        <div className="text">
          <p>
            <strong>Wann?</strong>
          </p>
          <p>
            {invitation.when === ""
              ? "Am Samstag, den 26.08.2023 um 15:00 Uhr"
              : invitation.when}
          </p>
        </div>
      </div>
      <div className="bgimg-three">
        <div className="caption">
          <span>Nach unten scrollen</span>
        </div>
      </div>
      <div className="textBox">
        <div className="text">
          <p>
            <strong>Wo?</strong>
          </p>
          <p>
            {invitation.where === ""
              ? "Bei uns zu Hause ... Musterweg 7, 12345 Musterdorf"
              : invitation.where}
          </p>
        </div>
      </div>
      <div className="bgimg-one">
        <div className="caption-last">
          <h1>
            {invitation.moreComment === ""
              ? "Wir freuen uns auf Euch!"
              : invitation.moreComment}
          </h1>
        </div>
        <h3 className="bottom">
          {invitation.who === "" ? "Hanna & Jan" : invitation.who}
        </h3>
      </div>
      <div className="overlay">
        <E2D2InvitationCreateSlide setInvitation={setInvitation} />
      </div>
    </div>
  );
};

export default E2D2InvitationCreate;
