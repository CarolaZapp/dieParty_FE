import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Intro from "./components/Intro.jsx";
import ChooseEvent from "./components/ChooseEvent.jsx";
import ChooseDesign from "./components/ChooseDesign.jsx";
// import UserRegister from "./components/UserRegister.jsx";
import UserLogin from "./components/UserLogin.jsx";

// Event2 Design2 - UserRegister, UserLogin, UserHome, UserInstruction
import E2D2UserRegister from "./components/E2D2UserRegister.jsx";
import E2D2UserLogin from "./components/E2D2UserLogin.jsx";
import E2D2UserHome from "./components/E2D2UserHome.jsx";
import E2D2UserInstruction from "./components/E2D2UserInstruction.jsx";

// Event2 Design2 - Invitation
import E2D2Invitation from "./components/E2D2Invitation.jsx";
import E2D2InvitationCreate from "./components/E2D2InvitationCreate.jsx";
import E2D2InvitationUser from "./components/E2D2InvitationUser.jsx";

// Event2 Design2 - Guestbook - not include at MVP
// import E2D2Guestbook from "./components/E2D2Guestbook.jsx";
// import E2D2GuestbookCreate from "./components/E2D2GuestbookCreate.jsx";
// import E2D2GuestbookUser from "./components/E2D2GuestbookUser.jsx";

// Event2 Design2 - Thanks
import E2D2Thanks from "./components/E2D2Thanks.jsx";
import E2D2ThanksCreate from "./components/E2D2ThanksCreate.jsx";
import E2D2ThanksUser from "./components/E2D2ThanksUser.jsx";

// Event2 Design2 - Galerie - not include at MVP
// import E2D2Galerie from "./components/E2D2Galerie.jsx";
// import E2D2GalerieCreate from "./components/E2D2GalerieCreate.jsx";
// import E2D2GalerieUser from "./components/E2D2GalerieUser.jsx";

// Event2 Design2 - Guest Forms and Reply
import E2D2GuestListCreate from "./components/E2D2GuestListCreate.jsx";
import E2D2GuestRegister from "./components/E2D2GuestRegister.jsx";
import E2D2EventCountdownPage from "./components/E2D2EventCountdownPage.jsx";

// Event2 Design2 - Data Tables
import E2D2ContactListGuest from "./components/E2D2ContactListGuests.jsx";
import E2D2EventDataGuests from "./components/E2D2EventDataGuests.jsx";
import E2D2EventSummeryDataGuests from "./components/E2D2EventSummeryDataGuests.jsx";

// Event2 Design2 - Guest Login - not include in MVP
// import E2D2GuestLogin from "./components/E2D2GuestLogin.jsx";
// import E2D2GuestLoginGuestbook from "./components/E2D2GuestLoginGuestbook.jsx";
// import E2D2GuestLoginGalerie from "./components/E2D2GuestLoginGalerie.jsx";

// // // Event2 Design1
import E2D1UserRegister from "./components/E2D1UserRegister.jsx";
import E2D1UserLogin from "./components/E2D1UserLogin.jsx";

// // // Event2 Design3
import E2D3UserRegister from "./components/E2D3UserRegister.jsx";
import E2D3UserLogin from "./components/E2D3UserLogin.jsx";

//  App
function App() {
  const [invitation, setInvitation] = useState({
    reason: "",
    comment: "",
    when: "",
    where: "",
    moreComment: "",
    who: "",
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/chooseEvent" element={<ChooseEvent />} />
        <Route path="/chooseDesign" element={<ChooseDesign />} />
        {/* <Route path="/userRegister" element={<UserRegister />} /> */}
        <Route path="/userLogin" element={<UserLogin />} />

        {/* // Event2 Design2 - UserRegister, UserLogin, UserHome, UserInstruction */}
        <Route path="/userRegisterD2" element={<E2D2UserRegister />} />
        <Route path="/userLoginD2" element={<E2D2UserLogin />} />
        <Route path="/userHome" element={<E2D2UserHome />} />
        <Route path="/userInstruction" element={<E2D2UserInstruction />} />

        {/* // Event2 Design2 - Invitation */}
        <Route path="/invitation" element={<E2D2Invitation />} />
        <Route
          path="/invitationCreate"
          element={
            <E2D2InvitationCreate
              invitation={invitation}
              setInvitation={setInvitation}
            />
          }
        />
        <Route
          path="/invitationUser/:eventId/:userGuestId"
          element={<E2D2InvitationUser />}
        />

        {/* // Event2 Design2 - Guestbook - not include at MVP */}
        {/* <Route path="/guestbook" element={<E2D2Guestbook />} />
        <Route path="/guestbookCreate" element={<E2D2GuestbookCreate />} />
        <Route path="/guestbookUser" element={<E2D2GuestbookUser />} /> 
        */}

        {/* // Event2 Design2 - Thanks */}
        <Route path="/thanks" element={<E2D2Thanks />} />
        <Route path="/thanksCreate" element={<E2D2ThanksCreate />} />
        <Route path="/thanksUser" element={<E2D2ThanksUser />} />

        {/* // Event2 Design2 - Galerie - not include at MVP */}
        {/* <Route path="/galerie" element={<E2D2Galerie />} />
        <Route path="/galerieCreate" element={<E2D2GalerieCreate />} />
        <Route path="/galerieUser" element={<E2D2GalerieUser />} /> 
        */}

        {/* // Event2 Design2 - Guest Forms and Reply */}
        <Route path="/guestListCreate" element={<E2D2GuestListCreate />} />
        <Route
          path="/guestRegister/:eventId/:userGuestId"
          element={<E2D2GuestRegister />}
        />
        <Route
          path="/eventCountdownPage"
          element={<E2D2EventCountdownPage />}
        />

        {/* // Event2 Design2 - Data Tables */}
        <Route path="/contactListGuests" element={<E2D2ContactListGuest />} />
        <Route path="/eventDataGuests" element={<E2D2EventDataGuests />} />
        <Route
          path="/eventSummeryDataGuests"
          element={<E2D2EventSummeryDataGuests />}
        />

        {/* // Event2 Design2 - Guest Login - not include in MVP */}
        {/* <Route path="/guestLogin" element={<E2D2GuestLogin />} />
        <Route path="/guestLoginGuestbook" element={<E2D2GuestLoginGuestbook />} />
        <Route path="/guestLoginGalerie" element={<E2D2GuestLoginGalerie />} /> */}

        {/* // // // Event2 Design1 */}
        <Route path="/userLoginD1" element={<E2D1UserLogin />} />
        <Route path="/userRegisterD1" element={<E2D1UserRegister />} />

        {/* // // // Event2 Design3 */}
        <Route path="/userLoginD3" element={<E2D3UserLogin />} />
        <Route path="/userRegisterD3" element={<E2D3UserRegister />} />
      </Routes>
    </div>
  );
}

export default App;
