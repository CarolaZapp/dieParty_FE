import { useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";
import "../styles/intro.css";
import "../styles/impressum.css"
import "../styles/buttons.css"

const Impressum = () => {
// useNavigate
  const navigate = useNavigate();  
  return (
    <>
      <div className="containerIntro">
        <div className="fadeBackground">
          <div className="impressum">
            <h1>Impressum</h1>
            <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
            <h3>Ansprechpartnerin / Betreiberin der Seite:</h3>
            <p>Carola Zapp</p>
            <h3>Adresse:</h3>
            <p>Zum Bayenhof 5<br />51789 Lindlar</p>
            <h3>Kontakt:</h3>
            <p>Telefon: +49 (0) 151 59496998<br />
              E-Mail: dieparty@carolaz.app</p>
            <p>Quelle: <a href="https://www.e-recht24.de">www.e-recht24.de</a></p>
            <button
            className="back"
            onClick={() => {
            navigate("/");
            }}
            >
            Startseite
            </button>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default Impressum;