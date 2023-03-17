import { useNavigate } from "react-router-dom";
import "../styles/header.css";

const HeaderIntro = () => {
  // useNavigate
  const navigate = useNavigate();

  return (
    <div className="header">
      <button
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        dieP@rty
      </button>
      <div className="header-right">
        <button
          className="nav"
          onClick={() => {
            navigate("/userLogin");
          }}
        >
          Anmeldung
        </button>
        <button
          className="nav"
          onClick={() => {
            navigate("/userRegister");
          }}
        >
          Registrierung
        </button>
      </div>
    </div>
  );
};

export default HeaderIntro;
