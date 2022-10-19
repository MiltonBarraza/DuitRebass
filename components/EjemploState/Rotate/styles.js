import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faSearch } from "@fortawesome/free-solid-svg-icons";

const ButtonWrapper = styled.div`
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;

  &:hover {
    font-size: 30px;
  }
`

const ToggleIcon = styled.i.attrs(
  (props) => ({})
)`
  color: rgb(77, 77, 77);
  font-size: 30px;
  position: relative;
  cursor: pointer;
  transition: transform 0.25s ease 0s;
  
  //Rotate the icon if active is true, that is when the icon is open

  ${(props) =>
    props.active &&
    `
      transform: rotateX(180deg);
    `}
`;

export {
  ToggleIcon,
  ButtonWrapper
}