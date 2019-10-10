import React from "react";
import Popup from "reactjs-popup";

import LogIn from "../../containers/LogIn/LogIn";

const tooltip = (props) =>(
  <Popup
    trigger={<button className="button"><i className="fa fa-sign-in"></i></button>}
    closeOnDocumentClick
  >
    <LogIn getStateLog={props.getStateLog}/>
  </Popup>
);

export default tooltip;
