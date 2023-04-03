import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { host } from "../api/host.jsx";
import E2D2Footer from "./E2D2Footer.jsx";
import "../styles/userHome.css";
import "../styles/buttons.css";


const E2D2UserHome = () => {
  // useNavigate
  const navigate = useNavigate();

  // useParams
  const { eventId} = useParams();

  // useState
  const [events, setEvents] = useState([]);
  const [invitation, setInvitation] = useState([]);

  // useEffect - event
  useEffect(() => {
    fetch(`${host}/event`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => setEvents(json));
  }, []);

  // useEffect - invitation
  useEffect(() => {
    fetch(`${host}/invitation/${eventId}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => setInvitation(json));
  }, []);

  return (
    <>
      <div className="backimg">
        <div className="containerUserHome">
          <div className="leftStripe">
            <div>
              <h3 className="leftTitle">Mein Event</h3>
              <h5 className="event"> Event-Id: {events._id}</h5>
              <h5 className="event">Thema: {events.theme}</h5>
              <h5 className="event">Stil: {events.style}</h5>
            </div>
            <div>
              <h3 className="leftTitle">Anleitung</h3>
              <button
                className="userHome"
                onClick={() => {
                  navigate("/userInstruction");
                }}
              >
                Schritt für Schritt
              </button>
              <h3 className="leftTitle">Vorbereitung</h3>
              <button
                className="userHome"
                onClick={() => {
                  navigate("/invitationCreate");
                }}
              >
                Einladung personalisieren
              </button>
              <button
                className="userHome"
                onClick={() => {
                  navigate("/guestListCreate");
                }}
              >
                Gästeliste anlegen
              </button>

              {/* // not used at MVP -Version!!!!
            <button
              className="userHome"
              onClick={() => {
                navigate("/guestbookCreate");
              }}
            >
              Gästebuch personalisieren
            </button> */}
              <button
                className="userHome"
                onClick={() => {
                  navigate("/thanksCreate");
                }}
              >
                Danksagung personalisieren
              </button>
              {/* // not used at MVP -Version!!!!
            <button
              className="userHome"
              onClick={() => {
                navigate("/galerieCreate");
              }}
            >
              Galerie personalisieren
            </button> */}
            </div>
            <div>
              <h3 className="leftTitle">Planung</h3>
              <button
                className="userHome"
                onClick={() => {
                  navigate("/contactListGuests");
                }}
              >
                Gästeliste-Kontaktdaten
              </button>
              <button
                className="userHome"
                onClick={() => {
                  navigate("/eventDataGuests");
                }}
              >
                Gästeliste-Eventdaten
              </button>
              {/* // not used at MVP -Version!!!!
            <button
              className="userHome"
              onClick={() => {
                navigate("/eventSummeryDataGuests");
              }}
            >
              Auswertung-Gästedaten
            </button> */}
            </div>
            <div>
              <h3 className="leftTitle">Eventpage</h3>
              <button
                className="userHome"
                onClick={() => {
                  navigate("/invitationUser/:eventId/:userGuestId");
                }}
              >
                Einladung
              </button>
              <button
                className="userHome"
                onClick={() => {
                  navigate("/guestRegister/:eventId/:userGuestId");
                }}
              >
                Rückmeldung Gäste
              </button>
              <button
                className="userHome"
                onClick={() => {
                  navigate("/eventCountdownPage");
                }}
              >
                Bestätigung an Gäste
              </button>
              {/* // not used at MVP -Version!!!!
            <button
              className="userHome"
              onClick={() => {
                navigate("/guestbook");
              }}
            >
              Gästebuch
            </button> */}
              <button
                className="userHome"
                onClick={() => {
                  navigate("/thanksUser");
                }}
              >
                Danksagung
              </button>
              {/* // not used at MVP -Version!!!!
            <button
              className="userHome"
              onClick={() => {
                navigate("/galerie");
              }}
            >
              Galerie
            </button> */}
            </div>
          </div>

          {/*  // // // right Side part // // //  */}
          <div className="rightStripe">
            <div>
              <h2 className="rightHeadline">Geburtstag</h2>
              <hr />
              <h3 className="rightTitle">von {invitation.who}</h3>
            </div>
            <div className="timeline">
              <div className="containerRight right">
                <div className="contentTimeline">
                  <h2 className="timeH2">Versand Einladung bis: </h2>
                  {/* // not used at MVP -Version!!!! */}
                  <h2 className="timeH2"></h2>
                </div>
              </div>
              <div className="containerRight right">
                <div className="contentTimeline">
                  <h2 className="timeH2">Ende Rückmeldung:</h2>
                  <h2 className="timeH2">{invitation.comment}</h2>
                </div>
              </div>
              <div className="containerRight right">
                <div className="contentTimeline">
                  <h2 className="timeH2">Veranstaltung:</h2>
                  <h2 className="timeH2">{invitation.when}</h2>
                </div>
              </div>
              <div className="containerRight right">
                <div className="contentTimeline">
                  <h2 className="timeH2">Versand Danksagung bis:</h2>
                  {/* // not used at MVP -Version!!!! */}
                  <h2 className="timeH2"></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <E2D2Footer/>
    </>
  );
};

export default E2D2UserHome;
