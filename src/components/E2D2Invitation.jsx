import { useNavigate } from "react-router-dom";
import E2D2Footer from "./E2D2Footer.jsx";
// import Footer from "./Footer.jsx";
import "../styles/invitation.css";
import "../styles/buttons.css";

const E2D2Invitation = () => {
  //useNavigate
  const navigate = useNavigate();

  // handleClick
  const handleClickLogin = () => {
    navigate("/userLoginD2");
  };

  return (
    <>
    <div>
      <div className="bgimg-one">
        <div className="caption-one">
          <h1>Einladung</h1>
        </div>
      </div>
      <div className="demoBox">
        <h3 className="demoH3">Wir möchten mit Euch Geburtstag feiern !</h3>
        <p>
          Bitte meldet euch bis zum 26.05.2023 über die Anmeldung am Ende der
          Seite an...
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
          <p>Am Samstag, den 26.08.2023 um 15:00 Uhr</p>
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
          <p>Bei uns zu Hause ... Musterweg 7, 12345 Musterdorf</p>
        </div>
      </div>
      <div className="bgimg-one">
        <div className="caption-last">
          <h1>Wir freuen uns auf Euch!</h1>
        </div>
        <h3 className="bottom">Hanna & Jan</h3>
        <button className="rueckmeldung" onClick={handleClickLogin}>
          Personalisieren
        </button>
        {/* <Footer/> */}
      </div>
    </div>
    <E2D2Footer/>
    </>
  );
};

export default E2D2Invitation;
