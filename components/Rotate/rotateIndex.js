import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  ButtonWrapper,
  ToggleIcon
} from "./styles";

const Collapsible = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible">
      <ButtonWrapper className="toggle" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="my_header" style={{paddingBottom: 25, fontSize: '20px', cursor: "pointer"}}>Best foods</h3>
        <ToggleIcon  active={isOpen} ><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></ToggleIcon>
      </ButtonWrapper>
      <div className={isOpen ? "content show" : "content"}>{props.children}</div>
    </div>
  );
};

export default Collapsible;