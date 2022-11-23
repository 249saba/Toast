import { useState } from "react";
import { propType } from "prop-types";
import "./style.scss";
function Notification(props) {
  const [toastlist, setList] = useState(props.list);
  return (
    <div className="container">
      {toastlist.map((object) => {
        <div className="popup">
          <header>
            <label className="icon">x</label>
            <h2>{object.title}</h2>
          </header>
          <body>{object.description}</body>
        </div>;
      })}
    </div>
  );
}
Notification.propType = {
  //list: propType.array.isRequired,
};

export default Notification;
