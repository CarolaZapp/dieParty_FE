import { useNavigate } from "react-router-dom";
import HeaderIntro from "./HeaderIntro.jsx";
import Devices from "./Devices.jsx";
import Footer from "./Footer.jsx";
import "../styles/intro.css";

const Intro = () => {
  // useNavigate
  const navigate = useNavigate();

  return (
    <>
      <HeaderIntro />
      <div className="containerIntro">
        <div className="fadeBackground">
          <div className="center">
            <div className="section-one">
              <h1>dieP@rty</h1>
              <p>
                gibt Ihrer Veranstaltung einen digitalen Rahmen in jedem
                Format...
              </p>
              <p>
                Nutzen Sie unsere stilvollen Designvorlagen für ihre Vollbild
                Einladung & Danksagung
              </p>
              <p>
                Ein durchgehender Stil für alle Elemente ihrer Veranstaltung
              </p>
              <p>Gästelisten & Antwort-Management runden das Angebot ab</p>
            </div>
            <div className="section-device">
              <Devices />
            </div>
          </div>
          <div className="createInvitaion">
            <button
              className="intro-one"
              onClick={() => {
                navigate("/chooseDesign");
              }}
            >
              Eine Einladung erstellen
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Intro;
