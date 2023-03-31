import "../styles/thanks.css";
import "../styles/thanksCreate.css";
import "../styles/buttons.css";
import E2D2ThanksCreateSlide from "./E2D2ThanksCreateSlide.jsx";
import E2D2Footer from "./E2D2Footer.jsx";

const E2D2ThanksCreate = () => {
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
          </div>
        </div>
        <div className="overlay">
          <E2D2ThanksCreateSlide />
        </div>
      </div>
      <E2D2Footer/>
    </>
  );
};

export default E2D2ThanksCreate;
