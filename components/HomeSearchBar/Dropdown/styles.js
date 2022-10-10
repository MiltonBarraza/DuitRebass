import Select from "react-select";
import styled from "styled-components";

const Barra = styled(Select)`
width: 100%;
transition: box-shadow 0.3s ease-in-out;
border-radius: 10px;
outline: none !important;
min-width: 250px;
height: 35px;
color: red;



> div {
    max-height: 35px;
    color: #888;
    min-height: 35px;
    border-radius: 10px;
    cursor: pointer;
}

`;

// #__next > main > div > div.styles__ContenedorSecundario-sc-ac89b278-3.lgqbvU.css-vurnku > div > div > div:nth-child(2) > div > div
export {
    Barra,
}