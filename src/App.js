import { useState } from "react";

import "./App.css";
import Notification from "./Notification";
function App() {
  const [list, setList] = useState();
  const buttons = [
    { label: "success", type: "success" },
    { label: "warning", type: "warning" },
    { label: "danger", type: "danger" },
    { label: "info", type: "info" },
  ];
  const toastprops = {
    title: "Success",
    description: "This is a success toast component",
    // icon: checkIcon,
  };

  const setToastProps = (type) => {
    switch (type) {
      case "success":
        toastprops = {
          title: "Success",
          description: "This is a success toast component",
          // icon: checkIcon,
        };
        break;
      case "warning":
        toastprops = {
          title: "Warning",
          description: "This is a warning toast component",
          //icon: warningIcon,
        };
        break;
      case "danger":
        toastprops = {
          title: "Danger",
          description: "This is an error toast component",
          backgroundColor: "#d9534f",
          //  icon: errorIcon,
        };
        break;
      case "info":
        toastprops = {
          title: "Info",
          description: "This is an info toast component",
          backgroundColor: "#5bc0de",
          //   icon: infoIcon,
        };
        break;

      default:
        break;
    }
    setList([...list, toastprops]);
  };
  // setList(toastprops);
  return (
    <div className="App-header">
      {buttons.map((button) => {
        return (
          <button
            className="btn"
            onClick={() => {
              setToastProps(button.type);
            }}
          >
            {button.label}
          </button>
        );
      })}
      {/* <Notification list={list} /> */}
    </div>
  );
}

export default App;
