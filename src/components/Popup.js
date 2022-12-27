import React from 'react';
import Button from "react-bootstrap/Button";

function Popup(props) {
  return (props.trigger)? (
    <div classname="popup">
      <div classname="popup-inner">
        <Button className="close-btn"></Button>
        {props.children}
      </div>
      
    </div>
  ):"";
}

export default Popup
