import { useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";
import "../styles/intro.css";
import "../styles/pictureCredits.css";
import "../styles/buttons.css";

const PictureCredits = () => {
// useNavigate
const navigate = useNavigate();  
  return (
    <>
      <div className="containerIntro">
        <div className="fadeBackground"> 
          <div className="pictureCredits">
            <h1>Bildnachweise:</h1>
              <div className="containerPictureCredits">
                <div className="item">
                  <div className="imgC1"></div>
                  <div>
                  Bild von <a href="https://pixabay.com/de/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7552862">Gerd Altmann</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7552862">Pixabay</a>
                  </div>
                </div>
                {/* // */}
                <div className="item">
                  <div className="imgC2"></div>
                  <div>
                  Bild von <a href="https://pixabay.com/de/users/castleguard-2970404/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1566792">Rebekka D</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1566792">Pixabay</a>
                  </div>
                </div>
                {/* // */}
                <div className="item">
                  <div className="imgC3"></div>
                  <div>
                  Bild von <a href="https://pixabay.com/de/users/רויטל-20275415/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6369290">רויטל</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6369290">Pixabay</a>
                  </div>
                </div>
                {/* // */}
                <div className="item">
                  <div className="imgC4"></div>
                  <div>
                  Bild von <a href="https://pixabay.com/de/users/escience_ai_art_vsg-13881682/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7747590">Vanessa SG</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7747590">Pixabay</a>
                  </div>
                </div>
                {/* // */}
                <div className="item">
                  <div className="imgC5"></div>
                  <div>
                  Bild von <a href="https://pixabay.com/de/users/jillwellington-334088/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3194062">Jill Wellington</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3194062">Pixabay</a>
                  </div>
                </div>
                {/* // */}
                <div className="item">
                  <div className="imgC6"></div>
                  <div>
                  Bild von <a href="https://pixabay.com/de/users/gamagapix-14212960/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5373745">Gabi</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5373745">Pixabay</a>
                  </div>
                </div>
                {/* // */}
                <div className="item">
                  <div className="imgC7"></div>
                  <div>
                  Bild von <a href="https://pixabay.com/de/users/jillwellington-334088/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1964457">Jill Wellington</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1964457">Pixabay</a>
                  </div>
                </div>
                {/* // */}
                <div className="item">
                  <div className="imgC8"></div>
                  <div>
                  Bild von <a href="https://pixabay.com/de/users/stux-12364/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=194110">Stefan Schweihofer</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=194110">Pixabay</a>
                  </div>
                </div>  
              </div>
              <div>
                <button className="back" onClick={() => {
                  navigate("/");
                  }}>
                  Startseite
                </button>
              </div>
            </div>
          </div>
        </div>
      <Footer />
      </>
  );
};

export default PictureCredits;
