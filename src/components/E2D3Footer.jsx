import { useNavigate } from "react-router-dom";
import "../styles/footer.css";
import "../styles/buttons.css"

const E2D3Footer = () => {
// useNavigate
  const navigate = useNavigate();
  return (
    <>
      <div className="footerE2D3">
        <div className="footerMain">
        <p> <strong>dieP@rty </strong>
        Finales Projekt DCI Weiterbildung, entwickelt von Carola Zapp, © 2023 </p>
        </div>
        <div className="footerLegals">
        <button
          className="footerButtonE2D3"
          onClick={() => {
          navigate("/impressum");
          }}
          >
          Impressum
        </button>
        <button
          className="footerButtonE2D3"
          onClick={() => {
            navigate("/pictureCredits");
          }}
          >
            Bildnachweise
        </button>
        <button
          className="footerButtonE2D3"
          onClick={() => {
            navigate("/privacyPolicy");
          }}
        >
          Datenschutzerklärung
        </button>
        </div>
      </div>
    </>
  );
};

export default E2D3Footer;
