import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { host } from "../api/host.jsx";
import "../styles/invitation.css";
import "../styles/invitationCreate.css";
import "../styles/buttons.css";

const E2D2InvitationUser = () => {
  // useNavigate
  const navigate = useNavigate();

  // useParams
  const { eventId, userGuestId } = useParams();

  // handleClick
  const handleClickGuestRegister = () => {
    navigate(`/guestRegister/${eventId}/${userGuestId}`);
  };

  // useState
  const [invitation, setInvitation] = useState([]);

  // useEffect
  useEffect(() => {
    fetch(`${host}/invitation`, {
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
    <div className="containerInvitation">
      <div className="bgimg-one">
        <div className="caption-one">
          <h1>Einladung</h1>
        </div>
      </div>
      <div className="demoBox">
        <h3 className="demoH3">{invitation.reason}</h3>
        <p>{invitation.comment}</p>
      </div>
      <div className="bgimg-two">
        <div className="caption">
          <span className="transparent">Nach unten scrollen</span>
        </div>
      </div>
      <div className="textBox">
        <div className="text">
          <p>
            <strong>Wann?</strong>
          </p>
          <p>{invitation.when}</p>
        </div>
      </div>
      <div className="bgimg-three">
        <div className="caption">
          <span>Nach unten scrollen</span>
        </div>
      </div>
      <div className="textBox">
        <div className="text">
          <p>
            <strong>Wo?</strong>
          </p>
          <p>{invitation.where}</p>
        </div>
      </div>
      <div className="bgimg-one">
        <div className="caption-last">
          <h1>{invitation.moreComment}</h1>
        </div>
        <h3 className="bottom">{invitation.who}</h3>
        <button className="rueckmeldung" onClick={handleClickGuestRegister}>
          Zur Rückmeldung
        </button>
      </div>
    </div>
  );
};

export default E2D2InvitationUser;
