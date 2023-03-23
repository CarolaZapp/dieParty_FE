import { useNavigate } from "react-router-dom";
import HeaderIntro from "./HeaderIntro.jsx";
import Footer from "./Footer.jsx";
import "../styles/chooseDesign.css";
import "../styles/buttons.css";

const ChooseDesign = () => {
  // useNavigate
  const navigate = useNavigate();

  // handleClick D1
  // navigate must be updated following Design is created
  const handleClickUserLoginD1 = () => {
    sessionStorage.setItem(
      "event",
      JSON.stringify({ theme: "Geburtstag", style: "Bunt" })
    );
    navigate("/userLoginD1");
  };

  // handleClick D2
  const handleClickInvitation = () => {
    sessionStorage.setItem(
      "event",
      JSON.stringify({ theme: "Geburtstag", style: "Rosen" })
    );
    navigate("/invitation");
  };

  // handleClick D3
  // navigate must be updated following Design is created
  const handleClickUserLoginD3 = () => {
    sessionStorage.setItem(
      "event",
      JSON.stringify({ theme: "Geburtstag", style: "Goldig" })
    );
    navigate("/userLoginD3");
  };

  return (
    <>
      <HeaderIntro />
      <div className="containerDesign">
        <div className="topDesign">
          <p>
            Beginnen Sie Ihre Veranstaltungs Vorbereitungen mit der Auswahl
            einer Designvorlage
          </p>
        </div>
        <div className="centerDesign">
          <div className="section-D1">
            <h1>Geburtstag</h1>
            <div className="imgD1" onClick={handleClickUserLoginD1}></div>
            <h2>Bunt</h2>
            <p>(noch in Entwicklung)</p>
            <button className="intro-two" onClick={handleClickUserLoginD1}>
              Auswählen
            </button>
          </div>
          <div className="section-D2">
            <h1>Geburtstag</h1>
            <div className="imgD2" onClick={handleClickInvitation}></div>
            <h2>Rosen</h2>
            <button className="intro-two" onClick={handleClickInvitation}>
              Auswählen
            </button>
          </div>
          <div className="section-D3">
            <h1>Geburtstag</h1>
            <div className="imgD3" onClick={handleClickUserLoginD3}></div>
            <h2>Goldig</h2>
            <p>(noch in Entwicklung)</p>
            <button className="intro-two" onClick={handleClickUserLoginD3}>
              Auswählen
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ChooseDesign;
