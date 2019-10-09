import React from "react";
import Popup from "reactjs-popup";

import LogIn from "../../containers/LogIn/LogIn";

const tooltip = () =>(
  <Popup
    trigger={<button className="button"><i className="fa fa-sign-in"></i></button>}
    closeOnDocumentClick
  >
    <LogIn />
  </Popup>
);

export default tooltip;
