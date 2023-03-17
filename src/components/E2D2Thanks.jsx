// import { useNavigate } from "react-router-dom"; // not include at MVP
import "../styles/thanks.css";
import "../styles/buttons.css";

const E2D2Thanks = () => {
  // not included at MVP
  // useNavigate
  // const navigate = useNavigate();
  //
  // handleClick
  // const handleClickGalerie = () => {
  //   navigate("/galerie");
  // };

  return (
    <>
      <div className="containerThanks">
        <div className="bgFade">
          <div className="top-images">
            <div className="img-one"></div>
            <div className="img-two"></div>
            <div className="img-three"></div>
          </div>
          <div className="top-text">
            <h3 className="headline"> Vielen Dank</h3>
            <hr />
            <h4 className="who">Hanna & Jan</h4>
          </div>
          <div className="center-images">
            <div className="img-four"></div>
            <div className="img-five"></div>
          </div>
          <div className="center-text-area">
            <h4>Ihr Lieben,</h4>
            <p>
              wir hatten einen unvergesslichen Tag mit unzähligen wunderschönen
              Momenten. <br /> Dank euch wird er uns immer in Erinnerung
              bleiben.
              <br /> Wir möchten uns ganz herzlich für die zahlreichen
              Glückwünsche, Geschenke
              <br />
              und Aufmerksamkeiten zu unserem Event bedanken.
            </p>
          </div>
          <div className="bottom-image">
            <div className="img-six"></div>
          </div>
          <div className="bottom-text">
            <h3>26.08.2023</h3>
            {/* 
            // not included at MVP
            <button className="intro-one" onClick={handleClickGalerie}>
              Zur Bildergalerie
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default E2D2Thanks;
