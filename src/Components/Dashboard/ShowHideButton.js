import React from "react"; //import React Component
import "../../index.css";
import { Button } from "reactstrap";

// This component renders a button that shows or hides the school card view
export default function ShowHideButton(props) {
  if (props.show) {
    return (
      <Button
        type="button"
        id="card-toggle"
        className="btn btn-success"
        onClick={props.handleClick}
      >
        Hide all schools
      </Button>
    );
  } else {
    return (
      <Button
        type="button"
        id="card-toggle"
        className="btn btn-success"
        onClick={props.handleClick}
      >
        Show all schools
      </Button>
    );
  }
}
