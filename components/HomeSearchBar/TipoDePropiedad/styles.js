//Hacer que el elejido no aparezca como opcion

import { Box } from "rebass"
import styled from "styled-components"

const ContenedorTipoDePropiedad = styled(Box)`
  width: 100%;
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 10px;
  outline: none !important;
`;

const customStyles = {
  container: (base) => ({
    ...base,
    width: "100%",
    transition: "box-shadow 0.3s ease-in-out",
    borderRadius: "10px",
    height: "35px",
    position: "relative",
    marginBottom: "18px"
  }),

  control: (base, state) => ({
    ...base,
    border: "none",
    boxShadow: "none",
    height: "35px",
    minHeight: "35px",
    borderRadius: state.selectProps.menuIsOpen ? "10px 10px 0 0" : '10px',
    transition: "none",
    border: "1px solid #e0e0e0",
    borderColor: "transparent",

    "&:hover": {
      borderColor: "#e0e0e0",
    }
  }),

  singleValue: (base) => ({
    ...base,
    color: "#888",
    marginBottom: "5px",
  }),

  input: (base) => ({
    ...base,
    color: "transparent",
  }),

  indicatorSeparator: () => {
    return {
      display: "none",
    }
  },

  dropdownIndicator: (base, state) => ({
    ...base,
    color: "#888",
    transition: "all .2s ease",
    cursor: "pointer",
    padding: "1px 15px 8px 0",

    "svg": {
      transform: state.selectProps.menuIsOpen ? 'rotateX(180deg)' : 'rotate(0)',
    },

    "&:hover": {
      color: "#888", // ver si puedo hacer algo con es te hover, algo mas util.
    }
  }),

  valueContainer: (base) => ({
    ...base,
    fontSize: "15px",
    paddingLeft: "18px",
    cursor: "pointer",
  }),

  option: (base) => ({
    ...base,
    width: "99%",
    fontSize: "15px",
    lineHeight: "20px",
    padding: "7px 10px 7px 25px",
    transition: "0.2s ease-in-out", // Preguntar por que le saque el All
    cursor: "pointer",
    borderBottom: "1px solid #e0e0e0",
    color: "#707070",
    backgroundColor: "white",
    margin: "0 1px",

    "&:last-child": {
      borderRadius: "0 0 10px 10px",
    },

    "&:hover": {
      backgroundColor: "#e02e21",
      color: "white",
    }
  }),

  menu: (base) => ({
    ...base,
    marginTop: "0px",
    boxShadow: "0px 6px 5px -4px grey",
    borderRadius: "0 0 10px 10px; ",
    borderBottom: "1px solid #e0e0e0",
  }),

  menuList: (base) => ({
    ...base,
    paddingTop: "0",
    paddingBottom: "0",
  }),
};

export {
  customStyles,
  ContenedorTipoDePropiedad,
}