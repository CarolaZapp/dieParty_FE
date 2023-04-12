import { useNavigate } from "react-router-dom"; 
import { useEffect, useState } from "react";
import { host } from "../api/host.jsx";
import "../styles/thanksCreate.css";
import "../styles/buttons.css";

const E2D2ThanksUser = () => {
  // useNavigate
  const navigate = useNavigate();
  
  // not included at MVP
  // handleClick
  // const handleClickGalerie = () => {
  //   navigate("/galerie");
  // };

  // useState
  const [thanks, setThanks] = useState([]);

  // useEffect
  useEffect(() => {
    fetch(`${host}/thanks`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setThanks(json));
  }, []);

  return (
    <>
      <div className="containerThanks">
        <div className="bgFade">
          <div className="top-images">
            <div>
              <img src={thanks.topleft} className="img-one" />
            </div>
            <div>
              <img src={thanks.topmiddle} className="img-two" />
            </div>
            <div>
              <img src={thanks.topright} className="img-three" />
            </div>
          </div>
          <div className="top-text">
            <h3 className="headline">{thanks.reason}</h3>
            <hr />
            <h4 className="who">{thanks.who}</h4>
          </div>
          <div className="center-images">
            <div>
              <img src={thanks.middleleft} className="img-four" />
            </div>
            <div>
              <img src={thanks.middleright} className="img-five" />
            </div>
          </div>
          <div className="center-text-area">
            <h4>{thanks.title}</h4>
            <p>{thanks.moreComment}</p>
          </div>
          <div className="bottom-image">
            <div>
              <img src={thanks.bottom} className="img-six" />
            </div>
          </div>
          <div className="bottom-text">
            <h3>{thanks.comment}</h3>
            {/* 
            // not included at MVP
            <button className="intro-one" onClick={handleClickGalerie}>
              Zur Bildergalerie
            </button> */}
          </div>
          <div className="buttonContainer">
          <button
              className="intro-one"
              onClick={() => {
                navigate("/userHome");
              }}
            >
              Zurück zu mein Event
            </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default E2D2ThanksUser;
