import React from "react"; //import React Component
import { Dropdown, DropdownButton } from "react-bootstrap";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

// This component takes in a list of sorting functions and renders as dropdown items
export default function SortDropdown(props) {
  return (
    <DropdownButton
      variant="success"
      title="Sort Cards"
      id="dropdown-basic"
      aria-labelledby="dropdownSortMenu"
    >
      <Dropdown.Item>
        <Button
          className="dropdown-item"
          id="alphabetical"
          aria-label="Sort alphabetically"
          onClick={props.sort[0]}
        >
          Alphabetical
        </Button>
      </Dropdown.Item>
      <Dropdown.Item>
        <Button
          className="dropdown-item"
          id="reverse-alphabetically"
          aria-label="Sort reverse alphabetically"
          onClick={props.sort[1]}
        >
          Reverse alphbetical
        </Button>
      </Dropdown.Item>
      <Dropdown.Item>
        <Button
          className="dropdown-item"
          id="large-wpc"
          aria-label="Sort by large waste per capita"
          onClick={props.sort[2]}
        >
          Greatest waste per capita
        </Button>
      </Dropdown.Item>
      <Dropdown.Item>
        <Button
          className="dropdown-item"
          id="small-wpc"
          aria-label="Sort by smallest waste per capita"
          onClick={props.sort[3]}
        >
          Least waste per capita
        </Button>
      </Dropdown.Item>
    </DropdownButton>
  );
}