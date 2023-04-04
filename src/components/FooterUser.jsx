import { useNavigate } from "react-router-dom";
import "../styles/footer.css";
import "../styles/buttons.css"

const FooterUser = () => {
// useNavigate
  const navigate = useNavigate();
  return (
    <>
      <div className="footerUser">
        <div className="footerMain">
          <p> <strong>dieP@rty </strong>
          Finales Projekt DCI Weiterbildung, entwickelt von Carola Zapp, © 2023 </p>
        </div>
        <div className="footerLegals">
        <button
          className="footerButtonUser"
          onClick={() => {
            navigate("/impressum");
          }}
        >
          Impressum
        </button>
        <button
          className="footerButtonUser"
          onClick={() => {
            navigate("/pictureCredits");
          }}
          >
            Bildnachweise
        </button>
  
        <button
          className="footerButtonUser"
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

export default FooterUser;
